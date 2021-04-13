//创建 '外壳' 组件App

//{Component}  不是结构赋值，用到了多重暴露【比如module.js  中的距离 】
import React ,{Component} from 'react'
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

// 创建并暴露APP组件
export default class App extends  Component{

  render() {
    return(
        <div>
        <Hello/>
        <Welcome/>
        </div>
    )
  }
}

/*//暴露APP 组件
export default App*/


