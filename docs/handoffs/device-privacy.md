# Handoff to the device team: the camera in the privacy notice

**From:** poetry-cam-www · **Date:** 2026-11-03 · **Status:** open

## Why

`/datenschutz` gets a third section, "Die Poetry Cam" (draft on branch
`datenschutz-dienste`). The facts below come from a read of `../poetry-cam`
at `2950a77` (0.1.12). Nothing was run on a device. Please **confirm or
correct** them, and answer the open points. This is not legal advice.

## Facts used in the draft (please confirm)

1. **Poem:** a downscaled copy of the photo (fit to 768×576, about 768×432,
   JPEG q80, no EXIF) and the prompt go to OpenAI Responses (`gpt-5-nano`,
   `store: false`, `llm_openai.py:162`). No device id, location or camera name.
2. **Checks:** the same downscaled photo and the poem text go to
   `omni-moderation-latest` (`moderation.py`). No `store` setting exists there.
3. **Read-aloud:** only the shortened poem text (with audio tags) goes to
   ElevenLabs (`eleven_v3`). Never the photo or the prompt.
4. **No face detection, no emotion inference.** Motion detection only for
   sleep.
5. **School profile:** content only on the RAM disk, wiped at the next capture,
   at app start and on stop. On the card only metadata JSON, with `prompt_text`
   blanked.
6. **Printout:** poem, prompt, date and time, token count, character count,
   voice name, and the share QR/URL when shared. No camera name or id.
7. **Share upload:** the original photo (not the downscaled one), the poem,
   the audio and the prompt text.

## Open points

### 1. Storage at events (high, owner decision needed)

There is no event profile yet (`DEVICE_PROFILES.md:21`). A camera at an event
runs as **development**, which keeps every photo, poem, prompt and audio on the
SD card **forever** (`SECURE_MODE.md:39-45`). That can't go into a privacy
notice as it is.

Recommendation, to agree with the owner:

- [ ] Build the **event profile**. Default: same as school (RAM only).
- [ ] If keeping captures at an event is wanted (e.g. a later gallery for the
  host), make it an explicit setting with **automatic deletion** after a
  fixed period, e.g. 7 days. Then the privacy text names that period.
- [ ] Until then, use the **school profile at public events**, not development.

### 2. ElevenLabs logging (medium)

The TTS call sets no privacy option. ElevenLabs offers
`enable_logging=false` (zero-retention mode) on some plans.

- [ ] Check whether the account's plan supports it. If so, set it on
  `text_to_speech.convert`, and tell www.
- [ ] Add an explicit timeout to the TTS call (none is set today).

### 3. Connectivity check to Google DNS (low)

`pi_platform.py:38-48` opens a TCP connection to `8.8.8.8:53`. That tells
Google the camera's network address each time.

- [ ] Consider checking `cam-assets.digilyze.com` or the AI provider instead,
  so no third party is contacted just for this. Otherwise www lists Google
  in the privacy text.

### 4. Exports on the operator's PC (low)

`fetch_results_from_linux.sh` and the switch into school copy all captures
to `data/pi-export/` on the operator's PC, with no retention.

- [ ] Define a retention (e.g. delete after review, at most 30 days), or
  document why they are kept.

### 5. Things only the device can tell

- [ ] Are swap writeback and the volatile journal confirmed on every deployed
  camera?
- [ ] Do OS-level services contact anything else (timesyncd, NetworkManager
  connectivity check, apt)?
- [ ] Are any ElevenLabs voices cloned from a real person? If so, from whom,
  and is there consent?

## Back to www

When 1–4 are decided, tell www. The draft has a placeholder
"[FRIST – Entscheidung offen]" for the event period, and the page goes live only
after that is filled in.
