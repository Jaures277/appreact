import React, { Component } from 'react';

class AddEventelistener extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         saisieChamp: ''
      }
      this.handerKeypress = this.handerKeypress.bind(this)
    }

    handerKeypress(event){
        if(event.keyCode === 27){
            this.handleTouch()
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handerKeypress)
    }

    componentWillUnmount(){

    }   

    render() {
        return (
            <div>
                <h2>Action : {this.state.saisieChamp}</h2>
            </div>
        );
    }
}

export default AddEventelistener;