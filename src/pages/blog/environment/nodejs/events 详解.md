# events 详解

Node 的核心 API 都是基于异步事件驱动的，`events` 模块提供了一个简单的事件处理器，可以用来绑定和解绑事件。

> [!note] 官方文档
> https://nodejs.org/docs/latest/api/events.html

## EventEmitter

发出事件和监听都是通过 `EventEmitter` 类来实现的。

-   `EventEmitter.on(eventName, listener)`：监听事件
-   `EventEmitter.emit(eventName, [arg1], [arg2], [...])`：发出事件
-   `EventEmitter.off(eventName, listener)`：移除监听事件
-   `EventEmitter.once(eventName, listener)`：监听一次事件

对比 `on` 和 `once`，`on` 是持续监听事件，`once` 是只监听一次事件：

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

const listener1 = () => console.log("listener1");
const listener2 = () => console.log("listener2");

emitter.on("event", listener1);
emitter.once("event", listener2);

emitter.emit("event");
// listener1
// listener2

emitter.emit("event");
// listener1
```

`emit` 可以传入参数，参数会传递给监听器：

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

const listener = (arg1, arg2) => console.log(arg1, arg2);

emitter.on("event", listener);
emitter.emit("event", "arg1", "arg2");
// arg1 arg2
```

移除监听事件：

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

const listener = () => console.log("listener");

emitter.on("event", listener);
emitter.emit("event");
// listener

emitter.removeListener("event", listener);
emitter.emit("event");
```

## 其他方法

-   `emitter.listeners(eventName)`：返回指定事件的监听器数组
-   `emitter.listenerCount(eventName)`：返回指定事件的监听器数量
-   `emitter.eventNames()`：返回所有事件名
-   `emitter.getMaxListeners()`：返回最大监听器数量

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

const listener1 = () => console.log("listener1");
const listener2 = () => console.log("listener2");

emitter.on("event", listener1);
emitter.on("event", listener2);

console.log(emitter.listeners("event"));
// [ [Function: listener1], [Function: listener2] ]

console.log(emitter.listenerCount("event"));
// 2

console.log(emitter.eventNames());
// [ 'event' ]

console.log(emitter.getMaxListeners());
// 10
```

## 更多实例方法

-   `emitter.prependListener(eventName, listener)`：添加事件监听器到监听器数组的开头
-   `emitter.prependOnceListener(eventName, listener)`：添加事件监听器到监听器数组的开头，只监听一次
-   `emitter.removeAllListeners([eventName])`：移除所有事件监听器

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

const listener1 = () => console.log("listener1");
const listener2 = () => console.log("listener2");

emitter.on("event", listener1);
emitter.prependListener("event", listener2);

emitter.emit("event");
// listener2
// listener1

emitter.removeAllListeners("event"); // 如果不传参数，则移除所有事件监听器
emitter.emit("event");
```
