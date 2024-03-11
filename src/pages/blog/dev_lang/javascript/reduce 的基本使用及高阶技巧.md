# reduce 的基本使用及高阶技巧

> [!note] MDN
> [developer.mozilla.org](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## reduce 的语法

```javascript
reduce(callbackFn);
reduce(callbackFn, initialValue);
```

参数：

-   `accumulator`：reduce 函数的精髓，累加器。函数的返回值作为累加器的下一轮的值。
-   `currentValue`：当前元素的值。
-   `index`：当前元素的索引。
-   `array`：调用 reduce 的数组。
-   `initialValue`：首次调用 callback 函数时，accumulator 的初始值。
-   `return`：返回累加器的最终值。

## reduce 的应用

### 数组求和

```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15
```

分析一下 `accumulator` 的变化过程：

```
第一轮：acc = initialValue = 0, cur = 1，返回 1。
第二轮：acc = 1, cur = 2，返回 3。
第三轮：acc = 3, cur = 3，返回 6。
第四轮：acc = 6, cur = 4，返回 10。
第五轮：acc = 10, cur = 5，返回 15。
```

### 数组求积

```javascript
const arr = [1, 2, 3, 4, 5];
const product = arr.reduce((acc, cur) => acc * cur, 1);
console.log(product); // 120
```

## 统计数组中每个元素出现的次数

```javascript
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1];
const count = arr.reduce((acc, cur) => {
    if (cur in acc) {
        acc[cur]++;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});
console.log(count); // {1: 3, 2: 2, 3: 2, 4: 2, 5: 1}
```

分析一下 `accumulator` 的变化过程：

```
第一轮：acc = {}，cur = 1，返回 {1: 1}。
第二轮：acc = {1: 1}，cur = 2，返回 {1: 1, 2: 1}。
第三轮：acc = {1: 1, 2: 1}，cur = 3，返回 {1: 1, 2: 1, 3: 1}。
第四轮：acc = {1: 1, 2: 1, 3: 1}，cur = 4，返回 {1: 1, 2: 1, 3: 1, 4: 1}。
...
```

### 数组去重

```javascript
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1];
const unique = arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
        acc.push(cur);
    }
    return acc;
}, []);
console.log(unique); // [1, 2, 3, 4, 5]
```

### 数组扁平化

```javascript
const arr = [1, [2, [3, [4, 5]]]];
const flatten = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
};
console.log(flatten(arr)); // [1, 2, 3, 4, 5]
```

### 数组分组

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const group = (arr, size) => {
    return arr.reduce((acc, cur, index) => {
        const groupIndex = Math.floor(index / size);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(cur);
        return acc;
    }, []);
};
console.log(group(arr, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
