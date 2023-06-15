---
layout: doc
---

# 微信小程序之数据通讯

## 页面

`页面间数据更新`

业务场景：存在两个页面，分别为父页面和子页面，并且是从父页面进入到子页面的。`需要在子页面修改父页面中的数据`。

实现思路：首先，根据 getCurrentPages() 获取到父页面的 this 实例，然后，对这个 this 实例进行 setData()赋值即可。关键代码如下：

```javascript
// 子页面修改上级页面 prevObj 对象数据
const obj = { name: "小黄", age: 19 };

const pages = getCurrentPages();
const prevPage = pages[pages.length - 2]; // 上一个页面的实例
prevPage.setData({ prevObj: obj });
```

## 组件

`组件间方法调用`

业务场景：存在两个组件，分别为父组件和子组件，且父组件中嵌套使用子组件。`需要在父组件中触发子组件的方法`。

实现思路：基于 selectComponent() 获取子组件的实例，直接使用这个实例去调用子组件中存在的方法即可。

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
