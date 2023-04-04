# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。

```vue
<template>
  <div>
    <ac-button>默认按钮</ac-button>
    <ac-button type="primary">主要按钮</ac-button>
    <ac-button type="success">成功按钮</ac-button>
    <ac-button type="info">信息按钮</ac-button>
    <ac-button type="warning">警告按钮</ac-button>
    <ac-button type="danger">危险按钮</ac-button>
  </div>
  <div>
    <ac-button plain>Default</ac-button>
    <ac-button plain type="primary">Primary</ac-button>
    <ac-button plain type="success">Success</ac-button>
    <ac-button plain type="info">Info</ac-button>
    <ac-button plain type="warning">Warning</ac-button>
    <ac-button plain type="danger">Danger</ac-button>
  </div>
  <div>
    <ac-button round>Default</ac-button>
    <ac-button round type="primary">Primary</ac-button>
    <ac-button round type="success">Success</ac-button>
    <ac-button round type="info">Info</ac-button>
    <ac-button round type="warning">Warning</ac-button>
    <ac-button round type="danger">Danger</ac-button>
  </div>
  <div>
    <ac-button circle icon="ac-icon-jiazai"></ac-button>
    <ac-button circle type="primary" icon="ac-icon-jiazai"></ac-button>
    <ac-button circle type="success" icon="ac-icon-jiazai"></ac-button>
    <ac-button circle type="info" icon="ac-icon-jiazai"></ac-button>
    <ac-button circle type="warning" icon="ac-icon-jiazai"></ac-button>
    <ac-button circle type="danger" icon="ac-icon-jiazai"></ac-button>
  </div>
</template>
```

:::

## 禁用状态

按钮不可用状态。

:::demo 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。

```vue
<template>
  <div>
    <ac-button disabled>Default</ac-button>
    <ac-button disabled type="primary">Primary</ac-button>
    <ac-button disabled type="success">Success</ac-button>
    <ac-button disabled type="info">Info</ac-button>
    <ac-button disabled type="warning">Warning</ac-button>
    <ac-button disabled type="danger">Danger</ac-button>
  </div>
</template>
```

:::

## 加载中

点击按钮进行数据加载操作，在按钮上面显示加载状态。

:::demo 要设置为 loading 状态，只要设置loading属性为true即可。

```vue
<template>
  <div>
    <ac-button type="primary" :loading="true">加载中</ac-button>
  </div>
</template>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ----- | ------- | -------------------------------------------------- | ------- |
| type    | 类型   | string  | primary / success / warning / info / danger  | default |
| loading | 加载中 | boolean | —                                                  | false   |
| plain | 是否朴素按钮	 | boolean | —                                                  | false   |
| round	 | 是否圆角按钮	 | boolean | —                                                  | false   |
| circle | 是否圆形按钮	 | boolean | —                                                  | false   |
| disabled | 加载中 | 是否禁用状态	 | —                                                  | false   |
