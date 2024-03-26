# webpack 基本配置

> [!note] 官网
> https://webpack.js.org/

## 简单介绍

webpack is a static module bundler for modern JavaScript applications.

-   webpack 是一个 bundler，可以帮助进行打包；
-   static 指的是 webpack 可以将所有的资源打包成静态文件，可以最终部署到服务器；
-   moudle 指的是 webpack 可以处理模块化的开发，如 CommonJS、ESM、AMD 等；
-   modern 支持 ES6+，解决的大量开发问题。

### webpack 和 webpack-cli 的关系

-   执行 webpack 命令，会执行 `node_moudles/.bin` 下的 webpack；
-   webpack 在执行时依赖 webpack-cli；
-   webpack-cli 执行时，利用 webpack 进行编译、打包；
-   webpack-cli 和 webpack 二者缺一不可。

## 安装

```bash
npm install webpack webpack-cli --save-dev
```

在 `package.json` 中创建 `scripts` 命令：

```json
{
    "scripts": {
        "build": "webpack"
    }
}
```

在 `scripts` 下执行的命令不需要使用 `npx` 就会自动找到 `node_modules/.bin` 下的 webpack，而不是全局的 webpack。

## 基本配置

webpack 默认打包会在目录下生成 dist 文件夹，其中的代码会被压缩丑化，并且保留 ES6+ 语法。

```bash
npm run build
```

webpack 会默认查找当前目录下的 `src/index.js` 作为依赖关系图的入口文件。

若想要修改 webpack 的默认行为，可以在项目根目录下创建 `webpack.config.js` 文件，文件名是固定的，webpack 会自动查找这个文件。

```javascript
const path = require("path");

module.exports = {
    // context: path.resolve(__dirname, "src"), // 上下文路径，尽量不改动
    entry: "./src/main.js", // 相对于 context 的路径
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
```

当然，这个文件名也是可以更改的，但是要在 `package.json` 中指定配置文件的路径：

```json
{
    "scripts": {
        "build": "webpack --config webpack.config.js"
    }
}
```

## 处理 CSS 和 Less

### CSS-loader

webpack 默认只能处理 js 文件，如果想要处理 css 文件，需要安装 `css-loader` 和 `style-loader`。

```bash
npm install css-loader style-loader --save-dev
```

在 `webpack.config.js` 中配置：

```javascript {6}
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // 从右往左执行
            },
        ],
    },
};
```

`use` 中的 loader 会从右往左执行，`css-loader` 会将 css 文件转换为 js 文件，`style-loader` 会将 js 文件转换为 style 标签插入到 html 文件中。

`use: ["style-loader", "css-loader"]` 是一种语法糖，等价于：

```javascript
use: [
    {
        loader: "style-loader",
        // options: {...} // 可选属性，配置 loader
    },
    {
        loader: "css-loader",
    },
];
```

### Less-loader

安装 `less-loader` 时会自动安装 `less`，当然也可以手动安装：

```bash
npm install less less-loader --save-dev
```

配置如下：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
};
```

## 处理 CSS 兼容性

### PostCSS

PostCSS 是一个 CSS 处理工具，可以帮助我们处理 CSS 文件，如添加浏览器前缀、压缩 CSS 等。

PostCSS 本身又是一个插件化的工具，可以通过插件来扩展功能，上述的功能都需要告诉 PostCSS 如何来处理。

先来添加 PostCSS 的 loader，并添加一个可以自动添加浏览器前缀的插件 `autoprefixer`：

```bash
npm install postcss-loader autoprefixer --save-dev
```

然后在项目根目录下创建 `postcss.config.js` 文件：

```javascript
module.exports = {
    plugins: [require("autoprefixer")],
};
```

### postcss-preset-env

`autoprefixer` 只能添加浏览器前缀，如果想要使用一些新的 CSS 特性，可以利用 `postcss-preset-env` 插件。一般开发也是用后者。

这个插件相当于集成了上一个插件，能够帮助我们将一些现代的 CSS 特性转成大多数浏览器认识的 CSS，并根据目标浏览器或者运行时环境添加所需的 polyfill。

```bash
npm install postcss-preset-env --save-dev
```

在 `postcss.config.js` 中配置：

```javascript {7,16}
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
};

// postcss.config.js
module.exports = {
    // plugins: [require("postcss-preset-env")],
    plugins: ["postcss-preset-env"], // 等价于上面的写法
};
```

## 处理静态资源

### asset module types

webpack 5 之后，推荐使用 `asset module` 来处理静态资源，如图片、字体等，替代了 webpack 5 以前使用的一大堆 loader，如 raw-loader、url-loader、file-loader 等。

资源模块类型 asset module type 添加了四种新类型：

-   asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
-   asset/inline 导出一个资源的 data URL。之前通过使用 url-loader 实现。
-   asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
-   asset 在导出一个 data URL 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset",
            },
        ],
    },
};
```

