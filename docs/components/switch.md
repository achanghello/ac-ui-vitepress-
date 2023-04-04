# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

简单的步骤条。

:::demo 绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。

```vue
<template>
<AcSwitch v-model="checkBoxVal" active-color="#13ce66" inactive-color="#ff4949"></AcSwitch> 
</template>

<script>
import {ref} from 'vue'
  export default {
    setup() {
      let checkBoxVal = ref(true)
      return {
        checkBoxVal
      };
    }
  }
</script>
```

:::


## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|v-model|绑定值|string / number / boolean|—|—|
|active-color|switch 打开时的背景色|string|—|—|
|inactive-color|switch 关闭时的背景色|string|—|—|
|name|原生 name 属性|string|—|—|