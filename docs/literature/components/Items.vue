<script setup lang="ts">
import { computed } from "vue";
import type { Item } from "../config/config.mjs";

const props = defineProps<{
  data: Item[];
  reverse?: boolean;
}>();

const getDataLength = computed(() => {
  return props.data.length;
});

const getData = computed(() => {
  if (props.reverse) {
    return props.data.reverse();
  } else {
    return props.data;
  }
});

const getIndex = function (nowIndex: number) {
  if (props.reverse) {
    return getDataLength.value - nowIndex;
  } else {
    return nowIndex + 1;
  }
};
</script>

<template>
  <div class="list">
    <div class="item" v-for="(item, index) in getData" :key="index">
      <div class="container">
        <span class="badge">{{ getIndex(index) }}、</span>
        <span class="content">{{ item.content }}</span>
      </div>
      <div class="info">
        <div class="source">
          {{ item.source }}
          <span v-if="item.profession"> - </span>
          {{ item.profession }}
        </div>
        <div class="date">收录于：{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --tips-color: #096;
}

:root.dark {
  --tips-color: #fff;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.item {
  display: block;
  padding: 20px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;
}

.item:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 5px 2px var(--vp-c-brand-3);
}

.container {
  text-align: justify;
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 1px;
}

span.badge {
  font-family: "AlimamaShuHeiTi";
}

span.content {
  background: linear-gradient(to right bottom, var(--quotation-color2), var(--quotation-color1));
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 0px 2px;
  transition: background-size 0.5s;
}

.item:hover span.content {
  background-position: left bottom;
  background-size: 100% 2px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.source {
  font-size: 14px;
  color: var(--tips-color);
}

span.content:hover {
  background-size: 100% 2px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
}
</style>
