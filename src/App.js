import React, { Component } from 'react';
import './App.css';
import Egg from './Egg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  handleClick(){
    this.setState({count: this.state.count + 1});
  }
  
  render() {

    return (
      <Egg count_now={this.state.count} count_up={()=>{this.handleClick();}}/>
    );
  }
}
export default App;
