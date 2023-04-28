export const sidebar: object = {
  "/tool/": [
    {
      text: "日常工具",
      collapsible: false,
      items: [
        { text: "🔗资源导航", link: "/tool/favorites" },
        { text: "😍表情符号", link: "/tool/emoji" },
      ],
    },
  ],

  "/blog/": [
    {
      text: "随笔记",
      collapsible: false,
      items: [
        { text: "微信小程序之分享转发", link: "/blog/program-share", type: "program" },
        { text: "微信小程序解析 markdown", link: "/blog/program-markdown", type: "program" },
        { text: "CSS3 转换过渡动画", link: "/blog/css-animation", type: "css" },
        { text: "Canvas 学习笔记", link: "/blog/js-canvas", type: "javascript" },
        { text: "Vitepress 实战应用", link: "/blog/vue-vitepress", type: "javascript" },
        { text: "SwiperJS 入门及实现常见的轮播效果", link: "/blog/js-swiper", type: "javascript" },
        { text: "PannellumJS 快速搭建属于你的全景查看器", link: "/blog/js-pannellum", type: "javascript" },
        { text: "Nuxt 填坑集合（面向实际开发解决方案）", link: "/blog/js-nuxt", type: "javascript" },
        { text: "微信小程序中实现定位以及逆地址解析", link: "/blog/program-position", type: "program" },
      ],
    },
  ],
};
