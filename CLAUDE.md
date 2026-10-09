# CLAUDE.md — poetry-cam-www

The Poetry Cam **homepage** (marketing site), served at **cam.digilyze.com**
(`public/CNAME`). Rebuilt on **Astro** (static, bilingual DE/EN). Replaced the
former HTML5 UP "Stellar" template.

## Stack & build

- **Astro 5**, TypeScript, `output: 'static'`. No UI framework; near-zero client JS
  (only the theme-toggle and lazy images).
- Dev: `npm run dev` · Build: `npm run build` · Preview: `npm run preview`.
- `predev`/`prebuild` run `build:tokens` (see Design tokens).
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages. Pages
  source must be set to **GitHub Actions**. `public/CNAME` keeps the domain.

## Structure

```
src/
  pages/            thin per-locale routes (DE at /, EN at /en) → render a view
  views/            page bodies: Landing, StoryView, UseCaseView, TeilenView,
                    HessenView, ImpressumView, DatenschutzView
  layouts/Base.astro  <head>/SEO/theme/header/footer shell
  components/       Header, Footer, Nav bits, Seo, Section, Icon, PoemCard,
                    TimelineItem, UseCaseCard, Gallery, ThemeToggle, LangSwitch
  i18n/             utils.ts (locale routing) + content.ts (landing + UI copy, de/en)
  data/             timeline.ts, usecases.ts, poems.ts, hessen.ts (typed content, per locale)
  lib/images.ts     the ONLY place source images are imported (astro:assets)
  images/           source images (optimized at build)
  styles/           global.css + tokens.css (GENERATED, gitignored)
  scripts/          build-tokens.mjs, sync-tokens.mjs
public/             CNAME, favicon, robots.txt, /images (og image), /files (PDF) — served as-is
```

- **i18n:** `astro.config.mjs` sets `locales: ['de','en']`, default `de`,
  `prefixDefaultLocale: false`. DE lives at `/…`, EN at `/en/…`. Add copy in
  `src/i18n/content.ts` (+ `src/data/*` for timeline/use-cases/poems), never in
  components. `Seo.astro` emits canonical + `hreflang` alternates.
- **Adding an image:** drop it in `src/images/`, import it in `src/lib/images.ts`
  under a key, reference that key from `src/data/*`. Never ship large images from
  `public/` — they bypass optimization (the header logo is `src/images/logo.png`,
  imported directly in `Header.astro`).

## Design tokens (IMPORTANT)

Colors/radii/fonts come from the shared **`../poetry-cam-design/tokens.json`**
(the `web` surface). Pipeline:

1. `npm run sync-tokens` copies the canonical file → `src/design/tokens.json`
   (committed; CI has no sibling repo).
2. `build:tokens` (auto-runs pre dev/build) generates `src/styles/tokens.css`
   (`:root` custom props + light/dark). **Do not edit tokens.css by hand.**

Style everything through `var(--color-*/--font-*/--radius-*)`. The look is
"Poetic Print" (warm paper, ink, patent-stamp accent, serif headings/poems, sans
UI, mono for data) with real light/dark theming.

- **To change a color, change the canonical token** in `../poetry-cam-design`
  (bump `meta.version` per its DESIGN.md), then `sync-tokens` here. Don't patch
  only the vendored copy — that reintroduces drift.
- **One local exception:** `--on-accent` in `global.css` (text on accent fills,
  e.g. primary buttons). The accent is dark oxblood in light mode but light clay
  in dark mode, so the text flips light→dark. Candidate to promote to a token.
- **Theme overrides & specificity:** never add broad element rules like
  `:root[data-theme='dark'] a {…}` — they outrank component classes (`.btn`) and
  broke button text once. Prefer theme-aware tokens/vars over theme-scoped rules.

## Accessibility & quality baseline

Lighthouse (mobile) is **100/100/100/100** on `/` and `/story/` as of 2026-08-23.
Keep it there: small text needs ≥4.5:1 (the web `brand` token was darkened to
`#675f52` for this), no heading-level skips (timeline titles are `h2`), check both
themes after any color change. Security-header audits (CSP/HSTS/COOP) can't be
fixed on GitHub Pages — informative only.

## Sibling repos (separate git repos, one level up)

`../poetry-cam` (device, PyQt5) · `../poetry-cam-server` (PHP 48h share pages) ·
`../poetry-cam-design` (**canonical design tokens** — the source of truth). Since
2026-08-24 all three surfaces share the warm-paper family (web/share themed
light/dark; device single-theme). Route visual changes through the shared tokens,
never by hand-editing another repo's compiled output. See
`design-system/STYLEGUIDE.md` (historical proposal, superseded).

## Content notes / to confirm before launch

- Copy uses the **"Sie"** register; EN is a translation of the DE — review tone.
- **Impressum/Datenschutz are templates** with `[bracketed]` placeholders (full
  postal address) — complete them and have them legally reviewed before publishing.
- Patent wording is **"zum Patent angemeldet"** (pending), publication 12.11.2026.
- Sharing/audio are featured as live capabilities; confirm the device auto-upload
  is wired end-to-end before implying a fully automatic flow.
- Only one real example poem is included; add more (with photos) to `src/data/poems.ts`.
- **`/hessen`** is an outreach landing page for Hessen's ministry/schools (new subject
  "KI und Digitale Welt" from 2027/28). Not in the main nav; linked from `/bildung`.
  Its privacy claims mirror the device **school profile** (`../poetry-cam/docs/DEVICE_PROFILES.md`)
  — re-check them when that changes. The listed school documents (AVV, DSFA, TOM, consent
  template) are announced as "in Erarbeitung mit Pilotschulen" and don't exist yet.
- No LinkedIn/social embed (privacy). Re-add as click-to-load if wanted (and
  restore the corresponding Datenschutz clause).
