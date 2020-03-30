// 布尔值 boolean
let isDone: boolean = false;

// let createdByNewBoolean: boolean = new Boolean(1);
// 不能将类型“Boolean”分配给类型“boolean”。
// “boolean”是基元，但“Boolean”是包装器对象。



// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;

let notANumber: number = NaN;
let infinityNumber: number = Infinity;



// 字符串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;



// 空值
// JavaScript 没有空值（Void）的概念，
// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数

function alertName(): void {
  alert('My name is Tom');
}

// alertName();


// Null 和 Undefined

let u: undefined = undefined;
let n: null = null;

// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

// 这样不会报错
// let num: number = undefined;

// 这样也不会报错
// let u: undefined;
// let num: number = u;


//  而 void 类型的变量不能赋值给 number 类型的变量：
// let u: void;
// let num: number = u;
// index.ts(2,5): error TS2322: Type 'void' is not assignable to type 'number'.



// 任意类型

let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型


// 联合类型 一个变量表示多个类型
let contesa: string | number;
contesa = 'seven';
contesa = 7;



// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
      return n;
  } else {
      return n();
  }
}

// 类型断言 <类型>值 | 值 as 类型
// 将一个联合类型的变量指定为一个更加具体的类型
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
