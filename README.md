# poetry-cam-www

The Poetry Cam marketing homepage — **Astro**, static, bilingual (DE / EN),
served at **cam.digilyze.com**.

## Develop

```bash
npm install
npm run sync-tokens   # pull design tokens from ../poetry-cam-design (optional; a copy is committed)
npm run dev           # http://localhost:4321
npm run build         # → dist/
npm run preview
```

Design tokens come from `../poetry-cam-design/tokens.json` (web surface) and are
generated into `src/styles/tokens.css` at build time. See `CLAUDE.md` for the
full architecture (i18n, content model, tokens, deploy).

## Hessen outreach

`/hessen` (landing page) and `/hessen/konzept` (teaching concept, printable via the
browser) target Hessen's new subject "KI und Digitale Welt". Compliance research and
the open work for the device/server teams live in `docs/hessen/`.

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`. Set the repository's **Pages → Source** to
**GitHub Actions**. The custom domain is kept via `public/CNAME`.
