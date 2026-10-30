/** Ausführliche Anleitung für Lehrkräfte (/hessen/anleitung). German only: the
 *  EN route shows a short notice (enNotice). The printed quick-start guide in the
 *  loan kit (docs/hessen/kurzanleitung/) links here by QR code.
 *  Screen texts are quoted from ../poetry-cam/src/poetry_cam/i18n/de/*.json
 *  (device 0.1.12); behaviour from ../poetry-cam/docs/DEVICE_PROFILES.md
 *  ("School mode on site"), POEM_SAFETY.md and LANGUAGES.md. Re-check both
 *  when the device changes. Marker coordinates are in the photos' pixels. */
import type { ImageKey } from '../lib/images';

export interface Mark { n: number; x: number; y: number; bx: number; by: number; }
export interface Photo { key: ImageKey; alt: string; w: number; h: number; marks: Mark[]; }
export interface Step { title: string; text: string; }
export interface Problem { shows: string; help: string; }

export const anleitung = {
  meta: {
    title: 'Poetry Cam – Anleitung für Lehrkräfte',
    description: 'Ausführliche Anleitung zur Poetry Cam im Schulmodus: Laden, WLAN, Fotos und Gedichte, eigene Prompts, Teilen, Hinweise der Kamera, Papier und Rückgabe.',
  },
  backLabel: '← Zurück zur Übersicht für Hessen',
  printLabel: 'Drucken / als PDF speichern',
  version: 'Anleitung für Lehrkräfte · Schulmodus · Stand Oktober 2026',
  title: 'Die Poetry Cam im Unterricht: Anleitung',
  lead: 'Alles, was Sie für eine Stunde mit der Poetry Cam brauchen. Die Kurzanleitung im Koffer fasst das Wichtigste zusammen, hier steht es ausführlich.',

  device: {
    title: '1. Das Gerät',
    photos: [
      {
        key: 'camera-back', alt: 'Poetry Cam von hinten: Bildschirm und gelber Knopf', w: 976, h: 768,
        marks: [
          { n: 1, x: 636, y: 420, bx: 800, by: 300 },
          { n: 2, x: 276, y: 368, bx: 170, by: 250 },
        ],
      },
      {
        key: 'camera-side', alt: 'Poetry Cam von rechts vorn: Schalter, Ladebuchse, Drucker, Kamera und Lautsprecher', w: 976, h: 848,
        marks: [
          { n: 3, x: 612, y: 72, bx: 735, by: 70 },
          { n: 4, x: 216, y: 572, bx: 80, by: 500 },
          { n: 5, x: 316, y: 680, bx: 150, by: 790 },
          { n: 6, x: 692, y: 450, bx: 900, by: 700 },
          { n: 7, x: 780, y: 264, bx: 660, by: 175 },
          { n: 8, x: 856, y: 324, bx: 930, by: 190 },
          { n: 9, x: 320, y: 400, bx: 440, by: 300 },
        ],
      },
    ] as Photo[],
    legend: [
      'Gelber Knopf: macht das Foto, holt das Live-Bild zurück, schließt Hinweise und Menüs',
      'Bildschirm (Touch): Foto, Gedicht und Tasten',
      'Lautstärke',
      'Schalter ON / OFF',
      'Ladebuchse',
      'Drucker: Klappe mit runder Lasche',
      'Kamera',
      'Lautsprecher',
      'Akkustand: Knopf drücken, die LEDs darunter zeigen den Ladestand',
    ],
    screen: 'Der Bildschirm zeigt links das Live-Bild, das Foto und das Gedicht. Rechts liegen die Tasten Prompt, Drucken und Abspielen. Über das WLAN-Symbol und das Zahnrad erreichen Sie WLAN und Einstellungen.',
  },

  before: {
    title: '2. Vor der Stunde',
    steps: [
      { title: 'Laden', text: 'Die Kamera hat einen eingebauten Akku. Das Ladegerät kommt in die Ladebuchse (5). Den Ladestand zeigt ein Druck auf den Akku-Knopf (9): Die LEDs stehen für 100, 75, 50, 25 % oder „niedrig“. Am besten am Vortag voll laden.' },
      { title: 'Einschalten', text: 'Schalter (4) auf ON. Die Kamera startet („Poetry Cam · startet…“), danach erscheint das Live-Bild mit dem Hinweis „Drück den Knopf für ein Foto“.' },
      { title: 'WLAN verbinden', text: 'Auf das WLAN-Symbol tippen, die PIN eingeben, das Netz wählen und das Passwort eintippen. Die Kamera merkt sich das Netz. In den Einstellungen zeigt die Zeile WLAN den Namen des Netzes und „Internet OK“ oder „kein Internet“.' },
      { title: 'Sprache prüfen', text: 'Die Kamera ist auf Deutsch eingestellt. Für Englisch: Einstellungen → Sprache → English. Bildschirm, Ausdrucke und Gedichte wechseln sofort.' },
      { title: 'Probefoto', text: 'Ein Foto von einem Gegenstand machen und drucken. So wissen Sie, dass WLAN, KI-Dienste, Drucker und Lautsprecher funktionieren. In den Einstellungen steht dann oben „Alles bereit“.' },
    ] as Step[],
    wifiNote: 'Die Kamera braucht für jedes Gedicht Internet. Netze mit persönlicher Anmeldung (802.1X, z. B. eduroam) werden nicht unterstützt. Gastnetze mit Anmeldeseite verbinden sich, melden aber „kein Internet“. Klären Sie die Anbindung am besten vorher mit der IT der Schule.',
  },

  lesson: {
    title: '3. Im Unterricht',
    steps: [
      { title: 'Foto machen', text: 'Den gelben Knopf (1) drücken. Die Kamera zeigt „Dein Foto wird gemacht“, dann „Dein Gedicht wird geschrieben“. Sie prüft das Foto, eine KI schreibt das Gedicht, und die Kamera prüft es noch einmal. Erst danach erscheint das ganze Gedicht.' },
      { title: 'Drucken', text: 'Auf Drucken tippen. Solange der Zettel läuft, ist die Taste grau.' },
      { title: 'Vorlesen', text: 'Auf Abspielen tippen. Während des Vorlesens heißt die Taste Stopp und beendet es. Die Lautstärke regelt der Knopf oben (3).' },
      { title: 'Nächstes Foto', text: 'Gelben Knopf einmal drücken: zurück zum Live-Bild. Ein zweites Mal: neues Foto.' },
    ] as Step[],
    notes: [
      'Ruhemodus: Nach einer Minute ohne Berührung und mit ruhigem Bild, spätestens nach drei Minuten, wird der Bildschirm dunkel. Antippen oder der gelbe Knopf weckt die Kamera.',
      'Ohne Internet sagt der Knopf das sofort, statt ein Foto zu machen. Ein Gedicht, das schon da ist, lässt sich weiter drucken und abspielen.',
      'Unpassende Fotos bekommen kein Gedicht, auffällige Gedichte werden durch eines der festen Gedichte der Kamera ersetzt (siehe Abschnitt 7).',
    ],
  },

  prompts: {
    title: '4. Eigene Prompts der Klasse',
    intro: 'Der Prompt ist die Anweisung, nach der die KI das Gedicht schreibt, zum Beispiel „ein Gedicht im Stil eines Wetterberichts“. Ohne eigenen Prompt nutzt die Kamera ihren Standard-Prompt.',
    steps: [
      { title: 'QR-Code zeigen', text: 'Auf Prompt tippen. Die Kamera zeigt den aktuellen Prompt und einen QR-Code.' },
      { title: 'Prompt schreiben', text: 'Mit einem Handy oder Tablet scannen und eine eigene Idee aufschreiben, höchstens 200 Zeichen.' },
      { title: 'Prüfung abwarten', text: 'Ein Prüfdienst kontrolliert jeden Prompt, bevor er die Kamera erreicht. Abgelehnte Prompts kommen nie an, die Seite erklärt freundlich, warum. Das nächste Foto nutzt den neuen Prompt.' },
    ] as Step[],
    notes: [
      'Nach jedem Neustart der Kamera gibt es einen neuen QR-Code.',
      'Konnte ein Prompt nicht genutzt werden, zeigt die Kamera kurz, welchen Standard-Prompt sie stattdessen verwendet hat.',
    ],
    test: { text: 'Prompts vorab ausprobieren, ohne Kamera und ohne dass etwas gespeichert wird:', href: 'https://cam-assets.digilyze.com/p/test?lang=de', label: 'Testseite für Prompts' },
  },

  settings: {
    title: '5. Einstellungen (mit PIN)',
    intro: 'Das Zahnrad öffnet die Einstellungen. Dafür braucht es die PIN, die Sie getrennt vom Koffer erhalten haben. Nach fünf falschen Eingaben ist das Tastenfeld eine Minute gesperrt.',
    rows: [
      { name: 'WLAN', text: 'Netz und Internet-Status. Hier wählen Sie ein anderes Netz.' },
      { name: 'Online teilen', text: 'Schalter für das Teilen per QR-Code (Abschnitt 6). Nach jedem Kamerastart aus.' },
      { name: 'Sprache', text: 'Deutsch oder English.' },
      { name: 'Kamera & KI', text: 'Erreichbarkeit der KI-Dienste für Text und Stimme, Schulmodus und Version.' },
    ],
    notes: [
      'Oben steht „Alles bereit“, wenn WLAN und beide KI-Dienste funktionieren, sonst „Bitte prüfen“.',
      'Der gelbe Knopf schließt die Einstellungen. Bleiben sie zwei Minuten unberührt, schließen sie sich von selbst.',
    ],
  },

  sharing: {
    title: '6. Online teilen',
    paragraphs: [
      'Das Teilen ist nach jedem Start der Kamera ausgeschaltet. Ist es eingeschaltet, druckt die Kamera einen QR-Code auf den Zettel. Er führt zu einer öffentlichen Seite mit Foto, Gedicht und Audio. Die Seite ist nicht über Suchmaschinen auffindbar und wird nach 48 Stunden automatisch gelöscht. Wer den Link hat, kann sie in dieser Zeit sehen.',
      'Geteilt wird nur, was die Prüfung von Foto und Gedicht bestanden hat. Konnte eine Prüfung nicht laufen, wird das Gedicht gedruckt, aber nicht geteilt.',
    ],
    warning: 'Nur einschalten, wenn für alle Kinder, die auf den Fotos zu sehen sind, eine schriftliche Einwilligung der Eltern vorliegt. Schulleitung und Datenschutzbeauftragte sollten vorher informiert sein.',
  },

  safety: {
    title: '7. Prüfungen und Jugendschutz',
    intro: 'Jeder Schritt hat eine eigene automatische Prüfung:',
    points: [
      'Prompt: wird geprüft, bevor er die Kamera erreicht.',
      'Foto: ein unpassendes Foto bekommt kein Gedicht. Es wird nichts gedruckt oder vorgelesen.',
      'Gedicht: wird geprüft, bevor es erscheint. Fällt es durch, nimmt die Kamera eines ihrer festen Gedichte und sagt das offen.',
      'Teilen: nur, was alle Prüfungen bestanden hat.',
    ],
    note: 'Automatische Prüfungen können sich irren, in beide Richtungen. Sie ersetzen nicht die Aufsicht. Die Kamera sagt das auch den Kindern: „Eine KI kann sich irren.“ Das ist ein guter Anlass für ein Gespräch.',
  },

  problems: {
    title: '8. Hinweise der Kamera',
    intro: 'Probleme erklärt die Kamera in einem Fenster. Es schließt sich mit OK, mit dem gelben Knopf oder nach 10 Sekunden von selbst.',
    rows: [
      { shows: '„Kein Internet“', help: 'WLAN in den Einstellungen prüfen. Ein vorhandenes Gedicht lässt sich weiter drucken und abspielen.' },
      { shows: '„Die Gedicht-KI antwortet nicht“', help: 'Der KI-Dienst ist gerade nicht erreichbar. Kurz warten, dann den gelben Knopf noch einmal drücken. Eventuell hat die Kamera schon eines ihrer eigenen Gedichte genommen.' },
      { shows: '„Kein Gedicht zu diesem Foto“', help: 'Die Prüfung hält das Foto für unpassend. Ein anderes Motiv wählen. Die Prüfung kann sich irren.' },
      { shows: '„Dieses Gedicht hat die Prüfung nicht bestanden“', help: 'Die Kamera druckt stattdessen eines ihrer eigenen Gedichte. Es wird nicht geteilt.' },
      { shows: '„Das Gedicht kann nicht vorgelesen werden“', help: 'Der Sprachdienst ist gerade nicht erreichbar. Das Gedicht lässt sich trotzdem drucken.' },
      { shows: '„Das Gedicht kann nicht abgespielt werden“', help: 'Lautsprecher und Lautstärke (3) prüfen. Drucken geht trotzdem.' },
      { shows: '„Der Drucker funktioniert nicht“', help: 'Papierrolle prüfen (Abschnitt 9), dann auf Drucken tippen. Das Gedicht ist noch da.' },
      { shows: '„Das Foto hat nicht geklappt“', help: 'Den gelben Knopf noch einmal drücken.' },
      { shows: '„Kühlt ab… Die Kamera ist zu warm.“', help: 'Die Kamera ruht, bis sie abgekühlt ist. Nicht abdecken, aus der Sonne nehmen. Ein Countdown zeigt, wann sie sich zum Schutz selbst ausschaltet, falls sie nicht rechtzeitig abkühlt. Dann ruhen lassen und später wieder einschalten.' },
      { shows: '„Etwas ist schiefgelaufen“', help: 'Den gelben Knopf noch einmal drücken. Passiert es wieder: neu starten.' },
      { shows: 'Bildschirm ist dunkel', help: 'Ruhemodus: Bildschirm antippen oder den gelben Knopf drücken.' },
    ] as Problem[],
    restart: 'Neu starten: Schalter (4) auf OFF, etwa 10 Sekunden warten, wieder auf ON. Das Gedicht auf dem Bildschirm geht dabei verloren, weil der Schulmodus nichts speichert.',
  },

  paper: {
    title: '9. Papier wechseln',
    intro: 'Die Kamera druckt auf Thermopapier, 58 mm breit. Zwei Rollen liegen im Koffer.',
    steps: [
      { title: 'Klappe öffnen', text: 'Der Drucker (6) sitzt vorn. Die runde Lasche nach unten ziehen.' },
      { title: 'Rest entnehmen', text: 'Papierreste und die leere Rolle herausnehmen.' },
      { title: 'Neue Rolle einlegen', text: 'Die Rolle so einlegen, dass das Papierende nach unten zeigt.' },
      { title: 'Schließen', text: 'Ein Stück Papier herausschauen lassen und die Klappe zudrücken.' },
    ] as Step[],
  },

  care: {
    title: '10. Pflege und Sicherheit',
    points: [
      'Nicht abdecken, nicht in die pralle Sonne stellen und vor Nässe schützen.',
      'Das Gehäuse nicht öffnen.',
      'Nur mit dem mitgelieferten Ladegerät laden.',
      'Zum Transport ausschalten und in den Koffer legen.',
      'Kamera-Fenster (7) bei Bedarf vorsichtig mit einem weichen, trockenen Tuch reinigen.',
    ],
  },

  privacy: {
    title: '11. Datenschutz im Schulmodus',
    points: [
      'Auf der Kamera bleibt nichts gespeichert: Foto, Gedicht und Audio liegen nur im Arbeitsspeicher und werden beim nächsten Foto oder beim Ausschalten verworfen.',
      'Für das Gedicht geht das Foto an einen KI-Dienst (derzeit OpenAI), für das Vorlesen nur der Gedichttext an einen Sprachdienst (derzeit ElevenLabs).',
      'Kinder brauchen kein Konto, die Kamera kennt keine Namen.',
      'Am besten Motive ohne Gesichter wählen: Gegenstände, Pflanzen, Räume, Kunstwerke.',
      'Die KI keine Gefühle von Kindern deuten lassen.',
      'Ausgestellte Gedichte als „Mit KI erstellt“ kennzeichnen.',
    ],
    more: { text: 'Mehr dazu im didaktischen Konzept, Abschnitt 9:', href: '/hessen/konzept#datenschutz', label: 'Datenschutz im Unterricht' },
  },

  returnKit: {
    title: '12. Rückgabe',
    points: [
      'Schalter auf OFF.',
      'Alles einpacken: Kamera, Ladegerät, restliches Papier, Kurzanleitung.',
      'Übergabe- und Rückgabeprotokoll ausfüllen und beilegen.',
      'Schäden oder Auffälligkeiten bitte kurz notieren oder per E-Mail melden.',
    ],
  },

  contact: { title: 'Fragen oder ein Problem?', text: 'Schreiben Sie uns:', subject: 'Poetry Cam – Frage zur Anleitung' },

  enNotice: {
    title: 'Teacher guide (German)',
    text: 'This guide is written for teachers in Hessen using the Poetry Cam loan kit and is available in German only.',
    cta: 'Open the German version',
  },
};
