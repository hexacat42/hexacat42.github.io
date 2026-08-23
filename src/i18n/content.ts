import type { Locale } from './utils';

/** Structured site copy per locale. Long-form/repeatable content (poems,
 *  timeline, use-cases) lives in content collections; this holds the landing
 *  sections + shared UI strings. EN is translated from DE — review for tone. */

export interface NavItem { href: string; label: string; }
export interface Step { n: string; title: string; text: string; }

export interface SiteContent {
  siteName: string;
  tagline: string;
  metaDescription: string;
  nav: NavItem[];
  common: {
    readMore: string; backHome: string; toContact: string;
    skip: string; toggleTheme: string; langLabel: string; menu: string;
  };
  hero: { eyebrow: string; title: string; lead: string; ctaPrimary: string; ctaSecondary: string };
  how: { eyebrow: string; title: string; intro: string; steps: Step[] };
  examples: { eyebrow: string; title: string; intro: string };
  audio: { eyebrow: string; title: string; body: string; points: string[] };
  sharing: {
    eyebrow: string; title: string; body: string; points: string[];
    cta: string; note: string;
  };
  useCasesIntro: { eyebrow: string; title: string; intro: string };
  storyTeaser: { eyebrow: string; title: string; body: string; cta: string };
  founder: { eyebrow: string; title: string; body: string };
  contact: { eyebrow: string; title: string; body: string; cta: string; subject: string };
  footer: {
    impressum: string; datenschutz: string; rights: string;
    addressLabel: string; address: string; emailLabel: string; note: string;
  };
  email: string;
}

