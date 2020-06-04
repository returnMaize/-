Object:
{
  通过对象直面量定义对象时 实际上不会调用Object构造函数
}

Array:
{
  使用数组直面量方式创建数组注意事项：
  const arr = [1, 2,]
  这种形式在IE8及更早版本会创建一个长度为三的数组 值分别为 1 2 undefined

  使用Array构造器创建数组时可以不加new关键字
  如果Array参数传的是一个数值 那么将创建数值长度的数组（这就导致不能传小数或者负数给Array 这样会导致RangeError）

  与对象字面量一样 数组字面量也不会调用Array函数

  数组的length不仅仅是只读属性 也可以通过其设置数组长度

  数组最多包含 4294967295 项
  Array.isArray()

  转换方法
  所有的对象都拥有toLocaleString() toString() valueOf()方法

  注意：alert函数会在后台调用参数的toString()方法
  这就导致alert([1, 2, 3])会弹出 1, 2, 3这样的字符

  数组toString方法工作原理
  先调用每一项的toString方法 然后使用逗号分隔符拼接成成字符串
  如果数组的某一项为null 或 undefined name拼接时以空字符拼接

  方法
  改变原数组
  push（返回添加元素后数组长度） pop（返回删除元素）
  shift（返回删除元素） unshift（返回添加元素后数组长度）
  reverse（返回倒叙后的数组） sort（返回按规则排序后的数组）
  splice（返回删除的元素数组）

  不改变原数组
  concat
  indexOf
  every 返回布尔 每一个回调返回值都为true 则返回true
  filter
  forEach 没有返回值
  map
  some 返回布尔 存在一个回调返回值为true 则返回true
  reduce
  reduceRight
}

Date:
{
  Date类型是在早起java中的java.util.Date类基础上构建的 为此 Date类型使用自UTC（国际协调时间）1970.1.1零点开始经过的毫秒数来保存日期 在使用这种数据存储数据格式的条件下 Date类型保存的日期能够精确到1970年1.1日之前或之后的285616年
  创建一个日期对象 只需要new Date()
  在调用Date构造函数不传递参数的情况下 新创建的对象自动获得当前日期和事件 如果想要根据特定的日期和事件创建日期对象 必须传入表示该日期的毫秒数 即从UTC时间1970年1月1日零点至该日期经过的毫秒数 为了简化这一计算过程 ECMAScript 提供了两个方法 Date.parse() Date.UTC()
  其中Date.parse()方法接收一个表示日期的字符串参数 然后尝试根据这个字符串返回相应日期的毫秒数 ECMA - 262没有定义Date.parse()应该支持那种日期格式 因此这个方法的行为因实现而已 而且通常是因地区而异 将地区设置为美国的浏览器通常接收下列日期格式：
  月 / 日 / 年
  英文月 日 年
  星期 月 日 年 时分秒 时区
  YYYY - MM - DDTHH: mm: ss.sssZ
  如果Date.prase()方法的参数字符串不能表示日期 name返回NaN
  如果将表示日期的字符串传递给Date构造函数 它会隐式调用Date.parse() 也就是说
  new Date(Date.parse('May 25, 2004')) === new Date('May 25, 2004')

  Date.UTC()
  同样返回表示日期的毫秒数 但它与Date.parse()在构建值时使用不同的信息 Date.UTC()的参数分别是年份 基于零的月份（一月是零 二月是一） 天 小时 分钟 秒 毫秒 在这些参数中 年月是必须参数 天的默认值是1 时分秒为0
  new Date(Date.UTC(2020, 11, 11, 0, 0))
  同Date.parse()一样 new Date也会隐式调用Date.UTC方法

  ECMAScript 5添加了Date.now()方法 返回毫秒数
  有些浏览器也可以使用 + new Date()

  和其他类型一样 Date 类型也重写了toLocaleString() toString() 和 valueOf方法
  toLocaleString()方法会按照与浏览器设置的地区相适应的格式返回日期和时间 toString()返回带有时区信息的日期和时间

  格式化方法
  toDateString()
  toTimeString()
  toLocaleDateString()
  toLocaleTimeString()
  toUTCString()
}

RegExp:
{
  ECMAScript通过RegExp类型支持正则表达式
  g：全局
  i：不区分大小写
  m：多行模式

  实例属性
  globalThis
  ignoreCase
  lastIndex
  multiline
  source

  实例方法
  exec
  test

}

Function:
{
  使用函数表达式声明函数时后面需加上一个分号 和其他变量声明一样
  通过new Function()的方式创建函数不被推荐 因为这种语法会导致解析两次代码 第一次解析常规ECMAScript代码 第二次是解析传入构造函数中的字符串 从而影响性能

  内部属性
  arguments: { callee: 函数本身 }
  this
  functionName.caller 保存调用当前函数的函数引用（如果在函数外部调用该函数 则caller为null）

  函数属性和方法
  length 形参个数
  prototype
  call()
  apply()
  bind()
}

Boolean:
{
  new Boolean()默认为Boolean{ false }
  valueOf()
  toString()
}

Number:
{
  toString()
  valueOf()
  toFixed() 遵循四舍五入
  toExponential() 科学计数法
  toPrecision()
}

String:
{
  属性length
  方法
  charAt()
  charCodeAt()
  concat()
  slice()
  substring()
  indexOf()
  lastIndexOf()
  trim()
  toLowerCase()
  toLocaleLowerCase()
  toUpperCase()
  replace()
  ...
}

单体内置对象：
{
  Global
  Math
}