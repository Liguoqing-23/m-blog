# webpack 性能优化

webpack 的优化基本可以分类为以下几种：

-   优化输出质量（代码压缩、Tree Shaking、Scope Hoisting、代码分割、懒加载等）
-   优化构建速度（cache 等）

> [!note] 官方文档
> https://webpack.js.org/guides/build-performance/

## 优化开发体验

### 配置类型提示

webpack 配置文件是一个 JS 文件，配置 ts 也麻烦，可以用 `@types` 来实现类型提示。

```javascript
// webpack.config.js
/** @type {import("webpack").Configuration} */
module.exports = (env) => {
    return {
        // ...
    };
};
```

同理，babel 配置也可以添加类型提示。

```javascript
// babel.config.js
/** @type {import("@babel/core").ConfigFunction} */
module.exports = (api) => {
    return {
        // ...
    };
};
```

## 代码分割 Code Splitting

> [!note] 官方文档
> https://webpack.js.org/guides/code-splitting/

将一个特别大的 bundle 代码分割成不同的 bundle，然后按需加载，或并行加载，或等浏览器空闲时加载。加快首屏加载速度。Splitting 后可以控制资源加载优先级，进一步提升性能。

有三种方式实现代码分割：

-   入口起点：使用 `entry` 配置手动分割代码
-   防止重复：使用 `SplitChunksPlugin` 防止重复分割代码
-   动态导入：使用 `import()` 动态导入模块

### 多入口 Entry Points

手动配置多入口，将不同的入口文件打包成不同的 bundle。方式最简单，但不够灵活，尽管手动分开了不同部分，但不能动态分开核心代码和非核心代码。如果两个入口文件有公共模块，如 axios、lodash，会导致重复打包。

```javascript
module.exports = {
    entry: {
        index: "./src/index.js",
        about: "./src/about.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
```

不过 webpack 能够解决这个问题，在 `shared` 选项中配置公共模块，webpack 会将公共模块提取到一个单独的 bundle 中。

```javascript
module.exports = {
    entry: {
        index: {
            import: "./src/index.js",
            dependOn: "shared",
        },
        about: {
            import: "./src/about.js",
            dependOn: "shared",
        },
        shared: ["axios", "lodash"],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
```

### 动态导入 Dynamic Imports

动态导入是一种异步加载模块的方式，可以将模块分割成不同的 bundle，按需加载。

史前版本的 webpack 使用 `require.ensure` 实现动态导入，vue2 的古早版本就是用的这种方式，使用起来异常麻烦，现在已不再推荐使用，而是使用 ES6 的 `import()`。

> [!tip] 由于 `import()` 基于 promise 在旧版本浏览器中不支持，需要使用 polyfill。

```javascript
import("./module").then(({ default: module }) => {
    // do something like:
    module.init();
});

// 或者使用 async await
const { default: module } = await import("./module");
module.init();
```

在 webpack v4.6.0+ 后，动态导入支持预获取（prefetch）和预加载（preload）。

-   `prefetch`：将来某些导航下可能需要的资源
-   `preload`：当前导航下可能需要的资源

```javascript
import(/* webpackPrefetch: true */ "./module");
import(/* webpackPreload: true */ "./module");
```

`prefetch` 的原理是构建时在页面头部生成 `<link rel="prefetch" href="module.js">`，浏览器能够在空闲时加载该资源，当父级组件加载完毕后，就会开始获取 `prefetch` 的资源。

`preload` 与父级组件是并行加载的，相比于 `prefetch` 只能在空闲时加载，`preload` 具有更高的优先级。

`preload` 会在页面中生成 `<link rel="preload" href="module.js">`，浏览器加载父级组件时就会开始加载 `preload` 的资源。

### 去除重复代码 Prevent Duplication

前面多入口提到了使用 `shared` 选项配置公共模块，但这种方式不够灵活，不能动态分开核心代码和非核心代码。而且也应该避免多入口，具有多个导入的但入口优化效果更好。下面说说如何使用 `SplitChunksPlugin` 插件实现 Code Splitting。

