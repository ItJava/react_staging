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
                                    <Link to={'/home/message/detail/'+${msgObj.id} + '/' + ${msgObj.title} }>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>

                {/*注冊路由 声明接收 */}


                <Switch>
                    <Route path='/home/message/detail/:id/:title' component={Detail}/>
                </Switch>
            </div>
        );
    }
}
 