import type { ImageKey } from '../lib/images';
import type { Locale } from '../i18n/utils';

export interface UseSection { heading: string; body?: string; bullets?: string[]; }
export interface UseCase {
  slug: 'bildung' | 'events' | 'feiern';
  order: number;
  path: string; // logical path (localized at render)
  title: string;
  navLabel: string;
  tagline: string;
  icon: string;
  heroKey?: ImageKey;
  heroAlt?: string;
  ctaSubject: string;
  intro: string;
  sections: UseSection[];
  pdf?: { href: string; label: string };
}

const de: UseCase[] = [
  {
    slug: 'bildung', order: 1, path: '/bildung', title: 'Poetry Cam im Unterricht',
    navLabel: 'Bildung', tagline: 'KI verständlich machen – Kreativität und Medienkompetenz fördern.',
    icon: 'book', heroKey: 'showcase', heroAlt: 'Poetry Cam im Bildungseinsatz',
    ctaSubject: 'Poetry Cam – Bildung',
    intro: 'Die Poetry Cam macht Künstliche Intelligenz begreifbar – ein niedrigschwelliger, kreativer Einstieg für Unterricht, Projekttage und Workshops.',
    sections: [
      {
        heading: 'Was bringt es der Schule und den Lehrkräften?',
        bullets: [
          'Niedrigschwelliger Einstieg in das Thema KI – ohne Vorwissen',
          'Passt in Projekttage, Workshops und den Fachunterricht',
          'Stärkt Medienkompetenz und kritisches Denken',
          'Ein greifbares Demonstrationsobjekt, das Aufmerksamkeit schafft',
        ],
      },
      {
        heading: 'Was bringt es den Schülerinnen und Schülern?',
        body: 'KI wird buchstäblich begreifbar. Aus eigenen Bildern entstehen Gedichte – und daraus die richtigen Fragen:',
        bullets: [
          'Wie interpretiert die KI mein Bild – und warum gerade so?',
          'Welche Rolle spielt der Prompt für das Ergebnis?',
          'Woher kommen die Trainingsdaten, und wo sind die Grenzen?',
          'Was bedeutet das für Themen wie Fake News und digitale Beständigkeit?',
        ],
      },
      {
        heading: 'In welchen Disziplinen lässt sich die Poetry Cam einsetzen?',
        bullets: [
          'Künstliche Intelligenz – ideal geeignet',
          'Softwareentwicklung (Python, Schnittstellen)',
          'Hardware und Elektronik (eingeschränkt)',
          '3D-Druck und Produktdesign',
        ],
      },
      {
        heading: 'Voraussetzungen für einen sinnvollen Einsatz',
        bullets: [
          'Begleitendes Material und didaktische Anleitung',
          'Vergleichsphasen zum Reflektieren der Ergebnisse',
          'Raum für die Diskussion von Chancen und Risiken',
        ],
      },
    ],
    pdf: { href: '/files/Didaktisches-Konzept_Poetry-Cam-im-Bildungsbereich.pdf', label: 'Didaktisches Konzept (PDF)' },
  },
  {
    slug: 'events', order: 2, path: '/events', title: 'Poetry Cam bei Events',
    navLabel: 'Events', tagline: 'Ein Messe-Highlight, das Technik und Emotion verbindet.',
    icon: 'calendar', heroKey: 'showcase', heroAlt: 'Poetry Cam auf einem Event',
    ctaSubject: 'Poetry Cam – Events',
    intro: 'Auf Messen und Events zieht die Poetry Cam Besucher an und macht KI erlebbar – ein Publikumsmagnet, der Aufmerksamkeit in Gespräche verwandelt.',
    sections: [
      {
        heading: 'Warum die Poetry Cam ein Messe-Highlight ist',
        bullets: [
          'Sofortiger Effekt: aus einem Foto wird in Sekunden ein gedrucktes Gedicht',
          'Hohe Sichtbarkeit: der Prozess ist für Umstehende unmittelbar nachvollziehbar',
          'Interaktive Besuchererfahrung mit persönlichem Ergebnis zum Mitnehmen',
          'Emotionaler Mehrwert durch Humor, Poesie und Überraschung',
        ],
      },
      {
        heading: 'Nutzen für Aussteller und Veranstalter',
        bullets: [
          'Mehr Aufmerksamkeit am Stand und längere Verweildauer',
          'Natürlicher Gesprächseinstieg über KI, Innovation oder Ihr Produkt',
          'Jedes Gedicht ist ein personalisiertes Giveaway – wertiger als Flyer',
          'Branding-Optionen: Prompts, QR-Codes und Papierrollen anpassbar',
        ],
      },
      {
        heading: 'Typische Anwendungsfälle',
        bullets: [
          'Innovation Corners und Technologie-Showcases',
          'Kreativ- oder Digitalisierungs-Themenstände',
          'HR- und Recruiting-Flächen („Mach ein Foto – nimm ein Gedicht mit")',
          'Bildungs-, Wissenschafts- und Kulturveranstaltungen',
        ],
      },
      {
        heading: 'Voraussetzungen für den Einsatz',
        bullets: [
          'Stromversorgung (230 V) zum Aufladen zwischendurch',
          'WLAN oder mobiler Hotspot für die KI-Verarbeitung',
          'Ausreichend Papierrollen je nach Besucheraufkommen',
          'Standpersonal, das den Ablauf erläutert und Besucher einlädt',
        ],
      },
    ],
  },
  {
    slug: 'feiern', order: 3, path: '/feiern', title: 'Poetry Cam auf Feiern',
    navLabel: 'Feiern', tagline: 'Poetische Momente, die bleiben – als Andenken zum Mitnehmen.',
    icon: 'sparkles', heroKey: 'showcase', heroAlt: 'Poetry Cam auf einer Feier',
    ctaSubject: 'Poetry Cam – Feiern',
    intro: 'Ob Hochzeit, Geburtstag oder Firmenfeier – die Poetry Cam verwandelt Fotos in persönliche Gedichte und sorgt für unvergessliche, greifbare Erinnerungen.',
    sections: [
      {
        heading: 'Warum die Poetry Cam ein Highlight auf Feiern ist',
        bullets: [
          'Ein Gesprächsthema, das Gäste zusammenbringt',
          'Jedes Gedicht ist ein persönliches Andenken zum Mitnehmen',
          'Überraschend, humorvoll und emotional zugleich',
          'Optional: das Gedicht wird vorgelesen – ein zusätzlicher Effekt',
        ],
      },
      {
        heading: 'Nutzen für Gastgeberinnen und Gastgeber',
        bullets: [
          'Eine Attraktion, die ohne Aufwand für Stimmung sorgt',
          'Persönliche Andenken statt beliebiger Give-aways',
          'Schöne Erinnerungen, die die Gäste mit nach Hause nehmen',
        ],
      },
      {
        heading: 'Typische Anlässe',
        bullets: ['Hochzeiten', 'Geburtstage', 'Familienfeiern', 'Firmen- und Jubiläumsfeiern'],
      },
      {
        heading: 'Voraussetzungen für den Einsatz',
        bullets: [
          'Eine Steckdose (230 V) in Reichweite',
          'WLAN oder mobiler Hotspot für die KI-Verarbeitung',
          'Ausreichend Papierrollen für den Abend',
          'Ein ruhiges Plätzchen, an dem die Gäste die Kamera ausprobieren',
        ],
      },
    ],
  },
];

