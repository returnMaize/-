标识符
变量名 函数名 函数参数 属性名

变量名
ECMAScript的变量是松散类型（可以保存任何类型的数据）

数据类型
简单数据类型
null undefined string number boolean symbol
复杂数据类型
object

typeof （未经声明的变量返回undefined 这是唯一一个使用用未申明变量不报错的情况）
结果
{
  undefined
  boolean
  string
  function
    number
object
  从技术角度上讲 函数也在ECMAScript中是对象 不是一种数据结构 然而函数也确实也有一些特殊的属性 因此通过typeof操作符来区分函数和其他对象是有必要的
}


Boolean:
{
  布尔转换
  空字符 0 NaN null undefined
}

Number:
{
  使用IEEE754格式表示整数和浮点数 （这种格式有存在精度不准的问题）
  由于浮点数保存时内存空间是整数的两倍 所以ECMAScript会不失时机的把浮点数值转化为整数值
  浮点数最高精度是17位小数

  最小数值
  Number.MIN_VALUE 5e-324
  最大数值
  Number.MAX_VALUE

  Infinity - Infinity
  isFinite() 判断数值是否超出最大或最小数值
  isNaN()
  数值装换
  undefined -> NaN
  string -> 纯数字字符正常转换（包括16进制 8进制） 其他均为NaN
  object -> vlaueOf() -> toString()

  parseInt(num, 以几进制进行转换) 字符解析整数
  parseFloat() 字符解析浮点数
}

String:
{
  字符由Unicode字符组成
  特殊字符：转义序列
  \n
  \t
  \u nnnn 十六进制代码表示Unicode字符

  String() 方法工作原理
  先看值有没有toString方法 如果有就调用其toString()方法 如果没有undefined返回字符undefined null返回字符null(这也导致String 的 效率没有toString高 毕竟多了一个判断)
}

Object:
{
  从技术角度上讲 ECMA - 262中的对象的行为不一定适用于JavaScript中的其他对象
  浏览器环境中的对象 比如BOM DOM 中的对象 都属于宿主对象 因为他们是由宿主提供和定义的
  因此宿主对象也可能会不继承Object
}

操作符:
{
  用于操作数据（字符 布尔 甚至对象等）
  如 + - * /
  在应用于对象时 一般会调用对象的valueOf方法和toString以便取到可以操作的值

  位操作符 ~ & | ^ << >> （先跳过 不够常用 以后再整理）
  布尔操作符! || &&
    乘性操作符 * / %
  加性操作符 + -
    关系操作符 > < <= >=
    相等操作符 == != === !==
    条件操作符 ? :
    赋值操作符 = *=  += -= %= ...
  逗号操作符, 返回最后一项
}

语句:
{
  if 语句
  do -while 语句
  while 语句
  for 语句
  for-in 语句
  label 语句：一般用于标识for循环（一般与与break和continue语句连用）
  labelFor: for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break labelFor
    }
  }

  break continue语句 （用于当前循环）
  with 语句（工作原理 with语句代码中的变量被认为是一个局部变量 如果在局部环境中没有找到这个变量的定义 就会查询with参数对象中是否有同名属性 如果发现 就以这个对象属性的值作为变量的值）
  with ({ name: 'hehe' }) {
    console.log(name) // hehe
  }

  switch 语句
}

  函数:
  {
    参数：函数中的参数与arguments对象存在映射关系 修改arguments对应元素的值时 对应的命名参数也会随之变化
    注意：如果函数值传入一个参数 修改arguments[1] 对应的命名参数是不会随之修改的 因为arguments对象的长度是由实参决定的 不是形参决定的
    另外：严格模式下修改argumnets元素的值是无效的（不会映射到对应命名参数） 并且如果直接修改arguments还会导致语法错误
  }




