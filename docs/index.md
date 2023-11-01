---
layout: home

hero:
  name: 猿代码
  text: Stay hungry, Stay foolish！
  tagline: 程序猿的秘密花园
  image:
    src: ./images/undraw_designer.svg
    alt: logo图标
  actions:
    - theme: brand
      text: 开始
      link: /pages/blog/blog
    - theme: alt
      text: 参与建设
      link: https://github.com/JhouXu/apecode
features:
  - icon: 🗃️
    title: 随笔记
    details: 简单而简约，始终如一
    link: /pages/blog/blog
    linkText: 了解更多
  - icon: 🛠️
    title: 导航工具
    details: 常用网站，即点即用
    link: /pages/navigation
    linkText: 了解更多
  - icon: 🌞
    title: 开发中
    details: 敬请期待...
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
import { members } from './.vitepress/data/members.ts'

const coreMembers = [...members]
const partners = [...members]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>核心团队</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
