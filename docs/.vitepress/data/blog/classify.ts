let sort = 1;

export const classify = {
  js: {
    value: "Javascript",
    desc: "允许在 Web 页面上实现复杂的功能。如果一个网页不仅仅显示静态的信息，而是显示依时间更新的内容，或者交互式地图，或者 2D/3D 动画图像，或者滚动的视频播放器，等等——这需要 JavaScript 的参与。",
    icon: "https://img-blog.csdnimg.cn/20210902091112377.png",
    color: "#f1da5b",
    link: "",
    sort: sort++,
  },

  css: {
    value: "Css",
    desc: "是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式。",
    icon: "https://img-blog.csdnimg.cn/20210902091310891.png",
    color: "#1b7fbc",
    link: "",
    sort: sort++,
  },

  program: {
    value: "微信小程序",
    desc: "是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。",
    icon: "https://img-blog.csdnimg.cn/20210916094146491.png",
    color: "#31c779",
    link: "",
    sort: sort++,
  },

  algorithm: {
    value: "前端算法",
    desc: "是有效方法，包含一系列定义清晰的指令，并可在有限的时间及控件内清除地表述出来。在弱语言的 Javascript 中，应当如何合理使用呢？",
    icon: "",
    color: "#264049",
    link: "",
    sort: sort++,
  },

  example: {
    value: "实际开发",
    desc: "在实际中所遇到d坑，以及具体的解决思路和方法。",
    icon: "",
    color: "#4e63ed",
    link: "",
    sort: sort++,
  },

  plugin: {
    value: "插件笔记",
    desc: "基于 javascript 所实现的功能插件，更高效、高质量地完成，广为人知的插件有：VueJS、SwiperJS等。",
    icon: "",
    color: "#5c3cf1",
    link: "",
    sort: sort++,
  },

  other: {
    value: "其它",
    desc: "一些零散的灵感记录。",
    icon: "https://www.frseevector.com/uploads/vector/preview/24442/hand-drawn-idea-light-bulb.jpg",
    color: "#aa923e",
    link: "",
    sort: sort++,
  },
};
