"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),i=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=i(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return t?o.createElement(y,a(a({ref:n},l),{},{components:t})):o.createElement(y,a({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));const s={title:"\u539f\u578b\u94fe\u7684\u7ee7\u627f"},a=void 0,c={unversionedId:"javascript/extends",id:"javascript/extends",title:"\u539f\u578b\u94fe\u7684\u7ee7\u627f",description:"JavaScript \u5e38\u88ab\u63cf\u8ff0\u4e3a\u4e00\u79cd\u57fa\u4e8e\u539f\u578b\u7684\u8bed\u8a00 (prototype-based language)\u2014\u2014\u6bcf\u4e2a\u5bf9\u8c61\u62e5\u6709\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4ee5\u5176\u539f\u578b\u4e3a\u6a21\u677f\u3001\u4ece\u539f\u578b\u7ee7\u627f\u65b9\u6cd5\u548c\u5c5e\u6027\u3002\u539f\u578b\u5bf9\u8c61\u4e5f\u53ef\u80fd\u62e5\u6709\u539f\u578b\uff0c\u5e76\u4ece\u4e2d\u7ee7\u627f\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u4e00\u5c42\u4e00\u5c42\u3001\u4ee5\u6b64\u7c7b\u63a8\u3002\u8fd9\u79cd\u5173\u7cfb\u5e38\u88ab\u79f0\u4e3a\u539f\u578b\u94fe (prototype chain)\uff0c\u5b83\u89e3\u91ca\u4e86\u4e3a\u4f55\u4e00\u4e2a\u5bf9\u8c61\u4f1a\u62e5\u6709\u5b9a\u4e49\u5728\u5176\u4ed6\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002",source:"@site/docs/javascript/extends.md",sourceDirName:"javascript",slug:"/javascript/extends",permalink:"/docs/javascript/extends",draft:!1,editUrl:"https://github.com/jonbenery/weblog/docs/javascript/extends.md",tags:[],version:"current",frontMatter:{title:"\u539f\u578b\u94fe\u7684\u7ee7\u627f"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u6863",permalink:"/docs/"},next:{title:"\u7ee7\u627f\u9759\u6001\u5c5e\u6027",permalink:"/docs/javascript/extendsStatic"}},p={},i=[{value:"1. \u7b80\u5355\u7ee7\u627f",id:"1-\u7b80\u5355\u7ee7\u627f",level:2},{value:"2. \u5192\u5145\u5bf9\u8c61\u7ee7\u627f",id:"2-\u5192\u5145\u5bf9\u8c61\u7ee7\u627f",level:2},{value:"3. \u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f",id:"3-\u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f",level:2},{value:"4. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f1",id:"4-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f1",level:2},{value:"\u5c06\u5b50\u7c7b\u539f\u578b\u7684<code>__proto__</code>\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",id:"\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",level:4},{value:"5. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f2",id:"5-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f2",level:2},{value:"\u4f7f\u7528<code>Object.setPrototypeOf</code>\u5c5e\u6027\uff0c\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684<code>__proto__</code>\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",id:"\u4f7f\u7528objectsetprototypeof\u5c5e\u6027\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",level:4},{value:"6.\u539f\u578b\u94fe\u7ee7\u627f\u56fe",id:"6\u539f\u578b\u94fe\u7ee7\u627f\u56fe",level:2}],l={toc:i};function u(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JavaScript \u5e38\u88ab\u63cf\u8ff0\u4e3a\u4e00\u79cd\u57fa\u4e8e\u539f\u578b\u7684\u8bed\u8a00 (prototype-based language)\u2014\u2014\u6bcf\u4e2a\u5bf9\u8c61\u62e5\u6709\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4ee5\u5176\u539f\u578b\u4e3a\u6a21\u677f\u3001\u4ece\u539f\u578b\u7ee7\u627f\u65b9\u6cd5\u548c\u5c5e\u6027\u3002\u539f\u578b\u5bf9\u8c61\u4e5f\u53ef\u80fd\u62e5\u6709\u539f\u578b\uff0c\u5e76\u4ece\u4e2d\u7ee7\u627f\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u4e00\u5c42\u4e00\u5c42\u3001\u4ee5\u6b64\u7c7b\u63a8\u3002\u8fd9\u79cd\u5173\u7cfb\u5e38\u88ab\u79f0\u4e3a\u539f\u578b\u94fe (prototype chain)\uff0c\u5b83\u89e3\u91ca\u4e86\u4e3a\u4f55\u4e00\u4e2a\u5bf9\u8c61\u4f1a\u62e5\u6709\u5b9a\u4e49\u5728\u5176\u4ed6\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u51c6\u786e\u5730\u8bf4\uff0c\u8fd9\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\u5b9a\u4e49\u5728 Object \u7684\u6784\u9020\u5668\u51fd\u6570 (constructor functions) \u4e4b\u4e0a\u7684prototype\u5c5e\u6027\u4e0a\uff0c\u800c\u975e\u5bf9\u8c61\u5b9e\u4f8b\u672c\u8eab\u3002"),(0,r.kt)("p",null,"\u5728\u4f20\u7edf\u7684 OOP \u4e2d\uff0c\u9996\u5148\u5b9a\u4e49\u201c\u7c7b\u201d\uff0c\u6b64\u540e\u521b\u5efa\u5bf9\u8c61\u5b9e\u4f8b\u65f6\uff0c\u7c7b\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u88ab\u590d\u5236\u5230\u5b9e\u4f8b\u4e2d\u3002\u5728 JavaScript \u4e2d\u5e76\u4e0d\u5982\u6b64\u590d\u5236\u2014\u2014\u800c\u662f\u5728\u5bf9\u8c61\u5b9e\u4f8b\u548c\u5b83\u7684\u6784\u9020\u5668\u4e4b\u95f4\u5efa\u7acb\u4e00\u4e2a\u94fe\u63a5\uff08\u5b83\u662f",(0,r.kt)("strong",{parentName:"p"},"proto"),"\u5c5e\u6027\uff0c\u662f\u4ece\u6784\u9020\u51fd\u6570\u7684prototype\u5c5e\u6027\u6d3e\u751f\u7684\uff09\uff0c\u4e4b\u540e\u901a\u8fc7\u4e0a\u6eaf\u539f\u578b\u94fe\uff0c\u5728\u6784\u9020\u5668\u4e2d\u627e\u5230\u8fd9\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7406\u89e3\u5bf9\u8c61\u7684\u539f\u578b\uff08\u53ef\u4ee5\u901a\u8fc7Object.getPrototypeOf(obj)\u6216\u8005\u5df2\u88ab\u5f03\u7528\u7684",(0,r.kt)("strong",{parentName:"p"},"proto"),"\u5c5e\u6027\u83b7\u5f97\uff09\u4e0e\u6784\u9020\u51fd\u6570\u7684prototype\u5c5e\u6027\u4e4b\u95f4\u7684\u533a\u522b\u662f\u5f88\u91cd\u8981\u7684\u3002\u524d\u8005\u662f\u6bcf\u4e2a\u5b9e\u4f8b\u4e0a\u90fd\u6709\u7684\u5c5e\u6027\uff0c\u540e\u8005\u662f\u6784\u9020\u51fd\u6570\u7684\u5c5e\u6027\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cObject.getPrototypeOf(new Foobar())\u548cFoobar.prototype\u6307\u5411\u7740\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002")),(0,r.kt)("h2",{id:"1-\u7b80\u5355\u7ee7\u627f"},"1. \u7b80\u5355\u7ee7\u627f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(school) {\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\n\nStudent.prototype = new Person()\nStudent.prototype.constructor = Student;\n\nconst stu1 = new Student('\u6e05\u534e')\nconsole.log(stu1);\n\n// \u6b64\u79cd\u7ee7\u627f\u7684\u7f3a\u70b9\n// 1. \u5b50\u7c7b\u4e0d\u80fd\u83b7\u53d6\u7236\u7c7b\u7684\u5c5e\u6027\n// 2. \u5b50\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u88ab\u66ff\u6362\u6389\u4e86\n")),(0,r.kt)("h2",{id:"2-\u5192\u5145\u5bf9\u8c61\u7ee7\u627f"},"2. \u5192\u5145\u5bf9\u8c61\u7ee7\u627f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\n\n// Student.prototype = Person.prototype\n// \u5f53\u65f6\u8ba4\u4e3a\u8fd9\u6837\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u7ee7\u627f\uff0c\u4f46\u662f\u6709\u4e00\u4e2a\u7f3a\u70b9\u662f\uff1a\n// \u5f53\u53bb\u4fee\u6539\u4e86\u5b50\u7c7b\u539f\u578b\u8eab\u4e0a\u7684say\u65b9\u6cd5\u65f6\uff0c\u5176\u7236\u7c7b\u7684say\u65b9\u6cd5\u5c31\u4f1a\u88ab\u66ff\u6362\uff0c\u5bfc\u81f4\u540e\u9762\u5728\u521b\u5efaperson\u5bf9\u8c61\u65f6say\u65b9\u6cd5\u5c31\u88ab\u66ff\u6362\u6389\u4e86\n// \u6211\u4eec\u5e76\u4e0d\u5e0c\u671b\u6b64\u7c7b\u4e8b\u4ef6\u53d1\u751f\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u4f7f\u7528new Person()\u6765\u89c4\u907f\u8fd9\u4e2a\u95ee\u9898\nStudent.prototype = new Person()\nStudent.prototype.constructor = Student;\n// Student.prototype.say = function() {\n//   console.log('\u6211\u88ab\u4fee\u6539\u4e86');\n// }\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nstu1.say()\n// const person = new Person('12', 18);\n// person.say()\n\n\n// \u4f18\u53161\u7ee7\u627f.js\u4f7f\u7528\u5192\u5145\u5bf9\u8c61call\u6765\u6784\u9020\u590d\u5236\u7236\u7c7b\u7684\u65b9\u6cd5\u5230\u5b50\u7c7b\n// \u7f3a\u70b9\n//  1. \u7236\u7c7b\u88abnew\u4e862\u6b21\uff0c\u6d6a\u8d39\u6027\u80fd\n//  2. \u4ecd\u65e7\u5b58\u5728\u5b50\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u88ab\u66ff\u6362\u6389\u4e86\n\n")),(0,r.kt)("h2",{id:"3-\u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f"},"3. \u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\nfunction Extends(parent) {\n  // \u501f\u7528\u53e6\u5916\u4e00\u4e2a\u4e2d\u95f4\u51fd\u6570\n  function middle() {}\n  middle.prototype = parent.prototype;\n  return new middle()\n}\n\nStudent.prototype = Extends(Person);\nStudent.prototype.constructor = Student;\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nconsole.log(stu1);\n\n// \u7236\u7c7b\u4e0d\u5728\u88abnew \u591a\u6b21\n// \u7f3a\u70b9\uff1a\n//  \u4ecd\u65e7\u5b58\u5728\u5b50\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u88ab\u66ff\u6362\u6389\u4e86\n\n")),(0,r.kt)("h2",{id:"4-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f1"},"4. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f1"),(0,r.kt)("h4",{id:"\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"},"\u5c06\u5b50\u7c7b\u539f\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"h4"},"__proto__"),"\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\n\nfunction Extends(parent) {\n  // \u501f\u7528\u53e6\u5916\u4e00\u4e2a\u4e2d\u95f4\u51fd\u6570\n  function middle() {}\n  middle.prototype = parent.prototype;\n  return new middle()\n}\n\nStudent.prototype.__proto__ = Extends(Person);\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nconsole.log(stu1);\nstu1.getSchool()\n\n//  \u5b50\u7c7b\u539f\u578b\u4e0d\u5728\u88ab\u66ff\u6362\n\n")),(0,r.kt)("h2",{id:"5-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f2"},"5. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f2"),(0,r.kt)("h4",{id:"\u4f7f\u7528objectsetprototypeof\u5c5e\u6027\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"Object.setPrototypeOf"),"\u5c5e\u6027\uff0c\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"h4"},"__proto__"),"\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\nfunction Extends(son, parent) {\n  Object.setPrototypeOf(son.prototype, parent.prototype)\n  // son.prototype.__proto__ = parent.prototype\n}\n\n\n\nExtends(Student, Person);\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nstu1.getSchool()\n\n// setPrototypeOf\n")),(0,r.kt)("h2",{id:"6\u539f\u578b\u94fe\u7ee7\u627f\u56fe"},"6.\u539f\u578b\u94fe\u7ee7\u627f\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u539f\u578b\u94fe\u7ee7\u627f\u56fe",src:t(8611).Z,width:"570",height:"708"})))}u.isMDXComponent=!0},8611:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/prototype-95b69d116c74d0d6da64e1c6efc7cd79.jpeg"}}]);