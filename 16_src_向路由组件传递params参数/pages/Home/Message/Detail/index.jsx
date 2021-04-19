import React, {Component} from 'react';




const DetailData  = [

    {id:'01',title:'消息 你好中國!'},
    {id:'02',title:'消息2  汪方晨'},
    {id:'03',title:'消息 得灵科技'},
    {id:'04',title:'消息  哈哈哈哈'}
]

export default class Detail extends Component {

     render() {
         console.log('Detail',this.props)
         const {id,title}=this.props.match.params
         const findResult=DetailData.find((detailObj)=>{

             return detailObj.id===id
         })
         return (
                <ul>
                   <li>ID:{id}</li>
                   <li>TITLE:{title}</li>
                   <li>CONTENT:{findResult.title}</li>
                 </ul>

        );
    }
}
 