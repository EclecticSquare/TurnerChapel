import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import Church from './Components/church';
import Pastor from './Components/pastor'
import {Route} from 'react-router-dom';
import Slideshow from './Components/slideshow'



class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/story" component={Church}/>
        <Route exact path="/pastor" component={Pastor}/>
        {/* <Route exact path="/calendar" component={Calendar}/> */}
        {/* <Route exact path="/news" component={News}/> */}
        {/* <Route exact path="/ministries" component={Ministries}/> */}
        {/* <Route exact path="/contact" component={Contact}/> */}
      </div>
    );
  }
}

export default App;
