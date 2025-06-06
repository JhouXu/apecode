import { version } from "../../package.json";

// docs version
export const docsVersion: string = version;

// base info
export const title: string = "猿代码";
export const titleEn: string = "ApeCode";
export const description: string = "描述";
export const base: string = "/apecode/";
export const logo: string = "./images/logo_min.png";

// social link
export const juejin: string = "https://juejin.cn/user/1126374170967367/posts";
export const csdn: string = "https://blog.csdn.net/weixin_44808483";
export const github: string = "https://github.com/JhouXu/apecode";

// doc label
export const outlineTitle: string = "目录";
export const sidebarMenuLabel: string = "导航";
export const docFooterPrev: string = "上一篇";
export const docFooterNext: string = "下一篇";
export const returnToTopLabel: string = "返回顶部";
export const darkModeSwitchLabel: string = "外观";
export const editLinkPattern: string = `${github}/blob/master/docs/:path`;
export const editLinkText: string = "编辑此页";
export const lastUpdatedText: string = "最后更新于";

// footer
export const footerMessage: string = "Released under the MIT License.";
const nowYear = new Date().getFullYear();
export const footerCopyright: string = `Copyright © 2023 - ${nowYear} 💓 ApeCode`;

// icon
export const juejinIcon: string =
  '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z"/></svg>';
export const csdnIcon: string =
  '<svg t="1679930088827" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1995" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" p-id="1996"></path></svg>';
