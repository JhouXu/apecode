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
    text: "CoolHue",
    link: "https://webkul.github.io/coolhue/",
    desc: "超好看的渐变颜色",
  },
  {
    id: id++,
    text: "Color Hunt",
    link: "https://colorhunt.co/",
    desc: "配色灵感收集",
  },
  {
    id: id++,
    text: "Brand Colors",
    link: "http://brandcolors.net/",
    desc: "世界知名品牌颜色收集网",
  },
  {
    id: id++,
    text: "LOLCOLORS",
    link: "https://www.webdesignrankings.com/resources/lolcolors/",
    desc: "独立小站，色彩组合推荐",
  },
  {
    id: id++,
    text: "flatuicolorpicker",
    link: "https://www.flatuicolorpicker.com/",
    desc: "颜色收集",
  },
];

export default color;
