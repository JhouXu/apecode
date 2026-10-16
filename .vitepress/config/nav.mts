import type { DefaultTheme } from "vitepress";
import { navBlog } from "./nsBlog.mts";
import { navEssays } from "./nsEssays.mts";
import { navTranslation } from "./nsTranslation.mts";
import { navGrowth } from "./nsGrowth.mts";
import { navLaboratory } from "./nsLaboratory.mts";
import { insertAfter } from "../utils";

export const nav: DefaultTheme.NavItem[] = [
  // { text: "首页", link: "/" },
  { text: "🔗 导航", link: "/navigation" },
  {
    text: "🗃️ 随笔记",
    items: insertAfter(
      navBlog,
      // 八股文、翻译 平铺为单项链接（不展开三级菜单），插入到 大前端 之后、其它 之前
      "🕸️ 大前端",
      { text: "📝 八股文", link: navEssays[0].link },
      { text: "🔤 翻译", link: navTranslation[navTranslation.length - 1].link }
    ),
  },
  { text: "🌱 成长", items: [...navGrowth] },
  { text: "🧪 实验室", items: [...navLaboratory] },
];
