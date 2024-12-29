# 语录

## 概述

:::tip
这里收集了一些有趣的句子 🌞，欢迎评论区补充。

不定期更新。
:::

<script setup>
  import { quotationData } from './data/quotation.mts';
  import Items from './components/Items.vue'; 
  import Typed from './components/Typed.vue'
</script>

<Typed :data=[...quotationData] />

## 合集

<Items :data=[...quotationData] />
