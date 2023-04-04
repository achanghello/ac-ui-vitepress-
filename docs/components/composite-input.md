# CompositeInput 复合输入框

可前置或后置元素，一般为标签或按钮

## 前置
:::demo 可通过 slot 来指定在 input 中前置内容。
```vue
<template>
  <ac-input placeholder="请输入内容" v-model="input">
    <template v-slot:prepend>
      <div class="prepend">
        Http://
      </div>
    </template>
  </ac-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style>
.prepend {
  background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
    height: 40px;
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
```
:::
## 后置
:::demo 
```vue
<template>
  <ac-input
  placeholder="请输入内容"
  v-model="input"
  >
  <template v-slot:append>
        <ac-button>首发</ac-button>
    </template>
</ac-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::
## 前后一起
:::demo
```vue
<template>
<div style="height:200px">
<ac-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
  <template v-slot:prepend>
                        <ac-select v-model="columnName">
                            <AcOption value="author" label="用户名"></AcOption>
                            <AcOption value="title" label="博客标题"></AcOption>
                            <AcOption value="tag" label="博客标签"></AcOption>
                            <AcOption value="type" label="博客类型"></AcOption>
                        </ac-select>
                    </template>
                    <template v-slot:append>
                        <AcButton type="primary" plain icon="ac-icon-jiazai">搜索</AcButton>
                    </template>
</ac-input>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      input: '',
      columnName: 'title'
    }
  }
}
</script>
```
:::

## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|type|类型|string|text和其他 原生 input 的 type 值|text|
|value / v-model|绑定值|string / number|—|—|
|placeholder|输入框占位文本|string|—|—|
|clearable|是否可清空	|boolean|—|false|
|show-password|是否显示切换密码图标|boolean|—|false|
|disabled|禁用|boolean|—|false|
|name|原生属性|string|—|—|

## Input Slots

|参数|说明|
|-|-|
|prepend|前置插槽|
|append|后置插槽|

