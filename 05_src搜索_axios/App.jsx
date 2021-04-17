import React, {Component} from 'react';
import './App.css'
import Search from "./commponents/Search";
import List from "./commponents/List";


export default class App extends Component {


    state={                    // 初始化状态，users 初始值为数组
        users:[],
        isFirst:true,          //是否第一次打开页面
        isLoading:false,        //标识是否处于加载中
        err:''                  //存储请求相关的错误信息
    }

 /*   saveUsers=(users)=>{
        this.setState({users})
    }
*/

    //更新App的State
    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }


    /* changeisFirst=(users)=>{
         this.setState({users})
     }

     changeisLoading=(users)=>{
         this.setState({users})
     }

     saveError=(users)=>{
         this.setState({users})
     }*/




    render() {

        const {users}=this.state

        return (
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List  {...this.state}/>
                </div>
        );
    }
}

