/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Welcome',
      defaultStyle: true,
    },
    'welcome',
    'nucleus-builders-program',
    'quickstart',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'About',
      defaultStyle: true,
    },
    'what-is-nillion',
    'high-value-data',
    'multi-party-computation',
    'nillions-mpc-protocol',

    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Components',
      defaultStyle: true,
    },
    'concepts',
    {
      type: 'category',
      label: 'Nillion SDK and Tools',
      link: {
        type: 'doc',
        id: 'nillion-sdk-and-tools',
      },
      items: [
        'user-keygen',
        'node-keygen',
        'node-key2peerid',
        'pynadac',
        'program-simulator',
        'run-local-cluster',
        'nil-cli',
      ],
    },
    {
      type: 'category',
      label: 'Nillion Client',
      link: {
        type: 'doc',
        id: 'nillion-client',
      },
      items: [
        {
          type: 'category',
          label: 'Python Client Examples',
          link: {
            type: 'doc',
            id: 'python-client-examples',
          },
          collapsed: false,
          items: [
            'store-secrets',
            'retrieve-secret',
            {
              type: 'category',
              label: 'Permissions',
              link: {
                type: 'doc',
                id: 'permissions',
              },
              collapsed: false,
              items: [
                {
                  type: 'link',
                  label: 'Permissions Examples',
                  href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/permissions',
                },
              ],
            },
            {
              type: 'category',
              label: 'Compute',
              link: {
                type: 'doc',
                id: 'compute',
              },
              collapsed: false,
              items: [
                {
                  type: 'link',
                  label: 'Single Party Examples',
                  href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/client_single_party_compute',
                },
                {
                  type: 'link',
                  label: 'Multi Party Examples',
                  href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/client_multi_party_compute',
                },
              ],
            },
          ],
        },
        {
          type: 'link',
          label: 'Python Client Reference',
          href: 'https://docs.nillion.com/pydocs/client.html',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nada-Lang Framework',
      link: {
        type: 'doc',
        id: 'nada-lang-framework',
      },
      items: [
        {
          type: 'link',
          label: 'Nada Program Examples',
          href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/programs',
        },
      ],
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Resources',
      defaultStyle: true,
    },
    'community-and-support',
    'running-a-node',
    'technical-reports-and-demos',
    'glossary',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Links',
      defaultStyle: true,
    },
    {
      type: 'link',
      label: 'Website',
      href: 'https://nillion.com',
    },
    {
      type: 'link',
      label: 'X (formerly Twitter)',
      href: 'https://twitter.com/nillionnetwork',
    },
    {
      type: 'link',
      label: 'Github',
      href: 'https://github.com/NillionNetwork',
    },
    {
      type: 'link',
      label: 'Blog',
      href: 'https://medium.com/@Nillion_Network',
    },
  ],
};

export default sidebars;
