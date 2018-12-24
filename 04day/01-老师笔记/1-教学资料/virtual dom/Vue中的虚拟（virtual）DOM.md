# Virtual DOM and Diff

- [Vue 深入原理](https://github.com/answershuto/learnVue)
- [Vue 理念](https://zhuanlan.zhihu.com/p/23752826)
- [Vue 中 key 的问题说明](https://www.zhihu.com/question/61064119)

## Virtual DOM

- 虚拟 DOM，实际上就是一个 js 对象，用来描述一段HTML结构

## Vue 模板渲染（render）和更新（patch）

- 1 第一次渲染创建一棵`虚拟DOM树`（js 对象）
- 2 数据发生改变后，生成一棵新的虚拟 DOM 树（js 对象）
- 3 对比新旧两棵虚拟 DOM 树（js 对象），通过`diff算法`找到并记录差异的地方
- 4 只将差异的地方重新渲染到页面中

## 图例

![虚拟DOM](./vnode-1.png)
![虚拟DOM](./vnode-2.png)
