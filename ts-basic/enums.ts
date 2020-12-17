// 数字枚举，一个数字枚举可以用 enum 这个关键词来定义，我们定义一系列的方向，然后这里面的值，枚举成员会被赋值为从 0 开始递增的数字,
// enum Direction {
//   Top,
//   Left,
//   Right,
//   Bottom
// }
// // 正向取值
// console.log(Direction.Top)
// // 反向映射
// console.log(Direction[0])
// console.log(Direction)

// 字符串枚举
enum Direction {
  Top = 'UP',
  Left = 'LEFT',
  Right = 'RIGHT',
  Bottom = 'BOTTOM'
}

const dirt = 'UP'
if (dirt === Direction.Top) {
  console.log('go up!')
}
