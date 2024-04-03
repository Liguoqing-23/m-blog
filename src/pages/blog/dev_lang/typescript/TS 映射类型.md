# TS 映射类型

## 映射类型的定义

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
