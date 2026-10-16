import { navBlog } from "./nsBlog.mts";
import { navEssays } from "./nsEssays.mts";
import { navTranslation } from "./nsTranslation.mts";
import { navGrowth } from "./nsGrowth.mts";
import { navLaboratory } from "./nsLaboratory.mts";

export const nav = [
  // { text: "首页", link: "/" },
  { text: "🔗 导航", link: "/navigation" },
  {
    text: "🗃️ 随笔记",
    items: [
      // 概述 ~ 大前端
      ...navBlog.slice(0, navBlog.length - 1),
      // 八股文、翻译：平铺为单项链接，不展开三级菜单
      { text: "📝 八股文", link: navEssays[0]["link"] },
      { text: "🔤 翻译", link: navTranslation[navTranslation.length - 1]["link"] },
      // 其它
      navBlog[navBlog.length - 1],
    ],
  },
  { text: "🌱 成长", items: [...navGrowth] },
  { text: "🧪 实验室", items: [...navLaboratory] },
];
