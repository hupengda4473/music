import{c as y,t as b,D as E,r as V,o as $,K as B,O as D,g as o,h as s,i as e,j as a,k as c,I as d,G as p,u as n,J as f,H as u}from"./vendor.9760fa8a.js";/* empty css                  */import{u as x}from"./video.3500c715.js";import{_ as G}from"./IconPark.402beefe.js";import{B as S}from"./index.373df683.js";import{_ as R}from"./CoverPlay.d639e45b.js";import{R as j}from"./Right.083d6647.js";import"./el-image-viewer.a8b12883.js";import"./PlayOne.e72f474c.js";const L={class:"p-5 video-page"},N={class:"flex items-center justify-between"},z={class:"button-outline px-5"},F=e("span",{class:"mr-2"},"\u5168\u90E8\u89C6\u9891",-1),H={class:"h-96 py-5 pl-5"},I={class:"text-xs gap-5 grid grid-flow-row grid-cols-5"},J=["onClick"],K={class:"text-xs flex gap-x-4"},M=["onClick"],O={class:"grid grid-flow-row grid-cols-3 gap-5 mt-5"},P={class:"text-xs mt-3 truncate"},et=y({setup(U){const{videoGroup:_}=b(x()),{getVideoGroup:h}=x(),v=E([]),i=V({page:1,id:0}),m=async()=>{v.value=await S(i.id,i.page-1)},r=l=>{console.log(l),i.id=l,i.page=1,m()};return $(()=>{h(),m()}),(l,g)=>{const k=B,C=D;return o(),s("div",L,[e("div",N,[a(C,{width:"60%",placement:"bottom-start","popper-style":"padding:0;"},{reference:c(()=>[e("button",z,[F,a(G,{icon:n(j)},null,8,["icon"])])]),default:c(()=>[e("div",null,[e("div",{class:"text-xl pt-5 pl-5 hover-text",onClick:g[0]||(g[0]=t=>r(0))},"\u5168\u90E8\u89C6\u9891"),e("div",H,[a(k,null,{default:c(()=>[e("div",I,[(o(!0),s(d,null,p(n(_),t=>(o(),s("div",{class:f(["hover-text",{"text-active":n(i).id===t.id}]),key:t.id,onClick:w=>r(t.id)},u(t.name),11,J))),128))])]),_:1})])])]),_:1}),e("div",K,[(o(!0),s(d,null,p(n(_).slice(0,8),t=>(o(),s("div",{class:f(["hover-text",{"text-active":n(i).id===t.id}]),onClick:w=>r(t.id),key:t.id},u(t.name),11,M))),128))])]),e("div",O,[(o(!0),s(d,null,p(v.value,({data:t})=>(o(),s("div",{key:t.vid},[a(R,{"pic-url":t.coverUrl,video:""},null,8,["pic-url"]),e("div",P,u(t.title),1)]))),128))])])}}});export{et as default};
