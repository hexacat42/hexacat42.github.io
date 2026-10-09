# Poetry Cam in Hessian schools – compliance research

As of 2026-10-09. Open work items are tracked in `handoff-dev-team.md`. Not legal advice. Have a school data protection or education-law specialist review it before the pitch. Items marked **[verify]** could not be confirmed from a primary source.

## Bottom line

1. **Aim for a central ministry review under § 83a Abs. 1 Nr. 1 HSchG.** Without it, every school must assess Poetry Cam on its own as controller (Nr. 2). There is no public list of approved apps.
2. **The ordinance name has changed.** The 2009 school data ordinance was repealed. The current rule is the **Schul-Datenschutzverordnung (SchDSV) of 1 Dec 2023** (ABl. 12/2023 S. 763), valid until 31 Dec 2030.
3. **Hessen already gives schools an AI tool: AIS.Chat (formerly telli).** It runs through the Schulportal and about two-thirds of Hessian schools use it (verified: Schule aktuell, May 2026). The ministry will compare Poetry Cam with it. Position Poetry Cam as a physical complement, and expect the US transfer of pupils' photos to be the main objection.
4. **Children + AI + photos + US transfer = a DSFA is practically mandatory** once people are photographed. Ship a pre-filled DSFA (data protection impact assessment), an AVV (data processing agreement) and TOMs (technical and organisational measures). Offer an object-only mode so pupils without consent can still take part.

## Legal map

The school is the controller (§ 4 SchDSV). The Poetry Cam vendor is at most its processor, and OpenAI and ElevenLabs are sub-processors.

