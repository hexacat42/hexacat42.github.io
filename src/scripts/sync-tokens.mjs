// Dev convenience: copy the canonical tokens from the sibling design repo into
// this repo's committed copy. The build reads the COMMITTED copy (the sibling
// repo is not present in CI), so run this locally when tokens change, then
// commit src/design/tokens.json.
import { copyFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, '../../../poetry-cam-design/tokens.json');
const dest = resolve(here, '../design/tokens.json');

if (!existsSync(src)) {
  console.error(`[sync-tokens] canonical source not found: ${src}`);
  console.error('[sync-tokens] Is ../poetry-cam-design checked out next to this repo?');
  process.exit(1);
}
copyFileSync(src, dest);
console.log(`[sync-tokens] ${src} -> ${dest}`);
