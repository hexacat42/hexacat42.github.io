# Handoff to the server team: Impressum and Datenschutz links on cam-assets

**From:** poetry-cam-www · **Date:** 2026-11-03 · **Status:** done on both sides (2026-11-03): footer,
24-hour prompt deletion and 30-day log rotation live on cam-assets; the new `/datenschutz` with the
anchors is live. Only the operator checks in §6 remain (tracked in `docs/OPEN-QUESTIONS.md`).

## Why

The public pages on `cam-assets.digilyze.com` have no link to an imprint or a
privacy notice. Checked on 2026-11-03: `/example`, `/p/test` and the layout
(`src/View/templates/layout.php`) show only the "Poetry Cam" brand line, no
footer.

These pages are public, run by Digilyze GmbH, and process personal data:

- photos (often with people in them), poems and audio for 48 hours;
- prompts typed by visitors (kept 7 days as history, `prompt_retention_seconds`);
- a cookie on the prompt form (the one-time thanks ticket);
- server logs, and OpenAI moderation of photos, poems and prompts.

So two rules apply. This is general guidance, not legal advice:

- **§ 5 DDG:** the imprint must be easy to find and always reachable. A link
  to the main site's Impressum is enough, because the provider is the same.
- **Art. 13 DSGVO:** people must be told about the processing **when** the
  data is collected. On the prompt form that means before they submit.

The main site will host both texts, so the server only needs links.

## Server work

### 1. Footer on every public page

Add a small footer to `layout.php`, so it appears on every page that uses it:
share page (ready / pending / held / expired / unknown), example, prompt
pages and `/p/test`.

| Link text (de) | Link text (en) | Target (de) | Target (en) |
| --- | --- | --- | --- |
| Impressum | Imprint | https://cam.digilyze.com/impressum/ | https://cam.digilyze.com/en/impressum/ |
| Datenschutz | Privacy | https://cam.digilyze.com/datenschutz/#geteilte-seiten | https://cam.digilyze.com/en/datenschutz/#shared-pages |

- Pick the language from the page's language (`$lang`), as for the other strings
  (`src/View/Strings.php`).
- On the prompt pages, link Datenschutz to `#prompts` (en: `#prompts`) instead.
- Optional: make "Poetry Cam" in the footer a link to https://cam.digilyze.com/
  (en: `/en/`).
- Style it through the shared tokens (`tokens.css`), small and muted, like the
  footer on the main site.

### 2. Keep `Referrer-Policy: no-referrer`

Share URLs contain the access token. With `no-referrer` (set in `App.php` and
`public/.htaccess`), clicking the new links does not send the share URL to
`cam.digilyze.com`. Please keep it, and don't add analytics or tracking to the
links.

### 3. A note on the prompt form

One line near the submit button:

- de: „Mit dem Absenden wird dein Prompt automatisch geprüft und an die Kamera
  geschickt. Mehr dazu im [Datenschutz](…#prompts)."
- en: "When you send it, your prompt is checked automatically and sent to the
  camera. More in the [privacy notice](…#prompts)."

Use the page's "du" register for children, as the other prompt texts do.

### 4. Facts for the privacy text

The www side will rewrite the privacy section for the share and prompt
service. Please confirm or correct these points (one line each is fine):

1. **Hosting:** DomainFactory. In which country is the data center? Is there a
   data processing agreement (AVV) with DomainFactory?
2. **Shared moments:** what exactly is stored (photo, poem, audio, language,
   times, device reference)? Is it all deleted after 48 hours, including
   backups and the operational log?
3. **Prompts:** text kept 7 days as history. Anything else stored with it
   (time, device, language, moderation result)? Is the IP address stored or
   hashed for rate limits, and for how long?
4. **Cookie:** name, purpose and lifetime of the thanks ticket. Any other
   cookies?
5. **Logs:** what goes into `var/log/app.log` and the web server's access log
   (IP address?), and how long are they kept?
6. **OpenAI moderation:** which data is sent (photo, poem, prompt), with
   `store: false`? Which OpenAI account, and is there a DPA?
7. **Admin access:** who can see shared moments or prompts, and how?

## WWW side (after the answers)

- Add the anchors `#geteilte-seiten` / `#shared-pages` and `#prompts` to
  `/datenschutz` and `/en/datenschutz`.
- Rewrite "Geteilte Poetry-Cam-Seiten". The current text says the service
  collects **no personal data**. That is not accurate: photos of people,
  prompts and IP addresses are personal data.
- Add a section for the prompt service.
- Then tell the server team the anchors are live, so the links can go out.

Please tell the www side when the footer is deployed, or if a page is
not covered by `layout.php`.

## 5. Delete prompts within 24 hours of expiry (decided 2026-11-03)

Today an expired or rejected prompt stays as a "history" file for 7 more days
(`prompt_retention_seconds = 7 * 24 * 3600`, `PromptCleaner`). Nothing reads
that history: no admin page, no API, no tool. Rejected prompts are the ones
most likely to contain personal data, which the check screens for.

Decision (owner): **option 1, delete soon after the 8-hour lifetime.**

- [ ] Set `prompt_retention_seconds` to **at most 24 hours** (e.g. `0`, so the
  next cleanup run removes it, or `24 * 3600` as an upper bound). Make sure the
  cleanup job runs often enough that no prompt survives more than 24 hours past
  its expiry. Rejected prompts included.
- [ ] Keep the device's current active prompt untouched, as today.
- [ ] Update `CONTRACT.md` §27.5 ("kept only as history") and the config
  comment.
- [ ] Tell the www side when it is deployed.

The new privacy text (branch `datenschutz-dienste` in poetry-cam-www) already
says: "Ein angenommener Prompt gilt 8 Stunden für die Kamera. Danach, und
ebenso nach einer Ablehnung, wird er spätestens nach 24 Stunden gelöscht."
It goes live only after this change is deployed.

## 6. Answers to the server reply (2026-11-03)

Re: `../poetry-cam-server/docs/handoffs/www-legal-links.md`. Thanks, the facts
are now in the privacy draft (branch `datenschutz-dienste`).

- **Footer first:** yes, please ship it now, including the error pages. The
  imprint link matters more than the anchors.
- **Test page line:** agreed as proposed (de and en).
- **App log:** 30 days is fine. The draft already says "wird nach 30 Tagen
  gelöscht", so please confirm once the rotation is live.
- **Prompt retention: please read §5.** Your reply describes the current 7 days
  plus 8 hours; the owner decided on deletion within 24 hours of expiry.
  One addition to §5: once a camera's current prompt has expired (8 hours),
  please delete it within 24 hours too, instead of keeping it until a newer one
  replaces it. It no longer applies to the camera, so there is no reason to keep it.
  If something on the device still needs the pointer, keep the pointer, not the text.
- **Share page shows the prompt:** noted, now in the privacy text.

### Open for the operator (Digilyze GmbH, not the server team)

Check in the DomainFactory and OpenAI accounts, then tell www:

- [ ] DomainFactory: data-center country; AVV signed?
- [ ] DomainFactory: webspace backup retention (it may hold shares past 48 h).
- [ ] DomainFactory: access-log retention and whether IPs are anonymised.
- [ ] OpenAI: which organisation owns the server project; DPA accepted;
  zero data retention or not.

### Go-live order

1. Server: footer (links open the top of `/datenschutz` until step 3).
2. Server: §5 prompt deletion and the 30-day log rotation, then tell www.
3. www: merge `datenschutz-dienste` (anchors and the new text go live).
4. www tells server the anchors are live.
