# Checkbox 多选框

一组备选项中进行多选

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

:::demo 在 ac-checkbox 元素中定义 v-model 绑定变量，单一的 checkbox 中，默认绑定变量的值会是 Boolean，选中为 true。

```vue
<template>
  <!-- `checked` 为 true 或 false -->
  <ac-check-box v-model="checked">备选项</ac-check-box>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let checked = ref(true);
    return {
      checked,
    };
  },
};
</script>
```

:::

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo checkbox-group 元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 v-model 绑定 Array 类型的变量即可。 ac-check-box 的 label 属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```vue
<template>
  <ac-check-box-group v-model="hobby">
    <ac-check-box label="抽烟"></ac-check-box>
    <ac-check-box label="喝酒"></ac-check-box>
    <ac-check-box label="烫头"></ac-check-box>
  </ac-check-box-group>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let hobby = ref([]);
    return {
      hobby,
    };
  },
};
</script>
```

:::


## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|v-model|绑定值|string / number / boolean|—|—|
|label|选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）|string / number / boolean|—|—|
|name|原生 name 属性|string|—|—|