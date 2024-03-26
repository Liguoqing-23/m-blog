# babel 基本使用

## 使用 babel

### 命令行使用

先安装依赖，需要安装 `@babel/core` 和 `@babel/cli` 两个包，`@babel/core` 是 babel 的核心包，`@babel/cli` 是 babel 的命令行工具。

```bash
npm install --save-dev @babel/core @babel/cli
```

然后使用 `npx` 命令来执行 `babel`，`src` 是源文件目录，`-d lib` 是输出到 `lib` 目录。

```bash
npx babel src -d lib
```

默认情况下，babel 不会做任何处理，只是生成 AST，然后直接输出到目标目录。如果要做处理，则需要安装对应的插件。安装一个 babel 的预设来做一个演示：

```bash
npm install --save-dev @babel/preset-env
npx babel src -d lib --presets=@babel/preset-env
```

来看结果：

```javascript
// src/index.js
const name = "name";
const foo = (name) => {
    console.log(name);
};
foo();

// lib/index.js
("use strict");
var name = "name";
var foo = function foo(name) {
    console.log(name);
};
foo();
```

### babel 的其他使用方式

[在 webpack 中使用 babel](/blog/build_tools/webpack/webpack%20基本配置#处理-es6)

## babel 原理

babel 的原理是将源代码转换成 AST，然后再将 AST 转换成目标代码。这个过程可以分为三个阶段，即解析阶段 (parsing)、转换阶段 (transformation) 和生成阶段 (code generation)，这是编译器的基本工作流程。实际上 babel 就是一种编译器，就是将一种语言（ES6+）转换成另一种语言（ES5）。

> [!note] compiler 学习
> https://github.com/jamiebuilds/the-super-tiny-compiler

## 浏览器兼容性

由于前端发展的历史性，前端规范的发展一直都保持着向后兼容，随着代码量的提升，代码复杂度的提升，需要考虑的兼容性问题也就越多，因此很多帮助解决兼容性问题的工具也就应运而生。有了这些工具，编写程序代码更专注于业务，兼容性的问题交给工具去解决。

> [!note] 关于浏览器支持性，可以查看网站：
> https://caniuse.com/usage-table

但是我们仍然需要配置需要兼容到哪些浏览器，如果一个一个说明这个浏览器需要兼容，那个浏览器不需要兼容，太麻烦。browserslist 就是为了解决这个问题，只需要配置浏览器的市场占有率，browserslist 就会自动帮你配置需要兼容的浏览器。

Browserslist 是在不同的前端工具之间，共享目标浏览器和 NodeJS 版本的配置的工具。

而 browserslist 的底层其实也是去查询 [caniuse](https://caniuse.com/) 的数据，然后根据配置的浏览器版本，来生成需要兼容的浏览器。

> [!note] browserslist 文档
> http://browserl.ist/

### Browserslist 规则

1. defaults：默认配置，包括 `> 0.5%, last 2 versions, Firefox ESR, not dead`。

-   `> 0.5%`：全球使用率超过 0.5% 的浏览器。
-   `last 2 versions`：每个浏览器的最后两个版本。
-   `Firefox ESR`：Firefox 的 ESR 版本，有些组织和学校在用的专用版本。
-   `not dead`：24 个月内有更新的浏览器。

2. > 0.5%：全球使用率超过 0.5% 的浏览器。

-   `> 5% in CN`：中国使用率超过 5% 的浏览器。
-   `>= 5% in my stats`：自定义统计数据中使用率超过 5% 的浏览器。
-   `cover 99.5%`：覆盖全球 99.5% 的浏览器。

更多写法还是看看官网吧，平时很少用得到。

### 命令行使用 browserslist

安装 babel 的时候，会自动安装 browserslist，因为 babel 也依赖这个库。脱离 babel 单独使用 browserslist，可以使用 `browserslist` 命令。

```bash
npx browserslist # 查看当前目录的配置，列出需要兼容的浏览器
```

修改规则：

```bash
npx browserslist "> 1%, last 2 versions, not dead"
```

这些规则之间默认是 `or` 的关系，如果需要 `and` 关系，可以使用 `and` 关键字：

```bash
npx browserslist "> 1% and last 2 versions and not dead"
```

还有 `not` 关键字，表示排除某些浏览器：

```bash
npx browserslist "> 1% and last 2 versions and not dead and not IE 11"
```

### 配置 browserslist

browserslist 的配置文件有多种方式，可以是 `.browserslistrc` 文件，也可以是 `package.json` 文件的 `browserslist` 字段。

在 `package.json` 文件中配置：

```json
{
    "browserslist": ["> 1%", "last 2 versions", "not dead"]
}
```

或者在项目根目录下创建 `.browserslistrc` 文件：

```yaml
# .browserslistrc
> 1%
last 2 versions
not dead
```

### babel 配置浏览器兼容性

babel 可以单独设置 `target` 属性来配置浏览器兼容性：

```javascript
// babel.config.js
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: "> 1%, last 2 versions, not dead",
            },
        ],
    ],
};
```

但是这样配置的话就只能在 babel 中生效，如果有其他工具也需要使用这个配置，就需要单独配置一遍，所以使用 browserslist 来配置浏览器兼容性，能够在 u 东哥前端工具之间进行共享浏览器兼容性的配置信息。

## babel 的配置文件

1.  `.babelrc.json`：或者 `.babelrc`，JSON 格式。（不推荐）
2.  `.babel.config.js`：CommonJS 格式，可以使用 `module.exports` 导出配置。（推荐）

第一种方式是早期的配置方式，但是在 monorepo 等场景下，比较麻烦。

第二种方式是新的配置方式，在 monorepo 下可以直接作用于所有的包，只需要在根目录配置一个文件即可。

## polyfill 基本使用

### 什么是 polyfill

polyfill 是一个 JavaScript 代码片段，用于实现浏览器不支持的原生 API。例如，如果浏览器不支持 ES6 的 Promise，可以使用 polyfill 来实现 Promise。

### 引入 polyfill

在项目中引入 polyfill 有两种方式：

1. 使用 `@babel/polyfill`，这是 babel 提供的一个 polyfill，它会自动引入所有的 polyfill。（不推荐使用）
2. 使用 `core-js` 和 `regenerator-runtime/runtime`，可以根据需求引入需要的 polyfill。（推荐）

```bash
npm install core-js regenerator-runtime --save
```

然后需要在 `babel.config.js` 中配置：

```javascript
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: 3, // 根据 core-js 版本来配置
            },
        ],
    ],
};
```

`useBuiltIns` 有三个值：

-   `false`：不引入任何 polyfill。如果是 `false`。
-   `entry`：根据配置的 `core-js` 版本，引入所有的 polyfill。
-   `usage`：根据代码中使用的特性，自动引入需要的 polyfill。

如果 babel 不处理第三方库，那么 `usage` 不会识别到第三方库的依赖，这时候可以使用 `entry`，引入所有的 polyfill，并且需要在入口文件引入 `core-js` 和 `regenerator-runtime/runtime`。

```javascript
// src/index.js
import "core-js/stable";
import "regenerator-runtime/runtime";
```
