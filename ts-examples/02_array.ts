let arr: number[] = [1, 1, 2, 3, 5];

let arr1: Array<number> = [1, 1, 2, 3, 5];

// 接口定义数组 定义类型，长度不定
interface NumberArray {
  [index: number]: number;
}
let arr2: NumberArray = [1, 1, 2, 3, 5];

// 任意类型
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];



// 元祖 固定类型，固定长度
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
let x: [string, number]
x = ['hello', 1];

// x.push(true);  // 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型(string, number) 
x.push(1);