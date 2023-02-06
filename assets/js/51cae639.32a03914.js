"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(r),s=a,k=g["".concat(l,".").concat(s)]||g[s]||m[s]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"git\u5e38\u7528\u64cd\u4f5c"},i=void 0,p={unversionedId:"git/git",id:"git/git",title:"git\u5e38\u7528\u64cd\u4f5c",description:"1. \u5bf9\u4e8e\u4e3a\u63d0\u4ea4\u5230\u6682\u5b58\u533a\u57df\u7684\u6587\u4ef6\u7684\u64a4\u9500",source:"@site/docs/git/git.md",sourceDirName:"git",slug:"/git/",permalink:"/docs/git/",draft:!1,editUrl:"https://github.com/jonbenery/weblog/docs/git/git.md",tags:[],version:"current",frontMatter:{title:"git\u5e38\u7528\u64cd\u4f5c"},sidebar:"tutorialSidebar",previous:{title:"require-context",permalink:"/docs/webpack/require-context"},next:{title:"Git 5 \u6761\u63d0\u9ad8\u6548\u7387\u7684\u547d\u4ee4",permalink:"/docs/git/git-cmd"}},l={},c=[],u={toc:c};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. \u5bf9\u4e8e\u4e3a\u63d0\u4ea4\u5230\u6682\u5b58\u533a\u57df\u7684\u6587\u4ef6\u7684\u64a4\u9500")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout .\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. \u8fdc\u7a0b\u5df2\u6709remote_branch\u5206\u652f\u5e76\u4e14\u5df2\u7ecf\u5173\u8054\u672c\u5730\u5206\u652flocal_branch\u4e14\u672c\u5730\u5df2\u7ecf\u5207\u6362\u5230local_branch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. \u8fdc\u7a0b\u5df2\u6709remote_branch\u5206\u652f\u4f46\u672a\u5173\u8054\u672c\u5730\u5206\u652flocal_branch\u4e14\u672c\u5730\u5df2\u7ecf\u5207\u6362\u5230local_branch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push -u origin/remote_branch\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. \u8fdc\u7a0b\u6ca1\u6709\u6709remote_branch\u5206\u652f\u5e76\uff0c\u672c\u5730\u5df2\u7ecf\u5207\u6362\u5230local_branch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push origin local_branch:remote_branch\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. \u4ece\u8fdc\u7a0b\u4ed3\u5e93\u91cc\u62c9\u53d6\u4e00\u6761\u672c\u5730\u4e0d\u5b58\u5728\u7684\u5206\u652f\u65f6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," git checkout -b \u672c\u5730\u5206\u652f\u540d origin/\u8fdc\u7a0b\u5206\u652f\u540d\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6. \u56de\u9000\u7248\u672c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git reset --hard \u7248\u672cid\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7. \u91cd\u547d\u540d\u5206\u652f\u540d\u79f0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," git branch -m <old_name> <new_name> \u6539\u540d\u5b57\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"8. \u5220\u9664\u8fdc\u7a0b\u5206\u652f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push origin \u2013-delete \u5206\u652f\u540d\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9. \u5220\u9664\u672c\u5730\u5206\u652f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git branch -d <branch-name>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"10. Git \u53d6\u6d88\u6240\u6709\u6587\u4ef6\u7684\u8ffd\u8e2a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," git rm -r \u2014cached . //\u4e0d\u5220\u9664\u672c\u5730\u6587\u4ef6\n git rm -r \u2014f . //\u5220\u9664\u672c\u5730\u6587\u4ef6\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"11. Git clone\u540e\u5207\u6362\u5206\u652f\uff0c\u5e76\u5efa\u7acb\u8ffd\u8e2a\uff08track\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout -t origin/\u5206\u652f\u540d\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"12. \u5173\u8054git\u4ed3\u5e93"),"\n\u521b\u5efa\u65b0\u7684\u4ed3\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'echo "# gitHelp" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin git@github.com:jonbenery/gitHelp.git\ngit push -u origin main\n')),(0,a.kt)("p",null,"\u5173\u8054\u5df2\u7ecf\u5b58\u5728\u7684\u4ed3\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"git remote add origin git@github.com:jonbenery/gitHelp.git\ngit branch -M main\ngit push -u origin mains\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"13. \u89e3\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"git remote rm origin\n")))}g.isMDXComponent=!0}}]);