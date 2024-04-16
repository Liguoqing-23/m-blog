# Promise

## 从一个需求痛点说开来

对于一个异步操作，如 `setTimeout`、`ajax`、`fetch` 等，我们需要在异步操作完成后执行一些操作，在以前没有 `Promise` 时，可以这样来实现：

```javascript
function doSomethingAsync(data, successCallback, errorCallback) {
    setTimeout(() => {
        if (data) {
            successCallback(data);
        } else {
            errorCallback("error");
        }
    }, 1000);
}

doSomethingAsync(
    "data",
    (data) => {
        // <= into here
        console.log(data); // data
    },
    (error) => {
        console.error(error);
    }
);

doSomethingAsync(
    "",
    (data) => {
        console.log(data);
    },
    (error) => {
        // <= into here
        console.error(error); // error
    }
);
```

这个案例的痛点在于，我不知道 `doSomethingAsync` 的参数是如何规定哪个是成功回调的，哪个又是失败回调的。事实上 `Promise` 就是官方统一的规范，就说明了以前是没有规范的，没有规范的东西调起来就会很麻烦，还可能会有风险。

## Promise 的基本使用

`Promise` 是一个构造函数（类），可以通过 `new` 来创建一个新的实例，`Promise` 构造函数接收一个函数作为参数，这个函数会在 `Promise` 的状态发生改变时被调用，这个函数接收两个参数，分别是 `resolve` 和 `reject` 两个函数，分别用来表示 `Promise` 的状态变为 `fulfilled` 和 `rejected`。

```javascript
const doSomethingAsync = (data) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject("error");
            }
        }, 1000);
    });

doSomethingAsync("data")
    .then((data) => {
        // <= into here
        console.log(data); // data
    })
    .catch((error) => {
        console.error(error);
    });

doSomethingAsync("")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        // <= into here
        console.error(error); // error
    });
```

当然，结合箭头函数就可以这样：

```javascript
const doSomethingAsync = (data) =>
    new Promise((resolve, reject) =>
        setTimeout(() => (data ? resolve(data) : reject("error")), 1000)
    );

doSomethingAsync("data")
    .then((data) => console.log(data)) // data
    .catch((error) => console.error(error));

doSomethingAsync("")
    .then((data) => console.log(data))
    .catch((error) => console.error(error)); // error
```

整洁！规范！看着就舒服！

> [!note] NOTE
>
> 1. `new Promise()` 时的传入函数被称为 `executor` 会立即执行。
> 2. `resolve` 或 `reject` 无论调多少次，只有第一次有效，后面的调用会被忽略。
> 3. `resolve` 和 `reject` 只能执行一个，执行了其中一个，另一个就会被忽略。

## Promise 的状态

上面说到，`resolve` 和 `reject` 只能执行其中一个，就是因为 `Promise` 的状态，`Promise` 有三种状态：

1. `pending`：初始状态，既不是 `fulfilled` 也不是 `rejected`。
2. `fulfilled`：意味着操作成功完成。执行 `resolve` 后，`Promise` 的状态就会变为 `fulfilled`。也成为 `resolved`（时态）。
3. `rejected`：意味着操作失败。执行 `reject` 后，`Promise` 的状态就会变为 `rejected`。

`Promise` 的状态一旦发生变化，就会凝固，不会再变化。因此 `resolve` 或 `reject` 只能执行其中一个，因为状态被确定了，再执行别的自然就不会再起作用。

## resolve 的值

如果 `resolve` 传入的是一个 `Promise` 实例，那么 `then` 方法会等待这个 `Promise` 实例的状态发生变化，如果状态变为 `fulfilled`，则会调用 `then` 方法的第一个参数，如果状态变为 `rejected`，则会调用 `then` 方法的第二个参数。简单说就是新 `Promise` 会决定原 `Promise` 的状态。

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => resolve(new Promise((resolve) => resolve("data")), 1000));
}).then(
    (data) => console.log(data), // data
    (error) => console.error(error)
);

new Promise((resolve, reject) => {
    setTimeout(() => resolve(new Promise((resolve) => resolve("")), 1000));
}).then(
    (data) => console.log(data),
    (error) => console.error(error) // <= into here
);
```

如果 `resolve` 传入的是一个 `thenable` 对象，那么 `then` 方法会等待这个 `thenable` 对象的状态发生变化，如果状态变为 `fulfilled`，则会调用 `then` 方法的第一个参数，如果状态变为 `rejected`，则会调用 `then` 方法的第二个参数。

```javascript
new Promise((resolve, reject) => {
    setTimeout(
        () => resolve({ then: (resolve) => resolve("thenable data") }),
        1000
    );
}).then(
    (data) => console.log(data), // thenable data
    (error) => console.error(error)
);
```

## then 和 catch 的返回值

`then` 方法会返回一个新的 `Promise` 实例，因此可以进行链式调用。后一个 `then` 方法的参数会接收前一个 `then` 方法的返回值。

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 1000);
})
    .then((data) => {
        console.log(data); // data
        return "new data";
    })
    .then((data) => console.log(data)); // new data
```

