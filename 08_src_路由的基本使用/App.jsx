import React, {Component} from 'react';
import {BrowserRouter, Link,Route} from "react-router-dom";
import './App.css'
import Home from "./commponents/Home";
import About from "./commponents/About";

export default class App extends Component {

    render() {

        return (
          <div>
              <div>
                  <div className="row">
                      <div className="col-xs-offset-2 col-xs-8">
                          <div className="page-header"><h2>React Router Demo</h2></div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-xs-2 col-xs-offset-2">
                          <div className="list-group">
                              {/* 在React 中 */}
                                   <Link className="list-group-item active"  to='/about'>About</Link>
                                  <Link className="list-group-item"  to='/home'>Home</Link>
                           </div>
                      </div>
                      <div className="col-xs-6">
                          <div className="panel">
                              <div className="panel-body">
                                  {/* 注册路由  */}
                                       <Route path='/about' component={About}/>
                                       <Route path='/home' component={Home}/>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
        );
    }
}

