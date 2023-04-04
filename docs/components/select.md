# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

:::demo v-model的值为当前被选中的ac-option的 value 属性值

```vue
<template>
<div style="height:250px">
<ac-select v-model="type" class="select-type">
    <ac-option value="suki" label="点赞量"></ac-option>
    <ac-option value="release_time" label="发布时间"></ac-option>
    <ac-option value="collection" label="收藏量"></ac-option>
    <ac-option value="views" label="浏览量"></ac-option>
  </ac-select>
</div>
  
</template>

<script>
import {ref} from 'vue'
  export default {
    setup() {
      const type = ref("suki");
      return {
        type
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