`SplitChunksPlugin` 插件已经是 webpack 内置的插件。

```javascript
module.exports = {
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
```

`chunks` 选项有三个值：

-   `all`：所有模块都会被分割
-   `async`：只分割异步加载的模块
-   `initial`：只分割同步加载的模块

splitChunks 还有很多配置项，可以根据实际情况进行配置。

> [!note] 官方文档
> https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks

-   `minSize`：模块的最小大小，小于该值不会被分割
-   `maxSize`：模块的最大大小，大于该值会被分割
-   `minChunks`：模块的最小引用次数，小于该值不会被分割
-   `cacheGroups`：缓存组，可以对不同的模块进行不同的分割配置
-   `chunkIds`：分割后的 chunk 的 id 生成方式，可设置 `named`，`deterministic` 等
-   ...

`chunkIds` 常见值：

-   `named`：对调试更友好的可读的 id
-   `deterministic`：在不同的编译中不变的短数字 id。益于长期缓存，生产模式默认
-   `natural`：按使用顺序的数字 id
-   `size`：专注于让初始下载包大小更小的数字 id

> [!note] 开发推荐使用 `named`，生产推荐使用 `deterministic`。

```javascript
module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 定制缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, // 优先级
                    filename: "[id]_vendors.js",
                },
                utils: {
                    test: /[\\/]src[\\/]utils[\\/]/,
                    priority: -20,
                    filename: "[id]_utils.js",
                },
                components: {
                    test: /[\\/]src[\\/]components[\\/]/,
                    priority: -30,
                    filename: "[id]_components.js",
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};
```

### mini-css-extract-plugin

`mini-css-extract-plugin` 是一个独立的 CSS 文件提取插件，可以将 CSS 提取到单独的文件中，而不是将 CSS 以 `<style>` 标签插入到 HTML 中。

本插件基于 webpack v5 的新特性构建，并且需要 webpack 5 才能正常工作。

> [!note] 官方文档
> https://webpack.js.org/plugins/mini-css-extract-plugin/

```bash
npm install mini-css-extract-plugin --save-dev
```

使用 `MiniCssExtractPlugin.loader` 替换 `style-loader`，并在 `plugins` 中配置 `MiniCssExtractPlugin`。

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css", // 输出文件名
            chunkFilename: "[id].css", // 如果有 chunk，输出 chunk 文件名
        }),
    ],
};
```

## CDN

CDN（Content Delivery Network）是内容分发网络，是一种通过网络分布式传递内容的技术，可以加速网站的访问速度。

CDN 的原理是将网站的静态资源（如图片、CSS、JS 等）缓存到离用户最近的 CDN 节点，用户访问时直接从 CDN 节点获取资源。

国际上使用比较多的免费 CDN 有 jsDelivr、cdnjs、unpkg 等，国内有一个 bootcdn。

### 第三方库使用 CDN

一般而言自己开发的项目是不会放到 CDN 上的，但是项目中第三方依赖可以从 CDN 获取。

首先需要配置 `externals`，告诉 webpack 不打包这些模块，而是从外部获取。

```javascript
module.exports = {
    externals: {
        // key 是模块名，value 是全局变量名
        lodash: "_",
        axios: "axios",
    },
};
```

然后配置 `script` 标签引入 CDN。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- ... -->
        <script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.5.0/axios.min.js"></script>
    </head>
    <body>
        <!-- ... -->
    </body>
</html>
```

## Hash、Chunkhash、Contenthash

webpack 有三种 hash 值，分别是 `hash`、`chunkhash`、`contenthash`。

-   `hash`：每次构建时生成的 hash 值，所有文件共用一个 hash 值
-   `chunkhash`：根据 chunk 生成的 hash 值，不同的 chunk 有不同的 hash 值
-   `contenthash`：根据文件内容生成的 hash 值，文件内容不变则 hash 值不变

