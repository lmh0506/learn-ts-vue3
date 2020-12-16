interface Person {
  readonly id: number;
  name: string;
  age: number;
  sex?: number // 可选属性
}

let zs: Person = {
  id: 123,
  name: '张三',
  age: 20
}
// 只读属性
// zs.id = 12
