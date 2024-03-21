# await and async

> The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

`async` 函数声明创建了一个新的 `async` 函数绑定到给定的名称。`await` 关键字允许在函数体内，以更清晰的方式编写基于异步的 promise 行为，并避免显式配置 promise 链。

异步函数 (async function) 无论其是否显式返回 promise，都会隐式返回一个 promise。

```javascript
async function f() {
    return 1;
}

f().then(console.log); // 1
f().then((v) => console.log(v)); // 1
```

如果再 `async` 函数中抛出异常，该异常会在 `promise` 链的 `reject` 中传递。

```javascript
async function f() {
    throw new Error("error");
}

f().catch(console.log); // Error: error
```

也可以在异步函数中自己捕获处理异常：

```javascript
async function f() {
    try {
        throw new Error("error");
    } catch (e) {
        console.log(e);
    }
}

f(); // Error: error
```

`await` 关键字只能在 `async` 函数中使用。如果 `await` 后面是一个 `promise`，则会等待 `promise` 的解决，然后返回解决值。如果 `await` 后面是一个非 `promise` 的值，则会立即返回该值。

```javascript
async function f() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });

    const res = await promise; // 等待 promise 解决
    console.log(res); // done!
    console.log("and then...");
}

f();
```

`await` 可以与 `Promise.all` 一起使用：

```javascript
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise1 done!"), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise2 done!"), 2000);
});

async function f() {
    const [res1, res2] = await Promise.all([p1, p2]);
    console.log(res1); // promise1 done!
    console.log(res2); // promise2 done!
    console.log("and then...");
}

f();
```

当然，`await` 也可以处理 `async`：

```javascript
const p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("promise1 done!"), 1000);
    });
};

const p2 = async () => {
    return {
        then: (resolve, reject) => {
            setTimeout(() => resolve("promise2 done!"), 2000);
        },
    };
};

async function f() {
    const res1 = await p1();
    console.log(res1); // promise1 done!
    const res2 = await p2();
    console.log(res2); // promise2 done!
    console.log("and then...");
}

f();
```
