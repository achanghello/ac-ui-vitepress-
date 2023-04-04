# Upload 上传

通过点击上传文件

## 基础用法

基础的、简洁的文本域。

:::demo 

```vue
<template>
  <ac-upload
    class="avatar-uploader"
    name="blogImage"
    :multiple="false"
    :disabled="false"
    :onChange="onChange"
    :beforeUpload="beforeUpload"
    :onSuccess="onSuccess"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="ac-icon-jiazai avatar-uploader-icon"></i>
  </ac-upload>
</template>
<script>
import { ref } from 'vue';
  export default {
    setup(){
      // 下面是上传封面的模块
    const imageUrl = ref("");
    function onChange(file, arr) {
      console.log("很高兴认识你我是onchange函数", file, arr);
    }
    function beforeUpload(file) {
      console.log("根据返回值确定是否上传", file);
      return false;
    }
    function onSuccess(filepath) {
      console.log("上传成功", filepath);
      imageUrl.value = filepath;
    }
    return {
      // 上传图片相关的函数
      onChange,
      beforeUpload,
      onSuccess,
      imageUrl,
    }
    }
  };
</script>
```

:::

## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|name|上传的文件字段名|string|—|file|
|multiple|是否支持多选文件|boolean|—|—|
|accept|接受上传的文件类型|string|—|—|
|onChange|文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用|—|—|—|
|beforeUpload|上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。|—|—|—|
|onSuccess|文件上传成功时的钩子|—|—|—|