| Rule | What it says | What it means for Poetry Cam |
| --- | --- | --- |
| § 83 HSchG | Schools may process data as far as their educational mission requires. Where school law is silent, the HDSIG (Hessian data protection act) applies (Abs. 11). | Photos of objects are unproblematic. Photos of pupils need a stronger legal basis. |
| § 83a HSchG | Digital apps are either reviewed and provided by the ministry (Nr. 1) or introduced by the school itself as controller (Nr. 2). | Pitch goal: a central Nr. 1 review. |
| SchDSV § 2 + Anlage 1 | Schools may process only the data listed, or data necessary for the task. | Photos and poems aren't listed, so they need to be necessary or consented to. |
| SchDSV § 3 | Consent must be voluntary, written and documented. Refusing must cause no disadvantage. | Pupils who refuse need an equal alternative. |
| SchDSV § 5 | Record of processing (Art. 30), AVV (Art. 28), deletion, breach reports to HBDI, Schulamt and Schulträger. | The vendor supplies the AVV and the record text. |
| SchDSV § 6 | TOMs under Art. 25/32, observing **BSI IT-Grundschutz**. The IT security concept is agreed with the Schulträger (the school's municipal funding body). | The vendor supplies a security concept. |
| SchDSV § 7 | The school's data protection officer advises on the DSFA. | The officer is the reader of the DSFA template. |
| SchDSV § 12 Abs. 4 | **Publishing pupils' work needs written parental consent.** | The 48 h share page counts as publication. |
| SchDSV § 17 | Data may be kept only as long as necessary. | RAM-only storage and 48 h deletion fit. |
| DSGVO Art. 9 | Photos count as biometric data only when processed for technical identification (Recital 51). | Never add face recognition or face embeddings. |
| DSGVO Art. 35 + DSK Muss-Liste | A DSFA is required for high-risk processing, including AI that interacts with the people concerned. | Required once people are photographed. |
| DSGVO Art. 44 ff. | Transfers to third countries need DPF certification or standard contractual clauses (SCCs). | OpenAI and ElevenLabs are US providers. |

**Transfers to the US**
- The EU-US Data Privacy Framework (DPF) stands: the General Court upheld it on 3 Sep 2025 (T-553/23). An appeal is pending at the CJEU (C-703/25 P). Whether OpenAI and ElevenLabs are DPF-certified is **[verify]**.
- **The OpenAI API keeps inputs for 30 days by default, and the device code does not set `store: false` today** (checked in `llm_openai.py`).
- Both providers have EU options:
  - OpenAI: EU data residency, and zero data retention after approval. Whether gpt-5-nano is available with EU residency is **[verify]**.
  - ElevenLabs: an EU endpoint (Enterprise) and Zero Retention Mode.

## Photos of pupils and consent

- **Legal basis.** Sending a child's face to a US AI model is hard to justify as necessary for teaching. Use consent (Art. 6(1)(a)) for photos of people, upload and publication.
- **Who consents.** Parents for grades 4–6, and from about age 14 the pupil as well. Art. 8 DSGVO does not apply directly, because the school uses the service, not the child.
- **Granularity.** Separate opt-ins for:
  - AI processing of photos with people
  - upload
  - publication
  - audio

  Each must be withdrawable, with a "no disadvantage" clause (§ 3 SchDSV).
- **Publication.** § 22 KUG and § 12 Abs. 4 SchDSV both require consent.
- **Templates.** I found no official ministry template. Model one on the HBDI video-conference consent form and the Medienzentrum Frankfurt templates.
- **School events outside lessons.** A posted privacy notice is enough (§ 5 Abs. 3 SchDSV).

## EU AI Act

- **Not high-risk.** Annex III education covers admission, grading, placement and test proctoring. Never market Poetry Cam for assessment.
- **Art. 5(1)(f) bans emotion recognition in education** (in force since Feb 2025).
  - Per the Commission's guidelines on prohibited practices, describing a readily visible expression ("a laughing face") is not emotion recognition. Inferring a pupil's inner state from their face is.
  - The current fallback prompt ("a short funny poem about this scene") is fine. Prompts from the class pass server moderation, which doesn't check for this yet.
  - **Teaching value:** "How does an AI read feelings?" is an excellent lesson, but run it on artworks, illustrations, emoji drawings or animals, not on pupils. Then the lesson keeps its value and stays out of the ban. **[legal review]**
- **Art. 4 AI literacy:** supply teacher material. It also fits the curriculum.
- **Art. 50 transparency** (since 2 Aug 2026; grace period for marking until 2 Dec 2026):
  - visible "KI" labelling on the device and the printout
  - machine-readable marking of AI-generated text and audio (metadata on share-page assets)

## IT security, approval and procurement

- **BSI IT-Grundschutz** is binding for schools (§ 6 SchDSV). Map the device to the IoT and embedded-systems modules, and the share server to the web-server and web-application modules.
- **HBDI's closest precedent** is the telepresence avatar (54th Tätigkeitsbericht, ch. 7.2). Its checklist:
  - AVV and DSFA
  - entry in the record of processing
  - Art. 13 information
  - no images or audio stored on the provider's servers
  - visible signal when the device is active
  - transport encryption
- **Product law** (vendor side) **[verify]**:
  - Cyber Resilience Act: reporting from 11 Sep 2026, full duties from 11 Dec 2027
  - RED delegated regulation with EN 18031 (Wi-Fi devices)
  - CE/EMC
  - GPSR (product safety; the thermal printer)
- **Schulträger:**
  - It buys and runs the equipment (§§ 155, 158 HSchG).
  - Expect enterprise Wi-Fi or captive portals, content filters, and an allow-list for the API hosts and the share server.
  - Provide a list of the hosts the device connects to.
- **Lernmittel approval** (§ 10 HSchG) applies only to material used over a longer period. Occasional use as a classroom device is most likely a Lehrmittel (teaching aid) under § 158 instead. Ask the ministry if you pitch it as core curriculum material.
- **Procurement** (HVTG, in force since 25 Jun 2026):
  - direct award up to €100,000
  - pay-rate commitments (Tariftreue) above €20,000
  - EU threshold €216,000
- **Youth protection:** age-appropriate output for 9–12-year-olds, and moderation of input and output before printing.

## Readiness checklist

| Item | Status | Action |
| --- | --- | --- |
| School profile: RAM-only, no web sharing, PIN | Have | Document it in the DSFA |
| Consent-gated upload, 48 h deletion | Have | Document deletion incl. backups and logs |
| Text-only to the voice service | Have | EU endpoint and Zero Retention Mode |
| Moderation of class prompts and shared moments | Have (server, M7) | Poem moderation on the device is pending (server handoff `device-moderation.md`) |
| Sharing switch: off at every start, teacher PIN to enable | Have | Not consent by itself: add per-moment confirmation and a clearer German label |
| `store: false` / zero retention on OpenAI calls | Gap | Set `store: false`, apply for ZDR, consider EU residency |
| Object-only / no-person mode | Gap | Lets pupils without consent take part and lowers DSFA risk |
| No emotion inference from faces | Verify | Constrain custom prompts |
| AI labels (printout, device, metadata) | Gap | Art. 50 |
| AVV with sub-processor list | Gap | Draft |
| TOMs / security concept mapped to BSI | Gap | Draft |
| Text for the record of processing | Gap | Use HBDI's sample format |
| Pre-filled DSFA | Gap | Draft |
| Parent information and consent form | Gap | Draft (§ 3, § 12(4) SchDSV, § 22 KUG) |
| Outbound host list, update and patch policy | Gap | Document for the Schulträger |
| Teacher material for Medienführerschein / KI und Digitale Welt | Partly (didactic PDF) | Extend |

## Sharing consent: is the teacher PIN enough?

**No, it is not enough on its own, but it is the right base.**

**What the school profile does:**
- Sharing is off after every start.
- Only a teacher can switch it on, behind the PIN.

That is a good technical safeguard (Art. 25 privacy by default).

**What consent law requires:**
- Under § 12 Abs. 4 SchDSV and § 22 KUG, *publishing* a pupil's photo or work needs **written parental consent for that child**.
- The switch works per session: once a teacher turns it on, every child's moment is uploaded.

**What closes the gap:**
- the school collects written consents beforehand;
- the device asks for a per-moment confirmation (default No);
- the switch and the consent dialog use a clear German label: what is shared (photo, poem, audio), for how long (48 h), and that anyone with the link can see it.

## AI provider: Azure Germany vs. OpenAI/ElevenLabs EU

**Recommendation: Azure OpenAI (EU Data Zone or Germany West Central, with modified abuse monitoring) plus Azure AI Speech in Germany, as the school default. A European provider (Mistral, IONOS, STACKIT) on request.**

**OpenAI and ElevenLabs with EU residency and zero retention are likely defensible on paper.** In practice they are weaker:
- ZDR needs OpenAI's approval, and model availability under EU residency is unclear.
- ElevenLabs EU residency is Enterprise-only.
- School data protection officers and HBDI scrutinise OpenAI more closely.

**Azure gives:**
- contractual EU processing, including human review;
- one contract for text and speech;
- the same setup the state's own chatbot uses: AIS.Chat/telli offers GPT-5 models on EU servers.

**What no US provider removes:** the US-parent (CLOUD Act) issue. Only a European provider does.

## Still to verify

- Availability of gpt-5-nano or a comparable vision model in the Azure EU Data Zone, and approval of modified abuse monitoring.

- DPF certification of OpenAI and ElevenLabs (dataprivacyframework.gov).
- Which OpenAI models support EU residency combined with ZDR.
- The final AI Act Omnibus text (Art. 4, Art. 50 dates).
- Whether HBDI has guidance specifically on AI in classrooms (datenschutz.hessen.de blocked automated fetching).
- Whether teachers need the Lehrkräfteakademie AI certificate for AI tools other than AIS.Chat.

## Sources

- HSchG, unofficial consolidated text: https://kultus.hessen.de/sites/kultus.hessen.de/files/2025-09/nichtamtliche_lesefassung_schulgesetz.pdf
- § 83a HSchG: https://gesetze.co/HE/HSchG/83a · § 83: https://gesetze.co/HE/HSchG/83
- SchDSV 2023: https://www.rv.hessenrecht.hessen.de/bshe/document/hevr-SchulDSVHErahmen
- FOI request on § 83a apps: https://fragdenstaat.de/en/request/freigegebene-anwendungen-nach-hschg-83a/
- HBDI, school duties: https://datenschutz.hessen.de/datenschutz/hochschulen-schulen-und-archive/datenschutzrechtliche-pflichten-einer-schule-nach-der-ds-gvo
- HBDI 54th Tätigkeitsbericht: https://datenschutz.hessen.de/sites/datenschutz.hessen.de/files/2026-04/hbdi_54_tatigkeitsbericht_web.pdf
- HBDI consent form (video conferencing): https://datenschutz.hessen.de/datenschutz/hochschulen-schulen-und-archive/formular-zur-einwilligung-fuer-die-nutzung-von-videokonferenzsystemen-in-schulen
- HMKB Handreichung KI: https://digitale-schule.hessen.de/unterricht-und-paedagogik/handreichung-kuenstliche-intelligenz-ki-in-schule-und-unterricht
- Digitale Zukunftskompetenzen: https://kultus.hessen.de/digitale-zukunftskompetenzen
- Schule aktuell, May 2026 (AIS.Chat): https://kultus.hessen.de/schule-aktuell-fuer-lehrkraefte-mai-2026
- KMK Handlungsempfehlung KI: https://www.kmk.org/aktuelles/pressearchiv/mitteilung/bildungsministerkonferenz-verabschiedet-handlungsempfehlung-zum-umgang-mit-kuenstlicher-intelligenz-1.html
- DSK Orientierungshilfe KI: https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf
- AI Act: https://eur-lex.europa.eu/eli/reg/2024/1689/oj · DPF: https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj
- OpenAI data controls: https://developers.openai.com/api/docs/guides/your-data · EU residency: https://openai.com/index/introducing-data-residency-in-europe/
- ElevenLabs data residency: https://elevenlabs.io/docs/overview/administration/data-residency
- HVTG 2026: https://blog.cosinex.de/2026/06/12/hessen-novelliert-vergabe-und-tariftreuegesetz/
- Medienzentrum templates: https://medienzentren.hessen.de/schule/datenschutz
- Azure OpenAI EU residency (Q&A): https://learn.microsoft.com/en-us/answers/questions/5544730/how-to-guarantee-eu-data-and-processing-residency
- Azure OpenAI in Germany (guide): https://kiba.berlin/en/articles/azure-openai-service-einrichten-deutschland
- telli models and EU hosting: https://www.heise.de/en/news/Telli-Lower-Saxony-brings-AI-chatbot-to-all-schools-immediately-11175911.html
- Server moderation handoff: ../poetry-cam-server/docs/handoffs/device-moderation.md
