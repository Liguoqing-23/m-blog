# concat、push 的区别

> [!tip] MDN
> [push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
>
> [concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

先来看 concat 的语法：

```javascript
concat();
concat(value0);
concat(value0, value1);
concat(value0, value1, /* … ,*/ valueN);
```

-   `valueN` 是要连接的数组或值。
-   返回一个新的数组，包含了 `valueN` 的浅拷贝。

调用 `concat` 方法时，如果任何源数组是稀疏数组，`concat` 方法会保留空槽。

```javascript
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = a.concat(b);
console.log(c); // [1, 2, 3, 4, 5, 6]
```

再来看 push 的语法：

```javascript
push();
push(element0);
push(element0, element1);
push(element0, element1, /* … ,*/ elementN);
```

-   `elementN` 要添加到数组末尾的元素。
-   返回新数组的长度。

`push` 方法会改变原数组，改变了 `this` 的内容和长度。

```javascript
var a = [1, 2, 3];
var b = [4, 5, 6];
a.push(b);
console.log(a); // [1, 2, 3, [4, 5, 6]]
```

可以发现，`concat` 方法返回一个新的数组，而 `push` 方法会改变原数组。而且 `concat` 方法是连接数组，`push` 方法是添加元素。

如果想要像 `push` 一样在末尾添加元素而不是连接数组，却又不想改变原数组，可以使用 `concat` 方法，但要注意，所添加的元素需要用 `[]` 包裹：

```javascript
arr.concat([element0, element1, /* ... ,*/ elementN]);
```

而如果想要连接数组且返回新数组长度，可以使用 `push` 方法，同时需要注意在 `push` 方法中传入的参数需要使用展开语法：

```javascript
arr.push(...[value0, value1, /* ... ,*/ valueN]);
```