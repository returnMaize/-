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

}

RegExp:
{

}

Function:
{

}