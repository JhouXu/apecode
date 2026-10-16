import type { DefaultTheme } from "vitepress";

const TranslationData = [
  { text: "什么是提取、加载、转换（ELT）？", link: "/blog/translation/elt.md" },
  { text: "Conventional Commits 1.0.0", link: "/blog/translation/conventional-commits.md" },
];

export const navTranslation: DefaultTheme.NavItemWithLink[] = [...TranslationData];
export const sidebarTranslation: DefaultTheme.SidebarItem[] = [...TranslationData];
