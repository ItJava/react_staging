import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {

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

    render() {

        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}/>
                    <Footer c={3}/>
                </div>
            </div>

        );
    }
}