`hash` 适用于开发环境，`chunkhash` 适用于生产环境，`contenthash` 适用于 CSS 文件。

```javascript
module.exports = {
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ],
};
```

## 代码压缩 TerserPlugin

`TerserPlugin` 是一个 JavaScript 代码压缩插件，是一个 JS 的 Parser、Mangler 和 Compressor 的集合。

> [!note] 官方文档
> https://webpack.js.org/plugins/terser-webpack-plugin/

```bash
npm install terser-webpack-plugin --save-dev
```

```javascript
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false, // 是否提取注释
                terserOptions: {
                    compress: {
                        // 压缩配置
                        drop_console: true, // 去除 console
                        arguments: true, // 去除未使用的函数参数
                    },
                    mangle: true, // 混淆变量名
                    topLevel: true, // 混淆顶级作用域
                    // ...
                },
                parallel: true, // 是否并行压缩
                // ...
            }),
        ],
    },
};
```

### CSS 压缩

如果要压缩 CSS 文件，可以使用 `css-minimizer-webpack-plugin` 插件，底层基于 `cssnano` 实现。

```bash
npm install css-minimizer-webpack-plugin --save-dev
```

```javascript
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    optimization: {
        minimizer: [
            "...",
            new CssMinimizerPlugin({
                parallel: true, // 是否并行压缩
                // ...
            }),
        ],
    },
};
```

## 环境配置分离

webpack 的配置文件一般有两个，一个是开发环境配置文件 `webpack.dev.js`，一个是生产环境配置文件 `webpack.prod.js`。

但是有些配置是相同的，比如 `entry`、`output` 等，可以将这些配置提取到一个公共配置文件 `webpack.common.js` 中，然后通过 `webpack-merge` 插件将不同环境的配置文件合并。

```bash
npm install webpack-merge --save-dev
```

在 `package.json` 中配置 `scripts`。

```json
{
    "scripts": {
        "dev": "webpack --config webpack.dev.js --env development",
        "build": "webpack --config webpack.prod.js --env production"
    }
}
```

编写 `webpack.dev.js` 和 `webpack.prod.js`。

```javascript
// webpack.dev.js
/** @type {import("webpack").Configuration} */
module.exports = () => {
    return {
        mode: "development",
        // ...
    };
};

// webpack.prod.js
/** @type {import("webpack").Configuration} */
module.exports = () => {
    return {
        mode: "production",
        // ...
    };
};
```

编写 `webpack.common.js`。

```javascript
const { merge } = require("webpack-merge");
const dev_config = require("webpack.dev.js");
const prod_config = require("webpack.prod.js");

/** @type {import("webpack").Configuration} */
const common_config = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    // ...
};

module.exports = (env) => {
    const merge_config = env.production ? prod_config() : dev_config();
    return merge(common_config, merge_config);
};
```

## Tree Shaking

### usedExports

Tree Shaking，用于描述移除 JavaScript 上下文中的未引用代码。依赖于 ES2015 模块语法的静态结构特性，例如 `import` 和 `export`。最初由 Rollup 引入此概念。

webpack 通过配置 `usedExports` 来开启依赖分析：

```javascript
module.exports = {
    mode: "production",
    optimization: {
        usedExports: true, // production 模式下默认开启
    },
};
```

开启后，未被引用的代码会被添加注释：

```javascript
// unused harmony export xxx
xxx = () => {};
```

然后通过 `terser-webpack-plugin` 插件的 `mangle` 选项开启压缩。

```javascript
module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: true,
                    // ...
                },
            }),
        ],
    },
};
```

### sideEffects

`sideEffects` 是一个数组，用于配置哪些文件是纯粹的模块，没有副作用，可以安全删除未引用的导出。

在开发时尽量编写纯粹的模块，不要在模块中执行副作用操作，如修改全局变量、修改 DOM 等。

```javascript
// package.json
{
    "sideEffects": false // 所有文件都没有副作用
}

// 如果某个文件就是有副作用，那么可以这样：
{
    "sideEffects": ["side_test.js"] // side_test.js 有副作用
}
```

