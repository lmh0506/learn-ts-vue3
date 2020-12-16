class Animal {
  // 静态属性 只允许类访问 实例无法访问
  static id: number
  // 只读属性
  readonly name: string;
  constructor(name) {
    this.name = name
  }
  // private 只允许当前类访问
  // protected 允许当前类和子类访问 子类通过super访问
  // 默认public
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('snake')
console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaogou = new Dog('小狗')
console.log(xiaogou.bark())

// 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
