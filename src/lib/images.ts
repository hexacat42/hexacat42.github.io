// Central image map. Only images imported here are bundled/optimized by
// astro:assets. Content references images by key; pages resolve via `images`.
import prototypeV1 from '../images/prototype-v1.jpg';
import prototypeV2 from '../images/prototype-v2.jpg';
import prototypeV3 from '../images/prototype-v3.jpg';
import showcase from '../images/showcase.jpg';
import founder from '../images/founder.jpg';
import example1 from '../images/example-1.jpg';
import example2 from '../images/example-2.jpg';

export const images = {
  'prototype-v1': prototypeV1,
  'prototype-v2': prototypeV2,
  'prototype-v3': prototypeV3,
  showcase,
  founder,
  'example-1': example1,
  'example-2': example2,
} as const;

export type ImageKey = keyof typeof images;
export const getImage = (key?: ImageKey) => (key ? images[key] : undefined);
