// ES6:
/*
class Animal {
  constructor(name) {
      this.name = name;
  }
  sayHi() {
      return `My name is ${this.name}`;
  }
}
*/
// TypeScript:
/*
TypeScript 可以使用三种访问修饰符（Access Modifiers），
分别是 public、private 和 protected。

public: 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
private: 修饰的属性或方法是私有的，不能在声明它的类的外部访问
protected: 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
*/

class Animal1 {
  public name: string; // 公共属性
  private readonly age: number; // 不能访问且只读
  protected height: number; // 子类中可以访问 super.height
  public constructor(name: string, age: number, height: number) {
      this.name = name;
      this.age = age;
      this.height = height;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}



// 类实现接口

/**
 * 实现（implements）是面向对象中的一个重要概念。
 * 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
 * 这时候就可以把特性提取成接口（interfaces），
 * 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。
 */

interface Alarm {
  alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
  alert() {
      console.log('SecurityDoor alert');
  }
}

class Car implements Alarm {
  alert() {
      console.log('Car alert');
  }
}


// 接口继承类

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
