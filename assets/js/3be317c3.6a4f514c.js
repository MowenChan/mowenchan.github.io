(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[3240],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,u(u({ref:n},l),{},{components:t})):r.createElement(d,u({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3157:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),u={},i="Management",c={unversionedId:"se/os/linux/management",id:"se/os/linux/management",isDocsHomePage:!1,title:"Management",description:"User & Group",source:"@site/docs/se/os/linux/management.md",sourceDirName:"se/os/linux",slug:"/se/os/linux/management",permalink:"/docs/se/os/linux/management",version:"current",frontMatter:{},sidebar:"se_os",previous:{title:"CentOS",permalink:"/docs/se/os/linux/CentOS"},next:{title:"Summaries",permalink:"/docs/se/os/linux/summaries"}},s=[{value:"User &amp; Group",id:"user--group",children:[]}],l={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"management"},"Management"),(0,a.kt)("h2",{id:"user--group"},"User & Group"),(0,a.kt)("p",null,'title="etc/passwd"'),(0,a.kt)("p",null,"username:password(mask):UID:GID:description:home:default Shell"))}p.isMDXComponent=!0}}]);