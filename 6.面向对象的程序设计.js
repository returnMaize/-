理解对象：
{
  https://blog.csdn.net/dhhjd/article/details/103727772
}

创建对象：
{
  1. 工厂模式
  function genObj (name, age) {
    const obj = new Object()
    obj.name = name;
    obj.age = age;
    obj.sayName = function () {
      console.log(this.name)
    }
    return obj;
  }
  2. 构造函数模式
  function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
      console.log(this.name)
    }
  }
  3. 原型模式
  function Person (name, age) {
    this.name = name;
    this.age = age
  }
  Person.prototype.sayName = function () {
    console.log(this.name)
  }
}

继承：
{

}