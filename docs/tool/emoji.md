---
layout: doc
---

<script setup>
  import { reactive, onMounted } from 'vue'
  import { emoji } from '../.vitepress/data/emoji.ts'
  const emojis = reactive([])
  onMounted(() => {
    Object.entries(emoji).forEach(([name, symbol], key) => {
      emojis.push({ name, symbol, text: `:${name}:`, key })
    })
  })
</script>

# 表情符号

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) is available.

markdown-it 中能够解析的所有表情符号，写博客需要用到的表情，特此记录。`合计：{{ emojis.length }}个`

<EmojiCard :emojis=emojis />
