# TS 语法基础

## 类型别名

类型别名通过 `type` 关键字定义，可以给一个类型起一个新的名字：

```typescript
type Name = string;

const name1: string = "name1";
const name2: Name = "name2";

// 判断两个name 的类型是否相等
console.log(typeof name1 === typeof name2); // true
```

也可以给函数定义类型别名：

```typescript
type NameResolver = () => string;

function getName(n: NameResolver): string {
    return n();
}

const name = getName(() => "name1");
console.log(name); // name1
```

## 接口

接口是对象的状态（属性）和行为（方法）的抽象（描述），是一种规范的定义。

```typescript
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "name1",
    age: 18,
};
```

## 接口和类型别名的区别

-   类型别名和接口非常相似，在定义对象类型时，大部分时候都可以任意使用。
-   接口的几乎所有特性的可以在 type 中使用。

区别在于：

1.  type 可以声明基本类型别名、联合类型、元组等类型。
2.  interface 能够多次声明。
3.  interface 支持继承。
4.  interface 可以被类实现。

```typescript
// 1.  type 可以声明基本类型别名、联合类型、元组等类型。
type Name = string;
type Age = number | string;

// 2.  interface 能够多次声明。
interface Person {
    name: string;
    age: number;
}

interface Person {
    hobby: Array<string>;
}

// 3.  interface 支持继承。
interface IPerson {
    say(): void;
}

interface IStudent extends IPerson {
    study(): void;
}

// 4.  interface 可以被类实现。
class Student implements IStudent {
    say() {
        console.log("say");
    }

    study() {
        console.log("study");
    }
}
```

## 交叉类型

交叉类型是将多个类型合并为一个类型，通过 `&` 运算符实现：

```typescript
interface Person {
    name: string;
    age: number;
}

interface Student {
    hobby: string;
}

type PersonStudent = Person & Student;

const personStudent: PersonStudent = {
    name: "name1",
    age: 18,
    hobby: "basketball",
};
```

## 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。

```typescript
const input = document.querySelector(".my-input") as HTMLInputElement;

input.value = "hello"; // 此时 element 是一个确切的 HTMLInputElement
```

类型断言的限制规则是只能断言为更具体的类型或更宽泛的类型，不能断言为不相关的类型。

```typescript
const name = "name1" as number; // [!code error] // 错误写法

const name = "name1" as string; // 正确写法
const name = "name1" as any; // 正确写法
```

### 非空断言

在属性后面加上 `!` 号，表示这个属性不会为空。

```typescript
// 函数参数
function myFunc(maybeString: string | undefined | null) {
    // 这里会报错，因为 maybeString 可能为 null
    const onlyString: string = maybeString; // [!code error]
    // 这里不会报错，因为 maybeString 不会为空
    const ignoreUndefinedAndNull: string = maybeString!;
}

// 对象属性
class Person {
    name: string;
    age?: number;
}

let info: Person = {
    name: "name1",
};

info.age!.toString(); // 不会报错，运行报错，谨慎使用
```

## 字面量类型

字面量类型是指定值的类型，通过 `|` 运算符实现：

```typescript
type Direction = "left" | "right" | "top" | "bottom";

function move(direction: Direction) {
    console.log(direction);
}

move("left"); // left
move("right"); // right
move("top"); // top
move("bottom"); // bottom
move("center"); // [!code error] // 报错
```

但是字面量类型的值只能是指定的值，不能是变量。

```typescript
let direction = "left";

move(direction); // [!code error] // 报错
```

因为 `direction` 是 `string` 类型，而不是 `Direction` 的字面量类型。有两个解决方案：

```typescript
// 类型断言
move(direction as Direction);

// 将变量声明为字面量类型
let direction = "left" as const; // 强制字面量类型
```

## 类型缩小（类型保护）

类型缩小是指通过某些条件判断，缩小变量的类型范围。

```typescript
type Fish = { swim: () => void };

type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}

move({ swim: () => console.log("swimming") }); // swimming
move({ fly: () => console.log("flying") }); // flying
```

类型缩小还有很多种方式，比如 `instanceof`、`typeof`、`in`、`==`、`===` 等。

```typescript
// instanceof 判断实例
class Foo {
    foo = 123;
}

function doStuff1(bar: Foo | string) {
    if (bar instanceof Foo) {
        bar.foo; // bar: Foo
    } else {
        bar; // bar: string
    }
}

// typeof 使用居多
function doStuff2(bar: number | string) {
    if (typeof bar === "string") {
        bar; // bar: string
    } else {
        bar; // bar: number
    }
}

// in 判断属性
function doStuff3(x: string | number, y: string | boolean) {
    if ("length" in x) {
        x; // x: string
    } else {
        x; // x: number
    }

    if ("toString" in y) {
        y; // y: string
    } else {
        y; // y: boolean
    }
}

// === 多用于字面量类型
function doStuff4(x: string | number, y: string | boolean) {
    if (x === y) {
        x; // x: string, number
        y; // y: string, number
    } else {
        x; // x: string, number
        y; // y: string, number
    }
}
```

