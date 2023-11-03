import sidebarBlog from "./sidebarBlog";

export const sidebar: object = {
  "/pages/blog/": [{ text: "概述", link: "/pages/blog/blog.md" }, ...sidebarBlog],
};
