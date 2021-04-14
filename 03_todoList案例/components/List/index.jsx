import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import ProTypes from "prop-types";

export default class List extends Component {



    // 对接收的props 进行：类型、必要性的限制
    static propTypes={
        todos:ProTypes.array.isRequired,
        updateTodo:ProTypes.func.isRequired

    }

    render() {
        {/* 通过props 传递数据,接受父组件传递过来的props 数据*/}
        const {todos,updateTodo,deleteTodo} = this.props

        return (
            <ul className="todo-main">

                {
                    todos.map(todo => {
                        {/* 继续传递数据给子组件Item  key      ...todo:数组    {updateTodo}  {deleteTodo} 其实是函数 */}
                        return <Item key={todo.id}  {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
