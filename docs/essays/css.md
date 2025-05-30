---
layout: doc
date: "2024-03-28"
---

# CSS

## CSS 选择器及优先级

### 选择器

- Id 选择器(#myid)
- 类选择器(.myclass)
- 属性选择器(a[rel="external"])
- 伪类选择器(a:hover, li:nth-child)
- 标签选择器(div, h1,p)
- 相邻选择器（h1 + p）
- 子选择器(ul > li)
- 后代选择器(li a)
- 通配符选择器(\*)

### 优先级

- !important
- 内联样式（1000）
- ID 选择器（0100）
- 类选择器/属性选择器/伪类选择器（0010）
- 元素选择器/伪元素选择器（0001）
- 关系选择器/通配符选择器（0000）

带!important 标记的样式属性优先级最高； 样式表的来源相同时：`!important > 行内样式 > ID 选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性`

## position 属性的值有哪些及其区别

1. 默认定位 `static`： 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声 明）。 inherit: 规定应该从父元素继承 position 属性的值。

2. 固定定位 `fixed`： 元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed 定 位使元素的位置与文档流无关，因此不占据空间。 Fixed 定位的元素和其他元素重叠。

3. 相对定位 `relative`： 如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直 或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是 否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

4. 绝对定位 `absolute`： 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那 么它的位置相对于。absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。

5. 粘性定位 `sticky`： 元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定 位，之后为固定定位。

## box-sizing 属性

box-sizing 规定两个并排的带边框的框，语法为 box-sizing：content-box / border-box / inherit

- content-box：宽度和高度分别应用到元素的内容框，在宽度和高度之外绘制元素的内边距和边框。`标准盒子模型`
- border-box：为元素设定的宽度和高度决定了元素的边框盒。`IE 盒子模型`
- inherit：继承父元素的 box-sizing 值。

## CSS 盒子模型

CSS 盒模型本质上是一个盒子，它包括：边距，边框，填充和实际内容。CSS 中的盒子模型包括 `IE 盒子模型`和`标准的 W3C 盒子模型`。

- `标准盒子模型`，width 指 content 部分的宽度。
- `IE 盒子模型`，width 表示 content + padding + border 这三个部分的宽度。

故在计算盒子的宽度时存在差异:

- 标准盒模型: `一个块的总宽度 = width + margin(左右) + padding(左右) + border(左右)`
- 怪异盒模型: `一个块的总宽度 = width + margin（左右）（既 width 已经包含了 padding 和 border 值）`

## BFC（块级格式上下文）

### BFC 的概念

BFC 是 Block Formatting Context 的缩写，即块级格式化上下文。BFC 是 CSS 布局的一个概念，是一个独立的渲染区域，规定了内部 box 如何布局， 并且这个区域的子元素不会影响到外面的元素，其中比较重要的布局规则有内部 box 垂直放置，计算 BFC 的高度的时候，浮动元素也参与计算。

BFC 的原理布局规则:

- 内部的 Box 会在`垂直方向`，一个接一个地放置;
- Box `垂直方向的距离由 margin 决定`。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠 `(盒子塌陷)`;
- 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反);
- BFC 的区域`不会与 float box 重叠`;
- BFC 是一个独立容器，容器里面的`子元素不会影响到外面的元素`;
- 计算 BFC 的高度时，`浮动元素也参与计算高度`;
- `元素的类型和 display 属性，决定了这个 Box 的类型`。不同类型的 Box 会参与不同的 Formatting Context

:::tip
如何创建 BFC？

- 根元素，即 HTML 元素;
- float 的值不为 none;
- position 为 absolute 或 fixed;
- display 的值为 inline-block、table-cell、table-caption;
- overflow 的值不为 visible
  :::

### BFC 的使用场景

- 去除边距重叠现象;
- 清除浮动（让父元素的高度包含子浮动元素）;
- 避免某元素被浮动元素覆盖;
- 避免多列布局由于宽度计算四舍五入而自动换行

## 让一个元素水平垂直居中

### 水平居中

- 对于行内元素: text-align: center;
- 对于确定宽度的块级元素：
  1. width 和 margin 实现。margin: 0 auto;
  2. 绝对定位和 margin-left: (父 width - 子 width)/2, 前提是父元素 position: relative
- 对于宽度未知的块级元素
  1. table 标签配合 margin 左右 auto 实现水平居中。使用 table 标签（或直接将块级元素设值为 display:table），再通过给该标签添加左右 margin 为 auto。
  2. inline-block 实现水平居中方法。display：inline-block 和 text-align:center 实现水平居中。
  3. 绝对定位+transform，translateX 可以移动本身元素的 50%。
  4. flex 布局使用 justify-content:center

### 垂直居中

1. 利用 line-height 实现居中，这种方法适合纯文字类;
2. 通过设置父容器 相对定位 ，子级设置 绝对定位，标签通过 margin 实现自适应居中;
3. 弹性布局 flex :父级设置 display: flex; 子级设置 margin 为 auto 实现自适应居中;
4. 父级设置相对定位，子级设置绝对定位，并且通过位移 transform 实现;
5. table 布局，父级通过转换成表格形式，然后子级设置 vertical-align 实现。（需要注意的是：vertical-align: middle 使用的前提条件是内联元素以及 display 值为 table-cell 的元素）。

## 隐藏页面中某个元素的方法

