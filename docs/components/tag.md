# Tag 标签

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。

```vue
<template>
  <ac-tag>1111</ac-tag>
  <ac-tag type="success">122</ac-tag>
  <ac-tag type="info">122</ac-tag>
  <ac-tag type="warning">122</ac-tag>
  <ac-tag type="danger">122</ac-tag>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```

:::

## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|type|类型|string|success/info/warning/danger|—|
