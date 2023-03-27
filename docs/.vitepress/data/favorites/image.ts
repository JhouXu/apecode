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
    text: "tingpng",
    link: "https://tinypng.com/",
    type: "无损压缩",
  },
];

export default image;
