"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>C});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},P=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=m(n),P=a,C=k["".concat(o,".").concat(P)]||k[P]||c[P]||l;return n?r.createElement(C,p(p({ref:t},u),{},{components:n})):r.createElement(C,p({ref:t},u))}));function C(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=P;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:a,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}P.displayName="MDXCreateElement"},4776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={title:"TCP"},p="1. TCP",i={unversionedId:"network/tcp/index",id:"network/tcp/index",title:"TCP",description:"TCP\uff08Transmission Control Protocol\uff0c\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff09\u662f\u9762\u5411\u8fde\u63a5\u7684\u4f20\u8f93\u534f\u8bae\uff0c\u901a\u8fc7\u5e8f\u5217\u786e\u8ba4\u548c\u5305\u91cd\u53d1\u673a\u5236\u63d0\u4f9b\u53ef\u9760\u7684\u6570\u636e\u6d41\u53d1\u9001\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u865a\u62df\u8fde\u63a5\u670d\u52a1\u3002TCP\u548cIP\u76f8\u7ed3\u5408\uff0c\u6784\u6210\u4e86Internet\u534f\u8bae\u7684\u6838\u5fc3\u3002",source:"@site/pages/computer/network/tcp/index.mdx",sourceDirName:"network/tcp",slug:"/network/tcp/",permalink:"/computer/network/tcp/",draft:!1,editUrl:"https://github.com/hongnny/weblog/pages/computer/network/tcp/index.mdx",tags:[],version:"current",lastUpdatedBy:"\u96f6\u4e0b6\u5ea6",lastUpdatedAt:1686642325,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"TCP"},sidebar:"tutorialSidebar",previous:{title:"IP",permalink:"/computer/network/ip/"},next:{title:"UDP",permalink:"/computer/network/udp/"}},o={},m=[{value:"2. TCP\u7684\u5206\u6bb5\u683c\u5f0f",id:"2-tcp\u7684\u5206\u6bb5\u683c\u5f0f",level:2},{value:"3. TCP\u8fde\u63a5\u7684\u5efa\u7acb\u548c\u91ca\u653e",id:"3-tcp\u8fde\u63a5\u7684\u5efa\u7acb\u548c\u91ca\u653e",level:2},{value:"3.1. \u5efa\u7acb\u8fde\u63a5",id:"31-\u5efa\u7acb\u8fde\u63a5",level:3},{value:"3.2. \u6570\u636e\u4f20\u8f93",id:"32-\u6570\u636e\u4f20\u8f93",level:3},{value:"3.3. \u91ca\u653e\u94fe\u63a5",id:"33-\u91ca\u653e\u94fe\u63a5",level:3}],u={toc:m};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-tcp"},"1. TCP"),(0,a.kt)("p",null,"TCP\uff08Transmission Control Protocol\uff0c\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff09\u662f\u9762\u5411\u8fde\u63a5\u7684\u4f20\u8f93\u534f\u8bae\uff0c\u901a\u8fc7\u5e8f\u5217\u786e\u8ba4\u548c\u5305\u91cd\u53d1\u673a\u5236\u63d0\u4f9b\u53ef\u9760\u7684\u6570\u636e\u6d41\u53d1\u9001\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u865a\u62df\u8fde\u63a5\u670d\u52a1\u3002TCP\u548cIP\u76f8\u7ed3\u5408\uff0c\u6784\u6210\u4e86Internet\u534f\u8bae\u7684\u6838\u5fc3\u3002"),(0,a.kt)("p",null,"TCP\u63d0\u4f9b\u5e94\u7528\u7a0b\u5e8f\u548cIP\u4e4b\u95f4\u7684\u4e2d\u95f4\u5c42\u901a\u4fe1\u670d\u52a1\u3002\u5f53\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u4f7f\u7528IP\u5728\u7f51\u7edc\u4e0a\u53d1\u9001\u5927\u91cf\u6570\u636e\u65f6\uff0c\u4e0d\u9700\u8981\u5c06\u6570\u636e\u62c6\u5206\u6210\u4e00\u7ec4\u6570\u636e\u5757\uff0c\u7136\u540e\u63d0\u4ea4\u4e00\u7cfb\u5217\u7684IP\u8bf7\u6c42\uff0c\u800c\u53ea\u8981\u63d0\u4ea4\u4e00\u4e2a\u8bf7\u6c42\u5230TCP\uff0c\u7531TCP\u6765\u5904\u7406IP\u7684\u7ec6\u8282\u3002"),(0,a.kt)("p",null,"IP\u6570\u636e\u5305\u662f\u4e00\u4e2a\u5b57\u8282\u5e8f\u5217\uff0c\u7531\u5305\u5934\u548c\u540e\u9762\u7684\u5305\u4f53\u7ec4\u6210\u3002\u5305\u5934\u4e2d\u63cf\u8ff0\u5305\u7684\u76ee\u7684\u5730\u5740\u548c\u7528\u6765\u8f6c\u53d1\u5230\u6700\u7ec8\u76ee\u7684\u5730\u5740\u7684\u8def\u7531\uff0c\u540e\u8005\u4e3a\u53ef\u9009\u9879\uff1b\u5305\u4f53\u4e2d\u5305\u542bIP\u5c42\u8981\u4f20\u8f93\u7684\u6570\u636e\u3002\u7531\u4e8e\u7f51\u7edc\u51b2\u7a81\u3001\u6d41\u91cf\u8d1f\u8f7d\u5747\u8861\u548c\u5176\u4ed6\u4e0d\u53ef\u9884\u89c1\u7684\u7f51\u7edc\u884c\u4e3a\uff0cIP\u5305\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u6709\u53ef\u80fd\u88ab\u4e22\u5931\u6216\u6253\u4e71\u987a\u5e8f\u3002TCP\u53ef\u4ee5\u68c0\u6d4b\u5230\u8fd9\u4e9b\u95ee\u9898\uff0c\u5e76\u8981\u6c42\u91cd\u65b0\u4f20\u8f93\u4e22\u5931\u7684\u6570\u636e\u5305\u3001\u91cd\u65b0\u7ec4\u7ec7\u88ab\u6253\u4e71\u987a\u5e8f\u7684\u6570\u636e\u5305\uff0c\u751a\u81f3\u53ef\u4ee5\u5e2e\u52a9\u6700\u5c0f\u5316\u7f51\u7edc\u51b2\u7a81\uff0c\u4ece\u800c\u51cf\u5c0f\u53d1\u751f\u5176\u4ed6\u95ee\u9898\u7684\u6982\u7387\u3002\u4e00\u65e6TCP\u5c42\u7684\u63a5\u6536\u8005\u6700\u7ec8\u6536\u5230\u4e86\u7ec4\u7ec7\u597d\u7684\u6700\u521d\u4f20\u8f93\u6570\u636e\u7684\u590d\u672c\uff0c\u5b83\u5c06\u53d1\u9001\u4e00\u4e2a\u62a5\u6587\u7ed9\u5e94\u7528\u7a0b\u5e8f\u3002\u8fd9\u6837\uff0c\u4f7f\u7528TCP\u7684\u5e94\u7528\u7a0b\u5e8f\u5c31\u4e0d\u9700\u8981\u8003\u8651\u5e95\u5c42\u7f51\u7edc\u901a\u4fe1\u7684\u7ec6\u8282\u4e86\u3002"),(0,a.kt)("p",null,"TCP\u662f\u4e00\u4e2a\u7cbe\u786e\u4f20\u8f93\u534f\u8bae\uff0c\u4f46\u5e76\u4e0d\u662f\u53ca\u65f6\u4f20\u8f93\u534f\u8bae\u3002\u4f7f\u7528TCP\u4f20\u8f93\u6570\u636e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u76f8\u5bf9\u8f83\u957f\u7684\u5ef6\u65f6\uff0c\u901a\u5e38\u7528\u6765\u7b49\u5f85\u6253\u4e71\u987a\u5e8f\u7684\u6d88\u606f\u6216\u8005\u91cd\u65b0\u4f20\u8f93\u4e22\u5931\u7684\u6d88\u606f\u3002\u56e0\u6b64\uff0cTCP\u5e76\u4e0d\u9002\u7528\u4e8e\u4e00\u4e9b\u5bf9\u5b9e\u65f6\u6027\u8981\u6c42\u5f88\u9ad8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982VOIP\uff08Voice over IP\uff0c\u5728IP\u5c42\u5b9e\u73b0\u8bed\u97f3\u901a\u4fe1\u7684\u534f\u8bae\uff09\u3002"),(0,a.kt)("p",null,"TCP\u662f\u53ef\u9760\u7684\u6d41\u4f20\u8f93\u670d\u52a1\uff0c\u5b83\u53ef\u4ee5\u4fdd\u8bc1\u4ece\u4e00\u4e2a\u4e3b\u673a\u4f20\u9001\u5230\u53e6\u4e00\u4e2a\u4e3b\u673a\u7684\u6570\u636e\u6d41\u4e0d\u4f1a\u51fa\u73b0\u91cd\u590d\u6570\u636e\u6216\u4e22\u5931\u6570\u636e\u7684\u60c5\u51b5\u3002\u56e0\u4e3a\u5728IP\u4e2d\u6570\u636e\u5305\u7684\u4f20\u8f93\u662f\u4e0d\u53ef\u9760\u7684\uff0c\u6240\u4ee5\u5728\u4f20\u8f93\u65f6\u9700\u8981\u4f7f\u7528\u4e00\u79cd\u53eb\u4f5c\u4e3b\u52a8\u786e\u8ba4\u6280\u672f\u6765\u786e\u4fdd\u6570\u636e\u5305\u4f20\u8f93\u7684\u53ef\u9760\u6027\u3002\u4e3b\u52a8\u786e\u8ba4\u6280\u672f\u8981\u6c42\u63a5\u6536\u8005\u5728\u63a5\u6536\u5230\u6570\u636e\u540e\u53d1\u4e00\u4e2a\u786e\u8ba4\u6d88\u606f\uff0c\u53d1\u9001\u8005\u4f1a\u4e3a\u53d1\u9001\u7684\u6bcf\u4e2a\u6570\u636e\u5305\u4fdd\u7559\u4e00\u6761\u8bb0\u5f55\uff0c\u5e76\u4e14\u7b49\u5f85\u6536\u5230\u786e\u8ba4\u6d88\u606f\u540e\u518d\u53d1\u9001\u4e0b\u4e00\u4e2a\u6570\u636e\u5305\u3002\u53d1\u9001\u8005\u8fd8\u4f1a\u4fdd\u7559\u4e00\u4e2a\u4ece\u53d1\u9001\u6570\u636e\u5305\u5f00\u59cb\u7684\u8ba1\u65f6\u5668\uff0c\u5982\u679c\u8ba1\u65f6\u5668\u8fc7\u671f\u5c31\u91cd\u65b0\u4f20\u8f93\u6570\u636e\u5305\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u901a\u5e38\u6570\u636e\u5305\u5df2\u7ecf\u4e22\u5931\u6216\u8005\u88ab\u7834\u574f\u3002"),(0,a.kt)("p",null,"TCP\u534f\u8bae\u5177\u6709\u4ee5\u4e0b5\u4e2a\u7279\u70b9\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TCP\u662f\u9762\u5411\u8fde\u63a5\u7684\u534f\u8bae\u3002\u5373\u5e94\u7528\u7a0b\u5e8f\u8981\u4f7f\u7528TCP\u534f\u8bae\uff0c\u9700\u8981\u5148\u5efa\u7acb\u8fde\u63a5\uff0c\u4f20\u9001\u6570\u636e\u5b8c\u6210\u540e\uff0c\u9700\u8981\u91ca\u653e\u8fde\u63a5\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TCP\u662f\u70b9\u5bf9\u70b9\u534f\u8bae\u3002\u5373\u6bcf\u6761TCP\u8fde\u63a5\u53ea\u80fd\u6709\u4e24\u4e2a\u7aef\u70b9\uff0c\u56e0\u6b64\u6bcf\u6761TCP\u8fde\u63a5\u53ea\u80fd\u662f\u70b9\u5bf9\u70b9\u7684\uff08\u53ea\u80fd\u662f\u4e00\u5bf9\u4e00\uff09\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TCP\u63d0\u4f9b\u53ef\u9760\u4f20\u8f93\u670d\u52a1\u3002\u5373TCP\u8fde\u63a5\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u65e0\u5dee\u9519\u3001\u4e0d\u4e22\u5931\u3001\u4e0d\u91cd\u590d\u53ca\u6309\u5e8f\u5230\u8fbe\u7684\u4f20\u8f93\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TCP\u63d0\u4f9b\u5168\u53cc\u5de5\u901a\u4fe1\u3002TCP\u8fde\u63a5\u7684\u4e24\u7aef\u90fd\u6709\u63a5\u6536\u7f13\u51b2\u533a\u548c\u53d1\u9001\u7f13\u51b2\u533a\uff0c\u56e0\u6b64\u53ef\u4ee5\u5b9e\u73b0\u5168\u53cc\u5de5\u901a\u4fe1\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TCP\u662f\u9762\u5411\u5b57\u8282\u6d41\u7684\u534f\u8bae\u3002\u4e0eUDP\u4e0d\u540c\uff0cTCP\u5c06\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e0b\u6765\u7684\u6570\u636e\u4ec5\u4ec5\u770b\u4f5c\u4e00\u8fde\u4e32\u7684\u65e0\u7ed3\u6784\u7684\u5b57\u8282\u6d41\uff0cTCP\u5e76\u4e0d\u5173\u5fc3\u5b57\u8282\u6d41\u7684\u542b\u4e49\uff0c\u53ea\u4fdd\u8bc1\u63a5\u6536\u65b9\u6536\u5230\u7684\u5b57\u8282\u6d41\u4e0e\u53d1\u9001\u65b9\u53d1\u51fa\u7684\u5b57\u8282\u6d41\u4e00\u81f4\u3002"))),(0,a.kt)("h2",{id:"2-tcp\u7684\u5206\u6bb5\u683c\u5f0f"},"2. TCP\u7684\u5206\u6bb5\u683c\u5f0f"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u9ad8\u6548\u5730\u5728\u7f51\u7edc\u4e2d\u4f20\u8f93\uff0c\u6d88\u606f\u88ab\u62c6\u5206\u6210\u4e00\u4e2a\u4e2a\u6d88\u606f\u5355\u5143\uff0c\u5728\u7f51\u7edc\u4e0a\u7684\u8ba1\u7b97\u673a\u4e4b\u95f4\u4f20\u9012\u3002\u6d88\u606f\u5355\u5143\u88ab\u79f0\u4e3a\u6bb5\uff08Segment\uff09\u3002\u4f8b\u5982\uff0c\u5728\u6d4f\u89c8\u7f51\u9875\u65f6\uff0cHTML\u6587\u4ef6\u4eceWeb\u670d\u52a1\u5668\u53d1\u9001\u5230\u5ba2\u6237\u7aef\u3002Web\u670d\u52a1\u5668\u7aef\u7684TCP\u5c42\u5c06\u6587\u4ef6\u7684\u5b57\u8282\u5e8f\u62c6\u5206\u6210\u6bb5\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u72ec\u7acb\u5730\u4f20\u9012\u5230Web\u670d\u52a1\u5668\u7aef\u7684IP\u5c42\u3002IP\u5c42\u5c06TCP\u6bb5\u5c01\u88c5\u6210IP\u6570\u636e\u5305\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u6570\u636e\u5305\u90fd\u6dfb\u52a0\u4e00\u4e2a\u5305\u5934\uff0c\u5176\u4e2d\u5305\u542b\u8981\u5230\u8fbe\u7684\u76ee\u6807\u5730\u5740\u3002\u5c3d\u7ba1\u6bcf\u4e2a\u6570\u636e\u5305\u90fd\u62e5\u6709\u76f8\u540c\u7684\u76ee\u6807\u5730\u5740\uff0c\u4f46\u5b83\u4eec\u53ef\u4ee5\u7ecf\u8fc7\u4e0d\u540c\u7684\u7f51\u7edc\u8def\u5f84\u5230\u8fbe\u76ee\u6807\u5730\u5740\u3002\u5f53\u76ee\u6807\u8ba1\u7b97\u673a\u4e0a\u7684\u5ba2\u6237\u7aef\u7a0b\u5e8f\u63a5\u6536\u5230\u8fd9\u4e9b\u6570\u636e\u5305\u540e\uff0cTCP\u5c42\u5c06\u5bf9\u5404\u4e2a\u6bb5\u8fdb\u884c\u91cd\u7ec4\uff0c\u4ee5\u786e\u4fdd\u8fd9\u4e9b\u6570\u636e\u5305\u7684\u987a\u5e8f\u548c\u5185\u5bb9\u90fd\u662f\u6b63\u786e\u7684\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u4ee5\u6d41\u7684\u65b9\u5f0f\u4f20\u9012\u7ed9\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u9762\u5411\u8fde\u63a5\u7684\u53ef\u9760\u4f20\u8f93\uff0cTCP\u7684\u5206\u6bb5\u683c\u5f0f\u6bd4UDP\u8981\u590d\u6742"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(8921).Z,width:"1000",height:"490"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6e90\u7aef\u53e3\uff0816\u4f4d\uff09\uff1a\u6807\u8bc6\u53d1\u9001\u6d88\u606f\u7684\u7aef\u53e3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76ee\u6807\u7aef\u53e3\uff0816\u4f4d\uff09\uff1a\u6807\u8bc6\u63a5\u6536\u6d88\u606f\u7684\u7aef\u53e3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53d1\u9001\u5e8f\u5217\u53f7\uff0832\u4f4d\uff09\uff1a\u672c\u6bb5\u4e2d\u7b2c1\u4e2a\u6570\u636e\u5b57\u8282\u7684\u987a\u5e8f\u53f7\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u63a5\u6536\u65f6\u7684\u786e\u8ba4\u5e8f\u5217\u53f7\uff0832\u4f4d\uff09\uff1a\u6307\u660e\u63a5\u6536\u65b9\u671f\u671b\u63a5\u6536\u7684\u4e0b\u4e00\u4e2a\u6570\u636e\u5b57\u8282\u7684\u987a\u5e8f\u53f7\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u504f\u79fb\u503c\uff084\u4f4d\uff09\uff1a\u6307\u5b9aTCP\u6bb5\u5934\u4e2d32\u4f4d\u5b57\u7684\u6570\u91cf\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4fdd\u7559\uff084\u4f4d\uff09\uff1a\u4e3a\u5c06\u6765\u4f7f\u7528\u9884\u7559\u7684\u4f4d\uff0c\u76ee\u524d\u4f7f\u7528\u65f6\u5c06\u8fd9\u4e9b\u4f4d\u8bbe\u7f6e\u4e3a0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CWR\uff1a\u7531\u53d1\u9001\u6d88\u606f\u7684\u4e3b\u673a\u8bbe\u7f6e\uff0c\u4ee5\u8868\u660e\u5b83\u6536\u5230\u5e26ECE\u6807\u8bb0\u7684TCP\u6570\u636e\u5305\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ECE\uff1a\u8868\u660e\u4e86TCP\u7684\u5bf9\u7b49\u4f53\u57283\u6b21\u63e1\u624b\u8fc7\u7a0b\u4e2d\u662f\u5426\u5177\u6709\u62e5\u585e\u901a\u77e5\u80fd\u529b\u3002\u5f53ECE\u4f4d\u7684\u503c\u7b49\u4e8e1\u65f6\uff0c\u8868\u793a\u76ee\u7684\u7aef\u53d1\u751f\u4e86\u963b\u585e\u3002\u56e0\u6b64\u5728\u4f20\u56de\u53d1\u9001\u7aef\u7684\u786e\u8ba4\u5305\u4e2d\u4f1a\u5c06\u6b64\u4f4d\u8bbe\u7f6e\u4e3a1\uff0c\u4ee5\u901a\u77e5\u53d1\u9001\u7aef\u964d\u4f4e\u5176\u6570\u636e\u7684\u53d1\u9001\u91cf\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"URG\uff1a\u8868\u793a\u53d1\u9001\u7684\u6570\u636e\u8981\u7acb\u5373\u88ab\u5904\u7406\uff0c\u65e0\u987b\u7b49\u5f85\u63a5\u6536\u8bbe\u5907\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u5b8c\u6210\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ACK\uff1a\u786e\u8ba4\u4ece\u4e3b\u673a\u6536\u5230TCP\u6570\u636e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PSH\uff1a\u8868\u793a\u6570\u636e\u5305\u4e2d\u7684\u6570\u636e\u5fc5\u987b\u8fc5\u901f\u4f20\u64ad\u5230\u4e0a\u5c42\u534f\u8bae\u8fdb\u884c\u5904\u7406\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RST\uff1a\u7531\u4e8e\u4e0d\u53ef\u80fd\u6062\u590d\u7684\u9519\u8bef\uff0c\u9020\u6210TCP\u8fde\u63a5\u91cd\u7f6e\u3002\u5f53\u63a5\u6536\u5230\u7684TCP\u6bb5\u4e2dRST\u4f4d\u4e3a1\u65f6\uff0c\u63a5\u6536\u65b9\u5fc5\u987b\u7ec8\u6b62\u8fde\u63a5\uff0c\u8fd9\u5c06\u5bfc\u81f4\u53cc\u65b9\u7acb\u523b\u91cd\u65b0\u8bbe\u7f6e\u8fde\u63a5\uff0c\u53ef\u80fd\u5bfc\u81f4\u5728\u4f20\u9001\u4e2d\u4e22\u5931\u6570\u636e\u3002RST\u4e0d\u662f\u6b63\u5e38\u5173\u95edTCP\u8fde\u63a5\u7684\u65b9\u5f0f\uff0c\u5b83\u53ea\u8868\u660e\u4e00\u4e2a\u5f02\u5e38\u6761\u4ef6\u3002\u901a\u5e38\u4f7f\u7528FIN\u6807\u5fd7\u5173\u95edTCP\u8fde\u63a5\u3002\u91cd\u65b0\u8bbe\u7f6eTCP\u8fde\u63a5\u7684\u539f\u56e0\u53ef\u80fd\u662f\u4e3b\u673a\u5d29\u6e83\u7b49\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SYN\uff1a\u6253\u5f00\u4e3b\u673a\u4e4b\u95f4\u865a\u62df\u7535\u8def\u7684\u8fde\u63a5\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"FIN\uff1a\u7ed3\u675fTCP\u8fde\u63a5\uff0c\u4e0d\u518d\u9700\u8981\u6570\u636e\u4f20\u8f93\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7a97\u53e3\u5927\u5c0f\uff0816\u4f4d\uff09\uff1a\u6307\u5b9a\u53d1\u9001\u8bbe\u5907\u5e0c\u671b\u63a5\u6536\u7684\u5b57\u8282\u6570\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6821\u9a8c\u548c\uff0816\u4f4d\uff09\uff1a\u6839\u636e\u62a5\u5934\u548c\u6570\u636e\u5b57\u6bb5\u8ba1\u7b97\u51fa\u7684\u6821\u9a8c\u548c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7d27\u6025\u6307\u9488\uff0816\u4f4d\uff09\uff1a\u4ece\u53d1\u9001\u5e8f\u5217\u53f7\u5f00\u59cb\u7684\u504f\u7f6e\u503c\uff0c\u6307\u5411\u5b57\u8282\u6d41\u4e2d\u7684\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u6b64\u4f4d\u7f6e\u4e4b\u524d\u7684\u6570\u636e\u662f\u7d27\u6025\u6570\u636e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u9009\u9879\uff08\u957f\u5ea6\u53ef\u53d8\uff09\uff1a\u76ee\u524d\u53ea\u6709\u4e00\u4e2a\u53ef\u9009\u9879\uff0c\u5373\u5efa\u7acb\u8fde\u63a5\u65f6\u6307\u5b9a\u7684\u6700\u5927\u6bb5\u957f\u3002"))),(0,a.kt)("h2",{id:"3-tcp\u8fde\u63a5\u7684\u5efa\u7acb\u548c\u91ca\u653e"},"3. TCP\u8fde\u63a5\u7684\u5efa\u7acb\u548c\u91ca\u653e"),(0,a.kt)("p",null,"TCP\u662f\u4e00\u4e2a\u9762\u5411\u8fde\u63a5\u7684\u53ef\u9760\u7684\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff0c\u5728\u6bcf\u6b21\u6570\u636e\u4f20\u8f93\u4e4b\u524d\u9700\u8981\u9996\u5148\u5efa\u7acb\u8fde\u63a5\uff0c\u5f53\u8fde\u63a5\u5efa\u7acb\u6210\u529f\u540e\u624d\u5f00\u59cb\u4f20\u8f93\u6570\u636e\uff0c\u6570\u636e\u4f20\u8f93\u5b8c\u6210\u540e\u8981\u91ca\u653e\u8fde\u63a5\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e0e\u6253\u7535\u8bdd\u7c7b\u4f3c\u3002\u7531\u4e8eTCP\u4f7f\u7528\u7684\u7f51\u7edc\u5c42IP\u534f\u8bae\u662f\u4e00\u4e2a\u4e0d\u53ef\u9760\u7684\u3001\u65e0\u8fde\u63a5\u7684\u534f\u8bae\uff0c\u4e3a\u4e86\u786e\u4fdd\u8fde\u63a5\u7684\u5efa\u7acb\u548c\u91ca\u653e\u90fd\u662f\u53ef\u9760\u7684\uff0cTCP\u4f7f\u7528\u4e09\u6b21\u63e1\u624b\u7684\u65b9\u5f0f\u6765\u5efa\u7acb\u8fde\u63a5\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"TCP\u8fde\u63a5\u7531\u64cd\u4f5c\u7cfb\u7edf\u901a\u8fc7Socket\u5f00\u53d1\u63a5\u53e3\u6765\u7ba1\u7406\uff0c\u5c06\u4f1a\u5728socket\u5f00\u53d1\u5f00\u53d1\u63a5\u53e3\u4e2d\u8ba8\u8bba")),(0,a.kt)("h3",{id:"31-\u5efa\u7acb\u8fde\u63a5"},"3.1. \u5efa\u7acb\u8fde\u63a5"),(0,a.kt)("p",null,"TCP\u901a\u8fc73\u6b21\u63e1\u624b\u7684\u65b9\u5f0f\u6765\u5efa\u7acb\u8fde\u63a5\uff0c\u5982\u56fe\u6240\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(6933).Z,width:"1000",height:"491"})),(0,a.kt)("p",null,"\u5efa\u7acb\u8fde\u63a5\u7684\u8fc7\u7a0b\u8bf4\u660e\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2aSYN\u62a5\u6587\u6bb5\uff08SYN\u4e3a1\uff09\u6307\u660e\u5e0c\u671b\u8fde\u63a5\u7684\u670d\u52a1\u5668\u7aef\u53e3\u548c\u521d\u59cb\u987a\u5e8f\u53f7\uff08ISN\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u670d\u52a1\u5668\u53d1\u56de\u5305\u542b\u670d\u52a1\u5668\u7684\u521d\u59cb\u987a\u5e8f\u53f7\u7684SYN\u62a5\u6587\u6bb5\uff08SYN\u4e3a1\uff09\u4f5c\u4e3a\u5e94\u7b54\u3002\u540c\u65f6\uff0c\u5c06\u786e\u8ba4\u53f7\u8bbe\u7f6e\u4e3a\u5ba2\u6237\u7aef\u7684ISN\u52a01\u4ee5\u5bf9\u5ba2\u6237\u7aef\u7684SYN\u62a5\u6587\u6bb5\u8fdb\u884c\u786e\u8ba4\uff08ACK\u5b57\u6bb5\u4e5f\u4e3a1\uff0c\u8868\u793a\u8be5\u62a5\u6587\u662f\u5bf9SYN = 1\u7684\u62a5\u6587\u7684\u5e94\u7b54\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u5fc5\u987b\u5c06\u786e\u8ba4\u53f7\u8bbe\u7f6e\u4e3a\u670d\u52a1\u5668\u7684ISN\u52a01\u4ee5\u5bf9\u670d\u52a1\u5668\u7684SYN\u62a5\u6587\u6bb5\u8fdb\u884c\u786e\u8ba4\uff0c\u8be5\u62a5\u6587\u901a\u77e5\u76ee\u7684\u4e3b\u673a\u53cc\u65b9\u5df2\u5b8c\u6210\u8fde\u63a5\u5efa\u7acb\u3002"))),(0,a.kt)("h3",{id:"32-\u6570\u636e\u4f20\u8f93"},"3.2. \u6570\u636e\u4f20\u8f93"),(0,a.kt)("p",null,"TCP\u662f\u4e00\u79cd\u53ef\u9760\u7684\u4f20\u8f93\u534f\u8bae\uff0c\u5b83\u4f7f\u7528\u5e8f\u5217\u53f7\u6765\u6807\u8bc6\u6570\u636e\u4e2d\u7684\u6bcf\u4e2a\u5b57\u8282\u3002\u5e8f\u5217\u53f7\u4e2d\u5305\u542b\u6bcf\u4e2a\u4e3b\u673a\u4e2d\u53d1\u9001\u7684\u5b57\u8282\u7684\u987a\u5e8f\uff0c\u4ece\u800c\u4f7f\u76ee\u7684\u4e3b\u673a\u53ef\u4ee5\u6309\u7167\u987a\u5e8f\u5bf9\u6570\u636e\u8fdb\u884c\u91cd\u7ec4\u3002\u6bcf\u4e2a\u5b57\u8282\u7684\u5e8f\u5217\u53f7\u662f\u9012\u589e\u7684\u3002\u5728\u5efa\u7acb\u8fde\u63a5\u65f63\u6b21\u63e1\u624b\u7684\u524d\u4e24\u6b21\u4e2d\uff0c\u4e24\u7aef\u7684\u4e3b\u673a\u4f1a\u4ea4\u6362\u521d\u59cb\u5e8f\u5217\u53f7\uff08ISN\uff09\u3002\u521d\u59cb\u5e8f\u5217\u53f7\u662f\u968f\u673a\u7684\uff0c\u4e0d\u53ef\u9884\u77e5\u7684\u3002"),(0,a.kt)("p",null,"TCP\u4e3b\u8981\u91c7\u7528\u7d2f\u8ba1\u786e\u8ba4\u7684\u673a\u5236\u3002\u63a5\u6536\u8005\u6536\u5230\u6570\u636e\u540e\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a\u786e\u8ba4\u5305\uff0c\u6307\u5b9a\u9700\u8981\u63a5\u6536\u7684\u4e0b\u4e00\u4e2a\u5b57\u8282\u7684\u5e8f\u5217\u53f7\u3002\u4f8b\u5982\uff0c\u4e3b\u673aA\u5411\u4e3b\u673aB\u53d1\u90014\u5b57\u8282\u7684\u6570\u636e\uff0c\u5b83\u4eec\u7684\u5e8f\u5217\u53f7\u5206\u522b\u4e3a100\u3001101\u3001102\u548c103\uff0c\u4e3b\u673aB\u5728\u63a5\u6536\u5230\u8fd94\u5b57\u8282\u540e\uff0c\u4f1a\u5411\u4e3b\u673aA\u53d1\u9001\u4e00\u4e2a\u5305\u542b\u5e8f\u5217\u53f7104\u7684\u786e\u8ba4\u5305\uff0c\u8868\u660e\u5b83\u5e0c\u671b\u63a5\u6536\u7684\u4e0b\u4e00\u4e2a\u5b57\u8282\u7684\u5e8f\u5217\u53f7\u4e3a104\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u7d2f\u8ba1\u786e\u8ba4\u5916\uff0c\u63a5\u6536\u8005\u8fd8\u53ef\u4ee5\u53d1\u9001\u9009\u62e9\u786e\u8ba4\u5305\u3002\u901a\u5e38\u5728\u6570\u636e\u4e22\u5931\u6216\u635f\u574f\u65f6\uff0c\u63a5\u6536\u8005\u53d1\u9001\u9009\u62e9\u786e\u8ba4\u5305\u6765\u6307\u5b9a\u53d1\u9001\u8005\u91cd\u65b0\u53d1\u9001\u6307\u5b9a\u7684\u6570\u636e\u5305\u3002"),(0,a.kt)("p",null,"TCP\u4f7f\u7528\u5e8f\u5217\u53f7\u548c\u786e\u8ba4\u673a\u5236\u53ef\u4ee5\u4e22\u5f03\u91cd\u590d\u6570\u636e\u3001\u91cd\u65b0\u53d1\u9001\u4e22\u5931\u7684\u6570\u636e\u3001\u6309\u6b63\u786e\u7684\u987a\u5e8f\u6765\u6574\u7406\u6570\u636e\uff0c\u4ece\u800c\u786e\u4fdd\u6536\u5230\u6570\u636e\u7684\u6b63\u786e\u6027\u3002TCP\u4f7f\u7528\u68c0\u9a8c\u548c\uff08Checksum\uff09\u6765\u9a8c\u8bc1\u6570\u636e\u7684\u6b63\u786e\u6027\u3002"),(0,a.kt)("p",null,"TCP\u8fd8\u63d0\u4f9b\u6d41\u91cf\u63a7\u5236\u7684\u529f\u80fd\u3002\u5982\u679c\u53d1\u9001\u65b9\u4e3b\u673a\u7684\u7f51\u5361\u5e26\u5bbd\u5927\u4e8e\u63a5\u6536\u65b9\u4e3b\u673a\u7684\u7f51\u5361\u5e26\u5bbd\uff0c\u5219\u8981\u5bf9\u53d1\u9001\u6570\u636e\u7684\u6d41\u91cf\u8fdb\u884c\u63a7\u5236\uff0c\u5426\u5219\u63a5\u6536\u65b9\u5c06\u65e0\u6cd5\u7a33\u5b9a\u5730\u63a5\u6536\u548c\u5904\u7406\u6570\u636e\u3002TCP\u4f7f\u7528\u6ed1\u52a8\u7a97\u53e3\u6765\u63a7\u5236\u6d41\u91cf\u3002\u5728\u6bcf\u4e2aTCP\u6bb5\u4e2d\uff0c\u63a5\u6536\u8005\u90fd\u8981\u5728\u201c\u63a5\u6536\u7a97\u53e3\u5927\u5c0f\u201d\u5b57\u6bb5\u4e2d\u6307\u5b9a\u5f53\u524d\u8fde\u63a5\u5e0c\u671b\u63a5\u6536\u7684\u6570\u636e\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u5b57\u8282\u3002\u53d1\u9001\u65b9\u4e3b\u673a\u6700\u591a\u53ea\u80fd\u53d1\u9001\u201c\u63a5\u6536\u7a97\u53e3\u5927\u5c0f\u201d\u5b57\u6bb5\u4e2d\u6307\u5b9a\u6570\u91cf\u7684\u6570\u636e\uff0c\u7b49\u6536\u5230\u786e\u8ba4\u4fe1\u606f\u540e\u518d\u53d1\u9001\u4e0b\u4e00\u7ec4\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"33-\u91ca\u653e\u94fe\u63a5"},"3.3. \u91ca\u653e\u94fe\u63a5"),(0,a.kt)("p",null,"\u5728\u591a\u6570\u60c5\u51b5\u4e0b\uff0cTCP\u4f7f\u75284\u6b21\u63e1\u624b\u6765\u65ad\u5f00\u8fde\u63a5\u3002\u5f53\u4e00\u65b9\u5e0c\u671b\u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u5b83\u4f1a\u5411\u5bf9\u65b9\u53d1\u9001\u4e00\u4e2aFIN\u5305\uff1b\u5bf9\u65b9\u5728\u6536\u5230FIN\u5305\u540e\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2aACK\u786e\u8ba4\u5305\u3002\u56e0\u6b64\uff0c\u901a\u5e38\u6765\u8bf4\u53cc\u5411\u8fde\u63a5\u9700\u8981\u4ece\u6bcf\u4e2aTCP\u7aef\u70b9\u53d1\u9001\u4e00\u5bf9FIN\u548cACK\u6bb5\u3002"),(0,a.kt)("p",null,"TCP\u4e5f\u53ef\u4ee5\u4f7f\u75283\u6b21\u63e1\u624b\u7684\u65b9\u5f0f\u65ad\u5f00\u8fde\u63a5\u3002\u5f53\u4e3b\u673aA\u53d1\u9001FIN\u5305\u540e\uff0c\u4e3b\u673aB\u56de\u590dFIN\u52a0ACK\u5305\uff0c\u5c06\u4e0a\u9762\u7684\u4e24\u4e2a\u6b65\u9aa4\u5408\u5e76\u4e3a\u4e00\u4e2a\u6b65\u9aa4\uff0c\u7136\u540e\u4e3b\u673aA\u518d\u56de\u590dACK\u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(9115).Z,width:"1280",height:"877"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u6325\u624b\uff1aA\u53d1\u9001\u4e00\u4e2aFIN\uff0c\u7528\u6765\u5173\u95edA\u5230B\u7684\u6570\u636e\u4f20\u9001\uff0cA\u8fdb\u5165FIN_WAIT_1\uff08\u4e3b\u52a8\u5173\u95ed\uff09\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u6b21\u6325\u624b\uff1aB\u6536\u5230FIN\u540e\uff0c\u53d1\u9001\u4e00\u4e2aACK\u7ed9A\uff0c\u786e\u8ba4\u5e8f\u53f7\u4e3a\u6536\u5230\u5e8f\u53f7+1\uff08\u4e0eSYN\u76f8\u540c\uff0c\u4e00\u4e2aFIN\u5360\u7528\u4e00\u4e2a\u5e8f\u53f7\uff09\uff0cB\u8fdb\u5165CLOSE_WAIT\uff08\u88ab\u52a8\u5173\u95ed\uff0c\u5173\u95ed\u7b49\u5f85\uff09\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u6b21\u6325\u624b\uff1aB\u53d1\u9001\u4e00\u4e2aFIN\uff0c\u7528\u6765\u5173\u95edB\u5230A\u7684\u6570\u636e\u4f20\u9001\uff0cB\u8fdb\u5165LAST_ACK\uff08\u6700\u540e\u786e\u8ba4\uff09\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u56db\u6b21\u6325\u624b\uff1aA\u6536\u5230FIN\u540e\uff0cA\u8fdb\u5165TIME_WAIT\u72b6\u6001\uff08\u6ce8\u610f\u6b64\u65f6TCP\u8fde\u63a5\u8fd8\u6ca1\u6709\u91ca\u653e\uff0c\u5fc5\u987b\u7ecf\u8fc72MSL\uff08\u6700\u5927\u62a5\u6587\u6bb5\u5bff\u547d\uff09\u7684\u65f6\u95f4\uff09\uff0c\u63a5\u7740\u53d1\u9001\u4e00\u4e2aACK\u7ed9B\uff0c\u786e\u8ba4\u5e8f\u53f7\u4e3a\u6536\u5230\u5e8f\u53f7+1\uff0cB\u8fdb\u5165CLOSED\u72b6\u6001\uff0c\u5b8c\u6210\u56db\u6b21\u6325\u624b\u3002")),(0,a.kt)("admonition",{title:"\u4e3a\u4ec0\u4e48\u8981\u7b49\u5f852MSL\uff1a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"MSL\uff08Maximum Segment Lifetime\uff09\uff0c\u8fd9\u662fTCP \u5bf9TCP Segment \u751f\u5b58\u65f6\u95f4\u7684\u9650\u5236\u3002\n\u5ba2\u6237\u7aef\u53d1\u9001\u6700\u540e\u4e00\u4e2aACK\u540e\uff0c\u4e0d\u80fd\u786e\u4fdd\u670d\u52a1\u7aef\u4e00\u5b9a\u80fd\u6536\u5230\uff0c\u5047\u5982ACK\u6ca1\u6709\u88ab\u670d\u52a1\u7aef\u6536\u5230\uff0c\u8d85\u65f6\u540e\u670d\u52a1\u7aef\u91cd\u65b0\u8fdb\u884c\u7b2c\u4e09\u6b21\u6325\u624b\uff0c\u8fd9\u65f6\u5019\u5982\u679cA\u8fd8\u5728\u7b49\u5f85\uff0c\u53c8\u6536\u5230\u7b2c\u4e09\u6b21\u6325\u624b\u7684FIN\u6d88\u606f\uff0c\u8bc1\u660eACK\u6ca1\u6709\u6210\u529f\u5230\u8fbe\uff0c\u8fd9\u4e2a\u65f6\u95f4\u81f3\u5c11\u662f\uff1a\u670d\u52a1\u7aef\u7684\u8d85\u65f6\u65f6\u95f4 + FIN\u7684\u4f20\u8f93\u65f6\u95f4\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u53ef\u9760\uff0c\u91c7\u7528\u66f4\u52a0\u4fdd\u5b88\u7684\u7b49\u5f85\u65f6\u95f42MSL\u3002\n\u5982\u679c\u5ba2\u6237\u7aef\u6b64\u65f6\u6ca1\u6709\u5728\u7b49\u5f85\u72b6\u6001\u76f4\u63a5CLOSED\uff0c\u670d\u52a1\u7aef\u8d85\u65f6\u540e\u53d1\u9001FIN\u6d88\u606f\u5230\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u8868\u793a\u5e76\u4e0d\u77e5\u9053\u8fd9\u6570\u636e\u5305\u662f\u5e72\u4ec0\u4e48\u7684\uff0c\u6240\u4ee5\u54cd\u5e94\u4e00\u4e2aRST\uff08\u7528\u6765\u5f02\u5e38\u7684\u5173\u95ed\u8fde\u63a5\uff0c\u8bf7\u81ea\u884c\u4e86\u89e3\uff09,\u5982\u679c\u5ba2\u6237\u7aef\u6709\u4e00\u4e2a\u548c\u670d\u52a1\u7aef\u7684\u65b0\u8fde\u63a5\u5728\u8fd9\u4e2a\u7aef\u53e3\u4e0a\u5efa\u7acb\u3002\u8fd9\u5c06\u53ef\u80fd\u5bfc\u81f4\u540e\u9762\u5efa\u7acb\u7684\u8fde\u63a5\u53d7\u5230\u5f71\u54cd\uff0cTCP\u662f\u53ef\u9760\u7684\u8fde\u63a5\uff0c\u6240\u4ee5\u662f\u4e0d\u5e0c\u671b\u8fd9\u79cd\u4e0d\u9760\u8c31\u7684\u4e8b\u60c5\u51fa\u73b0\u7684")))}k.isMDXComponent=!0},9115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tcp_close-70a5ca3c0d77924808ecbfade3a23681.jpeg"},6933:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tcp_connect-8c2f3d69428003eaa0d3ab7f2393246b.jpeg"},8921:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tcp_head-9f341780308827e63e4d0b0189bb2cc2.jpeg"}}]);