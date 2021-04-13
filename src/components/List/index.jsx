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
        const {todos,updateTodo} = this.props

        return (
            <ul className="todo-main">

                {
                    todos.map(todo => {
                        return <Item key={todo.id}  {...todo} updateTodo={updateTodo}/>
                    })
                }
            </ul>
        )
    }
}
