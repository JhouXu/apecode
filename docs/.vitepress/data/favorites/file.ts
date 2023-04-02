import { navItem } from "./types";

let id = 1;
const file: navItem[] = [
  {
    id: id++,
    text: "文件转换器",
    link: "https://convertio.co/zh/",
    desc: "将您的文件转换成任意格式",
  },
];

export default file;
