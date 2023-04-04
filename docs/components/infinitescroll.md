# InfiniteScroll 无限滚动

滚动至底部时，加载更多数据。基于自定义指令。

## 基础用法

在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。

:::demo 

```vue
<template>
  <div
    class="infinite-list"
    v-infinite-scroll.loading.complated.immediate="load"
    style="overflow: auto"
    ref="infiniteList"
  >
    <ul>
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul>
    <p v-if="loading && !complated" class="text">加载中...</p>
    <p v-if="complated" class="text">没有更多了</p>
  </div>
</template>
<script>
import { ref } from 'vue';
  export default {
    setup(){
      // 无限滚动
    let count = ref(1),
      loading = ref(false),
      complated = ref(false);
    const load = () => {
      loading.value = true;
      setTimeout(() => {
        if (count.value >= 30) {
          complated.value = true;
          return;
        }
        count.value += 3;
        loading.value = false;
      }, 1000);
    };
    return {
      // 无限滚动
      count,
      loading,
      complated,
      load,
    }
    }
  };
</script>
<style lang="scss">
  .infinite-list {
    height: 300px;
    width: 500px;
    border: 1px solid red;
    li {
      height: 50px;
      background: #e8f3fe;
      margin: 10px;
      color: #7dbcfc;
      text-align: center;
      line-height: 50px;
    }
    .text {
      color: green;
      text-align: center;
      line-height: 50px;
    }
  }
</style>
```

:::

## Attributes

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|infinite-scroll-immediate|是否立即执行加载方法，以防初始状态下内容无法撑满容器。|boolean|—|true|
