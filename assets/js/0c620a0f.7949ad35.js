"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[2980],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return y}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=s(t),y=i,d=u["".concat(c,".").concat(y)]||u[y]||l[y]||o;return t?r.createElement(d,p(p({ref:n},f),{},{components:t})):r.createElement(d,p({ref:n},f))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5872:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),p=["components"],a={},c=void 0,s={unversionedId:"typescript/infer",id:"typescript/infer",title:"infer",description:"\u5b9a\u4e49\uff1a \u6761\u4ef6\u7c7b\u578b\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f7f\u7528infer\u5173\u952e\u5b57\u8fdb\u884c\u5360\u4f4d\uff0c\u7136\u540e\u901a\u8fc7\u6bd4\u8f83\u6761\u4ef6\u7684\u6210\u7acb\u5426\uff0c\u4ece\u800c\u63a8\u65ad\u51fa\u7c7b\u578b\u7684\u65b9\u6cd5",source:"@site/packages/docs/typescript/infer.md",sourceDirName:"typescript",slug:"/typescript/infer",permalink:"/docs/typescript/infer",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/docs/typescript/infer.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1663291847,formattedLastUpdatedAt:"9/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u6cdb\u578b",permalink:"/docs/typescript/generics"},next:{title:"\u5185\u7f6e\u7c7b\u578b",permalink:"/docs/typescript/utilTypes"}},f={},l=[{value:"1. \u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",id:"1-\u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",level:2},{value:"2. \u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",id:"2-\u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",level:2},{value:"3. \u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",id:"3-\u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e",level:2}],u={toc:l};function y(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5b9a\u4e49\uff1a \u6761\u4ef6\u7c7b\u578b\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f7f\u7528infer\u5173\u952e\u5b57\u8fdb\u884c\u5360\u4f4d\uff0c\u7136\u540e\u901a\u8fc7\u6bd4\u8f83\u6761\u4ef6\u7684\u6210\u7acb\u5426\uff0c\u4ece\u800c\u63a8\u65ad\u51fa\u7c7b\u578b\u7684\u65b9\u6cd5"),(0,o.kt)("h2",{id:"1-\u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"},"1. \u7b2c\u4e00\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \ntype fn = (x: string) => any;\n\ntype inferType<T> = T extends (args: infer P) => any ? P : T\n\ntype res = inferType<fn> // string\n")),(0,o.kt)("h2",{id:"2-\u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"},"2. \u7b2c\u4e8c\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type fn = (x: string) => number;\n\ntype inferType<T> = T extends (args: any) => infer P ? P : T\n\ntype res = inferType<fn> // number\n")),(0,o.kt)("h2",{id:"3-\u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"},"3. \u7b2c\u4e09\u79cdinfer\u51fa\u73b0\u7684\u4f4d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type myType = Array<boolean>;\n\ntype inferType<T> = T extends Array<infer P> ? P : never\n\ntype res = inferType<myType> // boolean\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const setObj = new Set<object>();\ntype myType = typeof setObj;\n\ntype inferType<T> = T extends Set<infer P> ? P : never\n\ntype res = inferType<myType> // object\n")))}y.isMDXComponent=!0}}]);