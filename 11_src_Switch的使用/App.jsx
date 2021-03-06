import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";
import MyNavLink from "./component/MyNavLink";
import Test from "./pages/Test";

export default class App extends Component {

    render() {

        return (
          <div>
              <div>
                  <div className="row">
                      <div className="col-xs-offset-2 col-xs-8">
                          <Header a={3}/>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-xs-2 col-xs-offset-2">
                          <div className="list-group">
                              {/* 在React 中 */}

                              <MyNavLink to='/about'>About</MyNavLink>
                              <MyNavLink to='/home'>Home</MyNavLink>

                           </div>
                      </div>
                      <div className="col-xs-6">
                          <div className="panel">
                              <div className="panel-body">
                                  {/* 注册路由  */}
                                  <Switch>
                                      <Route path='/about' component={About}/>
                                      <Route path='/home' component={Home}/>
                                      <Route path='/home' component={Test}/>
                                  </Switch>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
        );
    }
}

