# GC 算法

<auto-dark />

> [!note] 以后认真读一读
> https://deepu.tech/memory-management-in-v8/
>
> https://v8.dev/blog/trash-talk
>
> https://juejin.cn/post/6934645755080605710

<show-image src="https://i.imgur.com/kSgatSL.png"/>

## 引用计数 Reference counting

引用计数就是当一个对象有一个引用指向它时，那么这个对象的引用 +1，当引用失效时，引用 -1，当引用计数为 0 时，就可以被回收。

引用计数算法最大的弊端是会产生循环引用，导致内存泄漏。如：

```javascript
function test() {
    let obj1 = {};
    let obj2 = {};
    obj1.name = obj2;
    obj2.name = obj1;
    return "test";
}
test();
```

## 标记清除 Mark-Sweep

可达性 Reachability，是标记清除算法的核心概念。从根开始，递归遍历所有引用的对象，标记所有可达对象（被引用对象），然后清除所有未标记的对象（未被引用对象）。垃圾回收器会定期执行这个算法。

## 标记压缩 Mark-Compact

类似于标记清除，但是在清除之后，会将存活的对象移动到一端，整合空间空间为连续空间，然后清除另一端的内存。

## 分代回收 Generational Collection

分代回收是一种优化算法，根据对象的存活时间将内存分为几块，一般分为新生代和老生代。新生代的对象存活时间较短，老生代的对象存活时间较长。新生代的对象使用标记清除算法，老生代的对象使用标记压缩算法。

新生代的对象一般使用 Scavenge 算法，将内存分为两块，一块为对象区域，一块为空闲区域。当对象区域满了之后，将存活的对象复制到空闲区域，然后交换两块区域的角色。

老生代的对象一般使用标记清除和标记压缩算法。

## 增量标记 Incremental Marking

增量标记是为了减少垃圾回收的停顿时间，将标记清除算法分为多个阶段，每个阶段执行一部分标记工作，然后让程序执行一段时间，然后再执行下一个阶段的标记工作。

## 闲时回收 Idle-time Garbage Collection

闲时回收是为了减少垃圾回收对程序执行的影响，将垃圾回收的工作放到程序空闲的时候执行。
