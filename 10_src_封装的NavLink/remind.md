
# 路由的基本使用：
- 明确界面中的导航区、展示区
- 导航区的a标签改为 Link 标签
   <Link to='/***'>Demo</Link>
- 展示区写Route标签进行路径的匹配
  <Route path'/***' component={Demo}/>
- <App> 的最外侧报过了一个<BrowserRouter>或<HashRouter>

# 路由组件和一般组件区别
  -  写法不同
     一般组件：<Demo/>
     路由组件：<Route path='/demo' component={Demo}/>
     
  -  存放位置不同：
     一般组件：components
     路由组件：pages
  
  -  接收到的props不同：
     一般组件：写组件标签时传递了什么，就能够收到什么
     路由组件：接收到三个固定的属性
     history:
            go: ƒ go(n)
            goBack: ƒ goBack()
            goForward: ƒ goForward()
            push: ƒ push(path, state)
            replace: ƒ replace(path, state)
     location:
           pathname: "/about"
           search: ""
           state: undefined
     match:
           params: {}
           path: "/about"
           url: "/about"
           
# NavLink 与 封装MyNavLink  
   - NavLink 可以实现路由链接的高亮，通过activeClassName 指定样式名
   - 标签体内容是一个特殊的标签属性
   - 通过this.props.children可以获取标签体内容



