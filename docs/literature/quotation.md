# 语录

## 概述

:::tip
这里收集了一些有趣的句子 🌞，欢迎评论区补充。

不定期更新。
:::

<script setup>
  import { quotationData } from './data/quotation.mts';
  import Quotations from './components/Quotations.vue';
  import QuotationTyped from './components/QuotationTyped.vue'
</script>

<QuotationTyped :typedData=[...quotationData] />

## 合集

<Quotations :quotationData=[...quotationData]  sortBy='end' />
