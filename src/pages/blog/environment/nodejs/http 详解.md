# http 详解

## 开启一个 http 服务

先上一个简单例子：

```javascript
// index.js
const http = require("http");

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000/");
});
```

listen 方法的参数有三个：

-   第一个参数是端口号
-   第二个参数是主机名，可选，默认为 `localhost`
-   第三个参数是回调函数，当服务启动后会调用这个回调函数

使用 node 命令启动服务：

```bash
node index.js
```

然后在浏览器中访问 `http://localhost:3000/`，能够看到浏览器中显示 `Hello World`。

## request 对象

向服务器发送请求时，会携带一些信息，这些信息会被封装到 `request` 对象中，可以在服务端通过这个对象获取到这些信息。

-   `request.url`：请求的 URL 地址
-   `request.method`：请求的方法，如 `GET`、`POST` 等
-   `request.headers`：请求头信息
-   `request.httpVersion`：HTTP 协议版本
-   ...

url 模块提供了一些方法，可以方便地解析 URL 地址：

```javascript
const url = require("url");

const fackURL = "http://localhost:3000/?name=jack&age=18#hash";

// 解析 URL 地址
const urlObj = url.parse(fackURL, true);
console.log(urlObj);

// 获取 URL 地址中的查询参数
console.log(urlObj.query);
const query = new URLSearchParams(urlObj.query);
console.log(query.get("name"));

// 获取 URL 地址中的路径
console.log(urlObj.pathname);

// 获取 URL 地址中的 hash
console.log(urlObj.hash);

// ...
```

## response 对象

服务端接收到请求后，需要返回一些信息给客户端，这些信息会被封装到 `response` 对象中，可以通过这个对象设置返回的信息。

-   `response.statusCode`：状态码
-   `response.setHeader(name, value)`：设置响应头信息
-   `response.write(data)`：写入响应体信息
-   `response.end()`：结束响应

## 一个简单的静态文件服务器

```javascript
const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, req.url);

const server = http.createServer((req, res) => {
    fs.readFile(filePath)
        .then((data) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        })
        .catch((err) => {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");

            console.error(err);
        });
});

server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000/");
});
```
