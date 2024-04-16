# TS 面向对象

## 类

早期 JS 如果要实现继承，需要通过函数和原型链来实现。ES6 引入了 `class` 来简化用法。

TS 中也支持 `class` 并且可以对类的属性方法等进行静态类型检测。

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(
            `Hello, my name is ${this.name}, I'm ${this.age} years old.`
        );
    }
}

const person = new Person("name1", 18);
```

类成员必须初始化，如果不在 `constructor` 初始化，在严格模式下会报错，可以断言或赋初始值来解决。

```typescript
class Person {
    name!: string;
    age: number = 0;
}
```

### 成员修饰符

-   `public` 公有属性，可以在类的内部和外部访问
-   `private` 私有属性，只能在类的内部访问
-   `protected` 受保护属性，只能在类的内部和子类中访问

默认为 `public`。

```typescript
class Person {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
        console.log(this.name); // error // [!code error]
        console.log(this.age); // ok
    }
}
```

### 只读修饰符

`readonly` 修饰符用来将属性设置为只读，只读属性必须在声明时或构造函数里被初始化。

```typescript
class Person {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("name1");
person.name = "name2"; // error // [!code error]
console.log(person.name); // name1
```

### setter/getter

`setter` 和 `getter` 可以用来拦截对对象属性的访问。

```typescript
class Person {
    private _name: string;
    private _age: number;

    constructor() {
        this._name = "";
        this._age = 0;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        if (name.length < 3) {
            throw new Error("name must be at least 3 characters long");
        }
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age: number) {
        if (age < 0) {
            throw new Error("age must be greater than 0");
        }
        this._age = age;
    }
}

const person = new Person();

person.name = "name1";
person.name = "na"; // error // [!code error]
person.age = -1; // error // [!code error]
person.age = 18;
```

### 参数属性

参数属性可以简化代码，可以在构造函数中将参数直接定义为属性。

```typescript
class Person {
    constructor(private name: string, private age: number) {}
}

const person = new Person("name1", 18);
console.log(person); // Person { name: 'name1', age: 18 }
```

## 抽象类

抽象类是不能被实例化的类，一般用来定义其他类的基类。抽象方法必须在抽象类中定义，必须在派生类中实现。

```typescript
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("roaming the earth...");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("woof woof");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("meow meow");
    }
}

const animal = new Animal(); // no!!! // [!code error]

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // woof woof
cat.makeSound(); // meow meow
```

是的，`Animal` 并不必须是一个抽象类，但从语义上讲，`Animal` 中的方法并不必要被实现，所以应该定义为抽象类。

TS 中的抽象类和 Java 中的抽象类还是有很多差异的，可以从语言设计和历史发展的角度探索探索。

### 鸭子类型 Duck Typing

> **If it looks like a duck, and quacks like a duck, we have at least to consider the possibility that we have a small aquatic bird of the family Anatidae on our hands.**
>
> -- _Dirk Gently's Holistic Detective Agency_

TS 是结构化类型系统，所以不必继承抽象类，只要实现了抽象类中的方法即可。

```typescript
abstract class Animal {
    abstract makeSound(): void;
}

class Dog {
    makeSound() {
        console.log("woof woof");
    }
}

function makeSound(animal: Animal) {
    animal.makeSound();
}

makeSound(new Dog()); // woof woof
```

## 类的类型

说到这里，可以所以说类的功能：

-   创建类的实例
-   类作为实例的类型
-   类作为构造函数的类型

后两者都与类的类型有关，类的类型包括实例类型和构造函数类型。

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(
            `Hello, my name is ${this.name}, I'm ${this.age} years old.`
        );
    }
}

// 作为对象的类型
const person1: Person = {
    name: "name1",
    age: 18,
    sayHello() {
        console.log("Hello");
    },
};

// 作为构造函数的类型
function factory(ctor: new (name: string, age: number) => Person): Person {
    return new ctor("name2", 18);
}

const person2 = factory(Person);
person2.sayHello();
```

## 对象类型的属性修饰符

对象类型的属性修饰符可以用来限制对象的属性。

```typescript
type Person = {
    readonly name: string; // 只读属性
    age?: number; // 可选属性
};
```

## 索引签名 Index Signatures

索引签名可以用来描述对象的索引属性。有时候我们并不知道对象的属性名，但是知道属性名的类型，这时候可以使用索引签名。

索引的类型只能是 `string` 或者 `number` 类型。

```typescript
interface Person {
    [index: number]: string | number;
}

const person: Person = {
    0: "John",
    1: 25,
};

function printPerson(person: Person) {
    for (let i = 0, len = Object.keys(person).length; i < len; i++) {
        console.log(person[i]);
    }
}

printPerson(person);
```

索引签名和其他属性互相牵制，如果索引签名是 `string` 类型，那么其他属性必须是 `string` 类型。

这里面还有很多细节，官方文档有不少解释。

> [!note] 官方文档
> https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

```typescript
type Person = {
    [index: string]: string;
    name: string;
    age: number; // error // [!code error]
};

const person: Person = {
    name: "name1",
    age: 18, // error // [!code error]
};
```

## 接口继承和实现

类可以实现接口，接口可以描述类的公共部分。

```typescript
interface Person {
    name: string;
    age: number;
    sayHello(): void;
}

interface Student extends Person {
    study(): void;
}

class Student implements Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello");
    }

    study() {
        console.log("Study");
    }
}
```

## Strict object literal assignment checking

> https://github.com/microsoft/TypeScript/pull/3823
>
> https://github.com/microsoft/TypeScript/issues/3755

## 抽象类和接口的区别

1. 抽象类是对事物的抽象，抽象了子类的通用特性，而接口是对行为的抽象，抽象了类的公共方法。
2. 抽象类往往用于定义类的继承结构，而接口用于定义类的行为规范。
3. 抽象类能够被多重继承，而接口只能被单一实现。
4. 抽象类可以包含成员的实现细节，而接口只能包含成员的声明。
5. 抽象类理解为 `is a` 关系，接口理解为 `like a` 关系。

