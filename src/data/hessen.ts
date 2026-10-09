import type { Locale } from '../i18n/utils';

/** Copy for the Hessen schools landing page (/hessen). Targets the Hessian
 *  "Digitale Zukunftskompetenzen" initiative (Medienführerschein from grade 4,
 *  new subject "KI und Digitale Welt" from grade 5, 2027/28). Keep claims in
 *  the privacy block in sync with the device's school profile
 *  (../poetry-cam/docs/DEVICE_PROFILES.md, SECURE_MODE.md). */

export interface Stage { grade: string; name: string; start: string; text: string; }
export interface Phase { n: string; title: string; text: string; }
export interface Fact { title: string; text: string; }

export interface HessenContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string; cta: string; ctaPdf: string };
  fit: { eyebrow: string; title: string; intro: string; stages: Stage[]; source: string; sourceLabel: string };
  lesson: { eyebrow: string; title: string; intro: string; phases: Phase[]; questions: string[]; questionsTitle: string };
  competences: { title: string; items: string[] };
  privacy: { eyebrow: string; title: string; intro: string; facts: Fact[]; honest: string; docsTitle: string; docs: string[]; docsNote: string };
  pilot: { eyebrow: string; title: string; body: string; points: string[]; cta: string; subject: string };
  pdfHref: string;
}

const pdfHref = '/files/Didaktisches-Konzept_Poetry-Cam-im-Bildungsbereich.pdf';
const kultusUrl = 'https://kultus.hessen.de/digitale-zukunftskompetenzen';

