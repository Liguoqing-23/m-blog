# Vite 篇介绍

## 1. 什么是构建工具

成熟的构建工具可以帮助我们完成以下工作：

-   优化开发体验：
    -   模块热替换 \[HMR\] Hot Module Replacement：在不刷新浏览器的情况下替换、添加或删除模块。
    -   跨域代理：解决开发环境下的跨域问题。
    -   本地服务：提供一个本地服务，方便开发调试。
-   模块化开发：
    -   node_modules：支持引入第三方模块。
-   处理语法兼容性：
    -   代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS、Babel 编译 ES6+ 语法 为 ES5 语法等。
    -   代码校验：在代码提交前校验代码是否符合规范。
-   提高性能：
    -   文件优化：压缩 JavaScript、CSS、HTML 代码、压缩图片等。
    -   代码分割：将代码分割成小块，以便按需加载。
    -   代码合并：将多个文件合并成一个文件，减少网络请求。
    -   代码压缩：压缩代码体积，加快加载速度。
-   提高安全性：
    -   代码混淆：将代码混淆，增加代码安全性。

有了**自动化**的构建工具，我们可以专注于业务逻辑的开发，不用关心代码如何在不同浏览器上运行，只需首次将集成配置好，后续的开发只需执行相对应的命令即可。

### 1.1. 常见的构建工具

-   Gulp
-   Grunt
-   Parcel
-   Rollup
-   Brunch
-   ESBuild
-   Webpack
-   Vite

## 2. Vite 的优势

> 现实问题：https://cn.vitejs.dev/guide/why.html#the-problems
>
> -   在浏览器支持 ES 模块之前，JavaScript 并没有提供原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。
> -   时过境迁，我们见证了诸如 webpack、Rollup 和 Parcel 等工具的变迁，它们极大地改善了前端开发者的开发体验。
> -   **然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。**
> -   Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。

webpack 的构建过程导致 webpack 的冷启动时间较长，js 的代码越多，构建的时间越长。而且 webpack 也无法修改造成这样结果的构建逻辑。

webpack 允许如下代码：

```javascript
import { vue } from "vue"; // es6 模块
const lodash = require("lodash"); // commonjs 模块
```

webpack 通过 ast 分析出所有 js 的 import 和 export 操作，最终 webpack 会编译为：

```javascript
((function (modules) {
    var __webpack_require__ = function () {
        // ...
    };
    // 读取配置
    modules[entry](webpack_require);
}),
{
    "index.js": function (webpack_require) {
        // ...
    },
})();
```

所以 webpack 支持多种模块化规范，所以在一开始需要统一模块化，因此要将所有依赖都处理一遍。

webpack 更关注的是**兼容性**。

而 Vite 则是先启动服务，再载入从 entry 开始所依赖到的模块，然后再编译，所以 Vite 的启动速度会比 webpack 快很多。

Vite 更关注的是浏览器端的**开发体验**。

## 3. Vite 做了什么？

> 创建一个项目

::: code-group
```html [index.html]
// ...
<body>
    <script type="module" src="./index.js"></script> // [!code focus]
</body>
// ...
```

```js [index.js]
import lodash from "lodash";

console.log(lodash);
```
:::

打开浏览器就可以看到控制台报的错误：

```js
Uncaught TypeError: Failed to resolve module specifier "lodash". // [!code error]
Relative references must start with either "/", "./", or "../". // [!code error]
```

这个错误是说，不可导入非绝对路径和非相对路径。这是因为 ES 不知道 node_modules 路径，事实上 node_modules 中的依赖有可能成千上万，可能实际开发只引用了一个 vue 或 lodash， 但这些依赖可能还有更多子依赖，如果 ES 处理了一个 `import`，就将有可能发送成千上万的网络请求。

> 使用 Vite

::: code-group
```bash
npm install vite -D
```

```json [package.json]
{
    "scripts": {
        "dev": "vite" // [!code focus]
    }
}
```

```bash
npm run dev
```
:::

打开浏览器，可以看到依赖正确载入了。可以看到，我没有配置任何东西，就可以直接使用了，因为 Vite 是开箱即用 (out of box) 的。