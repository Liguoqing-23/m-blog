# nodejs commonJS 的本质

## CommonJS 规范

CommonJS 是一种模块化规范，Node.js 遵循这个规范。CommonJS 规范定义的模块分为以下几种：

-   模块引用 `require`
-   模块定义 `exports`
-   模块标识 `module`

::: code-group

```js [moduleA.js]
let count = 0;
function add() {
    count++;
}
function getCount() {
    return count;
}
exports.add = add;
exports.getCount = getCount;
```

```js [moduleB.js]
let moduleA = require("./moduleA");
moduleA.add();
console.log(moduleA.getCount());
```

:::

也就是说变量 `mouduleA` 和 `exports` 指向的都是同一个对象。

通过 `module.exports` 可以直接导出一个对象。`module` 会在内存中另辟一个空间。如果是 `module.exports.add` 这种语法，则 `module` 默认指向 `exports`；如果是 `module.exports = {}` 则 `module` 将指向一个新的地址空间，`exports` 就没有存在的意义了，仅作为 CommonJS 规范的实现。

`require` 本质是再找 `module`。

```js
module.exports = {
    add,
    getCount,
};
```

## require 查找规则

1.  如果导入的是 node 的内置模块，直接返回内置模块的导出对象。
2.  如果导入的是文件模块，先找到文件的绝对路径，如果没有后缀名，会依次尝试 `.js`、`.json`、`.node`。如果找不到，则会当作文件夹，然后找 `index.js`、`index.json`、`index.node`，如果还是找不到，则报错。
3.  如果既不是路径也不是内置，则会去 `node_modules` 中查找，如果找不到，则会去父级的 `node_modules` 中查找，直到根目录。

## node 模块的加载过程

-   模块会在被引入时运行一次，然后缓存起来，下次再引入时，直接返回缓存的结果。
-   一个模块中的代码只会执行一次，不管导入多少次。
-   循环引入会按照 DFS 和 BFS 的方式去查找。

node 加载是一个同步的过程，如果模块中有异步操作，会导致后续代码全部阻塞。这是 CommonJS 的缺点之一。
