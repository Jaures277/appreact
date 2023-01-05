import React, {Component} from "react";

class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
  
        // Cette liaison est nécéssaire afin de permettre   
        // l'utilisation de `this` dans la fonction de rappel.   
        this.handleClick = this.handleClick.bind(this);  
    }
  
    handleClick() {    
        this.setState(state => ({     
             isToggleOn: !state.isToggleOn    
            }));  
        }

    render() {
      return (
        <>
        <button onClick={this.handleClick}>        
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        {/* {console.log('this.setState')}
        {console.log(this.setState)}
        {console.log(this.state)}
        {console.log(this.state.isToggleOn)} */}
        </>
      );
    }
  }

  export default ToggleButton
  