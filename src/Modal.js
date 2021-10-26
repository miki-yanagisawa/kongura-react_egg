import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false
        };
    }
    
    handleClickOpen(){
        this.setState(
            {isModalOpen: true}
        );
    }
    handleClickClose(){
        this.setState(
            {isModalOpen: false}
        );
    }
      
    render() {
        let modal;
        if(this.state.isModalOpen){
            modal = (
                <>
                <div className="modal_group">
                    <div className="modal_word">
                        <p>Think of a way to solve this “Chicken and Egg” problem.</p>
                    </div>
                    <div className="modal_close"
                    onClick = {()=>{this.handleClickClose()}}>
                        <p>X</p>       
                    </div>
                </div>
                <div className="modal_bk" onClick = {()=>{this.handleClickClose()}}></div>
                </>      
            );
        };
        return (
            <div className="modal_wrapper">
                <div className="modal_open"
                onClick = {()=>{this.handleClickOpen()}}>
                <p>ひんと</p>       
                </div>
                {modal}
            </div>
        );
    }
}

export default Modal;