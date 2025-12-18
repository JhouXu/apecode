<template>
  <div class="page-info-container">
    <section class="info">
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
    </section>

    <hr v-show="tags.length > 0" />

    <section class="tags" v-show="tags.length > 0">
      <template v-for="tag in tags" :key="tag">
        <Badge type="tip" :text="tag"></Badge>
      </template>
    </section>
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
  return frontmatter.author || "暂无";
});

const publishDate = computed(() => {
  return (frontmatter.value?.date && getFormatDate(frontmatter.value.date)) || props.publicTime || "暂无";
});

const lastUpdatedFromNow = computed(() => {
  return getFromNow(page.value.lastUpdated || Date.now());
});

const tags = computed(() => {
  return frontmatter.value?.tags || [];
});
</script>

<style lang="scss" scoped>
.page-info-container {
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;

  section.info {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .info-item {
      display: flex;
      align-items: center;
      font-size: 0.9rem;

      .label {
        color: var(--vp-c-text-2);
      }

      .value {
        color: var(--vp-c-text-1);
        font-weight: 500;
      }
    }
  }

  section.tags {
  }
}
</style>
