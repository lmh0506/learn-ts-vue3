interface Radio {
  switchRadio(trigger: boolean): void;
}
interface Battery {
  checkBatteryStatus(): void
}
// 接口的继承
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void
}
// 用 implements 关键字 来让类实现接口
class Car implements Radio {
  switchRadio(trigger: boolean) {

  }
}

// 实现多个接口，我们只需要中间用 逗号 隔开即可。
// class CellPhone implements Radio, Battery {
//   switchRadio(trigger: boolean) {

//   } 
//   checkBatteryStatus() {

//   } 
// }

class CellPhone implements RadioWithBattery {
  switchRadio(trigger: boolean) {

  } 
  checkBatteryStatus() {

  } 
}