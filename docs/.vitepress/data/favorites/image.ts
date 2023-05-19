import { navItem } from "./types";

let id = 1;
const image: navItem[] = [
  {
    id: id++,
    text: "RemoveBg",
    link: "https://www.remove.bg/",
    type: "抠图",
  },

  {
    id: id++,
    text: "bigjpg",
    link: "https://bigjpg.com/",
    type: "画质增强",
  },
  {
    id: id++,
    text: "AI画质增强云",
    link: "http://transcode.imperial-vision.com:8080/web/transcode/image",
    type: "画质增强",
  },
  {
    id: id++,
    text: "waifu2x",
    link: "https://waifu2x.udp.jp/",
    type: "画质增强",
  },

  {
    id: id++,
    text: "Recompressor",
    link: "https://zh.recompressor.com/",
    type: "无损压缩",
  },

  {
    id: id++,
    text: "Tinypng🔥",
    link: "https://tinypng.com/",
    desc: "Smart WebP, PNG and JPEG compression",
    type: "无损压缩",
  },
  {
    id: id++,
    text: "DocSmall",
    link: "https://docsmall.com/image-compress",
    desc: "无需改变图片尺寸，极大压缩图片体积，视觉效果几乎一致",
    type: "无损压缩",
  },
];

export default image;