const de: HessenContent = {
  meta: {
    title: 'Poetry Cam für Hessens Schulen – KI und Digitale Welt',
    description:
      'Die Poetry Cam macht Künstliche Intelligenz im neuen hessischen Fach „KI und Digitale Welt“ greifbar: Foto, Gedicht, Reflexion – mit datensparsamem Schulmodus.',
  },
  hero: {
    eyebrow: 'Für Hessens Schulen · KI und Digitale Welt',
    title: 'KI begreifen – mit einem Foto und einem Gedicht.',
    lead:
      'Ab dem Schuljahr 2027/28 lernen Hessens Fünftklässlerinnen und Fünftklässler im neuen Fach „KI und Digitale Welt“. Die Poetry Cam macht dafür sichtbar, was eine KI tut: Sie sieht ein Bild, schreibt ein Gedicht und druckt es aus. Das ist anschaulich und regt zum Nachdenken an. Auf dem Gerät bleibt dabei nichts zurück.',
    cta: 'Pilotprojekt anfragen',
    ctaPdf: 'Didaktisches Konzept (PDF)',
  },
  fit: {
    eyebrow: 'Digitale Zukunftskompetenzen',
    title: 'Ein Gerät für den ganzen digitalen Bildungsweg',
    intro:
      'Hessen baut einen durchgehenden digitalen Bildungsweg von der Grundschule bis zur Sekundarstufe I auf. Die Poetry Cam bietet auf jeder Stufe einen konkreten Anlass zum Lernen.',
    stages: [
      {
        grade: 'Klasse 4',
        name: 'Medienführerschein',
        start: 'ab 2027/28',
        text: 'Was passiert mit meinem Foto, wenn ich es „ins Internet“ schicke? Am eigenen Bild wird Datenschutz konkret, nicht abstrakt.',
      },
      {
        grade: 'Klasse 5–6',
        name: 'KI und Digitale Welt',
        start: 'ab 2027/28',
        text: 'KI-Grundbildung zum Anfassen: Eingabe, Modell, Ausgabe. Wie beeinflusst die Anweisung (der Prompt) das Ergebnis? Wo irrt die KI, und warum klingt sie trotzdem überzeugend?',
      },
      {
        grade: 'Klasse 7–10',
        name: 'Wahlpflicht KI und Digitale Welt',
        start: 'ab 2029/30',
        text: 'Informatische Grundbildung: Kamera, Raspberry Pi, Python und eine KI-Schnittstelle. Ein echtes System, das man verstehen, nachbauen und weiterentwickeln kann.',
      },
    ],
    source: kultusUrl,
    sourceLabel: 'Quelle: Hessisches Ministerium für Kultus, Bildung und Chancen – Digitale Zukunftskompetenzen',
  },
  lesson: {
    eyebrow: 'Im Unterricht',
    title: 'Eine Doppelstunde, vier Phasen',
    intro:
      'Ein Beispielablauf, der ohne Vorwissen funktioniert. Die Lehrkraft moderiert, die Klasse forscht. Das Didaktische Konzept beschreibt Varianten und Material.',
    phases: [
      { n: '01', title: 'Erleben', text: 'Die Klasse fotografiert einen Gegenstand, eine Pflanze oder das Klassenzimmer. Nach wenigen Sekunden liegt ein gedrucktes Gedicht auf dem Tisch.' },
      { n: '02', title: 'Untersuchen', text: 'Dasselbe Motiv, aber eine andere Anweisung: Die Klasse formuliert selbst Prompts und vergleicht die Ergebnisse. Was bleibt gleich, was ändert sich?' },
      { n: '03', title: 'Bewerten', text: 'Stimmt, was die KI „gesehen“ hat? Wo erfindet sie etwas dazu? Wer ist eigentlich der Autor des Gedichts?' },
      { n: '04', title: 'Reflektieren', text: 'Der Weg des Fotos wird an die Tafel gezeichnet: Kamera, Internet, KI-Dienst, Drucker. Was wird gespeichert, was nicht, und wer entscheidet das?' },
    ],
    questionsTitle: 'Leitfragen für die Klasse',
    questions: [
      'Woher „weiß“ die KI, was auf dem Bild ist?',
      'Warum klingt ein Gedicht überzeugend, obwohl es Fehler enthält?',
      'Kann eine Maschine kreativ sein, oder setzt sie nur zusammen, was es schon gibt?',
      'Welche Daten gebe ich preis, wenn ich ein Foto an einen KI-Dienst schicke?',
    ],
  },
  competences: {
    title: 'Gestärkte Kompetenzen',
    items: [
      'KI-Grundbildung: Funktionsweise, Möglichkeiten und Grenzen generativer KI',
      'Medienkritik: Ergebnisse prüfen, Fehler und erfundene Inhalte erkennen',
      'Datenbewusstsein: Datenflüsse nachvollziehen und eigene Daten schützen',
      'Sprache und Kreativität: Gedichtformen, Wirkung von Sprache, eigene Prompts',
      'Informatisches Denken: Eingabe, Verarbeitung, Ausgabe an einem echten Gerät',
    ],
  },
  privacy: {
    eyebrow: 'Datenschutz im Schulmodus',
    title: 'Für Schulen gebaut: so wenig Daten wie möglich',
    intro:
      'Für den Einsatz mit Kindern hat die Poetry Cam ein eigenes Schulprofil. Es ist auf Datensparsamkeit ausgelegt und wird von uns fest eingerichtet, nicht per Schalter vor Ort.',
    facts: [
      { title: 'Nichts bleibt auf dem Gerät', text: 'Foto, Gedicht und Audio liegen nur im Arbeitsspeicher. Beim nächsten Foto oder beim Ausschalten werden sie verworfen. Auf der Speicherkarte landet nichts.' },
      { title: 'Teilen nur mit Freigabe', text: 'Das Online-Teilen per QR-Code ist ausgeschaltet und nach jedem Neustart wieder aus. Nur die Lehrkraft kann es per PIN einschalten, etwa für Kinder mit Einwilligung der Eltern. Sonst gibt es das Ergebnis nur auf Papier.' },
      { title: 'Keine Konten, keine Namen', text: 'Schülerinnen und Schüler melden sich nirgends an. Die Kamera kennt weder Namen noch Klassenlisten.' },
      { title: 'Einstellungen nur für Lehrkräfte', text: 'Einstellungen und WLAN sind durch eine Lehrkräfte-PIN geschützt. Eigene Prompts der Klasse und geteilte Inhalte werden automatisch auf problematische Inhalte geprüft, bevor sie verwendet oder veröffentlicht werden.' },
    ],
    honest:
      'Transparent gesagt: Die aktuelle Umsetzung nutzt noch OpenAI und ElevenLabs. Um das Gedicht zu erzeugen, wird das Foto an OpenAI übermittelt. Für das Vorlesen wird nur der Gedichttext an ElevenLabs gesendet. Eine Umstellung auf Microsoft Azure mit Rechenzentrum in Deutschland wird derzeit geklärt, damit die einschlägigen Gesetze und Vorschriften erfüllt werden. Unsere Empfehlung für den Unterricht: Motive ohne Gesichter wählen. Das schützt die Kinder und ist zugleich der beste Einstieg in das Thema Datenschutz. Werden andere Modelle mit europäischem Hosting benötigt, etwa von Mistral, sprechen Sie uns gerne an.',
    docsTitle: 'Unterlagen für Schulleitung, Schulträger und Datenschutz',
    docs: [
      'Beschreibung der Datenflüsse und der technischen und organisatorischen Maßnahmen (TOM), ausgerichtet am BSI IT-Grundschutz',
      'Textbaustein für das Verzeichnis von Verarbeitungstätigkeiten der Schule',
      'Vorbereitete Datenschutz-Folgenabschätzung (DSFA) als Arbeitsgrundlage',
      'Vertrag zur Auftragsverarbeitung (AVV) mit Liste der eingesetzten KI-Dienste',
      'Elterninformation und Einwilligungsvorlage, getrennt nach Zwecken und jederzeit widerrufbar',
    ],
    docsNote:
      'Wir erarbeiten diese Unterlagen gemeinsam mit den ersten Pilotschulen und stimmen sie mit den behördlichen Datenschutzbeauftragten ab.',
  },
  pilot: {
    eyebrow: 'Pilotpartner gesucht',
    title: 'Gemeinsam erproben, bevor das Fach startet',
    body:
      'Die Qualifizierung der Lehrkräfte beginnt bereits im Schuljahr 2026/27. Wir suchen Schulen, Fortbildungsträger und Ansprechpersonen in der Bildungsverwaltung, die die Poetry Cam im Unterricht erproben und mit uns weiterentwickeln möchten. Als greifbares Gerät ergänzt sie bildschirmbasierte Angebote wie AIS.Chat im Schulportal Hessen.',
    points: [
      'Erprobung an Pilotschulen und in Lehrkräftefortbildungen',
      'Gemeinsame Weiterentwicklung von Unterrichtsmaterial',
      'Abstimmung zu Datenschutz und IT-Sicherheit von Anfang an',
      'Unterlagen für eine zentrale Prüfung nach § 83a HSchG, damit nicht jede Schule allein prüfen muss',
    ],
    cta: 'Gespräch vereinbaren',
    subject: 'Poetry Cam – KI und Digitale Welt (Hessen)',
  },
  pdfHref,
};

