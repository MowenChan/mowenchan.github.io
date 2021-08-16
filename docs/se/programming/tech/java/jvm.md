# JVM
[oracle docs jvm](https://docs.oracle.com/javase/specs/jvms/se7/html/index.html)
[oracle docs garbage collection](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html)
## Data Type
- primitive
  - numeric
    - integral
      - byte
      - short
      - char
      - int
      - long
    - floating-point
      - float
      - double
  - boolean
  - returnAddress
- reference types
  - class
  - interface
  - array

## Run-Time Data Areas
### Define
<div style={{border:"1px solid green",padding:"10px",textAlign:"center",display: "flex"}}>
  Run-Time Data Areas<br/>
  <div style={{border:"1px solid orange",padding:"10px",textAlign:"center",width:"50%"}}>
    <div>pc Register</div>
    <div>JVM stack</div>
    <div>Native Method stack</div>
  </div>
  <div style={{border:"1px solid green",padding:"10px",textAlign:"center",width:"50%"}}>
    <div>Method Area</div>
    <div>Run-Time Constant Pool</div>
    <div>Heap</div>
  </div>
</div>

### HotSpot 
![architecture](./hotspot_arch.png)

## Garbage Collection
Marking->Nomal deletion->Deletion with Compacting

### HotSpot Heap
<div style={{display:"flex"}}>
  <div style={{width:"15%"}}></div>
  <div style={{width:"20%",border:"1px solid black"}}>Survivor Space</div>
  <div style={{width:"40%"}}></div>
  <div style={{width:"25%"}}></div>
</div>
<div style={{display:"flex"}}>
  <div style={{width:"15%",border:"1px solid black"}}>Eden</div>
  <div style={{width:"10%",border:"1px solid black"}}>S0</div>
  <div style={{width:"10%",border:"1px solid black"}}>S1</div>
  <div style={{width:"40%",border:"1px solid black"}}>Tenured</div>
  <div style={{width:"25%",border:"1px solid black"}}>Permanent</div>
</div>
<div style={{display:"flex"}}>
  <div style={{width:"35%",border:"1px solid black"}}>Young Generation</div>
  <div style={{width:"40%",border:"1px solid black"}}>Old Generation</div>
  <div style={{width:"25%",border:"1px solid black"}}>Permanent Generation</div>
</div>

- 所有新对象创建时会被分配到Young Gen
  - 当Young Gen 满了，会触发minor GC
    - 对象死亡率(mortality rate)较高，可以对minor GC进行优化
    - 充满死亡对象的Young Gen会被很快速的回收
    - 一些老化的Surval Space里的对象会被移到Old Gen
    - 当前应用程序的所有线程会在minor GC时暂停，直到minor GC结束，该过程称为Stop the World Event
- Old Gen被用于存储长时间存活的对象
  - 通常为Young Gen的对象设置一个阈值，当Young Gen对象年龄达到阈值，对象被移入Old Gen
  - 最终，Old Gen需要被回收，该事件称为Major GC
    - Major GC伴随着Stop the World Event
  - Major GC通常很慢，对于需要迅速响应的程序，应减少Major GC的时间
- Permanent Gen 保存着JVM所需的用于描述类和方法的元数据
  - 此外，Java SE的运行时类也会储存在这
  - 当JVM发现一些类已不必要并且要为其他类腾出空间时，这些类会被回收
  - permanent Gen被包含在Full GC中

### GC FLow
- 新对象被分配到Enden，此时S0;S1为空
- Eden空间被填满，触发minor GC
- 有引用的对象被移入S0，没有引用的对象被删除，eden清空
- 再次minor GC时，有引用的对象被移入S1，S0中的对象年龄提升然后移到S1，eden和S0清空。
  - eden中有引用的对象移到S1
  - S0中有引用的对象移到S1
  - eden无引用的对象被删除
  - S0中无引用的对象被删除
- 又一次minor GC时，同样的，调换S0和S1
- minor GC后老化(年龄达到阈值)的对象移入Old Gen

## GC switches
```sh
java -XX:+PrintCommandLineFlags -version
```
|switch|description|extra|use case|
|:-:|:-:|:-:|:-:|
|-Xnoclassgc|禁用垃圾回收|||
|-XX:+UseSerialGC|顺序GC|内存压实||
|-XX:+UseParallelGC|启用并行GC||需要高吞吐量|
|-XX:+UseParallelOldGC|启用并行GC|||
|-XX:+UseConcMarkSweepGC|启用并发GC|||
|-XX:+UseG1GC|启用G1GC|||

## mode
jvm有两种运行模式
- Client(64位不支持)
  - 优化启动时间
- Server
  - 优化执行效率

## Memory Allocation
- 分配到堆
- 栈上分配
  - 逃逸分析
  - 标量替换
- TLAB

## Heap
线程共享，主要是存放对象实例和数组。内部会划分出多个线程私有的分配缓冲区(Thread Local Allocation Buffer, TLAB)。可以位于物理上不连续的空间，但是逻辑上要连续。

## VM Stack
线程私有，生命周期和线程一致。描述的是 Java 方法执行的内存模型：每个方法在执行时都会创建一个栈帧(Stack Frame)用于存储局部变量表、操作数栈、动态链接、方法出口等信息。每一个方法从调用直至执行结束，就对应着一个栈帧从虚拟机栈中入栈到出栈的过程。

局部变量表：存放了编译期可知的各种基本类型(boolean、byte、char、short、int、float、long、double)、对象引用(reference 类型)和 returnAddress 类型(指向了一条字节码指令的地址)

StackOverflowError：线程请求的栈深度大于虚拟机所允许的深度。
OutOfMemoryError：如果虚拟机栈可以动态扩展，而扩展时无法申请到足够的内存。

## GC
### type
|serial collector|parallel collector|concurrent collector|
|:-:|:-:|:-:|
|单线程收集器|并行收集器|并发收集器|
- 引用计数法(无法探测到循环引用)
- 可达性分析法
  - 当一个对象到<b>GC Roots</b>没有任何引用链相连的时候说明对象不可用。
    - 虚拟机栈(栈帧中的本地变量表)中引用的对象
    - 方法区中类静态属性引用的对象
    - 方法区中常量引用的对象
    - 本地方法栈中 JNI(即一般说的 Native 方法) 引用的对象

## Object structure in memory
- 对象头(Header)
- 实例数据(Instance Data)
- 对齐填充(Padding)
