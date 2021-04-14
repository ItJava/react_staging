import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {

    // 状态在哪里，操作状态的方法就在哪里  比如：addTodo   updateTodo 函数



    // 初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '写作业', done: true},
            {id: '003', name: '睡觉', done: false}
        ]
    }

    //addTodo 用于添加一个todo,接收参数是todu 对象
    addTodo = (todoObj) => {
        console.log('App', todoObj)
        // 获取原todo 数据

        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({todos: newTodos})
    }


    // 用于更新一个todo 对象
    updateTodo=(id,done)=>{
        //获取状态中的todos
        const {todos}=this.state
        //匹配处理数据
      const newTodos=  todos.map((todoObj)=>{
            if(todoObj.id==id){
                return {...todoObj,done}
            }else {
                return todoObj;
            }
        })
        this.setState({todos:newTodos})
    }


    // 用于删除一个todo 对象
    deleteTodo=(id)=>{
        // 获取原来的todos
        const  {todos}=this.state
        // 删除指定的id 对象    直接过滤就行
      const newTodos=  todos.filter((todoObj)=>{      //用数组的方法来过滤
            return todoObj.id!==id
        })
        this.setState({todos:newTodos})
    }


    // checkAllTodo 用于全选
    checkAllTodo=(done)=>{
        //获取原来的todos
        const {todos}=this.state
        // 加工数据
        const newTodos=todos.map((todoObj)=>{

            return {...todoObj,done}

        })
        this.setState({todos: newTodos})
    }

    // handleClearAll  清除所有已完成的选项
    handleClearAll=()=>{
        //获取原来的todos
        const {todos}=this.state
        // 过滤数据
        const newTodos=todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }


    render() {

        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    {/* 一定要记住这个地方  下面传递的是函数 给字组件,子组件里面拿这个函数去调用，就实现了子组件给父组件传递消息的功能*/}
                    <List todos={todos} updateTodo={this.updateTodo}  deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} handleClearAll={this.handleClearAll}/>
                </div>
            </div>

        );
    }
}

