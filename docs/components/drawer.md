# Drawer 抽屉

有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.

## 基础用法

呼出一个临时的侧边栏, 可以从多个方向呼出

:::demo 需要设置 visible 属性，它接收 Boolean，当为 true 时显示 Dialog。title 属性用于定义标题，它是可选的，默认值为空。

```vue
<template>
  <ac-radio-group v-model="direction">
    <ac-radio label="left">从左往右开</ac-radio>
  <ac-radio label="right">从右往左开</ac-radio>
  <ac-radio label="top">从上往下开</ac-radio>
  <ac-radio label="bottom">从下往上开</ac-radio>
  </ac-radio-group>
  <ac-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</ac-button>
<ac-drawer
    v-model="drawer"
    :direction="direction"
    :clickMaskClose="true"
  >
    <template v-slot:title> 标题 </template>
    内容
  </ac-drawer>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    // 控制抽屉的展示
    let drawer = ref(false);
    let direction = ref("right");
    return {
      drawer,
      direction,
    };
  },
};
</script>
```

:::

## 不添加 Title

当你不需要标题到时候, 你还可以去掉标题

:::demo 当遇到不需要 title 的场景时, 可以通过 isShowHeader 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 title 的值

```vue
<template>
  <ac-radio-group v-model="direction">
    <ac-radio label="left">从左往右开</ac-radio>
  <ac-radio label="right">从右往左开</ac-radio>
  <ac-radio label="top">从上往下开</ac-radio>
  <ac-radio label="bottom">从下往上开</ac-radio>
  </ac-radio-group>
  <ac-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</ac-button>
<ac-drawer
    v-model="drawer"
    :direction="direction"
    :clickMaskClose="true"
    :isShowHeader="false"
  >
    内容
  </ac-drawer>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    // 控制抽屉的展示
    let drawer = ref(false);
    let direction = ref("right");
    return {
      drawer,
      direction,
    };
  },
};
</script>
```

:::


## 自定义内容

和 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作

:::demo 标题title插槽和默认插槽

```vue
<template>
  <ac-radio-group v-model="direction">
    <ac-radio label="left">从左往右开</ac-radio>
  <ac-radio label="right">从右往左开</ac-radio>
  <ac-radio label="top">从上往下开</ac-radio>
  <ac-radio label="bottom">从下往上开</ac-radio>
  </ac-radio-group>
  <ac-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</ac-button>
<ac-drawer
    v-model="drawer"
    :direction="direction"
    :clickMaskClose="true"
  >
  <template v-slot:title> 我是title插槽内容 </template>
    我是默认插槽内容
  </ac-drawer>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    // 控制抽屉的展示
    let drawer = ref(false);
    let direction = ref("right");
    return {
      drawer,
      direction,
    };
  },
};
</script>
```

:::

## Attributes

| 参数            | 说明                             | 类型    | 可选值 | 默认值 |
| --------------- | -------------------------------- | ------- | ------ | ------ |
| v-model | 是否显示 Drawer                  | boolean | —      | false  |
| isShowHeader|是否显示抽屉头部内容| boolean  | —      |true |
| title           | Drawer 的标题，也可通过具名 slot| string  | —      |我是title|
| showCloseIcon|是否显示关闭小图标| boolean  | —      |true |
| mask|是否开启抽屉背景遮罩层| boolean  | —      |true |
| clickMaskClose|点击遮罩层关闭默认为true| boolean  | —      |true |
| direction           | 校验抽屉的4个方向| string  | left/right/top/bottom     |right|
| beforeClose|收父组件传递过来的关闭函数，会中断关闭抽屉的操作|function(done)，done 用于关闭 Drawer|—| — |

## Drawer Events

| name   | 说明                    |
| ------ | ----------------------- |
| shutDown | Drawer 关闭动画结束时的回调|


## Slot
|name|说明|
|-|-|
|—|Drawer 的内容|
|title|Drawer 标题区的内容|
