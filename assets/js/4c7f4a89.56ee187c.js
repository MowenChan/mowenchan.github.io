"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[7613],{1317:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>d});var n=t(6687);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),i=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(p.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,l=a.originalType,p=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),N=i(t),d=s,c=N["".concat(p,".").concat(d)]||N[d]||k[d]||l;return t?n.createElement(c,m(m({ref:e},o),{},{components:t})):n.createElement(c,m({ref:e},o))}));function d(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var l=t.length,m=new Array(l);m[0]=N;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=a,r.mdxType="string"==typeof a?a:s,m[1]=r;for(var i=2;i<l;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},9898:(a,e,t)=>{t.d(e,{dO:()=>l,gS:()=>s});var n=t(6687);function s(){return n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("td",null,"CIDR notation"),n.createElement("td",null,"netmask ",n.createElement("sub",null,"2")),n.createElement("td",null,"netmask ",n.createElement("sub",null,"10")))),n.createElement("tbody",{style:{fontSize:"0.5rem"}},function(){let a=[];for(let e=1;e<32;e++){let t,n,s,l="1".repeat(e)+"0".repeat(32-e);t="/"+e;let m=[];for(let a=0;a<4;a++)m.push(l.substring(8*a,8*(a+1)));n=m.join(" . "),s=m.map((a=>Number.parseInt(a,2))).join(" . "),a.push({slash:t,bin:n,dec:s})}return a}().map((a=>n.createElement("tr",null,n.createElement("td",null,a.slash),n.createElement("td",null,a.bin),n.createElement("td",null,a.dec))))))}function l(){let a=[[["SRC",32]],[["DEST",32]],[["Zeros",8],["protocol",8],["Tcp-Length",16]],[["SRC-Port",16],["DEST-Port",16]],[["SEQ-NO",32]],[["ACK-NO",32]],[["Data-Offset",4],["Reserved",3],["NS",1],["CWR",1],["ECE",1],["URG",1],["ACK",1],["PSH",1],["RST",1],["SYN",1],["FIN",1],["Window-Size",16]],[["Checksum",16],["Urgent-Pointer",16]],[["Options",16]],[["Data",16]]];return n.createElement("div",{style:{display:"grid",textAlign:"center",gridTemplateRows:"repeat("+a.length+" 1fr)",gridTemplateColumns:"repeat(32 1fr)"}},a.flat(1).map(((a,e)=>n.createElement("div",{key:e,style:{border:"1px solid black",gridColumnStart:"span "+a[1]}},n.createElement("span",null,a[0],n.createElement("sub",{style:{fontSize:"0.5rem"}},a[1]))))))}},3007:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=t(9440),s=(t(6687),t(1317)),l=t(9898);const m={},r="IPV4",p={unversionedId:"kno/cast/intermediate/netwok/ipv4",id:"kno/cast/intermediate/netwok/ipv4",title:"IPV4",description:"Classful Address",source:"@site/docs/kno/cast/intermediate/netwok/ipv4.mdx",sourceDirName:"kno/cast/intermediate/netwok",slug:"/kno/cast/intermediate/netwok/ipv4",permalink:"/docs/kno/cast/intermediate/netwok/ipv4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kno_cast",previous:{title:"\u6982\u5ff5",permalink:"/docs/kno/cast/intermediate/netwok/concept"},next:{title:"IPV6",permalink:"/docs/kno/cast/intermediate/netwok/ipv6"}},i={},o=[{value:"Classful Address",id:"classful-address",level:2},{value:"special address",id:"special-address",level:2},{value:"Subnet Mask",id:"subnet-mask",level:2},{value:"Why Subnet Mask?",id:"why-subnet-mask",level:3},{value:"Caculation",id:"caculation",level:3},{value:"CIDR",id:"cidr",level:2},{value:"Why CIDR?",id:"why-cidr",level:3},{value:"How CIDR?",id:"how-cidr",level:3},{value:"Example",id:"example",level:3},{value:"VLSM",id:"vlsm",level:2},{value:"Why VLSM?",id:"why-vlsm",level:3},{value:"How VLSM?",id:"how-vlsm",level:3},{value:"Example",id:"example-1",level:3}],k={toc:o};function N(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ipv4"},"IPV4"),(0,s.kt)("h2",{id:"classful-address"},"Classful Address"),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"binary"),(0,s.kt)("td",null,"decimal"))),(0,s.kt)("tbody",{style:{fontSize:"0.5rem"}},(0,s.kt)("tr",null,(0,s.kt)("td",null,["0xxxxxx"].concat(new Array(3).fill("x".repeat(8))).join(" . ")),(0,s.kt)("td",null,"0~127.x.x.x")),(0,s.kt)("tr",null,(0,s.kt)("td",null,["10xxxxx"].concat(new Array(3).fill("x".repeat(8))).join(" . ")),(0,s.kt)("td",null,"128~191.x.x.x")),(0,s.kt)("tr",null,(0,s.kt)("td",null,["110xxxxx"].concat(new Array(3).fill("x".repeat(8))).join(" . ")),(0,s.kt)("td",null,"224~239.x.x.x")),(0,s.kt)("tr",null,(0,s.kt)("td",null,["1110xxxx"].concat(new Array(3).fill("x".repeat(8))).join(" . ")),(0,s.kt)("td",null,"224~239.x.x.x")),(0,s.kt)("tr",null,(0,s.kt)("td",null,["11110000"].concat(new Array(3).fill("x".repeat(8))).join(" . ")),(0,s.kt)("td",null,"240~255.x.x.x")))),(0,s.kt)("h2",{id:"special-address"},"special address"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Broadcasting"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"255 . 255 . 255 . 255"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{style:{color:"purple"}},"network address"),(0,s.kt)("span",null," . "),(0,s.kt)("span",null,"255")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Loopback(in class A address range)"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"127.x.x.x"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Unspecified(in class A address range)"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"0.0.0.0"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Current Network(in class A address range)"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"0 . ",(0,s.kt)("span",{style:{color:"purple"}},"host address")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Current Host"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{style:{color:"purple"}},"network address")," . 0")))),(0,s.kt)("h2",{id:"subnet-mask"},"Subnet Mask"),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"slash"),(0,s.kt)("td",null,"binary"),(0,s.kt)("td",null,"decimal"),(0,s.kt)("td",null,"ip",(0,s.kt)("sub",{style:{fontSize:"0.5rem"}},"class")))),(0,s.kt)("tbody",{style:{fontSize:"0.5rem"}},(0,s.kt)("tr",null,(0,s.kt)("td",null,"/8"),(0,s.kt)("td",null,new Array(1).fill("1".repeat(8)).concat(new Array(3).fill("0".repeat(8))).join(" . ")),(0,s.kt)("td",null,"255.0.0.0"),(0,s.kt)("td",null,"A")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"/16"),(0,s.kt)("td",null,new Array(2).fill("1".repeat(8)).concat(new Array(2).fill("0".repeat(8))).join(" . ")),(0,s.kt)("td",null,"255.255.0.0"),(0,s.kt)("td",null,"B")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"/24"),(0,s.kt)("td",null,new Array(3).fill("1".repeat(8)).concat(new Array(1).fill("0".repeat(8))).join(" . ")),(0,s.kt)("td",null,"255.255.255.0"),(0,s.kt)("td",null,"C")))),(0,s.kt)("h3",{id:"why-subnet-mask"},"Why Subnet Mask?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"distinction what class of this ip it is."),(0,s.kt)("li",{parentName:"ul"},"discrimination local or remote this ip it is.")),(0,s.kt)("h3",{id:"caculation"},"Caculation"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"P"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"t"))),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"M"),(0,s.kt)("mi",{parentName:"msub"},"a")),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"P"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"t"))),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"M"),(0,s.kt)("mi",{parentName:"msub"},"a")),(0,s.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.kt)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0")))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"))))),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260"),(0,s.kt)("mn",{parentName:"mrow"},"0")))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e")))))))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C=IP_{a.net} \\oplus SM_{a} - IP_{b.net}\\oplus SM_{a} \\\\ \\begin{cases} C=0 & local \\\\ C \\neq 0 & remote \\end{cases}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2806em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"."),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"."),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))),(0,s.kt)("span",{parentName:"span",className:"mspace newline"}),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},(0,s.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,s.kt)("span",{parentName:"span",className:"delimsizing size4"},"{")),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mtable"},(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},(0,s.kt)("span",{parentName:"span",className:"mrel"},(0,s.kt)("span",{parentName:"span",className:"mord vbox"},(0,s.kt)("span",{parentName:"span",className:"thinbox"},(0,s.kt)("span",{parentName:"span",className:"rlap"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"inner"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mrel"},"\ue020"))),(0,s.kt)("span",{parentName:"span",className:"fix"}))))),(0,s.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"1em"}}),(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"oc"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.kt)("span",{parentName:"span"}))))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("h2",{id:"cidr"},"CIDR"),(0,s.kt)(l.gS,null),(0,s.kt)("h3",{id:"why-cidr"},"Why CIDR?"),(0,s.kt)("p",null,(0,s.kt)("b",null,"Think")," we have 2000 hosts need to distribution ipaddress."),(0,s.kt)("p",null,(0,s.kt)("b",null,"If")," use class B address there will have 65535 address; 65535-2000=63536 address is wasted."),(0,s.kt)("p",null,(0,s.kt)("b",null,"If")," use class C address we need almost 8 class C address."),(0,s.kt)("h3",{id:"how-cidr"},"How CIDR?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Choose a Classful address can range all hosts."),(0,s.kt)("li",{parentName:"ol"},"Caculation how many bits(host address) are fit for."),(0,s.kt)("li",{parentName:"ol"},"Length of full host address-length of host address=subnet id")),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("div",{style:{border:"1px solid black",fontSize:"0.5rem",display:"flex",flexDirection:"column"}},(0,s.kt)("div",null,"Range=172.16.0.0"),(0,s.kt)("div",null,"SM=",new Array(2).fill("1".repeat(8)).concat(new Array(2).fill("0".repeat(8))).join(" . ")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"hosts"),(0,s.kt)("td",null,"Classful"),(0,s.kt)("td",null,"CIDR"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"2000"),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"Range=172.16.0.0=65536"),(0,s.kt)("div",null,"SM=",new Array(2).fill("255").concat(new Array(2).fill("0")).join(" . ")),(0,s.kt)("div",null,"avail=65536-2=65534"),(0,s.kt)("div",null,"waste=65536-2000=63536"))),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"SM=",new Array(2).fill("255").join(" . ")," . [",(0,s.kt)("span",{style:{color:"orange"}},"00000-11111"),"]000.00000000"),(0,s.kt)("div",null,"network id=172.16.0.0/5"),(0,s.kt)("div",null,"waste=2048-2000=48"),(0,s.kt)("div",null,"Unused=65536-2048=63488"))))))),(0,s.kt)("h2",{id:"vlsm"},"VLSM"),(0,s.kt)("h3",{id:"why-vlsm"},"Why VLSM?"),(0,s.kt)("p",null,"VLSM can divide a full class address to many subnet."),(0,s.kt)("h3",{id:"how-vlsm"},"How VLSM?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Sort subnet according to number of hosts."),(0,s.kt)("li",{parentName:"ol"},"Subnet(divide) the given network id into the number of subnet we need."),(0,s.kt)("li",{parentName:"ol"},"Subneting(vlsm) the subnet to fit the number of nodes in each subnet.")),(0,s.kt)("h3",{id:"example-1"},"Example"),(0,s.kt)("div",{style:{border:"1px solid black",fontSize:"0.5rem",display:"flex",flexDirection:"column"}},(0,s.kt)("div",null,"Range=  192.168.4.64/24"),(0,s.kt)("div",null,"SM=",new Array(3).fill("1".repeat(8)).concat(new Array(1).fill("0".repeat(8))).join(" . ")),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"subnet"),(0,s.kt)("td",null,"hosts"),(0,s.kt)("td",null,"cidr"),(0,s.kt)("td",null,"vlsm"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"LAN2"),(0,s.kt)("td",null,"55"),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"SM=",new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"00"),"000000"),(0,s.kt)("div",null,"network id=192.168.4.0/26"),(0,s.kt)("div",null,"waste=64-55=9"))),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"SM=",new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"00"),"000000"),(0,s.kt)("div",null,"network id=192.168.4.0/26"),(0,s.kt)("div",null,"waste=64-55=9")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"LAN1"),(0,s.kt)("td",null,"25"),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"SM=",new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"01"),"000000"),(0,s.kt)("div",null,"network id=192.168.4.64/26"),(0,s.kt)("div",null,"waste=64-25=39"))),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"dived 192.168.4.64/26"),(0,s.kt)("div",null,"to 192.168.4.[",(0,s.kt)("span",{style:{color:"orange"}},"010"),",",(0,s.kt)("span",{style:{color:"orange"}},"011"),"]/27"),(0,s.kt)("div",null,"192.168.4.",(0,s.kt)("span",{style:{color:"orange"}},"64"),"/27 for LAN1"),(0,s.kt)("div",null,"wast=32-25=7")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"LAN3"),(0,s.kt)("td",null,"12"),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"SM=",new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"10"),"000000"),(0,s.kt)("div",null,"network id=192.168.4.128/26"),(0,s.kt)("div",null,"waste=64-12=52"))),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"dived 192.168.4.96/27"),(0,s.kt)("div",null,"to 192.168.4.[",(0,s.kt)("span",{style:{color:"orange"}},"0110"),",",(0,s.kt)("span",{style:{color:"orange"}},"0111"),"]/28"),(0,s.kt)("div",null,"192.168.4.",(0,s.kt)("span",{style:{color:"orange"}},"96"),"/28 for LAN3"),(0,s.kt)("div",null,"wast=16-12=4")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"NoUse"),(0,s.kt)("td",null),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,"SM=",new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"11"),"000000"),(0,s.kt)("div",null,"network id=192.168.4.196/26"),(0,s.kt)("div",null,"64"))),(0,s.kt)("td",{style:{paddingTop:"0",paddingBottom:"0"}},(0,s.kt)("div",{style:{display:"flex",fontSize:"0.5rem",flexDirection:"column"}},(0,s.kt)("div",null,new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"10"),"000000/26"),(0,s.kt)("div",null,new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"11"),"000000/26"),(0,s.kt)("div",null,new Array(3).fill("255").join(" . ")," . ",(0,s.kt)("span",{style:{color:"orange"}},"0111"),"xxxx/28"),(0,s.kt)("div",null,"64+64+16=144")))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Waste"),(0,s.kt)("td",null),(0,s.kt)("td",null,"9+39+52=100"),(0,s.kt)("td",null,"9+7+4=20")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Total"),(0,s.kt)("td",null,"55+25+12=92"),(0,s.kt)("td",null,"92+64+100=256"),(0,s.kt)("td",null,"92+144+20=256"))))))}N.isMDXComponent=!0}}]);