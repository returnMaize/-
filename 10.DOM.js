介绍 {
  文档对象模型是针对HTML和XML文档的一个API
  1998年10月DOM1级规范成为W3C的推荐标准
  本章主要讨论DOM1级特性
}

Node类型 {
  DOM1级定义了一个Node接口 该接口将由DOM中的所有节点类型实现 这个Node接口在JavaScript中作为Node类型实现 除了IE之外 其他所有浏览器中都可以访问到这个类型
  节点类型
  ELEMENT_NODE 1
  ATTRIBUTE_NODE 2
  TEXT_NODE 3
  CDATA_SECTION_NODE 4
  ENTITY_REFERENCE_NODE 5
  ENTITY_NODE 6
  PROCESSING_INSTRUCTION_NODE 7
  COMMENT_NODE 8
  DOCUMENT_NODE 9
  DOCUMENT_TYPE_NODE 10
  DOCUMENT_FRAGMWNR_NODE 11
  NOTATION_NODE 12
  node.nodeType 查看节点类型 return num
  node.nodeName return tagName
  node.nodeValue 对于元素节点 始终返回null
  node.childNodes return 子节点（类数组）可以通过[index]取指定子节点 也可以通过.item(index)
  Array.prototype.slice.call(node.childNodes, 0)
  IE8及一下将NodeList设置成COM对象 不能使用这种方法 需要手动枚举
  node.parentNode return 父节点
  node.previousSibling 上一个兄弟节点
  node.nextSibling 下一个兄弟节点
  node.firstChild 第一个子节点
  node.lastChild 最后一个子节点
  node.hasChildNodes() 判断节点是否有子节点

  操作节点
  node.appendChlid(需要插入的节点) 向childNodes末尾添加子节点 （如果传入的节点存在与当前文档 那么将会将该节点从原来的位置转移到node最后一个子节点位置）
  node.insertBefore(需要插入的节点，参考节点) 将节点插入到参考节点之前（如果传入的节点存在与当前文档 那么将会将该节点从原来的位置转移到node最后一个子节点位置）
  node.replaceChild(新节点，旧节点) 替换节点（如果传入的节点存在与当前文档 那么将会将该节点从原来的位置转移到node最后一个子节点位置）
  node.removeChild(需要移除的节点)

  所有类型节点都有的方法
  node.cloneNode(接受一个布尔值 是否深拷贝） 用于克隆节点 return 克隆节点
  node.normalize() 用于去除空文本节点 和 合并相邻文本节点
}

Doucment类型 {
  JavaScript通过Document类型表示文档 在浏览器中 document对象是HTMLDocument（继承Document类型）的一个实例 document表示整个HTMl页面 而且document对象是window对象的一个属性 因此可以作为全局对象来访问
  可以通过console.dir(document)来查看document对象 从而得知
  document继承 HTMLDocument -> Document -> Node -> EventTarget -> Object
  document.body
  document.documentElement
  document.doctype
  在html标签之前的任何注释都被当作document对象的子节点 chrome
  但在IE9以上 会把html标签之后的注释也当作document对象的子节点

  文档信息
  document.title(既可以获取 也可以设置)
  document.URL
  document.domain 网页域名
  document.referrer

  获取元素方法
  document.getElementById()
  document.getElementsByTagName()
  document.getElementsByName()

  特殊集合
  document.anchors 带有name的a元素
  document.forms 文档中所有form元素
  document.images 文档中所有img元素
  document.links 文档中带有href特性的a元素

  DOM 特性检测
  document.implementation.hasFeature()

  文档写入
  document.write()
  document.writeIn()
  document.close()
  document.open()
}

Element类型 {
  element.tagName return 大写标签名
  element.id
  element.className
  element.title
  element.lang
  element.dir
  并不元素上所有的特性都可以通过这种方式获取到 用户自定义的属性不可以直接通过这种方式获取到

  获取特性
  element.getAttribute()
  element.setAttribute() 如果特性不存在 会创建并设置该特性
  element.removeAttribute()
  注意：特性名不区分大小写 另外 根据HTML5规范 自定义特性应该加上data - 前缀 以便验证

  有两个特殊的特性 他们通过element直接访问 和 通过 getAttribute访问返回的值并不相同
  style 直接访问返回对象 getAttribute返回字符
  onclick(事件)

  attributes属性
  element.attrubutes
  element.attributes.getNamedItem(name)
  element.attributes.removeNamedItem(name)
  element.attributes.setNamedItem(node)
  element.attribute.item(pos)

  创建元素
  document.createElement(tagName)

  元素的子节点
  元素也支持getElementsByTagName()
}

Text类型 {
  nodeType === 3

  创建文本节点
  document.createTextNode

  normalize()
  splitText()
}

Comment类型 {
  nodeType === 8
  document.createComment
}

CDATASection类型 {
  针对XML
}

DocumentType类型 {
  nodeType === 10
  在DOM1级中 DocumentType对象不能动态创建
  DocumentType 保存在 document.doctype中
}

DocumentFragment类型 {
  nodeType === 11
  DOM规定文档片段是一种轻量级的文档

  创建
  document.createDocumentFragment()

  在文档片段中操作DOM可以避免浏览器重复渲染问题
}

Attr 类型 {
  nodeType === 2
  元素特性在DOM中以Attr类型来表示
}

动态脚本 动态插入script
动态样式 动态插入link

操作表格