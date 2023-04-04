# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础用法

使用单一分栏创建基础的栅格布局。

:::demo 通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```vue
<template>
  <ac-row>
    <ac-col :span="24"><div class="grid-content bg-purple-dark"></div></ac-col>
  </ac-row>
  <ac-row>
  <ac-col :span="12"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="12"><div class="grid-content bg-purple-light"></div></ac-col>
</ac-row>
<ac-row>
  <ac-col :span="8"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="8"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="8"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple-light"></div></ac-col>
</ac-row>
<ac-row>
  <ac-col :span="4"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple-light"></div></ac-col>
</ac-row>
</template>
<style>
.ac-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.ac-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```

:::

## 分栏间隔

分栏之间存在间隔。

:::demo Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```vue
<template>
<ac-row :gutter="20">
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
</template>


<style>
  .ac-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ac-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

:::demo Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```vue
<template>
<ac-row :gutter="20">
  <ac-col :span="16"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="8"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row :gutter="20">
  <ac-col :span="8"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="8"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row :gutter="20">
  <ac-col :span="4"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="16"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="4"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
</template>
<style>
  .ac-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ac-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

## 分栏偏移

支持偏移指定的栏数。

:::demo 通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

```vue
<template>
<ac-row :gutter="20">
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row :gutter="20">
  <ac-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row :gutter="20">
  <ac-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
</template>
<style>
  .ac-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ac-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

## 对齐方式

通过 flex 布局来对分栏进行灵活的对齐。

:::demo 可通过 justify 属性来指定 start, end, space-around 其中的值来定义子元素的排版方式。

```vue
<template>
<ac-row class="row-bg">
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row class="row-bg" justify="end">
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row class="row-bg" justify="start">
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
<ac-row class="row-bg" justify="space-around">
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple-light"></div></ac-col>
  <ac-col :span="6"><div class="grid-content bg-purple"></div></ac-col>
</ac-row>
</template>
<style>
  .ac-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ac-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::
## Row Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|gutter|栅格间隔|number|—|0|
|justify|flex 布局下的水平排列方式|string|start/end/space-around|start|
|tag|自定义元素标签|string|*|div|

## Col Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|offset|栅格左侧的间隔格数|number|—|0|
|span|栅格占据的列数|number|—|24|
|tag|自定义元素标签|string|*|div|