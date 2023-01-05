import React, { Component } from 'react';

class Compteur extends Component {

    constructor(props){
        super(props);
        this.state = {compte: 0};

        this.incremente = this.incremente.bind(this);
        this.desincremente = this.desincremente.bind(this);
        this.reset = this.reset.bind(this);
    }

    incremente(){
        this.setState( (state) =>({
            compte :  this.state.compte + 1
        }))
    }
    
    desincremente(){
        this.setState(state =>({
            compte :  this.state.compte - 1
        }))
    }
    
    reset(){
        this.setState(state =>({
            compte :  0
        }))
    }

    render() {
        return (
            <div>

                <button className='btnclik' onClick={this.incremente}> + </button>
                <button className='btnclik' onClick={this.desincremente}> - </button>
                <button className='btnclik' onClick={this.reset}> Reset </button>

                <p>Compteur est a : {this.state.compte}</p>
                
            </div>
        );
    }
}

export default Compteur;