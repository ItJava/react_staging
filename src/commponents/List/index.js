import React, {Component} from 'react';
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {

    state={                    // 初始化状态，users 初始值为数组
        users:[],
        isFirst:true,          //是否第一次打开页面
        isLoading:false,        //标识是否处于加载中
        err:''                  //存储请求相关的错误信息
    }

    componentDidMount() {   //这个钩子 一般做初始化的工作
        this.token=PubSub.subscribe('atguigu',(msg,data)=>{
            console.log('List收到消息了,并打印出来消息',data)
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }


    render() {
        const  {users,isFirst,isLoading,err}=this.state
        console.log('users:',users.length)
        console.log('data:',isFirst+' '+isLoading+' '+err+' '+users.length)
        return (
                <div className="row">
                    {
                     isFirst ? <h2> 欢迎使用，输入关键字，随后搜索！</h2>:
                         isLoading?<h2>Loading.....</h2> :
                             err ? <h2 style={{color:"red"}}>{err}</h2> :
                                  users.map((userObj)=>{
                                     return (
                                         <div key={userObj.id} className="card">
                                             <a href={userObj.html_url} target="_blank">
                                                 <img src={userObj.avatar_url} style={{width:'100px'}}/>
                                             </a>
                                             <p className="card-text">reactjs</p>
                                         </div>
                                     )
                                 })
                    }
                </div>
        );
    }
}

