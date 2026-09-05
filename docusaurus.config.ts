import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ぺこぺこ堂 ドキュメント',
  tagline: 'PECOPECO-DO Official Documentation Portal',
  favicon: 'img/PECOPECO-DO.ico',

  // GitHub Pages deployment config.
  url: 'https://pecosenpai.github.io',
  baseUrl: '/PECOPECO-DO-Document/',

  organizationName: 'pecosenpai',
  projectName: 'PECOPECO-DO-Document',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ぺこぺこ堂',
      logo: {
        alt: 'PECOPECO-DO Logo',
        src: 'img/PECOPECODO_LOGO.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '取扱説明書一覧',
        },
        {
          href: 'https://ag-works.booth.pm/',
          label: 'BOOTH ショップへ',
          position: 'right',
        },
        {
          href: 'https://github.com/pecosenpai/PECOPECO-DO-Document',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: '取扱説明書一覧',
              to: '/docs/intro',
            },
            {
              label: 'HoloShift',
              to: '/docs/holoshift',
            },
          ],
        },
        {
          title: 'ショップ & SNS',
          items: [
            {
              label: 'BOOTH ショップ',
              href: 'https://ag-works.booth.pm/',
            },
            {
              label: '公式X (Twitter)',
              href: 'https://x.com/Pecosenpai_CN',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ぺこぺこ堂 (PECOPECO-DO). Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
