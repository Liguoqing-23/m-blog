# 细说 apply、call、bind

## apply 和 call 的区别

`apply` 和 `call` 是 JS 提供的两个方法，用来显示绑定 this。这两个方法的作用是一样的，都是用来改变函数的 this 指向。它们的区别在于传参的方式不同。

`apply` 和 `call` 的第一个参数都是要绑定的 this 值，第二个参数开始是函数的参数。`apply` 的第二个参数是一个数组，`call` 则是一个参数列表。

```javascript
function foo(a, b) {
    console.log(this, a, b);
}

const obj = {};

foo.apply(obj, [1, 2]); // obj 1 2
foo.call(obj, 1, 2); // obj 1 2
```

### 手写 apply

```javascript
Function.prototype.apply = function (thisArg, args) {
    if (typeof this !== "function") {
        throw new TypeError("Apply must be called on a function");
    }
    thisArg = thisArg || window;
    thisArg.fn = this;
    const result = thisArg.fn(...args);
    delete thisArg.fn;
    return result;
};

// test
function foo(a, b) {
    console.log(this, a, b);
}
const obj = {};
foo.apply(obj, [1, 2]); // obj 1 2
```

### 手写 call

```javascript
Function.prototype.call = function (thisArg, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("Call must be called on a function");
    }
    thisArg = thisArg || window;
    thisArg.fn = this;
    const result = thisArg.fn(...args);
    delete thisArg.fn;
    return result;
};

// test
function foo(a, b) {
    console.log(this, a, b);
}
const obj = {};
foo.call(obj, 1, 2); // obj 1 2
```

### apply 和 call 的应用场景

1. 改变 this 指向

```javascript
function foo() {
    console.log(this);
}

const obj = {};
foo.call(obj); // obj
```

2. 借用其他对象的方法

```javascript
const obj1 = {
    name: "obj1",
    foo() {
        console.log(this.name);
    },
};

const obj2 = {
    name: "obj2",
};

obj1.foo.call(obj2); // obj2
```

3. 继承

```javascript
function Animal(name) {
    this.name = name;
}

function Dog(name) {
    Animal.call(this, name);
}

const dog = new Dog("dog");
console.log(dog.name); // dog
```

## 为什么要引入新的 bind

`bind` 方法和 `apply`、`call` 作用一样，都是用来改变函数的 this 指向。不同的是 `bind` 方法返回的是对函数的引用，即一个新的函数,称为绑定函数 (bound function, BF)，而 `apply` 和 `call` 是立即执行函数。正是这个特性，`bind` 方法可以用来延迟执行函数，弥补了前二者的不足。

```javascript
function foo() {
    console.log(this);
}

const obj = {};
const bar = foo.bind(obj); // 还没有执行 foo

bar(); // obj，执行 foo
```

而且 `bind` 还简化了调用传参。`bind` 方法的第一个参数是要绑定的 this 值，后面的参数是函数的参数。`bind` 方法返回一个新的函数，这个函数的 this 值是绑定的值，参数是传入的参数。即便 `bar` 执行时看上去是独立函数调用，但其实已经绑定了 `obj` 的

> [!tip]
> ECMA 称 BF 为怪异函数对象 (exotic function object)，就是因为看起来是独立函数调用，但其实已经绑定了 this。

### bind 的实现

`bind` 方法的实现并不复杂，主要是利用了闭包的特性。`bind` 方法的第一个参数是要绑定的 this 值，后面的参数是函数的参数。`bind` 方法返回一个新的函数，这个函数的 this 值是绑定的值，参数是传入的参数。

1. 判断 this 是否是函数，如果不是则抛出异常。
2. 保存 this 和参数。
3. 返回一个新的函数，这个函数的 this 是绑定的值，参数是传入的参数。

```javascript
Function.prototype.bind = function (thisArg) {
    //thisArg 指向 obj
    if (typeof this !== "function") {
        throw new TypeError("Bind must be called on a function");
    }
    const fn = this; // this 指向 foo
    const args = Array.prototype.slice.call(arguments, 1);

    return function () {
        return fn.apply(
            thisArg, // 不能是 this，否则指向 window
            args.concat(Array.prototype.slice.call(arguments))
        );
    };
};

function foo(a, b) {
    console.log(this, a, b);
}

const obj = {};
const bar = foo.bind(obj, 1);
bar(2); // obj 1 2
```
