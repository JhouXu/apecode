import { navItem } from "./types";

let id = 1;
// 开发软件
export const software: navItem[] = [
  {
    id: id++,
    text: "VSCode",
    link: "https://code.visualstudio.com/",
    desc: "代码编辑器，微软提供",
    type: "前端",
  },
  {
    id: id++,
    text: "HBuilderX",
    link: "https://www.dcloud.io/hbuilderx.html",
    desc: "国产代码编辑器，uni-app的好帮手。",
    type: "前端",
  },
  {
    id: id++,
    text: "IntelliJ IDEA",
    link: "https://www.jetbrains.com/idea/",
    desc: "领先的 Java 和 Kotlin IDE",
    type: "后端",
  },
];

// 在线文档
export const document: navItem[] = [
  {
    id: id++,
    text: "MDN Web Docs",
    link: "https://developer.mozilla.org/",
    desc: "自 2005 年以来记录 Web 技术，包括 CSS、HTML 和 JavaScript。",
  },
  {
    id: id++,
    text: "现代 JavaScript 教程",
    link: "https://javascript.info/",
    desc: "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
  },
  {
    id: id++,
    text: "Can i use",
    link: "https://caniuse.com/",
    desc: "提供了最新的浏览器支持表，以支持桌面和移动 Web 浏览器上的前端 Web 技术。",
  },
  {
    id: id++,
    text: "Code Points",
    link: "https://codepoints.net/",
    desc: "Unicode 标准中定义的所有字符。字符码点(code point)信息。",
  },
];

// 在线工具
export const tool: navItem[] = [
  {
    id: id++,
    text: "Gtmertrix ",
    link: "https://gtmetrix.com/",
    desc: "网站性能分析，在线可视化分析工具",
  },
];

// 其它
export const other: navItem[] = [
  {
    id: id++,
    text: "Snipaste",
    link: "https://zh.snipaste.com/",
    desc: "截图 + 贴图",
  },
  {
    id: id++,
    text: "ScreenToGif",
    link: "https://www.screentogif.com/",
    desc: "Screen, webcam and sketchboard recorder with an integrated editor",
  },
  {
    id: id++,
    text: "PotPlayer",
    link: "https://daumpotplayer.com/",
    desc: "万能格式影音视频播放器",
  },
  {
    id: id++,
    text: "Xmind",
    link: "https://xmind.cn/",
    desc: "一款 全功能 的思维导图和头脑风暴软件。",
  },
  {
    id: id++,
    text: "PxCook",
    link: "https://www.fancynode.com.cn/pxcook",
    desc: "高效易用的自动标注工具, 生成前端代码, 设计研发协作利器",
  },
  {
    id: id++,
    text: "FileZilla",
    link: "https://www.filezilla.cn/",
    desc: "免费开源的 FTP 方案",
  },
  {
    id: id++,
    text: "Tabby",
    link: "https://tabby.sh/",
    desc: "A terminal for the modern age",
  },
  {
    id: id++,
    text: "uTools",
    link: "https://u.tools/",
    desc: "新一代效率工具平台。自由组合插件应用，打造专属你的趁手工具集",
  },
];
