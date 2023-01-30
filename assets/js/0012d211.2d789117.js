"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[967],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=s(t),u=i,m=f["".concat(c,".").concat(u)]||f[u]||y[u]||p;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[f]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<p;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9299:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const p={},a=void 0,o={unversionedId:"typescript/infer",id:"typescript/infer",title:"infer",description:"\u5b9a\u4e49\uff1a \u6761\u4ef6\u7c7b\u578b\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f7f\u7528infer\u5173\u952e\u5b57\u8fdb\u884c\u5360\u4f4d\uff0c\u7136\u540e\u901a\u8fc7\u6bd4\u8f83\u6761\u4ef6\u7684\u6210\u7acb\u5426\uff0c\u4ece\u800c\u63a8\u65ad\u51fa\u7c7b\u578b\u7684\u65b9\u6cd5",source:"@site/docs/typescript/infer.md",sourceDirName:"typescript",slug:"/typescript/infer",permalink:"/docs/typescript/infer",draft:!1,editUrl:"https://github.com/jonbenery/weblog/docs/typescript/infer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6cdb\u578b",permalink:"/docs/typescript/generics"},next:{title:"\u5185\u7f6e\u7c7b\u578b",permalink:"/docs/typescript/utilTypes"}},c={},s=[{value:"1. \u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",id:"1-\u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",level:2},{value:"2. \u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",id:"2-\u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",level:2},{value:"3. \u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",id:"3-\u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",level:2}],l={toc:s};function f(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5b9a\u4e49\uff1a \u6761\u4ef6\u7c7b\u578b\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f7f\u7528infer\u5173\u952e\u5b57\u8fdb\u884c\u5360\u4f4d\uff0c\u7136\u540e\u901a\u8fc7\u6bd4\u8f83\u6761\u4ef6\u7684\u6210\u7acb\u5426\uff0c\u4ece\u800c\u63a8\u65ad\u51fa\u7c7b\u578b\u7684\u65b9\u6cd5"),(0,i.kt)("h2",{id:"1-\u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"},"1. \u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \ntype fn = (x: string) => any;\n\ntype inferType<T> = T extends (args: infer P) => any ? P : T\n\ntype res = inferType<fn> // string\n")),(0,i.kt)("h2",{id:"2-\u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"},"2. \u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type fn = (x: string) => number;\n\ntype inferType<T> = T extends (args: any) => infer P ? P : T\n\ntype res = inferType<fn> // number\n")),(0,i.kt)("h2",{id:"3-\u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"},"3. \u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type myType = Array<boolean>;\n\ntype inferType<T> = T extends Array<infer P> ? P : never\n\ntype res = inferType<myType> // boolean\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const setObj = new Set<object>();\ntype myType = typeof setObj;\n\ntype inferType<T> = T extends Set<infer P> ? P : never\n\ntype res = inferType<myType> // object\n")))}f.isMDXComponent=!0}}]);