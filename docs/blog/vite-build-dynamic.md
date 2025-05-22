# 如何在 vite 动态设置打包目录

## 背景

> 有这样一个需求，需要在执行 `npm run build [参数]` 的时候，将这个参数作为输出的目录名，而在 vite.config.js 中，只能静态设置，为此封装一个打包处理方法。

## 前置

首先，我们先来看一下 vite.config.js 的配置文件，需要了解的两个属性：

- [base](https://cn.vitejs.dev/config/shared-options.html##base)：开发或生产环境服务的公共基础路径。
- [build.outDir](https://cn.vitejs.dev/config/build-options.html##build-outdir) ：指定输出路径（相对于项目根目录).

```javascript
// ./vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/", // 【默认值】
  build: {
    outDir: "dist", // 【默认值】
  },
});
```

## 实现

#### 1. 封装

在根目录下，创建一个 build.mjs 文件。

```javascript
// build.mjs
import { build } from "vite";

async function runBuild() {
  const args = process.argv; // 获取输入时参数
  const outDirName = args[2];
  const base = outDirName || "/";
  const outDir = outDirName || "dist";

  await build({
    configFile: "./vite.config.js", // 指定配置文件路径
    base, // 设置 base
    build: {
      outDir, // 设置输出目录
    },
  });
}

runBuild().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
```

#### 2. 修改

修改 package.json 中的 script 值。

将原先的 `vite build` 修改为 `node ./build.mjs`

```json
{
  "name": "vite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "node ./build.mjs",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.12"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.4",
    "vite": "^5.4.10"
  }
}
```

#### 3.重新执行

完成 1 2 步骤后，重新执行 `npm run build [参数]`，就可以实现动态设置路径的功能。当然如果不传参数，则按默认配置来打包。