const de: SiteContent = {
  siteName: 'Poetry Cam',
  tagline: 'KI trifft Sofortbild.',
  metaDescription:
    'Die Poetry Cam verwandelt einen Moment in ein Gedicht, druckt es sofort auf Papier, liest es vor und teilt es per QR-Code – KI zum Anfassen.',
  nav: [
    { href: '/#so-funktionierts', label: 'So funktioniert’s' },
    { href: '/#beispiele', label: 'Beispiele' },
    { href: '/#teilen', label: 'Teilen' },
    { href: '/#einsatz', label: 'Einsatz' },
    { href: '/story', label: 'Story' },
    { href: '/#kontakt', label: 'Kontakt' },
  ],
  common: {
    readMore: 'Mehr erfahren',
    backHome: 'Zur Startseite',
    toContact: 'Kontakt aufnehmen',
    skip: 'Zum Inhalt springen',
    toggleTheme: 'Hell/Dunkel umschalten',
    langLabel: 'Sprache',
    menu: 'Menü',
  },
  hero: {
    eyebrow: 'KI trifft Sofortbild',
    title: 'Ein Foto. Ein Gedicht. Sofort auf Papier.',
    lead:
      'Die Poetry Cam ist ein poetisches Instrument: Sie fotografiert einen Moment, lässt eine KI ihn in Verse fassen, druckt das Gedicht sofort aus – und liest es auf Wunsch sogar vor.',
    ctaPrimary: 'So funktioniert’s',
    ctaSecondary: 'Die Story',
  },
  how: {
    eyebrow: 'So funktioniert’s',
    title: 'Von Auslöser bis Vorlesen – in Sekunden',
    intro:
      'Ein Knopfdruck genügt. Die Poetry Cam nimmt den Moment auf und macht daraus ein greifbares, erzählendes Andenken.',
    steps: [
      { n: '01', title: 'Foto aufnehmen', text: 'Ein Druck auf den Auslöser hält den Moment fest – genau das Bild, das Sie auf der Live-Vorschau gesehen haben.' },
      { n: '02', title: 'KI dichtet', text: 'Eine Bild-KI interpretiert die Szene und schreibt daraus ein Gedicht – im gewählten Stil und in der gewünschten Form.' },
      { n: '03', title: 'Sofort-Druck', text: 'Das Gedicht wird umgehend auf einem Thermodrucker ausgegeben – ein Andenken zum Mitnehmen.' },
      { n: '04', title: 'Per QR teilen', text: 'Auf dem Ausdruck steht ein QR-Code. Er führt zu einer privaten Seite mit Foto, Gedicht und Audio – 48 Stunden lang.' },
      { n: '05', title: 'Anhören', text: 'Die Poetry Cam vertont das Gedicht mit einer von mehreren Stimmen und liest es vor – auf dem Gerät und auf der geteilten Seite.' },
    ],
  },
  examples: {
    eyebrow: 'Beispiele',
    title: 'Was die Poetry Cam aus einem Bild macht',
    intro: 'Jedes Gedicht ist ein Unikat – erzeugt aus Motiv und Prompt, in Stil und Form frei wählbar.',
  },
  audio: {
    eyebrow: 'Hören',
    title: 'Hören Sie Ihr Gedicht',
    body:
      'Die Poetry Cam bleibt nicht auf dem Papier: Sie vertont jedes Gedicht und liest es mit natürlicher Stimme vor. Ein integrierter Lautsprecher gibt es direkt am Gerät wieder – oder Sie hören es später auf der geteilten Seite.',
    points: [
      'Sprachausgabe direkt am Gerät und auf der geteilten Seite',
      'Mehrere Stimmen sorgen für Abwechslung',
      'Aus geschriebener Poesie wird ein vorgetragenes Erlebnis',
    ],
  },
  sharing: {
    eyebrow: 'Teilen',
    title: 'Teilen Sie Ihren Moment – und dann ist er weg',
    body:
      'Der QR-Code auf dem Ausdruck führt zu einer privaten Seite mit Foto, Gedicht und Audio. Sie ist bewusst flüchtig: nach 48 Stunden wird alles endgültig gelöscht.',
    points: [
      'Ein Link, 48 Stunden gültig – danach unwiderruflich gelöscht',
      'Keine Accounts, keine Anmeldung, keine persönlichen Daten',
      'Kein Tracking, nicht von Suchmaschinen auffindbar (noindex)',
      'Teilen nur mit ausdrücklicher Zustimmung – jederzeit widerrufbar',
    ],
    cta: 'Mehr zum Teilen & Datenschutz',
    note: 'Bewusst vergänglich – ein Andenken, kein Datenprofil.',
  },
  useCasesIntro: {
    eyebrow: 'Einsatzmöglichkeiten',
    title: 'Wo die Poetry Cam begeistert',
    intro: 'Ob im Unterricht, auf der Messe oder auf der Feier – die Poetry Cam macht KI erlebbar und schafft bleibende Momente.',
  },
  storyTeaser: {
    eyebrow: 'Story',
    title: 'Vom Pappmodell zum ausgereiften Gerät',
    body:
      'In gut einem Jahr wurde aus einer Idee ein einsatzbereites Gerät – vier Versionen, unzählige Iterationen und eine Patentanmeldung. Die ganze Entwicklungsgeschichte auf einen Blick.',
    cta: 'Die Story lesen',
  },
  founder: {
    eyebrow: 'Über den Erfinder',
    title: 'Georg Klassen',
    body:
      'Georg Klassen (TUM-Alumnus 2009) ist Innovationstreiber, KI-Enthusiast und kreativer Tüftler aus München. Beruflich im Bereich Digital Analytics und Künstliche Intelligenz tätig, verbindet er technisches Know-how mit Neugier und Experimentierfreude. Mit der Poetry Cam verwirklicht er seine Vision, Technologie erlebbar zu machen und Kreativität mit KI zu verbinden. Was als Pappmodell begann, wurde zu einer zum Patent angemeldeten Erfindung – einer Kamera, die Bilder versteht und Geschichten erzählt.',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Interesse an der Poetry Cam?',
    body: 'Ob Zusammenarbeit, Buchung für ein Event oder ein Pilotprojekt an Ihrer Schule – ich freue mich über jede Nachricht und neue Perspektive.',
    cta: 'E-Mail schreiben',
    subject: 'Poetry Cam – Allgemeine Anfrage',
  },
  footer: {
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    rights: '© Georg Klassen, 2026.',
    addressLabel: 'Adresse',
    address: 'München · Deutschland',
    emailLabel: 'E-Mail',
    note: 'Ein privates Projekt zur Präsentation der Erfindung Poetry Cam.',
  },
  email: 'info@digilyze.de',
};

