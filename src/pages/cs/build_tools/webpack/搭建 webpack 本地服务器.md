# 搭建 webpack 本地服务器

搭建一个本地开发服务器，可以大大增加开发效率。

## webpack-dev-server

### 安装

```bash
npm install webpack-dev-server --save-dev
```

### 配置 script

```json
{
    "scripts": {
        "start": "webpack-dev-server --open"
    }
}
```

## webpack 静态资源目录配置

默认 webpack 的静态资源目录是 `public`，通过如下方式自定义：

```javascript
module.exports = {
    devServer: {
        static: ["public", "costomDir"],
    },
};
```

## Proxy

跨域是指浏览器的同源策略，当协议、域名、端口号有一个不同的时候，就会发生跨域。

开发阶段，如果后端没有开启跨域，前端可以通过配置 proxy 来解决跨域问题。

```javascript
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: { "^/api": "" },
                changeOrigin: true,
            },
        },
    },
};
```

`target` 是代理的目标地址，`pathRewrite` 是重写路径。

```javascript
fetch("/api/users");
// => http://localhost:3000/users
```

-   `target`：代理的目标地址
-   `pathRewrite`：重写路径，将 `/api` 替换为 `""`
-   `changeOrigin`：是否改变源，`header` 中的 `host` 会被设置为 `target`

如果后端校验了 `host`，则请求源地址和目标地址不一致，会导致请求失败。开启 `changeOrigin` 后，`header` 中的 `host` 会被设置为 `target`。

### proxy 为什么能够解决跨域

当本地浏览器发送请求后，代理服务器会将请求转发到目标服务器，目标服务器返回数据后，代理服务器再将数据返回给本地 webpack 服务器，本地 webpack 服务器再将数据返回给浏览器。

之所以代理服务器能够解决跨域问题，是因为服务器之间请求数据不存在跨域行为，跨域行为是浏览器的安全策略。

## historyApiFallback

在开发 SPA 时进行路由跳转后，刷新页面会出现 404，因为服务器实际没有这个路径资源，前端的路由跳转实际不刷新页面。配置 `historyApiFallback` 可以解决这个问题。

```javascript
module.exports = {
    devServer: {
        historyApiFallback: true,
    },
};
```

`historyApiFallback` 的值有三种：

-   `true`：所有路径都会执行 `index.html`，适用于 SPA
-   `false`：不执行 `index.html`
-   `object`：自定义配置

```javascript
module.exports = {
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /^\/$/, to: "/views/404.html" }],
        },
    },
};
```

`historyApiFallback` 基于 connect-history-api-fallback 库实现。

> [!note] CHAF
> https://github.com/bripkens/connect-history-api-fallback
