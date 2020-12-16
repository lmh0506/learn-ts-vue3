let isDone: boolean = false

let age: number = 12
// 二进制数字
let binaryNum: number = 0b1111


let firstName: string = 'hello'
let message: string = `${firstName} world`

let u: undefined = undefined
let n: null = null
// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let a: number = undefined
let b: string = null

// any类型接受任何类型的
let any: any = 123
any = '1234'
any = true
