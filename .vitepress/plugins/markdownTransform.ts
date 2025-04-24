import type { Plugin } from "vite";
import { getReadingTime } from "../utils";

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
        (_router === "blog" && fileName === "blog.md") ||
        (_router === "essays" && fileName === "essays.md") ||
        _router === "literature"
      ) {
        return code;
      }

      // Add PageInfo
      const { readTime, words } = getReadingTime(code);
      code = code.replace(/^#\s.+$/gm, `$&\n\n<PageInfo readingTime="${readTime}" wordCount="${words}"/>\n`);

      return code;
    },
  };
}
