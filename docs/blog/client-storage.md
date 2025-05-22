# 客户端中的几种存储机制

在前端开发中，浏览器提供了多种存储机制，用于在客户端保存数据。

![示例](../../public/images-blog/client-storage/1.jpg)

## Cookies

Cookies 是`最早`的客户端存储机制，由 Netscape 公司在 1994 年提出，用于在客户端存储少量数据，如会话 ID 或用户偏好。

**使用场景**: 存储会话 ID、用户偏好等。

```javascript
document.cookie = "key=value; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
const cookies = document.cookie; // 获取所有 cookies
```

## Local Storage & Session Storage

Local Storage 和 Session Storage 是 HTML5 标准的一部分，于 2009 年正式提出。它们提供了比 Cookies `更简单、容量更大`的客户端存储方式。

### Local Storage

`持久化`存储数据，数据不会随页面关闭而消失。

**使用场景**: 存储用户偏好设置、登录状态等需要长期保存的数据。

```javascript
localStorage.setItem("key", "value"); // 存储数据
const value = localStorage.getItem("key"); // 获取数据
localStorage.removeItem("key"); // 删除数据
localStorage.clear(); // 清除所有数据
```

### Session Storage

`会话级别`的存储，数据在页面会话结束时（关闭页面或浏览器）被清除。

**使用场景**: 存储临时数据，如表单数据、页面状态等。

```javascript
sessionStorage.setItem("key", "value"); // 存储数据
const value = sessionStorage.getItem("key"); // 获取数据
sessionStorage.removeItem("key"); // 删除数据
sessionStorage.clear(); // 清除所有数据
```

## IndexedDB

IndexedDB 是 HTML5 标准的一部分，于 2010 年提出。它是一个低级 API，用于在客户端存储`大量结构化数据`，适合复杂应用场景。

**使用场景**: 存储大量数据，如离线应用数据、复杂数据结构等。

```javascript
const request = indexedDB.open("MyDatabase", 1);
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const store = db.createObjectStore("MyObjectStore", { keyPath: "id" });
};
request.onsuccess = function (event) {
  const db = event.target.result;
  const transaction = db.transaction("MyObjectStore", "readwrite");
  const store = transaction.objectStore("MyObjectStore");
  store.add({ id: 1, name: "John" });
};
```

## Cache Storage

Cache Storage 是 `Service Worker API` 的一部分，于 2014 年提出。它用于`缓存网络请求`的响应，支持`离线访问`和`渐进式 Web 应用`（PWA）。

**使用场景**: 渐进式 Web 应用（PWA）中用于缓存资源。

```javascript
caches.open("my-cache").then(function (cache) {
  cache.add("/path/to/resource");
});
```

## Extension Storage

Extension Storage 是浏览器扩展 API 的一部分，于 2015 年左右提出。它为浏览器`扩展程序`提供了专用的存储机制。

**使用场景**: 存储扩展程序的配置、用户数据等。

**操作方法**: 依赖于浏览器扩展 API。

## Storage Buckets

Storage Buckets 是较新的存储管理机制，于 2020 年左右提出。它提供了`更细粒度`的存储管理，支持数据隔离和生命周期控制。

**使用场景**: 需要隔离存储数据的场景。

**操作方法**: 依赖于浏览器实现。

## Private State Tokens

Private State Tokens 是`隐私保护技术`的一部分，于 2021 年提出。它用于防止跨站跟踪和保护用户隐私。

**使用场景**: 用于防止跨站跟踪和保护用户隐私。

**操作方法**: 依赖于浏览器实现。

## Interest Groups & Shared Storage

Interest Groups 和 Shared Storage 是`隐私沙盒（Privacy Sandbox）`的一部分，于 2021 年提出。它们用于`广告定向`和`跨站点数据共享`，同时保护用户隐私。

### Interest Groups

用于`广告定向`和`用户兴趣`分组。

**使用场景**: 广告技术中用于定向广告投放。

**操作方法**: 依赖于浏览器实现。

### Shared Storage

用于`跨站点共享`数据。

**使用场景**: 广告技术、跨站点用户行为分析等。

**操作方法**: 依赖于浏览器实现。
