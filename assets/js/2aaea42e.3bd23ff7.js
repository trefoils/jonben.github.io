"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2043:(e,t,n)=>{n.d(t,{u:()=>l});var i=n(7294);const a={hidden:{contentVisibility:"hidden"},item:{width:"60px",height:"60px",lineHeight:"60px",textAlign:"center",color:"#fff",background:"#000",marginBottom:"10px"}};function l(e){let{hidden:t}=e;return i.createElement("div",{className:"g-wrap"},i.createElement("div",{style:a.item},"1111"),i.createElement("div",{style:t?{...a.hidden,...a.item}:a.item},"2222"))}},6606:(e,t,n)=>{n.d(t,{z:()=>r});var i=n(7294);const a="preview_wToN",l="img_MFLS";function r(e){let{width:t="atuo",src:n,text:r}=e;return i.createElement("div",{className:a,style:{width:t}},i.createElement("img",{className:l,src:n.default,alt:""}),i.createElement("div",null,r))}},4647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905)),l=n(2043),r=n(6606);const o={slug:"contentVisibility",title:"\u7528css\u65b0\u7279\u6027\u4f18\u5316\u957f\u5217\u8868",authors:"jonben",tags:["javascript"]},p=void 0,s={permalink:"/blog/contentVisibility",editUrl:"https://github.com/jonbenery/weblog/blog/2023-01-30-contentVisibility/index.mdx",source:"@site/blog/2023-01-30-contentVisibility/index.mdx",title:"\u7528css\u65b0\u7279\u6027\u4f18\u5316\u957f\u5217\u8868",description:"\u5e9f\u8bdd\u4e0d\u591a\u8bf4\uff0c\u8be5\u5c5e\u6027\u4e3a content-visibility",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:9.555,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"jonben"}],frontMatter:{slug:"contentVisibility",title:"\u7528css\u65b0\u7279\u6027\u4f18\u5316\u957f\u5217\u8868",authors:"jonben",tags:["javascript"]},prevItem:{title:"\u6839\u636e\u65f6\u95f4\u6233\u8ba1\u7b97\u51fa\u5177\u4f53\u65f6\u95f4",permalink:"/blog/computedTime"},nextItem:{title:"\u62d6\u62fd\u83b7\u53d6\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6",permalink:"/blog/dragDir"}},c={authorsImageUrls:[void 0]},d=[{value:"1. \u4f55\u4e3a content-visibility\uff1f",id:"1-\u4f55\u4e3a-content-visibility",level:2},{value:"2. contain-intrinsic-size",id:"2-contain-intrinsic-size",level:2},{value:"3. \u5229\u7528 content-visibility: hidden \u4f18\u5316\u5c55\u793a\u5207\u6362\u6027\u80fd",id:"3-\u5229\u7528-content-visibility-hidden-\u4f18\u5316\u5c55\u793a\u5207\u6362\u6027\u80fd",level:2},{value:"4. \u5229\u7528 content-visibility: auto \u5b9e\u73b0\u61d2\u52a0\u8f7d\u6216\u865a\u62df\u5217\u8868",id:"4-\u5229\u7528-content-visibility-auto-\u5b9e\u73b0\u61d2\u52a0\u8f7d\u6216\u865a\u62df\u5217\u8868",level:2},{value:"5. \u5229\u7528 contain-intrinsic-size \u89e3\u51b3\u6eda\u52a8\u6761\u6296\u52a8\u95ee\u9898",id:"5-\u5229\u7528-contain-intrinsic-size-\u89e3\u51b3\u6eda\u52a8\u6761\u6296\u52a8\u95ee\u9898",level:2},{value:"6.content-visibility \u7684\u4e00\u4e9b\u5176\u4ed6\u95ee\u9898",id:"6content-visibility-\u7684\u4e00\u4e9b\u5176\u4ed6\u95ee\u9898",level:2}],u={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5e9f\u8bdd\u4e0d\u591a\u8bf4\uff0c\u8be5\u5c5e\u6027\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility")),(0,a.kt)("h2",{id:"1-\u4f55\u4e3a-content-visibility"},"1. \u4f55\u4e3a content-visibility\uff1f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility")," \uff1a\u5c5e\u6027\u63a7\u5236\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u6e32\u67d3\u5176\u5185\u5bb9\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u4ee3\u7406\uff08\u6d4f\u89c8\u5668\uff09\u6f5c\u5728\u5730\u7701\u7565\u5927\u91cf\u5e03\u5c40\u548c\u6e32\u67d3\u5de5\u4f5c\uff0c\u76f4\u5230\u9700\u8981\u5b83\u4e3a\u6b62\u3002"),(0,a.kt)("admonition",{title:"MDN \u539f\u6587",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The content-visibility CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed \u2014 which makes the initial page load much faster.")),(0,a.kt)("p",null,"\u5b83\u6709\u51e0\u4e2a\u5e38\u89c1\u7684\u53d6\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CSS"},"content-visibility: visible;\ncontent-visibility: hidden;\ncontent-visibility: auto;\n")),(0,a.kt)("p",null,"\u5206\u522b\u89e3\u91ca\u4e00\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"content-visibility: visible")," \uff1a\u9ed8\u8ba4\u503c\uff0c\u6ca1\u6709\u4efb\u4f55\u6548\u679c\uff0c\u76f8\u5f53\u4e8e\u6ca1\u6709\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"content-visibility"),"\uff0c\u5143\u7d20\u7684\u6e32\u67d3\u4e0e\u5f80\u5e38\u4e00\u81f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"content-visibility: hidden")," \uff1a\u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"display: none")," \u7c7b\u4f3c\uff0c\u7528\u6237\u4ee3\u7406\u5c06\u8df3\u8fc7\u5176\u5185\u5bb9\u7684\u6e32\u67d3\u3002\uff08\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8df3\u8fc7\u7684\u662f\u5185\u5bb9\u7684\u6e32\u67d3\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"content-visibility: auto")," \uff1a\u5982\u679c\u8be5\u5143\u7d20\u4e0d\u5728\u5c4f\u5e55\u4e0a\uff0c\u5e76\u4e14\u4e0e\u7528\u6237\u65e0\u5173\uff0c\u5219\u4e0d\u4f1a\u6e32\u67d3\u5176\u540e\u4ee3\u5143\u7d20\u3002")),(0,a.kt)("h2",{id:"2-contain-intrinsic-size"},"2. contain-intrinsic-size"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility")," \u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a\u4e0e\u4e4b\u914d\u5957\u7684\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"contain-intrinsic-size"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"contain-intrinsic-size")," \uff1a\u63a7\u5236\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility")," \u6307\u5b9a\u7684\u5143\u7d20\u7684\u81ea\u7136\u5927\u5c0f\u3002"),(0,a.kt)("h2",{id:"3-\u5229\u7528-content-visibility-hidden-\u4f18\u5316\u5c55\u793a\u5207\u6362\u6027\u80fd"},"3. \u5229\u7528 content-visibility: hidden \u4f18\u5316\u5c55\u793a\u5207\u6362\u6027\u80fd"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5047\u8bbe\u6211\u4eec\u6709\u4e24\u4e2a DIV \u5305\u88f9\u6846\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="g-wrap">\n  <div>1111</div>\n  <div class="hidden">2222</div>\n</div>\n')),(0,a.kt)("p",null,"\u8bbe\u7f6e\u4e24\u4e2a div \u4e3a 200x200 \u7684\u9ed1\u8272\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CSS"},".g-wrap > div {\n  width: 60px;\n  height: 60px;\n  background: #000;\n}\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)(l.u,{mdxType:"RenderHtml"}),(0,a.kt)("p",null,"OK\uff0c\u6ca1\u6709\u95ee\u9898\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7ed9\u5176\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".hidden")," \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: hidden"),"\uff0c\u770b\u770b\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CSS"},".hidden {\n  content-visibility: hidden;\n}\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)(l.u,{hidden:"hidden",mdxType:"RenderHtml"}),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u4ed4\u7ec6\u770b\u6548\u679c\uff0c\u8fd9\u91cc\u6dfb\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: hidden")," \u4e4b\u540e\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6d88\u5931\u7684\u53ea\u662f\u6dfb\u52a0\u4e86\u8be5\u5143\u7d20\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"div")," \u7684\u5b50\u5143\u7d20\u6d88\u5931\u4e0d\u89c1\uff0c\u800c\u7236\u5143\u7d20\u672c\u8eab\u53ca\u5176\u6837\u5f0f\uff0c\u8fd8\u662f\u5b58\u5728\u9875\u9762\u4e0a\u7684\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u53bb\u6389\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: hidden")," \u7684\u5143\u7d20\u672c\u8eab\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"width"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"padding"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"margin")," \u7b49\u5c5e\u6027\uff0c\u5219\u5143\u7d20\u770b\u4e0a\u53bb\u5c31\u5982\u540c\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"display: none")," \u4e00\u822c\uff0c\u5728\u9875\u9762\u4e0a\u6d88\u5931\u4e0d\u89c1\u4e86\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: hidden")," \u7684\u4f5c\u7528\u662f\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: hidden")," \u7684\u5143\u7d20\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5176\u5143\u7d20\u7684\u5b50\u5143\u7d20\u5c06\u88ab\u9690\u85cf\uff0c\u4f46\u662f\uff0c\u5b83\u7684\u6e32\u67d3\u72b6\u6001\u5c06\u4f1a\u88ab\u7f13\u5b58"),"\u3002\u6240\u4ee5\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: hidden")," \u88ab\u79fb\u9664\u65f6\uff0c\u7528\u6237\u4ee3\u7406\u65e0\u9700\u91cd\u5934\u5f00\u59cb\u6e32\u67d3\u5b83\u548c\u5b83\u7684\u5b50\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u6211\u4eec\u5c06\u8fd9\u4e2a\u5c5e\u6027\u5e94\u7528\u5728\u4e00\u4e9b\u4e00\u5f00\u59cb\u9700\u8981\u88ab\u9690\u85cf\uff0c\u4f46\u662f\u5176\u540e\u5728\u9875\u9762\u7684\u67d0\u4e00\u65f6\u523b\u9700\u8981\u88ab\u6e32\u67d3\uff0c\u6216\u8005\u662f\u4e00\u4e9b\u9700\u8981\u88ab\u9891\u7e41\u5207\u6362\u663e\u793a\u3001\u9690\u85cf\u72b6\u6001\u7684\u5143\u7d20\u4e0a\uff0c\u5176\u6e32\u67d3\u6548\u7387\u5c06\u4f1a\u6709\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u63d0\u5347\u3002"),(0,a.kt)("h2",{id:"4-\u5229\u7528-content-visibility-auto-\u5b9e\u73b0\u61d2\u52a0\u8f7d\u6216\u865a\u62df\u5217\u8868"},"4. \u5229\u7528 content-visibility: auto \u5b9e\u73b0\u61d2\u52a0\u8f7d\u6216\u865a\u62df\u5217\u8868"),(0,a.kt)("p",null,"OK\uff0c\u63a5\u4e0b\u6765\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility")," \u7684\u6838\u5fc3\u7528\u6cd5\uff0c\u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," \u5c5e\u6027\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u7684\u4f5c\u7528\u662f\uff0c\u5982\u679c\u8be5\u5143\u7d20\u4e0d\u5728\u5c4f\u5e55\u4e0a\uff0c\u5e76\u4e14\u4e0e\u7528\u6237\u65e0\u5173\uff0c\u5219\u4e0d\u4f1a\u6e32\u67d3\u5176\u540e\u4ee3\u5143\u7d20\u3002\u662f\u4e0d\u662f\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"LazyLoad")," \u975e\u5e38\u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u770b\u8fd9\u6837\u4e00\u4e2a DEMO \uff0c\u4e86\u89e3\u5176\u4f5c\u7528\uff1a"),(0,a.kt)("p",null,"\u5047\u8bbe\uff0c\u6211\u4eec\u5b58\u5728\u8fd9\u6837\u4e00\u4e2a HTML \u7ed3\u6784\uff0c\u542b\u6709\u5927\u91cf\u7684\u6587\u672c\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<div class="g-wrap">\n    <div class="paragraph">...</div>\n    // ... \u5305\u542b\u4e86 N \u4e2a paragraph\n    <div class="paragraph">...</div>\n</div>\n')),(0,a.kt)("p",null,"\u6bcf\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".paragraph")," \u7684\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},"Lorem Start!\nLorem ipsum dolor sit amet consectetur adipisicing elit.Nonvitae voluptates maxime solutaimpedit doloremque atque quasi dignissimosdelectus distinctio aut commodieaque nostrum maiores nulla! Ipsum voluptatibus alias suscipit!\nLorem ipsum dolor sit amet consectetur adipisicingelit.Non vitae voluptates maxime solutaimpedit doloremque atque quasi dignissimos,delectus distinctio aut commodi eaque nostrum maiores nulla! Ipsum voluptatibus alias suscipit!\nLorem End!\n")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6574\u4e2a\u7684\u9875\u9762\u770b\u8d77\u6765\u5c31\u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)(r.z,{width:"600px",src:n(5548),mdxType:"RenderImg"}),(0,a.kt)("p",null,"\u7531\u4e8e\uff0c\u6211\u4eec\u6ca1\u6709\u5bf9\u9875\u9762\u5185\u5bb9\u8fdb\u884c\u4efb\u4f55\u5904\u7406\uff0c\u56e0\u6b64\uff0c\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".paragraph")," \u5728\u9875\u9762\u5237\u65b0\u7684\u4e00\u77ac\u95f4\uff0c\u90fd\u4f1a\u8fdb\u884c\u6e32\u67d3\uff0c\u770b\u5230\u7684\u6548\u679c\u5c31\u5982\u4e0a\u6240\u793a\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u6108\u52a0\u8d8b\u4e8e\u667a\u80fd\uff0c\u57fa\u4e8e\u8fd9\u79cd\u573a\u666f\uff0c\u5176\u5b9e\u6211\u4eec\u975e\u5e38\u5e0c\u671b\u5bf9\u4e8e\u4ecd\u672a\u770b\u5230\uff0c\u4ecd\u65e7\u672a\u6eda\u52a8\u5230\u7684\u533a\u57df\uff0c\u53ef\u4ee5\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u53ea\u6709\u5230\u6211\u4eec\u9700\u8981\u5c55\u793a\u3001\u6eda\u52a8\u5230\u8be5\u5904\u65f6\uff0c\u9875\u9762\u5185\u5bb9\u624d\u8fdb\u884c\u6e32\u67d3\u3002"),(0,a.kt)("p",null,"\u57fa\u4e8e\u8fd9\u79cd\u573a\u666f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u5c31\u5e94\u8fd0\u800c\u751f\u4e86\uff0c\u5b83\u5141\u8bb8\u6d4f\u89c8\u5668\u5bf9\u4e8e\u8bbe\u7f6e\u4e86\u8be5\u5c5e\u6027\u7684\u5143\u7d20\u8fdb\u884c\u5224\u65ad\uff0c\u5982\u679c\u8be5\u5143\u7d20\u5f53\u524d\u4e0d\u5904\u4e8e\u89c6\u53e3\u5185\uff0c\u5219\u4e0d\u6e32\u67d3\u8be5\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u57fa\u4e8e\u4e0a\u8ff0\u7684\u4ee3\u7801\uff0c\u53ea\u9700\u8981\u6700\u5c0f\u5316\uff0c\u6dfb\u52a0\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CSS"},".paragraph {\n  content-visibility: auto;\n}\n")),(0,a.kt)("p",null,"\u518d\u770b\u770b\u6548\u679c\uff0c\u4ed4\u7ec6\u89c2\u5bdf\u53f3\u4fa7\u7684\u6eda\u52a8\u6761\uff1a"),(0,a.kt)(r.z,{width:"600px",src:n(3076),mdxType:"RenderImg"}),(0,a.kt)("p",null,"\u53ef\u80fd\u4f60\u8fd8\u6ca1\u610f\u8bc6\u5230\u53d1\u751f\u4e86\u4ec0\u4e48\uff0c\u6211\u4eec\u5bf9\u6bd4\u4e0b\u6dfb\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u548c\u6ca1\u6709\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u7684\u4e24\u79cd\u6548\u679c\u4e0b\u6587\u672c\u7684\u6574\u4f53\u9ad8\u5ea6\uff1a"),(0,a.kt)(r.z,{width:"600px",src:n(2710),mdxType:"RenderImg"}),(0,a.kt)("p",null,"\u6709\u7740\u975e\u5e38\u660e\u663e\u7684\u5dee\u5f02\uff0c\u8fd9\u662f\u56e0\u4e3a\uff0c\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u7684\u5143\u7d20\uff0c\u5728\u975e\u53ef\u89c6\u533a\u57df\u5185\uff0c\u76ee\u524d\u5e76\u6ca1\u6709\u88ab\u6e32\u67d3\uff0c\u56e0\u6b64\uff0c\u53f3\u4fa7\u5185\u5bb9\u7684\u9ad8\u5ea6\u5176\u5b9e\u662f\u6bd4\u6b63\u5e38\u72b6\u6001\u4e0b\u5c11\u4e86\u4e00\u5927\u622a\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5b9e\u9645\u5f00\u59cb\u8fdb\u884c\u6eda\u52a8\uff0c\u770b\u770b\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1a"),(0,a.kt)(r.z,{width:"600px",src:n(7620),mdxType:"RenderImg"}),(0,a.kt)("p",null,"\u7531\u4e8e\u4e0b\u65b9\u7684\u5143\u7d20\u5728\u6eda\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c\u51fa\u73b0\u5728\u89c6\u53e3\u8303\u56f4\u5185\u624d\u88ab\u6e32\u67d3\uff0c\u56e0\u6b64\uff0c\u6eda\u52a8\u6761\u51fa\u73b0\u4e86\u660e\u663e\u7684\u98d8\u5ffd\u4e0d\u5b9a\u7684\u6296\u52a8\u73b0\u8c61\u3002\uff08\u5f53\u7136\u8fd9\u4e5f\u662f\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u7684\u4e00\u4e2a\u5c0f\u95ee\u9898\u4e4b\u4e00\uff09\uff0c\u4e0d\u8fc7\u660e\u663e\u53ef\u4ee5\u770b\u51fa\uff0c\u8fd9\u4e0e\u6211\u4eec\u901a\u5e38\u4f7f\u7528 JavaScript \u5b9e\u73b0\u7684\u61d2\u52a0\u8f7d\u6216\u8005\u5ef6\u8fdf\u52a0\u8f7d\u975e\u5e38\u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4e0e\u61d2\u52a0\u8f7d\u4e0d\u540c\u7684\u662f\uff0c\u5728\u5411\u4e0b\u6eda\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e0a\u65b9\u6d88\u5931\u7684\u5df2\u7ecf\u88ab\u6e32\u67d3\u8fc7\u4e14\u6d88\u5931\u5728\u89c6\u53e3\u7684\u5143\u7d20\uff0c\u4e5f\u4f1a\u56e0\u4e3a\u6d88\u5931\u5728\u89c6\u53e3\u4e2d\uff0c\u91cd\u65b0\u88ab\u9690\u85cf\u3002\u56e0\u6b64\uff0c\u5373\u4fbf\u9875\u9762\u6eda\u52a8\u5230\u6700\u4e0b\u65b9\uff0c\u6574\u4f53\u7684\u6eda\u52a8\u6761\u9ad8\u5ea6\u8fd8\u662f\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u7684\u3002"),(0,a.kt)("h2",{id:"5-\u5229\u7528-contain-intrinsic-size-\u89e3\u51b3\u6eda\u52a8\u6761\u6296\u52a8\u95ee\u9898"},"5. \u5229\u7528 contain-intrinsic-size \u89e3\u51b3\u6eda\u52a8\u6761\u6296\u52a8\u95ee\u9898"),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u4e5f\u80fd\u770b\u5230\uff0c\u5728\u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u5904\u7406\u957f\u6587\u672c\u3001\u957f\u5217\u8868\u7684\u65f6\u5019\u3002\u5728\u6eda\u52a8\u9875\u9762\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6eda\u52a8\u6761\u4e00\u76f4\u5728\u6296\u52a8\uff0c\u8fd9\u4e0d\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u597d\u5728\uff0c\u89c4\u8303\u5236\u5b9a\u8005\u4e5f\u53d1\u73b0\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u53e6\u5916\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," \u5c5e\u6027\uff0c\u4e5f\u5c31\u662f\u6587\u7ae0\u4e00\u5f00\u5934\u63d0\u5230\u7684\u53e6\u5916\u4e00\u4e2a\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"contain-intrinsic-size")," \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,a.kt)("admonition",{title:"MDN",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"contain-intrinsic-size")," \uff1a\u63a7\u5236\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility")," \u6307\u5b9a\u7684\u5143\u7d20\u7684\u81ea\u7136\u5927\u5c0f\u3002")),(0,a.kt)("p",null,"\u4ec0\u4e48\u610f\u601d\u5462\uff1f\u8fd8\u662f\u4e0a\u9762\u7684\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<div class="g-wrap">\n  <div class="paragraph">...</div>\n  // ... \u5305\u542b\u4e86 N \u4e2a paragraph\n  <div class="paragraph">...</div>\n</div>\n')),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4e0d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"contain-intrinsic-size"),"\uff0c\u53ea\u5bf9\u89c6\u53e3\u4e4b\u5916\u7684\u5143\u7d20\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto"),"\uff0c\u90a3\u4e48\u89c6\u53e3\u5916\u7684\u5143\u7d20\u9ad8\u5ea6\u901a\u5e38\u5c31\u4e3a 0\u3002\u5bfc\u81f4\u5b9e\u9645\u7684\u6eda\u52a8\u6548\u679c\uff0c\u6eda\u52a8\u6761\u5c31\u662f\u6296\u52a8\u7684\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u540c\u65f6\u5229\u7528\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"contain-intrinsic-size"),"\uff0c\u5982\u679c\u80fd\u51c6\u786e\u77e5\u9053\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u7684\u5143\u7d20\u5728\u6e32\u67d3\u72b6\u6001\u4e0b\u7684\u9ad8\u5ea6\uff0c\u5c31\u586b\u5199\u5bf9\u5e94\u7684\u9ad8\u5ea6\u3002\u5982\u679c\u5982\u6cd5\u51c6\u786e\u77e5\u9053\u9ad8\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u586b\u5199\u4e00\u4e2a\u5927\u6982\u7684\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CSS"},".paragraph {\n  content-visibility: auto;\n  contain-intrinsic-size: 320px;\n}\n")),(0,a.kt)("p",null,"\u5982\u6b64\u4e4b\u540e\uff0c\u6d4f\u89c8\u5668\u4f1a\u7ed9\u672a\u88ab\u5b9e\u9645\u6e32\u67d3\u7684\u89c6\u53e3\u4e4b\u5916\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".paragraph")," \u5143\u7d20\u4e00\u4e2a\u9ad8\u5ea6\uff0c\u907f\u514d\u51fa\u73b0\u6eda\u52a8\u6761\u6296\u52a8\u7684\u73b0\u8c61\uff1a"),(0,a.kt)(r.z,{width:"600px",src:n(5223),mdxType:"RenderImg"}),(0,a.kt)("h2",{id:"6content-visibility-\u7684\u4e00\u4e9b\u5176\u4ed6\u95ee\u9898"},"6.content-visibility \u7684\u4e00\u4e9b\u5176\u4ed6\u95ee\u9898"),(0,a.kt)("p",null,"\u76ee\u524d\u517c\u5bb9\u6027\u8fd8\u662f\u6bd4\u8f83\u60e8\u6de1\u7684\uff0c\u9700\u8981\u518d\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u3002\u5f53\u7136\uff0c\u7531\u4e8e\u8be5\u5c5e\u6027\u5c5e\u4e8e\u6e10\u8fdb\u589e\u5f3a\u4e00\u7c7b\u7684\u529f\u80fd\uff0c\u5373\u4fbf\u5931\u6548\uff0c\u4e5f\u5b8c\u5168\u4e0d\u5f71\u54cd\u9875\u9762\u672c\u8eab\u7684\u5c55\u793a\u3002\n\u540c\u65f6\uff0c\u4e5f\u6709\u4e00\u4e9b\u540c\u5b66\u8868\u793a\uff0c\u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility: auto")," \u53ea\u80fd\u89e3\u51b3\u90e8\u5206\u573a\u666f\uff0c\u5728\u6d77\u91cf DOM \u7684\u573a\u666f\u4e0b\u7684\u5b9e\u9645\u6548\u679c\uff0c\u8fd8\u6709\u5f85\u8fdb\u4e00\u6b65\u7684\u5b9e\u6d4b\u3002\u771f\u6b63\u8fd0\u7528\u7684\u65f6\u5019\uff0c\u591a\u505a\u5bf9\u6bd4\uff0c\u518d\u505a\u53d6\u820d\u3002\n\u5f53\u7136\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u5df2\u7ecf\u8d8a\u6765\u8d8a\u667a\u80fd\uff0c\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"content-visibility")," \u529f\u80fd\u7684\u5c5e\u6027\u4e5f\u8d8a\u6765\u8d8a\u591a\uff0c\u6211\u4eec\u5728\u6027\u80fd\u4f18\u5316\u7684\u8def\u4e0a\u6709\u4e86\u66f4\u591a\u9009\u62e9\uff0c\u603b\u5f52\u662f\u4e00\u4ef6\u597d\u4e8b\u3002"))}m.isMDXComponent=!0},5548:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/content.visibility.1-4151802ec2c6a2fd50b2d769ee9a9b95.gif"},3076:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/content.visibility.2-6ca41b62618cf4e4473606685e2ce1d9.png"},2710:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/content.visibility.3-aa3934fbcd9985394e3ea2c81f3e917c.png"},7620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/content.visibility.4-3d161c37fb16b36b74cfb055086b3188.gif"},5223:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/content.visibility.5-98df85bb77fa75f856fbc73e35845646.gif"}}]);