`catch` 方法也会返回一个新的 `Promise` 实例，因此也可以进行链式调用。

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 1000);
})
    .catch((error) => {
        console.error(error); // error
        return "new error";
    })
    .catch((error) => console.error(error)); // new error
```

如果 `then` 方法中又返回了一个 `Promise`，后面的 `then` 方法会等待这个 `Promise` 的状态发生变化。

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 1000);
})
    .then((data) => {
        console.log(data); // data
        return new Promise((resolve) => resolve("new data"));
    })
    .then((data) => console.log(data)); // new data
```

如果在链式调用中抛出了 `Error`，则会中断后续的 `then` 调用，执行最近的 `catch`。在多个 `catch` 方法中只会执行第一个 `catch` 方法。

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 1000);
})
    .catch((error) => {
        console.error(error); // error
        return "new error";
    })
    .catch((error) => console.error(error)); // 不会执行 // [!code warning]
```

## finally

不论 `Promise` 的状态最终，`finally` 方法都会执行，它接收一个函数作为参数

## Promise 类方法

### Promise.resolve

`Promise.resolve` 方法会返回一个 `Promise` 实例，这个实例的状态是 `fulfilled`。常在已经有一个结果，我需要给别人返回时是 `Promise` 的时候使用。

```javascript
Promise.resolve("data").then((data) => console.log(data)); // data

// 等效于...
new Promise((resolve) => resolve("data")).then((data) => {
    console.log(data);
}); // data
```

### Promise.reject

同理。在想要直接拒绝一个结果时使用。

```javascript
Promise.reject("error").catch((error) => console.error(error)); // error

// 等效于...
new Promise((_, reject) => reject("error")).catch((error) =>
    console.error(error)
); // error
```

### Promise.all

`Promise.all` 是用来将多个 `Promise` 包裹在一起形成一个新的 `Promise`。新的 `Promise` 会等待所有的被包裹的 `Promise` 的决定。

-   如果所有的 `Promise` 都变为 `fulfilled`，则新的 `Promise` 会变为 `fulfilled`。
-   如果有一个 `Promise` 变为 `rejected`，则新的 `Promise` 会变为 `rejected`，并将第一个 `reject` 的返回值传递给新的 `Promise`。

```javascript
Promise.all([
    new Promise((resolve) => resolve("data1")),
    new Promise((resolve) => resolve("data2")),
    new Promise((resolve) => resolve("data3")),
]).then((data) => console.log(data)); // ["data1", "data2", "data3"]

Promise.all([
    new Promise((resolve) => resolve("data1")),
    new Promise((_, reject) => reject("error")),
    new Promise((resolve) => resolve("data3")),
]).catch((error) => console.error(error)); // error
```

### Promise.allSettled

`all` 实际上是有缺陷的，如果有一个 `Promise` 变为 `rejected`，则新的 `Promise` 会立即变为 `rejected`。如果还有其他处于 `pending` 的 `Promise`，则会被忽略。

`allSettled` 就是为了解决这个问题的。只有在所有 `Promise` 都解决了（settled），新的 `Promise` 才会解决。

返回的新的 `Promise` 结果一定是 `fulfilled`，不管原 `Promise` 的状态是 `fulfilled` 还是 `rejected`。

新的 `Promise` 拿到的是一个数组，数组中的每一项都是一个对象，对象中有 `status` 和 `value` 两个属性。

```javascript
Promise.allSettled([
    new Promise((resolve) => resolve("data1")),
    new Promise((_, reject) => reject("error")),
    new Promise((resolve) => resolve("data3")),
]).then((data) => console.log(data));

// [
//     { status: "fulfilled", value: "data1" },
//     { status: "rejected", reason: "error" },
//     { status: "fulfilled", value: "data3" },
// ]
```

### Promise.race

`race` 就是多个 `Promise` 之间谁先有结果就返回谁。无论这个结果是 `fulfilled` 还是 `rejected`。

```javascript
Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("data1"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("data2"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("data3"), 3000)),
]).then((data) => console.log(data)); // data1
```

### Promise.any

`any` 是 `race` 的升级版，`any` 会等待所有的 `Promise` 都变为 `rejected`，才会变为 `rejected`。只要有一个 `Promise` 变为 `fulfilled`，则新的 `Promise` 就会变为 `fulfilled`。

```javascript
Promise.any([
    new Promise((resolve) => setTimeout(() => resolve("data1"), 1000)),
    new Promise((_, reject) => setTimeout(() => reject("error2"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("data3"), 3000)),
]).then((data) => console.log(data)); // data1

Promise.any([
    new Promise((_, reject) => setTimeout(() => reject("error1"), 1000)),
    new Promise((_, reject) => setTimeout(() => reject("error2"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("data3"), 3000)),
]).then((data) => console.log(data)); // data3
```
