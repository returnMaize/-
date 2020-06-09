window:
{
  BOM的核心对象是window 它表示一个浏览器的实例
  在浏览器中window是双重角色 它既是通过JavaScript访问浏览器窗口的一个接口
  又是ECMASCript规定的Global对象 这意味着网页中定义的任何一个对象变量和 函数都已window作为其Global对象 因此 有权访问parseInt()等方法

  访问一个未声明的变量会抛错 但是通过window访问就不会出现这种问题
}

窗口关系及框架：
{
  如果页面中包含框架 则每个框架都拥有自己的window对象 并且保存在frames集合中 在frames集合中 可以通过数值索引或者框架名称来访问相应的window对象 每个window对象都有一个name属性 其中包含框架的名称
}

窗口位置：
{
  用来确定和修改window对象位置的属性和方法有很多
  window.screenX window.screenY
  window.moveTo() 移动窗口 可能被浏览器禁用
  window.moveBy() 同上 可能被浏览器禁用
}

窗口大小：
{
  innerWidth
  innerHeight
  outerHeight
  outerWidth
  resizeTo() 调整窗口大小 可能被浏览器禁用
  resizeBy()
}

导航和打开窗口：
{
  使用window.open()方法既可以导航到一个特定的URL 也可以打开一个新的浏览器窗口 这个方法可以接受四个参数：URL 窗口目标  特性字符串 布尔值（新页面是否取代浏览器历史记录中当前加载页面）
  第二个参数就相当于 a标签中的target
  如果给window.open()传递的第二个参数并不是一个已经存在的窗口或框架 那么该方法就会根据在第三个参数位置上传入的字符串创建一个新的窗口或者新标签页 如果没有传入第三个参数 那么就会打开一个带有全部默认设置的新浏览器窗口 在不打开新窗口的情况下 会忽略第三个参数
  第三个参数是一个逗号分隔的设置字符串 表示新窗口中都显示那些特性
  可选值
  fullscreen
  height
  left
  location
  menubar
  resizeable
  scrollbars
  status
  toolbar
  top
  width
  window.open() 方法会返回一个指向新窗口的引用 引用的对象与其他window对象大致相似 但我们可以对其进行更多控制 例如 有些浏览器在默认情况下可能不允许我们针对主浏览器窗口调整大小或移动位置 但却允许我们针对通过window.open()创建窗口调整大小或移动位置 通过这个返回的对象 可以向操作其他窗口一样操作新打开的窗口
  window.close()
  由于这些会造成用于恐慌 浏览器也会禁用大部分api 所以直接pass
}

间隙调用和超时调用：
{
  setTimeout(string | fn, delay) 返回id值 用来清除定时器 当传递字符时就类似使用eval函数
  setInterval(string | fn, delay) 返回id值 用来清除
}

系统对话框：
{
  alert()
  confirm()
  prompt()
}

location对象:
{
  location是最有用的BOM对象之一 他提供了与当前窗口中加载的闻到那股有关的信息 还提供了一些导航功能 事实上location对象是一个很特别的对象 因为它即使window对象的属性 也是document对象的属性 换句话 window.location 和 document.location引用的是同一个对象
  location对象的用处不只是表现在它保存着当前文档的信息 还表现在它将URL解析为独立的片段 让开发人员可以通过不同的属性访问这些片段
  location: {
    hash,
      host,
      hostname,
      href,
      pathname,
      port,
      protocol,
      search
  }

  使用location对象可以通过很多方式来改变浏览器的位置 首先 也是最常用的方式 就是使用assign()方法并为其传递一个URL 例如location.assign('http://www.baidu.com')
  这样就可以立即打开新URL并在浏览器的历史记录中生成一条记录 如果将location.href 或 window.location设置为一个URL值 也会以该值调用assign
  window.location = 'http://www.baidu.com' ===
    location.herf = 'http://www.baidu.com' ===
      location.assign('http://www.baidu.com')

  另外 修改location对象上的其他属性 也可以改变当前加载的也main 例如hash search hostname pathname port
  这些修改都会导致URL的变化 并且会被存到浏览器的历史记录中（包括hash）
  如果想要禁用这种保存历史行为 可以使用location.replace()方法
  最后一个与位置有关的方法是reload()作用是重新加载当前显示的页面
  reload() 有可能重缓存中加载
  reload(true) 从服务器加载

  location 属性 hash hostname href pathname port protocol search
  location 方法 assign() replace() reload()
}

