---
layout: home

hero:
  name: 猿代码
  text: Passion never fails
  tagline: 程序猿的秘密花园
  image:
    src: ./images/undraw_designer.svg
    alt: logo图标
  actions:
    - theme: brand
      text: 开始
      link: /blog/blog.md
    - theme: alt
      text: 参与建设
      link: https://github.com/JhouXu/apecode
features:
  - icon: 🔗
    title: 导航工具
    details: 有趣实用的网站，提高效率。
    link: /navigation.md
    linkText: 了解更多
  - icon: 🗃️
    title: 随笔记
    details: 简单而简约，始终如一。
    link: /blog/blog.md
    linkText: 了解更多
  - icon: 📝
    title: 八股文
    details: 归纳、概括、整理、最新。
    link: /blog/essays/essays.md
    linkText: 了解更多
  - icon: 🌱
    title: 成长
    details: 一些有趣的句子。
    link: /growth/quotation.md
    linkText: 了解更多
  - icon: 🧠
    title: 实验室
    details: 更多创意+脑洞项目。
    linkText: 了解更多
  - icon: 🚩
    title: 拥抱开源
    details: 文档开源，版权 ApeCode 所有，禁商业行为。
    link: https://github.com/JhouXu/apecode
    linkText: 欢迎 ⭐
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
import { members } from '../.vitepress/config/members.mts'

const coreMembers = [...members]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>核心团队</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