如果要想自定义文件的输出路径和文件名，可以使用 `generator` 选项：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset",
                generator: {
                    filename: "images/[name].[hash][ext]",
                },
            },
        ],
    },
};
```

-   `images` 形成路径文件夹
-   `[name]` 为文件名
-   `[hash]` 为文件 hash，MD4 生成 128 位 hash 值，通过 `[hash:8]` 可以指定 hash 长度
-   `[ext]` 为文件后缀

如果想要将小于 8kb 的图片转换为 base64，而大于 8kb 的图片转换为文件，可以使用 `parser` 选项，制定 dataUrlCondition，添加 maxSize 选项：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024, // 8kb
                    },
                },
            },
        ],
    },
};
```

## 处理 ES6+

babel 用于将 ES6+ 语法转换为 ES5 语法，实现浏览器的向后兼容。

```bash
npm install @babel/core @babel/preset-env babel-loader --save-dev
```

-   `@babel/core` 是 babel 的核心模块；
-   `@babel/preset-env` 是 babel 的预设模块，用于将 ES6+ 语法转换为 ES5 语法；
-   `babel-loader` 是 webpack 的 loader，用于将 ES6+ 语法转换为 ES5 语法。

在 `webpack.config.js` 中配置：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
```

在 `babel.config.js` 中配置：

```javascript
// webpack.config.js
module.exports = {
    module: {
        rules: ["babel-loader"],
    },
};

// babel.config.js
module.exports = {
    presets: ["@babel/preset-env"],
};
```

babel 有三种常见预设：

-   `@babel/preset-env`：根据配置的目标环境自动将 ES2015+ 代码转换为 ES5；
-   `@babel/preset-react`：用于编译 JSX 语法；
-   `@babel/preset-typescript`：用于编译 TypeScript 语法。

## 处理 Vue

### vue-loader

```bash
npm install vue vue-loader @vue/compiler-sfc --save-dev
```

在 `webpack.config.js` 中配置：

```javascript
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
};
```

## 处理 React

在编写 React 代码时使用的是 jsx 语法，jsx 可以直接通过 babel 转换。对 jsx 进行处理需要如下插件：

-   `@babel/plugin-syntax-jsx`：用于解析 jsx 语法；
-   `@babel/plugin-transform-react-jsx`：用于将 jsx 转换为 React.createElement。
-   `@babel/preset-transform-react-display-name`：用于在 React DevTools 中显示组件名称。

```bash
npm install @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx @babel/preset-transform-react-display-name --save-dev
```

很显然！太长了，这些也是有预设的，可以直接使用 `@babel/preset-react`。

```bash
npm install @babel/preset-react --save-dev
```

在 `webpack.config.js` 中配置：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
```

## 处理 TypeScript

### 方式一 ts-loader

```bash
npm install typescript ts-loader --save-dev
```

在 `webpack.config.js` 中配置：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};
```

ts-loader 必须要有 `tsconfig.json` 配置文件，可以通过 `tsc --init` 生成一个默认配置文件。

开发中不推荐使用 ts-loader，因为走 ts-loader 无法利用 polyfill。

### 方式二 babel-loader

```bash
npm install @babel/preset-typescript --save-dev
```

在 `webpack.config.js` 中配置：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            [
                                "@babel/preset-typescript",
                                { corejs: 3, useBuiltIns: "usage" },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};
```

开发中也不推荐单独使用 `@babel/preset-typescript`，因为它只能转换 TypeScript 语法，无法检测 TypeScript 的类型错误。

### 处理 ts 的最佳实践

-   使用 `tsc` 进行类型检查；
-   使用 `babel-loader` 进行转换。

在 `package.json` 中配置 tsc：

```json
{
    "scripts": {
        "type-check": "tsc --noEmit",
        "type-check:watch": "tsc --noEmit --watch"
    }
}
```

`noEmit` 选项表示只进行类型检查，不生成文件。

## resolve 配置解析

resolve 可以帮助 webpack 从每个 `require/import` 语句中解析出模块的路径。

webpack 使用 `enhanced-resolve` 来解析文件路径。

webpack 能解析三种文件路径：

-   绝对路径：直接返回；
-   相对路径：相对于当前文件，拼接上下文路径，生成绝对路径；
-   模块路径：从 `node_modules` 中查找，设置别名 alias 可以替换初始模块路径。

如果是文件，webpack 会使用 `resolve.extensions` 尝试添加文件后缀名。

如果是目录，会根据 `resolve.mainFiles` 配置项中指定的文件顺序查找（默认值是 `['index']`），然后使用 `resolve.extensions` 尝试添加文件后缀名。

### extensions

> [!note] 官网
> https://webpack.js.org/configuration/resolve/#resolveextensions
>
> https://webpack.js.org/configuration/resolve/#resolvemainfiles

extensions 默认值是 `['.js', '.json', '.wasm']`，如果想要添加 `.vue` 后缀，可以这样配置：

```javascript
module.exports = {
    resolve: {
        extensions: [".js", ".json", ".vue", ".ts", ".jsx", ".tsx"],
    },
};
```

之后就可以在引入文件时省略后缀名。

```javascript
// import App from "./App.vue";
import App from "./App";
```

### alias

当我们引入文件时，webpack 会根据文件路径查找文件，如果文件路径很长，可以使用 alias 来简化路径。

