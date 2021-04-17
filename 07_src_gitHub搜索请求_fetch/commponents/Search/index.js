import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'

export default class Search extends Component {

    /*
    https://es6.ruanyifeng.com/#docs/async
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
     */

    search=async()=>{
        //获取用户输入
        const {keyWorkElement:{value:keyWordValue}}=this   // 结构赋值 连着写 并且对对应的字段重新命令
        console.log(keyWordValue)
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        //发送网络请求   使用axios  发送网络请求
   /*     axios.get('http://localhost:3000/api1/search/users?q='+keyWordValue).then(
            response=>{
               console.log('成功了：',response.data)
                PubSub.publish('atguigu',{isLoading:false,err:false,users:response.data.items})
            },
            error=>{
                console.log('失败了！')
                PubSub.publish('atguigu',{isLoading:false,err:error.message})
            }
        )*/

      /*  //发送网络请求，使用fetch（）  fetch 半优化版本
        fetch('http://localhost:3000/api1/search/users?q='+keyWordValue).then(       // .then 为什么能够链式调用，因为.then 的返回值，依然是一个Promise 对象
            response=>{
                // console.log('成功了',response.json())
                return response.json()
            }/!*,
            error=>{
               console.log('联系客户，服务器失败了！',error)
                return new Promise(()=>{})
            }*!/
        ).then(          //Promise 实例对象
            response=>{
                console.log('获取数据成功了！',response)
            }/!*,
            error=>{

                console.log('获取失败了',error)
            }*!/
        ).catch(    //统一处理错误
            (error)=>{
                console.log('请求出错',error)
            }

        )
*/

        //发送网络请求，使用fetch（）  await
        try{
            const response=await    fetch('http://localhost:3000/api1/search/users?q='+keyWordValue)
            const  data=await response.json()
            console.log(data)
            PubSub.publish('atguigu',{isLoading:false,err:false,users:data.items})
        }catch (error){
            console.log('请求出错',error)
        }





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