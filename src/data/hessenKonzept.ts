/** Didaktisches Konzept – Hessen-Ausgabe (/hessen/konzept). German only: the
 *  audience is the Hessian ministry, schools and teachers. EN route shows a
 *  short notice that links here. Keep privacy statements in sync with
 *  src/data/hessen.ts and docs/hessen/*. Items marked `planned` don't exist yet. */

export interface Unit {
  id: string;
  title: string;
  question: string;
  minutes: number;
  goals: string[];
  flow: { phase: string; text: string }[];
  material: string[];
  areas: number[]; // KMK competence areas (1–6)
  subjects: string[];
  note?: string;
}

export interface Stage {
  id: string;
  grade: string;
  name: string;
  start: string;
  intro: string;
  units: Unit[];
}

export const kmkAreas: Record<number, string> = {
  1: 'Suchen, Verarbeiten und Aufbewahren',
  2: 'Kommunizieren und Kooperieren',
  3: 'Produzieren und Präsentieren',
  4: 'Schützen und sicher Agieren',
  5: 'Problemlösen und Handeln',
  6: 'Analysieren und Reflektieren',
};

export const konzept = {
  meta: {
    title: 'Didaktisches Konzept – Poetry Cam in Hessen',
    description:
      'Unterrichtskonzept für den Medienführerschein (Klasse 4) und das Fach „KI und Digitale Welt“ (Klasse 5–6) in Hessen: 45-Minuten-Einheiten, Kompetenzbezug, Datenschutz.',
  },
  version: 'Hessen-Ausgabe · Version 1.0 · Stand Oktober 2026',
  title: 'Didaktisches Konzept: Poetry Cam im hessischen Unterricht',
  lead:
    'KI begreifen, statt sie nur zu benutzen. Dieses Konzept zeigt, wie die Poetry Cam den Medienführerschein in Klasse 4 und das neue Fach „KI und Digitale Welt“ ab Klasse 5 unterstützt: mit kurzen, sofort einsetzbaren Unterrichtseinheiten.',
  printLabel: 'Als PDF drucken',
  backLabel: 'Zurück zur Hessen-Seite',

  context: {
    title: '1. Einordnung',
    paragraphs: [
      'Hessen baut mit den „Digitalen Zukunftskompetenzen“ einen durchgehenden digitalen Bildungsweg auf. Ab dem Schuljahr 2027/28 wird der Medienführerschein in Klasse 4 verpflichtend. Im selben Jahr startet in Klasse 5 das Fach „KI und Digitale Welt“, ab 2028/29 auch in Klasse 6, einstündig oder in modularer Form. Ab 2029/30 folgt ein Wahlpflichtangebot in den Klassen 7 bis 10.',
      'Die Kerncurricula für das neue Fach liegen noch nicht vor. Dieses Konzept orientiert sich daher an den bereits veröffentlichten Zielen und an bundesweiten Rahmenwerken. Sobald das Kerncurriculum erscheint, wird es daran ausgerichtet.',
    ],
    source: { label: 'Hessisches Ministerium für Kultus, Bildung und Chancen: Digitale Zukunftskompetenzen', href: 'https://kultus.hessen.de/digitale-zukunftskompetenzen' },
  },

  idea: {
    title: '2. Pädagogische Leitidee',
    intro:
      'Im Mittelpunkt steht nicht die Technik, sondern das Verstehen, Prüfen und Gestalten mit KI. Die Poetry Cam ist dafür bewusst als Lernmedium gebaut, nicht als weitere App.',
    points: [
      { title: 'Ein Gerät, ein Zweck', text: 'Die Kamera kann genau eines: ein Foto aufnehmen und daraus ein Gedicht erzeugen. Keine Benachrichtigungen, keine Chats, keine Ablenkung.' },
      { title: 'Zum Anfassen', text: 'Das Auslösen schafft Aufmerksamkeit. Das gedruckte Gedicht liegt auf dem Tisch und lässt sich vergleichen, markieren und ausstellen.' },
      { title: 'Gemeinsam statt allein', text: 'Die Kamera ist ein Klassenobjekt. Ergebnisse werden zusammen betrachtet und diskutiert, nicht auf einzelnen Bildschirmen.' },
      { title: 'Keine Blackbox', text: 'Kamera, Rechner, Netzwerk und Ausgabe sind sichtbare Bausteine. So lässt sich der ganze Weg vom Bild zum Gedicht nachvollziehen.' },
    ],
  },

  framework: {
    title: '3. Bezugsrahmen',
    intro:
      'Die Einheiten sind den sechs Kompetenzbereichen der KMK-Strategie „Bildung in der digitalen Welt“ zugeordnet. Sie greifen außerdem die folgenden Empfehlungen auf:',
    refs: [
      { label: 'KMK: Strategie „Bildung in der digitalen Welt“ (2016, ergänzt 2021)', href: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt/strategie-bildung-in-der-digitalen-welt.html' },
      { label: 'KMK: Handlungsempfehlung zum Umgang mit KI in schulischen Bildungsprozessen (10.10.2024)', href: 'https://www.kmk.org/aktuelles/pressearchiv/mitteilung/bildungsministerkonferenz-verabschiedet-handlungsempfehlung-zum-umgang-mit-kuenstlicher-intelligenz-1.html' },
      { label: 'Hessen: Handreichung „Künstliche Intelligenz (KI) in Schule und Unterricht“', href: 'https://digitale-schule.hessen.de/unterricht-und-paedagogik/handreichung-kuenstliche-intelligenz-ki-in-schule-und-unterricht' },
      { label: 'EU-KI-Verordnung, Art. 4: Förderung von KI-Kompetenz', href: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    ],
    matrixTitle: 'Übersicht: Einheiten und Kompetenzbereiche',
  },

  stages: [
    {
      id: 'klasse-4',
      grade: 'Klasse 4',
      name: 'Medienführerschein',
      start: 'ab 2027/28',
      intro:
        'Zwei Einheiten für die Grundschule, anschlussfähig an den Sachunterricht. Der Schwerpunkt liegt auf Datenbewusstsein: Was passiert mit meinem Foto, und was darf ich fotografieren?',
      units: [
        {
          id: 'G1',
          title: 'Wohin reist mein Foto?',
          question: 'Was passiert zwischen dem Klick und dem Gedicht?',
          minutes: 45,
          goals: [
            'erklären, dass ein Foto Daten erzeugt, die über das Internet an einen Dienst gesendet werden',
            'zwischen „auf dem Gerät“ und „im Internet“ unterscheiden',
          ],
          flow: [
            { phase: 'Einstieg (10 min)', text: 'Die Lehrkraft fotografiert einen Gegenstand aus dem Klassenzimmer. Das gedruckte Gedicht wird vorgelesen. Frage: „Wer hat das geschrieben?“' },
            { phase: 'Erarbeitung (20 min)', text: 'Rollenspiel „Datenweg“: Kinder übernehmen die Rollen Kamera, WLAN, Internet, KI-Dienst und Drucker und reichen eine Bildkarte weiter. An der Tafel entsteht der Weg als Bild.' },
            { phase: 'Sicherung (15 min)', text: 'Gemeinsames Tafelbild „Was bleibt wo?“. Merksatz: „Mein Foto verlässt das Gerät. Deshalb überlege ich vorher, was ich fotografiere.“' },
          ],
          material: ['Poetry Cam', 'Rollenkarten', 'Tafelbild „Datenweg“ (siehe Abschnitt 5)'],
          areas: [4, 6],
          subjects: ['Sachunterricht'],
        },
        {
          id: 'G2',
          title: 'Darf ich das fotografieren?',
          question: 'Wem gehört ein Bild von mir?',
          minutes: 45,
          goals: [
            'das Recht am eigenen Bild in einfachen Worten erklären',
            'gemeinsam Fotoregeln für die Klasse aufstellen',
          ],
          flow: [
            { phase: 'Einstieg (10 min)', text: 'Bildkarten: ein Baum, ein Kuscheltier, ein Kind beim Spielen. Frage: „Welches Foto darf ich einfach ins Internet schicken?“' },
            { phase: 'Erarbeitung (20 min)', text: 'In Gruppen sortieren die Kinder Situationen nach „okay“, „nur mit Erlaubnis“ und „lieber nicht“. Danach fotografiert jede Gruppe ein Motiv ohne Gesichter mit der Poetry Cam.' },
            { phase: 'Sicherung (15 min)', text: 'Die Klasse beschließt ihre Fotoregeln, z. B. „Ich frage, bevor ich jemanden fotografiere.“ Die Gedichte werden mit den Regeln ausgestellt.' },
          ],
          material: ['Poetry Cam', 'Situationskarten', 'Plakat „Unsere Fotoregeln“'],
          areas: [4, 2],
          subjects: ['Sachunterricht', 'Deutsch'],
        },
      ],
    },
    {
      id: 'klasse-5-6',
      grade: 'Klasse 5–6',
      name: 'KI und Digitale Welt',
      start: 'Klasse 5 ab 2027/28, Klasse 6 ab 2028/29',
      intro:
        'Sechs Einheiten à 45 Minuten, passend zur einstündigen Form des Fachs. Sie bauen aufeinander auf, lassen sich aber auch einzeln oder als Projekttag (E1–E3 oder E4–E6) einsetzen.',
      units: [
        {
          id: 'E1',
          title: 'Wie sieht KI die Welt?',
          question: 'Was erkennt die KI auf einem Bild, und was erfindet sie dazu?',
          minutes: 45,
          goals: [
            'eine KI-Bildbeschreibung mit dem Original vergleichen',
            'zwischen Beobachtung und Interpretation unterscheiden',
          ],
          flow: [
            { phase: 'Einstieg (10 min)', text: 'Ein Motiv aus dem Schulalltag wird fotografiert, das Gedicht gedruckt.' },
            { phase: 'Erarbeitung (25 min)', text: 'Partnerarbeit: Im Gedicht markieren die Kinder grün, was auf dem Bild zu sehen ist, und rot, was die KI hinzugedacht hat.' },
            { phase: 'Sicherung (10 min)', text: 'Austausch: Warum ergänzt die KI Dinge? Merksatz: „KI beschreibt nicht, sie deutet.“' },
          ],
          material: ['Poetry Cam', 'Ausdrucke', 'Textmarker grün/rot'],
          areas: [6, 1],
          subjects: ['KI und Digitale Welt', 'Deutsch'],
        },
        {
          id: 'E2',
          title: 'Eingabe – Verarbeitung – Ausgabe',
          question: 'Welche Teile braucht ein KI-System, und was passiert wo?',
          minutes: 45,
          goals: [
            'das EVA-Prinzip an einem echten Gerät erklären',
            'unterscheiden, was im Gerät und was in der Cloud geschieht',
          ],
          flow: [
            { phase: 'Einstieg (5 min)', text: 'Die Lehrkraft zeigt die Bausteine der Kamera: Kamera, Rechner (Raspberry Pi), WLAN, Bildschirm, Drucker, Lautsprecher.' },
            { phase: 'Erarbeitung (25 min)', text: 'Die Kinder ordnen Karten mit den Bausteinen den Stationen Eingabe, Verarbeitung und Ausgabe zu und ergänzen den Weg ins Internet.' },
            { phase: 'Sicherung (15 min)', text: 'Gemeinsames Tafelbild „Gerät oder Cloud?“ (Abschnitt 5). Diskussion: Was funktioniert ohne Internet, was nicht?' },
          ],
          material: ['Poetry Cam', 'Bausteinkarten', 'Tafelbild „Datenweg“'],
          areas: [5, 6],
          subjects: ['KI und Digitale Welt'],
        },
        {
          id: 'E3',
          title: 'Prompts: Sprache steuert Maschinen',
          question: 'Wie verändert eine Anweisung das Ergebnis?',
          minutes: 45,
          goals: [
            'Prompts gezielt formulieren und ihre Wirkung vergleichen',
            'Sprache als Steuerungsinstrument erkennen',
          ],
          flow: [
            { phase: 'Einstieg (5 min)', text: 'Dasselbe Motiv, zwei vorbereitete Prompts („ein lustiges Gedicht“, „ein trauriges Gedicht“).' },
            { phase: 'Erarbeitung (25 min)', text: 'Gruppen formulieren eigene Prompts zu Form, Stil oder Thema und reichen sie über den QR-Code der Kamera ein. Die Prompts werden automatisch geprüft, bevor die Kamera sie verwendet.' },
            { phase: 'Sicherung (15 min)', text: 'Die Ausdrucke hängen nebeneinander. Was bleibt gleich, was ändert sich? Welcher Prompt hat am besten funktioniert, und warum?' },
          ],
          material: ['Poetry Cam mit Prompt-QR-Code', 'ein Tablet oder Lehrkraft-Smartphone zum Einreichen', 'Ausdrucke'],
          areas: [3, 5],
          subjects: ['KI und Digitale Welt', 'Deutsch'],
        },
        {
          id: 'E4',
          title: 'Wenn KI sich irrt',
          question: 'Warum klingt ein falsches Gedicht trotzdem überzeugend?',
          minutes: 45,
          goals: [
            'Fehler und erfundene Inhalte (Halluzinationen) erkennen',
            'erklären, warum KI-Texte überzeugend klingen, auch wenn sie falsch sind',
          ],
          flow: [
            { phase: 'Einstieg (10 min)', text: 'Mehrdeutige Motive fotografieren, z. B. ein Kunstobjekt, eine Spiegelung oder ein ungewöhnlicher Gegenstand.' },
            { phase: 'Erarbeitung (20 min)', text: 'Faktencheck in Gruppen: Was stimmt, was ist falsch, was ist nicht überprüfbar? Warum hat sich die KI geirrt?' },
            { phase: 'Sicherung (15 min)', text: 'Transfer zu Nachrichten und sozialen Medien: Woran erkenne ich, ob ich einem Text vertrauen kann? Gemeinsame Prüfliste.' },
          ],
          material: ['Poetry Cam', 'mehrdeutige Motive', 'Vorlage „Prüfliste“'],
          areas: [6, 1],
          subjects: ['KI und Digitale Welt', 'Ethik'],
        },
        {
          id: 'E5',
          title: 'Kann KI Gefühle lesen?',
          question: 'Woher „weiß“ die KI, wie etwas wirkt, und wo sind die Grenzen?',
          minutes: 45,
          goals: [
            'erkennen, dass KI Stimmungen aus Mustern ableitet und dabei irren kann',
            'begründen, warum Gefühlserkennung bei Menschen problematisch ist',
          ],
          flow: [
            { phase: 'Einstieg (10 min)', text: 'Die Kamera fotografiert Kunstwerke, Comicfiguren, Emoji-Zeichnungen oder ein Tierbild, keine Schülerinnen und Schüler. Die Gedichte werden vorgelesen.' },
            { phase: 'Erarbeitung (20 min)', text: 'Vergleich: Welche Stimmung hat die KI gesehen, welche sehen wir? Woran macht die KI das fest (Farben, Gesichtsausdruck, Licht)?' },
            { phase: 'Sicherung (15 min)', text: 'Diskussion: Was wäre, wenn eine KI in der Schule die Gefühle von Kindern einschätzt? Hinweis: Das ist in der EU an Schulen verboten (KI-Verordnung, Art. 5).' },
          ],
          material: ['Poetry Cam', 'Kunstdrucke, Comics, Emoji-Karten'],
          areas: [6, 4],
          subjects: ['KI und Digitale Welt', 'Ethik', 'Kunst'],
          note: 'Bewusst ohne Fotos von Kindern: Die Einheit thematisiert Gefühlserkennung, ohne sie an Schülerinnen und Schülern anzuwenden.',
        },
        {
          id: 'E6',
          title: 'Wer ist der Autor?',
          question: 'Ist ein KI-Gedicht kreativ, und wem gehört es?',
          minutes: 45,
          goals: [
            'über Kreativität und Urheberschaft bei KI-Texten urteilen',
            'KI-Ergebnisse kennzeichnen und eigenständig weiterentwickeln',
          ],
          flow: [
            { phase: 'Einstieg (5 min)', text: 'Zwei Gedichte zum selben Motiv: eines von der KI, eines von der Lehrkraft. Welches ist welches?' },
            { phase: 'Erarbeitung (25 min)', text: 'Die Kinder schreiben das KI-Gedicht weiter oder um und kennzeichnen, welche Zeilen von wem stammen.' },
            { phase: 'Sicherung (15 min)', text: 'Galerie mit Kennzeichnung „KI“ / „ich“. Diskussion: Wer ist hier Autorin oder Autor? Warum ist Kennzeichnung wichtig?' },
          ],
          material: ['Poetry Cam', 'Ausdrucke', 'Stifte in zwei Farben'],
          areas: [3, 6],
          subjects: ['KI und Digitale Welt', 'Deutsch', 'Kunst'],
        },
      ],
    },
    {
      id: 'klasse-7-10',
      grade: 'Klasse 7–10',
      name: 'Wahlpflicht KI und Digitale Welt',
      start: 'ab 2029/30',
      intro:
        'Für das informatikorientierte Wahlpflichtangebot wird die Kamera zum Untersuchungsgegenstand. Ein Projektmodul über mehrere Wochen oder eine Projektwoche.',
      units: [
        {
          id: 'W1',
          title: 'Ein KI-System verstehen und verbessern',
          question: 'Wie ist die Poetry Cam gebaut, und wie würden wir sie verbessern?',
          minutes: 180,
          goals: [
            'Aufbau eines vernetzten KI-Geräts beschreiben (Hardware, Python, Schnittstelle)',
            'Datenschutz durch Technikgestaltung an einem echten Beispiel bewerten',
            'eigene Verbesserungen entwerfen und präsentieren',
          ],
          flow: [
            { phase: 'Phase 1', text: 'Aufbau untersuchen: Bausteine, Datenfluss, Zusammenspiel von Gerät und KI-Dienst.' },
            { phase: 'Phase 2', text: 'Gestaltung prüfen: Was speichert das Gerät, was nicht? Warum gibt es einen Schulmodus? Welche Alternativen gibt es zu einem KI-Dienst in den USA?' },
            { phase: 'Phase 3', text: 'Eigenes Projekt: neuer Prompt-Stil, Ablaufdiagramm, Konzept für eine Verbesserung. Präsentation vor der Klasse.' },
          ],
          material: ['Poetry Cam', 'Projektmappe'],
          areas: [5, 3, 4],
          subjects: ['KI und Digitale Welt (Wahlpflicht)', 'Informatik'],
        },
      ],
    },
  ] as Stage[],

  flowDiagram: {
    title: '5. Tafelbild: Der Weg vom Foto zum Gedicht',
    intro: 'Die zentrale Vorlage für G1 und E2. Sie zeigt, wo Daten entstehen, wohin sie gehen und wo das Ergebnis wieder sichtbar wird.',
    steps: [
      { where: 'Gerät', label: 'Foto aufnehmen', detail: 'Kamera und Rechner im Gehäuse' },
      { where: 'Netz', label: 'Senden', detail: 'WLAN der Schule, Internet' },
      { where: 'Cloud', label: 'KI schreibt', detail: 'KI-Dienst erzeugt das Gedicht' },
      { where: 'Netz', label: 'Zurück', detail: 'Gedicht kommt als Text zurück' },
      { where: 'Gerät', label: 'Ausgabe', detail: 'Bildschirm, Drucker, Vorlesen' },
    ],
    note: 'Im Schulmodus bleibt auf dem Gerät nichts gespeichert: Foto, Gedicht und Audio werden beim nächsten Foto oder beim Ausschalten verworfen.',
  },

  subjects: {
    title: '6. Fächerverbindungen',
    rows: [
      { subject: 'Sachunterricht (Kl. 4)', link: 'Medien und Daten im Alltag, Recht am eigenen Bild' },
      { subject: 'KI und Digitale Welt (Kl. 5–6)', link: 'Leitfach für die Einheiten E1–E6' },
      { subject: 'Deutsch', link: 'Lyrik, Sprachwirkung, eigene Texte, Prompts formulieren' },
      { subject: 'Kunst', link: 'Bildgestaltung, Bildwirkung, Ausstellung der Ergebnisse' },
      { subject: 'Ethik / Religion', link: 'Verantwortung, Wahrheit, Kreativität und Urheberschaft' },
      { subject: 'Informatik (Wahlpflicht)', link: 'Aufbau, Datenfluss, Schnittstellen, Programmierung' },
    ],
  },

  differentiation: {
    title: '7. Differenzierung und Inklusion',
    points: [
      'Vorlesefunktion: Die Kamera liest jedes Gedicht vor. Das unterstützt Kinder mit Leseschwierigkeiten oder mit Deutsch als Zweitsprache.',
      'Bild vor Text: Jede Einheit beginnt mit einem Foto und einem greifbaren Ausdruck statt mit einem Arbeitsblatt.',
      'Gestufte Aufgaben: Markieren und Sortieren als Basis; eigene Prompts, Faktenchecks und Umschreiben als Erweiterung.',
      'Kooperative Formen: Partner- und Gruppenarbeit an einem gemeinsamen Gerät statt Einzelarbeit am eigenen Bildschirm.',
    ],
  },

  assessment: {
    title: '8. Leistungsfeststellung',
    intro: 'Bewertet werden die Lernprodukte der Schülerinnen und Schüler, niemals durch die KI:',
    points: [
      'Prompt-Journal: Prompts, Ergebnisse und eigene Begründung',
      'Reflexionstext oder Plakat zu einer Leitfrage',
      'Umgeschriebenes oder weitergeschriebenes Gedicht mit Kennzeichnung',
      'Präsentation in einer Galerie oder am Präsentationstag',
    ],
    note: 'Die Poetry Cam wird nicht zur Bewertung, Einstufung oder Prüfungsaufsicht eingesetzt.',
  },

  privacy: {
    title: '9. Datenschutz im Unterricht: Checkliste für Lehrkräfte',
    intro: 'Die Schule ist für die Datenverarbeitung verantwortlich. Diese Punkte helfen, die Kamera rechtssicher einzusetzen. Sie ersetzen nicht die Abstimmung mit Schulleitung und Datenschutzbeauftragten.',
    checks: [
      'Motive ohne Gesichter wählen: Gegenstände, Pflanzen, Räume, Kunstwerke. So entstehen keine Bilder von Kindern.',
      'Online-Teilen bleibt aus. Einschalten (per PIN) nur, wenn für die betroffenen Kinder eine schriftliche Einwilligung der Eltern vorliegt.',
      'Keine Gefühle von Schülerinnen und Schülern deuten lassen (siehe E5).',
      'Ergebnisse als KI-generiert kennzeichnen, wenn sie ausgestellt werden.',
      'Schulleitung und schulische Datenschutzbeauftragte vor dem ersten Einsatz informieren.',
    ],
    facts: [
      'Im Schulmodus speichert die Kamera keine Fotos, Gedichte oder Audios. Sie werden beim nächsten Foto oder beim Ausschalten verworfen.',
      'Schülerinnen und Schüler brauchen kein Konto. Die Kamera kennt keine Namen.',
      'Einstellungen und WLAN sind durch eine Lehrkräfte-PIN geschützt.',
      'Die aktuelle Umsetzung nutzt OpenAI (Gedicht aus dem Foto) und ElevenLabs (Vorlesen, nur Text). Eine Umstellung auf Microsoft Azure mit Rechenzentrum in Deutschland wird derzeit geklärt.',
    ],
    planned: 'Unterlagen für Schulen (Auftragsverarbeitung, technische und organisatorische Maßnahmen, Datenschutz-Folgenabschätzung, Elterninformation mit Einwilligung) werden gemeinsam mit den ersten Pilotschulen erarbeitet.',
  },

  teachers: {
    title: '10. Qualifizierung der Lehrkräfte',
    intro: 'Für den Einsatz ist kein Informatikstudium nötig. Eine kurze Einführung genügt:',
    points: [
      'Was ist KI, vereinfacht erklärt: Mustererkennung und Textgenerierung',
      'Prompts und ihre Wirkung',
      'Typische Fehler: Halluzinationen und Verzerrungen (Bias)',
      'Datenschutz und Bedienung im Schulmodus',
    ],
    format: 'Format: Einführung vor Ort oder online, etwa 90 Minuten, mit Praxisphase an der Kamera. Eine Akkreditierung als Fortbildung bei der Hessischen Lehrkräfteakademie wird angestrebt.',
  },

  materials: {
    title: '11. Materialien',
    available: ['Dieses Konzept (druckbar als PDF)', 'Tafelbild „Datenweg“ (Abschnitt 5)'],
    planned: ['Arbeitsblätter und Karten zu allen Einheiten', 'Beispielprompts', 'Elterninformation', 'Fortbildungsunterlagen'],
    availableLabel: 'Verfügbar',
    plannedLabel: 'In Vorbereitung',
  },

  contact: {
    title: 'Kontakt',
    text: 'Fragen, Erprobung im Unterricht oder Rückmeldungen zum Konzept: Wir freuen uns auf Ihre Nachricht.',
    cta: 'Kontakt aufnehmen',
    subject: 'Poetry Cam – Didaktisches Konzept Hessen',
  },

  enNotice: {
    title: 'Teaching concept for Hessen (German)',
    text: 'This teaching concept is written for teachers and education authorities in Hessen and is available in German only.',
    cta: 'Open the German version',
  },
};
