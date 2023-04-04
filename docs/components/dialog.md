# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置visible属性，它接收Boolean，当为true时显示 Dialog。title属性用于定义标题，它是可选的，默认值为空。

```vue
<template>
  <ac-button @click="visible = true">打开对话框</ac-button>
  <ac-dialog v-model:visible="visible" title="标题配资">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ac-button type="primary" @click="visible = false">确定</ac-button>
        <ac-button @click="visible = false">取消</ac-button>
      </template>
    </ac-dialog>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let visible = ref(false);
    return {
      visible,
    };
  },
};
</script>
```

:::

## 自定义内容

Dialog 组件的内容可以是任意的

:::demo Dialog 分为三个部分：title,body和footer，title和footer需要具名为title和footer的slot。

```vue
<template>
  <ac-button @click="visible = true">打开对话框</ac-button>
  <ac-dialog v-model:visible="visible">
      <template v-slot:title>
        <h1>我是标题</h1>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ac-button type="primary" @click="visible = false">确定</ac-button>
        <ac-button @click="visible = false">取消</ac-button>
      </template>
    </ac-dialog>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let visible = ref(false);
    return {
      visible,
    };
  },
};
</script>
```
:::

## 大小和距离顶部距离

Dialog 大小和距离顶部距离。

:::demo 需要设置width和top属性，它接收百分数和vh。

```vue
<template>
  <ac-button @click="visible = true">打开对话框</ac-button>
  <ac-dialog v-model:visible="visible" width="20%" top="20vh" title="标题配资">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ac-button type="primary" @click="visible = false">确定</ac-button>
        <ac-button @click="visible = false">取消</ac-button>
      </template>
    </ac-dialog>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let visible = ref(false);
    return {
      visible,
    };
  },
};
</script>
```

:::


## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|v-model:visible|是否显示 Dialog|boolean|—|false|
|title|Dialog 的标题，也可通过具名 slot|string|—|—|
|width|Dialog 的宽度|string|—|50%|
|top|Dialog CSS 中的 margin-top 值|string|—|15vh|

## Slot

|name|说明|
|-|-|
|—|Dialog 的内容|
|title|Dialog 标题区的内容|
|footer|Dialog 按钮操作区的内容|