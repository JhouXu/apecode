import { blog } from "../data/blog";

// 数据处理
const sidebarBlog: any = []; // 对外暴露 /blog/
const sidebarBlogObj: any = []; // 控制分类的唯一性
blog.forEach((item) => {
  if (!sidebarBlogObj[item.type]) sidebarBlogObj[item.type] = { text: `${item.type}`, collapsible: false, items: [] };
  sidebarBlogObj[item.type].items.push(item);
});
// sidebarBlogObj.all = { text: "全部", collapsible: false, items: blog };
sidebarBlog.push(...Object.values(sidebarBlogObj));
sidebarBlog.map((item: object) => (item["collapsed"] = false));

export const sidebar: object = {
  "/pages/tool/": [
    {
      text: "日常工具",
      collapsed: false,
      items: [
        { text: "🎨资源导航", link: "/pages/tool/favorites" },
        { text: "🖥开发导航", link: "/pages/tool/dev" },
        { text: "😍表情符号", link: "/pages/tool/emoji" },
      ],
    },
  ],

  "/pages/blog/": [...sidebarBlog],
};
