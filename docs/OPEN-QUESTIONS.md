# Open questions and to-dos

**As of 2026-11-03.** One list for everything still open across the website, the
Hessen outreach, the loan kit and the privacy notice. Details live in the linked
handoffs. Tick items off here when they're done.

## Before the first camera is handed out

- [x] **Device: connectivity check to cam-assets.** Switch from `8.8.8.8:53` (Google *Done in v0.1.13 (2026-11-04), running on camera 01.*
  DNS) to `cam-assets.digilyze.com:443`. The live privacy text ("verbindet sich nur
  mit OpenAI, ElevenLabs und cam-assets.digilyze.com") already assumes it.
  → `docs/handoffs/device-privacy.md` §3
- [ ] **OpenAI account (operator):** accept the Data Processing Addendum. The privacy
  page names its Standard Contractual Clauses as the transfer basis (OpenAI is not
  DPF-certified). Also: which organisation owns the server project; zero data
  retention yes/no.
- [ ] **DomainFactory account (operator):** data-center country; AVV signed;
  webspace backup retention (may hold shares past 48 h); access-log retention and IP
  anonymisation. → `docs/handoffs/server-legal-links.md` §6
- [ ] **Charge time and runtime** of the built-in battery (11.1 V, 1300 mAh): measure,
  then add to the quick-start guide (`docs/hessen/kurzanleitung/`) and to
  `/hessen/anleitung` (`src/data/hessenAnleitung.ts`, "Vor der Stunde").
- [ ] **Handover and return record** for the loan kit (listed on `/hessen` and in the
  printed guide, doesn't exist yet). → `docs/hessen/handoff-dev-team.md`, "Loan kit"
- [ ] **PIN handover** separate from the case; set the camera to **German** before
  delivery.

## Owner decisions

- [ ] **Event mode:** storage period for captures at events. Today the development
  profile keeps everything on the SD card forever. Recommendation: event profile,
  RAM-only by default like school, optional auto-delete (e.g. 7 days). The privacy
  notice covers school mode only until this is decided.
  → `docs/handoffs/device-privacy.md` §1
- [ ] **Exports on the operator's PC** (`data/pi-export/`): retention period.
- [ ] **Cloned ElevenLabs voices:** any cloned from a real person? Consent?
- [ ] **ElevenLabs plan:** `enable_logging=false` needs Enterprise. Upgrade or accept.
- [ ] **Mobile hotspot** in the loan kit, for schools whose Wi-Fi blocks the camera?
- [ ] **Phenol-free thermal paper**; poems per roll (are 2 rolls enough?).
- [ ] **Loan agreement** (damage, insurance, return). **[legal]**

## Legal review

- [ ] **Impressum and Datenschutz** (`src/views/ImpressumView.astro`,
  `DatenschutzView.astro`): have both reviewed. Legal bases and the school-as-controller
  sentence are drafts.
- [ ] **Milestone S1 school document pack** (AVV, TOM/BSI, Verzeichnis text, DSFA,
  parent info + consent). Announced on `/hessen` as "in Erarbeitung".
  → `docs/hessen/handoff-dev-team.md`

## Hessen outreach

- [ ] **Cover letter** (`docs/hessen/anschreiben-kultusministerium.md`): user does the
  layout. Recipient: Referat IV.2 (Digitale Bildung, KI im Schulbereich,
  Medienbildung), Frau Anja Reul (head of unit per the org chart of 1 Sep 2026;
  confirm by phone, 0611 368-0), Luisenplatz 10, 65185 Wiesbaden; copy to
  Abteilungsleiterin Katharina Heinen. Salutation still "Sehr geehrte Damen und Herren".
  Commit the version as sent.
- [ ] Confirm: teacher training length (~90 min), Lehrkräfteakademie accreditation
  ("angestrebt"), the materials listed as planned in `/hessen/konzept` §10–11.
- [ ] Name the Munich school in the letter or on `/hessen` only with its consent.

## Device team (from their reply)

**Device PR #90** (not merged or released yet) makes two sentences in `/datenschutz` §3 true;
details in `../poetry-cam/docs/handoffs/www-device-privacy.md` points 3 and 6.

- [x] **Release with PR #90 on every school camera** before hand-out. Until then: *v0.1.13 on camera 01 (2026-11-04); both §3 sentences now hold there. Every further school camera needs v0.1.13 and the school setup before hand-out.*
  - "verbindet sich nur mit OpenAI, ElevenLabs und cam-assets.digilyze.com" is not yet true:
    up to 0.1.12 the online check goes to Google DNS (8.8.8.8);
  - "Auf der Speicherkarte bleiben nur technische Angaben ohne Inhalte" is not yet true:
    up to 0.1.12 the share link is saved on the card and opens the page for 48 h.
- [x] ~~OS-level connections~~ — decided 2026-11-03, also in PR #90: in the school profile
  NetworkManager's connectivity check is off, and the clock is set from the time
  cam-assets.digilyze.com sends (no more `debian.pool.ntp.org`). With that release **and the
  school setup re-run**, "verbindet sich nur mit …" holds; no extra line needed.
- [x] **Device team confirms** on a live camera which connections it actually makes, and tells *Confirmed 2026-11-04 on camera 01: only OpenAI and the local router seen; share link stays in RAM.*
  www when PR #90 is on the school cameras.
- [ ] **[legal] Legal basis for sharing in school mode** (§2: "Einwilligung an der Kamera"): in
  school mode a teacher switches sharing on and no child is asked. The basis there is the
  parents' written consent collected by the school (§ 12 Abs. 4 SchDSV). Have the wording
  checked.

Reply: `../poetry-cam/docs/handoffs/www-device-privacy.md` (not committed there yet).

- [ ] TTS timeout (they'll add it).
- [ ] Device checks on camera 01: swap and journal still in RAM; OS-level network
  calls (timesyncd, NetworkManager check, apt).
- [x] Tell www when the connectivity check ships. *Done 2026-11-04.*

## Housekeeping

- [ ] Delete merged branches `datenschutz-dienste`, `datenschutz-kamera` (local and on
  GitHub) and the old `master`, `codex/*` remote branches — only with owner OK.
- [ ] Cross-session messaging: a local session also claimed the name
  `poetry-cam-dev` (the real device session runs over Remote Control). Check before
  messaging that name again.
