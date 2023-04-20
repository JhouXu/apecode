---
layout: doc
---

# Vitepress 实战应用

## 主题颜色

vitepress 是基于原生 css+css 变量开发的，为此想要修改主题颜色，可以通过修改全局变量的方式。默认主题颜色是：`#10b981 （vue 绿）`

![vitepress官网首页效果图](/images/blog/vue-vitepress_2023-03-29_11-42-09.jpg)

### 定制

- 首先找到需要定制的变量名，并在 custom.scss :root 中设置需要的颜色值；
- 然后在 index.js 中覆盖。

具体操作如下：

```scss
// 根目录/.vitepress/theme/styles/custom.scss
:root {
  /* 标题 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #62bbee 10%, #579deb 100%);

  /* 图标背景 */
  --vp-home-hero-image-background-image: linear-gradient(135deg, #62bbee 10%, #579deb 100%);
  --vp-home-hero-image-filter: blur(150px);

  /* brand按钮 */
  --vp-button-brand-border: #62bbee;
  --vp-button-brand-text: #fff;
  --vp-button-brand-bg: #62bbee;

  --vp-button-brand-hover-border: #62bbee;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-hover-bg: #579deb;

  --vp-button-brand-active-border: #62bbee;

  /* 主题基色 */
  --vp-c-brand: #579deb;
  --vp-c-brand-light: #579deb;
  --vp-c-brand-dark: #579deb;
}
```

```js{2}
// 根目录/.vitepress/theme/index.js
import theme from "vitepress/theme";
import "./styles/custom.scss";

export default {
  ...theme,
};
```

样式定制后效果：
![样式定制后效果](/images/blog/vue-vitepress_2023-03-29_11-55-04.jpg)

## tailwindcss UI

## Last updated

直译：最后一次更新。

如需开启，配置如下：

```js
// 根目录/.vitepress/config.js
module.exports = {
  lastUpdated: true, // 开启显示
  themeConfig: {
    lastUpdatedText: "最后更新", // 替换文本，默认显示 'Last updated'
  },
};
```

## 评论功能

由于项目是部署在 github 上的，因此使用 [giscus](https://giscus.app/zh-CN) 来实现评论功能。

### 连接仓库

选择 giscus 连接到的仓库。请确保：

1. 此仓库是[公开的](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-public)，否则访客将无法查看 discussion。
2. [giscus](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-public) app 已安装否则访客将无法评论和回应。
3. Discussions 功能已[在你的仓库中启用](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)。

验证方式： `官方文档 - 配置 - 仓库 - 仓库`

![验证通过效果图](/images/blog/vue-vitepress_2023-03-28_18-40-16.jpg)

### 关键字段

Discussion 分类下拉选择 '📣Announcements'

完成上述步骤后，在 `配置 - 启用 giscus` 处看到一些配置，如下：

```html{3-7}
<script
  src="https://giscus.app/client.js"
  data-repo="xxxxx/xxxxx"
  data-repo-id="x_xxxxxx"
  data-category="Announcements"
  data-category-id="xxx_xxxxxxxxx-x"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="zh-CN"
  crossorigin="anonymous"
  async
></script>
```

`data-repo` `data-repo-id` `data-category` `data-category-id` `data-mapping` 为必要值，进行备份存储，后面需要使用。
其它则为可选值，可按项目要求进行增删。

### 启用评论

首先安装相关依赖包。

```shell
# ^1.1.1
npm install -D vitepress-plugin-comment-with-giscus

# ^2.2.8
npm install -D @giscus/vue
```

最后，进行配置，并重新运行项目即可在 `layout: doc` 布局看到评论组件。

```js
// 根目录/.vitepress/theme/index.js
import { useData, useRoute } from "vitepress";
import giscusTalk from "vitepress-plugin-comment-with-giscus";

export default {
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = useData();
    const route = useRoute();
    // 评论组件
    giscusTalk(
      {
        // 填写上述备份好的字段
        repo: "xxxxx/xxxxx",
        repoId: "x_xxxxxx",
        category: "Announcements",
        categoryId: "xxx_xxxxxxxxx-x",
        mapping: "pathname",
      },
      {
        frontmatter,
        route,
      }
    );
  },
};
```

## 搜索功能

algolia

## 部署

采用 github Actions + github Pages 的方式，当 github 远程仓库 push 时，自动 action 打包最新文件，并且部署在 gh-pages 分支上，然后让 pages 设置在 gh-pages 这个分支上就可以实现自动部署。

### workflows

首先创建一个文件，`.github/workflows/deploy.yml`

```yml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches:
      - master # 需要打包的分支名

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm i pnpm -g
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### pages 配置

