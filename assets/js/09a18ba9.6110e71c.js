"use strict";(self.webpackChunkbakupub=self.webpackChunkbakupub||[]).push([[9127],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(k,c(c({ref:n},s),{},{components:t})):r.createElement(k,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57386:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},l="Java concurrency",u={unversionedId:"se/prog/tech/java/concurrent",id:"se/prog/tech/java/concurrent",title:"Java concurrency",description:"example",source:"@site/docs/se/prog/tech/java/concurrent.md",sourceDirName:"se/prog/tech/java",slug:"/se/prog/tech/java/concurrent",permalink:"/docs/se/prog/tech/java/concurrent",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"\u7ba1\u7a0b(monitor)",id:"\u7ba1\u7a0bmonitor",level:2},{value:"\u504f\u5411\u9501",id:"\u504f\u5411\u9501",level:2},{value:"\u8f7b\u91cf\u7ea7\u9501",id:"\u8f7b\u91cf\u7ea7\u9501",level:2},{value:"\u91cd\u91cf\u7ea7\u9501",id:"\u91cd\u91cf\u7ea7\u9501",level:2},{value:"\u9501\u91cd\u5165",id:"\u9501\u91cd\u5165",level:2},{value:"\u9501\u81ea\u65cb",id:"\u9501\u81ea\u65cb",level:2},{value:"\u9501\u81a8\u80c0",id:"\u9501\u81a8\u80c0",level:2},{value:"\u7ebf\u7a0b\u6c60",id:"\u7ebf\u7a0b\u6c60",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-concurrency"},"Java concurrency"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/lawmoe/java-example-high-concurrency"},"example")),(0,a.kt)("h2",{id:"\u7ba1\u7a0bmonitor"},"\u7ba1\u7a0b(monitor)"),(0,a.kt)("h2",{id:"\u504f\u5411\u9501"},"\u504f\u5411\u9501"),(0,a.kt)("h2",{id:"\u8f7b\u91cf\u7ea7\u9501"},"\u8f7b\u91cf\u7ea7\u9501"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f7b\u91cf\u7ea7\u9501\u8fdb\u884cCAS"),(0,a.kt)("li",{parentName:"ol"},"CAS\u5931\u8d25->\u9501\u81a8\u80c0"),(0,a.kt)("li",{parentName:"ol"},"CAS\u6210\u529f->return")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="jdk8u\\hotspot\\src\\share\\vm\\runtime\\synchronizer.cpp:222"',title:'"jdk8u\\hotspot\\src\\share\\vm\\runtime\\synchronizer.cpp:222"'},'// -----------------------------------------------------------------------------\n// Interpreter/Compiler Slow Case\n// This routine is used to handle interpreter/compiler slow case\n// We don\'t need to use fast path here, because it must have been\n// failed in the interpreter/compiler code.\nvoid ObjectSynchronizer::slow_enter(Handle obj, BasicLock* lock, TRAPS) {\n  markOop mark = obj->mark();\n  assert(!mark->has_bias_pattern(), "should not see bias pattern here");\n\n  if (mark->is_neutral()) {\n    // Anticipate successful CAS -- the ST of the displaced mark must\n    // be visible <= the ST performed by the CAS.\n    lock->set_displaced_header(mark);\n    if (mark == (markOop) Atomic::cmpxchg_ptr(lock, obj()->mark_addr(), mark)) {\n      TEVENT (slow_enter: release stacklock) ;\n      return ;\n    }\n    // Fall through to inflate() ...\n  } else\n  if (mark->has_locker() && THREAD->is_lock_owned((address)mark->locker())) {\n    assert(lock != mark->locker(), "must not re-lock the same lock");\n    assert(lock != (BasicLock*)obj->mark(), "don\'t relock with same BasicLock");\n    lock->set_displaced_header(NULL);\n    return;\n  }\n\n#if 0\n  // The following optimization isn\'t particularly useful.\n  if (mark->has_monitor() && mark->monitor()->is_entered(THREAD)) {\n    lock->set_displaced_header (NULL) ;\n    return ;\n  }\n#endif\n\n  // The object header will never be displaced to this lock,\n  // so it does not matter what the value is, except that it\n  // must be non-zero to avoid looking like a re-entrant lock,\n  // and must not look locked either.\n  lock->set_displaced_header(markOopDesc::unused_mark());\n  ObjectSynchronizer::inflate(THREAD, obj())->enter(THREAD);\n}\n')),(0,a.kt)("h2",{id:"\u91cd\u91cf\u7ea7\u9501"},"\u91cd\u91cf\u7ea7\u9501"),(0,a.kt)("h2",{id:"\u9501\u91cd\u5165"},"\u9501\u91cd\u5165"),(0,a.kt)("h2",{id:"\u9501\u81ea\u65cb"},"\u9501\u81ea\u65cb"),(0,a.kt)("p",null,"\u53ef\u4ee5\u51cf\u5c11\u7ebf\u7a0b\u963b\u585e\u9020\u6210\u7684\u7ebf\u7a0b\u5207\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"#\u5173\u95ed\u81ea\u65cb\u9501\u4f18\u5316\n-XX:-UseSpinning\n#\u4fee\u6539\u9ed8\u8ba4\u7684\u81ea\u65cb\u6b21\u6570\n-XX:PreBlockSpin\n")),(0,a.kt)("h2",{id:"\u9501\u81a8\u80c0"},"\u9501\u81a8\u80c0"),(0,a.kt)("p",null,"\u8f7b\u91cf\u7ea7\u9501->\u91cd\u91cf\u7ea7\u9501"),(0,a.kt)("h2",{id:"\u7ebf\u7a0b\u6c60"},"\u7ebf\u7a0b\u6c60"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public ThreadPoolExecutor(int corePoolSize,\n                          int maximumPoolSize,\n                          long keepAliveTime,\n                          TimeUnit unit,\n                          BlockingQueue<Runnable> workQueue,\n                          ThreadFactory threadFactory,\n                          RejectedExecutionHandler handler){}\n")))}d.isMDXComponent=!0}}]);