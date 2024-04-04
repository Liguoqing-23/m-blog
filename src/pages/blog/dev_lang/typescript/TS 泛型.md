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

### 映射类型的定义

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

<q-card>
123
</q-card>