注意，如果开启了副作用 Tree Shaking，那么通过 `import` 导入的 CSS 或 LESS 都会被当作未被引用而 Shaking 掉，所以使用 sideEffects 要注意风险。

```javascript
{
    "sideEffects": ["*.css", "*.less", "..."]
}
```

### CSS Tree Shaking

CSS Tree Shaking 通过 `PurgeCSS` 插件实现，可以删除未使用的 CSS。

```bash
npm install purgecss-webpack-plugin --save-dev
```

> [!note] 官方文档
> https://purgecss.com/plugins/webpack.html

```javascript
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");
const path = require("path");

module.exports = {
    plugins: [
        new PurgeCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, "src/css/**/*.css", { nodir: true }),
                path.join(...)
            ]),
        }),
    ],
};
```

PurgeCSSPlugin 的参数是必须配置的，`paths` 是一个数组，包含了需要扫描的文件路径。`glob` 能够获取路径下所有文件。

## Scope Hoisting

Scope Hoisting，作用域提升，是 webpack 3 引入的一个新特性，通过分析模块之间的依赖关系，将模块合并到一个函数中，减少模块的闭包作用域，提升代码在浏览器中的执行速度。

> [!note] 官方文档
> https://webpack.js.org/plugins/module-concatenation-plugin/

```javascript
module.exports = {
    mode: "production",
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
};
```

## HTTP 压缩

HTTP 服务器可以通过 `Content-Encoding` 头部来告诉浏览器服务器使用了哪种压缩算法，浏览器收到响应后会自动解压缩。

常见的压缩算法有 `gzip` 和 `br`，`gzip` 是一种通用的压缩算法，`br` 是一种专门为 HTTP 优化的开源压缩算法。

```bash
npm install compression-webpack-plugin --save-dev
```

```javascript
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    plugins: [
        new CompressionPlugin({
            test: /\.js$|\.css$|\.html$/, // 压缩文件类型
            filename: "[path][base].gz", // 输出文件名
            algorithm: "gzip", // 压缩算法
            threshold: 10240, // 大于 10KB 的文件才会被压缩
            minRatio: 0.8, // 压缩比例
        }),
    ],
};
```

## HTML 压缩

`html-webpack-plugin` 插件可以压缩 HTML 文件。

```bash
npm install html-webpack-plugin --save-dev
```

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeComments: true, // 去除注释
                collapseWhitespace: true, // 去除空格
                removeEmptyAttributes: true, // 去除空属性
                // ...
            },
        }),
    ],
};
```

`minify` 选项有很多配置项，具体可以查阅文档。

> [!note] 官方文档
> https://webpack.docschina.org/plugins/html-webpack-plugin/#configuration
>
> https://github.com/jantimon/html-webpack-plugin?tab=readme-ov-file#minification

## loader worker 池

`thread-loader` 插件可以将 loader 放入 worker 池中，提升构建速度。

```bash
npm install thread-loader --save-dev
```

> [!note] 官方文档
> https://webpack.js.org/loaders/thread-loader/

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["thread-loader", "babel-loader"],
            },
        ],
    },
};
```

## 构建时间分析

`speed-measure-webpack-plugin` 插件可以分析 webpack 打包时间。

```bash
npm install speed-measure-webpack-plugin --save-dev
```

```javascript
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    // ...
});
```

## 构建结果分析

### stats.json

```json
// package.json
{
    "scripts": {
        "build": "webpack --profile --json=stats.json"
    }
}
```

然后在网站 https://webpack.github.io/analyse/ 中上传 `stats.json` 文件，即可查看构建报告。

### webpack-bundle-analyzer

`webpack-bundle-analyzer` 插件也可以生成构建报告。

```bash
npm install webpack-bundle-analyzer --save-dev
```

```javascript
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    plugins: [new BundleAnalyzerPlugin()],
};
```

打包后会直接开启一个网页，展示构建报告。
