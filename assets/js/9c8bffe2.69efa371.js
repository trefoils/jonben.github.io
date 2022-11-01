"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[721],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4495:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],p={title:"\u6cdb\u578b"},c=void 0,l={unversionedId:"typescript/generics",id:"typescript/generics",title:"\u6cdb\u578b",description:"* \u5b9a\u4e49\u65f6\u6570\u636e\u7c7b\u578b\u4e0d\u786e\u5b9a\uff0c\u4f7f\u7528\u65f6\u6570\u636e\u7c7b\u578b\u660e\u786e\uff08\u6cdb\u578b\u7684\u5bbd\u6cdb\uff09",source:"@site/packages/docs/typescript/generics.md",sourceDirName:"typescript",slug:"/typescript/generics",permalink:"/docs/typescript/generics",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/docs/typescript/generics.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1667273691,formattedLastUpdatedAt:"11/1/2022",frontMatter:{title:"\u6cdb\u578b"},sidebar:"docs",previous:{title:"keyof",permalink:"/docs/typescript/keyof"},next:{title:"infer",permalink:"/docs/typescript/infer"}},s={},d=[{value:"1. \u5148\u6765\u770b\u4e00\u4e2a\u95ee\u9898",id:"1-\u5148\u6765\u770b\u4e00\u4e2a\u95ee\u9898",level:2},{value:"2. \u63a5\u4e0b\u6765\u6211\u4eec\u4f7f\u7528\u6cdb\u578b\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898",id:"2-\u63a5\u4e0b\u6765\u6211\u4eec\u4f7f\u7528\u6cdb\u578b\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898",level:2},{value:"3. \u6cdb\u578b\u7ea6\u675f",id:"3-\u6cdb\u578b\u7ea6\u675f",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u65f6\u6570\u636e\u7c7b\u578b\u4e0d\u786e\u5b9a\uff0c\u4f7f\u7528\u65f6\u6570\u636e\u7c7b\u578b\u660e\u786e\uff08\u6cdb\u578b\u7684\u5bbd\u6cdb\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u671f\u95f4\u8fdb\u884c\u6570\u636e\u7c7b\u578b\u5b89\u5168\u68c0\u67e5\uff08\u6cdb\u578b\u7684\u4e25\u8c28 \uff09")),(0,i.kt)("h2",{id:"1-\u5148\u6765\u770b\u4e00\u4e2a\u95ee\u9898"},"1. \u5148\u6765\u770b\u4e00\u4e2a\u95ee\u9898"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class Car {\n  cars!: Array<any>;\n  add(car: any) {\n    this.cars.push(car)\n  }\n  getCar(index: number) {\n    return this.cars[index]\n  }\n}\nconst cars = new Car()\n\ncars.add({\n  name: '\u5954\u9a70',\n  price: 400000\n})\n\nconst car = cars.getCar(0);\n\n// car. //\u6b64\u65f6\u7f16\u8bd1\u5668\u4e0d\u4f1a\u63d0\u4f9bcar\u4e0b\u7684\u5c5e\u6027\u63d0\u793a\n")),(0,i.kt)("p",null,"\u4f46\u6211\u4eec\u60f3\u8bfb\u53d6",(0,i.kt)("inlineCode",{parentName:"p"},"car"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"price"),"\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53d1\u73b0\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"car."),"\u7f16\u8f91\u5668\u5e76\u6ca1\u7ed9\u6211\u4eec\u63d0\u793a\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Car"),"\u7c7b\u4e2d\u5b9a\u4e49\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"cars"),"\u662f\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Array<any>"),"\u7c7b\u578b\uff0c\u6240\u4ee5\u5f53\u6211\u4eec\u901a\u8fc7\u4e0b\u6807\u83b7\u53d6\u5230\u6570\u7ec4\u4e2d\u7684\u6570\u636e\u4e5f\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\uff0c\u5bfc\u81f4\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528\u7f16\u8bd1\u5668\u7ed9\u6211\u4eec\u63d0\u4f9b\u7684\u8bed\u6cd5\u63d0\u793a\uff0c\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u9020\u6210\u4e86\u6211\u4eec\u5f00\u53d1\u6548\u7387\u7684\u4e0b\u964d"),(0,i.kt)("h2",{id:"2-\u63a5\u4e0b\u6765\u6211\u4eec\u4f7f\u7528\u6cdb\u578b\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"},"2. \u63a5\u4e0b\u6765\u6211\u4eec\u4f7f\u7528\u6cdb\u578b\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface CarInferface{\n  name: string,\n  price: number\n}\n\nclass Car<T> {\n  cars!: Array<T>;\n  add(car: T) {\n    this.cars.push(car)\n  }\n  getCar(index: number) {\n    return this.cars[index]\n  }\n}\n\nconst cars = new Car<CarInferface>()\n\ncars.add({\n  name: '\u5954\u9a70',\n  price: 400000\n})\n\nconst car = cars.getCar(0);\n\n// car. // \u6b64\u65f6\u7f16\u8bd1\u5668\u5c31\u4f1a\u63d0\u4f9bcar\u4e0b\u7684\u5c5e\u6027\u63d0\u793a\n")),(0,i.kt)("p",null,"\u5f53\u6211\u4eec\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"new Car"),"\u7684\u65f6\u5019\u6211\u4eec\u5c06\u63a5\u53e3\u7c7b\u578b",(0,i.kt)("inlineCode",{parentName:"p"},"CarInferface"),"\u4f20\u9012\u7ed9\u6cdb\u578bT\uff0c\u7136\u540e\u5c31\u786e\u5b9a\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"Car"),"\u7c7b\u4e2d\u5b9a\u4e49\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"cars"),"\u662f\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Array<CarInferface>"),"\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u5f53\u6211\u4eec\u901a\u8fc7\u4e0b\u6807\u83b7\u53d6\u5230\u6570\u7ec4\u4e2d\u7684\u6570\u636e\u5c31\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"CarInferface"),"\u7c7b\u578b\uff0c\u7136\u540e\u7f16\u8bd1\u5668\u5c31\u80fd\u7ed9\u51fa\u6b63\u786e\u7684\u63d0\u793a\u3002"),(0,i.kt)("h2",{id:"3-\u6cdb\u578b\u7ea6\u675f"},"3. \u6cdb\u578b\u7ea6\u675f"),(0,i.kt)("p",null,"\u6211\u4eec\u901a\u8fc7Vue3\u7684\u4e00\u6bb5\u6e90\u7801",(0,i.kt)("inlineCode",{parentName:"p"},"toRefTmpl"),"\u6765\u4ecb\u7ecd\u6cdb\u578b\u7ea6\u675f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class toRefTmpl<T extends object, K extends keyof T> {\n  constructor(private readonly obj: T, private readonly key: K) {}\n  get() {\n    return this.obj[this.key]\n  }\n  // \u8981\u83b7\u53d6\u6cdb\u578b\u67d0\u4e00\u4e2a\u5c5e\u6027\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 \u6cdb\u578b[\u5c5e\u6027\u540d] \u7684\u5f62\u5f0f\u83b7\u53d6\n  set(newValue: T[K]) {\n    this.obj[this.key] = newValue\n  }\n}\nconst person: PersonInterface = {\n  name: 'jonben',\n  age: 18\n}\ntype PersonInterface = {\n  name: string\n  age: number\n}\nconst p = new toRefTmpl<PersonInterface, 'name'>(person, 'name');\np.set('jonbenery')\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"T extends object"),"\u4ee3\u8868",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"\u8981\u7b26\u5408",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"\u7c7b\u578b\u7684\u7ea6\u675f\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"K extends keyof T"),"\u4ee3\u8868",(0,i.kt)("inlineCode",{parentName:"p"},"K"),"\u8981\u7b26\u5408",(0,i.kt)("inlineCode",{parentName:"p"},"keyof T"),"\u7684\u8054\u5408\u7c7b\u578b\u7684\u7ea6\u675f\uff0c\u5373\u6ee1\u8db3",(0,i.kt)("inlineCode",{parentName:"p"},"'name'|'age'"),"\uff1b"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u603b\u7ed3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," \u8981\u83b7\u53d6\u6cdb\u578b\u67d0\u4e00\u4e2a\u5c5e\u6027\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 \u6cdb\u578b","[\u5c5e\u6027\u540d]"," \u7684\u5f62\u5f0f\u83b7\u53d6\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"toRefTmpl"),"\u6848\u4f8b\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"set"),"\u65b9\u6cd5"))))}u.isMDXComponent=!0}}]);