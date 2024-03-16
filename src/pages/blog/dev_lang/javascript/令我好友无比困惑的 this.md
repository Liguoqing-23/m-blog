# 令我好友无比困惑的 this

每回我学 Java 的好友（没怎么学过 JS）看到我写 JS，就会发出感叹：“this 不是这么使的！”

Java 中的 this 是什么，我大可不必在这里详说。我也学过 Java，我也确实理解他的困惑，我也确实每回都解释的不清不楚，甚至压根就不解释了。这反倒让我自己越来越困惑，为什么我学 JS 很顺的就学下来了，没感到 this 有什么问题，反倒是没学过的人如此不能理解呢？（似乎是个废话）总之我发现，我自己也没搞懂 this 到底是什么，我只是知道怎么用而已。既然以后无论面试还是深入下去都会遇到这个问题，不妨就搞懂他罢了。

## this 到底指向什么

先来跑一段代码：

```javascript
function foo() {
    console.log(this);
}

foo(); // window

const obj = { foo };
obj.foo(); // obj

const bar = obj.foo; // 隐式绑定丢失
bar(); // window
```

这是一个令人困惑的结果，三次调用 `foo`，结果输出却不尽相同。

实际上，this 的指向实在运行时确定的，this 的绑定和调用方式以及调用的位置有关，但和声明的位置无关。

### 默认绑定

JS 给 this 绑定值有四种规则，首先是默认绑定。默认绑定是最常见的绑定规则，当函数调用时，this 绑定到全局对象。在浏览器中，全局对象是 window。

```javascript
function foo() {
    console.log(this);
}

foo(); // window

const obj = { foo };

const bar = obj.foo;
bar(); // window

function baz(fn) {
    fn();
}
baz(foo); // window
```

这几种调用方法都有一个共性，就是 `foo` 是被作为独立函数调用的。只要是作为独立函数调用就会指向 window 或者 undefined。

> [!tip]
> 严格模式下，全局对象不会被默认绑定，this 会绑定到 undefined。

### 隐式绑定

通过对象属性引用调用函数，this 绑定到这个对象。也就是说，对象属性引用链中的最后一层是调用位置时，this 绑定到这个对象。

```javascript
const obj = {
    foo() {
        console.log(this);
    },
};

obj.foo(); // obj

const bar = obj.foo;
bar(); // window
```

`foo` 执行时通过 `obj` 引用，所以 this 绑定到 `obj`。而 `bar` 是作为独立函数调用的，所以 this 绑定到 window。

### 显式绑定

显示绑定就是通过 JS 提供的 `call`、`apply`、`bind` 方法来绑定 this。

现在我不想通过给 `obj` 添加 `foo` 方法来调用 `foo`，这样就必须在 `obj` 上添加一个属性。我可以通过 `call` 或 `apply` 来绑定 this：

```javascript
function foo() {
    console.log(this);
}
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

foo.call(obj1); // obj1
foo.apply(obj2); // obj2
```

### new 绑定

JS 中的函数可以通过 `new` 关键字来调用，这种调用方式被称为构造函数调用。使用 `new` 来构造调用一个函数时，会执行如下操作：

-   创建一个新对象
-   这个新对象会被执行 `[[Prototype]]` 连接
-   这个新对象会绑定到函数调用的 this
-   如果函数没有返回其他对象，那么这个新对象会被返回

```javascript
function foo() {
    console.log(this);
}

const obj = new foo(); // foo
```

明白了 JS 构造函数的执行过程，可以试着手写一个 new：

```javascript
function new_operator(ctor, ...args) {
    if (typeof ctor !== "function") {
        throw new TypeError("ctor must be a function");
    }

    const obj = Object.create(ctor.prototype);
    const result = ctor.apply(obj, args);

    return result instanceof Object ? result : obj;
}

function foo() {
    this.name = "foo";
}

const obj = new_operator(foo);
console.log(obj.name); // foo
```

## this 绑定的优先级

默认绑定的优先级是最低的。任何通过其他方式绑定的 this 都会取缔默认绑定。

显示绑定的优先级高于隐式绑定。

```javascript
function foo() {
    console.log(this);
}
const obj = { foo };

obj.foo(); // obj
obj.foo.apply({}); // {}
obj.foo.call({}); // {}
obj.foo.bind({})(); // {}
```

new 绑定的优先级高于隐式绑定。

```javascript
function foo() {
    console.log(this, this.a);
}
const obj = {
    a: 2,
    foo: foo,
};
new obj.foo(); // {} undefined
```

new 无法和 `apply`、`call` 一起使用，没有可比性。但是可以和 `bind` 一起使用，且 `new` 的优先级高于 `bind`。

```javascript
function foo() {
    console.log(this, this.a);
}
const obj = {
    a: 2,
    foo: foo,
};
const bar = new (obj.foo.bind(obj))(); // {} undefined
```

### 总结

1. `new` 居于首位
2. `bind`、`apply`、`call` 次之
    - 显示绑定中 `bind` 优先级最高
3. 隐式绑定再次之
4. 默认绑定最低

## 跳出绑定之外，不在规则之中

### 忽略显示绑定

