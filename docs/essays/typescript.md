# TypeScript

TypeScript 是 Microsoft 开发的开源编程语言，是 JavaScript 的超集，主要提供静态类型检查和编译时错误报告，增强了代码的可维护性和可读性。

## 基本类型

TypeScript 提供了 JavaScript 所有的基本类型，同时也增加了一些新的类型。

- **Boolean**: `let isDone: boolean = false`;
- **Number**: `let decimal: number = 6`;
- **String**: `let color: string = "blue"`;
- **Array**: `let list: number[] = [1, 2, 3];` 或 `let list: Array<number> = [1, 2, 3]`;
- **Tuple**: `let x: [string, number]; x = ["hello", 10]`;
- **Enum**: `enum Color {Red, Green, Blue}; let c: Color = Color.Green`;
- **Any**: `let notSure: any = 4`;
- **Void**: `function warnUser(): void { console.log("This is my warning message"); }`
- **Null 和 Undefined**: `let u: undefined = undefined; let n: null = null`;
- **Never**: `function error(message: string): never { throw new Error(message); }`
- **Object**: `let obj: object = { name: "Tom" }`;

## 接口

接口用于定义对象的类型。可以定义属性、方法和可选属性。

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // 可选属性
  sayHi(): string; // 方法
}
```

## 类

TypeScript 支持面向对象编程的特性，包括类、继承、修饰符等。

```typescript
class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}
```

## 泛型

泛型使得函数和类可以适应多种类型，提高代码的重用性。

```typescript
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");
```

## 类型推断

TypeScript 会根据变量的初始值推断出它的类型，减少显式类型注释的必要。

```typescript
let x = 3; // x 被推断为 number 类型
```

## 类型断言

类型断言可以告诉编译器某个值的具体类型。

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 联合类型和交叉类型

联合类型表示一个值可以是几种类型之一，交叉类型则表示将多个类型合并为一个类型。

```typescript
let value: number | string;
value = 42;
value = "hello";

interface A {
  a: number;
}
interface B {
  b: number;
}
let ab: A & B = { a: 1, b: 2 };
```

## 高级类型

- 映射类型: 可以根据一个旧类型创建一个新类型。

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

- 条件类型: 根据条件来选择类型。

```typescript
type TypeName<T> = T extends string ? "string" : T extends number ? "number" : "object";
```

## 模块和命名空间

模块用于将代码组织成独立的文件和逻辑单元，命名空间用于将全局作用域划分为更小的作用域。

```typescript
// 模块
export class MyClass {
  /* ... */
}
import { MyClass } from "./MyModule";

// 命名空间
namespace MyNamespace {
  export class MyClass {
    /* ... */
  }
}
```

## 装饰器

装饰器是一种特殊的类型声明，它能被附加到类声明、方法、访问符、属性或参数上，可以修改类的行为。

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

## 类型检查机制

TypeScript 提供了丰富的类型检查机制，确保类型安全。

- 严格模式: 启用严格类型检查。
- 类型守卫: 用于确保代码在运行时的类型安全。

```typescript
function isNumber(x: any): x is number {
  return typeof x === "number";
}
if (isNumber(value)) {
  console.log(value.toFixed(2)); // 现在 value 被认为是 number
}
```

## 兼容性和配置

TypeScript 提供了多种配置选项来控制编译行为和兼容性。

- tsconfig.json: 配置 TypeScript 编译器的行为。
- lib: 指定包含哪些库的声明文件。
- target: 指定编译目标 JavaScript 版本。

## 工具和生态系统

TypeScript 拥有丰富的工具和生态系统支持，包括编辑器插件（如 VSCode）、构建工具（如 Webpack）、框架（如 Angular）等。

## interface 与 type 的异同

> 整理自 "阮老师 TypeScript 教程" [TypeScript 的 interface 接口 👉](https://wangdoc.com/typescript/interface#interface-%E4%B8%8E-type-%E7%9A%84%E5%BC%82%E5%90%8C)

`interface` 命令与 `type` 命令作用类似，都可以表示对象类型。

很多对象类型既可以用 interface 表示，也可以用 type 表示。而且，两者往往可以换用，几乎所有的 interface 命令都可以改写为 type 命令。

它们的相似之处，首先表现在都能为对象类型起名。

```typescript
type Country = {
  name: string;
  capital: string;
};

interface Country {
  name: string;
  capital: string;
}
```

上面示例是 `type` 命令和 `interface` 命令，分别定义同一个类型。

`class` 命令也有类似作用，通过定义一个类，同时定义一个对象类型。但是，它会创造一个值，编译后依然存在。如果只是单纯想要一个类型，应该使用 `type` 或 `interface`。

interface 与 type 的区别有下面几点。

1. `type` 能够表示非对象类型，而 `interface` 只能表示对象类型（包括数组、函数等）。
2. `interface` 可以继承其他类型，type 不支持继承。
3. 同名 `interface` 会自动合并，同名 `type` 则会报错。也就是说，TypeScript 不允许使用 `type` 多次定义同一个类型。
4. `interface` 不能包含属性映射（mapping），type 可以，详见《映射》一章。
5. this 关键字只能用于 interface。
6. `type` 可以扩展原始数据类型，interface 不行。
7. `interface` 无法表达某些复杂类型（比如交叉类型和联合类型），但是 `type` 可以。
