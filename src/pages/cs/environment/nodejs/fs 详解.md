# fs 详解

fs，File System，是 Node.js 的核心模块，负责文件的读写操作。借助 Node 封装好了的文件系统 API，我们可以开发跨平台服务器。

> [!note] 官方文档
> https://nodejs.org/docs/latest/api/fs.html

## fs 三种操作方式

fs 提供了三种操作方式：

-   同步操作文件，代码会被阻塞，直到文件操作完成。
-   异步操作文件，代码不会被阻塞，文件操作完成后会执行回调函数。
-   Promise 封装的异步操作文件，代码不会被阻塞，文件操作完成后会执行 Promise 的 then 方法。

### 同步操作文件

::: code-group

```javascript [ES6]
import fs from "fs";

const res = fs.readFileSync("test.txt", "utf8");
console.log(res);
```

```javascript [CJS]
const fs = require("fs");

const res = fs.readFileSync("test.txt", "utf8");
console.log(res);
```

:::

> [!note] 如果不加 `utf8` 参数，返回的是一个 Buffer 对象。因为 fs 读取文件本质是读二进制，如果要转换为字符串，需要指定编码格式。

### 异步操作文件

::: code-group

```javascript [ES6]
import fs from "fs";

fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
```

```javascript [CJS]
const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
```

:::

### Promise Promise 异步操作文件

::: code-group

```javascript [ES6]
// import fs from "fs/promises";
// import * as fs from 'fs/promises';
import { promises as fs } from "fs"; // 都可以

fs.readFile("test.txt", "utf8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```

```javascript [CJS]
const fs = require("fs").promises;

fs.readFile("test.txt", "utf8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
```

:::

## fs 文件描述符

File Descriptor，文件描述符，是一个非负整数，用于标识一个已打开的文件。在 OS 上们对于每个进程，内核都维护着一张打开文件的表，表中的每一项都是文件描述符。所有 FS 都使用这些文件描述符来指代和跟踪每个文件。在 Node 中，抽象化了 OS 之间不同的差异性。

### 打开文件

```javascript
fs.open("test.txt", "r")
    .then((fd) => {
        console.log(fd);
    })
    .catch((err) => {
        console.log(err);
    });
```

### 关闭文件

```javascript
fs.open("test.txt", "r")
    .then((fd) => {
        return fd.close();
    })
    .then(() => {
        console.log("File closed successfully");
    })
    .catch((err) => {
        console.log(err);
    });
```

### 读取文件

```javascript
fs.open("test.txt", "r")
    .then((fd) => {
        return fs.readFile(fd, "utf-8").finally(() => {
            fd.close();
        });
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
```

### 写入文件

```javascript
fs.open("test.txt", "w")
    .then((fd) => {
        return fs.writeFile(fd, "Hello World").finally(() => {
            fd.close();
        });
    })
    .then(() => {
        console.log("File written successfully");
    })
    .catch((err) => {
        console.log(err);
    });
```

### 读取文件信息

```javascript
fs.stat("test.txt")
    .then((stats) => {
        console.log(stats);
    })
    .catch((err) => {
        console.log(err);
    });
```

### 删除文件

```javascript
fs.unlink("test.txt")
    .then(() => {
        console.log("删除成功");
    })
    .catch((err) => {
        console.log(err);
    });
```

### 创建文件

```javascript
fs.open("test.txt", "w")
    .then((fd) => {
        fd.close();
    })
    .then(() => {
        console.log("File created successfully");
    })
    .catch((err) => {
        console.log(err);
    });
```

## 参数说明

### flag

| flag | 描述                                   |
| ---- | -------------------------------------- |
| r    | 读取文件。文件不存在则抛出异常。       |
| r+   | 读取并写入文件。文件不存在则抛出异常。 |
| w    | 写入文件。文件不存在则创建文件。       |
| w+   | 读取并写入文件。文件不存在则创建文件。 |
| a    | 追加文件。文件不存在则创建文件。       |
| a+   | 读取并追加文件。文件不存在则创建文件。 |

## fs 操作文件夹

### 创建文件夹

```javascript
fs.mkdir("test")
    .then(() => {
        console.log("文件夹创建成功");
    })
    .catch((err) => {
        console.log(err);
    });
```

### 读取文件夹

读字符串

```javascript
fs.readdir("test")
    .then((files) => {
        console.log(files);
    })
    .catch((err) => {
        console.log(err);
    });
// [ 'test.txt', 'dir' ]
```

读信息

```javascript
fs.readdir("test", { withFileTypes: true })
    .then((files) => {
        console.log(files);
    })
    .catch((err) => {
        console.log(err);
    });
// [ Dirent { name: 'test.txt', [Symbol(type)]: 1 } ]
// [ Dirent { name: 'dir', [Symbol(type)]: 2 } ]
```

判断是否是文件夹

```javascript
fs.readdir("test", { withFileTypes: true })
    .then((files) => {
        files.forEach((file) => {
            if (file.isDirectory()) {
                console.log(file.name + " 是文件夹");
            } else {
                console.log(file.name + " 是文件");
            }
        });
    })
    .catch((err) => {
        console.log(err);
    });
// test.txt 是文件
// dir 是文件夹
```

递归读取所有文件

```javascript
function readDir(dir) {
    fs.readdir(dir, { withFileTypes: true })
        .then((files) => {
            files.forEach((file) => {
                if (file.isDirectory()) {
                    readDir(dir + "/" + file.name);
                } else {
                    console.log(dir + "/" + file.name);
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

readDir("test");
// test/test.txt
// test/dir/test.txt
```

### 删除文件夹

```javascript
fs.rmdir("test")
    .then(() => {
        console.log("文件夹删除成功");
    })
    .catch((err) => {
        console.log(err);
    });
```

递归删除文件夹下所有文件

```javascript
async function removeDir(dir) {
    const files = await fs.readdir(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            await removeDir(dir + "/" + file.name);
        } else {
            await fs.unlink(dir + "/" + file.name);
        }
    }
    await fs.rmdir(dir);
}

removeDir("test");
```

### 重命名文件夹

```javascript
fs.rename("test", "test2")
    .then(() => {
        console.log("文件夹重命名成功");
    })
    .catch((err) => {
        console.log(err);
    });
```
