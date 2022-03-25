"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[6898],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7923:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:-1},l="Kafka",s={unversionedId:"se/archi/middleware/kafka/index",id:"se/archi/middleware/kafka/index",title:"Kafka",description:"Concepts and Terminology",source:"@site/docs/se/archi/middleware/kafka/index.md",sourceDirName:"se/archi/middleware/kafka",slug:"/se/archi/middleware/kafka/",permalink:"/docs/se/archi/middleware/kafka/",tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"se_archi",previous:{title:"ActiveMQ",permalink:"/docs/se/archi/middleware/active_mq/"},next:{title:"Nginx",permalink:"/docs/se/archi/middleware/nginx/"}},p={},u=[{value:"Concepts and Terminology",id:"concepts-and-terminology",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("h2",{id:"concepts-and-terminology"},"Concepts and Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Event"),' records the fact that "something happened" in the world or in your business. '),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Producers")," are those client applications that publish (write) events to Kafka."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consumers")," are those that subscribe to (read and process) these events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Events")," are organized and durably stored in topics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topics"),' are partitioned, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. '),(0,i.kt)("li",{parentName:"ul"},"Topics are ",(0,i.kt)("strong",{parentName:"li"},"partitioned"),', meaning a topic is spread over a number of "buckets" located on different Kafka brokers. ',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Events ",(0,i.kt)("u",null,"with the same event key")," are written to the same ",(0,i.kt)("strong",{parentName:"li"},"partition"),"."))),(0,i.kt)("li",{parentName:"ul"},"To make your data ",(0,i.kt)("em",{parentName:"li"},"fault-tolerant(\u5bb9\u9519\u6027)")," and ",(0,i.kt)("em",{parentName:"li"},"highly-available(\u9ad8\u53ef\u7528)"),", every topic can be ",(0,i.kt)("strong",{parentName:"li"},"Replicated"),".")))}m.isMDXComponent=!0}}]);