# nodejs 全局对象

https://nodejs.org/docs/latest/api/globals.html

These objects are available in all modules.

The following variables may appear to be global but are not. They exist only in the scope of CommonJS modules:

-   `__dirname` The directory name of the current module. This is the same as the `path.dirname()` of the `__filename`.

```js
// Example: running node example.js from /Users/mjr
console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr
```

-   `__filename` The directory name of the current module. This is the same as the `path.dirname()` of the `__filename`.

```js
// Example: running node example.js from /Users/mjr
console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr
```

-   `exports`

-   `module`

-   `require()`

The objects listed here are specific to Node.js. There are built-in objects that are part of the JavaScript language itself, which are also globally accessible.
