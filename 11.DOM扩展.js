选择符API
querySelector()
querySelectorAll()

origin.mathchesSelector(target CSS选择符)如果origin元素 和 target(CSS 选择符选择的元素相同)return true 否则 return false

元素遍历 {
  为了解决IE9之前版本不会返回文本节点导致childNodes和firstNode等特性不统一问题 Element Traversal API规范了新的一组属性
  element.childElementCount
  element.firstElementChild
  element.lastElementChild
  element.previousElementSibling
  element.nextElementSibling
}

HTML5 {
  getElementsByClassName() document 和 element 都拥有此方法
  element.classList 可以通过其操作元素class
  element.classList = 'class1 class2 class3'
  element.classList.add(className)
  element.classList.contains(className)
  element.classList.remove(className)
  element.classList.toggle(className) 如果元素存在className 删除它 如果不存在 添加它

  焦点管理
  document.activeElement 返回当前获得焦点的元素（文档刚刚加载完成时 document.activeElement保存的是document.body 文档加载期间document.activeElement === null）

  HTMLDocument的变化
  document.readyState(loading | complete)

  兼容模式
  document.compatMode 告诉开发人员浏览器采用那种渲染模式（CSS1Compat | BackCompat）

  head属性
  document.head 返回head元素

  字符集属性
  document.charset 文档中实际使用的字符集

  自定义数据属性
  HTML5规定给元素添加非标准的特性时需要添加data - 前缀 可以通过dataset属性来访问自定义属性 对应的key值会变成 大驼峰
  element.dataset

  插入标记
  element.innerHTML
  并不是所有的元素都支持innerHTML属性 不支持innerHTML的元素有 表格类 head html style col colgroup frameset

  element.outerHTML 返回包含本身元素的所有子元素字符

  element.insertAdjacentHTML

  element.scrollIntoView(Boolean) 默认为true 滚动到元素顶部与视口顶部齐平 如果传false 则不一定与视口顶部齐平 只保证元素尽可能出现在视口中

  专有扩展
  IE的文档模式 通过meta标签告诉浏览器该使用那个级别的CSS和那个版本的JavaScript
    < meta http - equiv="X-UA-Compatible" content = "IE=IEVersion" >
      IEVersion值
  Edge
  EmulateIE9
  EmulateIE8
  EmulateIE7

  children属性
  element.children 只包含元素节点

  contains() 方法
  element.contains(child) 元素是否包含child

  DOM3 提供了compareDocumentPosition()方法确认节点间关系 return Number
  1 无关
  2 居前
  4 居后
  8 包含
  16 被包含

  插入文本
  element.innerText
}