# Kurzanleitung (Leihkoffer)

A4 sheet, printed on both sides and folded once to an A5 booklet with 4 pages.
It goes into the loan kit (see the "Leihpaket" section on `/hessen`).

- `kurzanleitung.html`: source. Yellow `.todo` spans are still to fill in.
- `kurzanleitung.pdf`: rendered version (re-render after every change).
- `kamera-rueckseite.jpg` (976×768) and `kamera-seite.jpg` (976×848): photos
  for page 2 (back with screen and yellow photo button; right side and front).
  The numbered marks are SVG overlays in the HTML, in each photo's pixel
  coordinates. The silver knob on top is the volume control, not the shutter.
- `qr-hessen.svg`: QR code for https://cam.digilyze.com/hessen/. Point it to
  the online guide once that exists.

## Printing

A4 **landscape**, **double-sided, flip on the short edge**, scale 100 % /
actual size. Fold in the middle (marks at top and bottom).

Sheet front: page 4 | page 1 (cover). Sheet back: page 2 | page 3.

## Rendering the PDF

`render-pdf.mjs` uses Playwright's Chromium. Run it from a folder where
`playwright` is installed, or open the HTML in Chrome and print to PDF with
"Background graphics" on and margins "None".

## Keep in sync

The screen texts are quoted from the German catalogs in
`../poetry-cam/src/poetry_cam/i18n/de/*.json` (device 0.1.12). Re-check them,
and the privacy box on page 3, when the device or the providers change.
