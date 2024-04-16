# ECMA-262 3rd 第十章翻译

## Execution Contexts 执行上下文

When control is transferred to ECMAScript executable code, control is entering an execution context. Active execution contexts logically form a stack. The top execution context on this logical stack is the running execution context.

当控制器转换到 ECMAScript 可执行代码时，控制器进入了一个执行上下文 (EC)。活动执行上下文在逻辑上形成了一个栈。这个逻辑栈顶的执行上下文是正在运行的执行上下文。

## Definitions 定义

### Function Objects 函数对象

There are two types of Function objects:

-   Program functions are defined in source text by a _FunctionDeclaration_ or created dynamically either by using a FunctionExpression or by using the built-in Function object as a constructor.
-   Internal functions are built-in objects of the language, such as parseInt and Math.exp. An implementation may also provide implementation-dependent internal functions that are not described in this specification. These functions do not contain executable code defined by the ECMAScript grammar, so they are excluded from this discussion of execution contexts.

有两种类型的函数对象：

-   程序中的函数是通过函数声明 FunctionDeclaration 在源代码中定义的，以及通过使用函数表达式 FunctionExpression 或使用内置的 Function 对象作为构造函数动态创建的。
-   内置函数是语言内置的对象，例如 `parseInt` 和 `Math.exp`。实现可能还提供了不在本规范中描述的依赖于实现的内置函数。这些函数不包含由 ECMAScript 语法定义的可执行代码，因此它们不在执行上下文的讨论范围内。

### Types of Executable Code 可执行代码的类型

There are three types of ECMAScript executable code:

-   Global code is source text that is treated as an ECMAScript Program. The global code of a particular Program does not include any source text that is parsed as part of a FunctionBody.
-   Eval code is the source text supplied to the built-in eval function. More precisely, if the parameter to the built-in eval function is a string, it is treated as an ECMAScript Program. The eval code for a particular invocation of eval is the global code portion of the string parameter.
-   Function code is source text that is parsed as part of a FunctionBody. The function code of a particular FunctionBody does not include any source text that is parsed as part of a nested FunctionBody. Function code also denotes the source text supplied when using the built-in Function object as a constructor. More precisely, the last parameter provided to the Function constructor is converted to a string and treated as the FunctionBody. If more than one parameter is provided to the Function constructor, all parameters except the last one are converted to strings and concatenated together, separated by commas. The resulting string is interpreted as the FormalParameterList for the FunctionBody defined by the last parameter. The function code for a particular instantiation of a Function does not include any source text that is parsed as part of a nested FunctionBody.

有三种 ECMAScript 可执行代码：

-   全局代码 Global code，被视为 ECMAScript 程序的源代码。一个特定程序的全局代码不包括任何可被解析为函数体 FunctionBody 的源代码。
-   求值代码 Eval code，是提供给内置的 eval 函数的源代码。更准确地说，如果内置的 eval 函数的参数是一个字符串，则它就被视为一个 ECMAScript 程序。一个特定 `eval` 调用的求值代码是字符串参数的全局代码部分。
-   函数代码 Function code，是作为函数体 FunctionBody 的一部分解析的源代码。一个特定函数体的函数代码不包括任何可被解析为嵌套函数体 FunctionBody 的源代码。函数代码还表示使用内置的 Function 对象作为构造函数时提供的源代码。更准确地说，提供给 Function 构造函数的最后一个参数被转换为字符串，并被视为 FunctionBody。如果 Function 构造函数提供了多个参数，除了最后一个参数外，所有参数都被转换为字符串并连接在一起，用逗号分隔。结果字符串被解释为由最后一个参数定义的 FunctionBody 的形参列表 FormalParameterList。一个特定 Function 实例化的函数代码不包括任何可被解析为嵌套函数体 FunctionBody 的源代码。

> [!note] 解释
>
> 1. 在 JavaScript 中，全局代码指的是整个程序的顶层代码，不包括任何函数体内部的代码。换句话说，全局代码是作为 ECMAScript 程序（ECMAScript Program）处理的源代码，而函数体内的代码则不属于全局代码。
> 2. 永远不要使用 eval！[查看为什么](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!)
> 3. 函数代码是函数体的一部分，但不包括任何被解析为嵌套函数体的源代码。
>
> ```javascript
> var outerFunction = new Function(
>     "a",
>     "var innerFunction = function(b) { return a + b; };" +
>         "return innerFunction;"
> );
>
> var innerFunction = outerFunction(10);
> console.log(innerFunction(20)); // 输出 30
> ```

### Variable Instantiation 变量实例化

Every execution context has associated with it a variable object. Variables and functions declared in the source text are added as properties of the variable object. For function code, parameters are added as properties of the variable object.

