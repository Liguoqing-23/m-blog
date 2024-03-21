# Iterator 和 Generator

## Iterator

> [!note] MDN
> [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)

> An Iterator object is an object that conforms to the iterator protocol by providing a next() method that returns an iterator result object. All built-in iterators inherit from the Iterator class. The Iterator class provides a @@iterator method that returns the iterator object itself, making the iterator also iterable. It also provides some helper methods for working with iterators.

迭代器对象，必须遵循迭代器协议 (Iterator Protocol)，即提供一个返回迭代器结果对象的 next() 方法，该方法返回一个具有两个属性的对象，比如：

```javascript{8,9,13,14}
function CustomIterator() {
    this.index = 0;
    this.data = [1, 2, 3, 4, 5];

    this.next = function () {
        if (this.index < this.data.length) {
            return {
                value: this.data[this.index++],
                done: false,
            };
        } else {
            return {
                value: undefined,
                done: true,
            };
        }
    };
}

// test
const iterator = new CustomIterator();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }

console.log(iterator.next()); // { value: undefined, done: true }
```

但现在数组和迭代器是分开的，这样不够好，我们来改造一下，把 `info` 改造成可迭代对象。

可迭代对象就是内部实现了 `Symbol.iterator` 方法的对象，即实现了迭代器协议的对象，凡是这种对象都可以用 `for...of` 循环遍历。JS 中的 String、Array、Map、Set、TypedArray、arguments、NodeList 等都是可迭代对象。

```javascript{5-23}
const info = {
    name: "Tom",
    age: 18,
    hobby: ["basketball", "football", "swimming"],
    [Symbol.iterator]: function () {
        let index = 0;
        const keys = Object.keys(this); // 注意 this 绑定
        return {
            next: function () {
                return {
                    value: {
                        key: keys[index],
                        value: this[keys[index++]],
                    },
                    done: index > keys.length,
                };
            }.bind(this), // 注意 this 绑定
        };
    },
};

// test
for (const item of info) {
    console.log(item);
}

// output
// { key: 'name', value: 'Tom' }
// { key: 'age', value: 18 }
// { key: 'hobby', value: [ 'basketball', 'football', 'swimming' ] }
```

通过 `Symbol.iterator` 方法，我们将 `info` 变成可迭代对象，`Symbol.iterator` 方法必须返回一个迭代器对象。

可迭代对象还有很多应用场景，比如 JS 语法：`for...of` 循环、解构赋值、扩展运算符、`yield*`：

```javascript
const info = new Set([1, 2, 3, 4, 5]);

// for...of
for (const item of info) {
    console.log(item);
}

// 解构赋值
const [a, b, ...rest] = info;
console.log(a, b, rest);

// 扩展运算符
const arr = [...info];
console.log(arr);

// yield*
function* gen() {
    yield* info;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
```

还有一些类的构造方法，比如 Map、Set、WeakMap、WeakSet、Array、TypedArray、String、NodeList、arguments 等，参数都是可迭代对象。

一些方法的调用的参数也是可迭代对象，如 `Promise.all`、`Promise.race`、`Array.from` 等：

```javascript
const info = new Map([
    ["name", "Tom"],
    ["age", 18],
    ["hobby", ["basketball", "football", "swimming"]],
]);

// Promise.all
Promise.all(info).then((res) => {
    console.log(res);
});

// Promise.race
Promise.race(info).then((res) => {
    console.log(res);
});

// Array.from
const arr = Array.from(info);
console.log(arr);
```

迭代器对象还有一个方法 `return`，能够监听到迭代器对象被提前终止：

```javascript
const info = {
    name: "Tom",
    age: 18,
    hobby: ["basketball", "football", "swimming"],
    [Symbol.iterator]: function () {
        let index = 0;
        const keys = Object.keys(this);
        return {
            next: function () {
                return {
                    value: {
                        key: keys[index],
                        value: this[keys[index++]],
                    },
                    done: index > keys.length,
                };
            }.bind(this),
            return: function () {
                console.log("提前终止迭代器对象");
                return { done: true };
            },
        };
    },
};

// test
for (const item of info) {
    console.log(item);
    if (item.key === "age") {
        break;
    }
}

// output
// { key: 'name', value: 'Tom' }
// { key: 'age', value: 18 }
// 提前终止迭代器对象
```

遍历的过程中通过 `break`、`return`、`throw` 都可以提前终止迭代器，触发 `return` 。解构不完全也会提前终止迭代器。

## Generator

> [!note] MDN
> [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

不多 bb 直接上一个例子：

```javascript
function* gen() {
    console.log("start and return 1");
    const hahaha = yield 1;
    console.log(`middle with no return but get a ${hahaha}`);
    yield;
    console.log("end and return 3");
    return 3;

    // here is unreachable
    yield 4;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next("hahaha")); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true } // 拿不到 4
```

生成范围数字函数：

```javascript
function* range(start, end, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

// test
for (const item of range(1, 10, 2)) {
    console.log(item);
}

// output
// 1
// 3
// 5
// 7
// 9
```

`yield` 也有语法糖，`yield*`，用于委托给另一个 Generator 或可迭代对象，然后依次迭代：

```javascript
const arr = [1, 2, 3, 4, 5];
function* gen() {
    yield* arr;
}

// test
const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: 4, done: false }
console.log(g.next()); // { value: 5, done: false }
console.log(g.next()); // { value: undefined, done: true }
```

### Generator 与 Iterator

用 Generator 替代 Iterator 完成实现 `info` 的可迭代性：

```javascript
const info = {
    name: "Tom",
    age: 18,
    hobby: ["basketball", "football", "swimming"],
    *[Symbol.iterator]() {
        yield* Object.entries(this);
    },
};

// test
for (const item of info) {
    console.log(item);
}

// output
// { key: 'name', value: 'Tom' }
// { key: 'age', value: 18 }
// { key: 'hobby', value: [ 'basketball', 'football', 'swimming' ] }
```
