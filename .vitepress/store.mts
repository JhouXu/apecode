import { reactive, nextTick } from "vue";
import { JSDOM } from "jsdom";
import MutationObserver from "mutationobserver-shim";

const { window } = new JSDOM(); // 创建虚拟 DOM 环境
const document = window.document;
window.MutationObserver = MutationObserver; // 绑定 MutationObserver

// 监听主题变化
const observerTheme = (callback: Function = () => {}) => {
  const htmlElement = document.documentElement;
  const config = { attributes: true, attributeFilter: ["class"], attributeOldValue: true };
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        callback ? callback(htmlElement.className) : "";
      }
    }
  });
  observer.observe(htmlElement, config);
};

// 当主题发生变化时，更新 store 数据
nextTick(() => {
  observerTheme((theme: string) => {
    switch (theme) {
      case "dark":
        theme = "dark";
        break;
      case "":
      case " ":
      default:
        theme = "light";
    }
    store.theme = theme;
    console.log(theme);
  });
});

// 状态管理
export const store = reactive({
  theme: "light", // "light" | "dark"
});
