# 快速开始

基于vue3,请确保你的项目是vue3

## npm安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```
npm install achang-ui
```

## 项目引入
在main.js里面这样写
```js
import { createApp } from 'vue'
import App from './App.vue'
// 引入组件库
import acui from "achang-ui"
// 引入组件库样式
import "achang-ui/dist/assets/style.css"
// 进行注册
createApp(App).use(acui).mount('#app')
```