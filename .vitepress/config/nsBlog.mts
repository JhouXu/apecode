export const BlogData = [
  { text: "📖 概述", link: "/blog/blog.md", items: [] },
  {
    text: "🟨 Javascript",
    items: [
      { text: "原生 AJAX 的异步请求", link: "/blog/javascript/js-ajax.md" },
      { text: "浏览器对象模型 BOM", link: "/blog/javascript/js-bom.md" },
      { text: "Canvas 学习笔记", link: "/blog/javascript/js-canvas.md" },
      { text: "程序命名公式及规范", link: "/blog/javascript/js-standard.md" },
      { text: "touch 触摸事件以及常用触摸功能", link: "/blog/javascript/js-touch.md" },
      { text: "自封装常用的工具函数", link: "/blog/javascript/js-fun.md" },
    ],
  },
  {
    text: "🔴 ECMAScript",
    items: [
      { text: "ES5", link: "/blog/es/es-2009.md" },
      { text: "ES 2015", link: "/blog/es/es-2015.md" },
      { text: "ES 2016", link: "/blog/es/es-2016.md" },
      { text: "ES 2017", link: "/blog/es/es-2017.md" },
      { text: "ES 2018", link: "/blog/es/es-2018.md" },
      { text: "ES 2019", link: "/blog/es/es-2019.md" },
      { text: "ES 2020", link: "/blog/es/es-2020.md" },
      { text: "ES 2021", link: "/blog/es/es-2021.md" },
      { text: "ES 2022", link: "/blog/es/es-2022.md" },
      { text: "ES 2023", link: "/blog/es/es-2023.md" },
      { text: "ES 2024", link: "/blog/es/es-2024.md" },
      { text: "ES 2025", link: "/blog/es/es-2025.md" },
    ],
  },
  {
    text: "🟦 Css",
    items: [
      { text: "元素水平垂直居中的六种方式", link: "/blog/css/css-center.md" },
      { text: "CSS 中实现隐藏", link: "/blog/css/css-hidden.md" },
      { text: "浮动清除的四大主要方式", link: "/blog/css/css-clear-float.md" },
      { text: "标准盒模型与怪异盒模型的区别", link: "/blog/css/css-box-sizing.md" },
      { text: "Sass 的四种编译方式", link: "/blog/css/css-scss-compile.md" },
      { text: "Sass 动态转换单位", link: "/blog/css/css-scss-unit.md" },
      { text: "CSS Float 浮动布局", link: "/blog/css/css-float.md" },
      { text: "CSS Position 定位布局", link: "/blog/css/css-position.md" },
      { text: "CSS Flex 弹性布局", link: "/blog/css/css-flex.md" },
      { text: "CSS Grid 网格布局", link: "/blog/css/css-grid.md" },
      { text: "CSS3 转换过渡动画", link: "/blog/css/css-animation.md" },
    ],
  },
  {
    text: "🟩 微信小程序",
    items: [
      {
        text: "自定义小程序 navigationBar 的高度，以及避免设备系统不同产生不兼容",
        link: "/blog/program/program-navigation-bar-height.md",
      },
      { text: "微信小程序中实现定位以及逆地址解析", link: "/blog/program/program-position.md" },
      { text: "微信小程序解析 markdown", link: "/blog/program/program-markdown.md" },
      { text: "微信小程序之分享转发", link: "/blog/program/program-share.md" },
      { text: "微信小程序之数据通讯", link: "/blog/program/program-datacom.md" },
    ],
  },
  {
    text: "🧠 前端算法",
    items: [{ text: "加密算法的认识及常用加密算法", link: "/blog/algorithm/algorithm-encryption.md" }],
  },
  {
    text: "🚧 实际开发",
    items: [
      {
        text: "html2canvas 实现截图附上模糊处理方案",
        link: "/blog/example/example-html2canvas.md",
      },
      { text: "audio 自动播放产生的困扰解决方案", link: "/blog/example/example-audio.md" },
      { text: "页面锚点快速定位跳转", link: "/blog/example/example-anchor.md" },
      { text: "获取当前标签页地址栏指定参数", link: "/blog/example/example-url-param.md" },
      { text: "将指定内容复制到剪切板", link: "/blog/example/example-shear.md" },
      {
        text: "获取当前设备的类型，以及是否为微信内置浏览器",
        link: "/blog/example/example-device-type.md",
      },
      { text: "drawImage 绘制多张图片时层次顺序错乱", link: "/blog/example/example-draw-image.md" },
      {
        text: "计算一维数组、一维数组对象指定属性的平均值 getAvg",
        link: "/blog/example/example-get-avg.md",
      },
      { text: "日期倒计时计算 countdown", link: "/blog/example/example-get-countdown.md" },
      {
        text: "关于 IOS 移动设备常见的触控问题以及解决方案",
        link: "/blog/example/example-ios-touch.md",
      },
      { text: "如何在 vite 动态设置打包目录", link: "/blog/example/vite-build-dynamic.md" },
      { text: "环境变量使用指南", link: "/blog/example/vue-env-variables.md" },
      { text: "Github Connection Refused", link: "/blog/example/github-connection-refused.md" },
    ],
  },
  {
    text: "🔌 插件扩展",
    items: [
      { text: "PreloadJS 预加载及实现进度加载效果", link: "/blog/plugins/js-preload.md" },
      { text: "Swiper 实现指定的 slide 显示位置", link: "/blog/plugins/js-swiper-to.md" },
      { text: "Vue-export2excel 导出表格", link: "/blog/plugins/js-vue-export2excel.md" },
      { text: "PannellumJS 快速搭建属于你的全景查看器", link: "/blog/plugins/js-pannellum.md" },
      { text: "SwiperJS 入门及实现常见的轮播效果", link: "/blog/plugins/js-swiper.md" },
    ],
  },
  {
    text: "🕸️ 大前端",
    items: [
      { text: "Nuxt 填坑集合（面向实际开发解决方案）", link: "/blog/big/js-nuxt.md" },
      { text: "ESLint 语法检验工具的使用", link: "/blog/big/plugin-eslint.md" },
      { text: "Prettier 一个固执的代码格式化程序", link: "/blog/big/plugin-prettier.md" },
      { text: "Vitepress 实战应用", link: "/blog/big/vue-vitepress.md" },
      { text: "前端工程化之 Webpack", link: "/blog/big/plugin-webpack.md" },
      { text: "前端工程化之 Vite", link: "/blog/big/plugin-vite.md" },
      { text: "Node 学习笔记", link: "/blog/big/plugin-node.md" },
      { text: "表格开发常见的渲染方式", link: "/blog/big/table-render.md" },
      { text: "TypeScript 学习笔记", link: "/blog/big/typescript.md" },
      { text: "设计模式", link: "/blog/big/design-patterns.md" },
      { text: "Docker 学习笔记", link: "/blog/big/docker.md" },
      { text: "前端性能优化之飞书文档", link: "/blog/big/performance-doc-feishu.md" },
      { text: "包管理器比较", link: "/blog/big/package-manager-compare.md" },
      { text: "NVS 包管理器", link: "/blog/big/nvs.md" },
      {
        text: "从前端视角看 IIS、Nginx、Tomcat 与 Redis：部署与架构中的角色解读",
        link: "/blog/big/iis-nginx-tomcat-redis.md",
      },
    ],
  },
  {
    text: "📂 其它",
    items: [
      { text: "腾讯云服务器购买以及部署", link: "/blog/tencent-cloud-server.md" },
      { text: "常用的 git 命令总结", link: "/blog/git.md" },
      { text: "关于将前端项目部署到 Linux", link: "/blog/nginx.md" },
      { text: "开源许可的全面指南", link: "/blog/licenses.md" },
      { text: "客户端中的几种存储机制", link: "/blog/client-storage.md" },
      { text: "DeepSeek 本地部署", link: "/blog/deep-seek-local-deploy.md" },
      { text: "Review 2025", link: "/blog/review-2025.md" },
    ],
  },
];

function getNavData() {
  const D = JSON.parse(JSON.stringify(BlogData));
  const data: Array<Object> = [];

  D.forEach((item: any) => {
    let items = item["items"];
    data.push({ text: item["text"], link: item["link"] || items[items.length - 1]["link"] });
  });
  return data;
}
function getSidebarBlog() {
  const sidebarCollapsed: boolean = true;

  // 数据作用域隔断处理
  const D = JSON.parse(JSON.stringify(BlogData));
  const data: Array<Object> = [];

  D.forEach((item: any) => {
    data.push({ ...item, collapsed: sidebarCollapsed });
  });
  return data;
}

export const navBlog = [...getNavData()];
export const sidebarBlog = [...getSidebarBlog()];