```javascript
const path = require("path");

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};
```

之后就可以这样引入文件：

```javascript
// import App from "./src/App";
import App from "@/App";

// import { Button } from "../../components/Button";
import { Button } from "@/components/Button";
```

## plugins 及常用插件

> [!note] 官网
> https://webpack.js.org/concepts/#plugins

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

plugins 是 webpack 的另一个核心。如果说 loader 只能用于特定模块类型转换，那么 plugins 则能够用于执行更加广泛的任务，如打包优化、资源管理、环境变量注入等。

比如 loader 能够编译 css 文件，但 loader 只能将样式插入到 style 中，无法单独抽取出 css 文件，而这项事情就可以利用 plugin 实现。

### CleanWebpackPlugin

每次打包时，都会生成一个新的 dist 文件夹，如果想要在打包前清空 dist 文件夹，对之前的打包项做一个覆盖，可以使用 `clean-webpack-plugin`。

```bash
npm install clean-webpack-plugin --save-dev
```

在 `webpack.config.js` 中配置：

```javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    plugins: [new CleanWebpackPlugin()],
};
```

该插件已经在 webpack 5 中内置，无需安装，只需在 `output` 中配置 `clean: true` 即可。

> [!note] 官网
> https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder

```javascript
module.exports = {
    output: {
        clean: true,
    },
};
```

### HtmlWebpackPlugin

在 src 中我们有编写 index.html 文件，但 bundle 之后就没有了。然而项目部署时是需要 index.html 作为入口的，这时就需要使用 `html-webpack-plugin`。

```bash
npm install html-webpack-plugin --save-dev
```

在 `webpack.config.js` 中配置：

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack",
            template: "./src/index.html", // 自定义模板
        }),
    ],
};
```

我们可以自定义自己的 html 模板文件：

```html {7}
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

### DefinePlugin

`DefinePlugin` 允许在编译时创建全局常量，这样可以在代码中引用这些值，而不必将这些值硬编码到代码中。

该插件是 webpack 内置的插件，无需安装。

```javascript
const { DefinePlugin } = require("webpack");

module.exports = {
    plugins: [
        new DefinePlugin({
            BASE_URL: JSON.stringify("https://api.example.com"),
        }),
    ],
};
```

在代码中可以这样引用：

```javascript
console.log(BASE_URL); // "https://api.example.com"
```

或者在 html 模板中：

```html {3}
<html>
    <head>
        <link rel="icon" href="<%= BASE_URL %>/favicon.ico" />
    </head>
</html>
```

## 开发模式 Mode

webpack 有三种模式：`development`、`production`、`none`。默认值是 `production`。

> [!note] 官网
> https://webpack.js.org/configuration/mode/

往往在正式开发中会将 mode 对应的配置抽取到单独的文件中，如 `webpack.dev.js` 和 `webpack.prod.js`，然后在 `package.json` 中配置：

```json
{
    "scripts": {
        "build": "webpack --config webpack.prod.js",
        "start": "webpack serve --config webpack.dev.js"
    }
}
```

如果在 dev 和 prod 中有一些共同的配置，可以使用 `webpack-merge` 来合并配置。

```bash
npm install webpack-merge --save-dev
```

```javascript
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
});
```

## 开启服务 devServer

webpack-dev-server 是一个小型的 Node.js Express 服务器，它使用 webpack-dev-middleware 来服务于 webpack 打包生成的资源文件。

```bash
npm install webpack-dev-server --save-dev
```

在 `package.json` 中配置：

```json
{
    "scripts": {
        "start": "webpack serve"
    }
}
```

> webpack-dev-server 在编译后不会写入任何文件，而是将 bundle 驻留在内存中。webpack-dev-server 依赖了 memory-fs 库。

### HMR

因为在 live reloading 下每次修改代码，导致整个页面都会自动刷新，所以引入了 Hot Module Replacement (HMR) 允许在应用程序运行时更新模块，而无需刷新整个页面。

HMR 有几个方式来提高开发效率：

-   不会重新加载整个页面，而是只更新修改的模块，保留一些应用程序的状态；
-   修改样式表和 js 时，会立即在浏览器更新，相当于在 devtools 中调试样式。

默认情况下 HMR 已经开启。

```javascript
module.exports = {
    devServer: {
        hot: true,
    },
};
```

然而如果我们不指定那些模块需要 HMR，那么修改模块时，还是会整个页面都会刷新。

通过 `module.hot.accept` 来指定哪些模块需要 HMR。

```javascript
if (module.hot) {
    module.hot.accept("./moduleA.js", function () {
        console.log("Accepting the updated printMe module!");
        printMe(); // 重新执行 printMe 函数
    });
}
```

实际上在正式开发中已经不需要再手动的配置 HMR。vue 有 vue-loader，react 有 react-refresh，都已经内置了 HMR。

### Host

默认情况下，webpack-dev-server 会监听 `localhost`，如果想要监听其他主机，可以通过 `host` 选项来配置。

```javascript
module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 8000,
        open: true, // 自动打开浏览器
        compress: true, // 启用静态文件 gzip 压缩
    },
};
```
