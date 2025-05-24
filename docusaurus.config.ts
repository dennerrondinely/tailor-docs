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
        alt: 'Tailor Logo',
        src: 'img/icon.png',
        srcDark: 'img/icon.png',
        width: 32,
        height: 32,
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
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/dennerrondinely/tailor/issues',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/dennerrondinely/tailor/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dennerrondinely/tailor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Denner Rondinely. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
