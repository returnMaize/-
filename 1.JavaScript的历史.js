JavaScript简介
作者：Brendan Eich 布兰登 艾克
诞生时间：1995年
起因：表单验证
最初名：LiveScript 发布前夕为 赶媒体热炒java的顺风车 临时改名为JavaScript

纠纷：微软开发出JScript 导致市面上出现两个版本的的js
最终：1997年 为解决不同版本js冲突问题 以JavaScript1.1为蓝本的建议被提交到ECMA（欧洲计算机制造商协会） 该协会了统一规范 完成了新脚本ECMAScript的标准 —— ECMA - 262
规范制定人员：网景 sun 微软 borland公司的程序员 T39（39号技术委员会）

至此之后 浏览器开发商就开始致力于将ECMAScript作为各自实现JavaScript实现的基础
JavaScript = ECMAScript + DOM + BOM

1. ECMAScript的版本
ECMA - 262第一版
本质上和JavaScript1.1相同

ECMA - 262 第二版
主要是编辑加工的结果 没有修改

ECMA - 262 第三版
第一次真正的修改
增加字符串处理 错误定义 数值输出 正则表达式 新控制语句 try-catch 异常处理
第3版标志着ECMAScript成为了一门真正的编程语言

ECMA - 262 第四版
开始对语言全面检核修订 T39重新召集相关人员共同谋划语言未来 出台后的标准几乎在第三版的基础上重新定义了一门新语言 第4版不仅包含强类型变量 新语句 新数据结构 真正的类和经典继承 还定义了与数据交互的新方式
与此同时 T39下属的一个小组也提出了一个ECMAScript3.1的代替性建议 只对这门语言进行较少的改进 认为第四版给这门语言带来的跨度太大了 建议对语言进行小幅修订 能够在现有的JavaScript引擎基础上实现 最终ECMAScript3.1附属委员会获得的支持率超过了T39

ECMA - 262 第五版
ECMAScript3.1 成为了ECMA - 262第五版 2009年正式发布

2. DOM（文档对象模型）
定义：针对XML但经过扩展用于HTML的 API（应用程序编程接口）
DOM把整个页面映射为一个多层节点结构 可以通过js操作这些节点来操作页面中真实的元素

冲突：两大浏览器厂商各持己见(实现自己的DOM API) 可能会导致浏览器互不兼容的局面 于是 负责指定Web通信标准的W3C（万维网联盟）开始着手规划DOM

DOM级别
DOM1级
1998年 W3C的推荐标准
主要映射文档结构

DOM2级
DOM视图：跟踪不同文档视图的接口
DOM事件：定义事件和事件处理的接口
DOM样式：定义基于CSS为元素的应用样式接口
DOM遍历和规范：定义遍历和操作文档树的结构

DOM3级
引入统一方式加载和保存文档的方法
新增验证文档的方法

基于XML的其他语言
SVG MathML SMIL

3. BOM（浏览器对象模型）
定义：操作浏览器的API
存在问题：没有相关标准规范 每个浏览器提供的API都不相同
解决：HTML5把很多BOM功能写入正式规范

