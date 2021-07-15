(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[6623],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return r?t.createElement(g,i(i({ref:n},c),{},{components:r})):t.createElement(g,i({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8636:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var t=r(2122),a=r(9756),l=(r(7294),r(3905)),i={sidebar_position:-1},o={unversionedId:"se/programming/tech/type_script/language",id:"se/programming/tech/type_script/language",isDocsHomePage:!1,title:"TypeScript",description:"offical site",source:"@site/docs/se/programming/tech/type_script/language.md",sourceDirName:"se/programming/tech/type_script",slug:"/se/programming/tech/type_script/language",permalink:"/docs/se/programming/tech/type_script/language",version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1},sidebar:"se_programming",previous:{title:"Summaries",permalink:"/docs/se/programming/tech/java_script/summaries"},next:{title:"Summaries",permalink:"/docs/se/programming/tech/type_script/summaries"}},u=[{value:"Data Type",id:"data-type",children:[{value:"boolean",id:"boolean",children:[]},{value:"number",id:"number",children:[]},{value:"boolean",id:"boolean-1",children:[]},{value:"array",id:"array",children:[]},{value:"tuple",id:"tuple",children:[]},{value:"literal",id:"literal",children:[]},{value:"union",id:"union",children:[]},{value:"enum",id:"enum",children:[]},{value:"unknow",id:"unknow",children:[]},{value:"any",id:"any",children:[]},{value:"void,null,undefind",id:"voidnullundefind",children:[]},{value:"never",id:"never",children:[]},{value:"object",id:"object",children:[]},{value:"Type assertions(\u7c7b\u578b\u65ad\u8a00\uff0c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362)",id:"type-assertions\u7c7b\u578b\u65ad\u8a00\uff0c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362",children:[]},{value:"Class Type",id:"class-type",children:[]}]},{value:"OOP",id:"oop",children:[{value:"interface",id:"interface",children:[]}]}],s={toc:u};function c(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"offical site")),(0,l.kt)("h2",{id:"data-type"},"Data Type"),(0,l.kt)("h3",{id:"boolean"},"boolean"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let b:boolean=fals;\n")),(0,l.kt)("h3",{id:"number"},"number"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let n:number=1;\n")),(0,l.kt)("h3",{id:"boolean-1"},"boolean"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'let act:string="world";\nlet greet:string=`hello ${act}!`;\n')),(0,l.kt)("h3",{id:"array"},"array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let list_foo: number[]=[1,2,3,4];\nlet list_bar: Array<number>=[1,2,3,4];\n")),(0,l.kt)("h3",{id:"tuple"},"tuple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let t:[string,number];\nt=['str',10];\nt[0];//'str'\nt[1];//10\nt[2]='t2';//ok\nt[2]=1;//ok\nt[2]=true;//error\n")),(0,l.kt)("h3",{id:"literal"},"literal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'type Truly="true"|"1"|1|true;\nfunction needTruly(truly:Truly){\n  return bool;\n};\nneedTruly("true");\nneedTruly("1");\nneedTruly(0);\nneedTruly(true);\n//\nneedTruly("false");//error\nneedTruly(2);//error\nneedTruly(2);//error\nneedTruly(false);//error\n')),(0,l.kt)("h3",{id:"union"},"union"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'let s:string="str";\nlet n:number=1;\nlet b:boolean=false;\n//\nlet eitherSorN:number|string;\neitherSo=s;\neitherSo=n;\neitherSo="s";\neitherSo=1;\neitherSo=b;//error\n//\nlet tripleType:number|string|boolean;\ntripleType=s;\ntripleType=n;\ntripleType="s";\ntripleType=1;\ntripleType=b;\n//common \ninterface Bird(){\n  fly():void;\n  layEgg():void;\n};\ninterface Fish(){\n  swim():void;\n  layEgg():void;\n};\ndeclare function spawnAnimal()Bird:Fish;\nlet animal=spawnAnimal();\nanimal.layEgg();\nanimal.swim();//error\n//intersection &\ninterface Bird(){\n  fly():void;\n};\ninterface Fish(){\n  swim():void;\n};\ntype Duck=Bird & Fish;\ndeclare function spawnDuck():Duck;\nlet duck=spawnDuck();\nduck.swim();\nduck.fly();\n')),(0,l.kt)("h3",{id:"enum"},"enum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"enum Color {Red,Geen,Blue};\nlet r=Color.Red;\nlet g=Color[1];\n//\nenum Week {Mon=1,Tue,Wed};\nlet mon=Week.Mon;\nlet tue=Week[2];\n//\nenum Month {Jan=1,Feb=3,Mar=7};\nlet jan=Month.Jan;\nlet mar=Mnth[7];\n")),(0,l.kt)("h3",{id:"unknow"},"unknow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'let num:number;\nlet str:string;\nlet maybe:unknow;\n//\nnum=1;\nstr="str";\nmaybe=num;\nmaube=str;\n//\nmaybe=1;\nnum=maybe;//error\nmaybe="maybe";\nstr=maybe;//error\n')),(0,l.kt)("h3",{id:"any"},"any"),(0,l.kt)("p",null,"opt-out the type checking during compilation;"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let anylit:any[]=[false,1,'2'];\n")),(0,l.kt)("h3",{id:"voidnullundefind"},"void,null,undefind"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let un:void;\nlet u:undefined=undefined;\nlet n:null=null;\nun=u;\nun=n;\nlet num:number;\nnum=u;  \nnum=n;\n--strictNullChecks\nnum=u;//error\nnum=n;//error\n")),(0,l.kt)("h3",{id:"never"},"never"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function alwasError(message):never{\n  throw new Error (message);\n}\n\nfunction infiniteLoop(message):never{\n  for(;;){\n\n  }\n}\n")),(0,l.kt)("h3",{id:"object"},"object"),(0,l.kt)("p",null,"object is a type that represents the non-primitive type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let obj:object;\nobj=null;\nobj={type:'object'};\nobj=1;//error\nobj=\"objet\"//error\n")),(0,l.kt)("h3",{id:"type-assertions\u7c7b\u578b\u65ad\u8a00\uff0c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362"},"Type assertions(\u7c7b\u578b\u65ad\u8a00\uff0c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362)"),(0,l.kt)("p",null,"Sometimes you\u2019ll end up in a situation where you\u2019ll know more about a value than TypeScript does"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'let str:unknow="it\'s a string";\n//as syntax\nlet len:number=(str as string)str.length;\n//angle-bracket syntax\nlet substr:string=(<string>str).substr(0,1);\n//when using TypeScript with JSX, only as-style assertions are allowed.\n')),(0,l.kt)("h3",{id:"class-type"},"Class Type"),(0,l.kt)("p",null,"'\u7c7b'\u7c7b\u578b\nwrite a function that accepts something with a construct signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"factory(fn:new()=>T):T{\n  return fn();\n}\n")),(0,l.kt)("h2",{id:"oop"},"OOP"),(0,l.kt)("h3",{id:"interface"},"interface"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"//Simple interface\ninterface Labeled{\n  label:string;\n}\nfunction pringLabel(labeledObj:Labeled){\n  console.log(labeledObj.label)\n}\n//Optional Properties \ninterface SquareConfig{\n  color?:string;\n  width?:number;\n}\nfunction createSquare(config:SquareConfig){\n  if(config.colr){\n    //error Property 'colr' does not exist on type 'SquareConfig'\n  }\n}\n//readOnly Properties\ninterface Point{\n  readonly x:number;\n  readonly y:number;\n}\nlet p:Point={3,14};\np.x=2;//error\n//Excess properties check \u8fc7\u5ea6\u7c7b\u578b\u68c0\u67e5\ninterface RGBColor{\n  r?:number;\n  g?:number;\n  b?:number;\n}\nlet red:RGBColor={r:255};\nlet green:RGBColor={r:0,g:255,b:0,a:1};//error\nlet blue:RGBColor=({r:0,g:255,b:0,a:1} as RGBColor);\ninterface ExRGBColor{\n  r?:number;\n  g?:number;\n  b?:number;\n  [props:string]:any;\n}\nlet green:RGBColor={r:0,g:255,b:0,a:1};//error\n//Indexable Types\ninterface StringSigArray{\n  [index:string]:string;\n}\ninterface NumberSigArray{\n  [index:number]:string;\n}\ninterface StringSigDictionary{\n  [index:string]:string;\n  length:number;//error length must be a string\n  sig:string;//right sig is a string\n}\ninterface MultiSigDictionary{\n  [index:string]:string | number;\n  length:number;//right length is a string\n  sig:string;//right sig is a string\n}\n")))}c.isMDXComponent=!0}}]);