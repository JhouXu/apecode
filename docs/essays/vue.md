---
layout: doc
date: "2024-05-16"
---

# Vue

## 简述 MVVM

### 什么是 MVVM？

`视图模型双向绑定`，是 `Model-View-ViewModel` 的缩写，也就是把 MVC 中的 Controller 演变成 ViewModel。Model 层代表数据模型，View 代表 UI 组件，ViewModel 是 View 和 Model 层的桥梁，数据会绑定到 ViewModel 层并自动将数据渲染到页面中，视图变化的时候会通知 ViewModel 层更新数据。`以前是操作 DOM 结构更新视图，现在是数据驱动视图`。

### MVVM 的优点

1. `低耦合`。视图（View）可以独立于 Model 变化和修改，一个 Model 可以绑定到不同的 View 上，当 View 变化的时候 Model 可以不变化，当 Model 变化的时候 View 也可以不变；
2. `可重用性`。你可以把一些视图逻辑放在一个 Model 里面，让很多 View 重用这段视图逻辑。
3. `独立开发`。开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注于页面设计。
4. `可测试`。

## Vue

The Progressive JavaScript Framework
渐进式 JavaScript 框架

### 优点

1. `简单易学`： Vue.js 的设计目标之一是易于学习和上手。其核心库非常轻量，文档清晰，提供了丰富的示例，使初学者能够迅速上手。
2. `渐进式框架`： Vue.js 是一个渐进式框架，允许你根据需要逐渐引入它的不同部分，如 Vue Router、Vuex 等。这种灵活性对于不同规模和需求的项目都非常有用。
3. `响应式数据绑定`： Vue.js 提供了强大的数据绑定机制，可以轻松实现视图和数据的同步更新，提高开发效率。
4. `组件化开发`： Vue.js 鼓励使用组件化的开发方式，将页面拆分为多个可复用的组件，提高代码的可维护性和复用性。
5. `虚拟 DOM`： Vue.js 使用虚拟 DOM 技术，在数据发生变化时，通过比较虚拟 DOM 和真实 DOM 的差异，减少真实 DOM 操作，从而提升性能。
6. `文档丰富`： Vue.js 官方文档详尽，提供了大量的示例和解释，方便开发者查阅。
7. `社区活跃`： Vue.js 拥有庞大的社区，有许多第三方插件和库可以用于解决各种问题。
8. `生态系统丰富`： 除了核心库，Vue.js 还有大量的生态系统库，如 Vue Router（路由）、Vuex（状态管理）、Vuetify（UI 组件库）等，可以帮助构建更完整的应用。

### 缺点

1. `规模限制`： 尽管 Vue.js 适用于大多数项目，但对于特别大型的应用来说，可能会因为缺乏一些大型框架（如 Angular）的特性而显得不够强大。
2. `插件质量不一`： 尽管有许多优秀的 Vue.js 插件和库，但并非所有都具有高质量，有时你可能需要在多个选择中做出决策。
3. `相对新`： 虽然 Vue.js 已经存在一段时间，但相对于一些其他框架（如 Angular 和 React），它的历史相对较短。这可能会影响一些企业在选择技术栈时的决策。
4. `全局状态管理`： 虽然 Vue.js 提供了 Vuex 用于全局状态管理，但在大型应用中，对于全局状态的管理可能需要更多的工作。

## Vue 底层实现原理

vue.js 是采用`数据劫持结合发布者-订阅者模式`的方式，通过 Object.defineProperty()来劫持各个属性的 setter 和 getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

Vue 是一个典型的 MVVM 框架，模型（Model）只是普通的 javascript 对象，修改它则视图（View）会自动更新。这种设计让状态管理变得非常简单而直观。

MVC:

- Model（数据模型） : 数据层，负责业务逻辑和数据处理。
- View（视图） : 视图层，负责页面展示。
- Controller（控制器） : 控制层，负责业务逻辑和数据处理。

MVVM:

- Model（数据模型） : 数据层，负责业务逻辑和数据处理。
- View（视图） : 视图层。
- ViewModel（视图模型） : 控制层，负责业务逻辑和数据处理。

Observer（数据监听器） : Observer 的核心是通过 Object.defineProprtty()来监听数据的变动，这个函数内部可以定义 setter 和 getter，每当数据发生变化，就会触发 setter。这时候 Observer 就要通知订阅者，订阅者就是 Watcher。

Watcher（订阅者） : Watcher 订阅者作为 Observer 和 Compile 之间通信的桥梁，主要做的事情是：

1. 在自身实例化时往属性订阅器(dep)里面添加自己。
2. 自身必须有一个 update()方法。
3. 待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发 Compile 中绑定的回调。

## 谈谈 vue diff 算法

Vue.js 使用了一种高效的 diff 算法来更新`虚拟 DOM`，从而提高渲染性能。该算法的核心思想是只更新必要的 DOM 节点。

