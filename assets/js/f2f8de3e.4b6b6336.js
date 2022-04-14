"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[7377],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=s,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),o=["components"],l={},i="GitLab",c={unversionedId:"se/vcs/git/server/gitlab",id:"se/vcs/git/server/gitlab",title:"GitLab",description:"install",source:"@site/docs/se/vcs/git/server/gitlab.md",sourceDirName:"se/vcs/git/server",slug:"/se/vcs/git/server/gitlab",permalink:"/docs/se/vcs/git/server/gitlab",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"install",id:"install",level:2},{value:"centOs",id:"centos",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab"},"GitLab"),(0,a.kt)("h2",{id:"install"},"install"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/install"},"offical")),(0,a.kt)("h3",{id:"centos"},"centOs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dnf install -y curl policycoreutils openssh-server perl\n# Enable OpenSSH server daemon if not enabled: sudo systemctl status sshd\nsudo systemctl enable sshd\nsudo systemctl start sshd\n# Check if opening the firewall is needed with: sudo systemctl status firewalld\nsudo firewall-cmd --permanent --add-service=http\nsudo firewall-cmd --permanent --add-service=https\nsudo systemctl reload firewalld\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dnf install postfix\nsudo systemctl enable postfix\nsudo systemctl start postfix\n")))}d.isMDXComponent=!0}}]);