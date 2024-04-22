<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import * as echarts from "echarts";

import { BlogData } from "./../config/navSidebarBlog.mts";

const theme = ref<string>(""); // '' | dark
const dataPie = ref<{ value: string; name: string }[]>([]); // 饼图数据
let chartPie: echarts.ECharts;

onMounted(() => {
  // 初始化页面主题
  theme.value = getPageTheme();

  // 监听页面主题
  observerPageTheme((t: string) => {
    theme.value = t;
  });

  dataPie.value = getDataPie();
  chartPie = initEchartPie(dataPie.value, theme.value);

  window.addEventListener("resize", () => {
    chartPie.resize();
  });
});

onBeforeUnmount(() => {
  chartPie.dispose();
});

watch(theme, (newTheme: string) => {
  chartPie.dispose();
  chartPie = initEchartPie(dataPie.value, theme.value);
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

const getPageTheme = (): string => {
  return document.documentElement["classList"].value;
};

const observerPageTheme = (updateTheme: Function = () => {}) => {
  const htmlElement = document.documentElement;
  const config = { attributes: true, attributeFilter: ["class"], attributeOldValue: true };
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        updateTheme ? updateTheme(htmlElement.className) : "";
      }
    }
  });
  observer.observe(htmlElement, config);
};
</script>

<template>
  <div class="docs-blog-summary">
    <div id="chart-pie" class="w-100 h-[400px] rounded-md overflow-hidden bg-[#f1f1f1] dark:bg-[#100c2a]"></div>
  </div>
</template>
