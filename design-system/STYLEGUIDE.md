> **STATUS (2026-08-23): HISTORICAL PROPOSAL — SUPERSEDED / PARTIALLY REVERTED.**
> This cross-repo "Poetic Print" unification was applied to all three surfaces,
> then **reverted** in `poetry-cam` and `poetry-cam-server`. Those repos now own
> their own local tokens (`poetry-cam/…/theme_tokens.json`,
> `poetry-cam-server/design/tokens.json`) and **diverge** (device = navy,
> server = warm paper). No shared canonical token source exists yet — see
> `../CLAUDE.md` ("Design system — current state") and
> `poetry-cam-server/docs/DESIGN.md`. Keep this document only as a reference for
> the paper/serif direction; it is **not** authoritative for any repo.

---

# Poetry Cam — "Poetic Print" Design System

One warm, literary identity across all three surfaces: the **homepage**
(`poetry-cam-www`), the **camera app** (`poetry-cam`, PyQt5), and the **share
page** (`poetry-cam-server`, PHP). A visitor should feel the same hand whether
they hold the printed poem, tap the camera, or open the share link.

> Visual reference (rendered): the published style-guide artifact.
> Token source of truth: [`tokens.css`](./tokens.css) (web/server) and the
> `_COLORS` snippet in [`app-colors.py`](./app-colors.py) (camera app).

---

## Principles

1. **Warm paper, not cold grey.** Every neutral is biased warm — the tone of
   fresh thermal paper. Never a pure grey, never a purple/blue wash.
2. **One stamp of red.** A single patent-stamp oxblood accent (`#9d3b2f`) for
   links, primary actions, and section marks. It ties to the real DPMA patent
   and reads as a proof mark — used sparingly, never as a fill background for
   large areas.
3. **Three voices of type.** Serif for the poem (it *is* literature), humanist
   sans for the interface, monospace for the machine (timestamps, IDs, the
   receipt metadata). Mono is also the connective "printed" texture.
4. **The receipt is the motif.** Perforation/dashed rules, tabular timestamps,
   and the `Stil / Form / Zeit` metadata strip are the shared structural device,
   grounded in the thermal printer.
5. **Semantic ≠ accent.** Status colors (success/warning/error) are separate
   from the oxblood accent and are used only to signal state.

---

## Color tokens

### Light (default)

| Token         | Hex / value          | Role                              |
|---------------|----------------------|-----------------------------------|
| `paper`       | `#e7e1d4`            | page ground / fallback            |
| `card`        | `#fbf8f2`            | surface                           |
| `poem-bg`     | `#f1ebdd`            | poem block / inset                |
| `ink`         | `#1c1a15`            | primary text, headings            |
| `ink-soft`    | `#5b5346` / `#6b6154`| body / muted text                 |
| `ink-faint`   | `#8a8073`            | faint captions                    |
| `brand-gray`  | `#857c6f`            | eyebrows, labels                  |
| `stamp`       | `#9d3b2f`            | accent · links · primary CTA      |
| `stamp-ink`   | `#7d2f26`            | accent as text / hover on light   |
| `rule`        | `rgba(28,26,21,.12)` | hairline dividers                 |
| `rule-strong` | `rgba(28,26,21,.26)` | perforation / dashed rules        |

### Dark

| Token       | Hex        | Token        | Hex        |
|-------------|------------|--------------|------------|
| `paper`     | `#131109`  | `ink`        | `#f1ece1`  |
| `card`      | `#211d15`  | `ink-soft`   | `#bcb4a4`  |
| `poem-bg`   | `#191510`  | `brand-gray` | `#a49a8a`  |
| `stamp`     | `#d97a5f`  | `stamp-ink`  | `#e79880`  |

### Semantic (both themes tune lightness)

| Token     | Light     | Dark      | Meaning                 |
|-----------|-----------|-----------|-------------------------|
| `success` | `#4f7a3f` | `#7ba362` | printed / done / online |
| `warning` | `#b5852a` | `#d6a94a` | expiring / caution      |
| `error`   | `#b1442f` | `#e0795f` | failure                 |

---

## Typography

| Role          | Family                                                        | Weight | Notes                          |
|---------------|--------------------------------------------------------------|--------|--------------------------------|
| Display / H*  | `Georgia, "Iowan Old Style", "Palatino Linotype", serif`     | 400    | poems & headings; balance      |
| Body / UI     | `-apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial` | 400/600| system sans — **no webfont**   |
| Data / meta   | `ui-monospace, "SF Mono", Menlo, "DejaVu Sans Mono", mono`   | 400    | tabular-nums for aligned digits|

- **No external webfont.** Georgia + a system-sans stack means zero CDN
  dependency and no Google Fonts GDPR exposure (relevant for a DE-hosted site).
  An optional future upgrade is a licensed display serif (e.g. Source Serif,
  Freight Text) — self-hosted only.
- Slight negative tracking on headings (`-0.015em`); poems at `line-height: 1.7`.

---

## Shape & spacing

- Radius scale: `8px` (controls) · `12px` (cards) · `18px` (large surfaces).
- Buttons: **primary** = stamp fill, paper text; **secondary** = ink outline,
  transparent; **utility** = ink fill. Height ~2.75em.
- Dividers between "chapters" use the **dashed/perforation** rule
  (`rule-strong`), hairline `rule` for minor separation.

---

## Per-repo mapping

| Surface   | Tokens live in                                  | Adoption                                                                 |
|-----------|-------------------------------------------------|-------------------------------------------------------------------------|
| Share     | `public/assets/app.css` `:root`                 | Reference impl. Adopt stamp accent + shared buttons; retune neutrals.    |
| Camera    | `src/poetry_cam/ui/screens/shell.py` `_COLORS`  | Swap navy/blue → paper/ink/stamp; poems in serif; keep touch radii.      |
| Homepage  | `assets/sass/libs/_vars.scss` `$palette/$font`  | Reskin Stellar → recompile `main.css`. **Done.**                        |

### Homepage build

The homepage is HTML5 UP "Stellar". Colors/fonts are driven by the SASS palette;
after editing `assets/sass/**`, recompile:

```bash
npx sass assets/sass/main.scss assets/css/main.css --no-source-map --style=expanded
```

`assets/css/custom.css` (loaded after `main.css`) holds gallery/spotlight/social
styles and a few token literals kept in sync by hand.

---

## Status

- **Homepage** — reskinned + verified (desktop/mobile/story). Google Fonts
  removed. Dark mode is a follow-up (Stellar ships light-only).
- **Share page** — pending: adopt stamp accent + shared button spec.
- **Camera app** — pending: palette + serif poems.
