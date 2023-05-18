import { navItem } from "./types";

let id = 1;
const file: navItem[] = [
  {
    id: id++,
    text: "Convertio",
    link: "https://convertio.co/zh/",
    desc: "【文件转换器】将您的文件转换成任意格式",
  },
  {
    id: id++,
    text: "SmallPdf",
    link: "https://smallpdf.com/cn",
    desc: "PDF 文件的所有在线操作。",
  },
];

export default file;
