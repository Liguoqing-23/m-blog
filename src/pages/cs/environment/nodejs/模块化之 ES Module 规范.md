# 模块化之 ES Module 规范

## ESM 基本语法

ESM 下将自动采用严格模式。ESM 必须通过规定协议加载，如果通过 `file://` 协议加载，会报 `CORS` 错误。

导入语法：

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
```

`module-name` 不能被计算，必须是字符串字面量。

通过 `import` 导入一个模块是不能够放到逻辑代码中的，只能放到模块的顶层。如果需要在逻辑代码中导入模块，可以使用 `import()` 函数。

```js
// moduleA.js
const name = "foo";
const get_name = () => name;
export { name, get_name };

// moduleB.js
import("./foo.js")
    .then((module) => {
        console.log(module.name); // "foo"
        console.log(module.get_name()); // "foo"
    })
    .catch((err) => console.error(err));
```

因为 ESM 在被解析时，必须知道依赖关系。

导出语法：

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export default expression;
```

## import meta

在 ES11 (ES2020) 中新增了 `import.meta` 对象，包含了模块的元数据信息。

```js
console.log(import.meta.url);
```

> [!note] MDN
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta

## ESM 解析流程

> [!note] HACKS
> https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/

1. 构建 Construction，根据地址查找 JS 文件并下载解析成 Module Record。
2. 实例化 Instantiation，实例化 MR，分配内存，解析模块的导入导出，将模块指向对应内存地址。
3. 运行 Evaluation，执行模块代码，将值存储到内存中。
