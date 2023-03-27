import { navItem } from "./types";

let id = 1;
const color: navItem[] = [
  {
    id: id++,
    text: "调色板",
    link: "https://flatuicolors.com/",
    desc: "",
  },
  {
    id: id++,
    text: "中国色",
    link: "http://zhongguose.com/",
    desc: "",
  },
  {
    id: id++,
    text: "日本传统色",
    link: "http://www.anduril.cn/",
    desc: "",
  },
];

export default color;
