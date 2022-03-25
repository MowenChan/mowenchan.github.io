"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[346],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,f=m["".concat(c,".").concat(y)]||m[y]||s[y]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9170:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},c="Transmission Control Protocol/Internet Protocol(TCP/IP)",p={unversionedId:"se/archi/network/tcp_ip",id:"se/archi/network/tcp_ip",title:"Transmission Control Protocol/Internet Protocol(TCP/IP)",description:"layer",source:"@site/docs/se/archi/network/tcp_ip.md",sourceDirName:"se/archi/network",slug:"/se/archi/network/tcp_ip",permalink:"/zh/docs/se/archi/network/tcp_ip",tags:[],version:"current",frontMatter:{},sidebar:"se_archi",previous:{title:"Summaries",permalink:"/zh/docs/se/archi/network/summaries"},next:{title:"Operation System",permalink:"/zh/docs/se/archi/os"}},u={},s=[{value:"layer",id:"layer",level:2},{value:"view",id:"view",level:2}],m={toc:s};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transmission-control-protocolinternet-protocoltcpip"},"Transmission Control Protocol/Internet Protocol(TCP/IP)"),(0,o.kt)("h2",{id:"layer"},"layer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application Layer",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"HTTP"),(0,o.kt)("li",{parentName:"ul"},"WebSocket (Full Duplex)"),(0,o.kt)("li",{parentName:"ul"},"FTP"),(0,o.kt)("li",{parentName:"ul"},"SMTP"),(0,o.kt)("li",{parentName:"ul"},"DNS"))),(0,o.kt)("li",{parentName:"ul"},"Transport Layer"),(0,o.kt)("li",{parentName:"ul"},"Network Layer"),(0,o.kt)("li",{parentName:"ul"},"Data Link Layer",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Logical Link Control"),(0,o.kt)("li",{parentName:"ul"},"medium access control"))),(0,o.kt)("li",{parentName:"ul"},"Physical Layer")),(0,o.kt)("h2",{id:"view"},"view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------------------+------------------+\n|       OSI        |      TCP/IP      |\n+------------------+------------------+\n|Application Layer |                  |\n+------------------+                  |\n|Presentation Layer|Application Layer |\n+------------------+                  |\n|Session Layer     |                  | ^\n+------------------+-------------------Socket (socket is virtual layer/interface)\n|Transport Layer   |Transport Layer   | v\n+------------------+------------------+\n|Network Layer     |Network Layer     |\n+------------------+------------------+\n|Data Link Layer   |Data Link Layer   |\n+------------------+------------------+\n|Physical Layer    |Physical Layer    |\n+------------------+------------------+\n")))}y.isMDXComponent=!0}}]);