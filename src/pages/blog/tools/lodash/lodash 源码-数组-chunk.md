# lodash 源码-数组-chunk

本系列基于 lodash 4.17.15 版本源码，主要是对 lodash 中的一些方法进行源码分析学习，提升自己的技能。

> [!note] 官方文档
> https://lodash.com/docs/4.17.15

## Chunk

> Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.

-   函数将返回一个由传入的数组分组后的数组
-   数组中的 elements 的 length 为传入的 size
-   如果数组不能被 size 整除，最后一个 chunk 将包含剩余元素

调用图（左右根顺序）：

<auto-dark />

<show-image src="/img/lodash 源码-数组-chunk-01.png" />

函数结构：

```typescript
function chunk(array: Array<any>, size: number = 1): Array<any> {
    return ???
}
```

进入函数内部：

```typescript
function chunk(array: Array<any>, size: number = 1): Array<any> {
    size = Math.max(toInteger(size), 0); // [!code focus]
}
```

这句是为了边界处理，如果 size 是负数，在这里就解决了，剩余的交给了 `toInteger`。再来看看 `toInteger`：

> Converts `value` to an integer.

```typescript
function toInteger(value: any): number {
    // [!code focus]
    const result = toFinite(value); // [!code focus]
    const remainder = result % 1;

    return remainder ? result - remainder : result;
} // [!code focus]
```

又调了个 `toFinite`，这里先说返回结果是一个有限数字，然后拿到结果对 1 取余：

-   如果余数不为 0，说明传入的 value 是一个浮点数，返回整数部分
-   如果余数为 0，说明传入的 value 是一个整数，直接返回

那就来看看 `toFinite`：

> Converts `value` to a finite number.

```typescript
function toFinite(value: any): number {
    // 如果 value 是假值，如 null、undefined、NaN、0、''、false
    if (!value) {
        // 如果就是 0 本身，则返回 0，否则返回 0
        return value === 0 ? value : 0;
    }

    // 这里又调了 toNumber，在这里简单说一下可能的返回值：
    // number -> number
    // isSymbol -> 0
    // isObject -> NaN | number
    // boolean -> 1 | 0
    // string -> NaN | number
    // 现在任意 value 都会转换为 number 或 NaN
    value = toNumber(value);

    // const INFINITY = 1 / 0;
    // const MAX_INTEGER = 1.7976931348623157e308;
    if (value === INFINITY || value === -INFINITY) {
        // 如果 value 是正无穷或负无穷，返回最大整数或最小整数
        const sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }

    // 如果 value 是 NaN，返回 0
    return value === value ? value : 0;
}
```

自此，所有值均转化为 number，从最大值到最小值都有可能，整数浮点数也都有可能。回到 `toInteger`：

```typescript
function toInteger(value: any): number {
    const result = toFinite(value);
    const remainder = result % 1; // [!code focus]

    return remainder ? result - remainder : result; // [!code focus]
}
```

`result % 1` 将结果取余，去除小数部分，返回整数部分，除了 infinity 还是 infinity，Number.MIN_VALUE 因为求余为其本身，最终也返回 0。回到 `chunk`：

```typescript
function chunk(array: Array<any>, size: number = 1): Array<any> {
    size = Math.max(toInteger(size), 0);

    const length = array == null ? 0 : array.length; // [!code focus]
    if (!length || size < 1) return []; // [!code focus]

    // 双指针，一个指向原数组，一个指向结果数组 // [!code focus]
    let index = 0; // [!code focus]
    let resIndex = 0; // [!code focus]

    // 创建一个新数组，长度为传入数组长度除以 size，向上取整 // [!code focus]
    const result = new Array(Math.ceil(length / size)); // [!code focus]

    while (index < length) { // [!code focus]
        // 通过 slice 方法截取数组，步长为 size，依次填充到结果数组中 // [!code focus]
        result[resIndex++] = slice(array, index, (index += size)); // [!code focus]
    }
    return result; // [!code focus]
}
```

在 chunk 的最后，调用了 slice 方法，等到看到 slice 方法的时候再做分析吧，这篇就到这里。