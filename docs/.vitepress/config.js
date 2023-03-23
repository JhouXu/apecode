module.exports = {
  lang: "zh-Hans",
  title: "标题",
  description: "描述",
  base: "/website/",

  themeConfig: {
    logo: "/images/logo.svg",
    // siteTitle: false,

    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>',
    },
  },

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Config",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      { text: "Changelog", link: "https://github.com/jhouxu" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "note",
          collapsible: false,
          items: [{ text: "Getting-Started", link: "/guide/getting-started" }],
        },
      ],
    },
  },
};
