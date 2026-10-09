# Handoff to the device and server teams: readiness for Hessian schools

**From:** poetry-cam-www · **Date:** 2026-10-09 · **Status:** open

## Why this note exists

The homepage now has an outreach page for Hessen's ministry and schools
(`/hessen`, new subject "KI und Digitale Welt" from 2027/28). The page makes
claims about the device and announces a set of school documents.

This note lists what still has to be built or written before a pilot or a
central ministry review (§ 83a Abs. 1 Nr. 1 HSchG) can succeed. The background
is in `compliance-research.md` (same folder). It is research, not legal advice:
get the items marked **[legal]** reviewed.

File references are from a read of `../poetry-cam` and `../poetry-cam-server`
on 2026-10-09.

## Milestone S1: school document pack (before the first pilot school)

The `/hessen` page says these documents are "being developed with the first
pilot schools". **None of them exist yet.** The school is the controller
(§ 4 SchDSV) and needs them before using the camera with photos of people.

- [ ] **AVV** (Art. 28 DSGVO) with a sub-processor list: AI provider(s), voice
  provider, share-server hosting.
- [ ] **TOMs / IT security concept** mapped to BSI IT-Grundschutz (§ 6 SchDSV).
  - device: IoT / embedded modules
  - share server: web server / web application modules
- [ ] **Text for the school's record of processing** (Art. 30). Use HBDI's
  sample format.
- [ ] **Pre-filled DSFA** (Art. 35). It is required once people are
  photographed (children, AI, third-country transfer).
- [ ] **Parent information (Art. 13) and consent form.**
  - Separate opt-ins: AI processing of photos with people / online sharing /
    audio.
  - Withdrawable, with a "no disadvantage" clause (§ 3, § 12 Abs. 4 SchDSV;
    § 22 KUG). **[legal]**
- [ ] **Outbound host list and update/patch policy**, for the Schulträger
  firewall and its IT service.

## Device team (`../poetry-cam`)

### 1. Moderate the generated poem on the device (high)

The server handoff `../poetry-cam-server/docs/handoffs/device-moderation.md`
§§ 1–3 still applies. I found no moderation call in `src/` as of today.

- Check the poem with `omni-moderation-latest` before printing.
- Map refusals and `response.incomplete` to a fallback poem.
- Cap the output length.

The `/hessen` page only claims moderation for class prompts and shared
content, which the server already does.

### 2. Make the sharing switch a real consent gate (high) [legal]

Today, school profile (`profile.py`: `sharing_allowed=True`,
`sharing_per_start=True`):

- sharing is off after every start;
- a teacher switches it on behind the PIN (`school_panels.py`, checkbox
  "Share online");
- the hint text explains only the restart behaviour.

**This is a good operational control, but it is not consent.**

- Under § 12 Abs. 4 SchDSV, publishing pupils' work needs **written parental
  consent per child**. The switch is per session, so after a teacher turns it
  on, every child's moment is shared.
- Suggested changes:
  - **Per-moment confirmation.** While sharing is on, ask before each upload:
    "Diesen Moment online teilen? Nur mit Einwilligung der Eltern." Default:
    No.
  - **Clearer switch label (German, plain):** "Online-Teilen erlauben: Foto,
    Gedicht und Audio sind 48 Stunden über den QR-Code öffentlich abrufbar.
    Nur einschalten, wenn für die Kinder eine schriftliche Einwilligung der
    Eltern vorliegt."
  - **Same wording in the one-time consent dialog** (`consent_dialog.py`,
    currently "I allow sharing captured moments online"). It should name what
    is shared, for how long, and that anyone with the link can see it.
- The kiosk texts on school devices are English
  (`SHARING_HINT`, consent dialog). Hessian classes need German.

### 3. Data minimisation on AI calls (high)

- Set **`store: false`** on the Responses call (`llm_openai.py`). The default
  keeps responses for 30 days.
- Make the LLM and TTS providers **configurable per device or profile**, so a
  school device can use an EU/German-hosted backend (see "Provider decision"
  below). `llm_factory.py` already selects providers.

### 4. Object-only mode (medium)

Add a profile option that tells the model to describe only the scene and
objects, and not to describe people. This lets pupils without consent take
part and lowers the DSFA risk. Ideally, also refuse or blur when a face fills
the frame.

### 5. No emotion inference about pupils (medium) [legal]

**The rule.** AI Act Art. 5(1)(f) bans AI systems that infer emotions of
natural persons in education institutions. It has been in force since
2 Feb 2025.

- Per the Commission's guidelines on prohibited practices, describing a
  **readily visible expression** ("a laughing face") is not emotion
  recognition.
- **Inferring what a person feels** ("the child seems sad and lonely") from
  their face is.

**Didactically, "how does the AI read feelings?" is a strong lesson.** Keep it
legal by pointing it at things that are not pupils:

