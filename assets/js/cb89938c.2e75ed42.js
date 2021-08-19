(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[7510],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3238:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={},o="CentOS",u={unversionedId:"se/os/linux/CentOS",id:"se/os/linux/CentOS",isDocsHomePage:!1,title:"CentOS",description:"yum",source:"@site/docs/se/os/linux/CentOS.md",sourceDirName:"se/os/linux",slug:"/se/os/linux/CentOS",permalink:"/docs/se/os/linux/CentOS",version:"current",frontMatter:{},sidebar:"se_os",next:{title:"Management",permalink:"/docs/se/os/linux/management"}},p=[{value:"yum",id:"yum",children:[{value:"commands",id:"commands",children:[]},{value:"configuration",id:"configuration",children:[]}]},{value:"firewall",id:"firewall",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"centos"},"CentOS"),(0,i.kt)("h2",{id:"yum"},"yum"),(0,i.kt)("h3",{id:"commands"},"commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cache",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum makecache")))),(0,i.kt)("li",{parentName:"ul"},"Searching packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum search ${package.name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum search ${package.name|summary|description}")))),(0,i.kt)("li",{parentName:"ul"},"Listing packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum list --installed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum list --available")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum list --all"),"=",(0,i.kt)("inlineCode",{parentName:"li"},"yum list --installed && yum list --available")))),(0,i.kt)("li",{parentName:"ul"},"Displaying package infomation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum info ${package.name}")))),(0,i.kt)("li",{parentName:"ul"},"Listing package groups",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum group summary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum group list")))),(0,i.kt)("li",{parentName:"ul"},"Listing repositories",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum \t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum repolist --disabled")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum repolist --all"),"=",(0,i.kt)("inlineCode",{parentName:"li"},"yum repolist && yum repolist --disabled")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yum repoinfo"))))),(0,i.kt)("h3",{id:"configuration"},"configuration"),(0,i.kt)("h2",{id:"firewall"},"firewall"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"firewall-cmd --zone=public --list-ports\nfirewall-cmd --zone=public --add-port=80/tcp --permanent\n")))}c.isMDXComponent=!0}}]);