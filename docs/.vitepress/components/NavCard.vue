<script setup lang="ts">
import type { navItem } from "../data/favorites/types";

defineProps<{
  navData: navItem[];
}>();
</script>

<template>
  <div class="grid auto-rows-auto sm:grid-cols-2 grid-cols-1 gap-[12px]">
    <section v-for="navItem of navData" :key="navItem.id">
      <a :href="navItem.link" rel="noreferrer" target="_blank" class="group">
        <section
          class="flex h-full flex-col border-[1px] border-solid border-gray-300 dark:border-gray-600 rounded-[8px] leading-[24px] px-[24px] py-[12px] group-hover:shadow group-hover:border-[#62bbee] dark:group-hover:border-[#589fe8]"
        >
          <span
            class="text-gray-400 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-200 transition duration-150 ease-in-out"
          >
            {{ navItem.text }}
          </span>
          <span
            v-show="navItem.type"
            class="mt-[2px] text-xs rounded-full text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50"
          >
            {{ navItem.type }}
          </span>
          <span
            class="mt-[2px] text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50 min-h-[20px]"
          >
            {{ navItem.desc || navItem.link }}
          </span>
        </section>
      </a>
    </section>
  </div>
</template>
