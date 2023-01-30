"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1837:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const i={width:"400px",height:"200px",border:"1px solid gray",padding:"10px",borderRadius:"5px"};function a(){const e=e=>new Promise(((t,r)=>{let n;const i=(e,a,l)=>{if(e.isFile)e.file((e=>{e.path=a+e.name;const r=new File([e],e.path,{type:e.type});l.push(r),n=setTimeout((()=>{t(l)}),600)}));else if(e.isDirectory){clearTimeout(n);e.createReader().readEntries((t=>{for(let r=0;r<t.length;r++)i(t[r],a+e.name+"/",l)}),(e=>r(e)))}};i(e,"",[])}));return n.createElement("div",{id:"area",style:i,onDragOver:e=>{e.preventDefault()},onDrop:t=>{t.preventDefault(),t.stopPropagation();const r=t.dataTransfer.items;if(r.length>1)return console.log("\u4e00\u6b21\u53ea\u5141\u8bb8\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\u5939");const n=r[0].webkitGetAsEntry();n&&n.isDirectory&&e(n).then((e=>{console.log(e)}))}},"\u62d6\u62fd\u4e00\u4e2a\u6587\u4ef6\u5939\u8fdb\u6765\u8bd5\u8bd5\u5427\uff0c\u6253\u5f00\u63a7\u5236\u5c31\u770b\u5230\u6548\u679c\u4e86")}},3644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905)),a=r(1837);const l={slug:"dragDir",title:"\u62d6\u62fd\u83b7\u53d6\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6",authors:"jonben",tags:["javascript"]},o=void 0,s={permalink:"/blog/dragDir",editUrl:"https://github.com/jonbenery/weblog/blog/2023-01-30-dragDir/index.mdx",source:"@site/blog/2023-01-30-dragDir/index.mdx",title:"\u62d6\u62fd\u83b7\u53d6\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6",description:"1. \u9996\u5148\u6211\u4eec\u6765\u8ba4\u8bc6\u4e00\u4e0b\u5173\u4e8e\u6587\u4ef6\u7684\u4e00\u4e9bapi",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:2.14,hasTruncateMarker:!1,authors:[{name:"\u8d75\u9526\u5f6c",title:"coder javascript",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"jonben"}],frontMatter:{slug:"dragDir",title:"\u62d6\u62fd\u83b7\u53d6\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6",authors:"jonben",tags:["javascript"]},prevItem:{title:"\u7528css\u65b0\u7279\u6027\u4f18\u5316\u957f\u5217\u8868",permalink:"/blog/contentVisibility"},nextItem:{title:"\u591a\u5c42\u7ea7\u5143\u7d20\u62d6\u653e",permalink:"/blog/elementDrag"}},p={authorsImageUrls:[void 0]},c=[{value:"1. \u9996\u5148\u6211\u4eec\u6765\u8ba4\u8bc6\u4e00\u4e0b\u5173\u4e8e\u6587\u4ef6\u7684\u4e00\u4e9bapi",id:"1-\u9996\u5148\u6211\u4eec\u6765\u8ba4\u8bc6\u4e00\u4e0b\u5173\u4e8e\u6587\u4ef6\u7684\u4e00\u4e9bapi",level:2},{value:"DataTransferItem.webkitGetAsEntry()",id:"datatransferitemwebkitgetasentry",level:3},{value:"FileSystemFileEntry",id:"filesystemfileentry",level:3},{value:"FileSystemDirectoryEntry",id:"filesystemdirectoryentry",level:3},{value:"2. \u63a5\u4e0b\u6765\u6211\u4eec\u7f16\u5199\u4ee3\u7801",id:"2-\u63a5\u4e0b\u6765\u6211\u4eec\u7f16\u5199\u4ee3\u7801",level:2},{value:"\u8bd5\u4e00\u8bd5\u5427",id:"\u8bd5\u4e00\u8bd5\u5427",level:2},{value:"3. \u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u5229\u7528input\u7684\u539f\u751f\u4e8b\u4ef6\u6765\u83b7\u53d6\u6587\u4ef6\u5939\u5185\u7684\u5185\u5bb9",id:"3-\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u5229\u7528input\u7684\u539f\u751f\u4e8b\u4ef6\u6765\u83b7\u53d6\u6587\u4ef6\u5939\u5185\u7684\u5185\u5bb9",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u9996\u5148\u6211\u4eec\u6765\u8ba4\u8bc6\u4e00\u4e0b\u5173\u4e8e\u6587\u4ef6\u7684\u4e00\u4e9bapi"},"1. \u9996\u5148\u6211\u4eec\u6765\u8ba4\u8bc6\u4e00\u4e0b\u5173\u4e8e\u6587\u4ef6\u7684\u4e00\u4e9bapi"),(0,i.kt)("p",null,"\uff08\u4ee5\u4e0b\u5185\u5bb9\u5f15\u7528\u81f3MDN\uff09"),(0,i.kt)("h3",{id:"datatransferitemwebkitgetasentry"},(0,i.kt)("a",{parentName:"h3",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItem/webkitGetAsEntry"},"DataTransferItem.webkitGetAsEntry()")),(0,i.kt)("p",null,"\u5982\u679c\u7531\u6587\u4ef6\u63cf\u8ff0\u7684\u9879\u76eeDataTransferItem\u662f\u6587\u4ef6\uff0c\u5219webkitGetAsEntry()\u8fd4\u56deFileSystemFileEntry\u6216FileSystemDirectoryEntry\u8868\u793a\u5b83\u3002\u5982\u679c\u8be5\u9879\u4e0d\u662f\u6587\u4ef6\uff0cnull\u5219\u8fd4\u56de\u3002"),(0,i.kt)("h3",{id:"filesystemfileentry"},(0,i.kt)("a",{parentName:"h3",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileSystemFileEntry"},"FileSystemFileEntry")),(0,i.kt)("p",null,"\u6587\u4ef6\u7cfb\u7edf API \u7684 FileSystemFileEntry \u63a5\u53e3\u8868\u793a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u3002\u5b83\u63d0\u4f9b\u4e86\u5c5e\u6027\uff0c\u63cf\u8ff0\u6587\u4ef6\u7684\u5c5e\u6027\uff0c\u4ee5\u53ca file() (en-US) \u65b9\u6cd5\uff0c\u5b83\u521b\u5efa\u4e86\u53ef\u4ee5\u7528\u4e8e\u8bfb\u53d6\u6587\u4ef6\u7684 File \u5bf9\u8c61\u3002"),(0,i.kt)("h3",{id:"filesystemdirectoryentry"},(0,i.kt)("a",{parentName:"h3",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileSystemDirectoryEntry"},"FileSystemDirectoryEntry")),(0,i.kt)("p",null,"\u6587\u4ef6\u548c\u76ee\u5f55\u6761\u76ee API \u7684 FileSystemDirectoryEntry \u63a5\u53e3\u8868\u793a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u76ee\u5f55\u3002\u5b83\u63d0\u4f9b\u4e86\u65b9\u6cd5\uff0c\u4f7f\u5176\u80fd\u591f\u8bbf\u95ee\u548c\u64cd\u4f5c\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca\u8bbf\u95ee\u76ee\u5f55\u4e2d\u7684\u6761\u76ee\u3002"),(0,i.kt)("h2",{id:"2-\u63a5\u4e0b\u6765\u6211\u4eec\u7f16\u5199\u4ee3\u7801"},"2. \u63a5\u4e0b\u6765\u6211\u4eec\u7f16\u5199\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="area"></div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"}," #area {\n    width: 200px;\n    height: 200px;\n    border: 1px solid red;\n  }\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const area = document.getElementById(\'area\');\n\narea.ondragover = (e) => {\n  e.preventDefault();\n};\n\narea.ondragleave = (e) => {\n  e.preventDefault();\n};\n\narea.ondrop = function(evt) {\n  evt.preventDefault();\n  evt.stopPropagation();\n  const items = evt.dataTransfer.items;\n  if (items.length > 1) {\n    return console.log("\u4e00\u6b21\u53ea\u5141\u8bb8\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\u5939");\n  }\n  const item = items[0].webkitGetAsEntry();\n  if (item && item.isDirectory) {\n    traverseFileTree(item).then(res => {\n      console.log(res);\n    });\n  }\n}\n\n// \u5206\u6790\u6587\u4ef6\u5939\u4e0b\u7684\u6587\u4ef6\nfunction traverseFileTree(item) {\n  return new Promise((resolve, reject) => {\n    let res = [];\n    let timer;\n    const internalProces = (item, path, res) => {\n      if (item.isFile) {\n        item.file(file => {\n          file.path = path + file.name;\n          const newFile = new File([file], file.path, { type: file.type });\n          res.push(newFile);\n          timer = setTimeout(() => {\n            resolve(res);\n          }, 600);\n        });\n      } else if (item.isDirectory) {\n        clearTimeout(timer);\n        const dirReader = item.createReader();\n        dirReader.readEntries(entries => {\n          for (let i = 0; i < entries.length; i++) {\n            internalProces(entries[i], path + item.name + "/", res);\n          }\n        }, (error) => reject(error));\n      }\n    };\n    internalProces(item, "", res);\n  })\n}\n')),(0,i.kt)("h2",{id:"\u8bd5\u4e00\u8bd5\u5427"},"\u8bd5\u4e00\u8bd5\u5427"),(0,i.kt)(a.Z,{mdxType:"DragDirectory"}),(0,i.kt)("h2",{id:"3-\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u5229\u7528input\u7684\u539f\u751f\u4e8b\u4ef6\u6765\u83b7\u53d6\u6587\u4ef6\u5939\u5185\u7684\u5185\u5bb9"},"3. \u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u5229\u7528input\u7684\u539f\u751f\u4e8b\u4ef6\u6765\u83b7\u53d6\u6587\u4ef6\u5939\u5185\u7684\u5185\u5bb9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<input type="file" webkitdirectory id="ipt"/>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const ipt = document.getElementById('ipt')\nipt.onchange = function(e) {\n  console.log(ipt.files);\n}\n")))}u.isMDXComponent=!0}}]);