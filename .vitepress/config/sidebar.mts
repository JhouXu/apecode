import { sidebarBlog } from "./nsBlog.mts";
import { sidebarEssays } from "./nsEssays.mts";

export const sidebar = {
  "/blog/": [...sidebarBlog],
  "/essays/": [...sidebarEssays],
};
