(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[9809],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||s;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2442:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var t=r(2122),a=r(9756),s=(r(7294),r(3905)),o={sidebar_position:-1},i={unversionedId:"se/dev/references/languages/css/index",id:"se/dev/references/languages/css/index",isDocsHomePage:!1,title:"Cascading Style Sheets",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",source:"@site/docs/se/dev/references/languages/css/index.md",sourceDirName:"se/dev/references/languages/css",slug:"/se/dev/references/languages/css/index",permalink:"/en/docs/se/dev/references/languages/css/index",version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"se_dev_languages",previous:{title:"C C++",permalink:"/en/docs/se/dev/references/languages/cpp/index"},next:{title:"HyperText Markup Language",permalink:"/en/docs/se/dev/references/languages/html/index"}},l=[{value:"link",id:"link",children:[]},{value:"flexbox",id:"flexbox",children:[{value:"flex-direction",id:"flex-direction",children:[]}]},{value:"grid",id:"grid",children:[]},{value:"transform",id:"transform",children:[]}],c={toc:l};function u(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/se/dev/references/languages/html/index"},"HTML"),". CSS is a cornerstone technology of the World Wide Web, alongside HTML and ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/se/dev/references/languages/java_script/index"},"JavaScript"),"."),(0,s.kt)("h2",{id:"link"},"link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/CSS/#css"},"offical site")),(0,s.kt)("h2",{id:"flexbox"},"flexbox"),(0,s.kt)("h3",{id:"flex-direction"},"flex-direction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"//row||row-reverse\n<--Main Axis--\x3e\n [A][B][C][D]\n\n//column||column-reverse\n[A] ^\n[B] |\n[C] Main Axis\n[D] |\n[E] v\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex-box">\n  <div></div>\n</div>\n<style>\n  .flex-box {\n    display: flex;\n    flex-direction: row-reverse;\n    flex-wrap: wrap;\n  }\n  .flex-item {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n  }\n</style>\n')),(0,s.kt)("h2",{id:"grid"},"grid"),(0,s.kt)("h2",{id:"transform"},"transform"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms"},"\u5b66\u4e60\u66f4\u591a"),"|\n",(0,s.kt)("a",{parentName:"p",href:"https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/"},"\u53c2\u8003")),(0,s.kt)("p",null,"transform: matrix(a,b,c,d,e,f);"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"                      [a,c,e]\nmatrix(a,b,c,d,e,f)--\x3e[b,d,f]\n                      [0,0,1]\n\n[a,c,e]   [x]   [ax+cy+e]\n[b,d,f] . [y] = [bx+dy+f]\n[0,0,1]   [1]   [00+00+1]\n\n(x,y,1)->matrix(a,b,c,d,e,f)=(ax+cy+e , bx+dy+f , 1)\n")),(0,s.kt)("p",null,"transform: translate(a,b);"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"transform: translate(a,b)=transform: matrix(1, 0, 0, 1, a, b);\n")),(0,s.kt)("p",null,"transform: scale(sx, sy);"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"transform: scale(sx, sy);=transform: matrix(sx, 0, 0, sy, 0, 0)\n")),(0,s.kt)("p",null,"transform: rotate(\u03b8);"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"transform: matrix(cos\u03b8,sin\u03b8,-sin\u03b8,cos\u03b8,0,0)\n")),(0,s.kt)("p",null,"transform: skew(\u03b8x\uff0c\u03b8y);"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"transform: skew(\u03b8x\uff0c\u03b8y)=transform: matrix(1,tan(\u03b8y),tan(\u03b8x),1,0,0)\n")))}u.isMDXComponent=!0}}]);