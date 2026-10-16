import { sidebarBlog } from "./nsBlog.mts";
import { sidebarEssays } from "./nsEssays.mts";
import { sidebarTranslation } from "./nsTranslation.mts";
import { sidebarGrowth } from "./nsGrowth.mts";

export const sidebar = {
  // 八股文、翻译 详情页与随笔记共用聚合侧边栏
  "/blog/": [
    // 概述 ~ 大前端
    ...sidebarBlog.slice(0, sidebarBlog.length - 1),
    // 八股文、翻译 位于 大前端 与 其它 之间
    { text: "📝 八股文", items: [...sidebarEssays], collapsed: true },
    { text: "🔤 翻译", items: [...sidebarTranslation], collapsed: true },
    // 其它
    sidebarBlog[sidebarBlog.length - 1],
  ],
  "/growth/": [...sidebarGrowth],
};
