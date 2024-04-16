# Proxy 和 Reflect

## 从一个需求出发

现在有一个需求，需要在一个对象的属性被访问的时候，打印出来。在 ES6 以前，我们可以通过 `Object.defineProperty` 来实现这个需求：

```javascript
const obj = {
    id: 1,
    name: "obj",
    age: 18,
};

Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
        get() {
            console.log(`get ${key}: ${value}`);
            return value;
        },
        set(newValue) {
            console.log(`set ${key}: ${newValue}`);
            value = newValue;
        },
    });
});

obj.id; // get id: 1

obj.name; // get name: obj
obj.name = "new obj"; // set name: new obj
obj.name; // get name: new obj

obj.age; // get age: 18
obj.age = 20; // set age: 20
obj.age; // get age: 20
```

## Proxy 实现想要的全部

用上述这种方式有一些缺点，比如只能监听已经存在的属性，不能监听属性删除、属性比较、属性新增等等。而且 `Object.defineProperty` 作为存储器属性，在设计之初就不是为了去监听完整对象。

ES6 引入了 `Proxy`， `Proxy` 是类，用于创建对象代理，如果希望监听一个对象的相关操作，可以使用 `Proxy` 来创建一个代理对象，之后所有对这个对象的操作全部通过代理对象完成。

语法：

```javascript
const p = new Proxy(target, handler);
```

`target` 是我们需要的被代理的对象，可以是任意类型，包括原生数组、函数、另一个代理等。

`handler` 是一个以函数作为属性的对象，各个属性中的函数分别定义了在执行各种操作时的行为。这些函数称之为 `traps`，因为它们像陷阱一样，可以在对象的操作上设置拦截，从而改变对象的默认行为。

简单说就是我们要想监听对象的哪些操作，就在 `handler` 中定义对应的操作，然后创建一个相对应的 `Proxy`。

```javascript
const obj = {
    id: 1,
    name: "obj",
    age: 18,
};

const handler = {
    get(target, key) {
        console.log(`get ${key}: ${target[key]}`);
        return target[key];
    },
    set(target, key, value) {
        console.log(`set ${key}: ${value}`);
        target[key] = value;
    },
};

const proxy = new Proxy(obj, handler);

proxy.id; // get id: 1

proxy.name; // get name: obj
proxy.name = "new obj"; // set name: new obj
proxy.name; // get name: new obj

proxy.age; // get age: 18
proxy.age = 20; // set age: 20
proxy.age; // get age: 20
```

我们不再需要先取出所有 `key` 然后遍历对象属性，再逐个添加监听，只需要在 `handler` 中定义对应的操作即可，非常方便。

而且在 `Object.defineProperty` 中无法实现的功能，如监听删除、创建新的属性等也可以在 `Proxy` 中轻松实现。下面举一些例子：

```javascript
const obj = {
    id: 1,
    name: "obj",
    age: 18,
};

const handler = {
    get(target, key) {
        console.log(`get ${key}: ${target[key]}`);
        return target[key];
    },
    set(target, key, value) {
        console.log(`set ${key}: ${value}`);
        target[key] = value;
    },
    deleteProperty(target, key) {
        console.log(`delete ${key}`);
        delete target[key];
    },
    has(target, key) {
        console.log(`has ${key}`);
        return key in target;
    },
    ownKeys(target) {
        console.log(`ownKeys`);
        return Reflect.ownKeys(target);
    },

    // ...
};

const proxy = new Proxy(obj, handler);

proxy.name; // get name: obj

proxy.sno = 123; // set sno: 123
proxy.sno; // get sno: 123

delete proxy.sno; // delete sno

"age" in proxy; // has age

Object.keys(proxy); // ownKeys
```

## Proxy 几乎可以代理一切

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) 上有这样一段话：

> As another example, arrays differ from normal objects, because they have a magic length property that, when modified, automatically allocates empty slots or removes elements from the array. Similarly, adding array elements automatically changes the length property. This is because arrays have a `[[DefineOwnProperty]]` internal method that knows to update length when an integer index is written to, or update the array contents when length is written to. Such objects whose internal methods have different implementations from ordinary objects are called exotic objects. Proxy enable developers to define their own exotic objects with full capacity.

