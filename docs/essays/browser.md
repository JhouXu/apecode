---
layout: doc
date: "2024-03-28"
---

# 浏览器

## 从输入 URL 到页面加载的全过程

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e44aa8a92602405db3c12161b71e2094~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

1. 首先在浏览器中输入 URL;

2. 查找缓存：浏览器先查看浏览器缓存-系统缓存-路由缓存中是否有该地址页面，如果有则显示页面内容。如果没有则进行下一:

- 浏览器缓存：浏览器会记录 DNS 一段时间，因此，只是第一个地方解析 DNS 请求;

- 操作系统缓存:如果在浏览器缓存中不包含这个记录，则会使系统调用操作系统， 获取操作系统的记录(保存最近的 DNS 查询缓存);

- 路由器缓存：如果上述两个步骤均不能成功获取 DNS 记录，继续搜索路由器缓存;

- ISP 缓存：若上述均失败，继续向 ISP 搜索。

3. DNS 域名解析：浏览器向 DNS 服务器发起请求，解析该 URL 中的域名对应的 IP 地址。DNS 服务器是基于 UDP 的，因此会用到 UDP 协议;

4. 建立 TCP 连接：解析出 IP 地址后，根据 IP 地址和默认 80 端口，和服务器建立 TCP 连接;

5. 发起 HTTP 请求：浏览器发起读取文件的 HTTP 请求，，该请求报文作为 TCP 三次握手的第三次数据发送给服务器;

6. 服务器响应请求并返回结果：服务器对浏览器请求做出响应，并把对应的 html 文件发送给浏览器;

7. 关闭 TCP 连接：通过四次挥手释放 TCP 连接;

8. 浏览器渲染：客户端（浏览器）解析 HTML 内容并渲染出来，浏览器接收到数据包后的解析流程为:

- 构建 DOM 树：词法分析然后解析成 DOM 树（dom tree），是由 dom 元素及属性节点组成，树的根是 document 对象
- 构建 CSS 规则树：生成 CSS 规则树（CSS Rule Tree）
- 构建 render 树：Web 浏览器将 DOM 和 CSSOM 结合，并构建出渲染树（render tree）
- 布局（Layout）：计算出每个节点在屏幕中的位置
- 绘制（Painting）：即遍历 render 树，并使用 UI 后端层绘制每个节点。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a90660027f0d4c559732519bad4c6323~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

9. JS 引擎解析过程：调用 JS 引擎执行 JS 代码（JS 的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等）

- 创建 window 对象：window 对象也叫全局执行环境，当页面产生时就被创建，所有的全局变量和函数都属于 window 的属性和方法，而 DOM Tree 也会映射在 window 的 doucment 对象上。当关闭网页或者关闭浏览器时，全局执行环境会被销毁;

- 加载文件：完成 js 引擎分析它的语法与词法是否合法，如果合法进入预编译;

- 预编译：在预编译的过程中，浏览器会寻找全局变量声明，把它作为 window 的属性加入到 window 对象中，并给变量赋值为'undefined'；寻找全局函数声明，把它作为 window 的方法加入到 window 对象中，并将函数体赋值给他（匿名函数是不参与预编译的，因为它是变量）。而变量提升作为不合理的地方在 ES6 中已经解决了，函数提升还存在;

- 解释执行：执行到变量就赋值，如果变量没有被定义，也就没有被预编译直接赋值，在 ES5 非严格模式下这个变量会成为 window 的一个属性，也就是成为全局变量。string、int 这样的值就是直接把值放在变量的存储空间里，object 对象就是把指针指向变量的存储空间。函数执行，就将函数的环境推入一个环境的栈中，执行完成后再弹出，控制权交还给之前的环境。JS 作用域其实就是这样的执行流机制实现的。

## 浏览器重绘与重排的区别？

- 重排/回流（Reflow）：当 DOM 的变化影响了元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。表现为`重新生成布局，重新排列元素`。

- 重绘(Repaint): 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。表现为`某些元素的外观被改变`。

单单改变元素的外观，肯定不会引起网页重新生成布局，但当浏览器完成重排之后，将会重新绘制受到此次重排影响的部分。

重排和重绘代价是高昂的，它们会破坏用户体验，并且让 UI 展示非常迟缓，而相比之下重排的性能影响更大，在两者无法避免的情况下，一般我们宁可选择代价更小的重绘。

`『重绘』不一定会出现『重排』，『重排』必然会出现『重绘』。`

## 如何触发重排和重绘？

任何改变用来构建渲染树的信息都会导致一次重排或重绘：

- 添加、删除、更新 DOM 节点;
- 通过 display: none 隐藏一个 DOM 节点-触发重排和重绘;
- 通过 visibility: hidden 隐藏一个 DOM 节点-只触发重绘，因为没有几何变化;
- 移动或者给页面中的 DOM 节点添加动画;
- 添加一个样式表，调整样式属性;
- 用户行为，例如调整窗口大小，改变字号，或者滚动。

## 如何避免重绘或者重排？

1. 集中改变样式，不要一条一条地修改 DOM 的样式。;
2. 不要把 DOM 结点的属性值放在循环里当成循环里的变量。;
3. 为动画的 HTML 元件使用 fixed 或 absolute 的 position，那么修改他们的 CSS 是不会 reflow 的。;
4. 不使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。;
5. 尽量只修改 position：absolute 或 fixed 元素，对其他元素影响不大;
6. 动画开始 GPU 加速，translate 使用 3D 变化;
7. 提升为合成层;

