# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

包含标题，内容和操作。

:::demo

```vue
<template>
  <ac-card class="box-card">
    <template v-slot:header>
      <span>卡片名称</span>
      <ac-button style="float: right;">操作按钮</ac-button>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
  </ac-card>
</template>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
```

:::

## 简单卡片

卡片可以只有内容区域。

:::demo

```vue
<template>
  <ac-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
  </ac-card>
</template>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
```

:::

## 卡片阴影

可对阴影的显示进行配置。

:::demo

```vue
<template>
  <ac-row :gutter="12">
    <ac-col :span="8">
      <ac-card shadow="always"> 总是显示 </ac-card>
    </ac-col>
    <ac-col :span="8">
      <ac-card shadow="hover"> 鼠标悬浮时显示 </ac-card>
    </ac-col>
    <ac-col :span="8">
      <ac-card shadow="never"> 从不显示 </ac-card>
    </ac-col>
  </ac-row>
</template>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ----- | ------- | -------------------------------------------------- | ------- |
| header    | 设置 header，也可以通过 slot#header 传入 DOM   | string  |  —   |  —  |
| body-style | 设置 body 的样式 | object | — | `{ padding: '20px' }`  |
| shadow | 设置阴影显示时机	 | string | always / hover / never | always   |

