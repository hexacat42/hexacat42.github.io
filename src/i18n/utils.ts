export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (locales as readonly string[]).includes(x);
}

/** Locale from a URL path (first segment), falling back to the default. */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return isLocale(seg) ? seg : defaultLocale;
}

/** Prefix a logical path (e.g. "/story") for a locale. de → "/story", en → "/en/story". */
export function localizePath(path: string, locale: Locale): string {
  const clean = '/' + path.replace(/^\/+/, '');
  if (locale === defaultLocale) return clean;
  return clean === '/' ? '/en' : `/en${clean}`;
}

/** Strip any locale prefix to get the logical path. */
export function unlocalizePath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (isLocale(parts[0])) parts.shift();
  return '/' + parts.join('/');
}

export const otherLocale = (l: Locale): Locale => (l === 'de' ? 'en' : 'de');
export const htmlLang = (l: Locale): string => (l === 'de' ? 'de-DE' : 'en');
export const ogLocale = (l: Locale): string => (l === 'de' ? 'de_DE' : 'en_US');
