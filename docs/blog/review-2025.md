# Review 2025

## 阶段一

### 事件循环？

[👉 渡一大师课 - 原理事件循环](/essays/javascript_duyi.html#一、原理-事件循环)

```javascript
console.log(1);

setTimeout(() => {
  console.log(3);
}, 0);

Promise.reject(() => {
  console.log(4);
}).catch((error) => {
  console.log(error);
});

console.log(2);
```

:::details 运行结果

```javascript
1
2
() => {
  console.log(4);
}
3
```

:::

## 阶段二

### 事件循环？

[👉 阶段一 - 事件循环？](#事件循环)

### uni-app 页面跳转方式？

- uni.navigateTo(options)，保留当前页面，跳转到应用内的某个非 tabBar 页面，可以返回原页面。
- uni.redirectTo(options)，关闭当前页面，跳转到应用内的某个非 tabBar 页面，不能返回原页面。
- uni.switchTab(options)，跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，`不能携带参数（参数需用全局变量或 storage 实现）`。
- uni.reLaunch(options)，关闭所有页面，打开到应用内的某个页面，清空页面栈。
- uni.navigateBack(options)，关闭当前页面，返回上一页面或多级页面。

```javascript
uni.navigateTo({
  url: "/pages/detail/detail?id=123",
});

uni.redirectTo({
  url: "/pages/detail/detail?id=456",
});

uni.switchTab({
  url: "/pages/home/home",
});

uni.reLaunch({
  url: "/pages/login/login",
});

uni.navigateBack({
  delta: 1, // 返回上一页
});
```

### uni-app 的页面传参方式？

1. URL 参数传参（最常用）

```javascript
// 传参方式（页面跳转时带参数）
uni.navigateTo({
  url: '/pages/detail/detail?id=123&name=Tom'
})

// 接收参数方式（在目标页 onLoad 生命周期中）
onLoad(options) {
  console.log(options.id);   // 输出: 123
  console.log(options.name); // 输出: Tom
}
```

2. 使用 eventChannel 传参（适合对象或复杂数据）

```javascript
// 传参方式（仅 navigateTo 支持）
uni.navigateTo({
  url: "/pages/detail/detail",
  success: function (res) {
    res.eventChannel.emit("acceptDataFromOpenerPage", {
      id: 456,
      user: { name: "Alice", age: 25 },
    });
  },
});

// 接收方式（在目标页 onLoad 中）
onLoad() {
  const eventChannel = this.getOpenerEventChannel();
  eventChannel.on('acceptDataFromOpenerPage', (data) => {
    console.log(data.id);       // 456
    console.log(data.user.name); // Alice
  });
}
```

3. 使用 uni.setStorage / uni.setStorageSync 传参

```javascript
// 设置参数
uni.setStorageSync("userInfo", { name: "Jack", age: 30 });

// 获取参数
const user = uni.getStorageSync("userInfo");
console.log(user.name); // Jack
```

4. 使用全局变量（不推荐，容易污染命名空间）

```javascript
// 在 main.js 中定义全局变量
Vue.prototype.globalData = {
  userId: 789,
};

// 在页面中访问
console.log(this.globalData.userId); // 789
```

### uni-app 的父子组件传参？

1. 父组件向子组件传参（通过 props）

```vue
<!-- 父组件中使用子组件，传入参数 -->
<template>
  <my-child :title="parentTitle" :user="userInfo" />
</template>
<script>
export default {
  data() {
    return {
      parentTitle: "欢迎来到UniApp",
      userInfo: { name: "Tom", age: 20 },
    };
  },
};
</script>

<!-- 子组件通过 props 接收 -->
<script>
export default {
  props: {
    title: String,
    user: Object,
  },
  mounted() {
    console.log(this.title); // 欢迎来到UniApp
    console.log(this.user.name); // Tom
  },
};
</script>
```

2. 子组件向父组件传值（通过 $emit）

```vue
<!-- 子组件中触发事件 -->
<template>
  <button @click="sendMsg">点击我</button>
</template>

<script>
export default {
  methods: {
    sendMsg() {
      this.$emit("childEvent", "我是子组件传来的消息");
    },
  },
};
</script>

<!-- 父组件中监听事件 -->
<template>
  <my-child @childEvent="getMsgFromChild" />
</template>

<script>
export default {
  methods: {
    getMsgFromChild(msg) {
      console.log(msg); // 我是子组件传来的消息
    },
  },
};
</script>
```

3. 父组件调用子组件方法（通过 ref）

```vue
<!-- 子组件定义方法 -->
<script>
export default {
  methods: {
    sayHello() {
      console.log("子组件的方法被调用了");
    },
  },
};
</script>

<!-- 父组件中通过 ref 调用 -->
<template>
  <my-child ref="childRef" />
</template>

<script>
this.$refs.childRef.sayHello();
</script>
```

`注意：在 <script setup> 语法中需要使用 ref="xxx" + onMounted() 方式配合 defineExpose。`

4. 使用 Vuex / Pinia / 全局 EventBus（适合跨层级通信）

- 如果数据要在多个不相关组件间共享，建议使用 Vuex 或 Pinia。
- 或者简单场景可用一个 EventBus 来监听/发送事件。

### uni-app 的生命周期？

在 UniApp 中，生命周期分为三类：

- 应用级生命周期（App）
- 页面级生命周期（Page）
- 组件级生命周期（Component）

#### 应用生命周期

管理整个 App 的启动、退出、后台、前台等状态。

应用生命周期函数在 App.vue 中定义，是整个应用的入口文件。

| 生命周期函数           | 触发时机                           | 支持平台            |
| ---------------------- | ---------------------------------- | ------------------- |
| `onLaunch(options)`    | 应用初始化完成时触发（只触发一次） | 全平台              |
| `onShow(options)`      | 应用进入前台时触发                 | 全平台              |
| `onHide()`             | 应用进入后台时触发                 | 全平台              |
| `onUnhandledRejection` | 捕获未处理的 Promise 异常          | H5、微信小程序、App |
| `onThemeChange`        | 系统主题变化时触发                 | 微信小程序          |

| 场景                       | 生命周期               | 用法                               |
| -------------------------- | ---------------------- | ---------------------------------- |
| 用户打开 App，检查登录状态 | `onLaunch`             | 初始化、读取缓存 token、跳转登录页 |
| App 从后台返回前台         | `onShow`               | 检查是否有新消息、刷新数据等       |
| App 被挂起                 | `onHide`               | 暂存数据、清理监听器               |
| 统一处理未 catch 的错误    | `onUnhandledRejection` | 错误上报等                         |

#### 页面生命周期

适用于页面（即 pages.json 中注册的页面）。

| 生命周期函数          | 说明                                               |
| --------------------- | -------------------------------------------------- |
| `onLoad(options)`     | 页面加载时触发，接收页面参数。初始化逻辑写在这里。 |
| `onShow()`            | 页面显示时触发，每次返回页面都会执行。             |
| `onReady()`           | 页面初次渲染完成时触发。只触发一次。               |
| `onHide()`            | 页面隐藏时触发，如 `navigateTo` 到另一个页面。     |
| `onUnload()`          | 页面卸载时触发，如 `navigateBack` 返回。           |
| `onPullDownRefresh()` | 监听下拉刷新操作（需要配置）。                     |
| `onReachBottom()`     | 页面滚动到底部时触发。                             |
| `onShareAppMessage()` | 用户点击右上角分享按钮时触发（仅小程序）。         |
| `onPageScroll(event)` | 页面滚动时触发。                                   |
| `onResize()`          | 页面尺寸变化时触发（仅 H5）。                      |
| `onTabItemTap(item)`  | 点击 tabBar 中的按钮时触发（仅 tab 页面）。        |

```javascript
export default {
  onLoad(options) {
    console.log("页面加载", options);
  },
  onShow() {
    console.log("页面显示");
  },
  onReady() {
    console.log("页面渲染完成");
  },
  onHide() {
    console.log("页面隐藏");
  },
  onUnload() {
    console.log("页面卸载");
  },
};
```

#### 组件生命周期

适用于通过 components/ 引入的子组件。

| 生命周期函数      | 说明                                                     |
| ----------------- | -------------------------------------------------------- |
| `beforeCreate()`  | 实例初始化之后，数据观测之前。                           |
| `created()`       | 实例创建完成，数据已设置。                               |
| `beforeMount()`   | 模板编译前，尚未挂载到 DOM。                             |
| `mounted()`       | 组件挂载到 DOM 后。最常用，用于获取 DOM 元素或发送请求。 |
| `beforeUpdate()`  | 数据更新前。                                             |
| `updated()`       | 数据更新后。                                             |
| `beforeDestroy()` | 实例销毁前。                                             |
| `destroyed()`     | 实例销毁后。                                             |

> 在 vue3 + `<script setup>` 中，推荐使用 Composition API 的生命周期钩子：

```javascript
// Vue 3 示例（使用 Composition API）
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("组件已挂载");
});

onUnmounted(() => {
  console.log("组件已卸载");
});
```

#### 生命周期执行顺序

1. 页面：onLoad → onShow → onReady
2. 组件：beforeCreate → created → beforeMount → mounted

## 阶段三

### vue 的数据绑定连接方式？

Vue 的核心特性之一是`双向数据绑定`，其本质是构建一个`响应式系统`，自动追踪数据变化并更新视图。

Vue 2 和 Vue 3 实现响应式的方式不同：

- Vue 2 使用 `Object.defineProperty` 对属性进行劫持。
- Vue 3 使用 `Proxy` 实现更全面的代理和性能优化。

#### 响应式系统原理

Vue 2：基于 `Object.defineProperty`

Vue 在初始化时遍历 `data` 中每个属性，将它们转化为响应式对象。

- 读取数据时：触发 `getter` → 收集依赖
- 修改数据时：触发 `setter` → 通知视图更新

```javascript
// 示例代码
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log("访问:", key); // 收集依赖
      return val;
    },
    set(newVal) {
      console.log("修改:", key, "为", newVal); // 通知更新
      val = newVal;
      // 触发视图更新逻辑
    },
  });
}

let data = { name: "Tom" };
defineReactive(data, "name", data.name);

data.name = "Jerry"; // 自动触发 setter → 更新视图
```

Vue 3 基于 `Proxy` 对整个对象进行一次性代理，能监听新增/删除属性和数组变化。

- 读取属性时：触发 get → 收集依赖
- 设置属性时：触发 set → 通知更新

```javascript
// 示例代码
const handler = {
  get(target, key) {
    console.log("读取属性:", key); // 收集依赖
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log("设置属性:", key, "=", value); // 通知更新
    const result = Reflect.set(target, key, value);
    // 触发视图更新逻辑
    return result;
  },
};

const state = new Proxy({ count: 0 }, handler);
state.count++; // 触发 set → 更新视图
```

:::tip 响应式更新流程

读取属性 → 收集依赖

修改属性 → 通知更新

---

Vue 2：Object.defineProperty → Dep（依赖管理）+ Watcher（视图更新）

Vue 3：Proxy → track() + trigger()

:::

:::tip 对比

| 特性          | Vue 2 (`Object.defineProperty`) | Vue 3 (`Proxy`)      |
| ------------- | ------------------------------- | -------------------- |
| 响应方式      | 遍历每个属性设置 getter/setter  | 一次性代理整个对象   |
| 新增/删除属性 | 不会响应（需用 `Vue.set`）      | 自动响应             |
| 数组支持      | 有缺陷，需手动处理部分方法      | 原生支持所有数组方法 |
| 性能          | 中等，适合中小项目              | 更好，适合中大型项目 |

:::

#### 数据视图更新机制

Vue 使用`“依赖收集 + 发布-订阅模式”`来追踪数据和视图之间的关系：

1. 读取数据时 → 收集依赖

渲染组件时访问数据属性，Vue 会记录当前组件对该数据的依赖。

2. 写入数据时 → 通知更新

数据变化触发 setter（Vue2）或 Proxy.set（Vue3），Vue 通知所有依赖组件重新执行更新逻辑。

```javascript
// Vue 2 示例（模拟更新流程）
let name = "Tom";
Object.defineProperty(window, "name", {
  get() {
    console.log("视图用到了 name，收集依赖");
    return name;
  },
  set(val) {
    console.log("name 改了，要更新视图了");
    name = val;
    // 通知视图更新
  },
});

console.log(window.name); // 触发 getter → 收集依赖
window.name = "Jerry"; // 触发 setter → 更新视图
```

```javascript
// Vue 3 示例（自动依赖追踪）
const state = reactive({ count: 0 });

watchEffect(() => {
  console.log(state.count); // 自动收集依赖
});

state.count++; // 修改数据 → 自动更新
```

:::tip 总结

Vue 能实现视图自动更新，核心机制是：

读取属性时 → 自动记录依赖

修改属性时 → 自动触发更新

Vue 2 利用 getter/setter 完成依赖收集与通知更新
Vue 3 借助 Proxy 和响应式追踪系统（如 track 和 trigger）实现更优雅的响应式

:::

### vue 和 uni-app 的不同点？

| 对比项       | Vue               | UniApp                             |
| ------------ | ----------------- | ---------------------------------- |
| 路由配置     | `vue-router`      | `pages.json`                       |
| 路由跳转     | `$router.push`    | `uni.navigateTo` 等                |
| 生命周期     | `created/mounted` | `onLoad/onShow/onReady`            |
| DOM 操作     | 支持原生 DOM      | 需使用 `uni.createSelectorQuery()` |
| 请求方式     | `axios/fetch`     | `uni.request`                      |
| 平台支持指令 | 无                | `#ifdef` 条件编译支持              |
| 模板语法     | 完整 Vue 支持     | 子集，平台兼容优先                 |

:::details 实例

**1. 页面结构配置**

`uni-app` 和 `Vue` 的写法虽然大体一致（因为 UniApp 基于 Vue 2/3 开发），但 UniApp 针对 **跨端适配**、**页面配置**、**平台特性** 做了扩展和限制，导致语法上存在一些差异。

| Vue                                       | UniApp                                             |
| ----------------------------------------- | -------------------------------------------------- |
| 路由使用 `vue-router`，手动注册页面组件。 | 所有页面必须在 `pages.json` 中声明，自动注册页面。 |

```javascript
// Vue 的路由结构
const routes = [
  { path: '/home', component: Home },
  ...
]
```

```jsonc
// uni-app 中的 pages.json
{
  "pages": [
    {
      "path": "pages/home/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    }
  ]
}
```

**2. 路由跳转方式不同**

| Vue                                         | UniApp                                              |
| ------------------------------------------- | --------------------------------------------------- |
| 使用 `this.$router.push({ path: '/home' })` | 使用 `uni.navigateTo({ url: '/pages/home/index' })` |

**3. 生命周期语法不同（页面级）**

| Vue 生命周期         | UniApp 页面生命周期                     |
| -------------------- | --------------------------------------- |
| created / mounted 等 | onLoad / onShow / onReady / onUnload 等 |

**4. 模板语法差异：平台兼容性考虑**

UniApp 的模板语法 **不能完全等同 Vue 语法**，主要是为了支持小程序平台，限制了一些 Vue 语法特性：

| 特性                       | Vue                        | UniApp                                                 |
| -------------------------- | -------------------------- | ------------------------------------------------------ |
| 动态组件                   | `<component :is="comp" />` | 支持有限，在部分平台不兼容                             |
| v-html                     | 支持（输出 HTML）          | H5 支持，小程序不支持或需借助 rich-text                |
| 自定义事件修饰符 `.native` | 支持                       | 小程序中无效                                           |
| DOM 操作                   | 原生 DOM 支持              | 无法直接访问 DOM，只能通过 `uni.createSelectorQuery()` |

**5. 事件绑定与调用方式**

虽然语法相似，但 uni-app 针对微信小程序等平台对事件行为有额外限制：

```vue
<!-- Vue -->
<button @click="doSomething">点击</button>

<!-- UniApp -->
<!-- 一样写法，但在小程序中不能使用某些 DOM 事件修饰符如 .stop、.prevent 组合使用 -->
<button @click.stop="doSomething">点击</button>
<!-- 小程序可能无效 -->
```

**6. API 语法差异**

UniApp 用了很多自有的 API，不同于 Vue 的传统写法。

| 功能     | Vue 语法                    | UniApp 语法                 |
| -------- | --------------------------- | --------------------------- |
| 请求接口 | `axios.get(...)`            | `uni.request({...})`        |
| 缓存     | `localStorage.setItem(...)` | `uni.setStorageSync(...)`   |
| 页面跳转 | `$router.push()`            | `uni.navigateTo()`          |
| 获取元素 | 原生 DOM / ref              | `uni.createSelectorQuery()` |

**7. 第三方组件写法差异**

- Vue 可以自由注册/引入组件，支持异步组件等高级特性。
- UniApp 支持 easycom 自动引入，也支持平台差异化写法（如条件编译 #ifdef APP-PLUS）

**8. 平台差异指令语法（UniApp 专属）**

UniApp 支持跨平台写法时，会加入特有语法：

```vue
<!-- 仅在微信小程序中显示 -->
<view v-if="isWx">微信专属内容</view>

<!-- 条件编译写法 -->
<!-- #ifdef MP-WEIXIN -->
<view>微信小程序内容</view>
<!-- #endif -->
```

:::

### uni-app 的 sessionStorage 和 localStorage 缓存机制？

略

### vue-dragger value 和 list 的区别？

value:

> Input array to draggable component. Typically same array as referenced by inner element v-for directive.
>
> This is the preferred way to use Vue.draggable as it is compatible with Vuex.
>
> It should not be used directly but only though the v-model directive:

拖拽组件的输入数组。通常与内部元素 v-for 指令引用的数组相同。
这是使用 Vue.draggable 的推荐方式，因为它与 Vuex 兼容。
它不应直接使用，而只能通过 v-model 指令使用：

```vue
<draggable v-model="myArray">
```

list:

> Alternative to the value prop, list is an array to be synchronized with drag-and-drop.
>
> The main difference is that list prop is updated by draggable component using splice method, whereas value is immutable.
>
> Do not use in conjunction with value prop.

value 属性的替代方案，列表是一个用于与拖放同步的数组。
主要区别`在于 list 属性是通过可拖动组件使用 splice 方法更新的，而 value 是不可变的`。
不要与 value prop 同时使用。

## 阶段四（略）

## 阶段五

### 闭包产生的原因？如何避免？

**闭包 Closure** 是指引用了另外一个函数作用域中变量的函数。

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 输出 1
counter(); // 输出 2
```

会出现的问题：

- 闭包可能导致 内存泄漏（变量被持久引用，无法释放）。
- 使用时要注意避免不必要的闭包，尤其是在循环或大型项目中。

避免方法：

| 建议                  | 说明                           |
| --------------------- | ------------------------------ |
| 使用 `let` 代替 `var` | 避免循环中变量引用异常         |
| 不滥用闭包            | 尽量只在需要保留状态时使用闭包 |
| 及时释放引用          | 用完闭包后设置为 `null`        |
| 注意事件监听器        | 使用委托或解绑闭包引用         |
| 避免引用大型数据结构  | 减少内存占用，防止泄漏         |

## 阶段六

### 微信小程序与原生区别？

:::warning 模板

- 微信小程序、H5 和原生 App 的主要区别在于运行环境和能力限制。
- 微信小程序是运行在微信客户端内的轻应用，开发体验接近前端，具备一定的系统能力（如扫码、位置、授权登录），性能和体验优于 H5，但仍低于原生 App。
- 原生 H5 是最轻量级的方式，只依赖浏览器就能运行，但功能受限，体验相对最差，更多用于活动页、落地页、分享页等场景。
- 原生 App 则拥有最强大的功能权限和用户体验，适用于复杂系统类、强交互类或对性能要求高的应用，比如直播、电商、社交平台等，但开发和维护成本较高。
- 所以三者通常是互补关系，可以根据业务类型、目标用户、成本预期灵活选型。例如：主应用用原生 App，部分推广页用 H5，引流/转化页用小程序。

---

- 比如我在项目中做过一个在线商城系统，核心功能由原生 App 承担，保证性能和体验；但同时提供小程序入口用于分享、社群传播；推广活动页面用 H5 实现，嵌入在公众号菜单中。这三者共同协作，兼顾了体验、开发效率和传播效果。

:::

`微信小程序 vs 原生 H5 vs 原生 App` ，应当从 **运行环境**、**开发方式**、**功能权限**、**性能**、**场景适用** 等方面系统对比。

|       维度        |                微信小程序                |              原生 H5（HTML/CSS/JS）               |             原生 App（Android/iOS）              |
| :---------------: | :--------------------------------------: | :-----------------------------------------------: | :----------------------------------------------: |
|   **运行环境**    |                微信容器内                |            浏览器（如 Chrome、Safari）            |             操作系统（Android/iOS）              |
|   **开发语言**    |             WXML + WXSS + JS             |                  HTML + CSS + JS                  |             Java/Kotlin、Swift/Obj-C             |
|   **部署方式**    |        微信平台审核，上线即可使用        |            网页部署在服务器，打开即用             |            应用市场上架、用户下载安装            |
|   **安装方式**    |            无需安装，扫码即用            |               无需安装，浏览器访问                |                   需下载并安装                   |
|     **性能**      |      中等，介于 H5 与原生 App 之间       |               较低，运行在浏览器中                |                 最优，系统级运行                 |
| **系统 API 能力** | 中等：微信提供的封装 API（如扫码、位置） | 很弱，仅能使用浏览器暴露的 API（如 localStorage） | 强：可调用系统所有功能（如蓝牙、传感器、推送等） |
|    **UI 控制**    |         由微信提供的组件系统控制         |            自由度较高，但受浏览器限制             |                    完全可定制                    |
|   **开发成本**    |  较低：一次开发，全平台可用（微信生态）  |                最低：通用 Web 技术                |          高：需分别开发 iOS 和 Android           |
|   **更新方式**    |          即时更新（由微信控制）          |             即时更新（后台更新 HTML）             |            需发布新版本，用户手动更新            |
|   **用户留存**    |          一般（微信中打开即走）          |                弱（网页打开即走）                 |           强（安装后可推送、沉淀用户）           |
|   **典型场景**    |         微信内商城、工具、活动页         |              轻应用、活动页、分享页               |              重交互 App、电商、游戏              |

### 微信小程序发布流程？

|         步骤         |                            操作内容                             |                        说明                        |
| :------------------: | :-------------------------------------------------------------: | :------------------------------------------------: |
|      ① 注册账号      | 登录 [微信公众平台](https://mp.weixin.qq.com/) → 注册小程序账号 | 选择“小程序”类型，完成邮箱验证、企业认证（或个人） |
|   ② 设置小程序信息   |             填写小程序名称、头像、服务类目、简介等              |               建议填写清晰，方便审核               |
|     ③ 配置开发者     |                     添加开发者、体验者账号                      |     在“开发管理”中配置，便于多人协作开发和测试     |
|   ④ 本地开发与预览   |                使用**微信开发者工具**开发 → 预览                |    支持使用 `npm` 构建、真机调试、模拟器预览等     |
|    ⑤ 提交代码审核    |            在开发者工具中上传代码 → 公众平台提交审核            |       提交前可生成体验版（体验二维码）供测试       |
| ⑥ 审核通过并发布上线 |                    审核成功后点击“发布”按钮                     |           正式上线，所有用户可访问小程序           |

:::warning 模板

- 微信小程序发布流程包括注册小程序账号、填写基本信息、使用微信开发者工具开发并调试代码，提交审核后由微信平台人工或机器审核，审核通过后可发布上线。
- 审核期间需要特别注意类目、功能是否合规，接口权限是否开放、UI 设计是否符合规范。提交前建议先生成体验版，由产品和测试全面验证。

---

- 代码审核时间：通常 1 个工作日内（部分类目如医疗/金融可能更久）
- 体验版分享：支持配置“体验者”扫码体验（扫码有效期有限）
- 类目不符会被驳回：功能必须和你选择的服务类目一致，否则审核不通过
- 灰度发布功能：目前仅支持一些企业小程序进行灰度发布（需满足条件）

:::

### 微信小程序生命周期？

微信小程序 & uni-app 生命周期对比表

| 生命周期类别 |                                          UniApp                                           |                 微信小程序（原生）                  |                       区别说明                       |
| :----------: | :---------------------------------------------------------------------------------------: | :-------------------------------------------------: | :--------------------------------------------------: |
|  **应用级**  |                         `onLaunch`、`onShow`、`onHide`、`onError`                         |                  同名（完全一致）                   |                       基本一致                       |
|  **页面级**  | `onLoad`、`onShow`、`onReady`、`onHide`、`onUnload`、`onPullDownRefresh`、`onReachBottom` |                  同名（完全一致）                   |                       基本一致                       |
|  **组件级**  |       `created`、`attached`、`ready`、`moved`、`detached`、`destroyed`（Vue 语义）        | `created`、`attached`、`ready`、`moved`、`detached` | 命名基本一致，但 UniApp 多了 `destroyed`（Vue 风格） |

[👉 阶段二 - uni-app 的生命周期？](#uni-app-的生命周期)

### 微信小程序首屏加载优化？

> 页面首屏渲染的优化，目的是让「首页渲染完成」(`Page.onReady`) 尽可能提前。但很多情况下「首页渲染完成」可能还是空白页面，因此更重要的是让用户能够更早的看到页面内容（First Paint 或 First Contentful Paint）。

1. 使用「按需注入」和「用时注入」

除了优化代码注入的耗时外，「按需注入」和「用时注入」也可以减少需要初始化的组件数量，降低实际页面渲染的耗时，使「首页渲染完成」提前。

```json
{
  "lazyCodeLoading": "requiredComponents"
}
```

2. 启用「初始渲染缓存」

自基础库版本 2.11.1 起，小程序支持启用初始渲染缓存。开启后，可以在非首次启动时，使视图层不需要等待逻辑层初始化完毕，而直接提前将页面渲染结果展示给用户。

3. 避免引用未使用的自定义组件

在页面渲染时，会初始化在当前页面配置和全局配置通过 usingComponents 引用的自定义组件，以及组件所依赖的其他自定义组件。未使用的自定义组件会影响渲染耗时。

4. 精简首屏数据

首页渲染的耗时与页面的复杂程度正相关。对于复杂页面，可以选择进行渐进式的渲染，根据页面内容优先级，优先展示页面的关键部分，对于非关键部分或者不可见的部分可以延迟更新。

此外，与视图层渲染无关的数据应尽量不要放在 data 中，避免影响页面渲染时间。

5. 提前首屏数据请求

很多小程序在渲染首页时，需要依赖服务端的接口数据（如商品列表等），此时小程序的首页可能是空白或者骨架屏。

由于网络请求需要相对较长的时间，我们建议开发者在 Page.onLoad 或更早的时机发起网络请求，而不应等待 Page.onReady 之后再进行。

6. 缓存请求数据

小程序提供了 wx.setStorage、wx.getStorage 等读写本地缓存的能力，数据存储在本地，返回的会比网络请求快。如果开发者基于某些原因无法采用数据预拉取与周期性更新，我们推荐优先从缓存中获取数据来渲染视图，等待网络请求返回后进行更新。

7. 骨架屏

骨架屏通常用于在页面完全渲染之前，通过一些灰色的区块大致勾勒出轮廓，待数据加载完成后，再替换成真实的内容。

### 微信小程序使用过哪些 API？

常见 API 及应用场景如下：

- 页面跳转 vs tabBar 跳转的区别（navigateTo / switchTab）
- 本地缓存的同步与异步操作（区别、使用场景）
- wx.login + code 获取 openid 的流程
- 上传图片流程（wx.chooseImage + wx.uploadFile）
- 网络请求封装（比如封装 wx.request 为 Promise 形式）
- 权限授权和 getUserProfile vs getUserInfo 的变化（特别是 2021 年后政策变化）
- 使用 Canvas 或图片压缩相关 API（如果你有上传优化相关项目）

## 阶段七

### call、apply、bind 的区别？

:::warning 模板

`call()`、`apply()` 和 `bind()` 都可以改变函数运行时的 `this` 指向，但区别在于是否立即执行，以及参数传递方式。

- `call()` 和 `apply()` 都会立即调用函数，区别是参数格式不同（call 逗号，apply 数组）；
- `bind()` 不会立即执行，而是返回一个新函数，可用于延迟执行、函数柯里化、事件回调绑定等场景。

在实际项目中，我通常在构造函数继承、事件回调中使用这几个方法来灵活控制函数的执行上下文。

:::

|  方法   |                含义                |    是否立即执行     |       参数传递方式       |
| :-----: | :--------------------------------: | :-----------------: | :----------------------: |
| `call`  |     调用函数并改变 `this` 指向     |        ✅ 是        | 依次传入参数（逗号分隔） |
| `apply` |     调用函数并改变 `this` 指向     |        ✅ 是        |    参数以数组形式传入    |
| `bind`  | 返回一个新函数，改变了 `this` 指向 | ❌ 否（需手动调用） |       依次传入参数       |

#### 基本用法对比

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person = { name: "Zan" };

// call
greet.call(person, "Hello", "!"); // Hello, I'm Zan!

// apply
greet.apply(person, ["Hi", "..."]); // Hi, I'm Zan...

// bind
const boundGreet = greet.bind(person, "Hey");
boundGreet("?"); // Hey, I'm Zan?
```

#### 应用场景举例

✅ `call` / `apply`

- 多用于立即调用函数并绑定上下文
- 比如：继承构造函数中的属性

```javascript
function Animal(name) {
  this.name = name;
}

function Dog(name, color) {
  Animal.call(this, name); // 继承 Animal 的属性
  this.color = color;
}
```

- 利用 `apply` 进行参数解构调用（如函数柯里化、Math 方法）

```javascript
Math.max.apply(null, [1, 5, 3]); // 5
```

✅ bind

- 多用于延迟调用，例如：事件绑定、定时器、函数柯里化

```javascript
const person = { name: "zan" };
const sayName = function () {
  console.log(this.name);
}.bind(person);

setTimeout(sayName, 1000); // 输出 zan
```

### 怎么看事件循环机制？怎么看原型和原型链？

- 事件循环： JS 通过事件循环区分同步任务、微任务、宏任务，以实现异步非阻塞执行。
- 原型链： JS 中对象通过 `__proto__` 指向其原型，逐层查找形成原型链，实现继承与属性共享。

:::warning 模板
JavaScript 是单线程语言，它通过“事件循环（Event Loop）”机制来实现异步非阻塞操作。执行顺序是：先执行主线程同步任务，然后不断从任务队列中取出异步任务。

异步任务分为 **宏任务（MacroTask）** 和 **微任务（MicroTask）**。每一个宏任务执行完成后，会先清空所有微任务队列，再执行下一个宏任务。

微任务常见于 **Promise.then()**、**MutationObserver**，宏任务则包括 **setTimeout**、**setInterval**、**DOM 事件回调**、**MessageChannel** 等。

> 进阶：
>
> JS 的事件循环机制本质上是通过执行栈 + 消息队列来调度任务。它使得浏览器在单线程下仍能执行 I/O、网络、定时器等异步任务而不会阻塞主线程。
>
> 在 Vue 和 React 中我们也常用微任务机制来控制异步更新，例如 Vue 的 `nextTick()` 本质就是基于 Promise 微任务的。

```javascript
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
```

---

```shell
# 输出
start
end
promise
timeout
```

解释：Promise.then() 是微任务，在当前宏任务结束后立即执行，而 setTimeout 是下一个宏任务。

:::

:::warning 模板

在 JavaScript 中，每个对象都有一个内部属性 `[[Prototype]]`（在代码中可通过 `__proto__` 访问），它指向创建它的构造函数的 `prototype` 对象。

当我们访问一个对象的属性时，如果找不到，就会沿着 `__proto__` 向上查找，这条链路就叫做原型链（Prototype Chain）。

通过原型链，JavaScript 实现了对象的继承机制。

> 进阶：
>
> 原型和原型链是 JS 中实现继承和属性查找的基础机制。通过构造函数的 `prototype` 属性和实例对象的 `__proto__` 链接，构成了一条查找路径。这条链路决定了 JS 的属性继承逻辑，是 `instanceof`、继承、多态的底层基础。

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};

const p = new Person("Zan");

p.sayHi(); // Hi, I am Zan

// 属性查找顺序：p → p.__proto__ (Person.prototype) → Object.prototype → null
```

|    关键词     |                    说明                    |
| :-----------: | :----------------------------------------: |
|  `__proto__`  |             实例对象的原型指针             |
|  `prototype`  |        构造函数创建实例时的原型模板        |
| `constructor` |       原型对象上的属性，指回构造函数       |
| `instanceof`  | 判断原型链中是否包含某构造函数的 prototype |

```javascript
console.log(p.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true
console.log(p instanceof Person); // true
```

:::

### vue2 和 vue3 区别？vue 和 react 区别？

#### vue2 & vue3

:::warning 模板

Vue3 是对 Vue2 的底层重构，最大的变化是引入了 Composition API 和基于 Proxy 的响应式系统。它更适合大型项目的模块化、逻辑复用，同时性能和 TypeScript 支持也有显著提升。

在实际开发中，如果项目较大或需要高性能、TS 支持，我会优先选择 Vue3。

:::

| 维度                    | Vue2                      | Vue3（重大升级）                      |
| ----------------------- | ------------------------- | ------------------------------------- |
| **响应式原理**          | `Object.defineProperty`   | ✅ 使用 `Proxy`，支持更复杂的结构     |
| **语法风格**            | Options API               | ✅ 引入 Composition API（组合式 API） |
| **性能**                | 较慢（尤其是大型组件）    | ✅ 更快、更轻（更好的编译优化）       |
| **TypeScript 支持**     | 较差                      | ✅ 从底层开始支持 TS                  |
| **Fragment**            | ❌ 不支持（必须有根元素） | ✅ 支持多个根节点                     |
| **Teleport / Suspense** | ❌ 不支持                 | ✅ 新增组件：传送门、异步组件更灵活   |
| **生命周期名称**        | 比如 `created`、`mounted` | ✅ 新增 `onMounted()` 等组合 API      |

#### vue & react

:::warning 模板

Vue 更适合快速上手和中小型项目，语法直观、文档完善；而 React 更强调函数式思想、状态驱动，适合构建灵活、规模化的应用。

我个人更倾向 Vue 做项目初期快速开发，也熟悉 React 的 Hooks 和函数式组件，在跨团队协作中也能很好适配。

:::

| 维度             | Vue                                 | React                                 |
| ---------------- | ----------------------------------- | ------------------------------------- |
| **设计理念**     | 渐进式框架（更关注视图）            | UI = f(state)，函数式组件为主         |
| **语法**         | 模板语法（`.vue` 文件）             | JSX（JavaScript + XML）               |
| **数据响应**     | 响应式系统（Proxy）                 | 使用 `useState`、`useEffect` 手动管理 |
| **状态管理**     | Vuex / Pinia                        | Redux / Zustand / Recoil              |
| **组件通信**     | props / emit / provide / inject     | props / context / hooks               |
| **学习曲线**     | 相对更易上手                        | 相对自由但复杂                        |
| **性能优化手段** | `watch`、`computed`、响应式依赖追踪 | 手动依赖管理、memo、useCallback       |
| **生态**         | 适合快速开发中小项目                | 更适合大型项目和企业级需求            |

### 如何实现大文件上传？

:::warning 模板

大文件上传通常采用切片`（分片）上传` + `并发控制` + `秒传校验`等方式提升性能与稳定性，避免一次性上传带来的浏览器崩溃、网络中断等问题。

具体流程包括：将文件按大小切片、通过唯一标识记录进度、支持断点续传，上传完成后在服务端进行合并。常结合 `FileReader`、`Blob.slice`、`FormData` 和 `axios` 实现，后端负责合并与校验。

:::

:::info 完整流程

**前端**

**1.文件切片（chunk）**

将大文件按固定大小切割为多个小块（chunk），使用 `Blob.prototype.slice`：

```js
function createChunks(file, chunkSize = 10 * 1024 * 1024) {
  // 10MB
  const chunks = [];
  let cur = 0;

  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + chunkSize));
    cur += chunkSize;
  }

  return chunks;
}
```

**2. 生成文件唯一标识（hash）**

可使用 MD5 或文件名 + 大小等方式，识别是否为同一文件。

```js
const fileHash = `${file.name}-${file.size}`;
```

（更严谨方式是用 Web Worker + spark-md5 对文件内容做哈希）

**3. 上传每个 chunk**

```js
async function uploadChunk(chunk, index, hash) {
  const formData = new FormData();
  formData.append("file", chunk);
  formData.append("filename", `${hash}-${index}`);

  return axios.post("/upload-chunk", formData);
}
```

可以使用 `Promise.all` 并发上传多个 chunk，但建议限制并发量：

```js
const MAX_CONCURRENT = 5;
// 用 p-limit / concurrency 控制上传并发
```

**4. 通知后端合并文件**

所有 chunk 上传成功后，发送合并请求：

```js
await axios.post("/merge", {
  hash: fileHash,
  chunkTotal: chunks.length,
});
```

**5. 断点续传与秒传（可选优化）**

前端上传前调用接口获取该 hash 的上传进度，如果某些 chunk 已上传，则跳过这些分片。

**后端**

- 接收每个分片保存到临时目录（如 `upload/tmp/文件 hash/分片名`）
- 合并分片（按序号拼接）
- 删除临时文件
- 校验文件完整性（如 MD5）

:::

:::info 可选进阶优化

| 优化方向   | 方法                                    |
| ---------- | --------------------------------------- |
| 并发控制   | 限制上传并发数，提高稳定性              |
| 秒传       | 前端生成文件 hash，服务器判断是否已存在 |
| 断点续传   | 前端记录上传进度；服务端保存已传分片    |
| 上传进度   | 利用 `axios` 的 `onUploadProgress`      |
| 大文件预览 | 上传前生成缩略图（图像）或视频首帧      |

:::

### 前端性能优化的手段？

:::warning 模板

在实际开发中，我会从加载速度、渲染效率、代码体积、请求优化等多个方面进行性能优化：

1. 静态资源压缩：使用 Webpack/Gzip 压缩 JS 和 CSS 文件，减小包体积；
2. 按需加载和代码分割：例如路由懒加载（Vue 的 defineAsyncComponent）、Ant Design 按需引入；
3. 图片优化：使用 webp 格式、压缩图像体积、懒加载大图；
4. 缓存策略：合理配置 HTTP 缓存、使用 localStorage / IndexedDB 缓存接口数据；
5. DOM 渲染优化：使用虚拟滚动优化长列表、避免不必要的 DOM 更新；
6. 请求层优化：接口合并、CDN 加速、减少 HTTP 请求次数；
7. 构建优化：Tree-shaking 去除无用代码、使用 ESBuild 或 Vite 提升构建速度。

:::

[👉 大前端 - 前端性能优化之飞书文档](/blog/performance-doc-feishu.html#首屏加载优化)

| 分类                | 优化手段（关键点）                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| **1. 加载优化**     | - 资源压缩（JS/CSS/图片）<br>- 资源懒加载 / 预加载<br>- HTTP 缓存、CDN 加速<br>- Gzip / Brotli 压缩 |
| **2. 渲染优化**     | - 减少重排重绘<br>- 合理使用 `will-change` / `transform`<br>- 虚拟列表、节流处理滚动事件            |
| **3. 请求优化**     | - 合理拆分接口（避免 N+1）<br>- 接口合并 / 去重<br>- 使用 HTTP2/3 并发能力                          |
| **4. 代码优化**     | - Tree shaking、代码分割<br>- 延迟加载（如路由懒加载）<br>- 减少依赖包体积、使用轻量库              |
| **5. 数据处理优化** | - 防抖节流<br>- 缓存（localStorage / IndexedDB）<br>- 虚拟滚动、懒渲染                              |
| **6. 构建优化**     | - 按需引入组件<br>- 多线程构建（webpack thread-loader）<br>- 图片转 base64、小图雪碧图              |

### 如何看待 cookie、localStorage、pinia？

:::warning 模板

cookie、localStorage 和 Pinia 分别代表了三个不同层面的存储和状态管理机制：

- `cookie` 是用于前后端通信的传统方式，适合服务端身份校验；
- `localStorage` 是前端本地存储解决方案，适合存储用户个性化配置、缓存数据；
- `Pinia` 则是 Vue3 官方推荐的状态管理库，适合组件之间共享响应式状态。

实际开发中，它们往往是配合使用的：例如用户登录后，token 保存在 cookie 中用于接口鉴权，同时用户信息用 Pinia 管理用于响应式渲染，而一些本地缓存（如用户偏好、语言选择）可以存进 localStorage，页面刷新后可自动恢复。

```javascript
// 登录后：token 存 cookie（用于接口携带），userInfo 存 Pinia，userTheme 存 localStorage

