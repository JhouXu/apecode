import type { DefaultTheme } from "vitepress";
import { juejin, csdn, github, juejinIcon, csdnIcon } from "./meta.mts";

export const socialLinks: DefaultTheme.SocialLink[] = [
  // {
  //   icon: {
  //     svg: juejinIcon,
  //   },
  //   link: `${juejin}`,
  // },

  // {
  //   icon: {
  //     svg: csdnIcon,
  //   },
  //   link: `${csdn}`,
  // },

  { icon: "github", link: `${github}` },
];
