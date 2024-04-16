# buffer 详解

OS 中的所有操作都是通过文件进行的，文件是以二进制的形式存储在磁盘上的，而在内存中，文件是以字节的形式存储的。

对于前端来说，很多场景是不会和二进制打交道的，但对于服务器来说，处理各式各样的文件以及建立 TCP 传输字节流等等，都需要和二进制打交道。在 Node.js 中，Buffer 类被引入来帮助处理二进制数据。

Buffer 类是一个全局变量，可以通过 `Buffer` 构造函数来创建 Buffer 实例，Buffer 类的实例类似于整数数组，这个数组的每一项可以保存 8 位二进制，Buffer 的大小是固定的，且在 V8 堆外分配物理内存。

> [!note] 官方文档
> https://nodejs.org/docs/latest/api/buffer.html

## 创建 Buffer

Buffer 类的实例可以通过多种方式创建，如下：

1. 通过 `Buffer.from()` 创建，传入字符串和编码格式

```javascript
const buf1 = Buffer.from("hello world", "utf8");
console.log(buf1); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf1.toString()); // hello world
```

2. 通过 `Buffer.alloc()` 创建，申请固定大小的内存空间，并手动填充每个字节

```javascript
const buf2 = Buffer.alloc(11);
console.log(buf2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

buf2[0] = 0x68;
buf2[1] = 0x65;
buf2[2] = 0x6c;
buf2[3] = 0x6c;
buf2[4] = 0x6f;
buf2[5] = 0x20;
buf2[6] = "w".charCodeAt();
buf2[7] = 0x6f;
buf2[8] = 0x72;
buf2[9] = 0x6c;
buf2[10] = 0x64;

console.log(buf2); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf2.toString()); // hello world
```

## Buffer 的创建过程

`createPool`

```javascript
// 池大小为 8KB
Buffer.poolSize = 8 * 1024;
let poolSize, poolOffset, allocPool;

function createPool() {
    poolSize = Buffer.poolSize;

    // 申请一个 8KB 的内存池，createUnsafeBuffer 返回一个 FastBuffer 实例
    allocPool = createUnsafeBuffer(poolSize).buffer;

    // 将内存池标记为不可转移
    markAsUntransferable(allocPool);

    // 重置偏移量，下次从内存池的头部开始分配
    poolOffset = 0;
}
createPool();
```

`Buffer.from`

```javascript
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 */
Buffer.from = function from(value, encodingOrOffset, length) {
    // 如果 value 是字符串，直接调用 fromString
    if (typeof value === "string") return fromString(value, encodingOrOffset);

    if (typeof value === "object" && value !== null) {
        if (isAnyArrayBuffer(value))
            return fromArrayBuffer(value, encodingOrOffset, length);

        const valueOf = value.valueOf && value.valueOf();
        if (
            valueOf != null &&
            valueOf !== value &&
            (typeof valueOf === "string" || typeof valueOf === "object")
        ) {
            return from(valueOf, encodingOrOffset, length);
        }

        const b = fromObject(value);
        if (b) return b;

        if (typeof value[SymbolToPrimitive] === "function") {
            const primitive = value[SymbolToPrimitive]("string");
            if (typeof primitive === "string") {
                return fromString(primitive, encodingOrOffset);
            }
        }
    }

    throw new ERR_INVALID_ARG_TYPE(
        "first argument",
        ["string", "Buffer", "ArrayBuffer", "Array", "Array-like Object"],
        value
    );
};
```

`fromString`

```javascript
function fromString(string, encoding) {
    let ops;

    // 判断逻辑是为了获取 encodingOps
    // 如果 encoding 为空，或者不是字符串，或者长度为 0，使用 utf8 编码
    if (typeof encoding !== "string" || encoding.length === 0) {
        // 如果 string 为空，直接返回一个空的 Buffer
        if (string.length === 0) return new FastBuffer();
        ops = encodingOps.utf8;
    } else {
        // 如果 encoding 不是有效的编码，抛出异常
        ops = getEncodingOps(encoding);
        if (ops === undefined) throw new ERR_UNKNOWN_ENCODING(encoding);
        if (string.length === 0) return new FastBuffer();
    }

    // 快速创建 Buffer
    return fromStringFast(string, ops);
}
```

`fromStringFast`

```javascript
/**
 * 1. 如果 length 大于 4KB，直接创建一个新的 Buffer
 * 2. 如果 length 小于 4KB，从 pool 中分配
 * 3. 如果 pool 中的剩余长度不够用，重新申请 pool
 */
function fromStringFast(string, ops) {
    // 获取 length，string 的字节长度
    const length = ops.byteLength(string);

    // 如果 length 大于 Buffer.poolSize 的一半，直接创建一个新的 Buffer
    // Buffer.poolSize 是 8KB，所以这里是 4KB
    // >>> 1 为右移一位，即除以 2
    if (length >= Buffer.poolSize >>> 1)
        return createFromString(string, ops.encodingVal);

    // 如果 length 大于 Buffer.poolSize - poolOffset，重新创建一个 pool
    if (length > poolSize - poolOffset) createPool();
    let b = new FastBuffer(allocPool, poolOffset, length);
    const actual = ops.write(b, string, 0, length);
    if (actual !== length) {
        // byteLength() may overestimate. That's a rare case, though.
        b = new FastBuffer(allocPool, poolOffset, actual);
    }
    poolOffset += actual;
    alignPool();
    return b;
}
```
