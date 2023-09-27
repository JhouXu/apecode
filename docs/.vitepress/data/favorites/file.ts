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
    text: "ILovePdf🔥",
    link: "https://www.ilovepdf.com/zh-cn",
    desc: "PDF爱好者的在线工具。完全免费、易于使用、丰富的PDF处理工具，包括：合并、拆分、压缩、转换、旋转和解锁PDF文件，以及给PDF文件添加水印的工具等。仅需几秒钟即可完成。",
  },
  {
    id: id++,
    text: "SmallPdf",
    link: "https://smallpdf.com/cn",
    desc: "PDF 文件的所有在线操作。目前收费。",
  },
  {
    id: id++,
    text: "PDF合并打印",
    link: "https://lvfapiao.com/",
    desc: "电子发票PDF合并打印",
  },
];

export default file;
