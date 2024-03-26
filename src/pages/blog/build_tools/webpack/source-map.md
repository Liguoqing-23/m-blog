# source-map

代码运行在浏览器上时，是通过打包压缩后的，当代码出现错误时，很难通过压缩后的代码调试。source map 通过从已经压缩的代码映射到源代码，使浏览器能够重构原始源代码，从而更容易调试。

## 使用 source map

首先，可以通过配置 `devtool` 来生成 source map 文件。

```javascript
module.exports = {
    devtool: "source-map",
    // ...
};
```

然后打包后的代码中会生成一个 `sourceMappingURL` 注释，指向 source map 文件。

```javascript
// bundle.js
() => { ... };
//# sourceMappingURL=bundle.js.map
```

如果浏览器支持 source map，会自动加载 source map 文件，从而可以在浏览器中调试源代码。

source map 的 `mappings` 采用 base64-VLQ 编码，`mappings` 记录了所有的映射关系。

`name` 是转换之前的名称。

## devtool 的值

> [!note] Webpack 文档
> https://webpack.js.org/configuration/devtool/

-   `none`：不生成 source map。生产环境默认值。
-   `eval`：生成 source map (不准确)，但不生成文件，生产环境不推荐。开发环境默认值。
-   `source-map`：生成 source map 文件，完整记录，生产环境推荐。
-   `eval-source-map`：生成 source map (准确)，但不生成文件，生产环境不推荐。
-   `inline-source-map`：生成 source map (准确)，并将 source map 作为 DataURL 嵌入到 bundle 中。
-   `cheap-source-map`：生成 source map (准确)，但不包含列信息。低开销，生产环境。
-   `cheap-module-source-map`：类 `cheap-source-map`，对于 loader 转换的 source map 支持更好。
-   `hidden-source-map`：生成 source map 文件，但不在 bundle 中引用。
-   `nosources-source-map`：生成 source map 文件，但不包含源代码。

更多信息可以再深入研读一下 source map 的算法。

> [!note] 更多参考
>
> -   https://juejin.cn/post/7011156613268504606
> -   https://www.51cto.com/article/665239.html
