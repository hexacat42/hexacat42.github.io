import type { ImageKey } from '../lib/images';
import type { Locale } from '../i18n/utils';

export interface Milestone {
  order: number;
  date: string;
  title: string;
  image?: ImageKey;
  imageAlt?: string;
  icon?: string; // Icon name when there's no photo
  body: string[]; // paragraphs
  bullets?: string[];
}

const de: Milestone[] = [
  {
    order: 1, date: 'Mai 2024', title: 'Die Idee', icon: 'quill',
    body: [
      'Aus dem Wunsch, einen flüchtigen Moment in ein Gedicht zu verwandeln, entstand die Vision einer Kamera, die nicht nur sieht, sondern versteht: eine autonome KI-Kamera, die Fotos interpretiert und ihre Eindrücke als Worte ausgibt.',
      'So wurde die Poetry Cam geboren – eine Verbindung aus Technik und Poesie, die Emotion und Technologie vereint: aus einem Augenblick ein Gedicht, aus einem Bild eine Geschichte.',
    ],
  },
  {
    order: 2, date: 'Juni 2024', title: 'V1 — Papp-Prototyp', image: 'prototype-v1',
    imageAlt: 'Poetry Cam Prototyp V1 aus Karton',
    body: ['Ein Pappgehäuse als Form-, Maß- und Layoutstudie – der erste greifbare Schritt.'],
    bullets: [
      'Pappgehäuse als Form-, Maß- und Layoutstudie',
      'Komponenten (Raspberry Pi, Kamera, Drucker) nur grob positioniert – keine Funktion',
      'Ergebnis: validierte Ergonomie und Einbauraum als Grundlage für die Folgeversionen',
    ],
  },
  {
    order: 3, date: 'September 2024', title: 'V2 — Erstes MVP mit KI-Analyse', image: 'prototype-v2',
    imageAlt: 'Poetry Cam Prototyp V2, 3D-gedrucktes Gehäuse',
    body: ['Das erste funktionierende Gerät: Es nimmt ein Bild auf, lässt es von einer KI analysieren und druckt das Ergebnis.'],
    bullets: [
      '3D-gedrucktes Gehäuse, erste interne Kabelführung',
      'Akkubetrieb, WLAN und eine erste Software-Version',
      'Ergebnis: ein erstes MVP – Bild aufnehmen, KI-Analyse, Sofort-Druck; Laufzeit noch rund eine Stunde',
    ],
  },
  {
    order: 4, date: 'Februar 2025', title: 'V3 — Stabil und ausstellungsreif', image: 'prototype-v3',
    imageAlt: 'Poetry Cam Prototyp V3, stabile Version',
    body: ['Das erste voll funktionsfähige Exemplar – zuverlässig, robust und praxiserprobt.'],
    bullets: [
      'Eigene Prompt-Eingabe bequem per QR-Code auf dem Smartphone',
      'Flexible Stromversorgung über Akku oder Netzteil',
      'Ergebnis: überstand zwei Tage Messebetrieb ohne Ausfall',
    ],
  },
  {
    order: 5, date: 'Juni 2025', title: 'V4 — Leistungsfähig und einsatzbereit', image: 'showcase',
    imageAlt: 'Poetry Cam Vorzeigeexemplar mit Lautsprecher',
    body: ['Die ausgereifte Version für den Dauerbetrieb – mit Sprachausgabe und größerer Druckkapazität.'],
    bullets: [
      'Größerer Akku für den ganztägigen Betrieb',
      'Erweiterter Thermodrucker für längere Papierrollen',
      'Integrierter Lautsprecher liest die KI-Gedichte vor',
      'Ergebnis: technisch ausgereift und auf Dauerbetrieb ausgelegt',
    ],
  },
  {
    order: 6, date: '09.05.2025', title: 'Patentanmeldung', icon: 'certificate',
    body: [
      'Die technische Lösung wurde am 09.05.2025 beim Deutschen Patent- und Markenamt (DPMA) zum Patent angemeldet. Eine Bibliografie-Mitteilung liegt vor; die Veröffentlichung ist für den 12.11.2026 vorgesehen.',
    ],
  },
  {
    order: 7, date: 'Heute', title: 'Nächste Schritte', icon: 'arrow',
    body: ['Die Poetry Cam wird weiter erprobt und verfeinert.'],
    bullets: [
      'Einsatz in Bildung (Schulen) und auf Events (Workshops, Messen)',
      'Usability-Finetuning (Start-Flow, Kreativitätspfade)',
      'Weitere Verbesserung von Größe und Gewicht für mehr Mobilität',
      'Evaluierung von Kleinserie/Kit und Partnern',
    ],
  },
];

