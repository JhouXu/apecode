---
layout: doc
---

<script setup>
  import { ref, onMounted } from 'vue'

  // SyntaxError: Named export 'CalendarHeatmap' not found. 
  // The requested module 'vue3-calendar-heatmap' is a CommonJS module, 
  // which may not support all module.exports as named exports.
  // import { CalendarHeatmap } from 'vue3-calendar-heatmap'
  import * as pkg from 'vue3-calendar-heatmap';
  const CalendarHeatmap = pkg.CalendarHeatmap || pkg;

  import { getTimestamp, timestampToFormatTime } from '../utils/date.tool.js';

  import { blog } from '../.vitepress/data/blog/blog.ts'

  const publishDates = ref([])
  const nowDate = ref('1970-01-01')

  onMounted(() => {
    publishDates.value = calcDates(blog)
    nowDate.value = getNowDate()
  })

  // 统计笔记发布量
  const calcDates = (D) => {
    const timeCount = {};
    D.forEach((entry) => {
      const date = entry.time;
      timeCount[date] = (timeCount[date] || 0) + 1;
    });

    // 转换成所需的数据结构
    const result = Object.entries(timeCount).map(([date, count]) => ({
      date,
      count,
    }));

    return result
  };

  // 获取当前时间
  const getNowDate = () => {
    return timestampToFormatTime(getTimestamp(), 'yyyy-MM-dd') 
  }
</script>

<style>
@import 'vue3-calendar-heatmap/dist/style.css';

.vch__legend {
  margin-top: 2px;
  font-size: 10px;
}
</style>

# 随笔记

## 贡献值

`统计发布时间`

<CalendarHeatmap :values="publishDates" :end-date="nowDate" :round="2" />

## 近期笔记
