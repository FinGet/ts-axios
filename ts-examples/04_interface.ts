//  在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};

// 上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。
// 这样，我们就约束了 tom 的形状必须和接口 Person 一致。



// 可选属性
interface Person1 {
  name: string;
  age?: number; // age 是可有可无的
}

function createPerson(config: Person1): Person1 {
  return {
    name: config.name,
    age: config.age
  }
}
createPerson({ name: "1231"})



// 任意属性
interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any; // propName 是 string，但它的值是任意类型
}

// ⚠️ 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集


// 只读属性
interface Person3 {
  readonly id: number; 
  name: string;
  age?: number;
  [propName: string]: any;
}


let tom1: Person3 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

// tom1.id = 9527; 不能修改



// 索引类型

interface StringArray {
  [index: number]: string
}

let myArray: StringArray

myArray =[ "Bob", "Fred"]

let myStr: string = myArray[0]

// Typescript支持两种索引签名：字符串和数字。 
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Dog extends Animal {
  breed: string;
  constructor(breed: string) {
    super(name);
    this.breed = breed;
  }
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

interface Okay {
  [x: string]: Animal;
  [x: number]: Dog;
}
// Dog 是 Animal的子类  string是包含number的

// 接口继承

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{}; // let square = {} : Square
square.color = "blue";
square.sideLength = 10;


// 混合类型接口

interface Counter {
  (): void,
  count: number
}
// 给函数添加属性
const getCounter = <Counter> () => {
  const c = () => {c.count ++};
  c.count = 0;
  return c;
}

const counter: Counter = getCounter();