const en: Milestone[] = [
  {
    order: 1, date: 'May 2024', title: 'The idea', icon: 'quill',
    body: [
      'From the wish to turn a fleeting moment into a poem came the vision of a camera that doesn’t just see, but understands: an autonomous AI camera that interprets photos and renders its impressions as words.',
      'And so Poetry Cam was born — a fusion of technology and poetry that unites emotion and engineering: from a moment, a poem; from an image, a story.',
    ],
  },
  {
    order: 2, date: 'June 2024', title: 'V1 — Cardboard prototype', image: 'prototype-v1',
    imageAlt: 'Poetry Cam prototype V1 made of cardboard',
    body: ['A cardboard housing as a study of form, dimensions and layout — the first tangible step.'],
    bullets: [
      'Cardboard housing as a form, dimension and layout study',
      'Components (Raspberry Pi, camera, printer) only roughly placed — no function',
      'Result: validated ergonomics and internal space as the basis for later versions',
    ],
  },
  {
    order: 3, date: 'September 2024', title: 'V2 — First MVP with AI analysis', image: 'prototype-v2',
    imageAlt: 'Poetry Cam prototype V2, 3D-printed housing',
    body: ['The first working device: it captures an image, has an AI analyse it, and prints the result.'],
    bullets: [
      '3D-printed housing, first internal cabling',
      'Battery power, Wi-Fi and an initial software version',
      'Result: a first MVP — capture, AI analysis, instant print; runtime still about an hour',
    ],
  },
  {
    order: 4, date: 'February 2025', title: 'V3 — Stable and exhibition-ready', image: 'prototype-v3',
    imageAlt: 'Poetry Cam prototype V3, stable version',
    body: ['The first fully functional unit — reliable, robust and field-tested.'],
    bullets: [
      'Custom prompt entry conveniently via QR code on your phone',
      'Flexible power via battery or mains',
      'Result: survived two days of trade-fair use without a hitch',
    ],
  },
  {
    order: 5, date: 'June 2025', title: 'V4 — Powerful and ready to deploy', image: 'showcase',
    imageAlt: 'Poetry Cam showcase unit with speaker',
    body: ['The mature version for continuous operation — with spoken output and greater print capacity.'],
    bullets: [
      'Larger battery for all-day operation',
      'Extended thermal printer for longer paper rolls',
      'Built-in speaker reads the AI poems aloud',
      'Result: technically mature and built for sustained use',
    ],
  },
  {
    order: 6, date: '9 May 2025', title: 'Patent application', icon: 'certificate',
    body: [
      'The technical solution was filed for a patent with the German Patent and Trade Mark Office (DPMA) on 9 May 2025. A bibliographic notice has been issued; publication is scheduled for 12 November 2026.',
    ],
  },
  {
    order: 7, date: 'Today', title: 'Next steps', icon: 'arrow',
    body: ['Poetry Cam continues to be tested and refined.'],
    bullets: [
      'Use in education (schools) and at events (workshops, trade fairs)',
      'Usability fine-tuning (start flow, creative paths)',
      'Further improvements to size and weight for greater mobility',
      'Evaluating a small series / kit and partners',
    ],
  },
];

export const timeline: Record<Locale, Milestone[]> = { de, en };
