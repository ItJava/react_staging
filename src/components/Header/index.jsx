import React, {Component} from 'react';
import './index.css'
import  {nanoid} from "nanoid";


console.log(nanoid())
console.log(nanoid())
console.log(nanoid())
export default class Header extends Component {


    //绑定事件的元素和要操作的元素是同一个元素，就没有必要用ref 了  借助事件对象
    handleKeyUp=(event)=>{
        // 这个地方要判断  按下的按键到底是什么

        const {keyCode,target}=event
        if(keyCode!==13) return
        if(target.value.trim()==''){
            alert('输入数据不能够为空！')
            return;
        }


        console.log(event.target.value,event.keyCode)

        // 准备好一个todo 对象
        const todoObj={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value=''
    }

    render() {
        console.log('Header',this.props.a)
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>

        );
    }
}

