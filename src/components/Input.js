import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            input: "",
            input2: "",
            submit: ""
        }
        this.handlerInput = this.handlerInput.bind(this)
        this.handlerInput2 = this.handlerInput2.bind(this)
        this.cliqueSubmit = this.cliqueSubmit.bind(this)
    }

    handlerInput(event){
        console.log(event.target.value)
        this.setState(() =>({
            input : event.target.value
        }))
    }

    handlerInput2(event){
        console.log(event.target.value)
        this.setState(() =>({
            input2 : event.target.value
        }))
    }

    cliqueSubmit(event){
        event.preventDefault()
        this.setState(() =>({
            submit: this.state.input
        }))
    }


    render() {
        return (
            <>
               <form onSubmit={this.cliqueSubmit}>
                <input value={this.state.input} type="text" onChange={this.handlerInput}/>
                <input value={this.state.input2} type="text" onChange={this.handlerInput2}/>
                <br />
                <button type="submit" className='btn'>Envoyer le formulaire</button>
               </form>
               <p> Reception de la valeur {this.state.submit}</p>
            </>
        );
    }
}

export default Input;