## 函数类型

函数类型包含两部分：参数类型和返回值类型。

```typescript
type Add = (a: number, b: number) => number;

function calc(add: Add) {
    return add(1, 2);
}
```

上面这种方式就是函数类型表达式，也可以通过函数调用签名 Call Signatures 定义函数类型。函数也是 `Object`，所以从对象的角度来说，函数也可以添加属性。

```typescript
type Add = {
    (a: number, b: number): number;
};

function calc(add: Add) {
    return add(1, 2);
}

// 或者通过 interface
interface IAdd {
    (a: number, b: number): number;
}

function calc(add: IAdd) {
    return add(1, 2);
}
```

如果只描述函数类型本身，用函数表达式就行了，如果要描述函数对象，比如添加一些其他属性，就用函数签名。

```typescript
// 具名函数
interface IAdd {
    (a: number, b: number): number;
    name: string;
}

const add: IAdd = (a, b) => a + b;
add.name = "add";

console.log(add(1, 2)); // 3
console.log(add.name); // add
```

## 构造签名

构造签名是用来描述类的类型的，也就是构造函数的类型。

```typescript
interface IAnimal {
    new (name: string): Animal;
}

/**
 * 创建一个动物实例
 * @param Animal 类，符合 IAnimal 接口
 * @param name 名称
 */
function createAnimal(Animal: IAnimal, name: string) {
    return new Animal(name); // 返回一个实例
}

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const animal = createAnimal(Animal, "dog");
console.log(animal.name); // dog
```

## 函数重载

函数重载是指为同一个函数提供多个函数类型定义，以便在不同的情况下使用不同的类型。

```typescript
// 重载签名
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 通用实现
function add(a: any, b: any) {
    return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("1", "2")); // 12
```

> [!tip]
> 在开发中如果重载也可以实现，联合类型也可以实现，那么优先选择联合类型。

## this 推导

默认情况下，`this` 是 `any` 类型。

```typescript
function fn() {
    this.name = "name"; // this 是 any 类型
}
```

如果开启 `noImplicitThis` 选项，就必须指定 `this` 的类型。

```json
{
    "compilerOptions": {
        "noImplicitThis": true
    }
}
```

不指定就会报错，这样更严谨，但也更麻烦：

```typescript
function fn() {
    this.name = "name"; // [!code error] // 报错
}
```

将 `this` 作为函数的第一个参数，就可以指定类型。而且规则就是，必须叫 `this` 且是第一个参数，起别的名都不行。

```typescript
function fn(this: { name: string }) {
    this.name = "name";
}

fn.call({ name: "name1" });
```

编译后第一个 `this` 就不存在了，所以只是用来指定类型而已。

## this 工具

TS 提供了一些工具类型来辅助进行常见的类型转换，全局可用。

### ThisParameterType

获取函数中的 `this` 参数的类型。如果函数类型没有 `this` 参数，则返回 `unknown`。

```typescript
// 有 this
function fn1(this: { name: string }) {
    this.name = "name";
}

type ThisType1 = ThisParameterType<typeof fn1>; // { name: string }

// 没有 this
function fn2() {
    console.log("fn");
}

type ThisType2 = ThisParameterType<typeof fn2>; // unknown
```

### OmitThisParameter

从函数类型中删除 `this` 参数。

```typescript
function fn(this: { name: string }) {
    this.name = "name";
}

type FnType = typeof fn; // (this: { name: string; }) => void

type NewFnType = OmitThisParameter<FnType>; // () => void
```

### ThisType

指定函数中的 `this` 参数的类型。

```typescript
interface IThis {
    name: string;
}

function fn(this: IThis) {
    console.log(this.name);

    this.name = "name";
    console.log(this.name);
}

type NewFnType = ThisType<IThis> & typeof fn;

const newFn: NewFnType = fn;

newFn.call({ name: "newName" });
```

又比如 pinia 的 `Store` 类型：

```typescript
interface IState {
    count: number;
}
interface IStore {
    state: IState;
    getters: () => void;
    actions: () => void;
    // ...
}

const store: IStore & ThisType<IState> = {
    state: {
        count: 0,
    },
    getters: function () {
        return this.count;
    },
    actions: function () {
        this.count++;
    },
};

store.actions.call(store.state);
store.actions.call(store.state);
console.log(store.getters.call(store.state)); // 1
```

## 枚举类型

枚举允许我们定义一组命名的常量。使用 `enum` 关键字定义枚举类型。

```typescript
enum Direction {
    Up, // 默认为 0
    Down = 5, // 赋值为 number 类型
    Left = "LEFT", // 赋值为 string 类型
    Right = 100 << 2, // 赋值为表达式
}

const direction = Direction.Up;
console.log(direction); // 0
console.log(Direction[direction]); // Up
console.log(Direction.Down); // 5
console.log(Direction.Left); // LEFT
console.log(Direction.Right); // 400
```


