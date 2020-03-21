class Animal {
  // 每一个类中都有一个构造器，如果程序员没有指定构造器，那么可以认为内部有一个隐形空构造器
  // 构造器的作用是，每当new一个类德时候，会执行构造器里面的代码
  // 通过new出来的实例访问到的属性叫做实例属性
  // 构造函数直接访问到的属性叫做静态属性
  // 通过static修饰的属性是静态属性
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log('hello');
  }
}
class Dog extends Animal {
  // 如果一个子类通过extends关键字继承了父类，那么在子类的constructor构造函数中，必须调用一下super
  constructor(name, age, IDNumber) {
    super(name, age);
    // 必须放在super后面
    this.IDNumber = IDNumber;
  }
  sayHello() {
    console.log('hello');
  }
}
// 使用class创建的组件是有状态组件
// 使用构造函数创建的组件时无状态组件
// 区别：有无state,有无生命周期函数
const a1 = new Dog('大黄', 3, '123456789');
a1.sayHello();
console.log(a1);
