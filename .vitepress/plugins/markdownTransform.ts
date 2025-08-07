import type { Plugin } from "vite";
import type { Item as BlogItem } from "../types/blog.mts";

import { getReadingTime, getPublicTime } from "../utils";
import { BlogData } from "../config/nsBlog.mts";

export function MarkdownTransform(): Plugin {
  return {
    name: "apecode-md-transform",
    enforce: "pre",
    async transform(code, path) {
      if (!path.match(/\.md\b/)) return null;
      const [_router, fileName] = path.split("/").slice(-2);

      // // Whitelist
      // if (
      //   (_router === "docs" && fileName === "index.md") ||
      //   (_router === "docs" && fileName === "navigation.md") ||
      //   _router === "literature"
      // ) {
      //   return code;
      // }

      // 过滤 markdown code "# "
      const codeBlocks = code.match(/```[\s\S]*?```/g) || [];
      const placeholders = codeBlocks.map((_, i) => `__CODE_BLOCK_${i}__`);
      code = code.replace(/```[\s\S]*?```/g, (match) => placeholders.shift() || match);

      // Blog 的文章发布时间存储在 BlogData 中，需要解析出来
      const BD = BlogData.reduce<BlogItem[]>((acc, item) => {
        if (item.items) acc.push(...item.items);
        return acc;
      }, []);
      const publicTime = getPublicTime(BD, `${_router}/${fileName}`);

      const { readTime, words } = getReadingTime(code);

      // Add PageInfo
      code = code.replace(
        /^#\s.+$/gm,
        `$&\n\n<PageInfo readingTime="${readTime}" wordCount="${words}" publicTime="${publicTime}"/>\n`
      );

      // 恢复 markdown code "# "
      codeBlocks.forEach((block, i) => {
        code = code.replace(`__CODE_BLOCK_${i}__`, block);
      });

      return code;
    },
  };
}
