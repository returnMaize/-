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
}