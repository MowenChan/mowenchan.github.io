(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[807],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6808:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={},s={unversionedId:"se/dev/references/professional/transaction/transaction",id:"se/dev/references/professional/transaction/transaction",isDocsHomePage:!1,title:"Transaction",description:"strict",source:"@site/docs/se/dev/references/professional/transaction/transaction.md",sourceDirName:"se/dev/references/professional/transaction",slug:"/se/dev/references/professional/transaction/transaction",permalink:"/docs/se/dev/references/professional/transaction/transaction",version:"current",frontMatter:{},sidebar:"se_dev_professional",previous:{title:"Distributed Transaction",permalink:"/docs/se/dev/references/professional/transaction/distributed_transaction"}},c=[{value:"strict",id:"strict",children:[]},{value:"Automicity",id:"automicity",children:[]},{value:"Consistency",id:"consistency",children:[]},{value:"Isolation",id:"isolation",children:[]},{value:"Durability",id:"durability",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"strict"},"strict"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A (Atomicity)"),(0,i.kt)("li",{parentName:"ul"},"C (Consistency)"),(0,i.kt)("li",{parentName:"ul"},"I (Isolation)"),(0,i.kt)("li",{parentName:"ul"},"D (Durability)")),(0,i.kt)("h2",{id:"automicity"},"Automicity"),(0,i.kt)("p",null,"In database systems, atomicity is one of the ACID transaction properties. An atomic transaction is an indivisible and irreducible series of database operations such that either all occurs, or nothing occurs. A guarantee of atomicity prevents updates to the database occurring only partially, which can cause greater problems than rejecting the whole series outright. As a consequence, the transaction cannot be observed to be in progress by another database client. At one moment in time, it has not yet happened, and at the next it has already occurred in whole (or nothing happened if the transaction was cancelled in progress)."),(0,i.kt)("h2",{id:"consistency"},"Consistency"),(0,i.kt)("p",null,"in database systems refers to the requirement that any given database transaction must change affected data only in allowed ways. Any data written to the database must be valid according to all defined rules, including constraints, cascades, triggers, and any combination thereof. This does not guarantee correctness of the transaction in all ways the application programmer might have wanted (that is the responsibility of application-level code) but merely that any programming errors cannot result in the violation of any defined database constraints."),(0,i.kt)("h2",{id:"isolation"},"Isolation"),(0,i.kt)("p",null,"In database systems, isolation determines how transaction integrity is visible to other users and systems."),(0,i.kt)("p",null,"A lower isolation level increases the ability of many users to access the same data at the same time, but increases the number of concurrency effects (such as dirty reads or lost updates) users might encounter. Conversely, a higher isolation level reduces the types of concurrency effects that users may encounter, but requires more system resources and increases the chances that one transaction will block another."),(0,i.kt)("p",null,"Isolation is typically defined at database level as a property that defines how/when the changes made by one operation become visible to others. On older systems, it may be implemented systemically, for example through the use of temporary tables. In two-tier systems, a transaction processing (TP) manager is required to maintain isolation. In n-tier systems (such as multiple websites attempting to book the last seat on a flight), a combination of stored procedures and transaction management is required to commit the booking and send confirmation to the customer."),(0,i.kt)("p",null,"Isolation is one of the four ACID properties, along with atomicity, consistency and durability."),(0,i.kt)("h2",{id:"durability"},"Durability"),(0,i.kt)("p",null,"In database systems, durability is the ACID property which guarantees that transactions that have committed will survive permanently. For example, if a flight booking reports that a seat has successfully been booked, then the seat will remain booked even if the system crashes."),(0,i.kt)("p",null,"Durability can be achieved by flushing the transaction's log records to non-volatile storage before acknowledging commitment."),(0,i.kt)("p",null,"In distributed transactions, all participating servers must coordinate before commit can be acknowledged. This is usually done by a two-phase commit protocol."),(0,i.kt)("p",null,"Many DBMSs implement durability by writing transactions into a transaction log that can be reprocessed to recreate the system state right before any later failure. A transaction is deemed committed only after it is entered in the log."))}u.isMDXComponent=!0}}]);