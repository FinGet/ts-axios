class Point {
  // z = 3;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // return {a: 'a'} 如果return了一个对象，那实例就不再指向这个类了
  }
  // 只读属性
  get getx() {
    return this.x > 3 ? this.x : 3
  }
  // 原型上的方法
  getPosition() {
    return `(${this.x},${this.y})`;
  }
  // 静态方法 实例无法继承
  static getClassName() {
    return Point.name;
  }

  print() {
    console.log('我是父类的方法')
  }
}

let p1 = new Point(3,5);
console.log(p1);
console.log(p1.getx); // 3
p1.getx = 5; // 无效
console.log(p1.getx); // 3

console.log(Point.getClassName());

// 继承

class ChildPoint extends Point{
  constructor(x, y, z) {
    super(x,y); // 在没调用super之前，子类是没有自己this的
    this.z = z;
  }

  print() {
    console.log('我是子类的方法');
    // super当对象使用，调用父类的方法
    super.print();
  }

  static getClassName() {
    // 这里super指向父类
    console.log(super.getClassName());
  }
}

let cp1 = new ChildPoint(2,5,7);
console.log(cp1);
cp1.print(); // 我是子类的方法  我是父类的方法
ChildPoint.getClassName();


// 原生构造函数

// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object

class CustomArray extends Array{
  constructor(...arg) {
    super(...arg)
  }
}

const arr = new CustomArray(1, 2, 3)
console.log(arr)