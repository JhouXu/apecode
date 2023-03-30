<script setup lang="ts">
defineProps<{
  emojis: [
    {
      key: string | number;
      symbol: any;
      text: string;
    }
  ];
}>();
</script>

<template>
  <div class="container flex flex-wrap justify-start gap-[6px]">
    <div
      v-for="item in emojis"
      :key="item.key"
      class="item p-[10px] min-w-[50px] min-h-[50px] flex justify-center items-center border-white-200 rounded-[10px] border-[1px] box-border cursor-pointer hover:bg-[#161618] transition duration-100"
    >
      <div class="item-symbol transform-gpu scale-110 transition duration-100">
        {{ item.symbol }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// 鼠标悬浮效果
.container .item:hover .item-symbol {
  transform: scale(1.8);
}
</style>
