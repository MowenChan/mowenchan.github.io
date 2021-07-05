(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[3626],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8005:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s={},o={unversionedId:"se/operations/references/shell_command/index",id:"se/operations/references/shell_command/index",isDocsHomePage:!1,title:"Shell",description:"First of all, what's a shell? Under Unix, a shell is a command interpreter. That is, it reads commands from the keyboard and executes them.",source:"@site/docs/se/operations/references/shell_command/index.md",sourceDirName:"se/operations/references/shell_command",slug:"/se/operations/references/shell_command/index",permalink:"/zh/docs/se/operations/references/shell_command/index",version:"current",frontMatter:{},sidebar:"se_operations",previous:{title:"RocketMQ",permalink:"/zh/docs/se/operations/references/rocket_mq/index"},next:{title:"Tomcat",permalink:"/zh/docs/se/operations/references/tomcat/index"}},l=[{value:"pattern",id:"pattern",children:[]},{value:"Variables",id:"variables",children:[]},{value:"environment variables",id:"environment-variables",children:[]},{value:"Command-line arguments",id:"command-line-arguments",children:[]},{value:"special variables",id:"special-variables",children:[]},{value:"Quasi-variable constructs",id:"quasi-variable-constructs",children:[]},{value:"Patterns and Globbing",id:"patterns-and-globbing",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"First of all, what's a shell? Under Unix, a shell is a command interpreter. That is, it reads commands from the keyboard and executes them."),(0,i.kt)("h2",{id:"pattern"},"pattern"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/sh\n")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/sh\nVAR=value\n\necho $VAR\necho ${VAR}isSh\n")),(0,i.kt)("h2",{id:"environment-variables"},"environment variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/sh\nVAR=value # set up a local variable\n\nexport VAR # Turn local variable into an environment variable\n\nunset VAR # unexport a variable\n")),(0,i.kt)("h2",{id:"command-line-arguments"},"Command-line arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$#")," contains the number of command-line arguments that were given."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$0")," contains the name of the script (argv","[0]"," in C programs)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$1"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"$9")," refers to the command-line argument."),(0,i.kt)("p",null,"If you have more than nine command-line arguments, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shift")," command: this discards the first command-line argument, and bumps the remaining ones up by one position."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$*"),' list all of the command-line arguments. written "$1 $2 $3"'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$@"),' list all of the command-line arguments. written "$1" "$2" "$3"'),(0,i.kt)("h2",{id:"special-variables"},"special variables"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$?")," gives the exit status of the last command that was executed. This should be zero if the command exited normally."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$-")," lists all of the options with which sh was invoked. See sh(1) for details."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$$")," holds the PID of the current process."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$!")," holds the PID of the last command that was executed in the background."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$IFS")," (Input Field Separator) determines how sh splits strings into words."),(0,i.kt)("h2",{id:"quasi-variable-constructs"},"Quasi-variable constructs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"${VAR}")," construct is actually a special case of a more general class of constructs:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${VAR:-expression}"),"Use default value: if VAR is set and non-null, expands to $VAR. Otherwise, expands to expression."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${VAR:=expression}"),"Set default value: if VAR is set and non-null, expands to $VAR. Otherwise, sets VAR to expression and expands to expression."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${VAR:?[expression]}"),"If VAR is set and non-null, expands to $VAR. Otherwise, prints expression to standard error and exits with a non-zero exit status."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${VAR:+expression}"),"If VAR is set and non-null, expands to the empty string. Otherwise, expands to expression."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${#VAR}"),"Expands to the length of $VAR."),(0,i.kt)("p",null,"The above patterns test whether VAR is set and non-null. Without the colon, they only test whether VAR is set."),(0,i.kt)("h2",{id:"patterns-and-globbing"},"Patterns and Globbing"),(0,i.kt)("p",null,"sh supports a limited form of pattern-matching. The operators are"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"*")," Matches zero or more characters.\n",(0,i.kt)("inlineCode",{parentName:"p"},"?")," Matches exactly one character."),(0,i.kt)("p",null,"[range]","\nMatches any character in range. range can be either a list of characters that match, or two endpoints separated by a dash: ","[ak3]"," matches either a, k, or 3; ","[a-z]"," matches any character in the range a through z; ","[a-mz]"," matches either a character in the range a through m, or z. If you wish to include a dash as part of the range, it must be the first character, e.g., ","[-p]"," will match either a dash or p."),(0,i.kt)("p",null,"When an expression containing these characters occurs in the middle of a command, sh substitutes the list of all files whose name matches the pattern. This is known as ``globbing.'' Otherwise, these are used mainly in the case construct."),(0,i.kt)("p",null,"As a special case, when a glob begins with ",(0,i.kt)("em",{parentName:"p"}," or ?, it does not match files that begin with a dot. To match these, you need to specify the dot explicitly (e.g., ."),", /tmp/.*)."),(0,i.kt)("p",null,"Note to MS-DOS users: under MS-DOS, the pattern ",(0,i.kt)("em",{parentName:"p"},".")," matches every file. In sh, it matches every file that contains a dot."))}p.isMDXComponent=!0}}]);