Which object is used as the variable object and what attributes are used for the properties depends on the type of code, but the remainder of the behaviour is generic. On entering an execution context, the properties are bound to the variable object in the following order:

-   For function code: for each formal parameter, as defined in the FormalParameterList, create a property of the variable object whose name is the Identifier and whose attributes are determined by the type of code. The values of the parameters are supplied by the caller as arguments to `[[Call]]`. If the caller supplies fewer parameter values than there are formal parameters, the extra formal parameters have value undefined. If two or more formal parameters share the same name, hence the same property, the corresponding property is given the value that was supplied for the last parameter with this name. If the value of this last parameter was not supplied by the caller, the value of the corresponding property is undefined.
-   For each FunctionDeclaration in the code, in source text order, create a property of the variable object whose name is the Identifier in the FunctionDeclaration, whose value is the result returned by creating a Function object as described in 13, and whose attributes are determined by the type of code. If the variable object already has a property with this name, replace its value and attributes. Semantically, this step must follow the creation of FormalParameterList properties.
-   For each VariableDeclaration or VariableDeclarationNoIn in the code, create a property of the variable object whose name is the Identifier in the VariableDeclaration or VariableDeclarationNoIn, whose value is undefined and whose attributes are determined by the type of code. If there is already a property of the variable object with the name of a declared variable, the value of the property and its attributes are not changed. Semantically, this step must follow the creation of the FormalParameterList and FunctionDeclaration properties. In particular, if a declared variable has the same name as a declared function or formal parameter, the variable declaration does not disturb the existing property.

每个 EC 都有一个与之关联的变量对象 VO。在源代码中声明的变量和函数会被添加为 VO 的属性。对于函数代码，参数被添加为 VO 的属性。

使用哪个对象作为变量对象，以及属性使用时的特性取决于代码的类型，但是行为的其余部分是通用的。进入执行上下文时，属性按以下顺序绑定到变量对象：

-   对于函数代码：对于每个形参，如在形参列表中定义的，则创建一个变量对象的属性，其名称是 Identifier，其属性的特性由代码的类型决定。形参的值由调用者作为参数传递给 `[[Call]]`。如果调用者提供的参数值少于形参的数量，则多余的形参值为 undefined。如果两个或更多的形参重名，因而具有相同的属性，相应的属性会被被赋予最后一个具有此名称的参数提供的值。如果最后一个参数的值未被调用者提供，则相应属性的值为 undefined。
-   对于代码中的每个 FunctionDeclaration，按源文本顺序，创建一个变量对象的属性，其名称是 FunctionDeclaration 中的 Identifier，其值是创建一个函数对象的结果，并且其属性由代码的类型决定。如果变量对象已经有一个具有此名称的属性，则替换其值和属性。语义上，此步骤必须紧随在创建 FormalParameterList 属性之后进行。
-   对于代码中的每个变量声明 VariableDeclaration 或没有在循环中使用的变量声明 VariableDeclarationNoIn，创建一个变量对象的属性，其名称是 VariableDeclaration 或 VariableDeclarationNoIn 中的 Identifier，其值为 undefined，其属性由代码的类型决定。如果变量对象已经有一个具有已声明变量名称的属性，则不更改属性的值和属性。语义上，此步骤必须紧随在创建 FormalParameterList 和 FunctionDeclaration 属性之后进行。特别是，如果已声明的变量与已声明的函数或形参具有相同的名称，则变量声明不会影响现有的属性。

> [!note] 总结
>
> ```javascript
> FormalParameterList -> VO {
>     "Identifier1": value1,
>     "Identifier2": value2,
>     // ...
> }
>
> FunctionDeclaration -> VO {
>     "Identifier1": FunctionObject1,
>     "Identifier2": FunctionObject2,
>     // ...
> }
>
> VariableDeclaration -> VO {
>     "Identifier1": undefined,
>     "Identifier2": undefined,
>     // ...
> }
>
> VariableDeclarationNoIn -> VO {
>     "Identifier1": undefined,
>     "Identifier2": undefined,
>     // ...
> }
> ```

```javascript
function exampleFunc(param1, param2) {
    const localVar1 = "LocalVar1";
    const localVar2 = "LocalVar2";
    function innerFunc() {
        console.log("Inner Function");
    }
    console.log("Function Body");
}

const globalVar = "GlobalVar";

exampleFunc("Param1Value", "Param2Value");

function anotherFunc() {
    const localVar3 = "LocalVar3";
    console.log("Another Function");
}

anotherFunc();

// EC VO

// Global Execution Context
VO {
    "exampleFunc": <exampleFunc reference>,
    "globalVar": undefined,
    "anotherFunc": <anotherFunc reference>
}

// exampleFunc Execution Context
VO {
    "param1": "Param1Value",
    "param2": "Param2Value",
    "localVar1": undefined,
    "localVar2": undefined,
    "innerFunc": <innerFunc reference>
}

// anotherFunc Execution Context
VO {
    "localVar3": undefined
}

// innerFunc Execution Context
VO {}
```

