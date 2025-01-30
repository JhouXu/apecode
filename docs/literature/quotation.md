# 语录

## 概述

:::tip
这里收集了一些有趣的句子 🌞，欢迎评论区补充。

不定期更新。
:::

<script setup>
  import { quotationData } from '../../.vitepress/data/quotation.mts';
  import Items from '../../.vitepress/components/Literature/Items.vue'; 
  import Typed from '../../.vitepress/components/Literature/Typed.vue'
</script>

<Typed :data=[...quotationData] />

## 合集

<Items :data=[...quotationData] :reverse="true" />
