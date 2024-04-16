# C 语言基础

## 数据类型

-   基本类型
    -   整型 `int`
    -   浮点型 `float`
    -   字符型 `char`
-   构造类型
    -   数组
    -   结构体
-   指针类型
-   void 类型

```c
int a = 10; // 整型
float b = 3.14; // 浮点型
char c = 'A'; // 字符型

int arr[10]; // 数组
struct Student {
    char name[20];
    int age;
}; // 结构体

int *p; // 指针
```

## 变量

-   不能以数字开头
-   不能使用关键字
-   不能使用特殊字符
-   区分大小写

```c
// 合法变量名
int a, num, name, _total, Student;

// 不合法变量名
int 1a, num@, name!, _total$, Student#, char;
```

## 常量

### 符号常量

用 `#define` 定义符号常量，定义后不可修改。

```c
#define PI 3.14159

// use
int main() {
    printf("%f\n", PI);
    return 0;
}
```

> [!tip] TIP
> `#define` 结尾不需要加分号。

### 字符型常量

用单引号括起来的字符。

```c
char c = 'A';
```

### 字符串常量

用双引号括起来的字符序列。

```c
char str[] = "Hello, World!";
```

## 字符转义

-   `\n` 换行
-   `\t` 制表符

## 运算符