之所以我们能够通过改变数组的 `length` 值以达到删除元素或者扩展数组，是因为数组本身有一个 `[[DefineOwnProperty]]` 的对象内部方法 (Object Internal Methods)，当 update length 时能够 update 数组，在 update 数组时也可以 update length。这种 internal methods 被称为 exotic objects，而 `Proxy` 可以让开发者定义自己的 exotic objects。

所有的对象都有如下 internal methods 以及 handler 对应的 trap 方法：

-   `[[GetPrototypeOf]]` => `getPrototypeOf()`
-   `[[SetPrototypeOf]]` => `setPrototypeOf()`
-   `[[IsExtensible]]` => `isExtensible()`
-   `[[PreventExtensions]]` => `preventExtensions()`
-   `[[GetOwnProperty]]` => `getOwnPropertyDescriptor()`
-   `[[DefineOwnProperty]]` => `defineProperty()`
-   `[[HasProperty]]` => `has()`
-   `[[Get]]` => `get()`
-   `[[Set]]` => `set()`
-   `[[Delete]]` => `deleteProperty()`
-   `[[OwnPropertyKeys]]` => `ownKeys()`

函数对象还有：

-   `[[Call]]` => `apply()`
-   `[[Construct]]` => `construct()`

所有与对象的交互最终都会由这些 internal methods 来完成，而且这些 internal methods 都可以被 `Proxy` 代理从而实现自定义。

> This means almost no behavior (except certain critical invariants) is guaranteed in the language — everything is defined by the object itself.

比如说，我们可以通过 `Proxy` 来实现一个不允许删除属性的对象：

```javascript
const obj = {
    id: 1,
    name: "obj",
    age: 18,
};

const handler = {
    deleteProperty() {
        throw new Error("Can't delete property");
    },
};

const proxy = new Proxy(obj, handler);

delete proxy.id; // Error: Can't delete property
```

另外 `[[Set]]` 和 `[[DefineOwnProperty]]` 是不同的（废话），具体有什么不同，可以详细阅读 MDN。

## Reflect

`Reflect` 提供了很多用于操作 JS 对象的方法，这些方法与 `Proxy` 的 handler 中的 trap 方法一一对应，而且这些方法都是函数，可以直接调用，而不需要通过 `Proxy` 来调用。

注意，`Reflect` 虽然是全局对象，但不是构造函数，无法通过 `new` 来调用，只能使用静态方法。

其实可以发现 `Reflect` 和 `Object` 的很多方法都是类似的，之所以不用 `Object` 而是又提供了一种 `Reflect`，总结起来大概有如下几个原因：

-   早期 ECMA 规范中没有考虑到对对象本身的操作如何设计能够更加规范，因此全部一股脑扔到了 `Object` 上，导致 `Object` 上的方法非常多，而且有些方法的行为不够一致。
-   `Object` 作为构造函数，这些操作放在 `Object` 上，有些不太合适。
-   `Reflect` 的方法都是静态方法，更规范，所有的操作都集中到了 `Reflect` 上。
-   在使用 `Proxy` 时可以不操作原对象，而是直接操作 `Reflect`。
-   `Reflect` 的方法会返回一个布尔值，而 `Object` 的方法会返回一个对象，如果操作对象失败，`Reflect` 会返回 `false`，而 `Object` 则有可能静默错误。

总的来说就是，`Reflect` 出现后，反射的写法更加简单，程序的性能也更好。

小做一个对比，如果不用 `Reflect`，我们可能会这样写：

```javascript
const obj = {
    id: 1,
    name: "obj",
    age: 18,
};

delete obj.id; // 通过 obj 直接操作
obj?.id; // undefined
```

而使用 `Reflect`，我们可以这样写：

```javascript
const obj = {
    id: 1,
    name: "obj",
    age: 18,
};

Reflect.deleteProperty(obj, "id"); // 直接返回 true | false
```

结合 `Proxy`，我们可以这样写：

```javascript
const obj = {
    id: 1,
    name: "obj",
    age: 18,
};

const handler = {
    deleteProperty(target, key) {
        // 通过 proxy 间接操作，而不是直接操作原对象 obj
        return Reflect.deleteProperty(target, key);
    },
};

const proxy = new Proxy(obj, handler);

delete proxy.id; // true
delete proxy.id; // false
```
