# Radio 单选框

在一组备选项中进行单选

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。

```vue
<template>
  <ac-radio v-model="radio" label="1">备选项</ac-radio>
  <ac-radio v-model="radio" label="2">备选项</ac-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```

:::

## 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。

```vue
<template>
  <ac-radio-group v-model="radio">
    <ac-radio :label="3">备选项</ac-radio>
    <ac-radio :label="6">备选项</ac-radio>
    <ac-radio :label="9">备选项</ac-radio>
  </ac-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```

:::


## Radio Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|value / v-model|绑定值|string / number / boolean|—|—|
|label|Radio 的 value|string / number / boolean|—|—|
|name|原生 name 属性|string|—|—|