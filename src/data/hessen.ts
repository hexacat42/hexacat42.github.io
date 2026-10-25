import type { Locale } from '../i18n/utils';

/** Copy for the Hessen schools landing page (/hessen). Targets the Hessian
 *  "Digitale Zukunftskompetenzen" initiative (Medienführerschein from grade 4,
 *  new subject "KI und Digitale Welt" from grade 5, 2027/28). Keep claims in
 *  the privacy block in sync with the device's school profile
 *  (../poetry-cam/docs/DEVICE_PROFILES.md, SECURE_MODE.md), and the safety
 *  block with the content checks (../poetry-cam/docs/POEM_SAFETY.md,
 *  ../poetry-cam-server/CONTRACT.md §6a). */

export interface Stage { grade: string; name: string; start: string; text: string; }
export interface Phase { n: string; title: string; text: string; }
export interface Fact { title: string; text: string; }
export interface SafetyStep { label: string; text: string; }

export interface HessenContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string; cta: string; ctaConcept: string };
  fit: { eyebrow: string; title: string; intro: string; stages: Stage[]; source: string; sourceLabel: string };
  lesson: { eyebrow: string; title: string; intro: string; phases: Phase[]; questions: string[]; questionsTitle: string };
  competences: { title: string; items: string[] };
  privacy: { eyebrow: string; title: string; intro: string; facts: Fact[]; safety: { title: string; intro: string; steps: SafetyStep[]; note: string }; honest: string; docsTitle: string; docs: string[]; docsNote: string };
  pilot: { eyebrow: string; title: string; body: string; points: string[]; cta: string; subject: string };
  conceptHref: string;
}

