# Textarea 文本域

用于输入多行文本信息，通过将 type 属性的值指定为 textarea

## 基础用法

基础的、简洁的文本域。

:::demo 

```vue
<template>
  <ac-textarea v-model="textarea">
    <ac-button>我的未来</ac-button>
  </ac-textarea>
</template>
<script>
import { ref } from 'vue';
  export default {
    setup(){
      // 文本域
    const textarea = ref('')
    return {
      textarea
    }
    }
  };
</script>
```

:::

## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|value / v-model|绑定值|string / number / boolean|—|—|
|placeholder|提示内容|string|—|—|
|name|原生 name 属性|string|—|—|
|maxlength|最大长度|string|—|—|
