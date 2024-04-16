# TS 泛型

## 泛型的定义

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性，是一种类型参数化的过程。

```typescript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray<string>(3, "x")); // ['x', 'x', 'x']
console.log(createArray<number>(3, 1)); // [1, 1, 1]
console.log(createArray(3, 1)); // [1, 1, 1]
```

第三个调用的 `createArray` 函数没有显式指定类型，TS 会根据传入的参数自动地帮助我们确定 `T` 的类型，类型推导比起不用泛型来说更加精确。

比如 React 中的 `useState`：

```typescript
function useState<T>(initialState: T): [() => T, (newState: T) => void] {
    let _state = initialState;
    const state = () => _state;
    const setState = (newState: T) => {
        _state = newState;
    };
    return [state, setState];
}

const [count, setCount] = useState(0);

console.log(count()); // 0
setCount(1);
console.log(count()); // 1
```

## 泛型常见名称

-   `T`：Type 表示一个任意类型
-   `K`：Key 表示对象的键
-   `V`：Value 表示对象的值
-   `E`：Element 表示元素类型
-   `O`：Object 表示对象类型

## 泛型接口

```typescript
interface CreateArrayFunc<T = string> {
    (length: number, value: T): T[];
}

const createArray1: CreateArrayFunc = (length, value) => {
    return new Array(length).fill(value);
};

const arr1 = createArray1(3, "x"); // ['x', 'x', 'x']

const createArray2: CreateArrayFunc<number> = (length, value) => {
    return new Array(length).fill(value);
};

const arr2 = createArray2(3, 1); // [1, 1, 1]

console.log(arr1, arr2); // ['x', 'x', 'x'] [1, 1, 1]
```

## 泛型类

```typescript
class Point<T = number> {
    x: T;
    y: T;

    constructor(x: T, y: T) {
        this.x = x;
        this.y = y;
    }
}

const point1 = new Point(10, 20);

const point2 = new Point<string>("10", "20");

console.log(point1, point2);
// Point { x: 10, y: 20 } Point { x: '10', y: '20' }
```

## 泛型约束

泛型约束用于限制泛型的类型范围。

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({ length: 10, value: 3 });

loggingIdentity({ length: "10", value: 3 }); // Error // [!code error]
```

这样就约束了 `T` 必须包含 `length` 属性。

泛型的作用就像是将类型约束持久化，而不是一次性的，这样就可以在多个地方复用这个约束。

## 泛型约束中使用类型参数

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const obj = { a: 1, b: 2, c: 3 };

console.log(getProperty(obj, "a")); // 1
console.log(getProperty(obj, "b")); // 2
console.log(getProperty(obj, "c")); // 3
console.log(getProperty(obj, "d")); // Error // [!code error]
```

传入的参数 `key` 必须是 `T` 的属性。

## TS 映射类型

映射类型是一种从旧类型中创建新类型的方式，通过映射类型，可以在定义的时候用类型操作符对已有的类型进行处理，生成新的类型。

-   映射类型只能通过 `type` 关键字定义，不能用 `interface`
-   映射类型有两个修饰符：`readonly` 和 `?`，分别表示只读和可选

```typescript
type TReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
type TPartial<T> = {
    [P in keyof T]?: T[P];
};
type Person = {
    name: string;
    age: number;
};

type ReadonlyPerson = TReadonly<Person>;
type PartialPerson = TPartial<Person>;

const readonlyPerson: ReadonlyPerson = {
    name: "Tom",
    age: 25,
};
const partialPerson: PartialPerson = {
    name: "Tom",
};

console.log(readonlyPerson, partialPerson);
// { name: 'Tom', age: 25 } { name: 'Tom', age: 25 }
```

在修饰符前面加上 `+` 或 `-` 可以增加或删除修饰符。

```typescript {2}
type TWritable<T> = {
    -readonly [P in keyof T]: T[P];
};

type Person = {
    readonly name: string;
    age: number;
};

type WritablePerson = TWritable<Person>;

const writablePerson: WritablePerson = {
    name: "John",
    age: 30,
};

writablePerson.name = "Doe"; // OK
writablePerson.age = 40; // OK

console.log(writablePerson); // { name: 'Doe', age: 40 }
```

