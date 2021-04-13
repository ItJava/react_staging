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

    render() {
        const  {id,name,done}=this.props
        const {mouse}=this.state
        return (
            <div>
                <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                        <input type="checkbox" defaultChecked={done} onChange={this.handleCeck(id)}/>
                        <span>{name}{id} </span>
                    </label>
                    <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

