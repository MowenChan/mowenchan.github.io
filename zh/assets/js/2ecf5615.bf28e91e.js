"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[4467],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=u(t),f=a,m=y["".concat(l,".").concat(f)]||y[f]||s[f]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},77572:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={},l="Open System Interconnect(OSI)",u={unversionedId:"se/archi/network/osi",id:"se/archi/network/osi",title:"Open System Interconnect(OSI)",description:"layer",source:"@site/docs/se/archi/network/osi.md",sourceDirName:"se/archi/network",slug:"/se/archi/network/osi",permalink:"/zh/docs/se/archi/network/osi",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"layer",id:"layer",level:2},{value:"view",id:"view",level:2}],y={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"open-system-interconnectosi"},"Open System Interconnect(OSI)"),(0,o.kt)("h2",{id:"layer"},"layer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application Layer"),(0,o.kt)("li",{parentName:"ul"},"Presentation Layer"),(0,o.kt)("li",{parentName:"ul"},"Session Layer"),(0,o.kt)("li",{parentName:"ul"},"Transport Layer"),(0,o.kt)("li",{parentName:"ul"},"Network Layer"),(0,o.kt)("li",{parentName:"ul"},"Data Link Layer",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Logical Link Control"),(0,o.kt)("li",{parentName:"ul"},"medium access control"))),(0,o.kt)("li",{parentName:"ul"},"Physical Layer")),(0,o.kt)("h2",{id:"view"},"view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------------------+------------------+\n|       OSI        |      TCP/IP      |\n+------------------+------------------+\n|Application Layer |                  |\n+------------------+                  |\n|Presentation Layer|Application Layer |\n+------------------+                  |\n|Session Layer     |                  | ^\n+------------------+-------------------Socket (socket is virtual layer/interface)\n|Transport Layer   |Transport Layer   | v\n+------------------+------------------+\n|Network Layer     |Network Layer     |\n+------------------+------------------+\n|Data Link Layer   |Data Link Layer   |\n+------------------+------------------+\n|Physical Layer    |Physical Layer    |\n+------------------+------------------+\n")))}f.isMDXComponent=!0}}]);