### Scope Chain and Identifier Resolution 作用域链和标识符解析

Every execution context has associated with it a scope chain. A scope chain is a list of objects that are searched when evaluating an Identifier. When control enters an execution context, a scope chain is created and populated with an initial set of objects, depending on the type of code. During execution within an execution context, the scope chain of the execution context is affected only by with statements (see 12.10) and catch clauses (see 12.14).

During execution, the syntactic production PrimaryExpression : Identifier is evaluated using the following algorithm:

1. Get the next object in the scope chain. If there isn't one, go to step 5.
2. Call the `[[HasProperty]]` method of Result(1), passing the Identifier as the property name.
3. If Result(2) is true, return a value of type Reference whose base object is Result(1) and whose property name is the Identifier.
4. Go to step 1.
5. Return a value of type Reference whose base object is null and whose property name is the Identifier.

The result of evaluating an identifier is always a value of type Reference with its member name component equal to the identifier string.

### Global Object

There is a unique global object (15.1), which is created before control enters any execution context. Initially the global object has the following properties:

-   Built-in objects such as Math, String, Date, parseInt, etc. These have attributes `{ DontEnum }`.
-   Additional host defined properties. This may include a property whose value is the global object itself; for example, in the HTML document object model the window property of the global object is the global object itself.
    As control enters execution contexts, and as ECMAScript code is executed, additional properties may be added to the global object and the initial properties may be changed.

### Activation Object

When control enters an execution context for function code, an object called the activation object is created and associated with the execution context. The activation object is initialised with a property with name arguments and attributes `{ DontDelete }`. The initial value of this property is the arguments object described below.

The activation object is then used as the variable object for the purposes of variable instantiation.

The activation object is purely a specification mechanism. It is impossible for an ECMAScript program to access the activation object. It can access members of the activation object, but not the activation object itself. When the call operation is applied to a Reference value whose base object is an activation object, null is used as the this value of the call.

### This

There is a this value associated with every active execution context. The this value depends on the caller and the type of code being executed and is determined when control enters the execution context. The this value associated with an execution context is immutable.

### Arguments Object

When control enters an execution context for function code, an arguments object is created and initialised as follows:

-   The value of the internal `[[Prototype]]` property of the arguments object is the original Object prototype object, the one that is the initial value of Object.prototype (see 15.2.3.1).
-   A property is created with name callee and property attributes `{ DontEnum }`. The initial value of this property is the Function object being executed. This allows anonymous functions to be recursive.
-   A property is created with name length and property attributes `{ DontEnum }`. The initial value of this property is the number of actual parameter values supplied by the caller.
-   For each non-negative integer, arg, less than the value of the length property, a property is created with name ToString(arg) and property attributes `{ DontEnum }`. The initial value of this property is the value of the corresponding actual parameter supplied by the caller. The first actual parameter value corresponds to arg = 0, the second to arg = 1, and so on. In the case when arg is less than the number of formal parameters for the Function object, this property shares its value with the corresponding property of the activation object. This means that changing this property changes the corresponding property of the activation object and vice versa.

## Entering An Execution Context

Every function and constructor call enters a new execution context, even if a function is calling itself recursively. Every return exits an execution context. A thrown exception, if not caught, may also exit one or more execution contexts.

When control enters an execution context, the scope chain is created and initialised, variable instantiation is performed, and the this value is determined.

The initialisation of the scope chain, variable instantiation, and the determination of the this value depend on the type of code being entered.

### Global Code

-   The scope chain is created and initialised to contain the global object and no others.
-   Variable instantiation is performed using the global object as the variable object and using property attributes `{ DontDelete }`.
-   The this value is the global object.

### Eval Code

When control enters an execution context for eval code, the previous active execution context, referred to as the calling context, is used to determine the scope chain, the variable object, and the this value. If there is no calling context, then initialising the scope chain, variable instantiation, and determination of the this value are performed just as for global code.

-   The scope chain is initialised to contain the same objects, in the same order, as the calling context's scope chain. This includes objects added to the calling context's scope chain by with statements and catch clauses.
-   Variable instantiation is performed using the calling context's variable object and using empty property attributes.
-   The this value is the same as the this value of the calling context.

### Function Code

-   The scope chain is initialised to contain the activation object followed by the objects in the scope chain stored in the `[[Scope]]` property of the Function object.
-   Variable instantiation is performed using the activation object as the variable object and using property attributes `{ DontDelete }`.
-   The caller provides the this value. If the this value provided by the caller is not an object (note that null is not an object), then the this value is the global object.
