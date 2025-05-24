import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tailor',
  tagline: 'A library for creating styled React components with Tailwind CSS in an organized and typed way',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://dennerrondinely.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/tailor-docs/',

  // GitHub pages deployment config.
  organizationName: 'dennerrondinely',
  projectName: 'tailor-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/dennerrondinely/tailor-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/tailor-social-card.jpg',
    navbar: {
      title: 'Tailor',
      logo: {
        alt: 'Tailor Icon',
        src: 'img/icon.png',
        srcDark: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/dennerrondinely/tailor',
          label: 'GitHub',
          position: 'right',
        },
      ],
      style: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dennerrondinely/tailor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tailor. Built with Docusaurus.`,
    },
    prism: {
      theme: {
        plain: {
          color: '#E8E8E8',
          backgroundColor: '#2A2D34',
        },
        styles: [
          {
            types: ['comment'],
            style: {
              color: '#6A6A6A',
            },
          },
          {
            types: ['string', 'attr-value'],
            style: {
              color: '#95E1D3',
            },
          },
          {
            types: ['tag', 'keyword'],
            style: {
              color: '#FF6B6B',
            },
          },
          {
            types: ['function', 'type'],
            style: {
              color: '#4ECDC4',
            },
          },
          {
            types: ['number', 'boolean'],
            style: {
              color: '#FFD93D',
            },
          },
          {
            types: ['punctuation', 'operator'],
            style: {
              color: '#AEEBFF',
            },
          },
        ],
      },
      darkTheme: {
        plain: {
          color: '#E8E8E8',
          backgroundColor: '#1E2024',
        },
        styles: [
          {
            types: ['comment'],
            style: {
              color: '#6A6A6A',
            },
          },
          {
            types: ['string', 'attr-value'],
            style: {
              color: '#95E1D3',
            },
          },
          {
            types: ['tag', 'keyword'],
            style: {
              color: '#FF6B6B',
            },
          },
          {
            types: ['function', 'type'],
            style: {
              color: '#4ECDC4',
            },
          },
          {
            types: ['number', 'boolean'],
            style: {
              color: '#FFD93D',
            },
          },
          {
            types: ['punctuation', 'operator'],
            style: {
              color: '#AEEBFF',
            },
          },
        ],
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

