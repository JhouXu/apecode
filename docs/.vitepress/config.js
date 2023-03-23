module.exports = {
  lang: "zh-Hans",
  title: "标题",
  description: "描述",
  base: "website",

  themeConfig: {
    siteTitle: "标题",
    logo: "https://vitepress.dev/vite.svg",

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
