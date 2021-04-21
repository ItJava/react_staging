import React, {Component} from 'react';
import Detail from "./Detail";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import News from "../News";

export default class Message extends Component {

    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'},
            {id: '04', title: '消息4'}
        ]
    }

    replaceShow=(id,title)=>{
        //编写一段代码，让其跳转到Details组件，且replace跳转   且 携带了params 参数
        /*this.props.history.replace(`/home/message/detail/${id}/${title}`)*/

         //让其跳转到Details组件，且replace跳转   且 携带了search 参数
       /* this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)*/

        //让其跳转到Details组件，且replace跳转   且 携带了search 参数
        /*this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)*/

        //让其跳转到Details组件，且push跳转  且 携带了state参数
        this.props.history.replace(`/home/message/detail`,{id,title})


    }

    pushShow=(id,title)=>{
        //编写一段代码，让其跳转到Details组件，且push跳转  且 携带了params 参数
        /*this.props.history.push(`/home/message/detail/${id}/${title}`)*/

        //让其跳转到Details组件，且push跳转  且 携带了search参数
        /*this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)*/

        //让其跳转到Details组件，且push跳转  且 携带了state参数
        this.props.history.push(`/home/message/detail`,{id,title})
    }

    back=()=>{
     this.props.history.goBack()
    }

    forward=()=>{
        this.props.history.goForward()
    }


    render() {
        const {messageArr} = this.state
        console.log('messageArr:', this.state)

        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>

                                    {/*向路由组件传递params 参数*/}
                                    {/*<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}
                                    <button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>&nbsp&nbsp
                                    {/* 这个地方用高阶函数来传递参数，其实react 调用的是 前面() 函数，但是() 函数执行的时候，
                                    亲自调用了replacShow函数，传递了两个参数
                                    */}
                                    <button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>&nbsp&nbsp



                                     {/*向路由组件传递search 参数*/}
                                    {/*<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>*/}

                                    {/* 传递state 参数*/}

                                    <Link  to={{pathname:`/home/message/detail/`,state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>

                <Switch>
                    {/*注冊路由 声明接收params 参数 :id/:title */}

                    {/*<Route path='/home/message/detail/:id/:title' component={Detail}/>*/}


                    {/*注冊路由 声明接收search参数==》search参数无序声明   正常注册路由即可 */}
                    {/*<Route path='/home/message/detail' component={Detail}/>*/}

                    {/*注冊路由 声明接收state参数==》state参数无序声明   正常注册路由即可 */}
                    <Route path='/home/message/detail' component={Detail}/>
                </Switch>

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </div>
        );
    }
}
 