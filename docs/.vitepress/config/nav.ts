import { sidebar } from "./sidebar";

const blogLink = sidebar["/blog/"][0].items[0].link; // 首篇随笔记地址

export const nav: Array<Object> = [
  { text: "首页", link: "/" },
  { text: "随笔记", link: blogLink },
  {
    text: "日常工具",
    items: [
      { text: "🔗资源导航", link: "/tool/favorites" },
      { text: "😍表情符号", link: "/tool/emoji" },
    ],
  },
  { text: "更新日志", link: "/log" },
];
