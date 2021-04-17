import React, {Component} from 'react';
import axios from "axios";

export default class Search extends Component {

    search=()=>{
        //获取用户输入
        //console.log(this.keyWorkElement.value)
        const {keyWorkElement:{value:keyWordValue}}=this   // 结构赋值 连着写 并且对对应的字段重新命令
        console.log(keyWordValue)
        this.props.updateAppState({isFirst:false,isLoading:true})

        //发送网络请求 //
        axios.get('http://localhost:3000/api1/search/users?q='+keyWordValue).then(
            response=>{
               console.log('成功了：',response.data)
                 this.props.updateAppState({isLoading:false,err:false,users:response.data.items})
            },
            error=>{
                console.log('失败了！')
                 this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }


    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索gitHub 用户</h3>
                    <div>
                        <input ref={c=>this.keyWorkElement=c} type="text" placeholder="请输入您的关键字"/>&nbsp;
                        <button onClick={this.search}>搜索</button>
                    </div>
                </section>

            </div>
        );
    }
}