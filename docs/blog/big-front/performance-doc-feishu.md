---
layout: doc
date: "2025-05-20"
---

# 前端性能优化之飞书文档

[前端进阶 Eric - 前端性能优化方案顶级理解 👉](https://www.bilibili.com/video/BV1JuojYcEmH/)

## 首屏加载优化

### 思路

导致首屏加载慢的原因？

- 网络延迟
- 资源太大

网络延迟：

- CDN
- Pre load
- Pre Render

资源太大：

- 包分 chunk
- 懒加载
- 公共资源 vender
- 缓存
  - 强缓存（Expire、Cache-Control）
  - 协商缓存（Last-Modified、If-Modified-Since，Etag、If-None-Match）
  - 策略缓存 service-worker
- 服务端渲染 SSR
- 局部 SSR（落地页、广告页、营销活动页）
- PWA（冷门）

### 衡量指标

- FP（First Paint）：首次绘制。
- FCP（First Contentful Paint）：首次内容绘制。
- FMP（First Meaningful Paint）：首次有意义绘制。
- LCP（Largest Contentful Paint）：最大内容绘制。

其中 FP、FCP 可以通过浏览器提供的 API 计算 `Performance`，FMP 则需要使用 MutationObserver 来实现。

:::tip Web Tracker

对于性能监控或者上报的代码，通常只会编写一次

- 性能采集
  - Performance API
  - MutationObserver
- 用户行为采集
  - 无痕埋点
  - 手动埋点
  - 可视化埋点
- 异常采集
  - react ErrorBoundary
  - 异常捕获 try catch

:::

:::tip SSR 相关性能指标

- `TBT` (Total Blocking Time)：总阻塞时间。
- `TTI` (Time to Interactive)：可交互时间，从 `FCP` -> `可交互` 的时间。

:::

:::tip

指标衡量，webvital、写性能采集截屏或录像（rrweb）

:::

### 具体优化

- 优化图片：推荐 WebP 格式，减少图片体积。
- 组件按需加载：React Suspense、React Lazy。
- 延迟加载：滚动加载，可视区域内容渲染。
- tree-shaking：摇树，只保留用到的代码。
  - tree-shaking 实现条件 - esm （模块化：amd、cmd、umd、commonjs、esm）
  - 打包工具：rollup、parcel、rspack、esbuild、swc
- CDN：oss + cdn。
- 精简三方库
  - 按需导入 babel-plugin-import
  - 国际化文件需要提前移除
- 缓存：强缓存、协商缓存、策略缓存。
- 字体压缩：font-spider 移除未用字体，web-font 处理字体加载。
- SSR（Server Side Render）、SSG（Server Side Generate）

:::tip 服务端渲染技术

`SSR` (Server Side Render)：服务端渲染，服务端生成静态页面，客户端渲染。

`SSG` (Static Site Generation)：静态站点生成，将动态内容提前生成静态页面，静态页面渲染。

`SSE` (Server Sent Events)：服务端事件推送，服务端推送事件给客户端。

`ISR` (Incremental Static Regeneration)：增量静态生成，在构建时生成静态页面，在发布时更新静态页面。

`SSR with Streaming`: 流式渲染。

`React Server Components`：React 18 新特性，服务端组件。

`PPR` (Partail Prerendering): 部分预渲染，整合了 ISR、RSC 和流式渲染的特性，做到了动静结合。

:::

### 具体优化（进阶）

- 预加载：preload。

```html
<link rel="preload" href="style.css" as="style" />

<link rel="preload" href="xxx.js" as="script" />
```

:::tip Link Rel Preload

- href 属性中的资源路径。
- as 属性中的资源类型。

可以预加载多种类型的内容。as 属性可能的值包括：

- audio：音频文件，通常在 \<audio\> 中使用。
- document：用于嵌入在 \<frame\> 或 \<iframe\> 中的 HTML 文档。
- embed：用于嵌入在 \<embed\> 元素中的资源。
- fetch：通过 fetch 或 XHR 请求访问的资源，例如 ArrayBuffer、WebAssembly 二进制文件或 JSON 文件。
- font：字体文件。
- image：图像文件。
- object：要嵌入在 \<object\> 元素中的资源。
- script：JavaScript 文件。
- style：CSS 样式表。
- track：WebVTT 文件。
- worker：JavaScript web worker 或 shared worker。
- video：视频文件，通常在 \<video\> 中使用。

[Rel Preload - MDN 👉](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)

:::

- 加载关键 CSS，将提取到的 css 内联插入到节点。
- HTTP/2 Server Push。
- 延迟加载。

```html
<!-- dom 要不要等 js -->
<script defer></script>
<script async></script>
```

- 预渲染，PreRender，webpack 方案：@prerender/webpack-plugin + @prerender/renderer-puppeteer。
- SSR，react - nextJS，vue - nuxtJS。
- bundle 分块，webpack 配置：optimization.splitChunks。

## 低代码动态物料体系

插件化（微内核），远程物料。

插件底座的设计是非常重要的。

- babel、webpack、vite、pinia 是`插件化机制`的践行者。
- koa、redux、axios 是面向切面编程 `AOP(中间件机制)` 的践行者。

:::details 插件底座实现（伪代码）

```javascript
// 定义插件底座
class Doc {
  constructor() {
    this.plugins = [];
  }

  use(plugins) {
    this.plugins.push(plugins);
  }

  run() {
    this.plugins.forEach((plugin) => {
      plugin.fn(this);
    });
  }
}

const doc = new Doc();

// 定义插件协议
const TextPlugin = {
  name: 'text',
  fn(doc) => {
    return 'text'
  }
}
const ImagePlugin = {
  name: 'image',
  fn(doc) => {
    return 'image'
  }
}

doc.use(TextPlugin);
doc.use(ImagePlugin);
doc.run();
```

:::

### 远程插件

- requireJS
- systemJS
- react-loadable
- **module-federation runtime**

:::tip 微前端技术

- single-spa
- qiankun
- macro-app
- wujie

:::

### 课件

:::info

由于项目整体架构复杂，并且设计之初时考虑能有更多物料轻松接入的可能，因此，我们整体考虑了动态物料体系的方案，这个方案无论你当下开发文档项目、低代码平台、无代码平台等，都是不错的方案选择，希望可以帮你拓宽业务与架构视野。

**动态物料体系设计**

动态体系，需要有规范约定，这个约定我们可以叫 **DSL**(Domain Specific Language)，也可以称为 JSON Schema。

**物料加载机制实现**

借助统一的物料体系设计，我们下层实现物料加载底座，通过物料动态注册等机制实现动态物料逻辑。

**远程物料开发与构建**

- 通过字节内部 rspack 进行构建，远程资源加载方案我们呢有一个演变过程。
- 基于 monorepo 架构，远程物料单独开发构建，主体应用在运行时加载远程物料并处理。

**远程物料加载与运行时处理**

:::tip

requireJS -> systemJS -> react-loadable -> **module-federation runtime**

:::

## 白板实现方案优化

### 课件

:::info

白板方案，大部分同学第一反应，那肯定是 canvas ，没错，但是，可以很直接地告诉大家，canvas 方案在大家平常小数据量的可视化场景，没太大问题，但是如果是大量数据渲染，canvas 瓶颈也明显，为了进一步优化白板性能，我们进行了以下尝试。

**Webassembly**

**Skia**

这个库是 C++ 编写的图形处理库，目前有 Google 公司维护。

同时，浏览器 canvas 的底层就是 skia：[HTMLCanvasElement.cpp 👉](https://chromium.googlesource.com/chromium/blink/+/refs/heads/main/Source/core/html/HTMLCanvasElement.cpp)

**可视区绘制**

:::
