<script setup lang="ts">
import Quotation from "./Quotation.vue";
import type { quotationItem } from "../config/quotation.mts";

defineProps<{
  quotationData: quotationItem[];
}>();
</script>

<template>
  <div class="quotation">
    <div class="container">
      <Quotation v-for="(quotation, key) in quotationData" :key="key" :quotation="quotation" :index="key" />
    </div>
  </div>
</template>

<style scoped>
.quotation {
}

.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.item {
}
</style>
