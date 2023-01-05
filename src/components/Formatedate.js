const Formatedate = (props) => {
    return <h2>Il est {props.date.toLocaleTimeString()}</h2>
/*     <h2>Il es : {this.state.date.toLocaleTimeString()} et on est {this.state.date.toLocaleDateString()}</h2>
 */};
 export default Formatedate;