---
layout: doc
---

# Node 学习笔记

<br />

> [Node.js 完全指南（直播回放）李立超 - bilibili 📺](https://www.bilibili.com/video/BV1qN4y1A7jM)
> 
> 源码笔记链接：https://pan.baidu.com/s/1jE10ooFCzpV6ddSqHyYJow?pwd=9658
> 
> 提取码：9658

## 简介

- 运行在服务器端的 JS
- 用来编写服务器
- 特点
  - 单线程、异步、非阻塞
  - 统一 API

::: tip
版本管理器主要有 nvm 和 nvs，通过管理器可自由切换不同的 node.js 版本，以便开发不同的项目。

- [nvm](https://github.com/nvm-sh/nvm): 一个 Node.js 版本管理器，使用 bash 实现，几乎是业内最有名。
- [nvs](https://github.com/jasongin/nvs): 同样是一个的 Node.js 版本切换器，使用 JavaScript 实现，跨平台。

:::

JavaScript 和 Node.js 的区别：

|      分类      | JavScript | Node.js |
| :------------: | :-------: | :-----: |
|   ECMAScript   |    ✅     |   ✅    |
| DOM - 宿主对象 |    ✅     |   ❌    |
| BOM - 宿主对象 |    ✅     |   ❌    |

> Node.js 虽然也属于 js，但是它和浏览器中 js 还是有所区别的。对于 ECMAScript 标准来说，它们是一致的所以像是原始值、流程控制语句、运算符、函数、对象、数组、内建对象这些东西无论是浏览器环境还是 node 中都是一样的。对于宿主对象来说浏览器和 node 是截然不同的，像是 DOM、BOM 这些对象在 node 中通通是不存在的，但是一些东西在 Node 中依然得到了保留，比如 console 对象、比如定时器之类。

## 异步编程 & Promise

::: tip
进程和线程

- 进程：程序的运行环境
- 线程：实际进行运算的东西

:::

### 同步异步

1. 同步：

- 通常情况下代码都是`自上向下一行一行`地执行，前面的代码不执行后面的代码也不会执行
- 同步的代码执行会出现`阻塞`的情况，一行代码执行慢会影响整个程序的执行

2. 解决同步问题：

- Java Python
  - 通过多线程来解决
- Node.js
  - JS 是单线程语言，通过`异步编程`来解决

3. 异步：

- 一段代码的执行不会影响其他程序的执行
- 异步的问题：
  - `异步的代码无法通过 return 来设置返回值`

4. 特点：

- 1. 不会阻塞其它代码的执行
- 2. 需要通过回调函数来返回结果

5. 异步实现方式：

- 回调函数：过度使用会出现`回调地狱`，代码的可读性差、可调试性差
- Promise：`是存储数据的对象`

```javascript
// 回调地狱案例
const sum = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
};

sum(1, 2, (result) => {
  sum(result, 3, (result) => {
    sum(result, 4, (result) => {
      sum(result, 5, (result) => {
        console.log(result);
      });
    });
  });
});
```

### Promise

Promise 就是一个用来`存储数据对象`，但是由于 Promise 存取的方式的特殊，所以可以直接将异步调用的结果存储到 Promise 中。

对 Promise 进行链式调用时：

- 后边的方法（then 和 catch）读取的上一步的执行结果，如果上一步的执行结果不是当前想要的结果，则跳过当前的方法；
- 当 Promise 出现异常时，而整个调用链中没有出现 catch，则异常会向外抛出。

`Promise 解决异步编程中回调地狱问题`

#### 案例

创建 Promise 实例，及获取 Promise 中的数据

```javascript
// 创建 Promise 时，构造函数中需要一个函数[执行器]作为参数
// Promise 构造函数的回调函数，它会在创建 Promise 时调用，调用时会有两个参数传递进去
const promise = new Promise((resolve, reject) => {
  // resolve 和 reject 是两个函数，通过这两个函数可以分别向 Promise 中存储数据
  // resolve 表示执行正常时存储数据，reject 表示执行异常时存储数据
  // 通过函数来向 Promise 中添加数据，好处就是可以添加异步调用的数据
  resolve("成功"); // reject("失败")
});

// 获取 Promise 中的数据
//  - 可以通过 Promise 的实例方法 then 来读取 Promise 的数据
//  - then 需要两个回调函数作为参数，回调函数用来获取 Promise 中的数据
//    - 通过 resolve 存储的数据，会调用第一个函数返回，
//      可以在第一个函数中编写处理数据的代码
//    - 通过 reject 存储的数据或出现异常时，会调用第二个函数返回，
//      可以在第二个函数中编写处理异常的代码
promise.then(
  (result) => {
    console.log("resolve 的数据" + result);
  },
  (reason) => {
    console.log("reject 的数据" + reason);
  }
);

// or
promise
  .then((result) => {
    console.log("resolve 的数据" + result);
  })
  .catch((reason) => {
    console.log("reject 的数据" + reason);
  })
  .finally(() => {
    console.log("无论 resolve 还是 reject 都会执行");
  });
```

回调地狱的解决

```javascript
const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

sum(10, 20)
  .then((result) => {
    return sum(result, 30);
  })
  .then((result) => {
    return sum(result, 40);
  })
  .then((result) => {
    return sum(result, 50);
  })
  .then((result) => {
    console.log(result);
  });
```

#### 属性

在 Promise 中维护了两个隐藏的属性

- [[PromiseResult]]，用来存储数据
- [[PromiseState]]，记录 Promise 状态，只能修改一次
  - `pending 进行中`
  - `fulfilled 完成`，通过 resolve 存储数据时
  - `rejected 拒绝、异常`，当出现异常或通过 reject 存储数据时

::: tip
在 Promise 中调用 then、catch、finally 方法都会返回一个`新的 Promise`，在 then、catch 中 `新的 Promise` 会存储`回调函数的返回值`，finally 中 `新的 Promise`存储上的值`始终为 undefined`.

```javascript
let promise = new Promise((resolve, reject) => {
  resolve("创建 Promise 实例");
});

// promise 链式调用
promise
  .then((result) => {
    console.log(result); // -> 创建 Promise 实例 // [!code ++]
    return "promise 实例调用 then 方法";
  })
  .then((result) => {
    console.log(result); // -> promise 实例调用 then 方法 // [!code ++]
  });
```

:::

#### 静态方法

- Promise.resolve()
  - 创建一个立即完成的 Promise
- Promise.reject()
  - 创建一个立即拒绝的 Promise
- Promise.all([iterable])
  - 同时返回多个 Promise 的执行结果，如有一个 rejected 就返回错误
- Promise.allSettled([iterable])
  - 同时返回多个 Promise 的执行结果，无论成功还是失败 fulfilled and rejected
- Promise.race([iterable])
  - 返回执行最快的 Promise，无论成功还是失败 fulfilled and rejected
- Promise.any([iterable])
  - 返回执行最快完成 fulfilled 的 Promise，

## 宏任务和微任务

在 js 中，它是单线程的，它的运行时基于`事件循环机制(event loop)`

前置知识：

- 栈，一种数据结构，先进后出
- 队列，一种数据结构，先进先出

事件循环机制：

- 调用栈，存放的是需要执行的代码
- 任务队列，存放的是将要执行的代码
  - 宏任务队列，大部分代码都会到此进行排队
  - 微任务队列，Promise 的回调函数

事件循环流程：

1. 执行调用栈中的代码
2. 执行微任务队列中的代码
3. 执行宏任务队列中的代码

::: info 小试牛刀

```javascript
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);
```

:::

::: details 答案

```javascript
// 1 7 3 5 2 6 4
```

:::

::: tip
queueMicrotask() 可用来向微任务队列中添加一个任务
:::

## 手写 Promise

```javascript
const PromiseState = {
  PENDING: "0",
  FULFILLED: "1",
  REJECTED: "2",
};

class MyPromise {
  #result;
  #state = PromiseState.PENDING;
  #callbacksFulfilled = [];
  #callbacksRejected = [];

  constructor(executor) {
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }

  #resolve(result) {
    if (this.#state !== PromiseState.PENDING) return;

    this.#result = result;
    this.#state = PromiseState.FULFILLED;

    queueMicrotask(() => {
      this.#callbacksFulfilled.forEach((cb) => {
        cb();
      });
    });
  }

  #reject(reason) {
    if (this.#state !== PromiseState.PENDING) return;

    this.#result = reason;
    this.#state = PromiseState.REJECTED;

    queueMicrotask(() => {
      this.#callbacksRejected.forEach((cb) => {
        cb();
      });
    });
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.#state === PromiseState.PENDING) {
        this.#callbacksFulfilled.push(() => {
          resolve(onFulfilled(this.#result));
        });
        this.#callbacksRejected.push(() => {
          reject(onRejected(this.#result));
        });
      } else if (this.#state === PromiseState.FULFILLED) {
        queueMicrotask(() => resolve(onFulfilled(this.#result)));
      } else if (this.#state === PromiseState.REJECTED) {
        queueMicrotask(() => reject(onRejected(this.#result)));
      }
    });
  }
}

const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("哈哈");
  }, 1000);
});

mp.then((result) => {
  console.log("第1次读取数据", result);
}).then((result) => {
  console.log("第2次读取数据", result);
});
```

::: details 结果

```javascript
// 第1次读取数据 哈哈
// 第2次读取数据 undefined
```

:::

## async & await

通过 async 可以创建一个异步函数，其中异步函数的返回值会自动封装到一个 Promise 中返回；

在 async 声明的异步函数中，可以使用 await 关键字来调用异步函数；

```javascript
async function fun1() {
  return 10;
}

// 等价于
function fun2() {
  return Promise.resolve(10);
}
```

```javascript
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    });
  });
}

async function fun3() {
  try {
    let result = 0;
    result = await sum(123, 456);
    result = await sum(result, 789);
    console.log(result);
  } catch (err) {} // 异常捕获
}
fun3(); // 输出: 1368

// 等价于
function fun4() {
  sum(123, 456)
    .then((res) => {
      return sum(res, 789);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {}); // 异常捕获
}
fun4();
```

:::tip
Promise 的出现解决了回调地狱的问题，但是过于 Promise 链式调用时，代码的可读性变差，所以出现了 async 和 await 来实现`同步写法`。
:::

执行顺序

```javascript
/* 
  如果 async 声明的函数中没有写 await，那么会依次执行
*/
async function fun5() {
  console.log(1);
  console.log(2);
  console.log(3);
}
fun5(); // 输出: 1 2 3

// 等价于
function fun6() {
  return new Promise((resolve) => {
    console.log(1);
    console.log(2);
    console.log(3);
    resolve();
  });
}
fun6();
```

```javascript
/* 
  如果使用 await 关键字，则后面的代码，会在当前函数执行完毕后，放置微任务队列中执行
*/
async function fun7() {
  console.log(1);
  await console.log(2);
  await console.log(3);
  console.log(4);
}
fun7();
console.log(5); // 依此输出: 1 2 5 3 4

// 等价于
function fun8() {
  new Promise((resolve) => {
    console.log(1);
    console.log(2);
    resolve();
  })
    .then(() => {
      console.log(3);
    })
    .then(() => {
      console.log(4);
    });
}
fun8();
console.log(5);
```

:::tip 细节

1. 当通过 await 去调用异步函数时，它会暂停代码的执行，并等待异步函数的返回结果，知道异步代码执行有结果时，才会将结果返回；
2. await 必须写在 async 函数中，或 ES Modules 的顶级作用域中；
3. await 只会阻塞异步函数的内部代码，不会影响外部代码的执行；
4. 通过使用 await 调用异步函数，需要使用 try-catch 来处理异常；
5. 如果 async 声明的函数中没有写 await，那么会依次执行；
6. 如果使用 await 关键字，则后面的代码，会在当前函数执行完毕后，放置微任务队列中执行。

:::

## 模块化

在早期的网页中，是没有一个实质的模块化规范的，此前想要实现模块的方式，就是通过最原始的方式 script 标签来引入多个 js 文件（例如 jquery 和 bootstrapUI）。

通过 script 标签实现的模块化，会存在以下问题：

1. 无法选择要引入的模块内容（无法按需引入）
2. 在复杂的模块场景下非常容易出错（如果模块之间存在依赖关系，那么模块的载入顺序是隐形要求的）

::: info

jQuery 是通过 script 标签引入的形式来完成模块化的，引入后实际效果是向全局作用域中添加了一个变量$（或 jQuery）这样很容易出现模块间互相覆盖的情况。并且当我们使用了较多的模块时，有一些模块是相互依赖的，必须先引入某个组件再引入某个组件，模块才能够正常工作。比如 jQuery 和 jQueryUI，就必须先引入 jQuery，如果引入顺序出错将导致 jQueryUI 无法使用。这还仅仅是两个组件，而实际开发中的依赖关系往往更加复杂，像是 a 依赖 b，b 依赖 c，c 依赖 d 这种关系，必须按照 d、c、b、a 的顺序进行引入，有一个顺序错误就会导致其他的一起失效。所以通过 script 标签实现的模块化是非常的不靠谱的。

[超哥笔记](https://lilichao.com/?p=6449)

:::

### CommonJS

CommonJS 是 Node.js 最早采用的模块化规范（2009 年）【默认】。

**文件作为模块**时，引入模块：

- 使用 require("模块的路径")函数来引入模块
- 引入`自定义模块`时
  - 模块名要以 ./ 或 ../ 开头
  - 扩展名可以省略
    - 在 CommonJS 中，如果省略的 js 文件的扩展名 node，会自动为文件补全扩展名 ./m1.js 如果没有 js 它会寻找 ./m1.json
    - 搜索优先级：.js --> .json --> .node（特殊）
- 引入`核心模块`时
  - 直接写核心模块的名字即可
  - 也可以在核心模块前添加 '**node:**' （可以加快模块的检索时间）

```javascript
/* index.js */ // [!code ++]
// 引入 // [!code ++]
const path = require("path"); // 导入核心模块
const path = require("node:path"); // 效果同上

const m1 = require("./m1");
console.log(m1); // 输出：{ a: '孙悟空' }
console.log(m1.a); // 输出：孙悟空

/* m1.js */ // [!code ++]
// 导出 // [!code ++]
/*
  在定义模块时，模块中的内容默认是不能被外部看到的，可以通过exports来设置要向外部暴露的内容。

  访问exports的方式有两种：
    - exports
    - module.exports

  当我们在其他模块中引入当前模块时，require 函数返回的就是 exports，可以将希望暴露给外部模块的内容设置为 exports 的属性。
*/
let a = "孙悟空";

// module.exports === export
export.a = a;
// 或者
module.exports = {
  a: a,
}
```

按需加载

```javascript
/* index.js */ // [!code ++]
// 引入 // [!code ++]
const name = require("./m1").name;
// 或者
const { name } = require("./m1"); // 解构赋值

/* m2.js */ // [!code ++]
// 导出 // [!code ++]
module.exports = {
  name: "孙悟空",
  age: 18,
  gender: "男",
};
```

**文件夹作为模块**时：

当我们使用一个文件夹作为模块时，文件夹中必须有一个模块的主文件。如果文件夹中含有 package.json 文件且文件中设置 main 属性，则 main 属性指定的文件会成为主文件，导入模块时就是导入该文件。如果没有 package.json，则 node 会按照 index.js、index.node 的顺序寻找主文件。

**模块的包装**：

```javascript
(function (exports, require, module, __filename, __dirname) {
  // 模块代码会被放到这里
});
```

每一个 CommonJS 模块在执行时，外层都会被套上一个函数，所以我们之所以能在 CommonJS 模块中使用 exports、require 并不是因为它们是全局变量。它们实际上以参数的形式传递进模块的。

参数：

- exports 用来设置模块向外部暴露的内容
- require 用来引入模块的方法
- module 当前模块的引用
- \_\_filename 模块的路径
- \_\_dirname 模块所在目录的路径

### ESModule

2015 年随着 ES6 标准的发布，ES 的内置模块化系统也应运而生，并且在 Node.js 中同样也支持 ES 标准的模块化。说来说去使用模块化无非需要注意两件事导出和引入。

默认情况下，node 的模块化是 CommonJS，如想要使用 ESModule，有以下两种方式。

- 使用 .mjs 作为文件扩展名
- 在 package.json 中设置 type 属性为 module

```javascript
/* m3.mjs */ // [!code ++]
// 导出 // [!code ++]
export let name = "猪八戒";
export let information = {
  age: 19,
  gender: "男",
};
// 定义默认模块
// 一个模块只能有一个默认模块
export default function sayHello() {
  console.log("Hello");
}

/* index.js */ // [!code ++]
// 导入 // [!code ++]
import { name, information } from "./m3.mjs";
// 或者
import { name as n, information as i } from "./m3.mjs"; // 为导入的模块重新命名
// 或者
import * as m3 from "./m3.mjs"; // 导入所有模块，并赋值给一个变量。
// 或者
import sayHello, { name, information } from "./m3.mjs"; // 导入默认模块
```

:::tip
通过 ESM，导入的内容都是常量；

ESM 都是运行在严格模式下的；

ESM 在浏览器中同样支持，但是可能会存在兼容性问题（IE），为此通常会结合打包工具使用；
:::

:::tip
`.cjs` 文件是 CommonJS 模块的文件扩展名，`.mjs` 文件是 ESModule 模块的文件扩展名。
:::

## 核心模块

核心模块是 node 中的内置模块，这些模块有的可以直接在 node 中使用，有的直接引入即可使用。

### process

process

- 表示当前的 node 进程
- 通过该对象可以获取进程信息，或者对进程进行操作
- 如何使用
  - 1. process 是一个全局变量，可以直接使用
  - 2. 属性和方法
    - process.exit([StatusCode])
      - 结束当前进程，终止 node
    - process.nextTick(callback [, ...args])
      - 将函数插入到 tick 队列中
      - tick 队列中的代码，会在下一次事件循环之前执行，即会在微任务队列和宏任务队列的之前执行

```javascript
setTimeout(() => {
  console.log(1); // 宏任务队列
});

queueMicrotask(() => {
  console.log(2); // 微任务队列
});

process.nextTick(() => {
  console.log(3); // tick 队列
});

console.log(4); // 调用栈
```

:::details 结果

```javascript
// 4 3 2 1
```

:::

### path

path

- 表示路径
- 通过该对象，可以获取各种路径
- 如何使用
  - 1. 不是全局变量，需要进行引入
    - const path = require("node:path");
  - 2. 属性和方法
    - path.resolve([...paths])
      - 用来生成一个绝对路径

```javascript
const path = require("path");
let href = "";

href = path.resolve(); // 获取当前的工作目录绝对路径，由于运行的位置不同，调试控制台和终端得到的路径会有出入，存在不确定性
console.log(href); // 输出 C:\Users\23248\Desktop\apecode

href = path.resolve("./hello.js"); // 获取 hello 模块的绝对路径，存在不确定性
console.log(href); // 输出 C:\Users\23248\Desktop\apecode\hello.js

href = path.resolve("C:\\Users\\23248\\Desktop\\apecode", "./hello.js"); // 指定工作目录绝对路径和模块的相对路径，计算出该模块的绝对路径，属于硬编码
console.log(href); // C:\Users\23248\Desktop\apecode\hello.js

href = path.resolve(__dirname, "./hello.js"); // 最终模块的绝对路径获取方式【推荐】
console.log(href); // C:\Users\23248\Desktop\apecode\hello.js
```

### fs

fs(File System)

- 文件系统
- 用来帮助 node 来操作磁盘中的文件，I/O 操作（input output）
- 如何使用
  - 1. 不是全局变量，需要进行引入
    - const fs = require("node:fs")
  - 2. 属性和方法（回调函数版本）
    - fs.readFile(path[, options], callback) 读取文件
    - fs.appendFile(path[, options], data[, encoding], callback) 创建新文件，或追加新数据
    - fs.mkdir(path[, options], callback) 创建目录
    - fs.rmdir(path[, options], callback) 删除目录
    - fs.rm(path[, options], callback) 删除文件
    - fs.rename(oldPath, newPath, callback) 重命名文件或目录（复制）
    - fs.copyFile(src, dest, callback) 复制文件（剪切）

基于 fs 模块的 readFile 方法，分别通过同步方法，异步方法，Promise 写法，以及 async/await 写法来读取文件内容。

```javascript
const path = require("node:path");
const fs = require("node:fs");
const fsp = require("node:fs/promises"); // 注意，需要 node v14.0.0 及以上

// 同步方法，会阻塞后面的代码执行
try {
  const buffer = fs.readFileSync(path.join(__dirname, "./hello.txt"));
  console.log("文件内容:", buffer.toString());
} catch (err) {
  console.error("读取文件出错:", err);
}

// 异步方法
fs.readFile(path.join(__dirname, "./hello.txt"), (err, buffer) => {
  if (err) {
    console.error("读取文件出错:", err);
    return;
  }
  console.log("文件内容:", buffer.toString());
});

// 异步方法，Promise
fsp
  .readFile(path.join(__dirname, "./hello.txt"))
  .then((buffer) => {
    console.log("文件内容:", buffer.toString());
  })
  .catch((err) => {
    console.error("读取文件出错:", err);
  });

// 异步方法，async/await
(async () => {
  try {
    const buffer = await fsp.readFile(path.join(__dirname, "./hello.txt"));
    console.log("文件内容:", buffer.toString());
  } catch (err) {
    console.log(err);
  }
})();
```

测试文件

```txt
今天天气真不错，我们一起来上课
```

基于 fs.readFile 和 fs.appendFile 实现文件复制功能。

```javascript
const path = require("node:path");
const fsp = require("node:fs/promises");

fsp
  .readFile("C:\\Users\\23248\\Desktop\\test.jpg")
  .then((buffer) => {
    console.log(buffer);
    return fsp.appendFile(path.resolve(__dirname, "./test-img-copy.jpg"), buffer);
  })
  .then(() => {
    console.log("复制成功");
  })
  .catch((err) => {
    console.log("复制失败：", err);
  });
```

## 包管理器

> 随着项目复杂度的提升，在开发中不可能所有的代码都要手动一行一行的编写，于是我们就需要一些将一些现成写好的代码引入到我们的项目中来帮助我们完成开发，就像是我们之前使用 jQuery。jQuery 这种外部代码在项目中，我们将其称之为包。

### npm

node 中的包管理局叫做 npm（node package manage），npm 是世界上最大的包管理库。

npm 由以下三个部分组成：

1. npm 网站 （通过 npm 网站可以查找包，也可以管理自己开发提交到 npm 中的包。https://www.npmjs.com/
2. npm CLI（Command Line Interface 即 命令行）（通过 npm 的命令行，可以在计算机中操作 npm 中的各种包（下载和上传等））
3. 仓库（仓库用来存储包以及包相关的各种信息）

### package.json

package.json 顾名思义，它就是一个用来描述包的 json 文件，node 通过该文件对项目进行描述，每一个 node 项目必须要有。它里边需要一个 json 格式的数据（json 对象），在 json 文件中通过各个属性来描述包的基本信息，像包名、版本、依赖等包相关的一切信息。

```json
{
  "name": "desktop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

配置属性说明：

- name（必备）
  - 包的名称，可以包含小写字母、\_和-
- version（必备）
  - 包的版本，需要遵从 x.x.x 的格式
  - 规则：
  - 版本从 1.0.0 开始
  - 修复错误，兼容旧版（补丁）1.0.1、1.0.2
  - 添加功能，兼容旧版（小更新）1.1.0
  - 更新功能，影响兼容（大更新）2.0.0
- author
  - 包的作者，格式：Your Name \<email@example.com\>
- description
  - 包的描述
- repository
  - 仓库地址（git）
- scripts
  - 自定义一些命令
  - start 和 test 可以直接通过 npm + 执行，其余需要 npm run + 执行

:::tip 版本描述
设置依赖项时"lodash": "^4.17.21"前边的 loadsh 表示包的名字，后边是包的版本。"^4.17.21"表示匹配最新的 4.x.x 的版本，也就是如果后期 lodash 包更新到了 4.18.1，我们的包也会一起更新，但是如果更新到了 5.0.0，我们的包是不会随之更新的。如果是"~4.17.21"，~表示匹配最小依赖，也就是 4.17.x。如果是"\*"则表示匹配最新版本，即 x.x.x（不建议使用）。当然也可以不加任何前缀，这样只会匹配到当前版本。
:::

### 相关命令

```bash
# 1. 初始化项目
# 创建 package.json 文件（需要回答问题）
$ npm init
# 创建 package.json 文件（所有值都采用默认值）
$ npm init -y

# 2. 下载包
# 将指定包下载到当前项目中
$ npm install 包名
# 将指定包下载到全局，常常使用于脚手架等
$ npm install 包名 -g
# 自动安装所有依赖
$ npm install

# 3. 卸载包
# 卸载指定包
$ npm uninstall 包名
# 卸载指定全局包
$ npm uninstall 包名 -g
```

```shell
# 安装指定版本
$ npm install lodash@3.2.0

# 安装大于的版本
$ npm install lodash@"> 3.2.0"
```

:::tip npm install 时发生了什么？

1. 将包下载当前项目的 node_modules 目录下
2. 会在 package.json 的 dependencies 属性中添加一个新属性 "lodash": "^4.17.21"
3. 会自动添加 package-lock.json 文件，帮助加速 npm 下载的

:::

### 配置镜像

```shell
# 1. 使用国内镜像
# 使用 cnpm
$ npm install -g cnpm --registry=https://registry.npmmirror.com

# 2. 修改 npm 源
# 配置 npm 源
$ npm config set registry https://registry.npmmirror.com

# 查看 npm 源
$ npm config get registry

# 删除 npm 源
$ npm config delete registry
```

### yarn & pnpm

截止目前，已经有四大包管理器，分别是 npm、yarn、pnpm 和 bun。

1. npm（Node Package Manager）：

- npm 是 Node.js 官方的包管理工具，是 JavaScript 社区中最常用的工具之一。
- 它具有庞大的包生态系统，包含了几乎所有 JavaScript 包。
- npm 提供了丰富的功能，包括安装、卸载、更新包，以及管理项目的依赖关系。

2. Yarn：

- Yarn 是由 Facebook、Google、Exponent 和 Tilde 联合开发的另一种包管理工具。
- 它的设计目标是解决 npm 在性能和一致性方面的一些问题，通过并行下载、本地缓存和锁文件等功能提高了包的安装速度和可靠性。
- Yarn 可以与 npm 兼容，并且能够使用 npm 存储库。

3. pnpm：

- pnpm 是另一种包管理工具，它通过共享依赖，减少了项目间的重复依赖，从而减少了磁盘空间的占用和安装时间。
- pnpm 的设计理念是尽可能地减少冗余，以提高性能和效率。

4. Bun：

- Bun 是一个相对较新的包管理工具，它的目标是提供更快、更简洁的解决方案，以替代传统的 npm、Yarn 和 pnpm。
- Bun 采用了一些优化策略，以加速包的安装和管理过程，同时试图简化用户界面和命令。

[yarn 官网 👉](https://yarnpkg.com/)

[pnpm 官网 👉](https://pnpm.io/)

[bun 官网 👉](https://bun.sh.cn/)

命令

:::code-group

```shell [yarn]
# 安装
$ npm install -g yarn

# 查看版本
$ yarn -v

# 初始化项目
$ yarn init

# 安装依赖
$ yarn add xxx

# 卸载依赖
$ yarn remove xxx

# 安装开发依赖
$ yarn add -D xxx

# 还原依赖
$ yarn install

# 执行自定义脚本
$ yarn run

# 执行自定义脚本
$ yarn <指令>

# 全局安装
$ yarn global add

# 全局移除
$ yarn global remove

# 全局安装目录
$ yarn global bin

# 镜像配置
$ yarn config set registry https://registry.npmmirror.com

# 镜像恢复
$ yarn config delete registry
```

```shell [pnpm]
# 安装
$ npm install -g pnpm

# 查看版本
$ pnpm -v

# 初始化项目
$ pnpm init

# 安装依赖
$ pnpm add xxx

# 卸载依赖
$ pnpm remove xxx

# 安装开发依赖
$ pnpm add -D xxx

# 安装全局包
$ pnpm add -g xxx

# 还原依赖
$ pnpm install

# 镜像配置
$ pnpm config set registry https://registry.npmmirror.com

# 镜像恢复
$ pnpm config delete registry
```

### corepack

:::

```shell
# 在 node v 16.0.0 之后，有一个 corepack 工具，其同时内置了 yarn 和 pnpm
# 默认关闭状态，需要手动开启
$ corepack enable

# 切换 corepack yarn 为 1.x.x 版本
$ corepack prepare yarn@1.x.x --activate

# 切换 corepack yarn 最新版本
$ corepack prepare yarn@latest --activate
```

## Http 协议

### 两道面试题

:::tip 当在浏览器中输入地址以后发什么？

1. DNS 解析，获取网站的 ip 地址
2. 浏览器需要和服务器建立连接（tcp/ip）（三次握手）
3. 向服务器发送请求（http 协议）
4. 服务器处理请求，并返回响应（http 协议）
5. 浏览器将响应的页面渲染
6. 断开与服务器的连接（四次挥手）

:::

:::tip 客户端如何和服务器建立（断开）连接

- 三次握手（建立连接）

  1. 客户端向服务器发送连接请求（SYN）；
  2. 服务器收到连接请求，向客户端返回消息（ACK + SYN）；
  3. 客户端向服务器发送同意连接的信息（SYN）；

- 四次挥手（断开连接）

  1. 客户端向服务器发送断开请求，服务器时数据发送完毕，请求断开连接（FIN）；
  2. 服务器向客户端返回数据，收到请求（ACK）；
  3. 服务器向客户端返回数据，数据接收完成，可以断开（FIN + ACK）；
  4. 客户端向服务器发送数据，同意断开连接（ACK）；

:::

### 网络通讯

`TCP/IP 协议族`中包含了一组协议，这组协议规定了互联网中所有的通讯的细节。

`网络通讯`过程由四层组成：

- `应用层`: HTTP、FTP、SMTP、DNS
  - 软件层面，浏览器、服务器都属于应用层
- `传输层`: TCP、UDP
  - 负责对数据拆分，把大数据拆分为一个个小包（请求时），负责对数据合并，将一个个小包合并成大数据（接收时）
- `网络层`: IP、ICMP、ARP
  - 负责给数据包添加信息（请求时）；负责给数据包移除信息（接收时）
- `数据链路层`: MAC
  - 传输数据

其中，`HTTP 协议（超文本传输协议）`是应用层的协议，用来规定客户端和服务器之间的通讯规则，即规定`报文`格式。

### 报文

报文（message）？

浏览器和服务器之间的通讯时基于`请求和响应`

- 浏览器向服务器发送`请求（request）`，相当于发信
- 服务器向浏览器返回`响应（response）`，相当于回信

### 报文类型

报文类型可以分为以下两种：

- `请求报文（request）`: 客户端发送给服务器的报文称为请求报文。
- `响应报文（response）`: 服务器发送给客户端的报文称为响应报文。

#### 请求报文

- 请求首行
- 请求头
- 空行
- 请求体

```javascript
/* 请求报文示例 */
// GET /07_http%E5%8D%8F%E8%AE%AE/01_http%E5%8D%8F%E8%AE%AE.html?username=sunwukong HTTP/1.1
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7
// Cache-Control: max-age=0
// Connection: keep-alive
// Host: 127.0.0.1:5500
// If-Modified-Since: Thu, 27 Oct 2022 11:10:28 GMT
// If-None-Match: W/"1b8-1841922e832"
// Referer: http://127.0.0.1:5500/07_http%E5%8D%8F%E8%AE%AE/01_http%E5%8D%8F%E8%AE%AE.html?username=sunwukong
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: same-origin
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
// sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"
```

分析：

- `请求首行`: 请求首行就是请求报文的第一行;
  - GET /index.html?username=sunwukong HTTP/1.1
    - 1. GET 表示发送 get 请求
    - 2. /index.html?username=sunwukong 表示请求资源路径，其中 '?' 后面的内容叫做`查询字符串`
    - 3. HTTP/1.1 表示使用 http 协议的 1.1 版本
- `请求头`: 请求头是键值对结构，用来告诉服务器我们浏览器的信息;
  - Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,_/_;q=0.8,application/signed-exchange;v=b3;q=0.9
    - Accept 浏览器可以接受的文件类型
    - Accept-Encoding 浏览器允许的压缩的编码
    - User-Agent 用户代理，它是一段用来描述浏览器信息的字符串
- `空行`: 用来分隔请求头和请求体;
- `请求体`: get 没有，post 通过请求体来发送数据;

:::tip

| 请求方式 |               传参方式               |                                           长度限制                                            |
| :------: | :----------------------------------: | :-------------------------------------------------------------------------------------------: |
|   Get    | 通过查询字符串发送数据，URL 可以看到 |  HTTP 协议并没有对 URL 长度限制，主要的限制来源于特定的浏览器和服务器。2083 个字符 IE 标准。  |
|   POST   |   通过请求体发送数据，URL 无法查看   | HTTP 协议规范也没有进行大小限制，起限制作用的是服务器的处理程序的处理能力。。Tomcat 默认 2M。 |

[关于 HTTP GET/POST 请求参数长度最大值的一个理解误区 - jasonhsu9](https://www.jianshu.com/p/ea99c1e4f6a4)

:::

#### 响应报文

- 响应首行
- 响应头
- 空行
- 响应体

```javascript
/* 响应报文示例 */
// HTTP/1.1 200 OK
// Vary: Origin
// Access-Control-Allow-Credentials: true
// Accept-Ranges: bytes
// Cache-Control: public, max-age=0
// Last-Modified: Thu, 27 Oct 2022 11:31:54 GMT
// ETag: W/"20c-18419368696"
// Content-Type: text/html; charset=UTF-8
// Content-Length: 2017
// Date: Thu, 27 Oct 2022 11:52:29 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
```

分析：

- `响应首行`: 响应报文的第一行;
  - HTTP/1.1 200 OK
  - 200 响应状态码
  - ok 对响应状态码的描述
  - 响应状态码
    - 1xx 请求处理中
    - 2xx 表示成功
    - 3xx 表示请求的重定向
    - 4xx 表示客户端错误
    - 5xx 表示服务器的错误
- `响应头`: 是一个一个的名值对结构，用来告诉浏览器响应的信息;
  - Content-Type 用来描述响应体的类型
  - Content-Length 用来描述响应体大小
  - Content-Type: text/html; charset=UTF-8
  - Content-Length: 2017
- `空行`: 用来分隔响应头和响应体;
- `响应体`: 响应体就是服务器返回给客户端的内容;

## Express

Fast, unpinionated, minimalist web framework for Node.js

Express 是一个基于 Node.js 平台的 web 应用开发框架，它提供了一系列强大特性帮助你创建各种 Web 和移动设备应用。

Express 框架核心特性：

- 可以设置中间件来响应 HTTP 请求
- 定义了路由表用于执行不同的 HTTP 请求动作
- 可以通过向模板传递参数来动态渲染 HTML 页面

### 安装 & 配置 & 访问

```shell
npm install express
```

```javascript
// 引入 express 模块
const express = require("express");

// 创建 express 应用 (对象)
const app = express();

// 配置路由
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// 启动服务器
// 监听端口
app.listen(3000, () => {
  console.log("服务器启动成功");
});
```

```shell
# 服务器启动后，我们便可以通过 3000 端口来访问
# 协议名://ip 地址:端口号/路径
# http://locahost:3000
# http://127.0.0.1:3000
```

### 路由 & 路径 & 中间件

`路由`

如果希望服务器可以正常访问，则需要为服务器设置`路由`.

`路由`可以根据不同的请求方式和请求地址来处理用户的请求.

app.method([路径], callback) 方法用来设置`路由`

- 路由回调函数执行时，会接收到`三个参数`
- request 用户的请求信息，请求报文
- response 服务器的响应信息
- next 它是一个函数，调用函数后，可以触发后续的中间间，且不能在响应处理完毕后使用

例如

```javascript
app.get("/", (request, response) => {
  // 1.处理请求（request）
  // 2.响应请求（response）
  console.log("有人访问我了~");
  response.send("Hello World");

  // 响应请求常用方法
  // response.sendStatue() 用来向客户端发送响应状态码
  // response.status() 用来设置响应状态码,但不发送
  // response.send() 用来向客户端发送响应
});
```

`路径`，用来匹配用户请求的地址，即 app.method() 中的第一个参数

`中间件`

> 实际场景：`权限验证`

- 在 express 中，使用 app.use([路径]) 方法来注册`中间件`，`中间件`作用和路由很像，用法很像，但是路由不区分请求的方式，只看路径。
- 和路由的区别
  - 1. 会匹配所有请求，不区分请求方式，路径为模糊查询，都会执行（`类似拦截器`）。
  - 2. 路径设置父目录，子目录都会触发，如 app.use("/user")，访问 /user 和 /user/xxx 都会触发。

例如

```javascript
app.use("/", (request, response) => {
  console.log("收到请求~");
  response.send("这是通过中间件返回的响应");
});
```

:::tip

```javascript
app.use("/", (request, response) => {
  response.send("这是通过中间件返回的响应");
});
```

等同于

```javascript
app.use((request, response) => {
  response.send("这是通过中间件返回的响应");
});
```

:::

```javascript
/* 
  运行这里，会只执行第一个中间件，
  因为第一个中间件没有调用 next()，
  所以不会执行后面的中间件
*/
app.use((req, res, next) => {
  console.log("111", Date.now());
  res.send("<h1>111</h1>");
});
app.use((req, res) => {
  console.log("222", Date.now());
  res.send("<h1>222</h1>");
});
app.use((req, res) => {
  console.log("333", Date.now());
  res.send("<h1>333</h1>");
});

/* 
  next() 是回调函数的第三个参数，它是一个函数，调用函数后，可以触发后续的中间间
  next() 不能在响应处理完毕后使用
*/
app.use((req, res, next) => {
  console.log("111", Date.now());
  next(); // [!code ++]
});
app.use((req, res, next) => {
  console.log("222", Date.now());
  next(); // [!code ++]
});
app.use((req, res, next) => {
  console.log("333", Date.now());
  next(); // [!code ++]
});
```

### nodemon

`nodemon` 是一个命令行工具（监视器），用来监视 node.js 应用程序中的任何更改并自动重新启动服务器。

使用方式：

1. 全局安装

```shell
# 安装
$ npm install -g nodemon # npm 全局安装
$ yarn global add nodemon # yarn 全局安装

# 启动
$ nodemon # 默认启动 index.js
$ nodemon xxx.js # 启动指定的 js
```

:::warning
通过 yarn 进行全局安装时，默认 yarn 的目录并不在环境变量中，需要手动将路径添加到环境变量中

```shell
# 查询 yarn 全局安装的路径
$ yarn global bin # 例 /Users/xxx/.yarn/bin
```

将上述查询到的 `yarn 全局安装的路径`添加到`系统环境变量 Path`中，`重启开发工具`即可
:::

2. 项目安装

```shell
# 开发依赖
$ npm i -D nodemon # npm 项目安装
$ yarn add -D nodemon # yarn 项目安装

# npx 执行 node 模块
npx nodemon # 启动 index.js
npx nodemon xxx.js # 启动指定的 js
```

```javascript
// package.json
{
  "scripts": {
    "start": "npx nodemon index.js" // 简化启动命令
  }
}
```

:::tip 端口知识
端口号，为 0 ~ 65535

一般自定义的，为四位端口号
:::

### 静态资源

服务器中的代码，对于外部来说都是不可见的

所以我们写的 html 页面，`浏览器无法直接访问`

如果希望浏览器可以访问，则需要将页面所在的目录设置`静态资源`的目录

```javascript
const express = require("express");
const path = require("path");

const app = express();

// 设置 static 中间间后，  // [!code ++]
// 浏览器访问时，会自动去 public 目录寻找是否有匹配的静态资源  // [!code ++]
app.use(express.static(path.resolve(__dirname, "./public"))); // 设置静态资源的中间件 // [!code ++]

app.get("/hello", (req, res) => {
  res.send("Hello World");
});
app.listen(3000, () => {
  console.log("服务器启动成功");
});
```

```html
<!-- /public/index.html -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>hello world</h1>
  </body>
</html>
```

访问路径 `localhost:3000` 或 `localhost:3000/index.html`

:::details Demo 用户登录 （Get 请求）

```html
<!-- /public/login.html -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/login" method="get">
      <p>
        <span>用户名</span>
        <input type="text" name="username" />
      </p>
      <p>
        <span>密码</span>
        <input type="password" name="password" />
      </p>
      <p>
        <input type="submit" value="登录" />
      </p>
    </form>
  </body>
</html>
```

<br />

```javascript
/* /index.js */
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<h1>大聪明</h1>");
});

app.get("/login", (req, res) => {
  console.log("接收到登录请求");
  const { username, password } = req.query;
  if (username === "admin" && password === "123456") {
    res.send("<h1>登录成功</h1>");
  } else {
    res.send("<h1>用户名或密码错误</h1>");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

<br />

```json
/* package.json */
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.2"
  }
}
```

:::

### param & post 请求

#### param

get 请求发送给参数的第二种方式

/hello/:id 表示当用户访问 /hello/xxx 时就会触发

/hello/:name/:age/:gender 多个参数时表示

在路径中以冒号命名的部分我们称为 param （请求参数），在 get 请求时，它可以被接收到

```javascript
app.get("/hello/:id", (req, res) => {
  // 通过 req.params 属性来获取这些参数
  console.log(req.params);
});
```

:::warning
本质上两者没有区别，均是通过路径的方式去传递参数。

query `查询字符串`（以对象的方式传参，参数可选）

param `请求参数`（不用指定属性名，服务端接收才指定，参数不可选）
:::

#### post

在请求体中，接收参数 req.body

`默认情况下 express 不会自定解析请求体，需要配置中间件`

:::details Demo 用户登录 （Post 请求）

```html
<!-- /public/login.html -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/login" method="post">
      <p>
        <span>用户名</span>
        <input type="text" name="username" />
      </p>
      <p>
        <span>密码</span>
        <input type="password" name="password" />
      </p>
      <p>
        <input type="submit" value="登录" />
      </p>
    </form>
  </body>
</html>
```

<br />

```javascript
/* /index.js */
const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true })); // 配置解析请求体的中间件 // [!code ++]

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<h1>大聪明</h1>");
});

app.get("/login", (req, res) => {
  console.log("接收到登录请求");
  const { username, password } = req.query;
  if (username === "admin" && password === "123456") {
    res.send("<h1>登录成功</h1>");
  } else {
    res.send("<h1>用户名或密码错误</h1>");
  }
});

app.post("/login", (req, res) => {
  console.log("接收到登录请求 post");
  const { username, password } = req.body; // [!code ++]
  if (username === "admin" && password === "123456") {
    res.send("<h1>登录成功</h1>");
  } else {
    res.send("<h1>用户名或密码错误</h1>");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

<br />

```json
/* package.json */
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.2"
  }
}
```

:::

### 模板引擎

:::tip 处理错误的路由

可以在所有路由的后边配置错误路由

只要这个中间件一执行，说明上面的地址都没有匹配

```javascript
const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  res.statue(404);
  res.send("<h1>您访问的地址已被外星人劫持！</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

:::

html 页面属于静态页面，创建的时候什么样子，用户看到就是什么样子，不会自动跟随服务器中数据的变化而变化。

希望有这么一个东西，它长得像是网页，但它里边可以嵌入变量，这个东西在 node 中被称为`模板`

在 node 中有很多个`模板引擎`，推荐 `ejs`

:::tip

Which template engines does Express support?

Express 支持哪些模板引擎？

Express supports any template engine that conforms with the (path, locals, callback) signature. To normalize template engine interfaces and caching, see the [consolidate.js](https://github.com/visionmedia/consolidate.js) project for support. Unlisted template engines might still support the Express signature.

Express 支持任何符合 （path， locals， callback） 签名的模板引擎。 要规范化模板引擎接口和缓存，请参阅 [consolidate.js](https://github.com/visionmedia/consolidate.js) 项目寻求支持。未列出的模板引擎可能仍支持 Express 签名。

For more information, see [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html).

有关更多信息，请参阅[将模板引擎与 Express 结合使用](https://expressjs.com/en/guide/using-template-engines.html)。

<hr />

[正在阅读 👉](https://expressjs.com/en/starter/faq.html#which-template-engines-does-express-support)
:::

#### 使用步骤

1. 安装 ejs；
2. 配置 express 的模板引擎为 ejs；
3. 配置模板路径；`注意，模板引擎需要被 express 渲染后才能使用`

[EJS Github 👉](https://github.com/mde/ejs)

```shell
npm install ejs
```

```javascript
/* main.js */
const express = require("express");
const app = express();

// 1.
// 将 ejs 设置为默认的模板引擎 // [!code ++]
app.set("view engine", "ejs"); // [!code ++]

// 2.
// 配置模板路径【默认】 // [!code ++]
// app.set("views", "views"); // [!code ++]
// 配置模板路径【自定义】 // [!code ++]
app.set("views", path.resolve(__dirname, "views")); // [!code ++]

// 3. 渲染 // [!code ++]
app.get("/students", (req, res) => {
  // res.render() 用来渲染一个模板引擎，并将其返回给浏览器 // [!code ++]
  res.render("students"); // [!code ++]
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

```ejs
<!-- /views/students.ejs -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>这是 ejs 模板</title>
  </head>
  <body>
    <h1>Hello EJS</h1>
  </body>
</html>
```

#### 传递数据

:::details 传递数据，且渲染

```javascript
/* main.js */
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.get("/students", (req, res) => {
  res.render("students", { name: "孙悟空", age: 18 }); // [!code ++]
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

<br />

```ejs
<!-- /views/students.ejs -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>这是 ejs 模板</title>
  </head>
  <body>
    <h1>Hello EJS</h1>
    <!-- 接收参数，且渲染 -->
    <h2><%=name %></h2>
    <h2><%=age %></h2>
  </body>
</html>
```

:::

:::warning
<%= %> 语法，在 ejs 中输出内容时，它会自动对字符串的特殊符号进行转义

`防止 XSS 攻击`

```javascript
res.render("students", { hello: "<h1>哈哈哈</h1>" });
```

<br />

```ejs
<%# 将直接渲染为字符串，不会解析为h1标签 %>
<%=hello %>

<%# 原样输出，即解析h1标签 %>
<%-hello %>
```

:::

注释语法

```ejs
<%#单行注释  %>

<%
  // console.log('js 语法注释')
%>
```

### 练习

增删查改 CRUD

全称增加（Create，意为“建立”）、删除（Delete）、查询（Read，意为“读取”）、改正（Update，意为“更新”）

完整练习内容请观看 第二十五和第二十六集视频， [Node.js 完全指南（直播回放）李立超](https://www.bilibili.com/video/BV1qN4y1A7jM/)

#### 代码小抄

```javascript
res.redirect(); // 路由重定向
```

```javascript
/* main.js */
// 数据持久化，存 json 文件

// 读
const STUDENT_ARR = require("./data/students.json");

// 写
const path = require("path");
const fs = require("fs/promises");
fs.writeFile(path.resolve("__dirname", "./data/students.json"), JSON.stringify(STUDENT_ARR))
  .then((res) => {
    // 写入成功
  })
  .catch((err) => {
    // 写入失败
  });
```

### Router

`Router` 是 express 中创建的一个对象

router 实际上是一个中间件，可以在该中间件绑定各种路由以及其他的中间件

`可以用来绑定路由的一个工具`

#### 创建

```javascript
/* main.js */
const express = require("express");
const router = express.Router();
```

#### 绑定

```javascript
/* main.js */
const express = require("express");
const app = express();
const router = express.Router();

router.get("/Hello", (req, res) => {
  res.send("Hello World");
});

app.use(router);
```

#### 最终使用

`实现路由的拆分，代码解耦`

express() 只能实例一次

```javascript
/* /routes/user.js */
const express = require("express");

// 创建路由
const router = express.Router();
router.get("/hello", (req, res) => {
  res.send("Hello World");
});

// 暴露到模块外
module.export = router;
```

```javascript{3}
/* main.js */
const express = require("express");
const app = express();
const userRouter = require("./routes/user.js");

app.use(userRouter);

app.license(3000, () => {
  console.log("服务器已启动！");
});
```

#### 路由重复解决

当路由过多时，存在路由重复的情况，可以在 app.use() 的时候指定`前缀/命名空间/子路由`

```javascript{4}
/* /routes/user.js */
const express = require("express");
const router = express.Router();
router.get("/list", (req, res) => {
  res.send("list-user");
});
module.export = router;
```

```javascript{4}
/* /routes/goods.js */
const express = require("express");
const router = express.Router();
router.get("/list", (req, res) => {
  res.send("list-goods");
});
module.export = router;
```

```javascript
/* main.js */
const express = require("express");
const app = express();
const userRouter = require("./routes/user.js");
const goodsRouter = require("./routes/goods.js");

app.use(userRouter); // [!code --]
app.use(goodsRouter); // [!code --]
app.use("/user", userRouter); // [!code ++]
app.use("/goods", goodsRouter); // [!code ++]

app.license(3000, () => {
  console.log("服务器已启动！");
});
```

### Cookie

#### 简介

HTTP 协议是一个无状态的协议，服务器无法区分请求是否发送自同一个客户端。

cookie 是 Http 协议中用来解决无状态问题的技术。

cookie 的本质就是一个头

服务器以响应头的形式将 cookie 发送给客户端，客户端收到以后会将其存储，并在下次向服务器发送发送请求时将其传回，这样服务器就可以根据 cookie 来识别客户端了。

#### 使用

##### 1. 设置 cookie

服务器向客户端发送 cookie：

```javascript
/* main.js */
const express = require("express");
const app = express();

app.get("/set-cookie", (req, res) => {
  res.cookie("token", 123123); // [!code ++]
  res.send("设置 cookie");
});
```

当请求 `/set-cookie` 后，可以在`浏览器控制面板-网络-响应标头`中看到设置的 Set-Cookie 字段。

##### 2. 接收 cookie

服务器读取客户端返回的 cookie：

`需要安装中间件 cookie-parser 插件`

```shell
npm install cookie-parser
```

```javascript
/* main.js */
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser"); // [!code ++]

app.use(cookieParser()); // 设置 cookie 解析中间件 // [!code ++]
app.get("/get-cookie", (req, res) => {
  const token = req.cookies.token; // [!code ++]
  res.send("获取 cookie");
});
```

当请求 `/get-cookie` 后，可以在`浏览器控制面板-网络-请求标头`中看到设置的 Cookie 字段。

##### 3. cookie 有效期

cookie 是有有效期的

默认情况下，cookie 的有效期就是一次会话（session），会话是一次打开到关闭浏览器的过程。

###### 3.1 expires

指定具体过期时间

```javascript
app.get("/set", (req, res) => {
  res.cookie("token", 123123, {
    expires: new Date(), // [!code ++]
  });
});
```

###### 3.2 maxAge

设置有效时间，多久后过期，单位：ms

```javascript
app.get("/set", (req, res) => {
  res.cookie("token", 123123, {
    maxAge: 2000, // [!code ++]
  });
});
```

##### 4. 删除 cookie

cookie 一旦发送给浏览器，我们就不能再修改了

但是，我们可以通过发送`新的同名`cookie 来替换旧 cookie，从而达到修改的目的

```javascript
app.get("/delete", (req, res) => {
  res.cookie("token", "", { maxAge: 0 }); // [!code ++]
  res.send("删除 cookie");
});
```

:::details CookieOptions 配置对象

```typescript
{
  cookie(name: string, val: any, options: CookieOptions): this;
}
```

<br />

```typescript
/**
 * Options passed down into `res.cookie`
 * @link https://expressjs.com/en/api.html#res.cookie
 */
export interface CookieOptions {
  /** Convenient option for setting the expiry time relative to the current time in **milliseconds**. */
  maxAge?: number | undefined;
  /** Indicates if the cookie should be signed. */
  signed?: boolean | undefined;
  /** Expiry date of the cookie in GMT. If not specified or set to 0, creates a session cookie. */
  expires?: Date | undefined;
  /** Flags the cookie to be accessible only by the web server. */
  httpOnly?: boolean | undefined;
  /** Path for the cookie. Defaults to “/”. */
  path?: string | undefined;
  /** Domain name for the cookie. Defaults to the domain name of the app. */
  domain?: string | undefined;
  /** Marks the cookie to be used with HTTPS only. */
  secure?: boolean | undefined;
  /** A synchronous function used for cookie value encoding. Defaults to encodeURIComponent. */
  encode?: ((val: string) => string) | undefined;
  /**
   * Value of the “SameSite” Set-Cookie attribute.
   * @link https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00#section-4.1.1.
   */
  sameSite?: boolean | "lax" | "strict" | "none" | undefined;
  /**
   * Value of the “Priority” Set-Cookie attribute.
   * @link https://datatracker.ietf.org/doc/html/draft-west-cookie-priority-00#section-4.3
   */
  priority?: "low" | "medium" | "high";
  /** Marks the cookie to use partioned storage. */
  partitioned?: boolean | undefined;
}
```

:::

### Session

cookie 的不足：

cookie 是由服务器创建，浏览器保存，`每次`浏览器访问服务器时都需要将 cookie 发回，导致`不能在 cookie 中存放较多的数据`，并且 cookie 是直接存储在客户端中，`容易被篡改盗用（明文存储）`

注意，我们在使用 cookie 一定不会在 cookie 中春初敏感信息

为了解决 cookie 的不足，我们希望可以将用户的数据统一存储在服务器中，每一个用户的数据都有一个对应的 id，我们只需要通过 cookie 将 id 发送给浏览器,浏览器只需每次访问时将 id 发回，即可读取到服务器中存储的数据。

这个技术我们称之为 session（会话）

#### 简介

`session 是服务器中的一个对象`，这个对象用来存储用户的数据；

每一个 session 对象都有一个唯一的 id，session 创建后，id 会以 cookie 的形式发送给客户端；

客户端收到以后，每次访问/请求都会将 id 发回，服务器中就可以根据 id 找到对应的 session

主要的两部分：

1. 服务器端：存储 session 数据的对象
2. 客户端：存储 session id 的 cookie

什么时候会失效？

1. 服务器中的 session 对象没了
2. cookie 过期

在 express 中，可以通过 express-session 组件来实现 session 功能，express-session 默认是将 session 存储到内存中的，所有服务器一旦重启 session 会自动重置。所以`使用 session 通常会对 session 进行持久化的操作（写到文件或数据库）` [立即阅读](#持久化)

#### 使用

1. 安装组件

```shell
npm install express-session
```

2. 配置中间件

```javascript{6,7,8,9,10}
/* main.js */
const express = require("express");
const app = express();
const expressSession = require("express-session");

app.use(
  expressSession({
    secret: "123123", // 密钥
  })
);
```

:::details SessionOptions 配置对象

```typescript
declare function session(options?: session.SessionOptions): express.RequestHandler;

declare namespace session {
  interface SessionOptions {
    /**
     * This is the secret used to sign the session ID cookie.
     * The secret can be any type of value that is supported by Node.js `crypto.createHmac` (like a string or a Buffer).
     * This can be either a single secret, or an array of multiple secrets.
     * If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests.
     * The secret itself should be not easily parsed by a human and would best be a random set of characters.
     *
     * A best practice may include:
     * * The use of environment variables to store the secret, ensuring the secret itself does not exist in your repository.
     * * Periodic updates of the secret, while ensuring the previous secret is in the array.
     *
     * Using a secret that cannot be guessed will reduce the ability to hijack a session to only guessing the session ID (as determined by the `genid` option).
     *
     * Changing the secret value will invalidate all existing sessions.
     * In order to rotate the secret without invalidating sessions, provide an array of secrets, with the new secret as first element of the array, and including previous secrets as the later elements.
     *
     * Note HMAC-256 is used to sign the session ID. For this reason, the secret should contain at least 32 bytes of entropy.
     */
    secret: CipherKey | CipherKey[];

    /**
     * Function to call to generate a new session ID. Provide a function that returns a string that will be used as a session ID.
     * The function is given the request as the first argument if you want to use some value attached to it when generating the ID.
     *
     * The default value is a function which uses the uid-safe library to generate IDs.
     * Be careful to generate unique IDs so your sessions do not conflict.
     */
    genid?(req: express.Request): string;

    /**
     * The name of the session ID cookie to set in the response (and read from in the request).
     * The default value is 'connect.sid'.
     *
     * Note if you have multiple apps running on the same hostname (this is just the name, i.e. `localhost` or `127.0.0.1`; different schemes and ports do not name a different hostname),
     *   then you need to separate the session cookies from each other.
     * The simplest method is to simply set different names per app.
     */
    name?: string | undefined;

    /**
     * The session store instance, defaults to a new `MemoryStore` instance.
     * @see MemoryStore
     */
    store?: Store | undefined;

    /**
     * Settings object for the session ID cookie.
     * @see CookieOptions
     */
    cookie?: CookieOptions | undefined;

    /**
     * Force the session identifier cookie to be set on every response. The expiration is reset to the original `maxAge`, resetting the expiration countdown.
     * The default value is `false`.
     *
     * With this enabled, the session identifier cookie will expire in `maxAge` *since the last response was sent* instead of in `maxAge` *since the session was last modified by the server*.
     * This is typically used in conjuction with short, non-session-length `maxAge` values to provide a quick timeout of the session data
     *   with reduced potential of it occurring during on going server interactions.
     *
     * Note that when this option is set to `true` but the `saveUninitialized` option is set to `false`, the cookie will not be set on a response with an uninitialized session.
     * This option only modifies the behavior when an existing session was loaded for the request.
     *
     * @see saveUninitialized
     */
    rolling?: boolean | undefined;

    /**
     * Forces the session to be saved back to the session store, even if the session was never modified during the request.
     * Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server
     *   and changes made to the session in one request may get overwritten when the other request ends, even if it made no changes (this behavior also depends on what store you're using).
     *
     * The default value is `true`, but using the default has been deprecated, as the default will change in the future.
     * Please research into this setting and choose what is appropriate to your use-case. Typically, you'll want `false`.
     *
     * How do I know if this is necessary for my store? The best way to know is to check with your store if it implements the `touch` method.
     * If it does, then you can safely set `resave: false`.
     * If it does not implement the `touch` method and your store sets an expiration date on stored sessions, then you likely need `resave: true`.
     */
    resave?: boolean | undefined;

    /**
     * Trust the reverse proxy when setting secure cookies (via the "X-Forwarded-Proto" header).
     * The default value is undefined.
     *
     * - `true`: The `X-Forwarded-Proto` header will be used.
     * - `false`: All headers are ignored and the connection is considered secure only if there is a direct TLS/SSL connection.
     * - `undefined`: Uses the "trust proxy" setting from express
     */
    proxy?: boolean | undefined;

    /**
     * Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
     * Choosing `false` is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie.
     * Choosing `false` will also help with race conditions where a client makes multiple parallel requests without a session.
     *
     * The default value is `true`, but using the default has been deprecated, as the default will change in the future.
     * Please research into this setting and choose what is appropriate to your use-case.
     *
     * **If you are using `express-session` in conjunction with PassportJS:**
     * Passport will add an empty Passport object to the session for use after a user is authenticated, which will be treated as a modification to the session, causing it to be saved.
     * This has been fixed in PassportJS 0.3.0.
     */
    saveUninitialized?: boolean | undefined;

    /**
     * Control the result of unsetting req.session (through delete, setting to null, etc.).
     * - `destroy`: The session will be destroyed (deleted) when the response ends.
     * - `keep`: The session in the store will be kept, but modifications made during the request are ignored and not saved.
     * @default 'keep'
     */
    unset?: "destroy" | "keep" | undefined;
  }
}
```

:::

3. 设置 & 获取 session

```javascript{12,13,14,15,17,18,19,20,21}
/* main.js */
const express = require("express");
const app = express();
const expressSession = require("express-session");

app.use(
  expressSession({
    secret: "123123", // 密钥
  })
);

app.get("/set", (req, res) => {
  req.session.username = "sunwukong";
  res.send("设置 session");
});

app.get("/get", (req, res) => {
  const username = req.session.username;
  console.log(username);
  res.send("获取 session");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

4. 统一验证

```javascript{9,10,11,12,13,14,15}
/* /routes/goods.js */
const express = require("express");
const router = express.Router();

/*
  当 goods 中的路由均需要验证 session 时
  可以通过设置中间件进行拦截，如验证通过就 next() 放行
*/
router.use((req, res) => {
  if (req.session.username) {
    next();
  } else {
    res.redirect("/");
  }
});

router.get("/list", (req, res) => {
  //
});
router.get("/add", (req, res) => {
  //
});
router.get("/delete", (req, res) => {
  //
});

module.export = router;
```

#### 持久化

[Compatible Session Stores - 持久化方案](https://www.npmjs.com/package/express-session#compatible-session-stores)

[session-file-store](https://www.npmjs.com/package/session-file-store)

将演示`存储文件`的方式。

① 安装 session-file-store
② 引入
③ 设置为中间件

```shell
$ 安装 session-file-store
npm install session-file-store
```

```javascript
const express = require("express");
const path = require("path");
const expressSession = require("express-session"); // 引入 express-session
const FileStore = require("session-file-store")(expressSession); // 引入 session-file-store

app.use(
  expressSession({
    store: new FileStore({
      // 配置对象
      // https://www.npmjs.com/package/session-file-store#Options

      /*
        指定 session 本地文件的路径
      */
      path: path.resolve(__dirname, "./sessions"),

      /* 
        加密密钥
      */
      secret: "123123",

      /* 
        过期时间，最大闲置时间
        默认 3600（1小时），单位：秒
      */
      ttl: 3600,

      /* 
        指定清除 session 的间隔
        默认 3600（1小时），单位：秒
      */
      reapInterval: 3600,
    }),
    secret: "123123",
  })
);
```

### CSRF

`跨站请求伪造`（CSRF）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。

[MDN - CSRF](https://developer.mozilla.org/zh-CN/docs/Glossary/CSRF)

#### csrf 攻击演示

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- 图像 -->
    <img src="http://loaclhost:3000/students/delete?id=3" />

    <!-- 表单 -->
    <form action="http://localhost:3000/students/add" method="get">
      <input type="text" name="username" value="dazhaxie" />
      <input type="text" name="age" value="77" />
      <input type="text" name="gender" value="女" />
      <input type="text" name="address" value="宁波" />
    </form>
    <script>
      document.forms[0].submit();
    </script>
  </body>
</html>
```

#### 防御 csrf 攻击

1. 使用 referer 头来检查请求来源

```javascript
router.use((req, res, next) => {
  const referer = req.get("referer");
  // console.log("请求来自：", referer);
  if (!referer || !referer.startsWith("http://localhost:3000/")) {
    res.status(403).send("你没有这个权限！");
    return;
  }
});
```

2. 使用验证码
3. 尽量使用 post 请求（结合 token）

:::tip

token（令牌）

可以在创建表单时随机生成一个令牌，然后将令牌存储到 session 中，并通过模板发送给用户，用户提交保单时，必须将 token 发回，才可以进行后续操作。（可以使用 uuid 来生成 token）

:::
