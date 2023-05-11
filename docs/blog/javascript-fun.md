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