const en: HessenContent = {
  meta: {
    title: 'Poetry Cam for Hessen’s schools – AI and the Digital World',
    description:
      'Poetry Cam makes artificial intelligence tangible in Hessen’s new school subject “KI und Digitale Welt”: photo, poem, reflection – with a privacy-first school mode.',
  },
  hero: {
    eyebrow: 'For Hessen’s schools · AI and the Digital World',
    title: 'Understanding AI – with a photo and a poem.',
    lead:
      'From the 2027/28 school year, fifth-graders in Hessen will study the new subject “KI und Digitale Welt” (AI and the Digital World). Poetry Cam shows what an AI actually does: it looks at a picture, writes a poem and prints it. That makes AI concrete and gets pupils thinking. And nothing is left behind on the device.',
    cta: 'Request a pilot',
    ctaPdf: 'Teaching concept (PDF, German)',
  },
  fit: {
    eyebrow: 'Digital future skills',
    title: 'One device for the whole digital learning path',
    intro:
      'Hessen is building a continuous digital learning path from primary school through lower secondary. Poetry Cam gives every stage a concrete reason to learn.',
    stages: [
      {
        grade: 'Grade 4',
        name: 'Media licence',
        start: 'from 2027/28',
        text: 'What happens to my photo when I send it “to the internet”? With their own picture, data protection becomes concrete, not abstract.',
      },
      {
        grade: 'Grades 5–6',
        name: 'AI and the Digital World',
        start: 'from 2027/28',
        text: 'Hands-on AI literacy: input, model, output. How does the instruction (the prompt) shape the result? Where is the AI wrong, and why does it still sound convincing?',
      },
      {
        grade: 'Grades 7–10',
        name: 'Elective AI and the Digital World',
        start: 'from 2029/30',
        text: 'Computing fundamentals: camera, Raspberry Pi, Python and an AI API. A real system to understand, rebuild and extend.',
      },
    ],
    source: kultusUrl,
    sourceLabel: 'Source: Hessian Ministry of Education – Digitale Zukunftskompetenzen (German)',
  },
  lesson: {
    eyebrow: 'In the classroom',
    title: 'One double lesson, four phases',
    intro:
      'A sample flow that needs no prior knowledge. The teacher moderates, the class investigates. The teaching concept describes variants and materials.',
    phases: [
      { n: '01', title: 'Experience', text: 'The class photographs an object, a plant or the classroom. A few seconds later a printed poem is on the table.' },
      { n: '02', title: 'Investigate', text: 'Same subject, different instruction: the class writes its own prompts and compares the results. What stays the same, what changes?' },
      { n: '03', title: 'Evaluate', text: 'Is what the AI “saw” correct? Where does it make things up? And who is actually the author of the poem?' },
      { n: '04', title: 'Reflect', text: 'The photo’s journey goes on the board: camera, internet, AI service, printer. What is stored, what isn’t, and who decides?' },
    ],
    questionsTitle: 'Guiding questions for the class',
    questions: [
      'How does the AI “know” what is in the picture?',
      'Why does a poem sound convincing even when it contains mistakes?',
      'Can a machine be creative, or does it only recombine what already exists?',
      'What data do I give away when I send a photo to an AI service?',
    ],
  },
  competences: {
    title: 'Skills strengthened',
    items: [
      'AI literacy: how generative AI works, what it can do and where it fails',
      'Critical media skills: checking results, spotting errors and made-up content',
      'Data awareness: tracing data flows and protecting one’s own data',
      'Language and creativity: poetic forms, the effect of language, writing prompts',
      'Computational thinking: input, processing, output on a real device',
    ],
  },
  privacy: {
    eyebrow: 'Privacy in school mode',
    title: 'Built for schools: as little data as possible',
    intro:
      'For use with children, Poetry Cam has a dedicated school profile. It is designed for data minimisation and set up by us, not with a switch on site.',
    facts: [
      { title: 'Nothing stays on the device', text: 'Photo, poem and audio live only in memory and are discarded at the next photo or at power-off. Nothing is written to the memory card.' },
      { title: 'Sharing only when released', text: 'Online sharing via QR code is off, and switches off again at every restart. Only the teacher can turn it on with a PIN, for example for children whose parents have consented. Otherwise the result exists only on paper.' },
      { title: 'No accounts, no names', text: 'Pupils never sign in. The camera knows no names and no class lists.' },
      { title: 'Settings for teachers only', text: 'Settings and Wi-Fi are protected by a teacher PIN. Prompts written by the class and shared content are automatically screened for problematic content before they are used or published.' },
    ],
    honest:
      'To be transparent: the current implementation still uses OpenAI and ElevenLabs. To write the poem, the photo is sent to OpenAI. For read-aloud, only the poem text is sent to ElevenLabs. A migration to Microsoft Azure with a data centre in Germany is being clarified, to meet the relevant laws and regulations. Our classroom recommendation: choose subjects without faces. It protects the children and is the best way into the topic of data protection. If you need other models with European hosting, for example from Mistral, please get in touch.',
    docsTitle: 'Documents for school leaders, school authorities and data protection',
    docs: [
      'Description of data flows and technical and organisational measures (TOMs), aligned with BSI IT-Grundschutz',
      'Text module for the school’s record of processing activities',
      'Pre-filled data protection impact assessment (DPIA) as a starting point',
      'Data processing agreement (DPA) listing the AI services used',
      'Parent information and consent template, separate per purpose and revocable at any time',
    ],
    docsNote:
      'We are developing these documents together with the first pilot schools and aligning them with the official data protection officers.',
  },
  pilot: {
    eyebrow: 'Looking for pilot partners',
    title: 'Try it together before the subject starts',
    body:
      'Teacher training already begins in the 2026/27 school year. We are looking for schools, training providers and contacts in the education administration who want to try Poetry Cam in class and develop it further with us. As a physical device, it complements screen-based tools such as AIS.Chat in the Schulportal Hessen.',
    points: [
      'Trials at pilot schools and in teacher training',
      'Joint development of teaching materials',
      'Data protection and IT security agreed from day one',
      'Documents for a central review under § 83a HSchG, so schools don’t each have to assess it alone',
    ],
    cta: 'Arrange a conversation',
    subject: 'Poetry Cam – AI and the Digital World (Hessen)',
  },
  pdfHref,
};

export const hessen: Record<Locale, HessenContent> = { de, en };
