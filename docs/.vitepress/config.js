import { title, description, base, logo, github } from "./config/meta";
import { socialLinks } from "./config/social";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
import algolia from "./config/algolia";

module.exports = {
  title,
  description,
  base,
  locales: {
    root: { label: "简体中文", lang: "zh-CN" },
  },
  lastUpdated: true,

  themeConfig: {
    siteTitle: false,
    logo,
    // default config
    outline: "deep",
    outlineTitle: "本文目录",
    sidebarMenuLabel: "导航",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "外观",
    editLink: {
      pattern: `${github}/blob/master/docs/:path`,
      text: "在 GitHub 上编辑此页",
    },
    lastUpdatedText: "最后更新",

    // global config
    socialLinks,
    nav,
    sidebar,
    algolia,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Xiao Zan",
    },
  },

  head: [["link", { rel: "icon", href: "./images/logo.png" }]],
};
