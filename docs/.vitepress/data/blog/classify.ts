let sort = 1;

export const classify = {
  js: {
    value: "Javascript",
    desc: "JavaScript 编程语言允许你在 Web 页面上实现复杂的功能。如果你看到一个网页不仅仅显示静态的信息，而是显示依时间更新的内容，或者交互式地图，或者 2D/3D 动画图像，或者滚动的视频播放器，等等——你基本可以确定，这需要 JavaScript 的参与。",
    icon: "https://img-blog.csdnimg.cn/20210902091112377.png",
    sort: sort++,
  },

  css: {
    value: "Css",
    desc: "层叠样式表（Cascading Style Sheets，缩写为 CSS）是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式。",
    icon: "https://img-blog.csdnimg.cn/20210902091310891.png",
    sort: sort++,
  },

  program: {
    value: "微信小程序",
    desc: "小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。",
    icon: "https://img-blog.csdnimg.cn/20210916094146491.png",
    sort: sort++,
  },

  algorithm: {
    value: "前端算法",
    desc: "算法是有效方法，包含一系列定义清晰的指令，并可在有限的时间及控件内清除地表述出来。在弱语言的 Javascript 中，应当如何合理使用呢？",
    icon: "https://img.zcool.cn/community/016b925d1b1214a801207640754e25.jpg@1280w_1l_2o_100sh.jpg",
    sort: sort++,
  },

  example: {
    value: "实际开发",
    desc: "在实际开发中所遇到d坑，以及具体的解决思路和方法。",
    icon: "https://img-blog.csdnimg.cn/20210607222821441.jpg",
    sort: sort++,
  },

  plugin: {
    value: "插件笔记",
    desc: "基于 javascript 所实现的功能插件，更高效、高质量地完成，广为人知的插件有：VueJS、SwiperJS等。",
    icon: "https://media.licdn.com/dms/image/C5603AQFvBhHibkKmiA/profile-displayphoto-shrink_800_800/0/1649448888640?e=2147483647&v=beta&t=o3SpmYxkGpDYGRf0skTv7gtnuuQxXnuzkuALoSoh78E",
    sort: sort++,
  },

  other: {
    value: "其它",
    desc: "一些零散的灵感记录。",
    icon: "https://www.freevector.com/uploads/vector/preview/24442/hand-drawn-idea-light-bulb.jpg",
    sort: sort++,
  },
};
