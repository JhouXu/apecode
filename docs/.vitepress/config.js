import { title, titleEn, description, base, logo, github } from "./data/meta";
import { socialLinks } from "./config/social";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
import algolia from "./config/algolia";

module.exports = {
  title: titleEn,
  description,
  base,
  locales: {
    root: { label: "简体中文", lang: "zh-CN" },
  },
  lastUpdated: true,

  themeConfig: {
    siteTitle: titleEn,
    logo: logo,

    // default config
    outline: "deep",
    outlineTitle: "目录",
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

    search: {
      provider: "local",
    },

    // global config
    socialLinks,
    nav,
    sidebar,
    // algolia,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 - 2024 💓 Xiao Zan",
    },
  },

  head: [
    ["meta", { name: "referrer", content: "never" }],

    ["link", { rel: "icon", href: "./images/logo.png" }],
    ["link", { rel: "keywords", content: "关键词" }],
    ["link", { rel: "description", content: "描述" }],

    [
      "script",
      {},
      `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "jporfk7f2x");
    `,
    ],
  ],
};
