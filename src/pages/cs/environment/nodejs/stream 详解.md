# stream 详解

流（stream）是 Node.js 中处理流数据的抽象接口。 stream 模块用于构建实现了流接口的对象。 Node.js 中有四种基本的流类型：

-   Writable - 可写入数据的流 `fs.createWriteStream()`
-   Readable - 可读取数据的流 `fs.createReadStream()`
-   Duplex - 可读又可写的流 `net.Socket`
-   Transform - 在读写过程中可以修改或转换数据的 Duplex 流 `zlib.createDeflate()`

所有的流都是 EventEmitter 的实例。

## Readable

Readable 流是对提供数据的来源的抽象。 例如，`fs.createReadStream()` 是一个 Readable 流，`process.stdin` 是一个 Readable 流。

### 创建 Readable 流

可以指定 `[start, end]` 选项来读取文件的一部分。并且可以指定 `highWaterMark` 选项来指定缓冲区大小，即每次读取的字节数。

```javascript
const fs = require("fs");
const readableStream = fs.createReadStream("file.txt", {
    start: 0,
    end: 100,
    heightWaterMark: 1024, // 默认 64 * 1024 字节
    encoding: "utf8",
});

readableStream.on("data", (chunk) => {
    console.log(chunk);

    // 暂停读取
    readableStream.pause();

    // 恢复读取
    readableStream.resume();
});
```

可读流的其他事件：

-   `open` - 当底层资源已打开时触发，在 `data` 事件之前触发。
-   `end` - 当没有更多数据可读时触发。
-   `close` - 当底层资源已关闭时触发。

```javascript
readableStream.on("open", (fd) => {
    console.log(fd);
});

readableStream.on("end", () => {
    console.log("没有更多数据可读");
    // 自动 close
});

readableStream.on("error", (err) => {
    console.error(err);
});

readableStream.on("close", () => {
    console.log("底层资源已关闭");
});
```

## Writable

Writable 流是对数据的目标的抽象。 `fs.createWriteStream()` 是一个 Writable 流，`process.stdout` 也是一个 Writable 流。

### 创建 Writable 流

```javascript
const fs = require("fs");

const writableStream = fs.createWriteStream("file.txt", {
    flags: "a", // 默认 w，可选 a+、r+，windows 下 a 有兼容性问题
    encoding: "utf8",
    mode: 0o666, // 文件读写权限，默认 0o666
    autoClose: true,
    start: 0,
});

writableStream.write("Hello World!", "utf8", () => {
    console.log("写入成功");
});

writableStream.end();
```

可写流的其他事件：

-   `finish` - 当所有数据已被写入底层系统时触发。

```javascript
writableStream.on("finish", () => {
    console.log("所有数据已被写入底层系统");
});

writableStream.on("error", (err) => {
    console.error(err);
});
```

## Pipe

`pipe()` 方法用于连接一个可读流到一个可写流。 在 `pipe()` 调用之后，所有从可读流读取的数据都会被写入到可写流。

```javascript
const fs = require("fs");

const readableStream = fs.createReadStream("file.txt");

const writableStream = fs.createWriteStream("file2.txt");

readableStream.pipe(writableStream);
```
