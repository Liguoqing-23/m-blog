# 临时未整理

## js 判断数据类型

```javascript
function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object",
        "[object Symbol]": "symbol",
    };
    return map[toString.call(obj)];
}

console.log(typeOf("123")); // string
```

```javascript
// 来自 axios 的方法
const typeOfTest = (type) => (thing) => typeof thing === type;

const isString = typeOfTest("string");
const isNumber = typeOfTest("number");
const isBoolean = typeOfTest("boolean");
const isObject = typeOfTest("object");
const isFunction = typeOfTest("function");
const isArray = typeOfTest("array");
const isNull = typeOfTest("null");
const isUndefined = typeOfTest("undefined");
const isSymbol = typeOfTest("symbol");
const isRegExp = typeOfTest("regExp");
const isDate = typeOfTest("date");

console.log(isString("123")); // true
```

## js 数组遍历性能

https://juejin.cn/post/7033578966887694373