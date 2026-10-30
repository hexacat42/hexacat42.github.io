// Renders kurzanleitung.html to kurzanleitung.pdf (A4 landscape, 2 pages).
// Needs Playwright with Chromium: run from a folder where `playwright` is installed,
// e.g. `node /path/to/render-pdf.mjs`, or set CHROME_PATH to a Chromium binary.
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(dir, 'kurzanleitung.html')).href, { waitUntil: 'networkidle' });
await page.pdf({ path: path.join(dir, 'kurzanleitung.pdf'), preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log('wrote', path.join(dir, 'kurzanleitung.pdf'));
