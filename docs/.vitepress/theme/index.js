import { onMounted, watch, nextTick } from "vue";
import { useData, useRoute } from "vitepress";

import giscusTalk from "vitepress-plugin-comment-with-giscus";
import mediumZoom from "medium-zoom";

import NavCard from "../components/NavCard.vue";
import EmojiCard from "../components/EmojiCard.vue";

import theme from "vitepress/theme";
import "./tailwind.postcss";
import "./styles/custom.scss";
import "./styles/home.scss";
import "./styles/nav.scss";
import "./styles/search.scss";
import "./styles/aside.scss";

export default {
  ...theme,
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
    ctx.app.component("NavCard", NavCard);
    ctx.app.component("EmojiCard", EmojiCard);
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = useData();
    const route = useRoute();

    // medium-zoom
    const initZoom = () => {
      // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      mediumZoom(".main img", { background: "#1e1e2099" });
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
