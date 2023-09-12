import { blog } from "../data/blog";

export const nav: Array<Object> = [
  { text: "首页", link: "/" },
  { text: "随笔记", link: blog[0].link },
  {
    text: "日常工具",
    items: [
      { text: "🎨资源导航", link: "/pages/tool/favorites" },
      { text: "🖥开发导航", link: "/pages/tool/dev" },
      { text: "😍表情符号", link: "/pages/tool/emoji" },
    ],
  },
  { text: "更新日志", link: "/pages/log" },
];