const conceptHref = '/hessen/konzept';
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
    ctaConcept: 'Didaktisches Konzept für Hessen',
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
      'Ein Beispielablauf, der ohne Vorwissen funktioniert. Die Lehrkraft moderiert, die Klasse forscht. Das didaktische Konzept für Hessen enthält ausgearbeitete 45-Minuten-Einheiten für Klasse 4 bis 6. Bildschirm, Ausdruck, Vorlesen und die Seiten für Prompts und geteilte Momente gibt es auf Deutsch und Englisch. Die Lehrkraft stellt die Sprache per PIN um, die Gedichte folgen ihr. So passt die Kamera auch in den Englischunterricht.',
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
      { title: 'Teilen nur mit Freigabe', text: 'Das Online-Teilen per QR-Code ist ausgeschaltet und nach jedem Neustart wieder aus. Nur die Lehrkraft kann es per PIN einschalten, etwa für Kinder mit Einwilligung der Eltern. Auch dann wird nur geteilt, was alle Prüfungen bestanden hat. Sonst gibt es das Ergebnis nur auf Papier.' },
      { title: 'Keine Konten, keine Namen', text: 'Schülerinnen und Schüler melden sich nirgends an. Die Kamera kennt weder Namen noch Klassenlisten.' },
      { title: 'Einstellungen nur für Lehrkräfte', text: 'Einstellungen und WLAN sind durch eine Lehrkräfte-PIN geschützt.' },
    ],
    safety: {
      title: 'Jugendschutz: geprüft, bevor etwas gedruckt oder geteilt wird',
      intro: 'Jeder Schritt hat eine eigene automatische Prüfung. Was sie nicht besteht, kommt weder aufs Papier noch in den Lautsprecher noch ins Internet.',
      steps: [
        { label: 'Prompt', text: 'Bevor ein Prompt der Klasse die Kamera erreicht, prüft ihn der Server: auf verletzende, sexuelle oder gefährliche Inhalte, auf Versuche, der Kamera Befehle zu geben, auf persönliche Daten wie Telefonnummern oder Adressen und auf Prompts, die sehr lange Texte verlangen. Ein Prompt hat höchstens 200 Zeichen, die Kamera lehnt längere ebenfalls ab. Abgelehnte Prompts erreichen die Kamera nie, das Kind sieht einen freundlichen Hinweis, warum. Ist die Prüfung nicht erreichbar, wird nichts übernommen.' },
        { label: 'Foto', text: 'Die Kamera prüft jedes Foto, bevor das Gedicht erscheint. Ein unpassendes Foto bekommt kein Gedicht: Es wird verworfen, nichts wird gedruckt oder vorgelesen.' },
        { label: 'Gedicht', text: 'Die KI hat feste Vorgaben: freundlich und kindgerecht, kurz, der Prompt steuert nur Stimmung, Thema, Stil und Form. Die Kamera begrenzt die Länge der Antwort und kürzt zu lange Gedichte für Papier und Vorlesen. Jedes Gedicht wird geprüft, bevor es erscheint. Im Schulmodus zeigt der Bildschirm es erst danach. Fällt es durch, druckt die Kamera eines ihrer eigenen, festen Gedichte und sagt das offen.' },
        { label: 'Teilen', text: 'Online geteilt wird nur, was Foto- und Gedichtprüfung bestanden hat. Der Server prüft beim Hochladen noch einmal. Was dort auffällt, wird nicht gespeichert und nie veröffentlicht.' },
      ],
      note: 'Automatische Prüfungen können sich irren, in beide Richtungen. Sie ersetzen nicht die Aufsicht der Lehrkraft. Die Hinweise auf dem Bildschirm sagen das auch den Kindern: KI kann Fehler machen, deshalb wird sie geprüft. Konnte eine Prüfung einmal nicht laufen, wird das Gedicht gedruckt, aber nicht geteilt. Lehrkräfte können Prompts vorab auf einer Testseite ausprobieren, ohne Kamera und ohne dass etwas gespeichert wird.',
    },
    honest:
      'Transparent gesagt: Die aktuelle Umsetzung nutzt noch OpenAI und ElevenLabs. Um das Gedicht zu erzeugen, wird das Foto an OpenAI übermittelt. Die Kamera sendet jede Anfrage mit der Vorgabe, sie nicht zu speichern (store: false). Zur Missbrauchserkennung kann OpenAI Anfragen nach eigenen Regeln bis zu 30 Tage aufbewahren. Für das Vorlesen wird nur der Gedichttext an ElevenLabs gesendet. Auch die automatischen Prüfungen von Prompt, Foto und Gedicht laufen über OpenAI. Eine Umstellung auf Microsoft Azure mit Rechenzentrum in Deutschland wird derzeit geklärt, damit die einschlägigen Gesetze und Vorschriften erfüllt werden. Unsere Empfehlung für den Unterricht: Motive ohne Gesichter wählen. Das schützt die Kinder und ist zugleich der beste Einstieg in das Thema Datenschutz. Werden andere Modelle mit europäischem Hosting benötigt, etwa von Mistral, sprechen Sie uns gerne an.',
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
  conceptHref,
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
    ctaConcept: 'Teaching concept for Hessen (German)',
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
      'A sample flow that needs no prior knowledge. The teacher moderates, the class investigates. The teaching concept for Hessen (German) contains worked-out 45-minute units for grades 4 to 6. Screen, printout, read-aloud and the pages for prompts and shared moments come in German and English. The teacher switches the language with the PIN, and the poems follow it. That makes the camera a fit for English lessons too.',
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
      { title: 'Sharing only when released', text: 'Online sharing via QR code is off, and switches off again at every restart. Only the teacher can turn it on with a PIN, for example for children whose parents have consented. Even then, only what passed every check is shared. Otherwise the result exists only on paper.' },
      { title: 'No accounts, no names', text: 'Pupils never sign in. The camera knows no names and no class lists.' },
      { title: 'Settings for teachers only', text: 'Settings and Wi-Fi are protected by a teacher PIN.' },
    ],
    safety: {
      title: 'Youth protection: checked before anything is printed or shared',
      intro: 'Every step has its own automatic check. Whatever fails it never reaches the paper, the speaker or the internet.',
      steps: [
        { label: 'Prompt', text: 'Before a prompt from the class reaches the camera, the server checks it: for hurtful, sexual or dangerous content, for attempts to give the camera commands, for personal data such as phone numbers or addresses, and for prompts that ask for very long texts. A prompt has at most 200 characters, and the camera refuses longer ones too. Rejected prompts never reach the camera; the child sees a friendly note explaining why. If the check can’t be reached, nothing is accepted.' },
        { label: 'Photo', text: 'The camera checks every photo before the poem appears. An unsuitable photo gets no poem: it is discarded, and nothing is printed or read aloud.' },
        { label: 'Poem', text: 'The AI has fixed rules: kind and child-friendly, short, and the prompt only steers mood, theme, style and form. The camera limits the length of the answer and shortens overly long poems for paper and read-aloud. Every poem is checked before it appears; in school mode the screen shows it only afterwards. If it fails, the camera prints one of its own fixed poems and says so openly.' },
        { label: 'Sharing', text: 'Only moments that passed the photo and poem checks are shared online. The server checks once more during the upload; anything flagged there is never stored or published.' },
      ],
      note: 'Automatic checks can be wrong, in both directions. They do not replace the teacher’s supervision. The on-screen notes tell the children this too: AI makes mistakes, which is why it gets checked. If a check couldn’t run, the poem is printed but not shared. Teachers can try prompts in advance on a test page, without a camera and without anything being stored.',
    },
    honest:
      'To be transparent: the current implementation still uses OpenAI and ElevenLabs. To write the poem, the photo is sent to OpenAI. The camera sends every request with the instruction not to store it (store: false). For abuse monitoring, OpenAI may keep requests for up to 30 days under its own rules. For read-aloud, only the poem text is sent to ElevenLabs. The automatic checks of prompt, photo and poem also run on OpenAI. A migration to Microsoft Azure with a data centre in Germany is being clarified, to meet the relevant laws and regulations. Our classroom recommendation: choose subjects without faces. It protects the children and is the best way into the topic of data protection. If you need other models with European hosting, for example from Mistral, please get in touch.',
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
  conceptHref,
};

export const hessen: Record<Locale, HessenContent> = { de, en };
