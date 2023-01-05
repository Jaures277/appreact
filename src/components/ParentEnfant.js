// Composant parents
import React, { Component } from 'react';

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstName:"Yves Jaures",
             lastName:"OKOUWEB"
        }
    }
    

    render() {
        return (
            <div>

                    <Enfants firstName={this.state.firstName} />
                
            </div>
        );
    }
}


// Composant enfants

const Enfants = (props) => {
    return (
        <>
            <h4>Bonjour {props.firstName}</h4>
        </>
    );
}


export default Parent;