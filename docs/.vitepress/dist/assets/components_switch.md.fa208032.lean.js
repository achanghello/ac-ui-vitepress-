import{a1 as n,_ as F,c as m,E as u,A as e,y as s,N as B,C as i,o as C,a as l}from"./chunks/framework.482956ad.js";const{defineComponent:_}=n,f=_({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,openBlock:a,createBlock:r}=n;function p(o,t){const d=c("AcSwitch");return a(),r(d,{modelValue:o.checkBoxVal,"onUpdate:modelValue":t[0]||(t[0]=h=>o.checkBoxVal=h),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])}const{ref:E}=n;return{render:p,...{setup(){return{checkBoxVal:E(!0)}}}}}()}}),S=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md"}'),A=s("h1",{id:"switch-开关",tabindex:"-1"},"Switch 开关",-1),v=s("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1),D=s("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),x=s("p",null,"简单的步骤条。",-1),k=s("div",null,"绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。",-1),V=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AcSwitch"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"checkBoxVal"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"active-color"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#13ce66"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"inactive-color"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"#ff4949"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AcSwitch"),s("span",{style:{color:"#E1E4E8"}},"> ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," {ref} "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," checkBoxVal "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        checkBoxVal")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AcSwitch"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"checkBoxVal"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"active-color"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"#13ce66"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"inactive-color"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"#ff4949"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AcSwitch"),s("span",{style:{color:"#24292E"}},"> ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," {ref} "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," checkBoxVal "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        checkBoxVal")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),w=B('<h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>active-color</td><td>switch 打开时的背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-color</td><td>switch 关闭时的背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',2);function b(c,a,r,p,E,y){const o=i("render-demo-0"),t=i("demo");return C(),m("div",null,[A,v,D,x,u(t,{customClass:"undefined",sourceCode:`<template>
<AcSwitch v-model="checkBoxVal" active-color="#13ce66" inactive-color="#ff4949"></AcSwitch> 
</template>

<script>
import {ref} from 'vue'
  export default {
    setup() {
      let checkBoxVal = ref(true)
      return {
        checkBoxVal
      };
    }
  }
<\/script>
`},{description:e(()=>[k]),highlight:e(()=>[V]),default:e(()=>[u(o)]),_:1}),w])}const N=F(f,[["render",b]]);export{S as __pageData,N as default};
