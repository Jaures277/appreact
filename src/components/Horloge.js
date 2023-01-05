import React, { Component } from 'react';

const Formatedate = (props) => {
    return <h2>Il est {props.date.toLocaleTimeString()}</h2>
/*     <h2>Il es : {this.state.date.toLocaleTimeString()} et on est {this.state.date.toLocaleDateString()}</h2>
 */};

class Horloge extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tictac(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tictac(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <>
                <Formatedate date={this.state.date} />
            </>
        );
    }
}

export default Horloge;