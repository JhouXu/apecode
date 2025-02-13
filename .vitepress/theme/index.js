import { onMounted, watch, nextTick, h } from "vue";
import { useData, useRoute } from "vitepress";

import giscusTalk from "vitepress-plugin-comment-with-giscus";
import mediumZoom from "medium-zoom";

import NavigationCard from "../components/NavigationCard.vue";
import ClassifyCard from "../components/ClassifyCard.vue";
import RecentlyCard from "../components/RecentlyCard.vue";
import BrowserCard from "../components/BrowserCard.vue";

import DefaultTheme from "vitepress/theme";
import Documate from "@documate/vue";

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

import "./tailwind.postcss";
import "./styles/theme.scss"; // 主题定制
import "./styles/font.scss"; // 字体引入
import "./styles/anime.scss"; // 自定义动画
import "./styles/style.scss"; // 自定义样式
import "./styles/home.scss";
import "./styles/nav.scss";
import "./styles/search.scss";
import "./styles/aside.scss";
import "@documate/vue/dist/style.css";

import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";

import googleAnalytics from "vitepress-plugin-google-analytics";

export default {
  ...DefaultTheme,

  // Layout: h(DefaultTheme.Layout, null, {
  //   "nav-bar-content-before": () =>
  //     h(Documate, {
  //       endpoint: "https://g7zfhaz3dn.us.aircode.run/ask",
  //     }),
  // }),

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      "nav-screen-content-after": () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    });
  },

  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("NavigationCard", NavigationCard);
    ctx.app.component("ClassifyCard", ClassifyCard);
    ctx.app.component("RecentlyCard", RecentlyCard);
    ctx.app.component("BrowserCard", BrowserCard);

    vitepressNprogress(ctx);
    googleAnalytics({
      id: "G-2H3H0SDMVL", // Replace with your GoogleAnalytics ID
    });
  },

  setup() {
    // 获取前言和路由
    const { frontmatter } = useData();
    const route = useRoute();

    // medium-zoom
    const initZoom = () => {
      // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      mediumZoom(".main p img", { background: "#1e1e2099" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // 评论组件
    giscusTalk(
      {
        repo: "JhouXu/apecode",
        repoId: "R_kgDOJMzoMg",
        category: "Announcements",
        categoryId: "DIC_kwDOJMzoMs4CVW-J",
        mapping: "pathname",
        inputPosition: "top",
        loading: "lazy",
      },
      {
        frontmatter,
        route,
      }
    );
  },
};
