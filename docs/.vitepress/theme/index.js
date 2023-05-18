import theme from "vitepress/theme";
import "./tailwind.postcss";
import "./styles/custom.scss";
import "./styles/home.scss";
import "./styles/nav.scss";
import "./styles/search.scss";
import "./styles/aside.scss";

import { useData, useRoute } from "vitepress";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import NavCard from "../components/NavCard.vue";
import EmojiCard from "../components/EmojiCard.vue";

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
