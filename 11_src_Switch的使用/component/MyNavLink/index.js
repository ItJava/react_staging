import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component {
    render() {
        console.log('Header 收到props:', this.props)
        return (
            <NavLink activeClassName='atguigu' className="list-group-item" {...this.props}/>
        );
    }
}




