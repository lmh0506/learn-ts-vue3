// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function echo<T>(arg: T): T {
  return arg
}

const result = echo(1234)
// 泛型也可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const result3 = echoWithArr([1, 2, '3'])

interface IWithLength {
  length: number;
}
// 泛型继承接口 约束泛型
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = echoWithLength('123')
const arr = echoWithLength([1, 2, 3])
const obj = echoWithLength({length: 12, width: 12})
// num下没有length属性
// const num = echoWithLength(123)

class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.pop()
  }
}

const numQueue = new Queue<number>()
numQueue.push(1)
// numQueue.push('1')
console.log(numQueue.pop().toFixed())

//泛型和 interface
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = {key: 1, value: '123'}
let kp2: KeyPair<string, number> = {key: '1', value: 123}

let numArr: number[] = [12, 2, 3]
let numArr2: Array<number> = [1, 2, 3]
