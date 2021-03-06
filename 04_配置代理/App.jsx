import React, {Component} from 'react';
import axios from "axios";

export default  class App extends Component {

    getStudentData=()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response=>{
                console.log('response',response.data)
            },
            error=>{
                console.log('TAG',error)
            }
        )
    }

    getCarData=()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response=>{
                console.log('response',response.data)
            },
            error=>{
                console.log('TAG',error)
            }
        )
    }


    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>获取骑车类型的数据</button>
            </div>
        );
    }
}

