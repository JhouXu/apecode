---
layout: doc
---

# Node 学习笔记

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
  - 2. 属性和方法
    - fs.readFile(path[, options], callback) 读取文件
    - fs.appendFile(path[, options], data[, encoding], callback) 创建新文件，或追加新数据
    - fs.mkdir(path[, options], callback) 创建目录
    - fs.rmdir(path[, options], callback) 删除目录
    - fs.rm(path[, options], callback) 删除文件
    - fs.rename(oldPath, newPath, callback) 重命名文件或目录
    - fs.copyFile(src, dest, callback) 复制文件

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

## 参考

[Node.js 完全指南（直播回放）李立超 - bilibili 📺](https://www.bilibili.com/video/BV1qN4y1A7jM)
