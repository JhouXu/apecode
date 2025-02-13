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
import { head } from "./config/head.mts";
import { socialLinks } from "./config/social.mts";
import { nav } from "./config/nav.mts";
import { sidebar } from "./config/sidebar.mts";

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client", "vitepress", "@nolebase/ui"],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
      ],
    },
  },

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

  head: [...head],

  /* 语言配置 */
  markdown: {
    languageAlias: {
      dos: "html",
      dash: "html",
      shall: "html",
      ejs: "html",
    },
  },
});
