function sum(x: number, y: number): number {
  return x + y;
}

// ⚠️输入多余的（或者少于要求的）参数，是不被允许的。

// 用接口定义函数

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
// 参数名可以不同
mySearch = function(sur: string, subString: string) {
  return sur.search(subString) !== -1;
}


// 类型别名  类型别名用来给一个类型起个新名字。

type add = (x: number, y: number) => number
type isString = string;

let addFunc : add;

addFunc = (x:number, y:number) => x+y


// typescript的 => 
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，
// 需要用括号括起来，右边是输出类型。





// 可选参数 必须在必选参数 后面
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}




// 参数默认值
function buildName1(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}



// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}



// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

// handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'


// 重载 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的

function handleData(x:string): string[]
function handleData(x:number): number[]

function handleData(x:any):any {
  if(typeof x === 'string') {
    return x.split('');
  } else {
    return x.toString().split('').map((item: any) => Number(item))
  }
}