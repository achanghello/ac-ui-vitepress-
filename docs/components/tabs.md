# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。

```vue
<template>
  <ac-tabs v-model="activeName" @tab-click="handleClick">
    <ac-tab-pane label="用户管理" name="first">用户管理</ac-tab-pane>
    <ac-tab-pane label="配置管理" name="second">配置管理</ac-tab-pane>
    <ac-tab-pane label="角色管理" name="third">角色管理</ac-tab-pane>
    <ac-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</ac-tab-pane>
  </ac-tabs>
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
## 选项卡样式

选项卡样式的标签页。

:::demo 只需要设置 type 属性为 border 就可以使选项卡改变为标签风格。

```vue
<template>
  <ac-tabs v-model="activeName" type="border" @tab-click="handleClick">
    <ac-tab-pane label="用户管理" name="first">用户管理</ac-tab-pane>
    <ac-tab-pane label="配置管理" name="second">配置管理</ac-tab-pane>
    <ac-tab-pane label="角色管理" name="third">角色管理</ac-tab-pane>
    <ac-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</ac-tab-pane>
  </ac-tabs>
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
## pane循环

选项卡样式的标签页。

:::demo 

```vue
<template>
  <ac-tabs v-model="activeName" type="border" @tab-click="handleClick">
    <ac-tab-pane
        v-for="item in arr"
        :key="item.name"
        :label="item.label"
        :name="item.name"
        >{{ item.label }}</ac-tab-pane
      >
  </ac-tabs>
</template>
<script lang="ts">
import { reactive, ref } from 'vue';
export default defineComponent({
  setup() {
      
    let arr = reactive([
        {
            label:"首页",
            name:"first",
        },
        {
            label:"博客",
            name:"second",
        },
        {
            label:"留言",
            name:"third",
        },
        {
            label:"日记",
            name:"fourth",
        },
        {
            label:"甲乙",
            name:"fifth",
        }
    ])
    let activeName = ref('second')
    const handleClick = (tab, event) => {
        console.log('------------', tab, event);
        // arr.pop()
    }
    return {
        activeName,
        handleClick,
        arr
    }
  }
});
</script>
```

:::
## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|value / v-model|绑定值|string / number / boolean|—|—|
|label|Radio 的 value|string / number / boolean|—|—|
|name|原生 name 属性|string|—|—|