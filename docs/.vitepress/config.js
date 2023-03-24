import { title, description, base, lang, github } from "./config/meta";
import { social } from "./config/social";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";

module.exports = {
  title: title,
  description: description,
  base: base,
  lang: lang,

  themeConfig: {
    siteTitle: "猿木函",
    logo: "https://github.com/JhouXu/apecode/blob/master/public/images/logo-h.svg",
    outline: "deep",

    // default config
    outlineTitle: "文章目录",
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
    lastUpdatedText: "最后一次更新于",

    // global config
    socialLinks: social,
    nav: nav,
    sidebar: sidebar,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Xiao Zan",
    },
  },
};
