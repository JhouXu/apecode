import { BlogData } from "../data/blog.mts";

const sidebarCollapsed: boolean = true;

export const navBlog: any = (() => {
  const D = JSON.parse(JSON.stringify(BlogData));
  const data: Array<Object> = [];

  D.forEach((item: any) => {
    let items = item["items"];
    data.push({ text: item["text"], link: item["link"] || items[items.length - 1]["link"] });
  });
  return data;
})();
export const sidebarBlog: any = (() => {
  // 数据作用域隔断处理
  const D = JSON.parse(JSON.stringify(BlogData));
  const data: Array<Object> = [];

  D.forEach((item: any) => {
    data.push({ ...item, collapsed: sidebarCollapsed });
  });
  return data;
})();
