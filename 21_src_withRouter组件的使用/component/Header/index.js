import React, {Component} from 'react';
import {withRouter} from "react-router";


class Header extends Component {


    back=()=>{
        this.props.history.goBack()
    }

    back=()=>{
        this.props.history.goBack()
    }

    forward=()=>{
        this.props.history.goForward()
    }


    render() {
        console.log('Header 收到props:',this.props)
        return (
            <div>
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}
export default  withRouter(Header)

// withRouter 可以加工一般组件，让以班组件具备路由组件所有的API
// withRouter 的返回值是一个新组件








