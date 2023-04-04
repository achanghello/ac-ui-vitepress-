# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

## 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

:::demo 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch

```vue
<template>
  <ac-form :model="form" label-width="80px">
    <ac-form-item label="活动名称">
      <ac-input v-model="form.name" />
    </ac-form-item>

    <ac-form-item label="活动区域" class="select">
    <ac-select v-model="form.region" class="select-type">
      <ac-option label="区域一" value="shanghai"></ac-option>
      <ac-option label="区域二" value="beijing"></ac-option>
    </ac-select>
  </ac-form-item>
  <ac-form-item label="即时配送">
    <ac-switch v-model="form.delivery" active-color="#13ce66" inactive-color="#ff4949"></ac-switch>
  </ac-form-item>
  <ac-form-item label="活动性质">
    <ac-check-box-group v-model="form.type">
      <ac-check-box label="美食/餐厅线上活动" name="type"></ac-check-box>
      <ac-check-box label="地推活动" name="type"></ac-check-box>
      <ac-check-box label="线下主题活动" name="type"></ac-check-box>
      <ac-check-box label="单纯品牌曝光" name="type"></ac-check-box>
    </ac-check-box-group>
  </ac-form-item>
   <ac-form-item label="特殊资源">
    <ac-radio-group v-model="form.resource">
      <ac-radio label="线上品牌商赞助"></ac-radio>
      <ac-radio label="线下场地免费"></ac-radio>
    </ac-radio-group>
  </ac-form-item>
  <ac-form-item label="活动形式">
    <ac-textarea v-model="form.desc">
    <ac-button>哈喽哈喽</ac-button>
  </ac-textarea>
  </ac-form-item>
  <ac-form-item>
    <ac-button type="primary">立即创建</ac-button>
    <ac-button>取消</ac-button>
  </ac-form-item>
  </ac-form>
</template>
<script>
import { reactive,ref } from 'vue';
export default {
  setup() {
    const form = reactive({
      name: "",
      region: "",
      delivery: false,
      type: [],
      resource: "线上品牌商赞助",
      desc: "",
    });
    return {
      form,
    };
  },
};
</script>
<style>
.select .ac-form-item__content{
  overflow: visible!important;
}
</style>
```
:::

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

:::demo Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。校验规则参见

```vue
<template>
  <ac-form ref="form" :model="loginForm" :rules="rules" labelWidth="150px">
      <ac-form-item label="活动名称" prop="name">
        <ac-input
          placeholder="请输入活动名称"
          name="name"
          v-model="loginForm.name"
        ></ac-input>
      </ac-form-item>
      <ac-form-item label="活动区域" prop="region" class="select">
    <ac-select v-model="loginForm.region" class="select-type">
      <ac-option label="区域一" value="shanghai"></ac-option>
      <ac-option label="区域二" value="beijing"></ac-option>
    </ac-select>
  </ac-form-item>
  <p></p>
  <ac-form-item>
    <ac-button @click="submit">提交</ac-button>
  </ac-form-item>
    </ac-form>
    
</template>
<script>
import { reactive,ref } from 'vue';
export default {
  setup() {
    const loginForm = reactive({
      name: "",
      region: "",
    });
    const rules = {
      name: [{required:true,trigger: "submit"},{min:5,max:7,trigger: "change"}],
      region: [{required:true,trigger: "submit"},{required:true,trigger: "blur"}]
    }

    // 获得form表单元素
    const form = ref()
    function submit(){
      form.value.validate((res)=>{
        console.log("验证结果",res);
      })
    }
    return {
      loginForm,
      rules,
      submit,
      form
    };
  },
};
</script>
<style>
.select .ac-form-item__content{
  overflow: visible!important;
}
</style>
```
:::

## 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证

:::demo 这个例子中展示了如何使用自定义验证规则来完成密码的二次验证

```vue
<template>
  <ac-form ref="form" :model="loginForm" :rules="rules" labelWidth="150px">
      <ac-form-item label="邮箱" prop="email">
        <ac-input
          placeholder="请输入邮箱"
          name="email"
          v-model="loginForm.email"
        ></ac-input>
      </ac-form-item>
      <ac-form-item label="密码" prop="password">
        <ac-input
          placeholder="请输入密码"
          name="password"
          type="password"
          v-model="loginForm.password"
          showPassword
        ></ac-input>
      </ac-form-item>
      <AcButton @click="submit">提交</AcButton>
    </ac-form>
</template>
<script>
import { reactive,ref } from 'vue';
export default {
  setup() {
    const loginForm = reactive({
      email: "",
      password: "",
    });

    const validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      }else if (value === "常文彬哈哈哈") {
        callback(new Error("不能是我的名字"));
      } else {
        callback();
      }
    };
    const validateEmail2 = (rule, value, callback) => {
      if (value.length<5) {
        callback(new Error("长度不能小于五"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    const rules = {
      email: [{type:'email', len:17,trigger: "submit"},
              { validator: validateEmail, trigger: "submit" },
              { validator: validateEmail2, trigger: "submit" }],
      password: [{ validator: validatePassword, trigger: "submit" }],
    }

    // 获得form表单元素
    const form = ref()
    function submit(){
      form.value.validate((res)=>{
        console.log("验证结果",res);
      })
    }
    return {
      loginForm,
      rules,
      submit,
      form
    };
  },
};
</script>
```
:::


## Form Attributes

| 参数           | 说明                                             | 类型                                 | 可选值                | 默认值     |
| -------------- | ------------------------------------------------ | ------------------------------------ | --------------------- | ---------- |
| model        | 表单数据对象                                  | object                              | —                     | —      |
| rules   | 表单验证规则	                             | object                              | —                     | —        |
| label-width          | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。                 | string                               | —                     |  — |

## Form-Item Attributes

| name     | 说明                        |
| -------- | --------------------------- |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 |
| label | 标签文本 |