## TS 条件类型

条件类型是一种由条件表达式决定的类型，通过 `extends` 关键字进行条件判断。

```typescript
type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<"a">; // "string"
type T2 = TypeName<true>; // "boolean"
type T3 = TypeName<() => void>; // "function"
type T4 = TypeName<string[]>; // "object"
```

### 条件类型中的推断

条件类型中可以通过 `infer` 关键字，从正在比较中的类型中推断类型，并在 `true` 分支中使用。

```typescript
// RetureType
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R // 推断出返回值类型
    ? R // 返回返回值类型
    : any;

type T0 = MyReturnType<() => string>; // string
type T1 = MyReturnType<() => number>; // number

// Parameters
type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P // 推断出参数类型
) => any
    ? P // 返回参数类型
    : never;

type T0 = MyParameters<() => string>; // []
type T1 = MyParameters<(x: number) => void>; // [number]
```

### 分发条件类型

在泛型中使用条件类型时，如果传入联合类型，TS 会对联合类型进行分发，然后进行条件判断。

```typescript
type ArrayType<T> = T extends any ? T[] : never;

type NumOrStrArray = ArrayType<number | string>; // number[] | string[]

const numArray: NumOrStrArray = [1, 2, 3];
const strArray: NumOrStrArray = ["a", "b", "c"];
```

## TS 常见内置工具

-   `Partial<T>`：将类型 `T` 中的所有属性设置为**可选**。
-   `Required<T>`：将类型 `T` 中的所有属性设置为**必选**。
-   `Readonly<T>`：将类型 `T` 中的所有属性设置为**只读**。
-   `Record<K, T>`：构造一个类型，其属性名的类型为 `K`，属性值的类型为 `T`。

```typescript
type PageInfo = {
    title: string;
};

type Page = "home" | "about" | "contact";

type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};

const x: MyRecord<Page, PageInfo> = {
    home: { title: "home" },
    about: { title: "about" },
    contact: { title: "contact" },
};
```

-   `Pick<T, K>`：从类型 `T` 中挑选出部分属性 `K` 构造新类型。

```typescript
interface Person {
    name: string;
    age: number;
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type PersonName = MyPick<Person, "name">; // { name: string }
```

-   `Omit<T, K>`：从类型 `T` 中剔除部分属性 `K` 构造新类型。

```typescript
type Person = {
    name: string;
    age: number;
};

// type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 不用 Pick
// type MyOmit<T, K extends keyof T> = {
//     [P in Exclude<keyof T, K>]: T[P];
// };

// 不用 Exclude
type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};

type PersonAge = MyOmit<Person, "name">;

const person: PersonAge = {
    age: 18,
};
```

-   `Exclude<T, U>`：从类型 `T` 中剔除可以赋值给 `U` 的类型。

```typescript
type MyExclude<T, U> = T extends U ? never : T;

type T0 = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = MyExclude<string | number | (() => void), Function>; // string | number
```

-   `Extract<T, U>`：从类型 `T` 中提取可以赋值给 `U` 的类型。

```typescript
type MyExtract<T, U> = T extends U ? T : never;

type T0 = MyExtract<"a" | "b" | "c", "a">; // "a"
type T1 = MyExtract<string | number | (() => void), Function>; // () => void
```

-   `NonNullable<T>`：从类型 `T` 中剔除 `null` 和 `undefined`。

```typescript
type NonNullable<T> = T & {};

type T0 = MyNonNullable<string | number | undefined>; // string | number
type T1 = MyNonNullable<string | number | null | undefined>; // string | number
```

-   `InstanceType<T>`：获取构造函数类型的实例类型。

```typescript
type MyInstanceType<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: any) => infer R ? R : any;

function factory<T extends new () => any>(c: T): MyInstanceType<T> {
    return new c();
}

class Person {
    name: string;
    constructor() {
        this.name = "Tom";
    }
}

const person = factory(Person); // 返回 Person 的实例类型

class Animal {
    name: string;
    constructor() {
        this.name = "Dog";
    }
}

const animal = factory(Animal); // 返回 Animal 的实例类型
```
