# 环境变量使用指南

在 `vue cli` 和 `vue vite` 中，存在一个叫做环境变量的概念。它可以根据 `.env` 配置文件中的变量，自主选择匹配当前环境的配置。`使用场景：开发环境使用 /dev-api ，而生产环境使用 /prod-api`。

本文将分别介绍在 vue cli 和 vue vite 中如何使用环境变量。

## vue cli

`vue2 + webpack`

分别定义开发环境和生产环境的变量。

:::warning
请注意，只有 `NODE ENV`，`BASE_URL` 和以 `VUE_APP` 开头的变量将通过 `webpack.DefinePlugin` 静态地嵌入到客户端侧的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。
:::

```
# vue-cli/.env.development

# 页面标题
VUE_APP_TITLE = 测试环境标题

# 开发环境配置
VUE_APP_ENV = 'development'

# 开发环境
VUE_APP_BASE_API = '/dev-api'
```

```
# vue-cli/.env.production

# 页面标题
VUE_APP_TITLE = 生产环境标题

# 生产环境配置
VUE_APP_ENV = 'production'

# 生产环境
VUE_APP_BASE_API = '/prod-api'
```

使用环境变量，本次将在 main.js 中测试。

```javascript
// vue-cli/src/main.js
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const Title = process.env.VUE_APP_TITLE; // ![code focus]
const Env = process.env.VUE_APP_ENV; // ![code focus]
const BaseApi = process.env.VUE_APP_BASE_API; // ![code focus]
console.log(Title, Env, BaseApi); // -> 测试环境标题 development /dev-api // ![code focus]

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

## vite

`vue3 + vite`

分别定义开发环境和生产环境的变量，和 vue-cli 时的定义类似。

:::warning
为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE\_` 为前缀的变量才会暴露给经过 vite 处理的代码。
:::

```
# vite/.env.development

# 页面标题
VUE_APP_TITLE = 测试环境标题

# 开发环境配置
VUE_APP_ENV = 'development'

# 开发环境
VUE_APP_BASE_API = '/dev-api'
```

```
# vite/.env.production

# 页面标题
VUE_APP_TITLE = 生产环境标题

# 生产环境配置
VUE_APP_ENV = 'production'

# 生产环境
VUE_APP_BASE_API = '/prod-api'
```

使用环境变量，本次将在 main.js 中测试。

```javascript
// vite/src/main.js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const Title = import.meta.env.VITE_APP_TITLE;
const Env = import.meta.env.VITE_APP_ENV;
const BaseApi = import.meta.env.VITE_APP_BASE_API;
console.log(Title, Env, BaseApi);

createApp(App).mount("#app");
```

## 参考资料

[vue cli - 环境变量 👉](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

[vite - env-and-mode 👉](https://cn.vitejs.dev/guide/env-and-mode.html)
