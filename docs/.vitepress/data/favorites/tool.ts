import { navItem } from "./types";

let id = 1;
const tool: navItem[] = [
  {
    id: id++,
    text: "cubic-bezier",
    link: "https://cubic-bezier.com/#.17,.67,.83,.67",
    desc: "可视化调试贝塞尔曲线",
    type: "贝塞尔曲线",
  },
  {
    id: id++,
    text: "Easing functions",
    link: "https://easings.net/",
    desc: "Easing functions specify the rate of change of a parameter over time.",
    type: "贝塞尔曲线",
  },

  {
    id: id++,
    text: "Cool Backgrounds",
    link: "https://coolbackgrounds.io/",
    desc: "",
    type: "图片",
  },

  {
    id: id++,
    text: "BackImage",
    link: "https://nav.rdonly.com/laboratory/bgimage/backimage.html",
    desc: "可视化博客文章生成器",
    type: "图片",
  },

  {
    id: id++,
    text: "Neumorphism",
    link: "https://neumorphism.io/",
    desc: "可视化拟物风格调试",
    type: "CSS",
  },
  {
    id: id++,
    text: "Webgradients",
    link: "https://webgradients.com/",
    desc: "180个线性渐变的免费集合，您可以在网站的任何部分用作内容背景。",
    type: "CSS",
  },

  {
    id: id++,
    text: "Dbdiagram",
    link: "https://dbdiagram.io/d",
    desc: "可视化数据库图关系绘制",
    type: "数据库图",
  },
];

export default tool;
