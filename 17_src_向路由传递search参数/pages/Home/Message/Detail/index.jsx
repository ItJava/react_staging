import React, {Component} from 'react';
import qs from 'querystring'



const DetailData  = [

    {id:'01',content:'消息 你好中國!'},
    {id:'02',content:'消息2  汪方晨'},
    {id:'03',content:'消息 得灵科技'},
    {id:'04',content:'消息  哈哈哈哈'}
]

export default class Detail extends Component {

     render() {

         console.log('Detail',this.props)
         const {search}=this.props.location
         const result=qs.parse(search.slice(1))
         console.log('result',result)

         const {id,title}=qs.parse(search.slice(1))
         console.log('id-title',{id}+' '+{title})

         //id,title
         const findResult=DetailData.find((detailObj)=>{

             return detailObj.id===id
         })

         console.log('findResult',findResult)

         return (
                <ul>
                   <li>ID:{id}</li>
                   <li>TITLE:{title}</li>
                   <li>CONTENT:{findResult.content}</li>
                 </ul>

        );
    }
}
 