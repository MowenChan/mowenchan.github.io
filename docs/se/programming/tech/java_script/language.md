---
sidebar_position: -1
---
# JavaScript
JavaScript a programing anguage implements ECMAScript.
## Histroy
- ECMAScript 2009 (ES5)
  - `extra:[Object,Array,Function]`
- ECMAScript 2015 (ES6)
  - `new:[class,module,arrayFunction,function default arg]`
- ECMAScript 2016 (ES7)
  - `new:[includes,**]`
- ECMAScript 2017 (ES8)
## primitive(原始数据类型)
Data that is not an object and has no methods
- string
- number
- bigint
- boolean
- symbol
- undefined

```javascript
let values=["str",1,1n,false,Symbol("x"),undefined];
let primitives=[];
values.forEach((it,inx)=>{
  primitives[inx]=typeof(it);
});
console.log(primitives);//['string','number','bigint', 'boolean','symbol','undefined']
```

## structural(构造类型) 
- Object
  - null
  - other anything made with `new` keyword
- Function
```javascript
let values=[new Object(),new Array(),null,(x)=>{}]
let structural=[];
values.forEach((it,inx)=>{
  structural[inx]=typeof(it);
});
console.log(structural);//['object','object','object','function']
```

## symbolic values(符号值)
 the number type has three symbolic values:
- +Infinity
- -Infinity
- NaN
```javascript
let values=[+Infinity,-Infinity,NaN]
let primitives=[];
values.forEach((it,inx)=>{
  primitives[inx]=typeof(it);
});
console.log(primitives);//['number','number','number']
```

## Primitive wrapper objects(包装类)
```javascript
let values=[new String(''),new Number(0),new Boolean(true)];
let primitives=[];
values.forEach((it,inx)=>{
  primitives[inx]=typeof(it);
});
console.log(primitives);//['object','object','object']
```
## Block(块)
```javascript
{
  //block
}
```
## var(变量声明)
```javascript
var x=1;
{
  var x=2;
}
console.log(x); //2
```
## let(块变量声明)
```javascript
let x=1;
{
  let x=2;
}
console.log(x); //1
```
## var vs let
```javascript
{
  console.log(x);//
  console.log(y);
  var x=1;//undefined
  let y=2;//ReferenceError:
}
```
```javascript
var vars=[];
for(var i=0;i<10;i++){
  vars[i]=()=>{return i};
};
vars[1]();vars[3]();vars[5]();//10,10,10

var lets=[];
for(let i=0;i<10;i++){
  lets[i]=()=>{return i};
};
let[1]();let[3]();let[5]();//2;5,6
```
## function
```javascript
function fun(){
  return 1;
}
fun(); //1
```
```javascript
fun();//1
function fun(){
  return 1;
}
```
## function*
- funtion*定义一个生成器
- **yield** [yi:ld] 产出，让步
- 调用生成器.next()时执行, 遇到yeild时返回, 再次调用.next()时生成器从上次位置继续执行，反复直到生成器结束。
- 可用于实现协程
```javascript
function *gen(){
  let out=0;
  for(;;out++){
    yield out**2;
    if(out>=10){
      break;
    }
  }
};
let g=gen();
for(let i=-1;;i=g.next()){//i:{value:<any>,done:<boolean>}
  if(i.done){
    break;
  }
  console.log(i.value);
}
```
## yield*
__yield*__ 用于在生成器中调用生成器
```javascript
function *gen1(){
  yield 47;
}
function *gen(){
  yield *gen1()
}
const g=gen();
g().next()
```

## Promise
```javascript
var tag=false;
new Promise((resolve,reject)=>{
  console.log("pending");
  setTimeout(()=>{
    if(tag)
      resolve("fulfilled");
    else
      reject("rejected");
  },3000);
}).then((state)=>{console.log(state)}).catch((state)=>{console.log(state)}).finally(()=>{console.log("finalized")});
```
## async&await
```javascript
async function awaitCall(){
  await new Promise((resolve,reject)=>{
    console.log("pending");
    setTimeout(()=>{
      resolve("fulfilled");
    },3000);
  }).then((state)=>{console.log(state)});
}
awaitCall();
console.log("await");
```

## this
```javascript
function ThisPrint(){
  (function pCaller(){
    let self=this;
    console.log(self); //global
  })();
  
  (()=>{
    console.log(this); //thisPrint
  })();
  
  this.pThis=function(){
    console.log(this)
  }
}
const thisPrint=new ThisPrint();
thisPrint.pThis();//thisPrint
```

## Math
|O|T|
|:-:|:-:|
|cube root|立方根|
|degrees|角度|
|radians|弧度|
|radius|半径|
|positive square root|正平方根|
```
degrees2radians(degrees){
  return degrees*Math.PI/180;
}
radians2degrees(radians){
  return radians/Math.PI/180;
}
```