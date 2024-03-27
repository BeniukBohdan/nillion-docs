// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import 'dotenv/config';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nillion Builder Docs',
  tagline:
    'Nillion is a secure computation network that decentralizes trust for high value data',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.nillion.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    // pass in .env variables client side
    downloadBaseUrl: process.env.DOWNLOAD_BASE,
    sdkAppleM: process.env.DOWNLOAD_SDK_APPLE_M,
    sdkAppleIntel: process.env.DOWNLOAD_SDK_APPLE_INTEL,
    sdkLinuxArm: process.env.DOWNLOAD_SDK_LINUX_ARM,
    sdkLinuxIntel: process.env.DOWNLOAD_SDK_LINUX_INTEL,

    pyClientAppleM: process.env.DOWNLOAD_PYCLIENT_APPLE_M,
    pyClientAppleIntel: process.env.DOWNLOAD_PYCLIENT_APPLE_INTEL,
    pyClientLinuxArm: process.env.DOWNLOAD_PYCLIENT_LINUX_ARM,
    pyClientLinuxIntel: process.env.DOWNLOAD_PYCLIENT_LINUX_INTEL,

    pyNadaAppleM: process.env.DOWNLOAD_PYNADA,
    pyNadaAppleIntel: process.env.DOWNLOAD_PYNADA,
    pyNadaLinuxArm: process.env.DOWNLOAD_PYNADA,
    pyNadaLinuxIntel: process.env.DOWNLOAD_PYNADA,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/NillionNetwork/nillion-docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: ['docusaurus-theme-github-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/nillion-banner-card.jpeg',
      navbar: {
        title: 'Nillion Documentation',
        logo: {
          alt: 'Nillion logo',
          src: 'img/nillion-logo.jpeg',
        },
        items: [
          {
            href: 'https://github.com/NillionNetwork',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.nillhub.com',
            label: 'Forum',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Nillion`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      codeblock: {
        showGithubLink: true,
        githubLinkLabel: 'View on GitHub',
        showRunmeLink: false,
        runmeLinkLabel: 'Checkout via Runme',
      },
      algolia: {
        appId: 'I1AVSJUXEA',
        apiKey: '54efdeb0639df4a13b0e58e37360efe9', // search only - safe to share
        indexName: 'nillion_docs',
        searchPagePasitemapth: 'search',
      },
    }),
};

export default config;
