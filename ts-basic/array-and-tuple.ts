// 最简单的方法是使用 类型 + 方括号的方法来表示数组
let arrOfNums: number[] = [1, 3, 3, 4, 5]
// 数组的中的元素不允许出现定义的类型以外的类型
arrOfNums.push(3)
// arrOfNums.push('3')

function test() {
  console.log(arguments)
  // 类数组不能赋值给数组
  // let arr: any[] = arguments
}
// 元祖的表示和数组非常类似，只不过它将类型写在了里面 这就对每一项起到了限定的作用
let user: [string, number] = ['张三', 12]
