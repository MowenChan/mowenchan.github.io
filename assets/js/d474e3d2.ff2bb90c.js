(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[6174],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},420:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={},c="http",p={unversionedId:"se/network/http",id:"se/network/http",isDocsHomePage:!1,title:"http",description:"TCP Signiture",source:"@site/docs/se/network/http.md",sourceDirName:"se/network",slug:"/se/network/http",permalink:"/docs/se/network/http",version:"current",frontMatter:{},sidebar:"se_network",previous:{title:"Kerberos",permalink:"/docs/se/network/Kerberos"},next:{title:"Open System Interconnect(OSI)",permalink:"/docs/se/network/osi"}},l=[{value:"TCP Signiture",id:"tcp-signiture",children:[]},{value:"shake hands",id:"shake-hands",children:[]},{value:"wave hands",id:"wave-hands",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http"},"http"),(0,o.kt)("h2",{id:"tcp-signiture"},"TCP Signiture"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Sig"),(0,o.kt)("th",{parentName:"tr",align:"center"},"desc"),(0,o.kt)("th",{parentName:"tr",align:"left"},"trans"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"SYN"),(0,o.kt)("td",{parentName:"tr",align:"center"},"synchronous"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5efa\u7acb\u8054\u673a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ACK"),(0,o.kt)("td",{parentName:"tr",align:"center"},"acknowledgement"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u786e\u8ba4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"PSH"),(0,o.kt)("td",{parentName:"tr",align:"center"},"push"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u4f20\u9001")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"FIN"),(0,o.kt)("td",{parentName:"tr",align:"center"},"finish"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7ed3\u675f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"RST"),(0,o.kt)("td",{parentName:"tr",align:"center"},"reset"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u91cd\u7f6e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"URG"),(0,o.kt)("td",{parentName:"tr",align:"center"},"urgent"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7d27\u6025")))),(0,o.kt)("h2",{id:"shake-hands"},"shake hands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"X=${random};Y=${random};Z=${random}\n\n[C]                    [S]\n |                      |\n |-----SYN=1,SEQ=X-----\x3e|\n |<-SYN=1,ACK=X+1,SEQ=Y-|\n |----ACK=Y+1,SEQ=Z----\x3e|\n |                      |\n")),(0,o.kt)("h2",{id:"wave-hands"},"wave hands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"X=${random};Y=${random};Z=${random}\n\n[C]                    [S]\n |<======transfer======>|\n |-----FIN=1,SEQ=X-----\x3e|\n |<-ACK=1,SEQ=Y,ack=X+1-|\n |<======transfer=======|\n |<-FIN=1,ACK=1,SEQ=Z,ack=X+1-|\n |----ACK=Y+1,SEQ=Z----\x3e|\n |                      |\n")))}d.isMDXComponent=!0}}]);