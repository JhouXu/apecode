<template>
  <div class="article-info">
    <div class="info-item">
      <span class="label">🧑🏻‍💻 作者：</span>
      <span class="value">{{ author }}</span>
    </div>
    <div class="info-item">
      <span class="label">🗓️ 发布时间：</span>
      <span class="value">{{ publishDate }}</span>
    </div>
    <div class="info-item">
      <span class="label">🕘 最后更新：</span>
      <span class="value">{{ lastUpdatedFromNow }}</span>
    </div>
    <div class="info-item">
      <span class="label">🔢 字数统计：</span>
      <span class="value">{{ wordCount }}</span>
    </div>
    <div class="info-item">
      <span class="label">📖 预计阅读：</span>
      <span class="value">{{ readingTime }}</span>
      <span class="label">分钟</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useData } from "vitepress";
import { getFormatDate, getFromNow } from "../utils";

const props = defineProps<{
  publicTime: string;
  readingTime: string;
  wordCount: string;
}>();

const { frontmatter, page } = useData();

const author = computed(() => {
  const { frontmatter } = page.value;
  return frontmatter.author || "俊小赞";
});

const publishDate = computed(() => {
  return frontmatter.value?.date || props.publicTime || "未设置";
});

const lastUpdated = computed(() => {
  return getFormatDate(page.value.lastUpdated || Date.now());
});

const lastUpdatedFromNow = computed(() => {
  return getFromNow(lastUpdated.value);
});
</script>

<style scoped>
.article-info {
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.label {
  color: var(--vp-c-text-2);
}

.value {
  color: var(--vp-c-text-1);
  font-weight: 500;
}
</style>
