<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import * as echarts from "echarts";
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import "vue3-calendar-heatmap/dist/style.css";
import { BlogData } from "./../config/nsBlog.mts";

// types
export interface PieData {
  value: string;
  name: string;
}
export interface HeatmapData {
  value: string;
  name: string;
}

const theme = ref<string>(""); // '' | dark
const dataPie = ref<PieData[]>([]); // 饼图数据
const dataHeatmap = ref<HeatmapData[]>([]); // 热力图数据
const endDate = ref(getTodayFormattedDate());
let chartPie: echarts.ECharts; // 饼图实例

onMounted(() => {
  theme.value = getPageTheme(); // 初始化页面主题

  // 监听页面主题
  observerPageTheme((t: string) => {
    theme.value = t;
  });

  dataPie.value = getDataPie();
  chartPie = initEchartPie(dataPie.value, theme.value);
  dataHeatmap.value = getHeatmapData(BlogData);

  window.addEventListener("resize", () => {
    chartPie.resize();
  });
});

onBeforeUnmount(() => {
  chartPie.dispose();
});

watch(theme, (newTheme: string) => {
  debounce(() => {
    chartPie.dispose();
    chartPie = initEchartPie(dataPie.value, theme.value);
  }, 400);
});

function observerPageTheme(updateTheme: Function = () => {}) {
  const htmlElement = document.documentElement;
  const config = { attributes: true, attributeFilter: ["class"], attributeOldValue: true };
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        updateTheme(htmlElement.className);
      }
    }
  });
  observer.observe(htmlElement, config);
}

function initEchartPie(data: PieData[], theme: string) {
  const chartDom = document.getElementById("chart-pie");
  const example = echarts.init(chartDom, theme);

  const option = {
    aria: { show: true },
    tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        radius: ["35%", "70%"],
        avoidLabelOverlap: true,
        padAngle: 2,
        itemStyle: { borderRadius: 10 },
        emphasis: {
          label: { show: true, fontSize: 20, fontWeight: "bold" },
        },
        labelLine: { show: true },
        backgroundColor: "",
        data,
      },
    ],
  };

  example.setOption(option);
  return example;
}

function getDataPie(): PieData[] {
  return BlogData.filter((item) => item.text !== "概述").map((item) => ({
    value: item.items.length.toString(),
    name: `${item.text} ${item.items.length}篇`,
  }));
}

function getPageTheme(): string {
  return document.documentElement.classList.value;
}

function getHeatmapData(originData: any[]): HeatmapData[] {
  const dataValues: HeatmapData[] = [];
  originData.forEach((item) => {
    item.items.forEach((subItem: any) => {
      const index = dataValues.findIndex((dv) => dv.date === subItem.time);
      if (index !== -1) {
        dataValues[index].count++;
      } else {
        dataValues.push({ date: subItem.time, count: 1 });
      }
    });
  });
  return dataValues;
}

function getTodayFormattedDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = padZero(today.getMonth() + 1);
  const day = padZero(today.getDate());
  return `${year}-${month}-${day}`;
}

function padZero(num: number): string {
  return num.toString().padStart(2, "0");
}

function debounce(func: Function, delay: number): Function {
  let timer: number;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
</script>

<template>
  <div class="docs-blog-summary">
    <div class="pie">
      <p>分类占比</p>
      <div id="chart-pie" class="w-100 h-[400px] rounded-md overflow-hidden bg-[#f1f1f1] dark:bg-[#100c2a]"></div>
    </div>

    <div class="heatmap">
      <p>发布时间</p>
      <CalendarHeatmap :values="dataHeatmap" :end-date="endDate" :round="2" :dark-mode="theme === 'dark'" />
    </div>
  </div>
</template>
