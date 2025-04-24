import { navBlog } from "./nsBlog.mts";
import { navEssays } from "./nsEssays.mts";
import { navLiterature } from "./nsLiterature.mts";
import { navLaboratory } from "./nsLaboratory.mts";

export const nav = [
  // { text: "首页", link: "/" },
  { text: "🔗 导航", link: "/navigation" },
  { text: "🗃️ 随笔记", items: [...navBlog] },
  { text: "📝 八股文", items: [...navEssays] },
  { text: "🌞 文摘", items: [...navLiterature] },
  { text: "🧠 实验室", items: [...navLaboratory] },
];
