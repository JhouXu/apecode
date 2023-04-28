import { navItem } from "./types";

let id = 1;
const file: navItem[] = [
  {
    id: id++,
    text: "文件转换器",
    link: "https://convertio.co/zh/",
    desc: "将您的文件转换成任意格式",
  },
  {
    id: id++,
    text: "图像压缩",
    link: "https://docsmall.com/image-compress",
    desc: "无需改变图片尺寸，极大压缩图片体积，视觉效果几乎一致",
  },
];

export default file;
