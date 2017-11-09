import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Display from './components/display';

class App extends Component {
  constructor(){
    super();
    this.state = {
      initialCount: 0
    }
  }
  changeCount(plusOrMinus){
    this.setState({
      initialCount: (plusOrMinus == "+") ? this.state.initialCount + 1 : this.state.initialCount - 1
    });
  }
  render() {
    return (
      <div className="App">
        <Button operator="+" changeCount={this.changeCount.bind(this)}/>
        <Display initialCount={this.state.initialCount}/>
        <Button operator="-" changeCount={this.changeCount.bind(this)}/>
      </div>
    );
  }
}

export default App;
