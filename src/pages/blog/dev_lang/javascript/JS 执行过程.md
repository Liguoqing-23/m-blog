# JS 执行过程

<!-- ECMA3 ECMA5 -->

## 初始化全局对象

JS 引擎在执行任何代码之前，都会先初始化全局对象。全局对象 (Global Object GO) 是一个特殊的内置对象，GO 属性和方法可以在任何作用域 scope 访问到。

## 执行上下文栈

JS 引擎在执行代码时，会创建执行上下文 (Execution Context EC)。EC 是一个对象，包含了当前执行代码所需的所有信息。EC 会被压入执行上下文栈 (Execution Context Stack ECS)，这是用于执行代码的调用栈。

全局的代码块为了执行，会构建一个 Global Execution Context (GEC)。

在代码还未执行时，parser 会先解析代码，将代码转换为抽象语法树 (Abstract Syntax Tree AST)。同时将全局变量和函数声明加入 GO，这个过程叫做变量提升 (Hoisting) 或作用域提升。

```javascript
// 内存状态
function foo() {
    // 0x000
    return 2;
}
const a = 1; // undefined
const b = 2; // undefined
const c = a + b; // undefined
```

在代码执行过程中，对变量赋值，或者调用函数。

```javascript
// 内存状态
function foo() {
    // 0x000
    return 2;
}
const a = 1; // 1
const b = 2; // 2
const c = a + b; // 3
```

## VO

Variable Object 变量对象，是每个 EC 都有的一个对象。变量和函数声明会被添加到 VO 中。

对于 GEC，VO 就是 GO。this 的值在 GEC 中指向 GO。

## AO

再执行过程中执行到函数时，会根据函数创建一个新的 EC，这个 EC 称为 Function Execution Context (FEC)，并压入 ECS。

FEC 会有一个 AO，Activation Object 活动对象。AO 对象包含了函数的参数（arguments）、局部变量和内部函数声明。

AO 最终会被添加到 VO 中，这个过程叫做作用域链 (Scope Chain) 的建立。

## 作用域链

作用域链是一个对象列表，用于变量标识符的求值。作用域链的前端是当前执行代码的 VO，后端是全局 VO。

```javascript
const a = 1;
function foo() {
    console.log(a); // undefined
    const a = 2;
}
```

> Every execution context has assoiated with it a scope chain. A scope chain is a list of objects that are searched when evaluating an identifier. When control enters an execution context, a scope chain is created and populated with an initial set of objects, depending on the type of code. During execution within an execution context, the scope chain of th excution context is affected only by with statements and catch clauses.

多层函数嵌套，JS 引擎只会创建最外层函数，内层函数只有在调用时才会创建。

```javascript
const name = "global";
function foo() {
    const name = "foo";
    return function bar() {
        console.log("bar");
    };
}
foo(); // 创建 foo EC
foo()(); // 创建 bar EC
```
