---
layout: doc
---

# 微信小程序数据通讯

## 页面间

```javascript
// 子页面修改上级页面 prevObj 对象数据
const obj = { name: "小黄", age: 19 };

const pages = getCurrentPages();
const prevPage = pages[pages.length - 2]; // 上一个页面的实例
prevPage.setData({ prevObj: obj });
```

## 组件间

```html
<!-- 父组件 -->
<view>
  <child-components id="child"></child-components>
</view>
```

```javascript
// 父组件
const child = this.selectComponent("#child"); // 子组件实例
child.callFunction(); // 注意，callFunction 为子组件 child-components 的方法
```
