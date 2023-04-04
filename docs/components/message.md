Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo

```vue
<template>
  <ac-button :plain="true" @click="open2">成功</ac-button>
  <ac-button :plain="true" @click="open3">警告</ac-button>
  <ac-button :plain="true" @click="open4">错误</ac-button>
</template>
<script>
import { getCurrentInstance } from 'vue';
export default {
  setup(){
    const { appContext } = getCurrentInstance();
    const globalProperties = appContext.config.globalProperties;
    console.log("黄牛票",globalProperties)
    // 使用全局属性
    const message = globalProperties.$message;

    function open2(){
      message({
        text: "1111",
        type: "success",
      });
    }
    function open3(){
      message({
        text: "1111",
        type: "warn",
      });
    }
    function open4(){
      message({
        text: "1111",
        type: "error",
      });
    }
    return {
      open2,
      open3,
      open4
    }
  }
}
</script>
```

:::