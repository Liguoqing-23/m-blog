# TS 设计模式

## 什么是设计模式

设计模式的定义是：在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。

设计模式具有四要素：

-   模式名称 pattern name，用以见名知意、所见即所得的描述模式的问题、解决方案和效果。
-   问题 problem，描述了应该在何时使用模式，是模式的因，即模式的应用场景。
-   解决方案 solution，描述了模式设计的组成部分、关系、职责和协作方式，就像一个 template，是模式的核心。
-   效果 consequences，描述了模式的优缺点、使用模式的收益和代价，是模式的结果。

通俗来说，设计模式就是一种经过验证的、被广泛接受的、用来解决特定问题的解决方案。设计模式是一种思想，是一种经验的总结，是某种程度上的最佳实践。说白了，设计模式就是给好用的代码取个好听的名字，并附以其利弊场景。

> [!note] 更多阅读
> 《JavaScript 设计模式与开发实践》
> 《设计模式：可复用面向对象软件的基础》

## 设计原则

设计原则是设计模式的指导思想。设计模式通常都是遵循一个或多个设计原则，确保设计的合理性、灵活性和高可维护性。

设计原则和设计模式相互促进。在我看来。设计原则像一种标准，设计模式是一种实现。标准从来不是永恒不变的，实现也是多种多样的，但是标准和实现之间的关系是相辅相成的，二者通过实践不断完善，不断细化或者抽象。所以实际上，从来也没有说哪个设计模式必须遵从设计原则，也就更没得说必须遵从哪个设计模式。

## 单例模式 Singleton

现在有一场 ACM，有很多队伍参加，每个队伍都有各自选手的通过题数、罚时等等，但大家共享一个排名，这个排名的 LIST 就是一个单例。

再比如一个简单的购票系统，票池被所有的售票窗口共享，这个票池就是一个单例。

或者一个 Log，所有 Log 都写到同一个文件中，这个文件就是一个单例。

又或者一个全局缓存、全局配置、`window object` 等等。

单例模式有明显的特点，单例模式的实例是全局性的，即在任何地方都可以访问到对唯一单例的引用。

定义一个 Singleton Class 需要三个基本步骤：

-   一个私有的静态变量用于保存唯一实例的引用
-   一个私有的构造函数，防止外部直接实例化
-   一个公有的静态方法用于获取唯一实例

```typescript
class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
```

下面用 ACM 的排名来实现一个单例模式：

::: code-group

```typescript [problem.ts]
// 题目类
export class Problem {
    private name: string;
    private level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }

    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level;
    }
}
```

```typescript [team.ts]
// 团队类
import { Rank } from "./rank";
import type { RankMap } from "./rank";

export class Team {
    private rank: Rank;
    private id: number;

    constructor(id: number) {
        this.id = id;
        this.rank = new Rank();
    }

    public getId(): number {
        return this.id;
    }

    public getRank(): RankMap[] {
        return this.rank.getRank();
    }

    public addRank(problem_name: string, score: number): void {
        this.rank.addRank(problem_name, this.id, score);
    }

    public printRank(): void {
        this.rank.printRank();
    }
}
```

```typescript [rank.ts]
// 排名类
export type RankMap = {
    problem_name: string;
    group_id: number;
    score: number;
};

export class Rank {
    private static instance: Rank;
    private rank: RankMap[] = [];

    constructor() {
        if (Rank.instance) {
            return Rank.instance;
        }
        Rank.instance = this;
    }

    public addRank(
        problem_name: string,
        group_id: number,
        score: number
    ): void {
        this.rank.push({
            problem_name,
            group_id,
            score,
        });
    }

    public getRank(): RankMap[] {
        return this.rank;
    }

    public printRank(): void {
        for (let i = 0, len = this.rank.length; i < len; i++) {
            console.log(
                "Problem: " +
                    this.rank[i].problem_name +
                    ", Team: " +
                    this.rank[i].group_id +
                    ", Score: " +
                    this.rank[i].score
            );
        }
    }
}
```

```typescript [client.ts]
import { Team } from "./team";
import { Problem } from "./problem";

// 创建三个队伍
const team1 = new Team(1);
const team2 = new Team(2);
const team3 = new Team(3);

// 创建三个题目
const problem1 = new Problem("Problem 1", 1);
const problem2 = new Problem("Problem 2", 2);
const problem3 = new Problem("Problem 3", 3);

// AC
team1.addRank(problem1.getName(), 1);
team1.addRank(problem2.getName(), 2);

team2.addRank(problem1.getName(), 3);
team2.addRank(problem3.getName(), 2);

team3.addRank(problem2.getName(), 1);

// print
team1.printRank();
console.log();
team2.printRank();
console.log();
team3.printRank();
```

```typescript [result]
// Problem: Problem 1, Team: 1, Score: 1
// Problem: Problem 2, Team: 1, Score: 2
// Problem: Problem 1, Team: 2, Score: 3
// Problem: Problem 3, Team: 2, Score: 2
// Problem: Problem 2, Team: 3, Score: 1

// Problem: Problem 1, Team: 1, Score: 1
// Problem: Problem 2, Team: 1, Score: 2
// Problem: Problem 1, Team: 2, Score: 3
// Problem: Problem 3, Team: 2, Score: 2
// Problem: Problem 2, Team: 3, Score: 1

// Problem: Problem 1, Team: 1, Score: 1
// Problem: Problem 2, Team: 1, Score: 2
// Problem: Problem 1, Team: 2, Score: 3
// Problem: Problem 3, Team: 2, Score: 2
// Problem: Problem 2, Team: 3, Score: 1
```

:::

当然，这是用类来实现的单例模式，在 TS 或者说 JS 中因为语言的特性，其实用一个对象就可以实现全部的类的功能：

```typescript
// 一个对象就足够了！
export const singleton = (function () {
    const _config = {
        name: "Singleton 1",
    };
    function privateMethod() {
        console.log("do something private");
    }
    return {
        publicMethod: function () {
            privateMethod();
        },
        getConfig: function () {
            return _config;
        },
        setConfig: function (name: string) {
            config.name = name;
        },
    };
})();

const config = singleton.getConfig();
singleton.setConfig("Singleton 2");
console.log(config); // { name: 'Singleton 2' }
singleton.publicMethod(); // do something private
```

vue 中的 store 也是一个单例模式实现。还有 axios 默认导入的就是一个单例实例，不过也可以通过 `axios.create()` 来创建多个实例。

```typescript
// moduleA.ts
import axios from "axios";
export moduleA_Axios = axios;

// moduleB.ts
import axios from "axios";
export moduleB_Axios = axios;

// main.ts
import { moduleA_Axios } from "./moduleA";
import { moduleB_Axios } from "./moduleB";

console.log(moduleA_Axios === moduleB_Axios); // true
```

单例适用于创建过程复杂、资源消耗大的对象，比如线程池、缓存、日志对象等等，但这些对象又经常使用。正是因为单例在内存中只有一个实例，所以可以减少内存的开销，尤其是在对象需要频繁创建销毁，且过程无法优化时，单例的优势是非常明显的。

> [!note] 其他阅读
> https://stackoverflow.com/questions/137975/what-are-drawbacks-or-disadvantages-of-singleton-pattern/142450#142450
