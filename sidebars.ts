import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '📦 頒布商品マニュアル',
      collapsible: false,
      items: [
        'holoshift/index',
      ],
    },
  ],
};

export default sidebars;
