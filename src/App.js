import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import Church from './Components/church';
import {Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/church" component={Church}/>
      </div>
    );
  }
}

export default App;