const en: UseCase[] = [
  {
    slug: 'bildung', order: 1, path: '/bildung', title: 'Poetry Cam in the classroom',
    navLabel: 'Education', tagline: 'Make AI understandable — foster creativity and media literacy.',
    icon: 'book', heroKey: 'showcase', heroAlt: 'Poetry Cam in an educational setting',
    ctaSubject: 'Poetry Cam – Education',
    intro: 'Poetry Cam makes artificial intelligence tangible — a low-barrier, creative entry point for lessons, project days and workshops.',
    sections: [
      {
        heading: 'What does it offer schools and teachers?',
        bullets: [
          'A low-barrier introduction to AI — no prior knowledge needed',
          'Fits project days, workshops and subject lessons',
          'Strengthens media literacy and critical thinking',
          'A tangible demonstration object that draws attention',
        ],
      },
      {
        heading: 'What does it offer students?',
        body: 'AI becomes literally graspable. Their own images turn into poems — and into the right questions:',
        bullets: [
          'How does the AI interpret my image — and why like that?',
          'What role does the prompt play in the result?',
          'Where does the training data come from, and where are the limits?',
          'What does this mean for topics like fake news and digital permanence?',
        ],
      },
      {
        heading: 'Which subjects can Poetry Cam support?',
        bullets: [
          'Artificial intelligence — ideally suited',
          'Software development (Python, interfaces)',
          'Hardware and electronics (to a degree)',
          '3D printing and product design',
        ],
      },
      {
        heading: 'Prerequisites for meaningful use',
        bullets: [
          'Accompanying material and didactic guidance',
          'Comparison phases to reflect on the results',
          'Room to discuss opportunities and risks',
        ],
      },
    ],
    pdf: { href: '/files/Didaktisches-Konzept_Poetry-Cam-im-Bildungsbereich.pdf', label: 'Educational concept (PDF, German)' },
  },
  {
    slug: 'events', order: 2, path: '/events', title: 'Poetry Cam at events',
    navLabel: 'Events', tagline: 'A trade-fair highlight that pairs technology with emotion.',
    icon: 'calendar', heroKey: 'showcase', heroAlt: 'Poetry Cam at an event',
    ctaSubject: 'Poetry Cam – Events',
    intro: 'At trade fairs and events, Poetry Cam draws visitors in and makes AI tangible — a crowd-puller that turns attention into conversation.',
    sections: [
      {
        heading: 'Why Poetry Cam is a trade-fair highlight',
        bullets: [
          'Instant effect: a photo becomes a printed poem in seconds',
          'High visibility: bystanders can follow the process immediately',
          'An interactive experience with a personal result to take home',
          'Emotional value through humour, poetry and surprise',
        ],
      },
      {
        heading: 'Value for exhibitors and organisers',
        bullets: [
          'More attention at the booth and longer dwell time',
          'A natural conversation starter about AI, innovation or your product',
          'Every poem is a personalised giveaway — more valuable than a flyer',
          'Branding options: prompts, QR codes and paper rolls can be customised',
        ],
      },
      {
        heading: 'Typical applications',
        bullets: [
          'Innovation corners and technology showcases',
          'Creativity or digitalisation themed stands',
          'HR and recruiting areas ("take a photo — take a poem")',
          'Education, science and cultural events',
        ],
      },
      {
        heading: 'Requirements for use',
        bullets: [
          'Mains power (230 V) for occasional charging',
          'Wi-Fi or a mobile hotspot for the AI processing',
          'Enough paper rolls for the expected footfall',
          'Staff to explain the flow and invite visitors',
        ],
      },
    ],
  },
  {
    slug: 'feiern', order: 3, path: '/feiern', title: 'Poetry Cam at celebrations',
    navLabel: 'Celebrations', tagline: 'Poetic moments that last — a keepsake to take home.',
    icon: 'sparkles', heroKey: 'showcase', heroAlt: 'Poetry Cam at a celebration',
    ctaSubject: 'Poetry Cam – Celebrations',
    intro: 'Whether a wedding, a birthday or a company party — Poetry Cam turns photos into personal poems and creates unforgettable, tangible memories.',
    sections: [
      {
        heading: 'Why Poetry Cam is a highlight at celebrations',
        bullets: [
          'A talking point that brings guests together',
          'Every poem is a personal keepsake to take home',
          'Surprising, humorous and emotional all at once',
          'Optional: the poem is read aloud — an extra flourish',
        ],
      },
      {
        heading: 'Value for hosts',
        bullets: [
          'An attraction that sets the mood with no effort',
          'Personal keepsakes instead of generic giveaways',
          'Lovely memories that guests take home with them',
        ],
      },
      {
        heading: 'Typical occasions',
        bullets: ['Weddings', 'Birthdays', 'Family gatherings', 'Company and anniversary parties'],
      },
      {
        heading: 'Requirements for use',
        bullets: [
          'A power socket (230 V) within reach',
          'Wi-Fi or a mobile hotspot for the AI processing',
          'Enough paper rolls for the evening',
          'A quiet spot where guests can try the camera',
        ],
      },
    ],
  },
];

export const usecases: Record<Locale, UseCase[]> = { de, en };
export const getUseCase = (locale: Locale, slug: string): UseCase | undefined =>
  usecases[locale].find((u) => u.slug === slug);
