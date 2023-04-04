# Steps 步骤条

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

## 基础用法

简单的步骤条。

:::demo 设置active属性，接受一个Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置space属性即可，它接受Number，单位为px，如果不设置，则为自适应。设置finish-status属性可以改变已经完成的步骤的状态。

```vue
<template>
<div style="width:1000px">
<ac-steps :steps="steps" :currentStep="currentStep" />
</div>  
</template>

<script>
import {ref} from 'vue'
  export default {
    setup() {
      // steps
    const steps = ref(['Step 1', 'Step 2', 'Step 3', 'Step 4'])
    const currentStep = ref(3)
      return {
        steps,
        currentStep,
      };
    }
  }
</script>
```

:::


## Radio Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|steps|所有的步骤|数组|—|—|
|currentStep|当前进行到哪一步|number|—|0|