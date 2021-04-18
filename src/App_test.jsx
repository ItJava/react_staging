import React, {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import './App.css'
import Home from "./commponents/Home";
import About from "./commponents/About";

export default class App extends Component {

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
{/*
                            原生html 中 靠 <a> 跳转不同的页面
*/}
                          {/*  <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a>*/}

{/*
                            在React 中靠路由连接实现切换组件
*/}

                         <BrowserRouter>
                         <Link cclassName="list-group-item active"  to='/about'>About</Link>
                         <Link cclassName="list-group-item"  to='/home'>Home</Link>
                         </BrowserRouter>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                              <Home/>
                              <About/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

