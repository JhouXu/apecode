<script setup lang="ts">
const props = defineProps<{
  data: string[];
}>();
</script>

<template>
  <div class="mt-10">
    <li v-for="item in props.data">
      {{ item }}
    </li>
  </div>
</template>
