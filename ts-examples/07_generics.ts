// 跟any不同，<T>根据输入值也定义传入的类型和返回值类型
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}

// 可以直接指定类型
console.log(getArray<number>(2).map(item => item.toFixed()));
// 也可以ts自己类型推断
console.log(getArray(3).map(item => item.toFixed()));


// 泛型约束

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}