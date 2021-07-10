(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[3076],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||i;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6135:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),a={sidebar_position:-1},c={unversionedId:"se/dev/references/professional/vcs/index",id:"se/dev/references/professional/vcs/index",isDocsHomePage:!1,title:"VCS",description:"git",source:"@site/docs/se/dev/references/professional/vcs/index.md",sourceDirName:"se/dev/references/professional/vcs",slug:"/se/dev/references/professional/vcs/index",permalink:"/winking/docs/se/dev/references/professional/vcs/index",version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"se_dev_professional",previous:{title:"Transaction",permalink:"/winking/docs/se/dev/references/professional/transaction/transaction"}},s=[{value:"git",id:"git",children:[]},{value:"svn",id:"svn",children:[]}],p={toc:s};function u(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"git"},"git"),(0,i.kt)("p",null,"change the name and/or email address recorded in existing commits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/sh\n \ngit filter-branch --env-filter \'\n\nOLD_EMAIL="your-old-email@example.com"\nCORRECT_NAME="Your Correct Name"\nCORRECT_EMAIL="your-correct-email@example.com"\n \nif [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]\nthen\n    export GIT_COMMITTER_NAME="$CORRECT_NAME"\n    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"\nfi\nif [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]\nthen\n    export GIT_AUTHOR_NAME="$CORRECT_NAME"\n    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"\nfi\n\' --tag-name-filter cat -- --branches --tags\n\ngit push --force --tags origin \'refs/heads/*\'\n')),(0,i.kt)("h2",{id:"svn"},"svn"))}u.isMDXComponent=!0}}]);