import sidebarBlog from "./sidebarBlog";
import { navSidebarEssays } from "./navSidebarEssays";

export const sidebar: object = {
  "/pages/blog/": [{ text: "概述", link: "/pages/blog/blog.md" }, ...sidebarBlog],
  "/pages/essays/": [...navSidebarEssays],
};
