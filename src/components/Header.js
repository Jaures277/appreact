import React, { Component } from 'react';
import AddEventelistener from './AddEventelistener';
import Compteur from './Compteur';
import Input from './Input';
import InputCallback from './InputCallback';
import Parent from './ParentEnfant';
// import Horloge from './Horloge';
import ReseauxSociaux from './ReseauxSociaux';
import ToggleButton from './ToggleButton';

class Header extends Component {

    constructor(props){
        
        super(props)
        this.state = { visibility: true };

        this.hanlerClikme = this.hanlerClikme.bind(this);
    }

    hanlerClikme() {
        this.setState(state => ({     
            visibility: !state.visibility                                                                  
           })); 
    } 


    render(){

        if(this.state.visibility){

            return (
                <>
                    <div className="header-container">
                        <h1>Reseau Social Privé Entreprise</h1>
                        Je suis {this.state.user} super bien
                        {/* <Horloge /> */}
                        <img src="https://via.placeholder.com/800x150" alt="Logo entreprise" />
                        <button className='btnclik' onClick={this.hanlerClikme}>Cliquer ici</button>
                    </div>
                    
                    <ReseauxSociaux />
                    <ToggleButton />
                    <Compteur />
                    <Input />
                    <Parent />
                    <InputCallback />

                    <div>
                        <AddEventelistener />
                    </div>
                    
                </>
            );

        }else{
            return (
            <>
                <h2>Reseau Social Privé Entreprise</h2>
               <button className='btnclik' onClick={this.hanlerClikme}>Cliquer ici</button>
            
            </>
            );
        }

        

    }
    
};

export default Header;