- opacity: 0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如 click 事件，那么点击该区域，也能触发点击事件的;
- visibility: hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件，隐藏对应元素，在文档布局中仍保留原来的空间（重绘）;
- display: none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素。不显示对应的元素，在文档布局中不再分配空间（回流+重绘）

## 用 CSS 实现三角符号

```css
/*记忆口诀：盒子宽高均为零，三面边框皆透明。 */
div:after {
  position: absolute;
  width: 0px;
  height: 0px;
  content: " ";
  border-right: 100px solid transparent;
  border-top: 100px solid #ff0;
  border-left: 100px solid transparent;
  border-bottom: 100px solid transparent;
}
```

## 页面布局

### Flex 布局

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position 属性 + float 属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

Flex 是 Flexible Box 的缩写，意为"弹性布局",用来为盒状模型提供最大的灵活性。指定容器 display: flex 即可。 简单的分为容器属性和元素属性。

容器的属性：

- flex-direction：决定主轴的方向（即子 item 的排列方法）flex-direction: row | row-reverse | column | column-reverse;
- flex-wrap：决定换行规则 flex-wrap: nowrap | wrap | wrap-reverse;
- flex-flow： .box { flex-flow: || ; };
- justify-content：对其方式，水平主轴对齐方式;
- align-items：对齐方式，竖直轴线方向;
- align-content

项目的属性（元素的属性）：

- order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0;
- flex-grow 属性：定义项目的放大比例，即使存在空间，也不会放大;
- flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果 定义个 item 的 flow-shrink 为 0，则为不缩小;
- flex-basis 属性：定义了在分配多余的空间，项目占据的空间;
- flex：是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto;
- align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖;
- align-items，默认属 性为 auto，表示继承父元素的 align-items 比如说，用 flex 实现圣杯布局。

### Rem 布局

首先 Rem 相对于根(html)的 font-size 大小来计算。简单的说它就是一个相对单例 如:font-size:10px;,那么（1rem = 10px）了解计算原理后首先解决怎么在不同设备上设置 html 的 font-size 大小。其实 rem 布局的本质是等比缩放，一般是基于宽度。

优点：可以快速适用移动端布局，字体，图片高度

缺点：

1. 目前 ie 不支持，对 pc 页面来讲使用次数不多;
2. 数据量大：所有的图片，盒子都需要我们去给一个准确的值；才能保证不同机型的适配;
3. 在响应式布局中，必须通过 js 来动态控制根元素 font-size 的大小。也就是说 css 样式和 js 代码有一定的耦合性。且必须将改变 font-size 的代码放在 css 样式之前。

### 百分比布局

通过百分比单位 " % " 来实现响应式的效果。通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。 直观的理解，我们可能会认为子元素的百分比完全相对于直接父元素，height 百分比相 对于 height，width 百分比相对于 width。 padding、border、margin 等等不论是垂直方向还是水平方向，都相对于直接父元素的 width。 除了 border-radius 外，还有比如 translate、background-size 等都是相对于自身的。

缺点：

1. 计算困难
2. 各个属性中如果使用百分比，相对父元素的属性并不是唯一的。造成我们使用百分比单位容易使布局问题变得复杂。

### 浮动布局

浮动布局:当元素浮动以后可以向左或向右移动，直到它的外边缘碰到包含它的框或者另外一个浮动元素的边框为止。元素浮动以后会脱离正常的文档流，所以文档的普通流中的框就变的好像浮动元素不存在一样。

优点

这样做的优点就是在图文混排的时候可以很好的使文字环绕在图片周围。另外当元素浮动了起来之后，它有着块级元素的一些性质例如可以设置宽高等，但它与 inline-block 还是有一些区别的，第一个就是关于横向排序的时候，float 可以设置方向而 inline-block 方向是固定的；还有一个就是 inline-block 在使用时有时会有空白间隙的问题。

缺点

最明显的缺点就是浮动元素一旦脱离了文档流，就无法撑起父元素，会造成父级元素高度塌陷。

## 如何使用 rem 或 viewport 进行移动端适配

改变了一个元素在不同设备上占据的 css 像素的个数。

rem 适配的优缺点：

- 优点：没有破坏完美视口
- 缺点：px 值转换 rem 太过于复杂(下面我们使用 less 来解决这个问题)

viewport 适配的原理：

viewport 适配方案中，每一个元素在不同设备上占据的 css 像素的个数是一样的。但是 css 像素和物理像素的比例是不一样的，等比的。

viewport 适配的优缺点：

- 在我们设计图上所量取的大小即为我们可以设置的像素大小，即所量即所设;
- 缺点破坏完美视口。

## 清除浮动的方式

- 添加额外标签;
- 父级添加 overflow 属性，或者设置高度;
- 建立伪类选择器清除浮动。

```html
<div class="parent">
  // 添加额外标签并且添加 clear 属性
  <div style="clear:both"></div>
  // 也可以加一个 br 标签
</div>
```

```css
/* 在 css 中添加:after 伪元素 */
.parent:after {
  content: ""; /* 设置添加子元素的内容是空 */
  display: block; /* 设置添加子元素为块级元素 */
  height: 0; /* 设置添加的子元素的高度 0 */
  visibility: hidden; /* 设置添加子元素看不见 */
  clear: both; /* 设置 clear：both */
}
```
