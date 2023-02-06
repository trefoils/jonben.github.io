"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||p;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const p={},a=void 0,i={unversionedId:"javascript/set-property",id:"javascript/set-property",title:"set-property",description:"1. definePrototype",source:"@site/docs/javascript/set-property.md",sourceDirName:"javascript",slug:"/javascript/set-property",permalink:"/docs/javascript/set-property",draft:!1,editUrl:"https://github.com/jonbenery/weblog/docs/javascript/set-property.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"extends\u51fd\u6570\u7684\u5b9e\u73b0",permalink:"/docs/javascript/extends-fun"},next:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/docs/javascript/reg-exp"}},c={},s=[{value:"1. definePrototype",id:"1-defineprototype",level:2},{value:"2. defineProperties",id:"2-defineproperties",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-defineprototype"},"1. definePrototype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.defineProperty(obj, props, descriptor)\n")),(0,o.kt)("p",null,"\u4f5c\u7528\uff1a \u5728\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\u6216\u8005\u4fee\u6539\u539f\u6709\u5c5e\u6027\n\u8fd4\u56de\u503c\uff1a \u4fee\u6539\u540e\u7684\u76ee\u6807\u5bf9\u8c61obj\n\u53c2\u6570\u5b9a\u4e49\uff1a\nobj: \u5728\u5176\u4e0a\u5b9a\u4e49\u6216\u4fee\u6539\u5c5e\u6027\u7684\u76ee\u6807\u5bf9\u8c61\nprops: \u5c5e\u6027\u540d\u79f0\ndescriptor: \u5c5e\u6027\u63cf\u8ff0\u7b26"),(0,o.kt)("h2",{id:"2-defineproperties"},"2. defineProperties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"}," Object.defineProperties(obj, props)\n")),(0,o.kt)("p",null,"\u4f5c\u7528\uff1a\u5728\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u591a\u4e2a\u65b0\u7684\u5c5e\u6027\u6216\u8005\u4fee\u6539\u591a\u4e2a\u539f\u6709\u5c5e\u6027\n\u8fd4\u56de\u503c\uff1a \u4fee\u6539\u540e\u7684\u76ee\u6807\u5bf9\u8c61obj\n\u53c2\u6570\u542b\u4e49\uff1a\nobj: \u5728\u5176\u4e0a\u5b9a\u4e49\u6216\u4fee\u6539\u5c5e\u6027\u7684\u76ee\u6807\u5bf9\u8c61\nprops: \u5c5e\u6027\u5bf9\u8c61\uff0c\u5176\u5c5e\u6027\u503c\u4e3a\u5c5e\u6027\u63cf\u8ff0\u7b26\uff0c\u5305\u62ec\u6570\u636e\u5c5e\u6027\u63cf\u8ff0\u7b26\u548c\u8bbf\u95ee\u5668\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u6570\u636e\u5c5e\u6027\u63cf\u8ff0\u7b26\u548c\u8bbf\u95ee\u5668\u5c5e\u6027\u63cf\u8ff0\u7b26\u7528defineProperties\u5b9a\u4e49\u7684\u6570\u636e\u5c5e\u6027\u9ed8\u8ba4\u662f\u4e0d\u53ef\u679a\u4e3e\u7684\uff0c\u5373enumerable: false")))}u.isMDXComponent=!0}}]);