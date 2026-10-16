// 导航下拉：仅展示二级分类（平铺链接，不展开三级菜单）
const GrowthNavData = [
  { text: "📖 语录", link: "/growth/quotation.md" },
  { text: "🧠 思考", link: "/growth/thinking.md" },
  { text: "📚 文摘", link: "/growth/excerpt-weakness.md" },
];

// 侧边栏：保留分组结构，始终展开
const GrowthSidebarData = [
  { text: "📖 语录", link: "/growth/quotation.md" },
  {
    text: "🧠 思考",
    items: [{ text: "思考", link: "/growth/thinking.md" }],
  },
  {
    text: "📚 文摘",
    items: [
      { text: "癞蛤蟆先生去看心理医生", link: "/growth/excerpt-toad.md" },
      { text: "人性的弱点", link: "/growth/excerpt-weakness.md" },
    ],
  },
];

export const navGrowth = [...GrowthNavData];
export const sidebarGrowth = [...GrowthSidebarData];
