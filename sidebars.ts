import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '📦 頒布商品マニュアル',
      collapsible: false,
      items: [
        'item-8767429/index',
      ],
    },
  ],
};

export default sidebars;