- artworks
- illustrations, comics, emoji drawings
- animals

**Device and server work:**

- [ ] Default/fallback prompt and system message: in school mode, describe
  people's visible actions and expressions only, never their inner state or
  mood.
- [ ] Server prompt moderation: reject visitor prompts that ask how the person
  in the photo feels or what mood they are in (CONTRACT §27.5).
- [ ] Teacher material (see "Content and teaching"): the emotion lesson with
  non-pupil subjects.

### 6. AI transparency labels (medium)

These are needed under AI Act Art. 50, which applies since 2 Aug 2026 (marking
grace period until 2 Dec 2026).

- A printed line on every printout, e.g. "Gedicht von einer KI erstellt".
- A visible "KI" note on the device.
- Machine-readable marking of AI-generated text and audio on share-page assets
  (see server item 2).

### 7. Product law check (low, plan ahead) [legal]

Check the Cyber Resilience Act (reporting from 11 Sep 2026, full duties from
11 Dec 2027), the RED delegated act with EN 18031 (Wi-Fi), CE/EMC and the GPSR
(thermal printer) with a conformity expert.

## Server team (`../poetry-cam-server`)

1. **Emotion prompts:** add the moderation rule from device item 5.
2. **Art. 50 marking:** label share pages and assets as AI-generated, in text
   and metadata.
3. **Deletion documentation for the DSFA:** confirm EU hosting of the share
   server. Document how the 48 h deletion covers backups and logs.
4. **Pen-test** of the public share and prompt pages before the pilot.

## Provider decision (product owner + device team)

**Question:** is OpenAI and ElevenLabs with EU residency and zero retention
enough, or should school devices use Azure in a German data center?

**Recommendation: for school devices, use Azure OpenAI in an EU Data Zone or
Germany West Central with modified abuse monitoring, plus Azure AI Speech in
Germany. Offer a fully European option on request.**

| Option | Where data is processed | Stored at the provider | Under US law (CLOUD Act) | How schools perceive it |
| --- | --- | --- | --- | --- |
| OpenAI direct (today) | US | 30 days by default | yes | weakest; HBDI has questioned OpenAI since 2023 |
| OpenAI EU residency + zero retention | EU | none, after OpenAI approves | yes | better; approval and model availability uncertain |
| **Azure OpenAI, EU Data Zone / Germany West Central** | EU / Germany, incl. human review | none with modified abuse monitoring (on application) | yes | good; Microsoft contracts are common with Schulträger, and AIS.Chat/telli also offers GPT-5 models hosted in the EU |
| Mistral / IONOS / STACKIT | EU / Germany | per contract | no | best on sovereignty; vision quality to be tested |

Why Azure over "OpenAI EU":

- the same model family;
- a contractual EU processing guarantee in Data Zone deployments;
- one Microsoft contract for both text and speech, instead of two US
  start-ups.

It does **not** remove the US-parent (CLOUD Act) question. Only an EU provider
does that.

**Public statement:** since 2026-10-09 the `/hessen` page says the current
implementation uses OpenAI and ElevenLabs, and that a migration to Azure in a
German data centre is being clarified. Keep the page in sync when this is
decided.

Still to check:
- [ ] Is gpt-5-nano (or a comparable vision model) available in the EU Data
  Zone?
- [ ] Is modified abuse monitoring approved for this use case?
- [ ] Is the quality of Azure Speech's German neural voices comparable to
  ElevenLabs?

## Claims in the teaching concept that depend on the device

`/hessen/konzept` (live since 2026-10-09) relies on these behaviours. Tell the www
side if any of them change:

- **School mode stores nothing.** Photo, poem and audio are kept in RAM only.
- **Class prompts via the camera's QR code work in the school profile.** They
  are moderated by the server before use (unit E3).
- **Read-aloud sends only the poem text to the voice service, never the
  photo.** This is drawn in the Tafelbild (section 5) and used as a teaching
  point in unit E2.
- **Online sharing** is off at every start and can be switched on only with
  the teacher PIN.
- **Providers:** OpenAI and ElevenLabs today, with a migration to Azure
  Germany being clarified. Both the concept and `/hessen` name them.

## Content and teaching (product owner)

- **Lesson units exist:** `/hessen/konzept` covers grade 4 (G1–G2), grades
  5–6 (E1–E6) and the grade 7–10 elective (W1).
- **Listed there as "in Vorbereitung":**
  - [ ] worksheets and cards for all units
  - [ ] sample prompts
  - [ ] parent information
  - [ ] training material
  - [ ] an accreditation request to the Hessische Lehrkräfteakademie
- **To confirm:** the length of the teacher training (the page says about 90
  minutes).
- Include the "How does the AI read feelings?" unit with non-pupil subjects
  (device item 5).
