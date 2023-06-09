---
layout: doc
---

# 自封装常用的工具函数

## 字符串处理

### replaceString

> 替换指定字符串

```javascript
/**
 * 替换指定字符串
 * @param {String} sourceStr 源修改内容
 * @param {String} checkStr 需检验匹配的内容
 * @param {String} replaceStr 计划替换内容
 * @returns {String} 替换结果
 */
function replaceString(sourceStr, checkStr, replaceStr = "") {
  if (!sourceStr) return console.error("sourceStr 为必传字段");
  if (!checkStr) return console.error("checkStr 为必传字段");
  const reg = new RegExp(checkStr);
  return sourceStr.replace(reg, replaceStr);
},
```

## 数学运算

### calc

> 基本数学运算，能够有效避免 javascript 精度问题。

```javascript
/**
 * 基本数学运算，能够有效避免javascript精度问题。
 * @param { String | Number } num1 操作数
 * @param { String | Number } num2 被操作数
 * @param { String } type 计算类型
 * @return { Number } result 计算结果
 */
function calc(num1, num2, type) {
  const n1 = num1.toString().split(".")[1] ?? "0";
  const n2 = num2.toString().split(".")[1] ?? "0";
  const point = 10 ** (n1 > n2 ? n1.length : n2.length); // 精度
  let result = 0;
  switch (type) {
    case "+":
      result = (num1 * point + num2 * point) / point;
      break;
    case "-":
      result = (num1 * point - num2 * point) / point;
      break;
    case "*":
      result = (num1 * point * (num2 * point)) / point / point;
      break;
    case "/":
      result = (num1 * point) / (num2 * point);
      break;
  }
  return result;
}
```

## 时间处理

### 当前时间戳

:::tip
获取当前时刻的时间戳
:::

```javascript
/**
 * 获取当前时刻的时间戳
 * @return {String} 时间戳
 */
export const getTimestamp = () => {
  return new Date().getTime();
};
```

### 时间格式化

:::tip
根据规则，对时间进行格式处理
:::

```javascript
/**
 * 根据规则，对时间进行格式处理
 * @param {String} time 需格式的时间 2023-05-23T12:25:42.9703802 || 2023-05-23 12:25:42.9703802
 * @param {String} rule 格式规则 yyyy-MM-dd HH:mm:ss || yyyy-M-d H:m:s 对填充零进行了判断
 * @returns {String}
 */
export const formatTime = (time, rule = "yyyy-MM-dd HH:mm:ss") => {
  const times = time.match(/\d+/g);
  const timeObj = {};
  const rules = rule.match(/\w+/g);
  let mapping = ["yyyy", "MM", "dd", "HH", "mm", "ss", "ms"];
  let ft = rule;

  // 数组转对象
  times.map((t, k) => {
    timeObj[mapping[k]] = times[k];
  });

  rules.map((f) => {
    let ff = f.length === 1 ? `${f}${f}` : f;
    ft = ft.replace(new RegExp(f, "g"), timeObj[ff]);
    // ft = ft.replace(new RegExp(f, "g"), fillingZero(f, timeObj[ff])); // 可搭配 fillingZero 使用
  });

  return ft;
};
```

### 前补零

:::tip
根据时间字段名，自动判断是否需要填充零
:::

```javascript
/**
 * 根据时间字段名，自动判断是否需要填充零
 * @param {String} field 时间字段名
 * @param {String} value 预处理值
 * @returns {String|Number}
 */
export const fillingZero = (field, value) => {
  switch (field) {
    case "MM":
    case "dd":
    case "HH":
    case "mm":
    case "ss":
      return value < 10 ? `0${+value}` : value;
    case "M":
    case "d":
    case "H":
    case "m":
    case "s":
      return +value;
    default:
      return value;
  }
};
```

### 时间戳格式化

:::tip
将时间戳转换为用户自定义的时间格式
:::

```javascript
/**
 * 将时间戳转换为用户自定义的时间格式
 * @param {Number} timestamp 时间戳
 * @param {String} rule 时间格式
 * @returns {String}
 */
export const timestampToFormatTime = (timestamp, rule = "yyyy-MM-dd HH:mm:ss") => {
  const D = new Date(timestamp);
  const timeObj = {};
  const rules = rule.match(/\w+/g);
  let ft = rule;

  timeObj["yyyy"] = D.getFullYear();
  timeObj["MM"] = D.getMonth() + 1;
  timeObj["dd"] = D.getDate();
  timeObj["HH"] = D.getHours();
  timeObj["mm"] = D.getMinutes();
  timeObj["ss"] = D.getSeconds();
  timeObj["ms"] = D.getMilliseconds();

  rules.map((f) => {
    let ff = f.length === 1 ? `${f}${f}` : f;
    ft = ft.replace(new RegExp(f, "g"), fillingZero(f, timeObj[ff]));
  });

  return ft;
};
```
