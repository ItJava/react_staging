import React, {Component} from 'react';
import './index.css'

export default class Footer extends Component {




    hanleCheckAll=(event)=>{

        this.props.checkAllTodo(event.target.checked)
    }

    //清楚所有已完成的回调
    handleClearAll=()=>{

        this.props.handleClearAll()
    }



    render() {
        console.log('Footer',this.props.c)
        const  {todos}=this.props
        // 计算已完成的总数
        const doneCount=todos.reduce((pre,todo)=>{   // reduce 方法 经常用的用来计数
            console.log('@@@@:',todo.done)
            return pre+(todo.done?1:0)

        },0)

        console.log('@@',doneCount)
        // 总数
        const  total=todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.hanleCheckAll} checked={doneCount==total&&total!==0?true:false}/>
                </label>
                <span>
          <span>已完成{doneCount}</span> / {total}
        </span>
                <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }

}

