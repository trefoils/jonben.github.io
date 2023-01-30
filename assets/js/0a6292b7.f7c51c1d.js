"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(t),s=l,k=c["".concat(i,".").concat(s)]||c[s]||u[s]||o;return t?a.createElement(k,r(r({ref:n},m),{},{components:t})):a.createElement(k,r({ref:n},m))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=s;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:l,r[1]=p;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const o={slug:"fileDownload",title:"\u524d\u7aef\u6587\u4ef6\u4e0b\u8f7d\u7684\u65b9\u5f0f",authors:"jonben",tags:["javascript"]},r=void 0,p={permalink:"/blog/fileDownload",editUrl:"https://github.com/jonbenery/weblog/blog/2023-01-30-fileDownload/index.md",source:"@site/blog/2023-01-30-fileDownload/index.md",title:"\u524d\u7aef\u6587\u4ef6\u4e0b\u8f7d\u7684\u65b9\u5f0f",description:"1. a\u6807\u7b7e",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:8.32,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"jonben"}],frontMatter:{slug:"fileDownload",title:"\u524d\u7aef\u6587\u4ef6\u4e0b\u8f7d\u7684\u65b9\u5f0f",authors:"jonben",tags:["javascript"]},prevItem:{title:"\u591a\u5c42\u7ea7\u5143\u7d20\u62d6\u653e",permalink:"/blog/elementDrag"},nextItem:{title:"\u8ba1\u7b97\u56fe\u7247\u7b49\u6bd4\u7f29\u653e\u540e\u7684\u5bbd\u9ad8",permalink:"/blog/getImageRatio"}},i={authorsImageUrls:[void 0]},d=[{value:"1. a\u6807\u7b7e",id:"1-a\u6807\u7b7e",level:2},{value:"1. window.open",id:"1-windowopen",level:2},{value:"3. location.href",id:"3-locationhref",level:2},{value:"4.  location.?\u5176\u4ed6\u5c5e\u6027",id:"4--location\u5176\u4ed6\u5c5e\u6027",level:2},{value:"5. XMLHttpRequest",id:"5-xmlhttprequest",level:2},{value:"5.1. blob",id:"51-blob",level:3},{value:"5.2 URL.createObjectURL",id:"52-urlcreateobjecturl",level:3}],m={toc:d};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-a\u6807\u7b7e"},"1. a\u6807\u7b7e"),(0,l.kt)("p",null,"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\u6807\u7b7e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"download"),"\u5c5e\u6027\u6765\u5b9e\u73b0\u6587\u4ef6\u4e0b\u8f7d\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u4e5f\u662f\u6211\u4eec\u6bd4\u8f83\u5e38\u7528\u7684\u65b9\u5f0f\uff0c\u5148\u6765\u770b\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<a href="http://www.baidu.com" download="baidu.html">\u4e0b\u8f7d</a>\n')),(0,l.kt)("p",null,"\u5c31\u4e0a\u9762\u7684\u8fd9\u4e2a\u793a\u4f8b\uff0c\u6211\u4eec\u70b9\u51fb\u4e0b\u8f7d\uff0c\u53d1\u73b0\u662f\u8df3\u8f6c\u5230\u4e86\u767e\u5ea6\u7684\u9996\u9875\uff0c\u5e76\u6ca1\u6709\u771f\u7684\u4e0b\u8f7d\u6587\u4ef6\u3002\n\u56e0\u4e3aa\u6807\u7b7e\u4e0b\u8f7d\u53ea\u80fd\u4e0b\u8f7d\u540c\u6e90\u7684\u6587\u4ef6\uff0c\u5982\u679c\u662f\u8de8\u57df\u7684\u6587\u4ef6\uff0c\u8fd9\u91cc\u5305\u62ec\u56fe\u7247\u3001\u97f3\u89c6\u9891\u7b49\u5a92\u4f53\u6587\u4ef6\uff0c\u90fd\u662f\u9884\u89c8\uff0c\u4e5f\u65e0\u6cd5\u4e0b\u8f7d\u3002"),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u662f\u76f4\u63a5\u901a\u8fc7\u4e66\u5199a\u6807\u7b7e\u6765\u5b9e\u73b0\u6587\u4ef6\u4e0b\u8f7d\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7js\u6765\u5b9e\u73b0\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const a = document.createElement('a')\na.href = 'http://www.baidu.com'\na.download = 'baidu.html'\na.click()\n")),(0,l.kt)("p",null,"\u6548\u679c\u548c\u4e0a\u9762\u7684\u4e00\u6837\uff0c\u90fd\u662f\u8df3\u8f6c\u5230\u767e\u5ea6\u7684\u9996\u9875\uff0c\u6ca1\u6709\u4e0b\u8f7d\u6587\u4ef6\u3002\n\u8fd9\u91cc\u7684\u91cd\u70b9\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\u6807\u7b7e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"download"),"\u5c5e\u6027\uff0c\u8fd9\u4e2a\u5c5e\u6027\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"HTML5"),"\u65b0\u589e\u7684\u3002\n\u5b83\u7684\u4f5c\u7528\u662f\u6307\u5b9a\u4e0b\u8f7d\u7684\u6587\u4ef6\u540d\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u90a3\u4e48\u4e0b\u8f7d\u7684\u6587\u4ef6\u540d\u5c31\u4f1a\u6839\u636e\u8bf7\u6c42\u5185\u5bb9\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Disposition"),"\u6765\u786e\u5b9a\uff0c\u5982\u679c\u6ca1\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Disposition"),"\uff0c\u90a3\u4e48\u5c31\u4f1a\u4f7f\u7528\u8bf7\u6c42\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"URL"),"\u7684\u6700\u540e\u4e00\u90e8\u5206\u4f5c\u4e3a\u6587\u4ef6\u540d\u3002"),(0,l.kt)("h2",{id:"1-windowopen"},"1. window.open"),(0,l.kt)("p",null,"\u4e0a\u9762\u4f7f\u7528a\u6807\u7b7e\u7684\u6848\u4f8b\u4e5f\u53ef\u4ee5\u901a\u8fc7window.open\u6765\u5b9e\u73b0\uff0c\u6548\u679c\u662f\u4e00\u6837\u7684\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.open('http://www.baidu.com', '_blank')\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"_blank"),"\u662f\u6307\u5b9a\u6253\u5f00\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u90a3\u4e48\u5c31\u4f1a\u5728\u5f53\u524d\u9875\u9762\u6253\u5f00\uff0c\u8fd9\u91cc\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"_blank"),"\uff0c\u5c31\u662f\u5728\u65b0\u7684\u9875\u9762\u6253\u5f00\u3002"),(0,l.kt)("p",null,"\u540c\u6837",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\u6807\u7b7e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"download"),"\u5c5e\u6027\u4e5f\u662f\u53ef\u4ee5\u4f7f\u7528\u7684\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.open('http://www.baidu.com', '_blank', 'download=baidu.html')\n")),(0,l.kt)("p",null,"\u5f53\u7136\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u662f\u6709\u7f3a\u9677\u7684\uff0c\u5bf9\u6bd4\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\u6807\u7b7e\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u80fd\u4e0b\u8f7d`",(0,l.kt)("inlineCode",{parentName:"p"},".html\u3001.htm\u3001.xml\u3001.xhtml"),"\u7b49\u6587\u4ef6\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u6587\u4ef6\u4f1a\u88ab\u5f53\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"html"),"\u6587\u4ef6\u6765\u5904\u7406\uff0c\u6240\u4ee5\u4f1a\u76f4\u63a5\u5728\u5f53\u524d\u9875\u9762\u6253\u5f00\u3002\n\u540c\u6837\u4e5f\u4e0d\u80fd\u4e0b\u8f7d\u8de8\u57df\u7684\u6587\u4ef6\uff0c\u6bd5\u7adf\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"window.open"),"\uff0c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"window.download"),"\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"window.download"),"\u662f\u5047\u60f3\uff09\u3002"),(0,l.kt)("h2",{id:"3-locationhref"},"3. location.href"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"location.href = 'http://www.baidu.com'\n")),(0,l.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u62e5\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"window.open"),"\u7684\u6240\u6709\u7f3a\u9677\uff0c\u6240\u4ee5\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u8fd9\u91cc\u53ea\u5f53\u4f5c\u4e86\u89e3\uff0c\u6240\u4ee5\u4e0d\u505a\u8fc7\u591a\u7684\u8bb2\u89e3\u3002"),(0,l.kt)("h2",{id:"4--location\u5176\u4ed6\u5c5e\u6027"},"4.  location.?\u5176\u4ed6\u5c5e\u6027"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u5176\u4ed6\u6307\u4ee3\u7684\u90fd\u662f\u80fd\u8df3\u8f6c\u9875\u9762\u7684\u5c5e\u6027\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"location.assign\u3001location.replace\u3001location.reload"),"\u7b49\uff0c\u8fd9\u4e9b\u5c5e\u6027\u90fd\u662f\u53ef\u4ee5\u5b9e\u73b0\u6587\u4ef6\u4e0b\u8f7d\u7684\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"location.assign('http://www.baidu.com')\nlocation.replace('http://www.baidu.com')\nlocation.reload('http://www.baidu.com')\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"location.reload"),"\u662f\u6709\u70b9\u7279\u6b8a\u7684\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u91cd\u65b0\u52a0\u8f7d\u5f53\u524d\u9875\u9762\uff0c\u4f46\u662f\u5b83\u4e5f\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c31\u662f\u8981\u8df3\u8f6c\u7684\u9875\u9762\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u6587\u4ef6\u4e0b\u8f7d\u3002\n\u5f53\u7136\u540c",(0,l.kt)("inlineCode",{parentName:"p"},"location.href"),"\u4e00\u6837\uff0c\u8fd9\u4e9b\u65b9\u5f0f\u7684\u7f3a\u70b9\u90fd\u4e00\u6837\uff0c\u540c\u65f6\u8fd8\u6709\u5c5e\u4e8e\u6bcf\u4e2a\u5c5e\u6027\u81ea\u8eab\u7684\u7279\u6027\uff0c\u8fd9\u91cc\u53ea\u5f53\u62d3\u5c55\u77e5\u8bc6\uff0c\u4e0d\u505a\u8fc7\u591a\u7684\u8bb2\u89e3\u3002"),(0,l.kt)("h2",{id:"5-xmlhttprequest"},"5. XMLHttpRequest"),(0,l.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u5c31\u662f\u6211\u4eec\u5e38\u8bf4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ajax"),"\u4e0b\u8f7d\uff0c\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"axios\u3001fetch"),"\u7b49\u90fd\u662f\u76f8\u540c\u7684\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const xhr = new XMLHttpRequest()\nxhr.open('GET', 'http://www.baidu.com')\nxhr.send()\n\nxhr.onload = function () {\n  const blob = new Blob([xhr.response], { type: 'text/html' })\n  const a = document.createElement('a')\n  a.href = URL.createObjectURL(blob)\n  a.download = 'baidu.html'\n  a.click()\n}\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u5c31\u4e0d\u8bb2\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u76f8\u5173\u7684\u77e5\u8bc6\u4e86\uff0c\u53ea\u8bb2\u548c\u6587\u4ef6\u4e0b\u8f7d\u76f8\u5173\u7684\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u7684\u903b\u8f91\u662f\u5f53\u6211\u4eec\u7684\u8bf7\u6c42\u6210\u529f\u540e\uff0c\u6211\u4eec\u4f1a\u62ff\u5230\u54cd\u5e94\u4f53\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"response"),"\uff0c\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"response"),"\u5c31\u662f\u6211\u4eec\u8981\u4e0b\u8f7d\u7684\u5185\u5bb9\uff0c\u7136\u540e\u6211\u4eec\u628a\u5b83\u8f6c\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5bf9\u8c61\uff0c\u7136\u540e\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"URL.createObjectURL"),"\u6765\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\uff0c\u7136\u540e\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\u6807\u7b7e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"download"),"\u5c5e\u6027\u6765\u5b9e\u73b0\u6587\u4ef6\u4e0b\u8f7d\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u77e5\u8bc6\u70b9\u5c31\u6709\u4e24\u4e2a\uff0c\u4e00\u4e2a\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5bf9\u8c61\uff0c\u4e00\u4e2a\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"URL.createObjectURL"),"\u3002"),(0,l.kt)("h3",{id:"51-blob"},"5.1. blob"),(0,l.kt)("p",null,"\u4e0b\u9762\u662fblob\u5bf9\u8c61\u7684\u5b9a\u4e49\uff0c\u6765\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Blob"},"MDN"),"\uff1a"),(0,l.kt)("admonition",{title:"MDN",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Blob\u5bf9\u8c61\u8868\u793a\u4e00\u4e2a\u4e0d\u53ef\u53d8\u3001\u539f\u59cb\u6570\u636e\u7684\u7c7b\u6587\u4ef6\u5bf9\u8c61\u3002\u5b83\u7684\u6570\u636e\u53ef\u4ee5\u6309\u6587\u672c\u6216\u4e8c\u8fdb\u5236\u7684\u683c\u5f0f\u8fdb\u884c\u8bfb\u53d6\uff0c\u4e5f\u53ef\u4ee5\u8f6c\u6362\u6210 ReadableStream \u6765\u7528\u4e8e\u6570\u636e\u64cd\u4f5c\u3002\nBlob\u8868\u793a\u7684\u4e0d\u4e00\u5b9a\u662fJavaScript\u539f\u751f\u683c\u5f0f\u7684\u6570\u636e\u3002File \u63a5\u53e3\u57fa\u4e8e Blob\uff0c\u7ee7\u627f\u4e86blob\u7684\u529f\u80fd\u5e76\u5c06\u5176\u6269\u5c55\u4ee5\u652f\u6301\u7528\u6237\u7cfb\u7edf\u4e0a\u7684\u6587\u4ef6\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5bf9\u8c61\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"html5"),"\u65b0\u589e\u7684\u5bf9\u8c61\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u7528\u6765\u5b58\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\u7684\uff0c\u6bd4\u5982\u56fe\u7247\u3001\u89c6\u9891\u3001\u97f3\u9891\u7b49\uff0c\u5b83\u7684\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {Array} array \u4e8c\u8fdb\u5236\u6570\u636e\n * @param {Object} options \u914d\u7f6e\u9879\n *      @param {String} options.type \u6587\u4ef6\u7c7b\u578b\uff0c\u5b83\u4ee3\u8868\u4e86\u5c06\u4f1a\u88ab\u653e\u5165\u5230 blob \u4e2d\u7684\u6570\u7ec4\u5185\u5bb9\u7684 MIME \u7c7b\u578b\u3002\n *      @param {String} options.endings \u7528\u4e8e\u6307\u5b9a\u5305\u542b\u884c\u7ed3\u675f\u7b26\\n\u7684\u5b57\u7b26\u4e32\u5982\u4f55\u88ab\u5199\u5165\u3002\u9ed8\u8ba4\u4e3atransparent\uff0c\u8868\u793a\u4e0d\u4f1a\u4fee\u6539\u884c\u7ed3\u675f\u7b26\u3002\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4e3anative\uff0c\u8868\u793a\u4f1a\u5c06\\n\u8f6c\u6362\u4e3a\\r\\n\u3002\n */\nconst blob = new Blob([], { type: '' })\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u5173\u6ce8\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5bf9\u8c61\u662f\u6ca1\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u7684\uff0c\u90a3\u4e48\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Blob"),"\u5c31\u662f\u4e00\u4e2a\u65e0\u7c7b\u578b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Blob"),"\uff0c\u6587\u4ef6\u4e0d\u4f1a\u635f\u6bc1\uff0c\u4f46\u662f\u65e0\u6cd5\u88ab\u6b63\u5e38\u8bc6\u522b\u3002"),(0,l.kt)("h3",{id:"52-urlcreateobjecturl"},"5.2 URL.createObjectURL"),(0,l.kt)("p",null,"\u4e0b\u9762\u6765\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL"},"MDN"),"\uff1a"),(0,l.kt)("admonition",{title:"MDN",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"URL.createObjectURL() \u9759\u6001\u65b9\u6cd5\u4f1a\u521b\u5efa\u4e00\u4e2a DOMString\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u8868\u793a\u53c2\u6570\u4e2d\u7ed9\u51fa\u7684\u5bf9\u8c61\u7684 URL\u3002\u8fd9\u4e2a URL \u7684\u751f\u547d\u5468\u671f\u548c\u521b\u5efa\u5b83\u7684\u7a97\u53e3\u4e2d\u7684 document \u7ed1\u5b9a\u3002\u8fd9\u4e2a\u65b0\u7684 URL \u5bf9\u8c61\u8868\u793a\u6307\u5b9a\u7684 File \u5bf9\u8c61\u6216 Blob \u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u662f\u7528\u6765\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\u7684\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u628a\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5bf9\u8c61\u8f6c\u6362\u6210\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\uff0c\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\u53ef\u4ee5\u7528\u6765\u4e0b\u8f7d\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u9884\u89c8\u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const url = URL.createObjectURL(blob)\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\u7684\u751f\u547d\u5468\u671f\u548c\u521b\u5efa\u5b83\u7684\u7a97\u53e3\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"document"),"\u7ed1\u5b9a\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u6211\u4eec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"document"),"\u88ab\u9500\u6bc1\u540e\uff0c\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\u5c31\u4f1a\u5931\u6548\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5728\u5408\u9002\u7684\u65f6\u673a\u9500\u6bc1\u5b83\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"URL.revokeObjectURL(url)\n")),(0,l.kt)("p",null,"\u56de\u5230\u6211\u4eec\u521a\u624d\u4e0b\u8f7d\u7684\u95ee\u9898\uff0c\u6211\u4eec\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5bf9\u8c61\u6765\u89e3\u51b3\uff0c\u4f46\u662f\u6211\u4eec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u662f\u5199\u6b7b\u7684\uff0c\u5982\u679c\u5728\u6587\u4ef6\u7c7b\u578b\u662f\u786e\u5b9a\u7684\u60c5\u51b5\u4e0b\u662f\u6ca1\u95ee\u9898\u7684\uff0c\u4f46\u662f\u5982\u679c\u8fd9\u4e2a\u63a5\u53e3\u5c31\u662f\u4e0b\u8f7d\u6587\u4ef6\u7684\u63a5\u53e3\uff0c\u6587\u4ef6\u53ef\u80fd\u662f\u5404\u79cd\u7c7b\u578b\u7684\uff0c\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u6ca1\u6709\u6b63\u786e\u7b54\u6848\uff0c\u7b2c\u4e00\u4e2a\u53ef\u4ee5\u548c\u63a5\u53e3\u63d0\u4f9b\u8005\u8fdb\u884c\u534f\u5546\uff0c\u534f\u5546\u65b9\u6848\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u7b2c\u4e8c\u5c31\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"response"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"header"),"\u6765\u83b7\u53d6\u6587\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\uff0c\u4e5f\u662f\u6211\u4eec\u8981\u8bb2\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const type = response.headers['content-type']\n\nconst blob = new Blob([response.data], { type })\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"response"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"header"),"\u6765\u83b7\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\uff0c\u7136\u540e\u518d\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5bf9\u8c61\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u6b63\u786e\u7684\u4e0b\u8f7d\u6587\u4ef6\u4e86\u3002"),(0,l.kt)("p",null,"\u5176\u5b9e",(0,l.kt)("inlineCode",{parentName:"p"},"content-type"),"\u4e5f\u53ef\u80fd\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"application/octet-stream"),"\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"file-type"),"\u6765\u83b7\u53d6\u6587\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u4e86\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"file-type"),"\u6765\u83b7\u53d6\u6587\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {fileTypeFromStream} from 'file-type';\n\nconst type = await fileTypeFromStream(response.body);\nconst blob = new Blob([response.data], { type })\n")),(0,l.kt)("p",null,"file-type\u7684\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/file-type"},"file-type"),"\u3002"))}c.isMDXComponent=!0}}]);