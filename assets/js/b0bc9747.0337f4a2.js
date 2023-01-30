"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6327],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,d=s["".concat(c,".").concat(m)]||s[m]||g[m]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={slug:"elementDrag",title:"\u591a\u5c42\u7ea7\u5143\u7d20\u62d6\u653e",authors:"jonben",tags:["javascript"]},o=void 0,i={permalink:"/blog/elementDrag",editUrl:"https://github.com/jonbenery/weblog/blog/2023-01-30-elementDrag/index.md",source:"@site/blog/2023-01-30-elementDrag/index.md",title:"\u591a\u5c42\u7ea7\u5143\u7d20\u62d6\u653e",description:"\u6b63\u5e38\u62d6\u62fd\u6587\u4ef6\u5230\u6307\u5b9a\u5bb9\u5668\u65f6\uff0c\u5982\u679c\u5bb9\u5668\u5185\u90e8\u6ca1\u6709\u5143\u7d20\uff0c\u53ef\u4ee5\u6b63\u5e38\u54cd\u5e94enter\u548cleave\u4e8b\u4ef6\uff0c\u5982\u679c\u5185\u90e8\u5177\u6709\u5143\u7d20\uff0c\u867d\u7136\u53ea\u662f\u5728\u7236\u7ea7\u522b\u5bb9\u5668\u65f6\u6dfb\u52a0\u7684\u4e8b\u4ef6\uff0c\u4f9d\u7136\u4f1a\u5bfc\u81f4\u5b50\u5143\u7d20\u8bef\u89e6\u53d1\uff0c\u5728\u62d6\u62fd\u65f6\u4f1a\u9891\u7e41\u51fa\u73b0ondragenter\u548condragleave\u4e8b\u4ef6\uff0c\u539f\u56e0\u662f\u5192\u6ce1\u5bfc\u81f4\u3002",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:1.465,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"jonben"}],frontMatter:{slug:"elementDrag",title:"\u591a\u5c42\u7ea7\u5143\u7d20\u62d6\u653e",authors:"jonben",tags:["javascript"]},prevItem:{title:"\u62d6\u62fd\u83b7\u53d6\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6",permalink:"/blog/dragDir"},nextItem:{title:"\u524d\u7aef\u6587\u4ef6\u4e0b\u8f7d\u7684\u65b9\u5f0f",permalink:"/blog/fileDownload"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b63\u5e38\u62d6\u62fd\u6587\u4ef6\u5230\u6307\u5b9a\u5bb9\u5668\u65f6\uff0c\u5982\u679c\u5bb9\u5668\u5185\u90e8\u6ca1\u6709\u5143\u7d20\uff0c\u53ef\u4ee5\u6b63\u5e38\u54cd\u5e94enter\u548cleave\u4e8b\u4ef6\uff0c\u5982\u679c\u5185\u90e8\u5177\u6709\u5143\u7d20\uff0c\u867d\u7136\u53ea\u662f\u5728\u7236\u7ea7\u522b\u5bb9\u5668\u65f6\u6dfb\u52a0\u7684\u4e8b\u4ef6\uff0c\u4f9d\u7136\u4f1a\u5bfc\u81f4\u5b50\u5143\u7d20\u8bef\u89e6\u53d1\uff0c\u5728\u62d6\u62fd\u65f6\u4f1a\u9891\u7e41\u51fa\u73b0ondragenter\u548condragleave\u4e8b\u4ef6\uff0c\u539f\u56e0\u662f\u5192\u6ce1\u5bfc\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<li class="box"\n    ondragenter="handledragenter()"\n    ondragleave="handledragleave()"\n    ondrop="drop">\n  <span>\u5185\u90e8\u76d2\u5b501\n    <i>\u5185\u90e8\u76d2\u5b502</i>\n  </span>\n</li>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function handledragenter() {\n  console.log('\u8fdb\u5165');\n}\nfunction handledragleave() {\n  console.log('\u79bb\u5f00');\n}\n")),(0,a.kt)("p",null,"\u4ece\u5916\u90e8\u79fb\u52a8\u5230\u5185\u90e8\uff0c\u4e8b\u4ef6\u89e6\u53d1\u987a\u5e8f\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enter parent"),(0,a.kt)("li",{parentName:"ul"},"enter child"),(0,a.kt)("li",{parentName:"ul"},"leave parent"),(0,a.kt)("li",{parentName:"ul"},"enter sub-child"),(0,a.kt)("li",{parentName:"ul"},"leave child")),(0,a.kt)("p",null,"\u6293\u53d6\u5143\u7d20\u62d6\u62fd\u5230\u5bb9\u5668\u5185\u65f6\uff0c\u89e6\u53d1\u987a\u5e8f\u662f\u5148enter\u4e0b\u4e00\u4e2a\uff0c\u518dleave\u4e0a\u4e00\u4e2a\uff0c\u56e0\u6b64\u4e00\u4e2a\u5bb9\u5668\u5185\uff0c\u89e6\u53d1\u5b50\u5143\u7d20\uff0c\u5224\u65ad\u5947\u6570\u548c\u5076\u6570\u5373\u53ef\u8fc7\u6ee4\u6389\u5185\u90e8\u7684\u8bef\u5224\u65ad\uff0c\u53d6\u4e00\u4e2a\u53d8\u91cf\uff0c\u5728enter\u548cleave\u65f6\u90fd\u9012\u589e\uff0c\u4e4b\u540e\u5224\u65ad\u662f\u5947\u6570\u8fd8\u662f\u5076\u6570\u6765\u51b3\u5b9a\u662f\u5426\u89e6\u53d1\u4e8b\u4ef6\uff0c\u6700\u540e\u4e00\u6b21leave\u540e\u5c06\u53d8\u91cf\u91cd\u7f6e\u4e3a0\uff1b"),(0,a.kt)("p",null,"\u6539\u8fdb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let count = 0\nfunction handledragenter() {\n  count++\n  if (count % 2) {\n    console.log('\u8fdb\u5165', count);\n  }\n}\nfunction handledragleave() {\n  count++\n  if (!(count % 2)) {\n    console.log('\u79bb\u5f00', count);\n  }\n}\n")))}s.isMDXComponent=!0}}]);