# TS 模块化

TS 和 JS 一样，在一个文件中没有 `export` 或 `import` 语句，那么这个文件中的所有声明都是全局的，对其他文件可见，即被视为一个脚本，非不是模块。

TS 4.5 以后允许在没有 `export` 或 `import` 语句的文件中使用 `import type` 语句，这样这个文件就会被视为一个模块，而不是脚本。

```typescript
// moduleA.ts
export type { A };

// moduleB.ts
import type { A } from "./moduleA";
// 或者
import { type A } from "./moduleA";
```

这样导入可以让非 TS 编译器如 Babel、ESBuild 知晓这样的导入可以被安全移除，不必解析，提高编译速度。

## 命名空间

命名空间是 TS 中一种组织代码的方式，可以将代码包裹在命名空间中，避免全局变量的污染。早期称之为内部模块，实质上是在一个模块的内部进行作用域的划分，防止命名冲突。ES 模块化出来后，命名空间已不再被推荐使用。

```typescript
export namespace MyTime {
    export function format(date: Date, format: string) {
        // ...
    }
}

export namespace MyDate {
    export function format(date: Date, format: string) {
        // ...
    }
}

MyDate.format(new Date(), "yyyy-MM-dd");
MyTime.format(new Date(), "HH:mm:ss");
```

不过如果通过 CDN 引入的第三方库没有模块化，可以使用命名空间来声明这个库的类型。

```typescript
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}

// use
jQuery.ajax("/api/get_user");
```

## 类型查找

## .d.ts 文件

`.d.ts` 叫作类型声明文件，用于声明全局变量、全局类型、全局函数等，以便 TS 编译器识别。这种文件仅仅用来做类型检测，不能编写实际的代码。

TS 会在三个地方查找类型声明文件：

-   内置的类型声明文件 `lib.[...].d.ts`
-   外部的类型声明文件 `@types/[...].d.ts`
-   自定义的类型声明文件

### 内置的类型声明文件

TS 内置了一些类型声明文件，如 `lib.es5.d.ts`、`lib.es6.d.ts`、`lib.dom.d.ts` 等，这些文件包含了 JS 的内置对象、全局变量、全局函数等的类型声明。

可以通过 `tsconfig.json` 中的 `target` 和 `lib` 选项来指定使用哪些内置的类型声明文件。

> [!note] 详细说明
> https://www.typescriptlang.org/tsconfig#lib

### 外部的类型声明文件

TS 通过 `@types` 组织了很多第三方库的类型声明文件，如 `@types/node`、`@types/react` 等，这些文件可以通过 npm 安装。

> [!note] DefinitelyTyped 搜索地址
> https://github.com/DefinitelyTyped/DefinitelyTyped

> [!tip] 搜索和下载
> DefinitelyTyped 最近全面转为 `pnpm monorepo`。下载直接去 yarn 搜索库声明文件即可。
>
> https://yarnpkg.com/

### 自定义的类型声明文件

一般不自己自定义的全局声明文件，但有时候有些变量在其他地方定义成全局变量，TS 识别不到是不让我们使用的，这时候就可以自己定义一个类型声明。

```typescript
// some file
$ = (selector: string) => {
    return document.querySelector(selector);
};

// global.d.ts
declare const $: (selector: string) => any;

// use in other file
$("#app");
```

## 三斜线指令

三斜线指令是 TS 的一种特殊注释，用于声明文件之间的依赖关系，告诉编译器在编译时应该引入哪些文件。

```typescript
/// <reference path="./balabala.d.ts" />
```

三斜线指令只能放在文件的最顶部，且只能引入 `.d.ts` 文件，不能引入 `.ts` 文件。

## 声明模块

声明模块，即告诉 TS 编译器某个模块的类型，这样就可以在 TS 中使用这个模块。

```typescript
declare module "lodash" {
    export function chunk<T>(array: T[], size: number): T[][];
}
```

声明模块也可以声明文件模块，即告诉 TS 编译器某个文件模块的类型。

```typescript
declare module "*.png" {
    const value: string;
    export default value; // 这里的 value 是图片的路径
}
declare module "*.jpg";
// ...
```

然后就可以在 TS 中使用这个模块，但是注意要配合相关的 lodaer 来使用，光配置一个模块化是没用的。

```typescript
import image from "./image.png";
```

再举一个例子，在 vite 中声明 vue 模块：

```typescript
declare module "*.vue" {
    import { ComponentOptions } from "vue";
    const component: ComponentOptions;
    export default component;
}
```

## tsconfig.json

TS 编译器的配置文件，用于配置 TS 编译器的行为。主要是让 TSC 在编译时知道如何编译 TS 文件，以及让编辑器按照正确的方式进行类型检查。

-   运行 `tsc` 时，会自动查找当前目录下的 `tsconfig.json` 文件，然后根据配置文件的配置进行编译。
-   Webpack 通过 `ts-loader` 也会找到 `tsconfig.json` 文件。

`tsconfig.json` 的选项非常多，具体可以查看官方文档：

> [!note] 官方文档
> https://www.typescriptlang.org/tsconfig

实际在开发时，一般会使用 TS 模板，会默认配置好配置文件，然后根据需求进行修改。

### 常用配置

-   `files`：指定要编译的文件列表，如果指定了 `files`，则只会编译这些文件。一般不用。

```json
{
    "files": ["src/index.ts"]
}
```

-   `include`：指定要编译的文件列表。

```json
{
    "include": ["src/**/*.ts", "types/**/*.d.ts", "..."]
}
```

-   `exclude`：指定不编译的文件列表。

```json
{
    "exclude": ["node_modules", "dist", "..."]
}
```

-   `compilerOptions`：编译选项。

```json
{
    "compilerOptions": {
        // 编译后的 JS 版本
        "target": "esnest",
        // 模块化方式
        "module": "commonjs",
        // 输出目录
        "outDir": "dist",
        // 严格模式相关
        "strict": true,
        "allowJs": true,
        "noImplicitAny": true,
        // jsx 相关 react 或 preserve
        "jsx": "preserve"
        // 导入功能模块 tslib，类似 polyfill
        "importHelpers": true,
        // 模块路径查找规则 node 或 classic
        "moduleResolution": "node",
        // 跳过对整个库的类型检查，仅检测用到的类型
        "skipLibCheck": true,
        // 兼容 esm 和 commonjs
        "esModuleInterop": true,
        // 允许合并默认模块导出
        // import * as React from "react"; => import React from "react";
        "allowSyntheticDefaultImports": true,
        // 生成 sourceMap
        "sourceMap": true,
        // 路径解析的基准目录
        "baseUrl": "./",
        // 路径解析的映射，相当于 webpack 的 alias
        "paths": {
            "@/*": ["src/*"]
        }
        // 指定需要引入的库的类型声明文件
        "lib": ["es5", "es6", "dom"]
        // ...
    }
}
```
