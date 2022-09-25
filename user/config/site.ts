import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://davidcode.netlify.app/',
  title: '大衛打code',
  subtitle: '👾 Davidcode - Built using QWER with ❤',
  description: '👾 Davidcode - Built using QWER with ❤',
  lang: 'en',
  timeZone: 'Asia/Taipei',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'Davidcode',
    status: '👾',
    statusTip:
      '<a href="https://github.com/davidcode0128/davidcode.tw" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >Coding</a> is so interesting!',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://davidcode.netlify.app/',
    github: 'https://github.com/davidcode0128',
    email: 'ckorsock1@gmail.com',
    bio: `Learning from 0 to 1.<br/>Start from nowhere to somewhere.`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/davidcode0128'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
        '<link rel="preconnect" href="https://plausible.io/davidcode.netlify.app" />',
        '<script defer type="text/partytown" data-domain="davidcode.netlify.app" src="https://plausible.io/js/plausible.js"></script>',
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

export const giscusConfig: Giscus.Config = {
  // src: 'https://giscus.app/client.js',
  enable: true,
  id: 'giscus-comment',
  repo: 'davidcode0128/davidcode.tw',
  repoId: 'R_kgDOIC3YZA',
  category: 'BlogComment',
  categoryId: 'DIC_kwDOIC3YZM4CRllW',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: '認識我',
    url: '/about',
  },
//  {
//    name: 'To external site 📄',
//    url: 'https://external.com.tw/',
//    rel: 'external',
//  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: '認識我',
      url: '/about',
    },
//  {
//    name: 'To external site 📄',
//    url: 'https://external.com.tw/',
//    rel: 'external',
//  },
  ],
};
