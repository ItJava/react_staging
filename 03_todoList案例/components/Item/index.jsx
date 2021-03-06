import React, {Component} from 'react';
import './index.css'
export default class Item extends Component {


    state={mouse:false}   //标识鼠标移入、移出

    //标识鼠标移入、移出的回调
    handleMouse=(flag)=>{

        return ()=>{
            console.log(flag)
            this.setState({mouse:flag})
        }

    }

    //标识鼠标勾选、取消一个todo的回调
    handleCeck=(id)=>{
        return (event)=>{
            console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }

    }
    //删除操作
    handleDelete=(id)=>{
       /* return (event)=>{
            console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }*/
        console.log('通知删除:'+id)
        if(window.confirm('确定删除吗！')){
            this.props.deleteTodo(id)
        }

    }

    render() {
        const  {id,name,done}=this.props
        const {mouse}=this.state
        return (
            <div>
                <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCeck(id)}/>
                        <span>{name}{id} </span>
                    </label>
                    {/* onClick 是需要指定一个回调的，要么高阶函数实现，要么直接写一个回调函数
                    ()=>{}  react 发生点击的时候，调用的其实是前面 () 函数
                    */}
                    <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

