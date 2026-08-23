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
                    ImpressumView, DatenschutzView
  layouts/Base.astro  <head>/SEO/theme/header/footer shell
  components/       Header, Footer, Nav bits, Seo, Section, Icon, PoemCard,
                    TimelineItem, UseCaseCard, Gallery, ThemeToggle, LangSwitch
  i18n/             utils.ts (locale routing) + content.ts (landing + UI copy, de/en)
  data/             timeline.ts, usecases.ts, poems.ts (typed content, per locale)
  lib/images.ts     the ONLY place source images are imported (astro:assets)
  images/           source images (optimized at build)
  styles/           global.css + tokens.css (GENERATED, gitignored)
  scripts/          build-tokens.mjs, sync-tokens.mjs
public/             CNAME, favicon, /images (og, logo), /files (PDF) — served as-is
```

- **i18n:** `astro.config.mjs` sets `locales: ['de','en']`, default `de`,
  `prefixDefaultLocale: false`. DE lives at `/…`, EN at `/en/…`. Add copy in
  `src/i18n/content.ts` (+ `src/data/*` for timeline/use-cases/poems), never in
  components. `Seo.astro` emits canonical + `hreflang` alternates.
- **Adding an image:** drop it in `src/images/`, import it in `src/lib/images.ts`
  under a key, reference that key from `src/data/*`.

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

## Sibling repos (separate git repos, one level up)

`../poetry-cam` (device, PyQt5) · `../poetry-cam-server` (PHP 48h share pages) ·
`../poetry-cam-design` (**canonical design tokens** — the source of truth). The
three product surfaces intentionally diverge (device navy; web/share warm paper);
route visual changes through each repo's own tokens, never by hand-editing
another repo's compiled output. See `design-system/STYLEGUIDE.md` (historical
proposal, superseded).

## Content notes / to confirm before launch

- Copy uses the **"Sie"** register; EN is a translation of the DE — review tone.
- **Impressum/Datenschutz are templates** with `[bracketed]` placeholders (full
  postal address) — complete them and have them legally reviewed before publishing.
- Patent wording is **"zum Patent angemeldet"** (pending), publication 12.11.2026.
- Sharing/audio are featured as live capabilities; confirm the device auto-upload
  is wired end-to-end before implying a fully automatic flow.
- Only one real example poem is included; add more (with photos) to `src/data/poems.ts`.
- No LinkedIn/social embed (privacy). Re-add as click-to-load if wanted (and
  restore the corresponding Datenschutz clause).
