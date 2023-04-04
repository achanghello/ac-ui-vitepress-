import{a1 as b,_,c as h,E as m,A as i,y as l,N as g,C,o as k,a as s}from"./chunks/framework.482956ad.js";const{defineComponent:x}=b,N=x({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:p,resolveComponent:r,withCtx:e,createVNode:a,createElementVNode:n,Fragment:v,openBlock:u,createElementBlock:y}=b,d=n("ul",null,[n("li",null,"1"),n("li",null,"2"),n("li",null,"3")],-1);function F(c,o){const t=r("ac-button"),D=r("ac-dialog");return u(),y(v,null,[a(t,{onClick:o[0]||(o[0]=E=>c.visible=!0)},{default:e(()=>[p("打开对话框")]),_:1}),a(D,{visible:c.visible,"onUpdate:visible":o[3]||(o[3]=E=>c.visible=E),title:"标题配资"},{footer:e(()=>[a(t,{type:"primary",onClick:o[1]||(o[1]=E=>c.visible=!1)},{default:e(()=>[p("确定")]),_:1}),a(t,{onClick:o[2]||(o[2]=E=>c.visible=!1)},{default:e(()=>[p("取消")]),_:1})]),default:e(()=>[d]),_:1},8,["visible"])],64)}const{ref:B}=b;return{render:F,...{setup(){return{visible:B(!1)}}}}}(),"render-demo-1":function(){const{createTextVNode:p,resolveComponent:r,withCtx:e,createVNode:a,createElementVNode:n,Fragment:v,openBlock:u,createElementBlock:y}=b,d=n("h1",null,"我是标题",-1),F=n("ul",null,[n("li",null,"1"),n("li",null,"2"),n("li",null,"3")],-1);function B(o,t){const D=r("ac-button"),E=r("ac-dialog");return u(),y(v,null,[a(D,{onClick:t[0]||(t[0]=A=>o.visible=!0)},{default:e(()=>[p("打开对话框")]),_:1}),a(E,{visible:o.visible,"onUpdate:visible":t[3]||(t[3]=A=>o.visible=A)},{title:e(()=>[d]),footer:e(()=>[a(D,{type:"primary",onClick:t[1]||(t[1]=A=>o.visible=!1)},{default:e(()=>[p("确定")]),_:1}),a(D,{onClick:t[2]||(t[2]=A=>o.visible=!1)},{default:e(()=>[p("取消")]),_:1})]),default:e(()=>[F]),_:1},8,["visible"])],64)}const{ref:f}=b;return{render:B,...{setup(){return{visible:f(!1)}}}}}(),"render-demo-2":function(){const{createTextVNode:p,resolveComponent:r,withCtx:e,createVNode:a,createElementVNode:n,Fragment:v,openBlock:u,createElementBlock:y}=b,d=n("ul",null,[n("li",null,"1"),n("li",null,"2"),n("li",null,"3")],-1);function F(c,o){const t=r("ac-button"),D=r("ac-dialog");return u(),y(v,null,[a(t,{onClick:o[0]||(o[0]=E=>c.visible=!0)},{default:e(()=>[p("打开对话框")]),_:1}),a(D,{visible:c.visible,"onUpdate:visible":o[3]||(o[3]=E=>c.visible=E),width:"20%",top:"20vh",title:"标题配资"},{footer:e(()=>[a(t,{type:"primary",onClick:o[1]||(o[1]=E=>c.visible=!1)},{default:e(()=>[p("确定")]),_:1}),a(t,{onClick:o[2]||(o[2]=E=>c.visible=!1)},{default:e(()=>[p("取消")]),_:1})]),default:e(()=>[d]),_:1},8,["visible"])],64)}const{ref:B}=b;return{render:F,...{setup(){return{visible:B(!1)}}}}}()}}),M=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md"}'),V=l("h1",{id:"dialog-对话框",tabindex:"-1"},"Dialog 对话框",-1),w=l("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),$=l("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),T=l("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1),S=l("div",null,"需要设置visible属性，它接收Boolean，当为true时显示 Dialog。title属性用于定义标题，它是可选的，默认值为空。",-1),U=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = true"'),l("span",{style:{color:"#E1E4E8"}},">打开对话框</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-dialog"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model:visible"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"标题配资"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"ul"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"ul"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-slot"),l("span",{style:{color:"#E1E4E8"}},":"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = false"'),l("span",{style:{color:"#E1E4E8"}},">确定</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = false"'),l("span",{style:{color:"#E1E4E8"}},">取消</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"ac-dialog"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'vue'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," visible "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      visible,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = true"'),l("span",{style:{color:"#24292E"}},">打开对话框</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-dialog"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model:visible"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"title"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"标题配资"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"ul"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">1</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">2</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">3</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"ul"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-slot"),l("span",{style:{color:"#24292E"}},":"),l("span",{style:{color:"#6F42C1"}},"footer"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = false"'),l("span",{style:{color:"#24292E"}},">确定</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = false"'),l("span",{style:{color:"#24292E"}},">取消</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"ac-dialog"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'vue'"),l("span",{style:{color:"#24292E"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," visible "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      visible,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),J=l("h2",{id:"自定义内容",tabindex:"-1"},"自定义内容",-1),O=l("p",null,"Dialog 组件的内容可以是任意的",-1),P=l("div",null,"Dialog 分为三个部分：title,body和footer，title和footer需要具名为title和footer的slot。",-1),j=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = true"'),l("span",{style:{color:"#E1E4E8"}},">打开对话框</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-dialog"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model:visible"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-slot"),l("span",{style:{color:"#E1E4E8"}},":"),l("span",{style:{color:"#B392F0"}},"title"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"h1"),l("span",{style:{color:"#E1E4E8"}},">我是标题</"),l("span",{style:{color:"#85E89D"}},"h1"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"ul"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"ul"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-slot"),l("span",{style:{color:"#E1E4E8"}},":"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = false"'),l("span",{style:{color:"#E1E4E8"}},">确定</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = false"'),l("span",{style:{color:"#E1E4E8"}},">取消</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"ac-dialog"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'vue'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," visible "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      visible,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = true"'),l("span",{style:{color:"#24292E"}},">打开对话框</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-dialog"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model:visible"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-slot"),l("span",{style:{color:"#24292E"}},":"),l("span",{style:{color:"#6F42C1"}},"title"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"h1"),l("span",{style:{color:"#24292E"}},">我是标题</"),l("span",{style:{color:"#22863A"}},"h1"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"ul"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">1</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">2</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">3</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"ul"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-slot"),l("span",{style:{color:"#24292E"}},":"),l("span",{style:{color:"#6F42C1"}},"footer"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = false"'),l("span",{style:{color:"#24292E"}},">确定</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = false"'),l("span",{style:{color:"#24292E"}},">取消</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"ac-dialog"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'vue'"),l("span",{style:{color:"#24292E"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," visible "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      visible,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),q=l("h2",{id:"大小和距离顶部距离",tabindex:"-1"},"大小和距离顶部距离",-1),z=l("p",null,"Dialog 大小和距离顶部距离。",-1),G=l("div",null,"需要设置width和top属性，它接收百分数和vh。",-1),H=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = true"'),l("span",{style:{color:"#E1E4E8"}},">打开对话框</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"ac-dialog"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-model:visible"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"width"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"20%"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"top"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"20vh"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"title"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"标题配资"'),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"ul"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">1</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">2</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">3</"),l("span",{style:{color:"#85E89D"}},"li"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"ul"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      <"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"v-slot"),l("span",{style:{color:"#E1E4E8"}},":"),l("span",{style:{color:"#B392F0"}},"footer"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"type"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"primary"'),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = false"'),l("span",{style:{color:"#E1E4E8"}},">确定</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"        <"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"@click"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"visible = false"'),l("span",{style:{color:"#E1E4E8"}},">取消</"),l("span",{style:{color:"#85E89D"}},"ac-button"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      </"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    </"),l("span",{style:{color:"#85E89D"}},"ac-dialog"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"template"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"import"),l("span",{style:{color:"#E1E4E8"}}," { ref } "),l("span",{style:{color:"#F97583"}},"from"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#9ECBFF"}},"'vue'"),l("span",{style:{color:"#E1E4E8"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F97583"}},"export"),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#F97583"}},"default"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  "),l("span",{style:{color:"#B392F0"}},"setup"),l("span",{style:{color:"#E1E4E8"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"let"),l("span",{style:{color:"#E1E4E8"}}," visible "),l("span",{style:{color:"#F97583"}},"="),l("span",{style:{color:"#E1E4E8"}}," "),l("span",{style:{color:"#B392F0"}},"ref"),l("span",{style:{color:"#E1E4E8"}},"("),l("span",{style:{color:"#79B8FF"}},"false"),l("span",{style:{color:"#E1E4E8"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    "),l("span",{style:{color:"#F97583"}},"return"),l("span",{style:{color:"#E1E4E8"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"      visible,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"script"),l("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = true"'),l("span",{style:{color:"#24292E"}},">打开对话框</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  <"),l("span",{style:{color:"#22863A"}},"ac-dialog"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-model:visible"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"width"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"20%"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"top"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"20vh"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"title"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"标题配资"'),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"ul"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">1</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">2</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">3</"),l("span",{style:{color:"#22863A"}},"li"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"ul"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      <"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"v-slot"),l("span",{style:{color:"#24292E"}},":"),l("span",{style:{color:"#6F42C1"}},"footer"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"type"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"primary"'),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = false"'),l("span",{style:{color:"#24292E"}},">确定</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"        <"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"@click"),l("span",{style:{color:"#24292E"}},"="),l("span",{style:{color:"#032F62"}},'"visible = false"'),l("span",{style:{color:"#24292E"}},">取消</"),l("span",{style:{color:"#22863A"}},"ac-button"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      </"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    </"),l("span",{style:{color:"#22863A"}},"ac-dialog"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"template"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"<"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"import"),l("span",{style:{color:"#24292E"}}," { ref } "),l("span",{style:{color:"#D73A49"}},"from"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"'vue'"),l("span",{style:{color:"#24292E"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#D73A49"}},"export"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"default"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6F42C1"}},"setup"),l("span",{style:{color:"#24292E"}},"() {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"let"),l("span",{style:{color:"#24292E"}}," visible "),l("span",{style:{color:"#D73A49"}},"="),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"ref"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#005CC5"}},"false"),l("span",{style:{color:"#24292E"}},");")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    "),l("span",{style:{color:"#D73A49"}},"return"),l("span",{style:{color:"#24292E"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"      visible,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"    };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"  },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"</"),l("span",{style:{color:"#22863A"}},"script"),l("span",{style:{color:"#24292E"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),I=g('<h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否显示 Dialog</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>title</td><td>Dialog 的标题，也可通过具名 slot</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>Dialog 的宽度</td><td>string</td><td>—</td><td>50%</td></tr><tr><td>top</td><td>Dialog CSS 中的 margin-top 值</td><td>string</td><td>—</td><td>15vh</td></tr></tbody></table><h2 id="slot" tabindex="-1">Slot</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Dialog 的内容</td></tr><tr><td>title</td><td>Dialog 标题区的内容</td></tr><tr><td>footer</td><td>Dialog 按钮操作区的内容</td></tr></tbody></table>',4);function K(p,r,e,a,n,v){const u=C("render-demo-0"),y=C("demo"),d=C("render-demo-1"),F=C("render-demo-2");return k(),h("div",null,[V,w,$,T,m(y,{customClass:"undefined",sourceCode:`<template>
  <ac-button @click="visible = true">打开对话框</ac-button>
  <ac-dialog v-model:visible="visible" title="标题配资">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ac-button type="primary" @click="visible = false">确定</ac-button>
        <ac-button @click="visible = false">取消</ac-button>
      </template>
    </ac-dialog>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let visible = ref(false);
    return {
      visible,
    };
  },
};
<\/script>
`},{description:i(()=>[S]),highlight:i(()=>[U]),default:i(()=>[m(u)]),_:1}),J,O,m(y,{customClass:"undefined",sourceCode:`<template>
  <ac-button @click="visible = true">打开对话框</ac-button>
  <ac-dialog v-model:visible="visible">
      <template v-slot:title>
        <h1>我是标题</h1>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ac-button type="primary" @click="visible = false">确定</ac-button>
        <ac-button @click="visible = false">取消</ac-button>
      </template>
    </ac-dialog>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let visible = ref(false);
    return {
      visible,
    };
  },
};
<\/script>
`},{description:i(()=>[P]),highlight:i(()=>[j]),default:i(()=>[m(d)]),_:1}),q,z,m(y,{customClass:"undefined",sourceCode:`<template>
  <ac-button @click="visible = true">打开对话框</ac-button>
  <ac-dialog v-model:visible="visible" width="20%" top="20vh" title="标题配资">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <ac-button type="primary" @click="visible = false">确定</ac-button>
        <ac-button @click="visible = false">取消</ac-button>
      </template>
    </ac-dialog>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let visible = ref(false);
    return {
      visible,
    };
  },
};
<\/script>
`},{description:i(()=>[G]),highlight:i(()=>[H]),default:i(()=>[m(F)]),_:1}),I])}const Q=_(N,[["render",K]]);export{M as __pageData,Q as default};
