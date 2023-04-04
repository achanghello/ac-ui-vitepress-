import{a1 as C,_ as f,c as k,E as m,A as u,y as s,N as g,C as A,o as N,a as l}from"./chunks/framework.482956ad.js";const{defineComponent:D}=C,x=D({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:n,resolveComponent:p,withCtx:o,createVNode:t,openBlock:i,createBlock:F}=C;function E(a,e){const c=p("ac-tab-pane"),b=p("ac-tabs");return i(),F(b,{modelValue:a.activeName,"onUpdate:modelValue":e[0]||(e[0]=B=>a.activeName=B),onTabClick:a.handleClick},{default:o(()=>[t(c,{label:"用户管理",name:"first"},{default:o(()=>[n("用户管理")]),_:1}),t(c,{label:"配置管理",name:"second"},{default:o(()=>[n("配置管理")]),_:1}),t(c,{label:"角色管理",name:"third"},{default:o(()=>[n("角色管理")]),_:1}),t(c,{label:"定时任务补偿",name:"fourth"},{default:o(()=>[n("定时任务补偿")]),_:1})]),_:1},8,["modelValue","onTabClick"])}return{render:E,...{data(){return{activeName:"second"}},methods:{handleClick(a,e){console.log(a,e)}}}}}(),"render-demo-1":function(){const{createTextVNode:n,resolveComponent:p,withCtx:o,createVNode:t,openBlock:i,createBlock:F}=C;function E(a,e){const c=p("ac-tab-pane"),b=p("ac-tabs");return i(),F(b,{modelValue:a.activeName,"onUpdate:modelValue":e[0]||(e[0]=B=>a.activeName=B),type:"border",onTabClick:a.handleClick},{default:o(()=>[t(c,{label:"用户管理",name:"first"},{default:o(()=>[n("用户管理")]),_:1}),t(c,{label:"配置管理",name:"second"},{default:o(()=>[n("配置管理")]),_:1}),t(c,{label:"角色管理",name:"third"},{default:o(()=>[n("角色管理")]),_:1}),t(c,{label:"定时任务补偿",name:"fourth"},{default:o(()=>[n("定时任务补偿")]),_:1})]),_:1},8,["modelValue","onTabClick"])}return{render:E,...{data(){return{activeName:"second"}},methods:{handleClick(a,e){console.log(a,e)}}}}}(),"render-demo-2":function(){const{renderList:n,Fragment:p,openBlock:o,createElementBlock:t,toDisplayString:i,createTextVNode:F,resolveComponent:E,withCtx:r,createBlock:a}=C;function e(d,h){const _=E("ac-tab-pane"),v=E("ac-tabs");return o(),a(v,{modelValue:d.activeName,"onUpdate:modelValue":h[0]||(h[0]=y=>d.activeName=y),type:"border",onTabClick:d.handleClick},{default:r(()=>[(o(!0),t(p,null,n(d.arr,y=>(o(),a(_,{key:y.name,label:y.label,name:y.name},{default:r(()=>[F(i(y.label),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue","onTabClick"])}const{reactive:c,ref:b}=C,B=D({setup(){let d=c([{label:"首页",name:"first"},{label:"博客",name:"second"},{label:"留言",name:"third"},{label:"日记",name:"fourth"},{label:"甲乙",name:"fifth"}]);return{activeName:b("second"),handleClick:(v,y)=>{console.log("------------",v,y)},arr:d}}});return{render:e,...B}}()}}),I=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md"}'),V=s("h1",{id:"tabs-标签页",tabindex:"-1"},"Tabs 标签页",-1),T=s("p",null,"分隔内容上有关联但属于不同类别的数据集合。",-1),w=s("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),S=s("p",null,"基础的、简洁的标签页。",-1),$=s("div",null,"Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。",-1),U=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"ac-tabs"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"activeName"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@tab-click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleClick"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"用户管理"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"first"'),s("span",{style:{color:"#E1E4E8"}},">用户管理</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"配置管理"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"second"'),s("span",{style:{color:"#E1E4E8"}},">配置管理</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"角色管理"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"third"'),s("span",{style:{color:"#E1E4E8"}},">角色管理</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"定时任务补偿"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fourth"'),s("span",{style:{color:"#E1E4E8"}},">定时任务补偿</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"ac-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        activeName: "),s("span",{style:{color:"#9ECBFF"}},"'second'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"handleClick"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"tab"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"event"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(tab, event);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"ac-tabs"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"activeName"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@tab-click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleClick"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"用户管理"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"first"'),s("span",{style:{color:"#24292E"}},">用户管理</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"配置管理"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"second"'),s("span",{style:{color:"#24292E"}},">配置管理</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"角色管理"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"third"'),s("span",{style:{color:"#24292E"}},">角色管理</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"定时任务补偿"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fourth"'),s("span",{style:{color:"#24292E"}},">定时任务补偿</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"ac-tabs"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"data"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        activeName: "),s("span",{style:{color:"#032F62"}},"'second'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"handleClick"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"tab"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"event"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(tab, event);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),L=s("h2",{id:"选项卡样式",tabindex:"-1"},"选项卡样式",-1),J=s("p",null,"选项卡样式的标签页。",-1),O=s("div",null,"只需要设置 type 属性为 border 就可以使选项卡改变为标签风格。",-1),P=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"ac-tabs"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"activeName"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"border"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@tab-click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleClick"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"用户管理"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"first"'),s("span",{style:{color:"#E1E4E8"}},">用户管理</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"配置管理"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"second"'),s("span",{style:{color:"#E1E4E8"}},">配置管理</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"角色管理"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"third"'),s("span",{style:{color:"#E1E4E8"}},">角色管理</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"定时任务补偿"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fourth"'),s("span",{style:{color:"#E1E4E8"}},">定时任务补偿</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"ac-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        activeName: "),s("span",{style:{color:"#9ECBFF"}},"'second'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"handleClick"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"tab"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"event"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(tab, event);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"ac-tabs"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"activeName"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"border"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@tab-click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleClick"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"用户管理"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"first"'),s("span",{style:{color:"#24292E"}},">用户管理</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"配置管理"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"second"'),s("span",{style:{color:"#24292E"}},">配置管理</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"角色管理"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"third"'),s("span",{style:{color:"#24292E"}},">角色管理</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"定时任务补偿"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fourth"'),s("span",{style:{color:"#24292E"}},">定时任务补偿</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"ac-tabs"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"data"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        activeName: "),s("span",{style:{color:"#032F62"}},"'second'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"handleClick"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"tab"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"event"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(tab, event);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),R=s("h2",{id:"pane循环",tabindex:"-1"},"pane循环",-1),j=s("p",null,"选项卡样式的标签页。",-1),q=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"ac-tabs"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"activeName"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"type"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"border"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@tab-click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"handleClick"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item in arr"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.name"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":label"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},":name"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item.name"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        >{{ item.label }}</"),s("span",{style:{color:"#85E89D"}},"ac-tab-pane")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"ac-tabs"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { reactive, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineComponent"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," arr "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"reactive"),s("span",{style:{color:"#E1E4E8"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            label:"),s("span",{style:{color:"#9ECBFF"}},'"首页"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name:"),s("span",{style:{color:"#9ECBFF"}},'"first"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            label:"),s("span",{style:{color:"#9ECBFF"}},'"博客"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name:"),s("span",{style:{color:"#9ECBFF"}},'"second"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            label:"),s("span",{style:{color:"#9ECBFF"}},'"留言"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name:"),s("span",{style:{color:"#9ECBFF"}},'"third"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            label:"),s("span",{style:{color:"#9ECBFF"}},'"日记"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name:"),s("span",{style:{color:"#9ECBFF"}},'"fourth"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            label:"),s("span",{style:{color:"#9ECBFF"}},'"甲乙"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            name:"),s("span",{style:{color:"#9ECBFF"}},'"fifth"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," activeName "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'second'"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"handleClick"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"tab"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"event"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'------------'"),s("span",{style:{color:"#E1E4E8"}},", tab, event);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// arr.pop()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        activeName,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        handleClick,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        arr")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"ac-tabs"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"activeName"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"type"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"border"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@tab-click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"handleClick"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"ac-tab-pane")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item in arr"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":key"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item.name"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":label"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item.label"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},":name"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item.name"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        >{{ item.label }}</"),s("span",{style:{color:"#22863A"}},"ac-tab-pane")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"ac-tabs"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { reactive, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineComponent"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," arr "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"reactive"),s("span",{style:{color:"#24292E"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            label:"),s("span",{style:{color:"#032F62"}},'"首页"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            name:"),s("span",{style:{color:"#032F62"}},'"first"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            label:"),s("span",{style:{color:"#032F62"}},'"博客"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            name:"),s("span",{style:{color:"#032F62"}},'"second"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            label:"),s("span",{style:{color:"#032F62"}},'"留言"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            name:"),s("span",{style:{color:"#032F62"}},'"third"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            label:"),s("span",{style:{color:"#032F62"}},'"日记"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            name:"),s("span",{style:{color:"#032F62"}},'"fourth"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            label:"),s("span",{style:{color:"#032F62"}},'"甲乙"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            name:"),s("span",{style:{color:"#032F62"}},'"fifth"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," activeName "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'second'"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"handleClick"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"tab"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"event"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'------------'"),s("span",{style:{color:"#24292E"}},", tab, event);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// arr.pop()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        activeName,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        handleClick,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        arr")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),z=g('<h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Radio 的 value</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',2);function G(n,p,o,t,i,F){const E=A("render-demo-0"),r=A("demo"),a=A("render-demo-1"),e=A("render-demo-2");return N(),k("div",null,[V,T,w,S,m(r,{customClass:"undefined",sourceCode:`<template>
  <ac-tabs v-model="activeName" @tab-click="handleClick">
    <ac-tab-pane label="用户管理" name="first">用户管理</ac-tab-pane>
    <ac-tab-pane label="配置管理" name="second">配置管理</ac-tab-pane>
    <ac-tab-pane label="角色管理" name="third">角色管理</ac-tab-pane>
    <ac-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</ac-tab-pane>
  </ac-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
<\/script>
`},{description:u(()=>[$]),highlight:u(()=>[U]),default:u(()=>[m(E)]),_:1}),L,J,m(r,{customClass:"undefined",sourceCode:`<template>
  <ac-tabs v-model="activeName" type="border" @tab-click="handleClick">
    <ac-tab-pane label="用户管理" name="first">用户管理</ac-tab-pane>
    <ac-tab-pane label="配置管理" name="second">配置管理</ac-tab-pane>
    <ac-tab-pane label="角色管理" name="third">角色管理</ac-tab-pane>
    <ac-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</ac-tab-pane>
  </ac-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
<\/script>
`},{description:u(()=>[O]),highlight:u(()=>[P]),default:u(()=>[m(a)]),_:1}),R,j,m(r,{customClass:"undefined",sourceCode:`<template>
  <ac-tabs v-model="activeName" type="border" @tab-click="handleClick">
    <ac-tab-pane
        v-for="item in arr"
        :key="item.name"
        :label="item.label"
        :name="item.name"
        >{{ item.label }}</ac-tab-pane
      >
  </ac-tabs>
</template>
<script lang="ts">
import { reactive, ref } from 'vue';
export default defineComponent({
  setup() {
      
    let arr = reactive([
        {
            label:"首页",
            name:"first",
        },
        {
            label:"博客",
            name:"second",
        },
        {
            label:"留言",
            name:"third",
        },
        {
            label:"日记",
            name:"fourth",
        },
        {
            label:"甲乙",
            name:"fifth",
        }
    ])
    let activeName = ref('second')
    const handleClick = (tab, event) => {
        console.log('------------', tab, event);
        // arr.pop()
    }
    return {
        activeName,
        handleClick,
        arr
    }
  }
});
<\/script>
`},{highlight:u(()=>[q]),default:u(()=>[m(e)]),_:1}),z])}const K=f(x,[["render",G]]);export{I as __pageData,K as default};
