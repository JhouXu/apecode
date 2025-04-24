import type { Plugin } from "vite";
import type { Item as BlogItem } from "../types/blog.mts";

import { getReadingTime, getPublicTime } from "../utils";
import { BlogData } from "../data/blog.mts";

export function MarkdownTransform(): Plugin {
  return {
    name: "apecode-md-transform",
    enforce: "pre",
    async transform(code, path) {
      if (!path.match(/\.md\b/)) return null;
      const [_router, fileName] = path.split("/").slice(-2);

      // Whitelist
      if (
        (_router === "docs" && fileName === "index.md") ||
        (_router === "docs" && fileName === "navigation.md") ||
        _router === "literature"
      ) {
        return code;
      }

      // Add PageInfo
      const BD = BlogData.reduce<BlogItem[]>((acc, item) => {
        if (item.items) acc.push(...item.items);
        return acc;
      }, []);
      const { readTime, words } = getReadingTime(code);
      const publicTime = getPublicTime(BD, `${_router}/${fileName}`);
      code = code.replace(
        /^#\s.+$/gm,
        `$&\n\n<PageInfo readingTime="${readTime}" wordCount="${words}" publicTime="${publicTime}"/>\n`
      );

      return code;
    },
  };
}
