// Generate src/styles/tokens.css from the committed src/design/tokens.json.
// Consumes the `web` surface (light/dark colors) + `core` (font/radius).
// Do not hand-edit tokens.css — change tokens.json (canonically in the
// poetry-cam-design repo), re-sync, and regenerate.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const tokensPath = resolve(here, '../design/tokens.json');
const outPath = resolve(here, '../styles/tokens.css');

const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));
const web = tokens.surfaces?.web?.color ?? {};
const core = tokens.core ?? {};

const colorVars = (theme) =>
  Object.entries(web)
    .map(([name, val]) => `  --color-${name}: ${val[theme]};`)
    .join('\n');

const staticVars = () => {
  const lines = [];
  for (const [name, val] of Object.entries(core.font ?? {})) lines.push(`  --font-${name}: ${val};`);
  for (const [name, val] of Object.entries(core.radius ?? {})) lines.push(`  --radius-${name}: ${val};`);
  return lines.join('\n');
};

const css = `/* GENERATED from src/design/tokens.json (surface: web) — DO NOT EDIT.
   Regenerate: npm run build:tokens. Source of truth: poetry-cam-design/tokens.json
   (version ${tokens.meta?.version ?? '?'}, updated ${tokens.meta?.updated ?? '?'}). */

:root {
${staticVars()}
${colorVars('light')}
}

@media (prefers-color-scheme: dark) {
  :root {
${colorVars('dark')}
  }
}

/* Explicit theme toggle — must win over the media query in both directions. */
:root[data-theme='light'] {
${colorVars('light')}
}
:root[data-theme='dark'] {
${colorVars('dark')}
}
`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, css);
console.log(`[build-tokens] wrote ${outPath} (${Object.keys(web).length} colors, web surface)`);
