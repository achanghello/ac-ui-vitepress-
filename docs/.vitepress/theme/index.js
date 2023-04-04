// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Button from './Button.vue'
import "./index.css"
import { useComponents } from './useComponents'
import './styles/index.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import { getCurrentInstance } from 'vue'
// 引入ui组件库
// import acui from "achang-ui"
import "achang-ui/dist/assets/style.css"
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // register global components
    // useComponents(ctx.app)
    ctx.app.component('Demo',Demo)
    ctx.app.component(Button.name,Button)
    console.log(ctx);
    // ctx.app.mounted = ()=>{
    //   console.log(4444);
    // }
    // ctx.app.use(acui)
    // setTimeout(()=>{
    //   console.log("光顾");
    //   ctx.app.use(acui)
    // },20)
    ctx.app.mixin({
      mounted(){
        console.log(this.name);
        // ctx.app.use(acui)
        import('achang-ui').then(function (m) {
          ctx.app.use(m)
          console.log(m);
        })
      }
    })
  }
}