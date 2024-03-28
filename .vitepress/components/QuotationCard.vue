<script setup lang="ts">
import type { quotationItem } from "../data/quotation/types";

defineProps<{
  quotationData: quotationItem[];
}>();
</script>

<template>
  <div class="grid auto-cols-auto sm:grid-cols-1 grid-cols-1 gap-[14px] padding-[14px]">
    <section v-for="(quotationItem, key) in quotationData" :key="key">
      <div class="text-justify"> {{ quotationItem.content }} </div>
      <div class="flex justify-end">
        <div>
          {{ quotationItem.source }} <span v-show="quotationItem.profession"> - {{ quotationItem.profession }} </span>
        </div>
        <div>{{ quotationItem.date }}</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>
