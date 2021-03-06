import React, {Component} from 'react';
import Message from "./Message";
import News from "./News";
import MyNavLink from "../../component/MyNavLink";
import {Redirect, Route, Switch} from "react-router-dom";
import About from "../About";


export default class Home extends Component {
    render() {
        // console.log('Home 收到props:',this.props)

        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">

                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>

                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>

                    </ul>
                    <ul>
                        {/* 注册路由 */}
                         <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                             <Redirect to={"/home/news"}/>
                         </Switch>
                    </ul>
                </div>
            </div>
        );
    }
}
 