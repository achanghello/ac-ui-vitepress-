import{a1 as d,_,c as h,E as B,A as y,y as l,N as w,C as b,o as g,a as s}from"./chunks/framework.482956ad.js";const{defineComponent:v}=d,k=v({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:r,withCtx:o,createVNode:n,Fragment:F,openBlock:C,createElementBlock:i}=d;function u(e,a){const c=r("ac-radio"),m=r("ac-radio-group"),D=r("ac-button"),A=r("ac-drawer");return C(),i(F,null,[n(m,{modelValue:e.direction,"onUpdate:modelValue":a[0]||(a[0]=E=>e.direction=E)},{default:o(()=>[n(c,{label:"left"},{default:o(()=>[t("从左往右开")]),_:1}),n(c,{label:"right"},{default:o(()=>[t("从右往左开")]),_:1}),n(c,{label:"top"},{default:o(()=>[t("从上往下开")]),_:1}),n(c,{label:"bottom"},{default:o(()=>[t("从下往上开")]),_:1})]),_:1},8,["modelValue"]),n(D,{onClick:a[1]||(a[1]=E=>e.drawer=!0),type:"primary",style:{"margin-left":"16px"}},{default:o(()=>[t(" 点我打开 ")]),_:1}),n(A,{modelValue:e.drawer,"onUpdate:modelValue":a[2]||(a[2]=E=>e.drawer=E),direction:e.direction,clickMaskClose:!0},{title:o(()=>[t(" 标题 ")]),default:o(()=>[t(" 内容 ")]),_:1},8,["modelValue","direction"])],64)}const{ref:p}=d;return{render:u,...{setup(){let e=p(!1),a=p("right");return{drawer:e,direction:a}}}}}(),"render-demo-1":function(){const{createTextVNode:t,resolveComponent:r,withCtx:o,createVNode:n,Fragment:F,openBlock:C,createElementBlock:i}=d;function u(e,a){const c=r("ac-radio"),m=r("ac-radio-group"),D=r("ac-button"),A=r("ac-drawer");return C(),i(F,null,[n(m,{modelValue:e.direction,"onUpdate:modelValue":a[0]||(a[0]=E=>e.direction=E)},{default:o(()=>[n(c,{label:"left"},{default:o(()=>[t("从左往右开")]),_:1}),n(c,{label:"right"},{default:o(()=>[t("从右往左开")]),_:1}),n(c,{label:"top"},{default:o(()=>[t("从上往下开")]),_:1}),n(c,{label:"bottom"},{default:o(()=>[t("从下往上开")]),_:1})]),_:1},8,["modelValue"]),n(D,{onClick:a[1]||(a[1]=E=>e.drawer=!0),type:"primary",style:{"margin-left":"16px"}},{default:o(()=>[t(" 点我打开 ")]),_:1}),n(A,{modelValue:e.drawer,"onUpdate:modelValue":a[2]||(a[2]=E=>e.drawer=E),direction:e.direction,clickMaskClose:!0,isShowHeader:!1},{default:o(()=>[t(" 内容 ")]),_:1},8,["modelValue","direction"])],64)}const{ref:p}=d;return{render:u,...{setup(){let e=p(!1),a=p("right");return{drawer:e,direction:a}}}}}(),"render-demo-2":function(){const{createTextVNode:t,resolveComponent:r,withCtx:o,createVNode:n,Fragment:F,openBlock:C,createElementBlock:i}=d;function u(e,a){const c=r("ac-radio"),m=r("ac-radio-group"),D=r("ac-button"),A=r("ac-drawer");return C(),i(F,null,[n(m,{modelValue:e.direction,"onUpdate:modelValue":a[0]||(a[0]=E=>e.direction=E)},{default:o(()=>[n(c,{label:"left"},{default:o(()=>[t("从左往右开")]),_:1}),n(c,{label:"right"},{default:o(()=>[t("从右往左开")]),_:1}),n(c,{label:"top"},{default:o(()=>[t("从上往下开")]),_:1}),n(c,{label:"bottom"},{default:o(()=>[t("从下往上开")]),_:1})]),_:1},8,["modelValue"]),n(D,{onClick:a[1]||(a[1]=E=>e.drawer=!0),type:"primary",style:{"margin-left":"16px"}},{default:o(()=>[t(" 点我打开 ")]),_:1}),n(A,{modelValue:e.drawer,"onUpdate:modelValue":a[2]||(a[2]=E=>e.drawer=E),direction:e.direction,clickMaskClose:!0},{title:o(()=>[t(" 我是title插槽内容 ")]),default:o(()=>[t(" 我是默认插槽内容 ")]),_:1},8,["modelValue","direction"])],64)}const{ref:p}=d;return{render:u,...{setup(){let e=p(!1),a=p("right");return{drawer:e,direction:a}}}}}()}}),K=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer.md"}'),x=l("h1",{id:"drawer-抽屉",tabindex:"-1"},"Drawer 抽屉",-1),V=l("p",null,"有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验.",-1),N=l("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),M=l("p",null,"呼出一个临时的侧边栏, 可以从多个方向呼出",-1),S=l("div",null,"需要设置 visible 属性，它接收 Boolean，当为 true 时显示 Dialog。title 属性用于定义标题，它是可选的，默认值为空。",-1),T=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"direction"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},">从左往右开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},">从右往左开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"top"'),l("span",{style:{color:"#E1E4E8"}},">从上往下开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"bottom"'),l("span",{style:{color:"#E1E4E8"}},">从下往上开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"drawer = true"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-left: 16px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  点我打开")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"ac-drawer")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"drawer"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":direction"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"direction"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":clickMaskClose"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"true"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-slot"),l("span",{style:{color:"#E1E4E8"}},":"),l("span",{style:{color:"#B392F0"}},"title"),l("span",{style:{color:"#E1E4E8"}},"> 标题 </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    内容")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"ac-drawer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'vue'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#6A737D"}},"// 控制抽屉的展示")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," drawer "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," direction "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      drawer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      direction,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"direction"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"left"'),l("span",{style:{color:"#24292E"}},">从左往右开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"right"'),l("span",{style:{color:"#24292E"}},">从右往左开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"top"'),l("span",{style:{color:"#24292E"}},">从上往下开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"bottom"'),l("span",{style:{color:"#24292E"}},">从下往上开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"drawer = true"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"style"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"margin-left: 16px;"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  点我打开")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"ac-drawer")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"drawer"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":direction"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"direction"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":clickMaskClose"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"true"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-slot"),l("span",{style:{color:"#24292E"}},":"),l("span",{style:{color:"#6F42C1"}},"title"),l("span",{style:{color:"#24292E"}},"> 标题 </"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    内容")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"ac-drawer"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'vue'"),l("span",{style:{color:"#24292E"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6A737D"}},"// 控制抽屉的展示")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," drawer "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," direction "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},'"right"'),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      drawer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      direction,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),U=l("h2",{id:"不添加-title",tabindex:"-1"},"不添加 Title",-1),$=l("p",null,"当你不需要标题到时候, 你还可以去掉标题",-1),H=l("div",null,"当遇到不需要 title 的场景时, 可以通过 isShowHeader 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 title 的值",-1),I=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"direction"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},">从左往右开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},">从右往左开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"top"'),l("span",{style:{color:"#E1E4E8"}},">从上往下开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"bottom"'),l("span",{style:{color:"#E1E4E8"}},">从下往上开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"drawer = true"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-left: 16px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  点我打开")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"ac-drawer")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"drawer"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":direction"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"direction"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":clickMaskClose"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"true"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":isShowHeader"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"false"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    内容")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"ac-drawer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'vue'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#6A737D"}},"// 控制抽屉的展示")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," drawer "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," direction "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      drawer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      direction,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"direction"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"left"'),l("span",{style:{color:"#24292E"}},">从左往右开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"right"'),l("span",{style:{color:"#24292E"}},">从右往左开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"top"'),l("span",{style:{color:"#24292E"}},">从上往下开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"bottom"'),l("span",{style:{color:"#24292E"}},">从下往上开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"drawer = true"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"style"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"margin-left: 16px;"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  点我打开")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"ac-drawer")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"drawer"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":direction"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"direction"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":clickMaskClose"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"true"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":isShowHeader"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"false"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    内容")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"ac-drawer"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'vue'"),l("span",{style:{color:"#24292E"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6A737D"}},"// 控制抽屉的展示")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," drawer "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," direction "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},'"right"'),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      drawer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      direction,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),P=l("h2",{id:"自定义内容",tabindex:"-1"},"自定义内容",-1),J=l("p",null,"和 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作",-1),O=l("div",null,"标题title插槽和默认插槽",-1),j=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"direction"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"left"'),l("span",{style:{color:"#E1E4E8"}},">从左往右开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},">从右往左开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"top"'),l("span",{style:{color:"#E1E4E8"}},">从上往下开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"label"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"bottom"'),l("span",{style:{color:"#E1E4E8"}},">从下往上开</"),l("span",{style:{color:"#85E89D"}},"ac-radio"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"ac-radio-group"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"drawer = true"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"style"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"margin-left: 16px;"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  点我打开")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"ac-drawer")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},"v-model"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"drawer"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":direction"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"direction"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#B392F0"}},":clickMaskClose"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"true"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-slot"),l("span",{style:{color:"#E1E4E8"}},":"),l("span",{style:{color:"#B392F0"}},"title"),l("span",{style:{color:"#E1E4E8"}},"> 我是title插槽内容 </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    我是默认插槽内容")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  </"),l("span",{style:{color:"#85E89D"}},"ac-drawer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'vue'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#6A737D"}},"// 控制抽屉的展示")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," drawer "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," direction "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#9ECBFF"}},'"right"'),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      drawer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      direction,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"direction"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"left"'),l("span",{style:{color:"#24292E"}},">从左往右开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"right"'),l("span",{style:{color:"#24292E"}},">从右往左开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"top"'),l("span",{style:{color:"#24292E"}},">从上往下开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"label"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"bottom"'),l("span",{style:{color:"#24292E"}},">从下往上开</"),l("span",{style:{color:"#22863A"}},"ac-radio"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"ac-radio-group"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"drawer = true"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"style"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"margin-left: 16px;"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  点我打开")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"ac-drawer")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},"v-model"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"drawer"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":direction"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"direction"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6F42C1"}},":clickMaskClose"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"true"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-slot"),l("span",{style:{color:"#24292E"}},":"),l("span",{style:{color:"#6F42C1"}},"title"),l("span",{style:{color:"#24292E"}},"> 我是title插槽内容 </"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    我是默认插槽内容")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  </"),l("span",{style:{color:"#22863A"}},"ac-drawer"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'vue'"),l("span",{style:{color:"#24292E"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#6A737D"}},"// 控制抽屉的展示")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," drawer "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," direction "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},'"right"'),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      drawer,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      direction,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),q=w('<h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否显示 Drawer</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>isShowHeader</td><td>是否显示抽屉头部内容</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>title</td><td>Drawer 的标题，也可通过具名 slot</td><td>string</td><td>—</td><td>我是title</td></tr><tr><td>showCloseIcon</td><td>是否显示关闭小图标</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>mask</td><td>是否开启抽屉背景遮罩层</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clickMaskClose</td><td>点击遮罩层关闭默认为true</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>校验抽屉的4个方向</td><td>string</td><td>left/right/top/bottom</td><td>right</td></tr><tr><td>beforeClose</td><td>收父组件传递过来的关闭函数，会中断关闭抽屉的操作</td><td>function(done)，done 用于关闭 Drawer</td><td>—</td><td>—</td></tr></tbody></table><h2 id="drawer-events" tabindex="-1">Drawer Events</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>shutDown</td><td>Drawer 关闭动画结束时的回调</td></tr></tbody></table><h2 id="slot" tabindex="-1">Slot</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Drawer 的内容</td></tr><tr><td>title</td><td>Drawer 标题区的内容</td></tr></tbody></table>',6);function z(t,r,o,n,F,C){const i=b("render-demo-0"),u=b("demo"),p=b("render-demo-1"),f=b("render-demo-2");return g(),h("div",null,[x,V,N,M,B(u,{customClass:"undefined",sourceCode:`<template>
  <ac-radio-group v-model="direction">
    <ac-radio label="left">从左往右开</ac-radio>
  <ac-radio label="right">从右往左开</ac-radio>
  <ac-radio label="top">从上往下开</ac-radio>
  <ac-radio label="bottom">从下往上开</ac-radio>
  </ac-radio-group>
  <ac-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</ac-button>
