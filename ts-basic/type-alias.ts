// 类型别名
type PlusType = (x: number, y: number) => number
let sum: PlusType = (x: number, y: number) => x + y

// 定义 联合类型 的别名
type strOrNum = string | number
let result4: strOrNum = 12
result4 = '12'

// 字面量
const nameVal: 'name' = 'name'
const one: 1 = 1
type Directions = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
let toWhere: Directions = 'DOWN'

interface IName {
  name: string;
}

// 定义 交叉类型 的别名
type IPerson = IName & {age: number}
let person: IPerson = {name: '12', age: 12}