<template>
  <div class="theme-container">
    <Content :custom-blocks="customBlocks" />
    <DemoBlock v-if="$page.frontmatter.demo" :demo="$page.frontmatter.demo" />
  </div>
</template>

<script>
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  components: {
    DemoBlock
  },
  computed: {
    customBlocks() {
      return {
        demo: {
          functional: true,
          render(h, { children, data }) {
            return h('demo-block', data, children)
          }
        }
      }
    }
  }
}
</script>
