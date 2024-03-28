<!-- ---
layout: doc
---

<script setup>
import { ref, onMounted } from "vue";

import { blog } from "../../.vitepress/data/blog/blog.ts";
import { classify } from "../../.vitepress/data/blog/classify.ts";
import { getTimestamp, timestampToFormatTime } from "../../utils/date.tool.js";

// SyntaxError: Named export 'CalendarHeatmap' not found.
// The requested module 'vue3-calendar-heatmap' is a CommonJS module,
// which may not support all module.exports as named exports.
// import { CalendarHeatmap } from 'vue3-calendar-heatmap'
import * as pkg from "vue3-calendar-heatmap";
const CalendarHeatmap = pkg.CalendarHeatmap || pkg;

const classifyArr = ref([]);
const blogArr = ref([]);

const publishDates = ref([]);
const nowDate = ref("1970-01-01");
const isDarkMode = ref(false);
const lightRangeColor = ["#ebedf0", "#dae2ee", "#c1def8", "#74b5f1", "#3889de", "#12489b"];
const darkRangeColor = ["#282c34", "#1e3449", "#1e476b", "#1e5887", "#1e6baa", "#2497cf"];

onMounted(() => {
  nowDate.value = getNowDate();

  fetchCommitData("jhouxu", "apecode").then((commitData) => {
    // 接口请求放回空对象或空数组，直接中断后续处理
    if (JSON.stringify(commitData) === "{}" || commitData.length === 0) {
      return false;
    }

    const timestampToDate = (timestamp) => {
      return new Date(timestamp * 1000);
    };

    const processedData = commitData.map((entry) => {
      const weekDate = timestampToDate(entry.week);
      const dailyCommits = entry.days;

      const weeklyData = weekDate.getDay();
      const dailyData = dailyCommits.map((commits, index) => {
        const date = new Date(weekDate);
        date.setDate(weekDate.getDate() + index);
        return { date: getYearMonthDate(date), count: commits };
      });

      return dailyData;
    });

    // 剔除空值
    const processedDataFilter = processedData.flat(Infinity).filter((item) => item.count);

    publishDates.value = processedDataFilter;
  });

  darkModeMediaQuery();

  const sortBlog = blog.sort((a, b) =>  new Date(b.time).getTime() - new Date(a.time).getTime())

  // 初始化分类数据
  let arr = getObjectValues(classify);
  arr.map((cItem) => {
    if (cItem.link === '') {
      let index = sortBlog.findIndex(sItem => sItem.type === cItem.value);
      let total = sortBlog.filter((sItem) => sItem.type === cItem.value).length;
      cItem.link = sortBlog[index]['link'];
      cItem.total = total;
    }
  })
  classifyArr.value = arr;
  blogArr.value = sortBlog;
});

// 获取当前时间
const getNowDate = () => {
  return timestampToFormatTime(getTimestamp(), "yyyy-MM-dd");
};

const getYearMonthDate = (dateString) => {
  let D = new Date(dateString);
  let year = D.getFullYear();
  let month = D.getMonth() + 1;
  let day = D.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

const fetchCommitData = async (owner, repo) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`);
    if (response.ok) {
      return await response.json();
    } else {
      console.error(`Failed to fetch commit data: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching commit data:", error);
    return null;
  }
};

const darkModeMediaQuery = () => {
  const htmlElement = document.documentElement;
  const classList = htmlElement.classList;
  // init
  isDarkMode.value = classList.value.indexOf("dark") > -1 ? true : false;

  // observer
  const observer = new MutationObserver((mutationsList) => {
    isDarkMode.value = classList.value.indexOf("dark") > -1 ? true : false;
  });

  // 配置需要观察的属性和类型
  observer.observe(htmlElement, { attributes: true });
};

const getObjectValues = (obj) => {
  return Object.values(obj)
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

## 分类

<ClassifyCard :classifyData=classifyArr />

## 近期

<RecentlyCard :blogData=blogArr />

## 更新

由于 Github 的限制，数据会出现加载异常的问题。[想看的可以多刷新几次 ╰(*°▽°*)╯]

<CalendarHeatmap :values="publishDates" :end-date="nowDate" :round="2" :max="10" :dark-mode="isDarkMode" :range-color="isDarkMode ? darkRangeColor : lightRangeColor" /> -->
