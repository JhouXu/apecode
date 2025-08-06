import { sidebarBlog } from "./nsBlog.mts";
import { sidebarEssays } from "./nsEssays.mts";
import { sidebarTranslation } from "./nsTranslation.mts";
import { sidebarLiterature } from "./nsLiterature.mts";

export const sidebar = {
  "/blog/": [...sidebarBlog],
  "/essays/": [...sidebarEssays],
  "/translation/": [...sidebarTranslation],
  "/literature/": [...sidebarLiterature],
};
