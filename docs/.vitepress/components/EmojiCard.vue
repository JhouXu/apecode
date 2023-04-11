<script setup lang="ts">
import type { emojiItem } from "../data/emoji/types";

defineProps<{
  emojis: emojiItem;
}>();

function Copy(str: string) {
  let virtual = document.createElement("textarea");
  virtual.setAttribute("readonly", "readonly"); //设置只读属性防止手机上弹出软键盘
  virtual.value = str;
  document.body.appendChild(virtual); //将textarea添加为body子元素
  virtual.select();
  let res = document.execCommand("copy");
  document.body.removeChild(virtual); //移除DOM元素
  return res;
}
</script>

<template>
  <div class="container flex flex-wrap justify-start gap-[6px]">
    <div
      v-for="item in emojis"
      :key="item.key"
      class="item p-[10px] min-w-[50px] min-h-[50px] flex justify-center items-center border-white-200 rounded-[10px] border-[1px] box-border cursor-pointer hover:bg-[#f6f6f7] transition duration-100"
      @click="Copy(item.text)"
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
