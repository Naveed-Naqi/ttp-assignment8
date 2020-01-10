import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

    
    render() {
        return (
            <div className="App">
                <select>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                </select>
            </div>
          );
    }

}

