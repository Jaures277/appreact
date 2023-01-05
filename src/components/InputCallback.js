// composant parent
import React, { Component } from 'react';

class InputCallback extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        dataValue : ""
      }
      this.handerChange = this.handerChange.bind(this)
    }

    handerChange(event){
        //console.log(event.target.value)
        this.setState({
            dataValue : event.target.value
        })
    }

    render() {
        return (
            <div>
                <Getinput dataValue={this.state.dataValue} handerChange={this.handerChange} />
                <Renderinput inputData={this.state.dataValue} />
                
            </div>
        );
    }
}


// composant enfant1

const Getinput = (props) => {
    return (
        <div>
            <h1>Get input, first Children</h1>
            <input value={props.dataValue} onChange={props.handerChange} />
        </div>
    );
};

// composant enfant2
 
const Renderinput = (props) => {
    return (
        <div>
            <h3> La saisie effectuer est : {props.inputData}</h3>
        </div>
    );
};
 

export default InputCallback;