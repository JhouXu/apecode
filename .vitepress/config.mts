import { defineConfig } from "vitepress";

import {
  titleEn,
  description,
  base,
  logo,
  outlineTitle,
  sidebarMenuLabel,
  docFooterPrev,
  docFooterNext,
  returnToTopLabel,
  darkModeSwitchLabel,
  editLinkPattern,
  editLinkText,
  lastUpdatedText,
  footerMessage,
  footerCopyright,
} from "./config/meta.mts";
import { socialLinks } from "./config/social.mts";
import { nav } from "./config/nav.mts";
import { sidebar } from "./config/sidebar.mts";
import algolia from "./config/algolia.mts";

export default defineConfig({
  title: titleEn,
  description: description,
  base: base,
  srcDir: "docs",
  lastUpdated: true,
  locales: {
    root: { label: "简体中文", lang: "zh-CN" },
  },

  themeConfig: {
    siteTitle: titleEn,
    logo: logo,
    outline: "deep",
    outlineTitle: outlineTitle,
    sidebarMenuLabel: sidebarMenuLabel,
    docFooter: {
      prev: docFooterPrev,
      next: docFooterNext,
    },
    returnToTopLabel: returnToTopLabel,
    darkModeSwitchLabel: darkModeSwitchLabel,
    editLink: {
      pattern: editLinkPattern,
      text: editLinkText,
    },
    lastUpdatedText: lastUpdatedText,

    nav: nav,
    sidebar: sidebar,
    socialLinks: socialLinks,

    footer: {
      message: footerMessage,
      copyright: footerCopyright,
    },
    search: {
      provider: "local",
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
});