<ac-drawer
    v-model="drawer"
    :direction="direction"
    :clickMaskClose="true"
  >
    <template v-slot:title> 标题 </template>
    内容
  </ac-drawer>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    // 控制抽屉的展示
    let drawer = ref(false);
    let direction = ref("right");
    return {
      drawer,
      direction,
    };
  },
};
<\/script>
`},{description:y(()=>[S]),highlight:y(()=>[T]),default:y(()=>[B(i)]),_:1}),U,$,B(u,{customClass:"undefined",sourceCode:`<template>
  <ac-radio-group v-model="direction">
    <ac-radio label="left">从左往右开</ac-radio>
  <ac-radio label="right">从右往左开</ac-radio>
  <ac-radio label="top">从上往下开</ac-radio>
  <ac-radio label="bottom">从下往上开</ac-radio>
  </ac-radio-group>
  <ac-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</ac-button>
<ac-drawer
    v-model="drawer"
    :direction="direction"
    :clickMaskClose="true"
    :isShowHeader="false"
  >
    内容
  </ac-drawer>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    // 控制抽屉的展示
    let drawer = ref(false);
    let direction = ref("right");
    return {
      drawer,
      direction,
    };
  },
};
<\/script>
`},{description:y(()=>[H]),highlight:y(()=>[I]),default:y(()=>[B(p)]),_:1}),P,J,B(u,{customClass:"undefined",sourceCode:`<template>
  <ac-radio-group v-model="direction">
    <ac-radio label="left">从左往右开</ac-radio>
  <ac-radio label="right">从右往左开</ac-radio>
  <ac-radio label="top">从上往下开</ac-radio>
  <ac-radio label="bottom">从下往上开</ac-radio>
  </ac-radio-group>
  <ac-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</ac-button>
<ac-drawer
    v-model="drawer"
    :direction="direction"
    :clickMaskClose="true"
  >
  <template v-slot:title> 我是title插槽内容 </template>
    我是默认插槽内容
  </ac-drawer>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    // 控制抽屉的展示
    let drawer = ref(false);
    let direction = ref("right");
    return {
      drawer,
      direction,
    };
  },
};
<\/script>
`},{description:y(()=>[O]),highlight:y(()=>[j]),default:y(()=>[B(f)]),_:1}),q])}const L=_(k,[["render",z]]);export{K as __pageData,L as default};
