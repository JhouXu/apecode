<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import * as echarts from "echarts";

import { store } from "../store.mts";
import { BlogData } from "./../config/navSidebarBlog.mts";

const theme = ref<string>(""); // '' | dark

const dataPie = ref<{ value: string; name: string }[]>([]); // 饼图数据
const dataHeatmap = ref<[string, number][]>([]); // 热力图数据

let chartPie: echarts.ECharts; // 饼图实例
let chartHeatmap: echarts.ECharts; // 热力图实例

let heatmapTheme = {
  dark: {
    color: ["#100c2a", "#dae2ef", "#c0ddf9", "#73b3f3", "#3886e1", "#17459e"],
    borderColor: "#2e2e32",
  },
  light: {
    color: ["#f1f1f1", "#dae2ef", "#c0ddf9", "#73b3f3", "#3886e1", "#17459e"],
    borderColor: "#e2e2e3",
  },
};

onMounted(() => {
  dataPie.value = getDataPie();
  chartPie = initEchartPie(dataPie.value, store.theme);

  dataHeatmap.value = getYearTemplateData(getYear());
  dataHeatmap.value = getYearValueData(dataHeatmap.value, BlogData);
  chartHeatmap = initEchartHeatmap(
    dataHeatmap.value,
    store.theme,
    getYear(),
    ["", " "].includes(store.theme) ? heatmapTheme["default"] : heatmapTheme[store.theme]
  );

  window.addEventListener("resize", () => {
    chartPie.resize();
    chartHeatmap.resize();
  });
});

onBeforeUnmount(() => {
  chartPie.dispose();
  chartHeatmap.dispose();
});

const initEchartPie = (data: Object[], theme: string) => {
  let chartDom: HTMLElement | null = document.getElementById("chart-pie");
  let example: echarts.ECharts = echarts.init(chartDom, theme);
  let option: Object | any;

  option = {
    aria: {
      show: true,
      decal: {
        show: true,
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: ["35%", "70%"],
        avoidLabelOverlap: true,
        padAngle: 2,
        itemStyle: {
          borderRadius: 10,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        backgroundColor: "",
        data: data,
      },
    ],
  };

  option && example.setOption(option);

  return example;
};

const initEchartHeatmap = (
  data: Object[],
  theme: string,
  yearRange: string | number,
  themeColor: {
    color: string[];
    borderColor: string;
  }
) => {
  let chartDom: HTMLElement | null = document.getElementById("chart-heatmap");
  let example: echarts.ECharts = echarts.init(chartDom, theme);
  let option: Object | any;

  option = {
    tooltip: {},
    visualMap: {
      min: 0,
      max: 5,
      type: "continuous",
      orient: "horizontal",
      right: 37,
      top: 160,
      inRange: {
        color: themeColor.color,
        borderColor: themeColor.borderColor,
      },
    },
    calendar: {
      top: 40,
      left: 70,
      right: 25,
      cellSize: ["auto", 14],
      range: yearRange,
      itemStyle: {
        borderWidth: 1,
      },
      yearLabel: { show: true },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: data,
    },
  };

  option && example.setOption(option);

  return example;
};

const getDataPie = (): { value: string; name: string }[] => {
  const data = JSON.parse(JSON.stringify(BlogData));
  const dataPie: { value: string; name: string }[] = [];
  data.map((item: Object) => {
    if (item["text"] !== "概述") {
      dataPie.push({ value: item["items"].length, name: item["text"] });
    }
  });
  return dataPie;
};

/**
 * 获取指定年份日期数据，日期的值默认0
 * @param year 年份
 * @returns 返回一个二维数组，数组内每个元素是一个数组，数组内第一个元素是日期，第二个元素是日期的值
 */
const getYearTemplateData = (year: string | number): [string, number][] => {
  const date = +echarts.time.parse(year + "-01-01");
  const end = +echarts.time.parse(+year + 1 + "-01-01");
  const dayTime = 3600 * 24 * 1000;
  const data: any = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([echarts.time.format(time, "{yyyy}-{MM}-{dd}", false), 0]);
  }
  return data;
};

const getYearValueData = (templateDate: [string, number][], originData: Object[]): [string, number][] => {
  Object.values(originData).forEach((value: any) => {
    const { items } = value;
    if (items.length) {
      items.forEach((item: any) => {
        const time = item.time;
        const index = templateDate.findIndex((item: any) => item[0] === time);
        if (index !== -1) {
          templateDate[index][1] = ++templateDate[index][1];
        }
      });
    }
  });
  return templateDate;
};

const getYear = (): string | number => {
  let D = new Date();
  let year = D.getFullYear();
  return year;
};

function debounce(func: Function, delay: number): Function {
  let timer: number; // 定时器

  return function () {
    let context = this;
    let args = arguments;
    timer ? clearTimeout(timer) : null;
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
      <p>发布频率</p>
      <div id="chart-heatmap" class="w-100 h-[205px] rounded-md overflow-hidden bg-[#f1f1f1] dark:bg-[#100c2a]"></div>
    </div>
  </div>
</template>
