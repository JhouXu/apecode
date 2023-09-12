import sidebarBlog from "./sidebarBlog";

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
