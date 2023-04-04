import{a1 as _,_ as B,c as D,E as m,A as r,y as l,N as h,C,o as A,a as s}from"./chunks/framework.482956ad.js";const{defineComponent:b}=_,v=b({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:c,withCtx:o,createVNode:n,Fragment:y,openBlock:i,createElementBlock:p}=_;function E(t,a){const F=c("ac-radio");return i(),p(y,null,[n(F,{modelValue:t.radio,"onUpdate:modelValue":a[0]||(a[0]=d=>t.radio=d),label:"1"},{default:o(()=>[e("备选项")]),_:1},8,["modelValue"]),n(F,{modelValue:t.radio,"onUpdate:modelValue":a[1]||(a[1]=d=>t.radio=d),label:"2"},{default:o(()=>[e("备选项")]),_:1},8,["modelValue"])],64)}return{render:E,...{data(){return{radio:"1"}}}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:c,withCtx:o,createVNode:n,openBlock:y,createBlock:i}=_;function p(u,t){const a=c("ac-radio"),F=c("ac-radio-group");return y(),i(F,{modelValue:u.radio,"onUpdate:modelValue":t[0]||(t[0]=d=>u.radio=d)},{default:o(()=>[n(a,{label:3},{default:o(()=>[e("备选项")]),_:1}),n(a,{label:6},{default:o(()=>[e("备选项")]),_:1}),n(a,{label:9},{default:o(()=>[e("备选项")]),_:1})]),_:1},8,["modelValue"])}return{render:p,...{data(){return{radio:3}}}}}()}}),O=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md"}'),g=l("h1",{id:"radio-单选框",tabindex:"-1"},"Radio 单选框",-1),f=l("p",null,"在一组备选项中进行单选",-1),x=l("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),V=l("p",null,"由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。",-1),k=l("div",null,"要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。",-1),N=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"1"'),l("span",{style:{color:"#E1E4E8"}},">备选项</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"2"'),l("span",{style:{color:"#E1E4E8"}},">备选项</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        radio: "),l("span",{style:{color:"#9ECBFF"}},"'1'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"radio"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"1"'),l("span",{style:{color:"#24292E"}},">备选项</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"radio"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"2"'),l("span",{style:{color:"#24292E"}},">备选项</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"data"),l("span",{style:{color:"#24292E"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        radio: "),l("span",{style:{color:"#032F62"}},"'1'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),R=l("h2",{id:"单选框组",tabindex:"-1"},"单选框组",-1),w=l("p",null,"适用于在多个互斥的选项中选择的场景",-1),T=l("div",null,"结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。",-1),S=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"radio"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"3"'),l("span",{style:{color:"#E1E4E8"}},">备选项</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"6"'),l("span",{style:{color:"#E1E4E8"}},">备选项</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},":label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"9"'),l("span",{style:{color:"#E1E4E8"}},">备选项</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"data"),l("span",{style:{color:"#E1E4E8"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        radio: "),l("span",{style:{color:"#79B8FF"}},"3")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"radio"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"3"'),l("span",{style:{color:"#24292E"}},">备选项</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"6"'),l("span",{style:{color:"#24292E"}},">备选项</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},":label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"9"'),l("span",{style:{color:"#24292E"}},">备选项</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"data"),l("span",{style:{color:"#24292E"}}," () {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        radio: "),l("span",{style:{color:"#005CC5"}},"3")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),$=h('<h2 id="radio-attributes" tabindex="-1">Radio Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Radio 的 value</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',2);function U(e,c,o,n,y,i){const p=C("render-demo-0"),E=C("demo"),u=C("render-demo-1");return A(),D("div",null,[g,f,x,V,m(E,{customClass:"undefined",sourceCode:`<template>
  <ac-radio v-model="radio" label="1">备选项</ac-radio>
  <ac-radio v-model="radio" label="2">备选项</ac-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
<\/script>
`},{description:r(()=>[k]),highlight:r(()=>[N]),default:r(()=>[m(p)]),_:1}),R,w,m(E,{customClass:"undefined",sourceCode:`<template>
  <ac-radio-group v-model="radio">
    <ac-radio :label="3">备选项</ac-radio>
    <ac-radio :label="6">备选项</ac-radio>
    <ac-radio :label="9">备选项</ac-radio>
  </ac-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
<\/script>
`},{description:r(()=>[T]),highlight:r(()=>[S]),default:r(()=>[m(u)]),_:1}),$])}const P=B(v,[["render",U]]);export{O as __pageData,P as default};
