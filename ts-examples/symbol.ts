const s = Symbol(); // symbol 是基础类型，并不需要用new生成

console.log(s);

const s2 = Symbol();

// console.log(s == s2);

// s2 + 1; symbol不能用于计算

console.log(s2.toString());

const sn: unique symbol = Symbol('name'); // unique只能用const 定义
// let sn = Symbol('name'); ⚠️这样写是不能用 obj[sn]
const obj = {
   [sn]: 'FinGet',
   age: 18,
   sex: 'man'
}

console.log(obj[sn]);

// 获取不到symbol属性
for(let key in obj) {
	console.log(key);
}
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(JSON.stringify(obj));

// 获取symbol属性
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));




// Symbol.for(),Symbol.keyFor()

// 有时，我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点。

let s3 = Symbol.for('foo');
let s4 = Symbol.for('foo');

s3 === s4 // true

// Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。


let s5 = Symbol.for("foo");
Symbol.keyFor(s5) // "foo"

let s6 = Symbol("foo");
Symbol.keyFor(s6) // undefined


// 11个内置symbol

// Symbol.hasInstance  设置instanceof 的返回值

/*
对象的Symbol.hasInstance属性，指向一个内部方法。
当其他对象使用instanceof运算符，判断是否为该对象的实例时，
会调用这个方法。
比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。*/
class MyClass {
  [Symbol.hasInstance](foo: any) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof <any>new MyClass() // true


// Symbol.isConcatSpreadable 对象是否能展开

/*
对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
 */

/*
let arr3: string[] = ['c', 'd'];
['a', 'b'].concat(arr3, 'e') // ['a', 'b', 'c', 'd', 'e']
arr3[Symbol.isConcatSpreadable] // undefined

let arr4: string[] = ['c', 'd'];
arr4[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr4, 'e') // ['a', 'b', ['c','d'], 'e']
*/

// Symbol.species 指定衍生类的指向

// 对象的Symbol.species属性，指向一个构造函数。创建衍生对象时，会使用该属性。

/*
class MyArray extends Array {
}

const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

b instanceof MyArray // true
c instanceof MyArray // true

 */

class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const a = new MyArray();
const b = a.map(x => x);

b instanceof MyArray // false
b instanceof Array // true


// Symbol.match

// 对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，
// 如果该属性存在，会调用它，返回该方法的返回值。

/*
String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)

class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}

'e'.match(new MyMatcher()) // 1
*/


// Symbol.replace

// 对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。

/*
const xs = {};
xs[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(xs, 'World') // ["Hello", "World"]
*/


// Symbol.search

// 对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。


class MySearch {
	public value: string;
  constructor(value:string) {
    this.value = value;
  }
  [Symbol.search](string:string) {
    return string.indexOf(this.value);
  }
}
// 'foobar'.search(new MySearch('foo')) // 0


// Symbol.split

// 与上面类似




// Symbol.iterator 

// 对象的Symbol.iterator属性，指向该对象的默认遍历器方法

/*
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
*/


//  Symbol.toPrimitive

// 对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

/*
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'
*/


// Symbol.toStringTag

// 对象的Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，
// 如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。

// 例一
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"

// 例二
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x12 = new Collection();
Object.prototype.toString.call(x12) // "[object xxx]"


// Symbol.unscopables
// 对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。

/*

// 没有 unscopables 时
class MyClass {
  foo() { return 1; }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 1
}

// 有 unscopables 时
class MyClass {
  foo() { return 1; }
  get [Symbol.unscopables]() {
    return { foo: true };
  }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 2
}

*/



























