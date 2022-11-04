"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[1050],{1317:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(6687);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=l(n),f=c,d=y["".concat(p,".").concat(f)]||y[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(9440),c=(n(6687),n(1317));const a={},o="TypeScript",i={unversionedId:"note/cast/capriccio/typescript",id:"note/cast/capriccio/typescript",title:"TypeScript",description:"\u5173\u4e8e\u4e00\u79cd\u5e94\u7528\u9879\u76ee\u7ed3\u6784",source:"@site/docs/note/cast/capriccio/typescript.mdx",sourceDirName:"note/cast/capriccio",slug:"/note/cast/capriccio/typescript",permalink:"/docs/note/cast/capriccio/typescript",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"note_cast",previous:{title:"\u5173\u4e8e\u5206\u9875",permalink:"/docs/note/cast/capriccio/pagenation"},next:{title:"intermediate",permalink:"/docs/note/cast/intermediate"}},p={},l=[{value:"\u5173\u4e8e\u4e00\u79cd\u5e94\u7528\u9879\u76ee\u7ed3\u6784",id:"\u5173\u4e8e\u4e00\u79cd\u5e94\u7528\u9879\u76ee\u7ed3\u6784",level:2},{value:"\u63cf\u8ff0\u4e00\u79cd\u901a\u7528\u7684",id:"\u63cf\u8ff0\u4e00\u79cd\u901a\u7528\u7684",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"typescript"},"TypeScript"),(0,c.kt)("h2",{id:"\u5173\u4e8e\u4e00\u79cd\u5e94\u7528\u9879\u76ee\u7ed3\u6784"},"\u5173\u4e8e\u4e00\u79cd\u5e94\u7528\u9879\u76ee\u7ed3\u6784"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},'type TS<T>={\n  filename:T\n};\ntype DTS<T>={\n  filename:T\n};\ntype Package=[\n  DTS<"helper">?,\n  TS<"helper">?,\n  ...TS<any>[]?,\n  DTS<"index">?,\n  TS<"index">,\n  ...Package[]?\n];\ntype SRC=[\n  ...Package[],\n  TS<"index">?\n];\ntype ROOT=[\n  "package.json",\n  SRC,\n  "config",\n  "tsconfig.json",\n  ...any[]\n];\n')),(0,c.kt)("h2",{id:"\u63cf\u8ff0\u4e00\u79cd\u901a\u7528\u7684"},"\u63cf\u8ff0\u4e00\u79cd\u901a\u7528\u7684"))}u.isMDXComponent=!0}}]);