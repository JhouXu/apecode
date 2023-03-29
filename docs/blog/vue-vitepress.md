---
layout: doc
---

# Vitepress 实战应用

## tailwindcss UI

## 最后编辑时间

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
