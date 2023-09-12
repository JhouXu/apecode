import { juejin, csdn, github, juejinIcon, csdnIcon } from "../data/meta";

export const socialLinks: Array<Object> = [
  {
    icon: {
      svg: juejinIcon,
    },
    link: `${juejin}`,
  },

  {
    icon: {
      svg: csdnIcon,
    },
    link: `${csdn}`,
  },

  { icon: "github", link: `${github}` },
];
