import { blog } from "./blog";

export const nav: Array<Object> = [
  { text: "首页", link: "/" },
  { text: "随笔记", link: blog[0].link },
  {
    text: "日常工具",
    items: [
      { text: "🔗资源导航", link: "/tool/favorites" },
      { text: "😍表情符号", link: "/tool/emoji" },
    ],
  },
  { text: "更新日志", link: "/log" },
];
