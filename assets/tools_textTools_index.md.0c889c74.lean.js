import"./chunks/index.4ed993c7.js";import{_ as N,h as m,C as s,o as _,c as p,H as t,w as e,k as v,t as V,b as U,a as c,p as O,m as R}from"./chunks/framework.98be4c9c.js";import{S as $,T as D,N as i}from"./chunks/index.b5a713d7.js";import{B as P}from"./chunks/use-popup-manager.cc2677ce.js";const j=n=>(O("data-v-b1554f6a"),n=n(),R(),n),z={class:"container"},E=j(()=>v("p",{class:"title"},"base64 编解码",-1)),H={class:"output-container"},J={key:0},q={__name:"Base64Tools",setup(n){const a=m(""),o=m(""),x=()=>{try{o.value=btoa(encodeURIComponent(a.value))}catch{o.value="编码异常，请检查输入值"}},f=()=>{try{o.value=decodeURIComponent(atob(a.value))}catch{o.value="解码异常，请检查输入值"}},y=()=>{a.value="",o.value=""},h=()=>{a.value=o.value,o.value=""},k=()=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(o.value).then(()=>{i.success("内容已复制到剪贴板")}).catch(()=>{i.success("复制失败，建议使用最新版 Chrome 浏览器")}):i.success("复制失败，建议使用最新版 Chrome 浏览器")};return(u,r)=>{const T=s("icon-lock"),l=P,b=s("icon-unlock"),C=s("icon-delete"),d=$,g=D,B=s("icon-copy"),w=s("icon-to-top"),S=s("spna");return _(),p("div",z,[E,t(d,{class:"btn-space"},{default:e(()=>[t(l,{type:"primary",status:"success",onClick:x},{icon:e(()=>[t(T)]),default:e(()=>[c("编码")]),_:1}),t(l,{type:"primary",status:"success",onClick:f},{icon:e(()=>[t(b)]),default:e(()=>[c("解码")]),_:1}),t(l,{type:"primary",status:"danger",onClick:y},{icon:e(()=>[t(C)]),default:e(()=>[c("清空")]),_:1})]),_:1}),t(g,{placeholder:"输入编解码的内容","auto-size":{minRows:3},modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=I=>a.value=I)},null,8,["modelValue"]),t(d,{class:"btn-space"},{default:e(()=>[t(l,{type:"primary",status:"success",onClick:k},{icon:e(()=>[t(B)]),default:e(()=>[c("复制")]),_:1}),t(l,{type:"primary",status:"warning",onClick:h},{icon:e(()=>[t(w)]),default:e(()=>[c("替换为输入值")]),_:1})]),_:1}),v("div",H,[o.value?(_(),p("span",J,V(o.value),1)):(_(),U(S,{key:1,style:{color:"#999"}},{default:e(()=>[c("展示输出结果")]),_:1}))])])}}},A=N(q,[["__scopeId","data-v-b1554f6a"]]),Q=JSON.parse('{"title":"字符编解码","description":"","frontmatter":{"title":"字符编解码","layout":"page"},"headers":[],"relativePath":"tools/textTools/index.md","filePath":"tools/textTools/index.md","lastUpdated":1702475205000}'),F={name:"tools/textTools/index.md"},W=Object.assign(F,{setup(n){return(a,o)=>(_(),p("div",null,[t(A)]))}});export{Q as __pageData,W as default};