// cookie 存 JWT
document.cookie = "token=xxx; path=/; secure;";

// localStorage 存缓存
localStorage.setItem("theme", "dark");

// pinia 存状态
userStore.setUserInfo({ name: "tester" });
```

:::

|      项目      |           类型           |           用途定位           |
| :------------: | :----------------------: | :--------------------------: |
|    `cookie`    |      浏览器原生存储      |  与服务器交互（如登录状态）  |
| `localStorage` |      本地持久化存储      |   存储用户偏好、缓存数据等   |
|    `Pinia`     | 前端状态管理工具（Vue3） | 管理组件之间共享的响应式状态 |

1. cookie

✅ 优点：

- 可以自动随请求发送到服务器（携带身份标识）
- 支持设置过期时间、作用域、HttpOnly、安全策略等

⚠️ 缺点：

- 容量限制（约 4KB）
- 每次请求自动携带，影响性能
- 安全性差（易被 XSS 访问，除非设置 HttpOnly）

> 💡 适合：登录状态保存、跨页面登录验证、与后端交互的小型数据

2. localStorage

✅ 优点：

- 存储容量大（约 5MB）
- 持久化强（除非主动清除，不会失效）
- 简单易用，键值对结构

⚠️ 缺点：

- 只能存储字符串
- 无法响应式更新（不适合多组件共享状态）
- 不会自动同步到服务器（仅前端可访问）

> 💡 适合：用户主题偏好、缓存搜索记录、减少接口请求

3. Pinia（或 Vuex）

✅ 优点：

- 响应式、组件共享状态简单高效
- 插件机制、模块化、持久化支持（搭配插件）
- 与 Vue3 深度集成，支持 TS 类型推导

⚠️ 缺点：

- 学习曲线稍高（对初学者）
- 页面刷新后状态会重置（需手动结合 localStorage）

> 💡 适合：组件间状态共享、复杂页面逻辑（如购物车、用户信息管理）

### 如何防御 XSS、CSRF 攻击？

:::warning 模板

我了解 Web 常见攻击如 XSS 和 CSRF，日常开发中我主要通过以下方式防护：

- 对用户输入进行转义和校验，防止注入 XSS；
- 设置 CSP 策略 禁止内联脚本执行；
- 对于 Cookie 设置 HttpOnly + SameSite 属性；
- 所有敏感操作接口使用 CSRF Token 机制 进行验证；
- 富文本类输入我会使用 DOMPurify 等库进行过滤处理。

在项目中，我也会配合后端设置响应头和接口权限，确保前后端协同防护。

:::

#### XSS

跨站脚本攻击 Cross-Site Scripting，XSS 是攻击者在网页中注入恶意脚本代码，诱导用户执行，从而窃取用户信息（如 Cookie）、劫持会话、控制页面行为等。

举例：

```js
<input value="<script>alert('xss')</script>" />
```

防御手段：

| 类型                | 防御方式                                                            |
| ------------------- | ------------------------------------------------------------------- |
| **1. 输入过滤**     | 永远不要相信用户输入，使用白名单限制可输入的字符                    |
| **2. 输出编码**     | 对用户输入进行转义（如将 `<` 转成 `&lt;`），防止注入脚本            |
| **3. CSP 策略**     | 设置内容安全策略（Content Security Policy），禁止页面执行内联 JS 等 |
| **4. httpOnly**     | 将 Cookie 设置为 `HttpOnly`，防止被 JS 读取，保护 token             |
| **5. 第三方库防护** | 使用 DOMPurify 等库对富文本、HTML 内容做清洗                        |

:::tip 如何使用 CSP 防 XSS？

设置 CSP 响应头：

```http
Content-Security-Policy: default-src 'self'; script-src 'self';
```

效果：

- 禁止加载第三方脚本
- 禁止 eval、inline script 等

:::

#### CSRF

跨站请求伪造 Cross-Site Request Forgery，利用用户已登录状态，通过伪造请求欺骗服务器执行未授权的操作。

举例：

用户登录银行网站后，访问恶意页面，页面偷偷发起：

```html
<img src="https://bank.com/transfer?to=bad&amount=1000" />
```

浏览器自动带上了 Cookie，从而完成转账。

防御手段：

| 防御方式               | 说明                                                               |
| ---------------------- | ------------------------------------------------------------------ |
| **1. Token 验证**      | 每次请求带上 CSRF token，后端校验是否有效                          |
| **2. SameSite Cookie** | 设置 Cookie 属性：`SameSite=Strict/Lax`，防止第三方站点携带 Cookie |
| **3. Referer 校验**    | 后端检查请求头中 `Referer` 是否来自本站                            |
| **4. 使用双重 Cookie** | 设置 csrfToken 存在 Cookie + 请求头一并提交，前后端都校验          |
| **5. POST 替代 GET**   | 关键操作不使用 GET，避免通过 `<img>` 伪造                          |

:::tip httpOnly 和 SameSite 作用总结

| 属性       | 作用                                    |
| ---------- | --------------------------------------- |
| `HttpOnly` | JS 无法访问此 Cookie，防止 XSS 窃取     |
| `SameSite` | 控制 Cookie 跨站请求是否发送，防止 CSRF |

:::

### GZip 没有生效，如何排查？

> GZip 压缩是前端性能优化的重要手段

1. 客户端请求头检查

```html
Accept-Encoding: gzip, deflate, br
```

2. 服务器端配置排查

`服务器使用 nginx 演示`

2.1 检查 nginx 配置

```nginx
gzip on;                          # 是否开启GZip
gzip_types text/html text/css ...; # 是否包含text/html类型
gzip_vary on;                     # 是否允许代理服务器根据请求头选择压缩
```

2.2 确保服务器支持 GZip 静态文件

```nginx
gzip_static on; # 启用静态压缩文件
```

确认服务器能访问到.html.gz 文件（如路径是否正确）。

3. Webpack 构建产物检查

查看 Webpack 输出目录（如 dist），确认是否存在 index.html.gz 文件。

4. 缓存检查

4.1 浏览器缓存检查
4.2 服务器缓存检查 CDN

## 阶段八

### URL 到页面加载的过程

[👉 从输入-url-到页面加载的全过程](/essays/browser.html#从输入-url-到页面加载的全过程)

## 阶段十

### 盒模型？

[👉 标准盒模型与怪异盒模型的区别](/blog/css-box-sizing)

### positions 属性值？

[👉 CSS Position 定位布局](/blog/css-position)

### this 指向？

[👉 八股文 - JavaScript - this 的五种情况](/essays/javascript.html#this-的五种情况)

### vue 的双向数据绑定？

[👉 vue 的数据绑定连接方式](/blog/review-2025.html#vue-的数据绑定连接方式)

### ref 和 reactive 的区别？如何实现的？

### watch 和 watchEffect 的区别？

### 低代码可视化实现思路？

### 移动端适配方案？
