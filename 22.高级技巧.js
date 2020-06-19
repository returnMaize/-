高级函数
Object.prototype.toString return 字符[object NativeConstructorName]

作用域安全的构造函数
{
  function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
  }
  这是一个普通的构造函数 没有做任何处理
  如果我们没有采用new的方式调用 就会导致window上挂载name age job属性 从而影响全局变量
  Person('hjx', 22, 'web') // window.name = 'hjx' window.age = 22 window.job = 'web'
  所以我们应该给构造函数加一些边界处理 防止这种情况发生
  function Person (name, age, job) {
    if (this instanceof Person) {
      this.name = name
      this.age = age
      this.job = job
    } else {
      new Person(name, age, job)
    }
  }
  // 但是这样构造函数同样也存在另一个问题 但我们想要使用构造函数窃取完成继生时 会导致达不到预期效果
  function Man (name, age, job) {
    Person.call(this, name, age, job)
  }
  // 由于this并不属于Person的实例 所以会导致Person.call()方法直接返回一个Person的实例
  // 为了防止这种情况发生 我们可以试着让this instanceof Person变成true
  // 首先我们需要知道了解到instanceof的原理 instanceof 就是判断对象是否属于哪一个类型
  // 所以我们只需要将this(也就是Man的实例)变成Person的类型即可
  Man.prototype = new Person()
  // 之后我们再次使用构造函数窃取时就可以达到预期的效果了
}

惰性载入函数
{
  由于不同浏览器对JavaScript的支持各不相同（例如DOM BOM）这就导致我们在开发的时候需要对程序做不同的处理 下面我们来看这个例子
  function addEvent (dom, type, hendler) {
    if (dom.addEventListener) {
      dom.addEventListener(type, handler, false)
    } else {
      dom.attachEvent('on' + type, handler)
    }
  }
  由于兼容IE的DOM事件 我们经常需要做这样的判断 但是细心观察一下就会发现一个问题 我们在第一次判断之后就已经可以知道这个浏览器支持那种添加事件的API 下次再调用addEvent就应该直接调用浏览器支持的API 而我们的方法并没有达到这样的效果 它任然会继续判断浏览器存在那个API 这就导致我们做了过多的if判断
  而惰性载入函数就是用来解决这个问题的 下面我们对addEvent做一些调整
  function addEvent (dom, type, handler) {
    if (dom.addEventListener) {
      dom.addEventListener(type, handler, false)
      addEvent = function () {
        dom.addEventListener(type, handler, false)
      }
    } else {
      dom.attachEvent('on' + type, handler)
      addEvent = function () {
        dom.attachEvent('on' + type, handler)
      }
    }
  }
  现在 这样我们在下次调用addEvent方法时就不会运行判断逻辑的代码了
}

函数柯里化
{
  与函数绑定紧密相关的主题是函数柯里化 它用于创建已经设置好了一个或多个参数的函数 函数柯里化的基本方法和函数绑定是一样的 使用一个闭包返回一个函数 两者的区别在于 当函数被调用时 返回的函数还需要设置一些传入的参数 请看一下例子
  柯里化的作用：参数复用 降低通用性 提高适用性
}

防篡改对象 {
  不可扩展的对象
  Object.preventExtensions(obj) 对象不可扩展属性（仅仅不可扩展属性 现有属性可以删除修改）
  Object.isExtensible(obj) 是否不可扩展

  密封的对象
  Object.seal(obj) （属性不可扩展 现有属性不能删除 但可以修改）
  Object.isSealed(obj) 是否密封

  冻结的对象
  Object.freeze(obj) （属性不可扩展 现有属性不可删除不可修改 但可以通过设置set函数完成修改）
  Object.isFrozen(obj)
}
