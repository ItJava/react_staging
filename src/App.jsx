import React, {Component} from 'react';
import './App.css'
import Search from "./commponents/Search";
import List from "./commponents/List";


export default class App extends Component {

    render() {

        return (
                <div className="container">
                    <Search/>
                    <List/>
                </div>
        );
    }
}

