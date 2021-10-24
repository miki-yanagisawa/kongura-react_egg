import React, { Component } from 'react';
import './App.css';

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

    //たまごの色を変える
    let eggColor;
    if(this.state.count < 1){
      eggColor = 'white';
    }else if(this.state.count <2){
      eggColor = 'pink';
    }else if(this.state.count <3){
      eggColor = 'red';
    }else if(this.state.count <4){
      eggColor = 'purple';
    }else if(this.state.count <5){
      eggColor = 'blue';
    }else if(this.state.count <6){
      eggColor = 'yellow';
    }else if(this.state.count <7){
      eggColor = 'green';
    }else if(this.state.count <8){
      eggColor = 'brown';
    }else if(this.state.count <9){
      eggColor = 'Pearl';
    }else if(this.state.count <10){
      eggColor = 'gold';
    }else if(this.state.count <11){
      eggColor = 'special';
    }else{
      eggColor = 'white'
    };

    return (
      <div className="egg_wrapper">
        <h1 className="egg_count">
          {this.state.count}
        </h1>
        <button 
        className= {"egg_btn " + eggColor}
        onClick = {
          ()=>{
           this.handleClick();
          }
        }      
        ></button>
        
      </div>
    );
  }
}
export default App;