const en: SiteContent = {
  siteName: 'Poetry Cam',
  tagline: 'Where AI meets instant photography.',
  metaDescription:
    'Poetry Cam turns a moment into a poem, prints it on paper instantly, reads it aloud and shares it via QR code — AI you can touch.',
  nav: [
    { href: '/#so-funktionierts', label: 'How it works' },
    { href: '/#beispiele', label: 'Examples' },
    { href: '/#teilen', label: 'Sharing' },
    { href: '/#einsatz', label: 'Uses' },
    { href: '/story', label: 'Story' },
    { href: '/#kontakt', label: 'Contact' },
  ],
  common: {
    readMore: 'Learn more',
    backHome: 'Back to home',
    toContact: 'Get in touch',
    skip: 'Skip to content',
    toggleTheme: 'Toggle light/dark',
    langLabel: 'Language',
    menu: 'Menu',
  },
  hero: {
    eyebrow: 'AI meets instant photography',
    title: 'One photo. One poem. Printed instantly.',
    lead:
      'Poetry Cam is a poetic instrument: it photographs a moment, lets an AI turn it into verse, prints the poem on the spot — and can even read it aloud.',
    ctaPrimary: 'How it works',
    ctaSecondary: 'The story',
  },
  how: {
    eyebrow: 'How it works',
    title: 'From shutter to spoken word — in seconds',
    intro:
      'One press of a button. Poetry Cam captures the moment and turns it into a tangible, story-telling keepsake.',
    steps: [
      { n: '01', title: 'Take the photo', text: 'A press of the shutter captures the moment — exactly the frame you saw on the live preview.' },
      { n: '02', title: 'AI writes a poem', text: 'A vision AI interprets the scene and writes a poem from it — in your chosen style and form.' },
      { n: '03', title: 'Instant print', text: 'The poem prints immediately on a thermal printer — a keepsake to take with you.' },
      { n: '04', title: 'Share via QR', text: 'The printout carries a QR code. It opens a private page with photo, poem and audio — for 48 hours.' },
      { n: '05', title: 'Listen', text: 'Poetry Cam narrates the poem in one of several voices and reads it aloud — on the device and on the shared page.' },
    ],
  },
  examples: {
    eyebrow: 'Examples',
    title: 'What Poetry Cam makes of an image',
    intro: 'Every poem is one of a kind — generated from the subject and the prompt, with style and form freely chosen.',
  },
  audio: {
    eyebrow: 'Listen',
    title: 'Hear your poem',
    body:
      'Poetry Cam doesn’t stop at paper: it voices every poem and reads it aloud in a natural voice. A built-in speaker plays it right on the device — or you can listen later on the shared page.',
    points: [
      'Spoken output on the device and on the shared page',
      'Several voices keep it varied',
      'Written poetry becomes a performed experience',
    ],
  },
  sharing: {
    eyebrow: 'Sharing',
    title: 'Share your moment — then it’s gone',
    body:
      'The QR code on the printout opens a private page with photo, poem and audio. It’s deliberately fleeting: after 48 hours everything is permanently deleted.',
    points: [
      'One link, valid for 48 hours — then irreversibly deleted',
      'No accounts, no sign-in, no personal data',
      'No tracking, not discoverable by search engines (noindex)',
      'Shared only with explicit consent — revocable at any time',
    ],
    cta: 'More on sharing & privacy',
    note: 'Deliberately ephemeral — a keepsake, not a data profile.',
  },
  useCasesIntro: {
    eyebrow: 'Where it fits',
    title: 'Where Poetry Cam delights',
    intro: 'In the classroom, at a trade fair or at a celebration — Poetry Cam makes AI tangible and creates lasting moments.',
  },
  storyTeaser: {
    eyebrow: 'Story',
    title: 'From cardboard model to polished device',
    body:
      'In just over a year an idea became a ready-to-use device — four versions, countless iterations and a patent application. The whole development story at a glance.',
    cta: 'Read the story',
  },
  founder: {
    eyebrow: 'About the inventor',
    title: 'Georg Klassen',
    body:
      'Georg Klassen (TUM alumnus, 2009) is an innovator, AI enthusiast and hands-on tinkerer from Munich. Working professionally in digital analytics and artificial intelligence, he pairs technical know-how with curiosity and a love of experimentation. With Poetry Cam he realises his vision of making technology tangible and pairing creativity with AI. What began as a cardboard model became a patent-pending invention — a camera that understands images and tells stories.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Interested in Poetry Cam?',
    body: 'Whether it’s collaboration, booking for an event or a pilot at your school — I welcome every message and new perspective.',
    cta: 'Write an email',
    subject: 'Poetry Cam – General enquiry',
  },
  footer: {
    impressum: 'Imprint',
    datenschutz: 'Privacy',
    rights: '© Georg Klassen, 2026.',
    addressLabel: 'Address',
    address: 'Munich · Germany',
    emailLabel: 'Email',
    note: 'A private project presenting the Poetry Cam invention.',
  },
  email: 'info@digilyze.de',
};

export const content: Record<Locale, SiteContent> = { de, en };
export const getContent = (locale: Locale): SiteContent => content[locale];
