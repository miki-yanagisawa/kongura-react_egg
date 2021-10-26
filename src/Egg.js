import React, { Component } from 'react';
import './Egg.css';

class Egg extends Component {

  render() {
    //たまごの色を変える
    let eggColor;
    if(this.props.count_now < 1){
      eggColor = 'white';
    }else if(this.props.count_now <2){
      eggColor = 'pink';
    }else if(this.props.count_now <3){
      eggColor = 'red';
    }else if(this.props.count_now <4){
      eggColor = 'purple';
    }else if(this.props.count_now <5){
      eggColor = 'blue';
    }else if(this.props.count_now <6){
      eggColor = 'yellow';
    }else if(this.props.count_now <7){
      eggColor = 'green';
    }else if(this.props.count_now <8){
      eggColor = 'brown';
    }else if(this.props.count_now <9){
      eggColor = 'Pearl';
    }else if(this.props.count_now <10){
      eggColor = 'gold';
    }else if(this.props.count_now <11){
      eggColor = 'special';
    }else{
      eggColor = 'white'
    };

    return (
    <div className="egg_wrapper">
        <h1 className="egg_count">
            {this.props.count_now}
        </h1>
        <button 
        className= {"egg_btn " + eggColor}
        onClick = {this.props.count_up}  
        ></button>
    </div>
    );
  }
}

export default Egg;