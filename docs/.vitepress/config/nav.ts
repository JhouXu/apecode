import { blog } from "../data/blog/blog";
import navBlog from "./navBlog";

export const nav: Array<Object> = [
  { text: "首页", link: "/" },
  { text: "导航", link: "/pages/navigation" },
  { text: "随笔记", items: [...navBlog] },
  {
    text: "日常工具",
    items: [
      { text: "🎨资源导航", link: "/pages/tool/favorites" },
      { text: "🖥开发导航", link: "/pages/tool/dev" },
      { text: "😍表情符号", link: "/pages/tool/emoji" },
    ],
  },
];