新旧虚拟 DOM 对比的时候，Diff 算法比较只会在同层级进行, 不会跨层级比较。 所以 Diff 算法是：`深度优先算法`。 时间复杂度:O(n)

### 具体步骤

- 比较两个虚拟 DOM 树的根节点:
  - 如果根节点相同，则递归比较其子节点。
  - 如果根节点不同，则直接替换旧的根节点。
- 比较两个虚拟 DOM 树的子节点:
  - 如果子节点的数量相同，则逐个比较每个子节点。
  - 如果子节点的数量不同，则使用最长公共子序列 (LCS) 算法来找到两个子节点列表中的最大匹配项。
- 比较两个虚拟 DOM 节点:
  - 如果节点类型相同，则比较节点的属性。
  - 如果节点类型不同，则直接替换旧的节点。
- 更新 DOM 节点:
  - 如果节点的属性发生变化，则更新 DOM 节点的属性。
  - 如果节点的文本内容发生变化，则更新 DOM 节点的文本内容。

### 优化

Vue diff 算法使用了一些优化技巧来提高性能，例如：

- 使用 key 来标识节点: 使用 key 可以快速找到两个虚拟 DOM 树中相同的节点，从而减少比较的次数。
- 使用复用策略: Vue 会尽量复用旧的 DOM 节点，以减少 DOM 操作的次数。

### 优点

- 是一种高效的 diff 算法，可以有效减少 DOM 操作的次数，从而提高渲染性能。

## 谈谈对 vue 生命周期的理解？

每个 Vue 实例在创建时都会经过一系列的初始化过程，vue 的生命周期钩子，就是说在达到某一阶段或条件时去触发的函数，目的就是为了完成一些动作或者事件。

`create 阶段`: vue 实例被创建

- `beforeCreate`: 创建前，此时 data 和 methods 中的数据都还没有初始化
- `created`: 创建完毕，data 中有值，未挂载

`mount 阶段`: vue 实例被挂载到真实 DOM 节点

- `beforeMount`: 可以发起服务端请求，去数据
- `mounted`: 此时可以操作 DOM

`update 阶段`: 当 vue 实例里面的 data 数据变化时，触发组件的重新渲染

- `beforeUpdate`: 更新前
- `updated`: 更新后

`destroy 阶段`: vue 实例被销毁

- `beforeDestroy`: 实例被销毁前，此时可以手动销毁一些方法
- `destroyed`: 销毁后

## 组件生命周期

### 生命周期（父子组件）

- 父组件 beforeCreate -->
- 父组件 created -->
- 父组件 beforeMount -->
- 子组件 beforeCreate -->
- 子组件 created -->
- 子组件 beforeMount -->
- 子组件 mounted -->
- 父组件 mounted -->
- 父组件 beforeUpdate -->
- 子组件 beforeDestroy -->
- 子组件 destroyed -->
- 父组件 updated

### 加载渲染过程

- 父 beforeCreate ->
- 父 created ->
- 父 beforeMount ->
- 子 beforeCreate ->
- 子 created ->
- 子 beforeMount ->
- 子 mounted ->
- 父 mounted

### 挂载阶段

- 父 created ->
- 子 created ->
- 子 mounted ->
- 父 mounted

### 父组件更新阶段

- 父 beforeUpdate ->
- 父 updated

### 子组件更新阶段

- 父 beforeUpdate ->
- 子 beforeUpdate ->
- 子 updated ->
- 父 updated

### 销毁阶段

- 父 beforeDestroy ->
- 子 beforeDestroy ->
- 子 destroyed ->
- 父 destroyed

## computed 与 watch

通俗来讲，既能用 computed 实现又可以用 watch 监听来实现的功能，推荐用 computed， 重点在于 computed 的缓存功能 computed 计算属性是用来声明式的描述一个值依赖了其它的值，当所依赖的值或者变量 改变时，计算属性也会跟着改变； watch 监听的是已经在 data 中定义的变量，当该变量变化时，会触发 watch 中的方法。

watch 属性监听 是一个对象，键是需要观察的属性，值是对应回调函数，主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作,监听属性的变化，需要在数据变化时执行异步或开销较大的操作时使用。

computed 计算属性 属性的结果会被缓存，当 computed 中的函数所依赖的属性没有发生改变的时候，那么调用当前函数的时候结果会从缓存中读取。除非依赖的响应式属性变化时才会重新计算，主要当做属性来使用 computed 中的函数必须用 return 返回最终的结果 computed 更高效，优先使用。data 不改变，computed 不更新。

使用场景 computed：`当一个属性受多个属性影响的时候使用`，例：购物车商品结算功能 watch：当一条数据影响多条数据的时候使用，例：搜索数据

## 组件中的 data 为什么是一个函数？

1. 一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。
2. 如果 data 是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间 data 不冲突，data 必须是一个函数。

