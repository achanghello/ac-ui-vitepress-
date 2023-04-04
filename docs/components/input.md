# Input 输入框

通过鼠标或键盘输入字符

## 基础用法
:::demo
```vue
<template>
  <ac-input v-model="input" placeholder="请输入内容"></ac-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::
## 禁用状态
:::demo 通过 disabled 属性指定是否禁用 input 组件
```vue
<template>
  <ac-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</ac-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::
## 可清空
:::demo
```vue
<template>
  <ac-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</ac-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::
## 密码框
:::demo
```vue
<template>
  <ac-input placeholder="请输入密码" v-model="input" show-password></ac-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::
## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|type|类型|string|text和其他 原生 input 的 type 值|text|
|value / v-model|绑定值|string / number|—|—|
|placeholder|输入框占位文本|string|—|—|
|clearable|是否可清空	|boolean|—|false|
|show-password|是否显示切换密码图标|boolean|—|false|
|disabled|禁用|boolean|—|false|
|name|原生属性|string|—|—|

