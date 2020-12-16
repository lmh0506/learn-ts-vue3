// 类型推断
let str = 'str'

// 联合类型
let numberOrString: number | string
numberOrString = 'abc'
numberOrString = 123

function getLength(input: number | string): number {
  // 类型断言
  // 这里我们可以用 as 关键字，告诉typescript 编译器，你没法判断我的代码，但是我本人很清楚，这里我就把它看作是一个 string，你可以给他用 string 的方法。
  let str = input as string
  if(str.length) {
    return str.length
  } else {
    let number = input as number
    return number.toString().length
  }
}

function getLength2(input: number | string): number {
  // typescript 在不同的条件分支里面，智能的缩小了范围，这样我们代码出错的几率就大大的降低了。
  if(typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}
