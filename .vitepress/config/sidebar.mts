import { sidebarBlog } from "./nsBlog.mts";
import { sidebarEssays } from "./nsEssays.mts";
import { sidebarTranslation } from "./nsTranslation.mts";
import { sidebarGrowth } from "./nsGrowth.mts";
import { insertAfter } from "../utils";

export const sidebar = {
  // 八股文、翻译 详情页与随笔记共用聚合侧边栏
  "/blog/": insertAfter(
    sidebarBlog,
    // 八股文、翻译 分组插入到 大前端 之后、其它 之前
    "🕸️ 大前端",
    { text: "📝 八股文", items: [...sidebarEssays], collapsed: true },
    { text: "🔤 翻译", items: [...sidebarTranslation], collapsed: true }
  ),
  "/growth/": [...sidebarGrowth],
};
