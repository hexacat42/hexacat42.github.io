import type { ImageKey } from '../lib/images';
import type { Locale } from '../i18n/utils';

export interface Poem {
  order: number;
  text: string; // the real German artifact — shown as-is on both locales
  style?: Record<Locale, string>;
  form?: Record<Locale, string>;
  date?: string;
  image?: ImageKey;
}

// Real Poetry Cam outputs. Add more as they're collected (with their photos).
export const poems: Poem[] = [
  {
    order: 1,
    text: `Eine Frau in der Ecke tippt sehr fein,
mit Kopfhörern hört sie Musik ganz allein,
Fragt der Kellner: „Was darf's denn nun sein?"
Sagt sie lachend: „Ich bestell' einen Online-Wein!"`,
    style: { de: 'Humorvoll', en: 'Humorous' },
    form: { de: 'Vierzeiler', en: 'Quatrain' },
    date: '2025-03-12 13:06:20',
    image: 'example-2',
  },
];

export const poemLabels: Record<Locale, { style: string; form: string; date: string }> = {
  de: { style: 'Stil', form: 'Form', date: 'Zeit' },
  en: { style: 'Style', form: 'Form', date: 'Time' },
};
