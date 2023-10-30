import { blog } from "../data/blog/blog";
import navBlog from "./navBlog";

export const nav: Array<Object> = [
  { text: "首页", link: "/" },
  { text: "导航", link: "/pages/navigation" },
  { text: "随笔记", items: [...navBlog] },
  { text: "代码块", link: "/block" },
];
