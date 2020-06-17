DOM1级主要定义的是HTML和XML文档的底层结构 DOM2和DOM3级则在这个接口的基础上引入了更多的交互能力 也支持了更高级的XML特性 为此 DOM2和DOM3级分许多模块 模块之间具有某种关联 分别描述了DOM的某个非常具体的子集 这些模块如下
DOM2级核心 在1级核心基础上构建 为节点添加了更多方法和属性
DOM2级视图 为文档定义了基于样式信息的不同视图
DOM2级事件 说明了如何使用事件与DOM文档交互
DOM2级样式 定义了如何以编程方式来访问和改变CSS样式信息
DOM2级遍历和范围 引入了遍历DOM文档和选择其特定部分的新接口

检测浏览器是否支持这些DOM模块
document.implementation.hasFeature('Core', '2.0')
document.implementation.hasFeature('Core', '3.0')
document.implementation.hasFeature('HTML', '2.0')
document.implementation.hasFeature('Views', '2.0')
document.implementation.hasFeature('XML', '2.0')

