(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[3172],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7396:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={sidebar_position:-1},l="Kafka",c={unversionedId:"se/middleware/kafka/index",id:"se/middleware/kafka/index",isDocsHomePage:!1,title:"Kafka",description:"Concepts and Terminology",source:"@site/docs/se/middleware/kafka/index.md",sourceDirName:"se/middleware/kafka",slug:"/se/middleware/kafka/index",permalink:"/docs/se/middleware/kafka/index",version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"se_middleware",previous:{title:"ActiveMQ",permalink:"/docs/se/middleware/active_mq/index"},next:{title:"Nginx",permalink:"/docs/se/middleware/nginx/index"}},s=[{value:"Concepts and Terminology",id:"concepts-and-terminology",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafka"},"Kafka"),(0,o.kt)("h2",{id:"concepts-and-terminology"},"Concepts and Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Event"),' records the fact that "something happened" in the world or in your business. '),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Producers")," are those client applications that publish (write) events to Kafka."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Consumers")," are those that subscribe to (read and process) these events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Events")," are organized and durably stored in topics."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Topics"),' are partitioned, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. '),(0,o.kt)("li",{parentName:"ul"},"Topics are ",(0,o.kt)("strong",{parentName:"li"},"partitioned"),', meaning a topic is spread over a number of "buckets" located on different Kafka brokers. ',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Events ",(0,o.kt)("u",null,"with the same event key")," are written to the same ",(0,o.kt)("strong",{parentName:"li"},"partition"),"."))),(0,o.kt)("li",{parentName:"ul"},"To make your data ",(0,o.kt)("em",{parentName:"li"},"fault-tolerant(\u5bb9\u9519\u6027)")," and ",(0,o.kt)("em",{parentName:"li"},"highly-available(\u9ad8\u53ef\u7528)"),", every topic can be ",(0,o.kt)("strong",{parentName:"li"},"Replicated"),".")))}u.isMDXComponent=!0}}]);