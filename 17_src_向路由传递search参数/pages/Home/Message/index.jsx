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
                                    <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>

                <Switch>
                    {/*注冊路由 声明接收params 参数 :id/:title */}
{/*
                    <Route path='/home/message/detail/:id/:title' component={Detail}/>
*/}

                    {/*注冊路由 声明接收search参数==》search参数无序声明   正常注册路由即可 */}
                    <Route path='/home/message/detail' component={Detail}/>


                </Switch>
            </div>
        );
    }
}
 