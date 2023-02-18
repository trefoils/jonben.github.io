"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4362],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=i(t),c=o,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||a;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6606:(e,n,t)=>{t.d(n,{z:()=>l});var r=t(7294);const o="preview_wToN",a="img_MFLS";function l(e){let{width:n="atuo",src:t,text:l}=e;return r.createElement("div",{className:o,style:{width:n}},r.createElement("img",{className:a,src:t.default,alt:""}),r.createElement("div",null,l))}},5701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(7462),o=(t(7294),t(3905)),a=t(6606);const l={title:"webpack\u6a21\u5757\u52a0\u8f7d\u539f\u7406"},p=void 0,u={unversionedId:"webpack/module/index",id:"webpack/module/index",title:"webpack\u6a21\u5757\u52a0\u8f7d\u539f\u7406",description:"1. \u524d\u7f6e\u77e5\u8bc6",source:"@site/docs/webpack/module/index.mdx",sourceDirName:"webpack/module",slug:"/webpack/module/",permalink:"/docs/webpack/module/",draft:!1,editUrl:"https://github.com/jonbenery/weblog/docs/webpack/module/index.mdx",tags:[],version:"current",frontMatter:{title:"webpack\u6a21\u5757\u52a0\u8f7d\u539f\u7406"},sidebar:"tutorialSidebar",previous:{title:"class \u7c7b",permalink:"/docs/typescript/class"},next:{title:"webpack\u52a8\u6001\u5bfc\u5165\u6a21\u5757\u539f\u7406",permalink:"/docs/webpack/async-module/"}},i={},d=[{value:"1. \u524d\u7f6e\u77e5\u8bc6",id:"1-\u524d\u7f6e\u77e5\u8bc6",level:2},{value:"2. \u6a21\u5757\u5316\u53d1\u5c55\u7684\u5386\u53f2",id:"2-\u6a21\u5757\u5316\u53d1\u5c55\u7684\u5386\u53f2",level:2},{value:"3. COMMONJS\u89c4\u8303",id:"3-commonjs\u89c4\u8303",level:2},{value:"4. ES Module\u89c4\u8303",id:"4-es-module\u89c4\u8303",level:2},{value:"5. webpack\u4e2d\u7684\u57fa\u672c\u914d\u7f6e",id:"5-webpack\u4e2d\u7684\u57fa\u672c\u914d\u7f6e",level:2},{value:"6.CommonJS\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406",id:"6commonjs\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406",level:2},{value:"7. ES Module\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406",id:"7-es-module\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406",level:2},{value:"8\u3001CommonJS \u52a0\u8f7d ES Module\u7684\u539f\u7406",id:"8commonjs-\u52a0\u8f7d-es-module\u7684\u539f\u7406",level:2},{value:"9\u3001ES Module \u52a0\u8f7d CommonJS \u7684\u539f\u7406",id:"9es-module-\u52a0\u8f7d-commonjs-\u7684\u539f\u7406",level:2}],s={toc:d};function m(e){let{components:n,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u524d\u7f6e\u77e5\u8bc6"},"1. \u524d\u7f6e\u77e5\u8bc6"),(0,o.kt)("p",null,"\u5728\u6b63\u5f0f\u5185\u5bb9\u5f00\u59cb\u4e4b\u524d\uff0c\u5148\u6765\u5b66\u4e00\u4e2a\u9884\u5907\u5c0f\u77e5\u8bc6\u70b9\uff0c\u4ee5\u514d\u5f71\u54cd\u540e\u9762\u7684\u5b66\u4e60\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u6709\u65f6\u4f1a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString"),"\u8fd9\u4e2a\u65b9\u6cd5\u6765\u5224\u65ad\u6570\u636e\u7684\u7c7b\u578b\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Object.prototype.toString.call(\'hello\');     // "[object String]"\nObject.prototype.toString.call([1, 2]);    // "[object Array]"\nObject.prototype.toString.call(3);         // "[object Number]"\nObject.prototype.toString.call(true);      // "[object Boolean]"\nObject.prototype.toString.call(undefined); // "[object Undefined]"\nObject.prototype.toString.call(null);      // "[object Null]"\n// ... and more\n')),(0,o.kt)("p",null,"\u90a3\u6211\u4eec\u5982\u679c\u60f3\u81ea\u5b9a\u4e49\u6570\u636e\u7684\u7c7b\u578b\u6807\u7b7e\u600e\u4e48\u529e\uff1f\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Object.prototype.toString.call(new Map());       // "[object Map]"\nObject.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"\nObject.prototype.toString.call(Promise.resolve()); // "[object Promise]"\n// ... and more\n')),(0,o.kt)("p",null,"\u8fd9\u91cc",(0,o.kt)("inlineCode",{parentName:"p"},"toString()"),"\u65b9\u6cd5\u80fd\u8bc6\u522b",(0,o.kt)("inlineCode",{parentName:"p"},"Map\u3001GeneratorFunction\u3001Promise"),"\u8fd9\u4e9b\u7c7b\u578b\u662f\u56e0\u4e3a\u6d4f\u89c8\u5668\u5f15\u64ce\u4e3a\u5b83\u4eec\u8bbe\u7f6e\u597d\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"toStringTag"),"\u6807\u7b7e\uff0c\u90a3\u6211\u4eec\u8be5\u5982\u4f55\u8bbe\u7f6e\u81ea\u5df1\u60f3\u8981\u7684\u7c7b\u578b\u6807\u7b7e\u5462\uff1f"),(0,o.kt)("p",null,"\u5f15\u81ea\u5b98\u65b9\u4ecb\u7ecd\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Symbol.toStringTag"),"\u662f\u4e00\u4e2a\u5185\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"symbol"),"\uff0c\u5b83\u901a\u5e38\u4f5c\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u952e\u4f7f\u7528\uff0c\u5bf9\u5e94\u7684\u5c5e\u6027\u503c\u5e94\u8be5\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u7528\u6765\u8868\u793a\u8be5\u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\u6807\u7b7e\uff0c\u901a\u5e38\u53ea\u6709\u5185\u7f6e\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString()"),"\u65b9\u6cd5\u4f1a\u53bb\u8bfb\u53d6\u8fd9\u4e2a\u6807\u7b7e\u5e76\u628a\u5b83\u5305\u542b\u5728\u81ea\u5df1\u7684\u8fd4\u56de\u503c\u91cc\u3002\n\u6211\u4eec\u6765\u8bd5\u4e00\u8bd5\uff1a\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u5728\u5bf9\u8c61\u4e0a\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"toStringTag"),"\u5c5e\u6027\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {};\n\n//\u5b9a\u4e49\u5c5e\u6027\nObject.defineProperty(obj, Symbol.toStringTag, { value: \"Module\" });\n\n//\u67e5\u770b\u81ea\u5b9a\u4e49\u7c7b\u578b\nconsole.log(Object.prototype.toString.call(obj)) //'[object Module]'\u6539\u53d8\u4e86\u7c7b\u578b\u4e3aModule\n")),(0,o.kt)("p",null,"\u5f97\u5230\u7ed3\u679c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"[object Module]"),"\uff0c\u62ff\u5230\u4e86\u6211\u4eec\u60f3\u8981\u7684\u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"2-\u6a21\u5757\u5316\u53d1\u5c55\u7684\u5386\u53f2"},"2. \u6a21\u5757\u5316\u53d1\u5c55\u7684\u5386\u53f2"),(0,o.kt)("p",null,"\u65e9\u671f JavaScript \u5f00\u53d1\u5f88\u5bb9\u6613\u5b58\u5728 ",(0,o.kt)("strong",{parentName:"p"}," \u5168\u5c40\u6c61\u67d3 ")," \u548c ",(0,o.kt)("strong",{parentName:"p"}," \u4f9d\u8d56\u7ba1\u7406\u6df7\u4e71 ")," \u95ee\u9898\uff0c\u8fd9\u4e9b\u95ee\u9898\u5728\u591a\u4eba\u5f00\u53d1\u524d\u7aef\u5e94\u7528\u7684\u60c5\u51b5\u4e0b\u53d8\u5f97\u66f4\u52a0\u68d8\u624b\u3002\u6211\u8fd9\u91cc\u4f8b\u4e3e\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u573a\u666f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<body>\n  <script src="./a.js"><\/script>\n  <script src="./b.js"><\/script>\n  <script src="./c.js"><\/script>\n</body>\n')),(0,o.kt)("p",null,"\u6ca1\u6709\u6a21\u5757\u5316\uff0c\u90a3\u4e48",(0,o.kt)("inlineCode",{parentName:"p"},"script"),"\u5185\u90e8\u7684\u53d8\u91cf\u662f\u53ef\u4ee5\u76f8\u4e92\u6c61\u67d3\u7684\u3002\u6bd4\u5982\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"a.js"),"\u4e2d\u4f7f\u7528\u4e86\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u7136\u540e",(0,o.kt)("inlineCode",{parentName:"p"},"b.js"),"\u4e2d\u4e5f\u4f7f\u7528\u4e86\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u6700\u7ec8\u5c31\u4f1a\u5bfc\u81f4",(0,o.kt)("inlineCode",{parentName:"p"},"a.js"),"\u4e2d\u7684\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u88ab\u8986\u76d6\uff0c\u5bfc\u81f4\u7a0b\u5e8f\u8fd0\u884c\u5f02\u5e38\u3002"),(0,o.kt)("h2",{id:"3-commonjs\u89c4\u8303"},"3. COMMONJS\u89c4\u8303"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u662f\u4e00\u4e2a\u89c4\u8303\uff0c\u6700\u521d\u63d0\u51fa\u6765\u662f\u5728\u6d4f\u89c8\u5668\u4ee5\u5916\u7684\u5730\u65b9\u4f7f\u7528\uff0c\u5e76\u4e14\u5f53\u65f6\u88ab\u547d\u540d\u4e3a",(0,o.kt)("strong",{parentName:"p"},"ServerJS")," \uff0c\u540e\u6765\u4e3a\u4e86\u4f53\u73b0\u5b83\u7684\u5e7f\u6cdb\u6027\uff0c\u4fee\u6539\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u89c4\u8303\u3002",(0,o.kt)("strong",{parentName:"p"},"Node"),"\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u5728\u670d\u52a1\u5668\u7aef\u4e00\u4e2a\u5177\u6709\u4ee3\u8868\u6027\u7684\u5b9e\u73b0\u3002\n\u6b63\u662f\u56e0\u4e3a ",(0,o.kt)("strong",{parentName:"p"}," Node ")," \u4e2d\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u8fdb\u884c\u4e86\u652f\u6301\u548c\u5b9e\u73b0\uff0c\u6240\u4ee5\u5b83\u5177\u5907\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728Node\u4e2d\u6bcf\u4e00\u4e2ajs\u6587\u4ef6\u90fd\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u6a21\u5757"),(0,o.kt)("li",{parentName:"ul"},"\u8be5\u6a21\u5757\u4e2d\uff0c\u5305\u542bCommonJS\u89c4\u8303\u7684\u6838\u5fc3\u53d8\u91cf: ",(0,o.kt)("inlineCode",{parentName:"li"},"exports\u3001module.exports\u3001require")),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6838\u5fc3\u53d8\u91cf\uff0c\u8fdb\u884c\u6a21\u5757\u5316\u5f00\u53d1")),(0,o.kt)("h2",{id:"4-es-module\u89c4\u8303"},"4. ES Module\u89c4\u8303"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nodejs"),"\u501f\u9274\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"Commonjs"),"\u5b9e\u73b0\u4e86\u6a21\u5757\u5316 \u3002\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"ES6"),"\u5f00\u59cb\uff0c\xa0JavaScript\u624d\u771f\u6b63\u610f\u4e49\u4e0a\u6709\u81ea\u5df1\u7684\u6a21\u5757\u5316\u89c4\u8303\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"Es Module"),"\u7684\u4ea7\u751f\u6709\u5f88\u591a\u4f18\u52bf\uff0c\u6bd4\u5982:"),(0,o.kt)("p",null,"\u501f\u52a9",(0,o.kt)("inlineCode",{parentName:"p"},"Es Module"),"\u7684\u9759\u6001\u5bfc\u5165\u5bfc\u51fa\u7684\u4f18\u52bf\uff0c\u5b9e\u73b0\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"tree shaking"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Es Module"),"\u8fd8\u53ef\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"import()"),"\u61d2\u52a0\u8f7d\u65b9\u5f0f\u5b9e\u73b0\u4ee3\u7801\u5206\u5272"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Es Module"),"\u4e2d\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"\u7528\u6765\u5bfc\u51fa\u6a21\u5757\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\u7528\u6765\u5bfc\u5165\u6a21\u5757\u3002"),(0,o.kt)("h2",{id:"5-webpack\u4e2d\u7684\u57fa\u672c\u914d\u7f6e"},"5. webpack\u4e2d\u7684\u57fa\u672c\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Webpack"),"\u642d\u5efa\u7684\u9879\u76ee\u4e2d\uff0c\u5b83\u662f\u5141\u8bb8\u6211\u4eec\u4f7f\u7528\u5404\u79cd\u5404\u6837\u7684\u6a21\u5757\u5316\u7684\u3002\u6700\u5e38\u7528\u7684\u65b9\u5f0f\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"ES Module"),"\u3002\u90a3\u4e48\u5b83\u5185\u90e8\u662f\u5982\u4f55\u5e2e\u52a9\u6211\u4eec\u5b9e\u73b0\u4e86\u4ee3\u7801\u4e2d\u652f\u6301\u6a21\u5757\u5316\u5462?\n\u63a5\u4e0b\u6765\u5c06\u4ece\u8fd9\u56db\u4e2a\u89d2\u5ea6\u6765\u7814\u7a76\u4e00\u4e0b\u5b83\u7684\u539f\u7406\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CommonJS\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("li",{parentName:"ul"},"ES Module\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("li",{parentName:"ul"},"CommonJS\u52a0\u8f7dES Module\u7684\u539f\u7406"),(0,o.kt)("li",{parentName:"ul"},"ES Module\u52a0\u8f7dCommonJS\u7684\u539f\u7406")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"devDependencies": {\n  "webpack": "^5.75.0",\n  "webpack-cli": "^5.0.1"\n}\n')),(0,o.kt)("p",null,"webpack\u7684\u57fa\u672c\u914d\u7f6e\uff0cwebpack.config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\nmodule.exports = {\n  mode: "development", //\u9632\u6b62\u4ee3\u7801\u538b\u7f29\n  entry: "./src/main.js",\n  devtool: "source-map",\n}\n')),(0,o.kt)("h2",{id:"6commonjs\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406"},"6.CommonJS\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("p",null,"name.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = "Jonben";\n')),(0,o.kt)("p",null,"main.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let author = require("./name.js");\nconsole.log(author, "author");\n')),(0,o.kt)("p",null,"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npx webpack"),"\u5f97\u5230\u7684\u6e90\u7801\u5982\u4e0b\uff08\u5df2\u7ecf\u8fc7\u4f18\u5316\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(() => {\n  var modules = {\n    "./src/name.js": (module) => {\n      module.exports = "Jonben";\n    },\n  };\n\n  // \u7f13\u5b58\n  var caches = {};\n\n  // require\u51fd\u6570\n  function require(moduleId) {\n    // \u68c0\u67e5\u6a21\u5757\u662f\u5426\u5728\u7f13\u5b58\u4e2d\n    var cachedModule = caches[moduleId];\n    if (cachedModule !== undefined) {\n      return cachedModule.exports;\n    }\n    // \u521b\u5efa\u4e00\u4e2a\u65b0\u6a21\u5757\uff08\u5e76\u5c06\u5176\u653e\u5165\u7f13\u5b58\uff09\n    var module = (caches[moduleId] = {\n      exports: {},\n    });\n\n    // \u6267\u884c\u6a21\u5757\u51fd\u6570\uff0c\u5bf9module.exports\u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c\n    modules[moduleId](module, module.exports, require);\n\n    // \u8fd4\u56demodule.exports\n    return module.exports;\n  }\n\n  var exports = {};\n  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.\n  // \u81ea\u6267\u884c\u51fd\u6570\u5305\u88f9\u4e0e\u5176\u4ed6\u6a21\u5757\u9694\u79bb\u3002\n  (() => {\n    let author = require("./src/name.js");\n    console.log(author, "author");\n  })();\n})();\n\n')),(0,o.kt)("p",null,"\u6574\u4e2a\u6267\u884c\u6d41\u7a0b\u5982\u56fe\u6240\u793a\uff1a"),(0,o.kt)(a.z,{text:"CommonJS\u7f16\u8bd1\u6d41\u7a0b",src:t(6122),mdxType:"RenderImg"}),(0,o.kt)("h2",{id:"7-es-module\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406"},"7. ES Module\u6a21\u5757\u5316\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("p",null,"name.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const author = "jonben";\n\nexport const age = "18";\nexport default author;\n')),(0,o.kt)("p",null,"main.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import author, { age } from "./name";\n\nconsole.log(author, "author");\nconsole.log(age, "age");\n')),(0,o.kt)("p",null,"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npx webpack"),"\u5f97\u5230\u7684\u6e90\u7801\u5982\u4e0b\uff08\u5df2\u7ecf\u8fc7\u4f18\u5316\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(() => {\n  "use strict";\n  var modules = {\n    "./src/name.js": (module, exports, require) => {\n      require.setModuleTag(exports);\n      require.defineProperty(exports, {\n        age: () => age,\n        default: () => DEFAULT_EXPORT,\n      });\n      const author = "jonben";\n\n      const age = "18";\n      const DEFAULT_EXPORT = author;\n    },\n  };\n\n  var caches = {};\n\n  function require(moduleId) {\n    var cachedModule = caches[moduleId];\n    if (cachedModule !== undefined) {\n      return cachedModule.exports;\n    }\n    var module = (caches[moduleId] = {\n      exports: {},\n    });\n\n    modules[moduleId](module, module.exports, require);\n\n    return module.exports;\n  }\n\n  // \u5bf9exports\u5bf9\u8c61\u505a\u4ee3\u7406\n  require.defineProperty = (exports, definition) => {\n    for (var key in definition) {\n      if (\n        require.hasOwnProperty(definition, key) &&\n        !require.hasOwnProperty(exports, key)\n      ) {\n        Object.defineProperty(exports, key, {\n          enumerable: true,\n          get: definition[key],\n        });\n      }\n    }\n  };\n\n  // \u5224\u65ad\u662f\u5426\u4e3a\u81ea\u8eab\u5c5e\u6027\n  require.hasOwnProperty = (obj, prop) =>\n    Object.prototype.hasOwnProperty.call(obj, prop);\n\n  // \u5b9a\u4e49\u6a21\u5757\u4e3a__esModule\u7c7b\u578b\n  require.setModuleTag = (exports) => {\n    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });\n    }\n    Object.defineProperty(exports, "__esModule", { value: true });\n  };\n\n  var exports = {};\n  (() => {\n    require.setModuleTag(exports);\n    var _name__WEBPACK_IMPORTED_MODULE_0__ = require("./src/name.js");\n\n    console.log(_name__WEBPACK_IMPORTED_MODULE_0__["default"], "author");\n    console.log(_name__WEBPACK_IMPORTED_MODULE_0__.age, "age");\n  })();\n})();\n\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u6a21\u5757\u5316\u539f\u7406\u4e0d\u540c\u7684\u5728\u4e8e\uff1a"),(0,o.kt)("p",null,"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"equire.setModuleTag"),"\u51fd\u6570\u6765\u6807\u8bc6\u8fd9\u662f\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ES Module"),"(\u5728\u73b0\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u5176\u5b9e\u6ca1\u4ec0\u4e48\u4f5c\u7528)\n\u7ed9\u4f20\u5165\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"exports"),"\u5bf9\u8c61\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u505a\u4e86\u4e00\u5c42\u4ee3\u7406\uff08\u8fd9\u6837\u5f53\u8bbf\u95ee",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"\u5c5e\u6027\u65f6\uff0c\u5176\u5b9e\u8bbf\u95ee\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"DEFAULT_EXPORT"),"\u53d8\u91cf\uff0c\u8bbf\u95eeage\u5c5e\u6027\u65f6\uff0c\u8bbf\u95ee\u7684\u662fage\u53d8\u91cf\uff09\u3002"),(0,o.kt)("h2",{id:"8commonjs-\u52a0\u8f7d-es-module\u7684\u539f\u7406"},"8\u3001CommonJS \u52a0\u8f7d ES Module\u7684\u539f\u7406"),(0,o.kt)("p",null,"name.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const author = "jonben";\nexport const age = "18";\nexport default author;\n')),(0,o.kt)("p",null,"main.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let author = require("./name");\nconsole.log(author, "author");\n')),(0,o.kt)("p",null,"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npx webpack"),"\u5f97\u5230\u7684\u6e90\u7801\u5982\u4e0b\uff08\u5df2\u7ecf\u8fc7\u4f18\u5316\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(() => {\n  var modules = {\n    "./src/name.js": (\n      module,\n      exports,\n      require\n    ) => {\n      "use strict";\n      require.setModuleTag(exports);\n      require.defineProperty(exports, {\n        age: () => age,\n        default: () => DEFAULT_EXPORT,\n      });\n      const author = "jonben";\n\n      const age = "18";\n      const DEFAULT_EXPORT = author;\n    },\n  };\n\n  var cache = {};\n\n  function require(moduleId) {\n    var cachedModule = cache[moduleId];\n    if (cachedModule !== undefined) {\n      return cachedModule.exports;\n    }\n    var module = (cache[moduleId] = {\n      exports: {},\n    });\n\n    modules[moduleId](module, module.exports, require);\n\n    return module.exports;\n  }\n\n  require.defineProperty = (exports, definition) => {\n    for (var key in definition) {\n      if (\n        require.hasOwnProperty(definition, key) &&\n        !require.hasOwnProperty(exports, key)\n      ) {\n        Object.defineProperty(exports, key, {\n          enumerable: true,\n          get: definition[key],\n        });\n      }\n    }\n  };\n\n  require.hasOwnProperty = (obj, prop) =>\n    Object.prototype.hasOwnProperty.call(obj, prop);\n\n  require.setModuleTag = (exports) => {\n    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });\n    }\n    Object.defineProperty(exports, "__esModule", { value: true });\n  };\n\n  var exports = {};\n  (() => {\n    let author = require("./src/name.js");\n    console.log(author, "author");\n  })();\n})();\n\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{ age: [Getter], default: [Getter] } author\n")),(0,o.kt)("h2",{id:"9es-module-\u52a0\u8f7d-commonjs-\u7684\u539f\u7406"},"9\u3001ES Module \u52a0\u8f7d CommonJS \u7684\u539f\u7406"),(0,o.kt)("p",null,"name.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const author = "jonben";\nmodule.exports = author;\n')),(0,o.kt)("p",null,"main.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import author from './name';\n\nconsole.log(author, 'author')\n")),(0,o.kt)("p",null,"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npx webpack"),"\u5f97\u5230\u7684\u6e90\u7801\u5982\u4e0b\uff08\u5df2\u7ecf\u8fc7\u4f18\u5316\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(() => {\n  var modules = {\n    "./src/name.js": (module) => {\n      const author = "jonben";\n      module.exports = author;\n    },\n  };\n\n  var cache = {};\n\n  function require(moduleId) {\n    var cachedModule = cache[moduleId];\n    if (cachedModule !== undefined) {\n      return cachedModule.exports;\n    }\n    var module = (cache[moduleId] = {\n      exports: {},\n    });\n\n    modules[moduleId](module, module.exports, require);\n\n    return module.exports;\n  }\n\n  require.n = (module) => {\n    // \u6839\u636emoudle\u7684\u7c7b\u578b\u6765\u8fd4\u56de\u4e0d\u540c\u7684\u7ed3\u679c\n    var getter = module && module.__esModule ? () => module["default"] : () => module;\n    // \u4ee3\u7406a\u5c5e\u6027\u4e3agetter\n    require.defineProperty(getter, { a: getter });\n    return getter;\n  };\n\n  require.defineProperty = (exports, definition) => {\n    for (var key in definition) {\n      if (\n        require.hasOwnProperty(definition, key) &&\n        !require.hasOwnProperty(exports, key)\n      ) {\n        Object.defineProperty(exports, key, {\n          enumerable: true,\n          get: definition[key],\n        });\n      }\n    }\n  };\n\n  require.hasOwnProperty = (obj, prop) =>\n    Object.prototype.hasOwnProperty.call(obj, prop);\n\n  require.setModuleTag = (exports) => {\n    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });\n    }\n    Object.defineProperty(exports, "__esModule", { value: true });\n  };\n\n  var __webpack_exports__ = {};\n  (() => {\n    "use strict";\n    require.setModuleTag(__webpack_exports__);\n    var _name__WEBPACK_IMPORTED_MODULE_0__ = require("./src/name.js");\n    var _name__WEBPACK_IMPORTED_MODULE_0___default = require.n(_name__WEBPACK_IMPORTED_MODULE_0__);\n\n    console.log(_name__WEBPACK_IMPORTED_MODULE_0___default(), "author");\n  })();\n})();\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u501f\u52a9\u4e86\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"require.n"),"\u7684\u51fd\u6570\uff0c\u7136\u540e\u901a\u8fc7\u5224\u65ad",(0,o.kt)("inlineCode",{parentName:"p"},"module"),"\u7684\u7c7b\u578b\uff08\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS\u8fd8\u662fEsModule"),"\uff09\u6765\u8fd4\u56de\u5bf9\u5e94\u7684\u503c\u3002"))}m.isMDXComponent=!0},6122:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/WeChate53cf5f0ed88e29bd38ec64672eac286-f0a3c8d6ad467a030692e257dc2fcf3d.png"}}]);