## 为什么 v-for 和 v-if 不建议用在一起

1. 当 v-for 和 v-if 处于同一个节点时，`v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中`。如果要遍历的数组很大，而真正要展示的数据很少时，这将造成很大的性能浪费（Vue2.x）
2. 这种场景建议使用 computed，先对数据进行过滤。

:::tip
注意：3.x 版本中 v-if 总是优先于 v-for 生效。由于语法上存在歧义，建议避免在同一元素上同时使用两者。比起在模板层面管理相关逻辑，更好的办法是通过创建计算属性筛选出列表，并以此创建可见元素。
:::

## 项目中 key 的作用

- key 的作用是为了在 diff 算法执行时更快的找到对应的节点，提高 diff 速度，`更高效的更新虚拟 DOM`;
  - vue 和 react 都是采用 diff 算法来对比新旧虚拟节点，从而更新节点。
  - 在 vue 的 diff 函数中，会根据新节点的 key 去对比旧节点数组中的 key，从而找到相应旧节点。
  - 如果没找到就认为是一个新增节点。
  - 而如果没有 key，那么就会采用遍历查找的方式去找到对应的旧节点。
  - 一种一个 map 映射，另一种是遍历查找。相比而言。map 映射的速度更快。
- 为了在数据变化时强制更新组件，以避免“就地复用”带来的副作用。
  - 当 Vue.js 用  v-for  更新已渲染过的元素列表时，它默认用“就地复用”策略。
  - 如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
  - 重复的 key 会造成渲染错误。

## 组件通信方式

1. props/$emit 父子组件通信

父 -> 子 props，子 -> 父 $on、$emit 获取父子组件实例 parent、children Ref 获取实例的方式调用组件的属性或者方法 父->子孙 Provide、inject 官方不推荐使用，但是写组件库时很常用

2. $emit/$on 自定义事件 兄弟组件通信

`Event Bus` 实现跨组件通信 Vue.prototype.$bus = new Vue() 自定义事件

3. vuex 跨级组件通信

Vuex、$attrs、$listeners Provide、inject

## nextTick 的实现

1. nextTick 是 Vue 提供的一个全局 API,是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick，则可以在回调中获取更新后的 DOM；
2. Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启 1 个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。nextTick 方法会在队列中加入一个回调函数，确保该函数在前面的 dom 操作完成后才调用；

## nextTick 的实现原理是什么？

在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用 nextTick 来获取更新后的 DOM。 nextTick 主要使用了宏任务和微任务。 根据执行环境分别尝试采用 Promise、MutationObserver、setImmediate，如果以上都不行则采用 setTimeout 定义了一个异步方法，多次调用 nextTick 会将方法存入队列中，通过这个异步方法清空当前队列。

## 使用过插槽么？用的是具名插槽还是匿名插槽或作用域插槽

vue 中的插槽是一个非常好用的东西 slot 说白了就是一个占位的，在 vue 当中插槽包含三种：一种是`默认插槽（匿名）`，一种是`具名插槽`还有一种就是`作用域插槽`。

匿名插槽就是没有名字的只要默认的都填到这里具名插槽指的是具有名字的。

## keep-alive 的实现

作用：实现组件缓存，保持这些组件的状态，以避免反复渲染导致的性能问题。需要缓存组件 频繁切换，不需要重复渲染。

场景：tabs 标签页 后台导航，vue 性能优化。

原理：Vue.js 内部将 DOM 节点抽象成了一个个的 VNode 节点，keep-alive 组件的缓存也是基于 VNode 节点的而不是直接存储 DOM 结构。它将满足条件（pruneCache 与 pruneCache）的组件在 cache 对象中缓存起来，在需要重新渲染的时候再将 vnode 节点从 cache 对象中取出并渲染。

## mixin

mixin 项目变得复杂的时候，多个组件间有重复的逻辑就会用到 mixin。多个组件有相同的逻辑，抽离出来。mixin 并不是完美的解决方案，会有一些问题。

vue3 提出的 Composition API 旨在解决这些问题【追求完美是要消耗一定的成本的，如开发成本】

场景：PC 端新闻列表和详情页一样的右侧栏目，可以使用 mixin 进行混合。

劣势:

1. 变量来源不明确，不利于阅读。
2. 多 mixin 可能会造成命名冲突 3.mixin 和组件可能出现多对多的关系，使得项目复杂度变高。

## Vuex 的理解及使用场景

Vuex 是一个专为 Vue 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。

1. Vuex 的状态存储是响应式的；当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation， 这样使得我们可以方便地跟踪每一个状态的变化 Vuex 主要包括以下几个核心模块：
   1. State：定义了应用的状态数。
   2. Getter：在 store 中定义“getter”（可以认为是 store 的计算属性），就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
   3. Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
   4. Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
   5. Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7249773a1634f779c48f3f0ffabf968~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
