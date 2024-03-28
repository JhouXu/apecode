const sidebarCollapsed: boolean = true;

export const navBlog = [
  { text: "概述", link: "/blog/blog.md" },
  { text: "Javascript", link: "/blog/js-ajax.md" },
  { text: "Css", link: "/blog/css-center.md" },
  { text: "微信小程序", link: "/blog/program-navigation-bar-height.md" },
  { text: "前端算法", link: "/blog/algorithm-encryption.md" },
  { text: "实际开发", link: "/blog/example-html2canvas.md" },
  { text: "插件笔记", link: "/blog/js-preload.md" },
  { text: "其它", link: "/blog/tencent-cloud-server.md" },
];

export const sidebarBlog = [
  { text: "概述", collapsed: sidebarCollapsed, link: "/blog/blog.md" },
  {
    text: "Javascript",
    collapsed: sidebarCollapsed,
    items: [
      { text: "原生 AJAX 的异步请求", link: "/blog/js-ajax.md" },
      { text: "浏览器对象模型 BOM", link: "/blog/js-bom.md" },
      { text: "Canvas 学习笔记", link: "/blog/js-canvas.md" },
      { text: "程序命名公式及规范", link: "/blog/js-standard.md" },
      { text: "touch 触摸事件以及常用触摸功能", link: "/blog/js-touch.md" },
      { text: "自封装常用的工具函数", link: "/blog/js-fun.md" },
    ],
  },
  {
    text: "Css",
    collapsed: sidebarCollapsed,
    items: [
      { text: "元素水平垂直居中的六种方式", link: "/blog/css-center.md" },
      { text: "CSS 中实现隐藏", link: "/blog/css-hidden.md" },
      { text: "浮动清除的四大主要方式", link: "/blog/css-clear-float.md" },
      { text: "标准盒模型与怪异盒模型的区别", link: "/blog/css-box-sizing.md" },
      { text: "Sass 的四种编译方式", link: "/blog/css-scss-compile.md" },
      { text: "Sass 动态转换单位", link: "/blog/css-scss-unit.md" },
      { text: "CSS Float 浮动布局", link: "/blog/css-float.md" },
      { text: "CSS Position 定位布局", link: "/blog/css-position.md" },
      { text: "CSS Flex 弹性布局", link: "/blog/css-flex.md" },
      { text: "CSS Grid 网格布局【待】", link: "/blog/css-grid.md" },
      { text: "CSS3 转换过渡动画", link: "/blog/css-animation.md" },
    ],
  },
  {
    text: "微信小程序",
    collapsed: sidebarCollapsed,
    items: [
      {
        text: "自定义小程序 navigationBar 的高度，以及避免设备系统不同产生不兼容",
        link: "/blog/program-navigation-bar-height.md",
      },
      { text: "微信小程序中实现定位以及逆地址解析", link: "/blog/program-position.md" },
      { text: "微信小程序解析 markdown", link: "/blog/program-markdown.md" },
      { text: "微信小程序之分享转发", link: "/blog/program-share.md" },
      { text: "微信小程序之数据通讯", link: "/blog/program-datacom.md" },
    ],
  },
  {
    text: "前端算法",
    collapsed: sidebarCollapsed,
    items: [{ text: "加密算法的认识及常用加密算法", link: "/blog/algorithm-encryption.md" }],
  },
  {
    text: "实际开发",
    collapsed: sidebarCollapsed,
    items: [
      { text: "html2canvas 实现截图附上模糊处理方案", link: "/blog/example-html2canvas.md" },
      { text: "audio 自动播放产生的困扰解决方案", link: "/blog/example-audio.md" },
      { text: "页面锚点快速定位跳转", link: "/blog/example-anchor.md" },
      { text: "获取当前标签页地址栏指定参数", link: "/blog/example-url-param.md" },
      { text: "将指定内容复制到剪切板", link: "/blog/example-shear.md" },
      { text: "获取当前设备的类型，以及是否为微信内置浏览器", link: "/blog/example-device-type.md" },
      { text: "drawImage 绘制多张图片时层次顺序错乱", link: "/blog/example-draw-image.md" },
      { text: "计算一维数组、一维数组对象指定属性的平均值 getAvg", link: "/blog/example-get-avg.md" },
      { text: "日期倒计时计算 countdown", link: "/blog/example-get-countdown.md" },
      { text: "关于 IOS 移动设备常见的触控问题以及解决方案", link: "/blog/example-ios-touch.md" },
    ],
  },
  {
    text: "插件笔记",
    collapsed: sidebarCollapsed,
    items: [
      { text: "PreloadJS 预加载及实现进度加载效果", link: "/blog/js-preload.md" },
      { text: "Swiper 实现指定的 slide 显示位置", link: "/blog/js-swiper-to.md" },
      { text: "Nuxt 填坑集合（面向实际开发解决方案）", link: "/blog/js-nuxt.md" },
      { text: "Vue-export2excel 导出表格", link: "/blog/js-vue-export2excel.md" },
      { text: "PannellumJS 快速搭建属于你的全景查看器", link: "/blog/js-pannellum.md" },
      { text: "SwiperJS 入门及实现常见的轮播效果", link: "/blog/js-swiper.md" },
      { text: "Vitepress 实战应用", link: "/blog/vue-vitepress.md" },
    ],
  },
  {
    text: "其它",
    collapsed: sidebarCollapsed,
    items: [
      { text: "腾讯云服务器购买以及部署", link: "/blog/tencent-cloud-server.md" },
      { text: "ESLint 语法检验工具的使用", link: "/blog/plugin-eslint.md" },
      { text: "Prettier 一个固执的代码格式化程序", link: "/blog/plugin-prettier.md" },
      { text: "常用的 git 命令总结", link: "/blog/git.md" },
      { text: "关于将前端项目部署到 Linux", link: "/blog/nginx.md" },
    ],
  },
];
