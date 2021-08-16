---
sidebar_position: -1
---
# TypeScript
[offical site](https://www.typescriptlang.org/)
## Data Type
### boolean
```ts
let b:boolean=fals;
```
### number
```ts
let n:number=1;
```
### boolean
```ts
let act:string="world";
let greet:string=`hello ${act}!`;
```
### array
```ts
let list_foo: number[]=[1,2,3,4];
let list_bar: Array<number>=[1,2,3,4];
```
### tuple
```ts
let t:[string,number];
t=['str',10];
t[0];//'str'
t[1];//10
t[2]='t2';//ok
t[2]=1;//ok
t[2]=true;//error
```
### literal
```ts
type Truly="true"|"1"|1|true;
function needTruly(truly:Truly){
  return bool;
};
needTruly("true");
needTruly("1");
needTruly(0);
needTruly(true);
//
needTruly("false");//error
needTruly(2);//error
needTruly(2);//error
needTruly(false);//error
```
### union
```ts
let s:string="str";
let n:number=1;
let b:boolean=false;
//
let eitherSorN:number|string;
eitherSo=s;
eitherSo=n;
eitherSo="s";
eitherSo=1;
eitherSo=b;//error
//
let tripleType:number|string|boolean;
tripleType=s;
tripleType=n;
tripleType="s";
tripleType=1;
tripleType=b;
//common 
interface Bird(){
  fly():void;
  layEgg():void;
};
interface Fish(){
  swim():void;
  layEgg():void;
};
declare function spawnAnimal()Bird:Fish;
let animal=spawnAnimal();
animal.layEgg();
animal.swim();//error
//intersection &
interface Bird(){
  fly():void;
};
interface Fish(){
  swim():void;
};
type Duck=Bird & Fish;
declare function spawnDuck():Duck;
let duck=spawnDuck();
duck.swim();
duck.fly();
```
### enum
```ts
enum Color {Red,Geen,Blue};
let r=Color.Red;
let g=Color[1];
//
enum Week {Mon=1,Tue,Wed};
let mon=Week.Mon;
let tue=Week[2];
//
enum Month {Jan=1,Feb=3,Mar=7};
let jan=Month.Jan;
let mar=Mnth[7];
```
### unknow
```ts
let num:number;
let str:string;
let maybe:unknow;
//
num=1;
str="str";
maybe=num;
maube=str;
//
maybe=1;
num=maybe;//error
maybe="maybe";
str=maybe;//error
```
### any
opt-out the type checking during compilation;
```ts
let anylit:any[]=[false,1,'2'];
```
### void,null,undefind
```ts
let un:void;
let u:undefined=undefined;
let n:null=null;
un=u;
un=n;
let num:number;
num=u;  
num=n;
--strictNullChecks
num=u;//error
num=n;//error
```
### never
```ts
function alwasError(message):never{
  throw new Error (message);
}

function infiniteLoop(message):never{
  for(;;){

  }
}
```
### object
object is a type that represents the non-primitive type
```ts
let obj:object;
obj=null;
obj={type:'object'};
obj=1;//error
obj="objet"//error
```
### Type assertions(类型断言，强制类型转换)
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does
```ts
let str:unknow="it's a string";
//as syntax
let len:number=(str as string)str.length;
//angle-bracket syntax
let substr:string=(<string>str).substr(0,1);
//when using TypeScript with JSX, only as-style assertions are allowed.
```
### Class Type
'类'类型
write a function that accepts something with a construct signature
```ts
factory(fn:new()=>T):T{
  return fn();
}
```
## OOP
### interface
```ts
//Simple interface
interface Labeled{
  label:string;
}
function pringLabel(labeledObj:Labeled){
  console.log(labeledObj.label)
}
//Optional Properties 
interface SquareConfig{
  color?:string;
  width?:number;
}
function createSquare(config:SquareConfig){
  if(config.colr){
    //error Property 'colr' does not exist on type 'SquareConfig'
  }
}
//readOnly Properties
interface Point{
  readonly x:number;
  readonly y:number;
}
let p:Point={3,14};
p.x=2;//error
//Excess properties check 过度类型检查
interface RGBColor{
  r?:number;
  g?:number;
  b?:number;
}
let red:RGBColor={r:255};
let green:RGBColor={r:0,g:255,b:0,a:1};//error
let blue:RGBColor=({r:0,g:255,b:0,a:1} as RGBColor);
interface ExRGBColor{
  r?:number;
  g?:number;
  b?:number;
  [props:string]:any;
}
let green:RGBColor={r:0,g:255,b:0,a:1};//error
//Indexable Types
interface StringSigArray{
  [index:string]:string;
}
interface NumberSigArray{
  [index:number]:string;
}
interface StringSigDictionary{
  [index:string]:string;
  length:number;//error length must be a string
  sig:string;//right sig is a string
}
interface MultiSigDictionary{
  [index:string]:string | number;
  length:number;//right length is a string
  sig:string;//right sig is a string
}
```
