"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[6898],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7923:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_position:-1},l="Kafka",s={unversionedId:"se/archi/middleware/kafka/index",id:"se/archi/middleware/kafka/index",title:"Kafka",description:"Concepts and Terminology",source:"@site/docs/se/archi/middleware/kafka/index.md",sourceDirName:"se/archi/middleware/kafka",slug:"/se/archi/middleware/kafka/",permalink:"/docs/se/archi/middleware/kafka/",tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1}},p={},u=[{value:"Concepts and Terminology",id:"concepts-and-terminology",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafka"},"Kafka"),(0,o.kt)("h2",{id:"concepts-and-terminology"},"Concepts and Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Event"),' records the fact that "something happened" in the world or in your business. '),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Producers")," are those client applications that publish (write) events to Kafka."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Consumers")," are those that subscribe to (read and process) these events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Events")," are organized and durably stored in topics."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Topics"),' are partitioned, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. '),(0,o.kt)("li",{parentName:"ul"},"Topics are ",(0,o.kt)("strong",{parentName:"li"},"partitioned"),', meaning a topic is spread over a number of "buckets" located on different Kafka brokers. ',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Events ",(0,o.kt)("u",null,"with the same event key")," are written to the same ",(0,o.kt)("strong",{parentName:"li"},"partition"),"."))),(0,o.kt)("li",{parentName:"ul"},"To make your data ",(0,o.kt)("em",{parentName:"li"},"fault-tolerant(\u5bb9\u9519\u6027)")," and ",(0,o.kt)("em",{parentName:"li"},"highly-available(\u9ad8\u53ef\u7528)"),", every topic can be ",(0,o.kt)("strong",{parentName:"li"},"Replicated"),".")))}m.isMDXComponent=!0}}]);