有些语法特性会打破绑定规则，把 `null` 或 `undefined` 作为 `this` 的绑定对象传入 `apply`、`call`、`bind`，会被忽略，而是应用默认绑定规则。

```javascript
function foo() {
    console.log(this);
}
foo.apply(null); // window
foo.call(undefined); // window
foo.bind(null)(); // window
```

常见于 `apply` 展开数组：

```javascript
function foo(a, b) {
    console.log(this, a, b);
}
const arr = [1, 2];
foo.apply(null, arr); // window 1 2
```

常见于 `bind` 实现柯里化：

```javascript
function foo(a, b) {
    console.log(this, a, b);
}
const obj = {};
const bar = foo.bind(null, 1);
bar(2); // window 1 2
```

像这样传入 `null` 有时候时不安全的，更安全的做法是通过 `Object.create(null)` 创建一个空对象。

```javascript
function foo() {
    console.log(this);
}
foo.apply(Object.create(null));
```

### 间接函数引用

当创建了一个函数的间接引用时，会丢失绑定。

形如 `a.foo = b.foo`，返回值是 `b.foo` 函数的引用。因此调用位置是 `foo`，而不是 `a` 或 `b`。

很怪的写法，没什么用，实际开发也不会这样写。

```javascript
function foo() {
    console.log(this);
}
const a = { a: "a", foo };
const b = { b: "b" };
a.foo(); // a
(b.foo = a.foo)(); // undefined
```

### 箭头函数

箭头函数是 ES6 增加的一种编写函数的方法，比起函数表达式更加简洁。箭头函数是根据外层（函数或全局）作用域（词法作用域）来决定 `this` 的值，而箭头函数本身不会绑定 `this` 和 `arguments`。因为箭头函数没有原型，所以也不能被构造。

```javascript
function foo() {
    return () => {
        // this 从 foo 继承
        console.log(this);
    };
}
const obj = {};
const bar = foo.call(obj);
bar(); // obj
```

## this 的查找规则

`this` 是一层一层向上查找的，直到找到绑定的对象或者到达全局对象。

```javascript
const obj = {
    foo: () => {
        const bar = () => {
            console.log(this);
        };
        bar();
    },
};

obj.foo(); // window
```

箭头函数没有 `this` 反倒是好事，比如网络请求时，可以直接使用外层的 `this`。

```javascript
// 网络请求工具函数
function request(url, callback) {
    let data = {};
    // ...
    callback(data);
    // ...
}

// 组件
const component = {
    data: [],
    init() {
        request("xxx", (data) => {
            this.data = data; // this 指向 component
        });
    },
};
```

## 练习

::: code-group

```javascript [第一题]
const obj = {
    get_this() {
        console.log(this);
    },
};

function get_this() {
    const get = obj.get_this;

    get();
    obj.get_this();
    (_get = obj.get_this)();
}

get_this();

// window
// obj
// window
```

```javascript [第二题]
const obj = {
    get_this_1() {
        console.log(this);
    },
    get_this_2: () => {
        console.log(this);
    },
    get_this_3() {
        return function () {
            console.log(this);
        };
    },
    get_this_4() {
        return () => {
            console.log(this);
        };
    },
};

obj.get_this_1();
obj.get_this_2();
obj.get_this_3()();
obj.get_this_4()();

obj.get_this_1.call("foo");
obj.get_this_2.call("foo");
obj.get_this_3().call("foo");
obj.get_this_4().call("foo");

const get_this_1 = obj.get_this_1;
const get_this_2 = obj.get_this_2;
const get_this_3 = obj.get_this_3();
const get_this_4 = obj.get_this_4();

get_this_1();
get_this_2();
get_this_3();
get_this_4();

// obj
// window
// window
// obj

// String { "foo" }
// window
// String { "foo" }
// obj

// window
// window
// window
// obj
```

```javascript [第三题]
function foo() {
    this.foo1 = function () {
        console.log(this);
    };
    this.foo2 = () => {
        console.log(this);
    };
    this.foo3 = function () {
        return function () {
            console.log(this);
        };
    };
    this.foo4 = function () {
        return () => {
            console.log(this);
        };
    };
}

const obj = new foo();

obj.foo1();
obj.foo1.call("foo");

obj.foo2();
obj.foo2.call("foo");

obj.foo3()();
obj.foo3().call("foo");
obj.foo3.call("foo")();

obj.foo4()();
obj.foo4().call("foo");
obj.foo4.call("foo")();

// obj
// String { "foo" }

// obj
// obj

// window
// String { "foo" }
// window

// obj
// obj
// String { "foo" }
```

```javascript [第四题]
function foo() {
    this.obj = {
        foo1: function () {
            return function () {
                console.log(this);
            };
        },
        foo2: function () {
            return () => {
                console.log(this);
            };
        },
    };
}
const o = new foo();

o.obj.foo1()();
o.obj.foo1().call("foo");
o.obj.foo1.call("foo")();

o.obj.foo2()();
o.obj.foo2().call("foo");
o.obj.foo2.call("foo")();

// window
// String { "foo" }
// window

// obj
// obj
// String { "foo" }
```

```javascript [第五题]
var obj = {
    foo: function () {
        (function () {
            console.log(this);
        })();
    },
};

obj.foo();

// window
```

:::