将元素提升为合成层有以下优点:

- 合成层的位图，会交由 GPU 合成，比 CPU 处理要快;
- 当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层;
- 对于 transform 和 opacity 效果，不会触发 layout 和 paint

提升合成层的最好方式是使用 CSS 的 will-change 属性:

```css
#target {
  will-change: transform;
}
```

## 介绍下 304 过程

> The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources.

`304 Not Modified`: 未修改的客户端重定向响应代码表示无需重新发送请求的资源。

1. 浏览器请求资源时首先命中资源的 Expires 和 Cache-Control，Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效，可以通过 Cache-control: max-age 指定最大生命周期，状态仍然返回 200，但不会请求数据，在浏览器中能明显看到 from cache 字样;

2. 强缓存失效，进入协商缓存阶段，首先验证 ETagETag 可以保证每一个资源是唯一的，资源变化都会导致 ETag 变化。服务器根据客户端上送的 If-None-Match 值来判断是否命中缓存;

3. 协商缓存 Last-Modify/If-Modify-Since 阶段，客户端第一次请求资源时，服务服返回的 header 中会加上 Last-Modify，Last-modify 是一个时间标识该资源的最后修改时间。再次请求该资源时，request 的请求头中会包含 If-Modify-Since，该值为缓存之前返回的 Last-Modify。服务器收到 If-Modify-Since 后，根据资源的最后修改时间判断是否命中缓存。

## 浏览器的缓存机制 强制缓存 && 协商缓存

浏览器与服务器通信的方式为应答模式，即是：浏览器发起 HTTP 请求 – 服务器响应该请求。那么浏览器第一次向服务器发起该请求后拿到请求结果，会根据响应报文中 HTTP 头的缓存标识，决定是否缓存结果，是则将请求结果和缓存标识存入浏览器缓存中，简单的过程如下图：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/487144abaada4b9a8b34bc9375191ec7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

由上图我们可以知道：

- 浏览器每次发起请求，都会`先在浏览器缓存中查找该请求的结果以及缓存标识`;
- 浏览器每次拿到返回的请求结果都会`将该结果和缓存标识存入浏览器缓存中`。

以上两点结论就是浏览器缓存机制的关键，他确保了每个请求的缓存存入与读取，只要我们再理解浏览器缓存的使用规则，那么所有的问题就迎刃而解了。为了方便理解，这里根据是否需要向服务器重新发起 HTTP 请求将缓存过程分为两个部分，分别是`强制缓存`和`协商缓存`。

### 强制缓存

`强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程`。当浏览器向服务器发起请求时，服务器会将缓存规则放入 HTTP 响应报文的 HTTP 头中和请求结果一起返回给浏览器，控制强制缓存的字段分别是 `Expires` 和 `Cache-Control`，其中 Cache-Control 优先级比 Expires 高。

强制缓存的情况主要有三种(暂不分析协商缓存过程)，如下：

1. 不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求（跟第一次发起请求一致）;
2. 存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存;
3. 存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果

### 协商缓存

`协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程`，同样，协商缓存的标识也是在响应报文的 HTTP 头中和请求结果一起返回给浏览器的，控制协商缓存的字段分别有：Last-Modified / If-Modified-Since 和 Etag / If-None-Match，其中 Etag / If-None-Match 的优先级比 Last-Modified / If-Modified-Since 高。协商缓存主要有以下两种情况：

1. 协商缓存生效，返回 304;
2. 协商缓存失效，返回 200 和请求结果结果。

## 说下进程、线程和协程

进程是一个具有一定独立功能的程序在一个数据集上的一次动态执行的过程，`是操作系统进行资源分配和调度的一个独立单位`，是应用程序运行的载体。进程是一种抽象的概念，从来没有统一的标准定义。

线程是程序执行中一个单一的顺序控制流程，是`程序执行流的最小单元`，是处理器调度和分派的基本单位。一个进程可以有一个或多个线程，各个线程之间共享程序的内存空间(也就是所在进程的内存空间)。一个标准的线程由线程 ID、当前指令指针(PC)、寄存器和堆栈组成。而进程由内存空间(代码、数据、进程空间、打开的文件)和一个或多个线程组成。

协程，英文 Coroutines，是一种基于线程之上，但又`比线程更加轻量级的存在`，这种由程序员自己写程序来管理的轻量级线程叫做『用户空间线程』，具有对内核来说不可见的特性。

【区别】：
调度：线程作为调度和分配的基本单位，进程作为拥有资源的基本单位；
并发性：不仅进程之间可以并发执行，同一个进程的多个线程之间也可并发执行；
拥有资源：进程是拥有资源的一个独立单位，线程不拥有系统资源，但可以访问隶属于进程的资源。
系统开销：在创建或撤消进程时，由于系统都要为之分配和回收资源，导致系统的开销明显大于创建或撤消线程时的开销。但是进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响，而线程只是一个进程中的不同执行路径。线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间，一个进程死掉就等于所有的线程死掉，所以多进程的程序要比多线程的程序健壮，但在进程切换时，耗费资源较大，效率要差一些。

【联系】：
一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程；
资源分配给进程，同一进程的所有线程共享该进程的所有资源；
处理机分给线程，即真正在处理机上运行的是线程；
线程在执行过程中，需要协作同步。不同进程的线程间要利用消息通信的办法实现同步。
