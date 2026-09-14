import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro', // 「取扱説明書ポータルについて」などのトップページ
    {
      type: 'category',
      label: 'HoloShift 取扱説明書',
      link: {
        type: 'doc',
        id: 'holoshift/index', // 「HoloShift 取扱説明書」自体をクリックした時に開くページ
      },
      items: [
        'holoshift/setup', // 導入手順
        'holoshift/quickstart',//簡単な使い方
        'holoshift/details', //詳細設定
        'holoshift/faq',
        'holoshift/render_queue',
      ],
    },
  ],
};

export default sidebars;