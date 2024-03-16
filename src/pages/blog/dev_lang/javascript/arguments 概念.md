# arguments 概念

arguments 是一个对应于传递给函数的参数的类数组 (array-like) 对象。

arguments 拥有一些数组特性，如 `length` 属性，可以通过 index 访问。

```javascript
function test() {
    console.log(arguments.length); // 3
    console.log(arguments[0]); // 1
    console.log(arguments[1]); // 2
    console.log(arguments[2]); // 3
}
test(1, 2, 3);
```

arguments 不能使用数组的方法，如 `push`、`pop`、`slice`、`filter`、`map`、`reduce` 等。但是可以通过一些方法将其转换为数组，继而使用数组的方法。

```javascript
function test() {
    // 方法一
    const new_arr1 = Array.prototype.slice.call(arguments, 0); // 早期经常使用
    // 方法二
    const new_arr2 = Array.from(arguments);
    // 方法三
    const new_arr3 = [...arguments];
}
```

> [!note] 为什么可以用 `slice`
>
> -   首先 `Array` 是一个实例方法，`slice` 是 `Array` 的原型方法，所以不能直接使用 `Array.slice`。需要去原型中调用。当然，也可以直接用 `[].slice`。
> -   `slice` 通过 `call` 或 `apply` 将 `this` 指向 `arguments`，然后 `slice` 会通过 `this` 获取 `length` 属性，然后通过 `for` 循环遍历 `this`，将 `this[i]` 依次添加到新数组中。

箭头函数中不绑定 `arguments`，意味着箭头函数中的 `arguments` 和 `this` 一样，是指向外层函数的 `arguments`。但是如果外层没有函数会直接报错，因为上层作用域以及 `window` 中都没有 `arguments` 属性。

```javascript
const foo = () => {
    console.log(arguments); // [!code error]
};
test(1, 2, 3);

function bar() {
    return () => {
        console.log(arguments); // 可以访问到
    };
}
const fn = bar(1, 2);
fn(3);
```
