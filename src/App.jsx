import React, {Component} from 'react';
import {Button,DatePicker,TimePicker } from "antd";
 import {WechatOutlined,WeiboCircleOutlined,SearchOutlined } from '@ant-design/icons';


function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class App extends Component {



    render() {
        return (
          <div>
             App...
              <button>点我</button>
              <br/>
              <Button type="primary">Primary Button</Button>
              <br/>
              <WechatOutlined />
              <br/>
              <WeiboCircleOutlined />
              <br/>
              <Button type="primary" icon={<SearchOutlined />}>
                  Search 哈哈哈
              </Button>
              <br/>
              <DatePicker onChange={onChange} />

              <TimePicker.RangePicker />



          </div>
        );
    }
}

