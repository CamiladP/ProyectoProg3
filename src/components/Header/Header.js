import React, { Component } from 'react';
import "./header.css"
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { input:'' }
    }
    evitarDefault(evento){
        evento.preventDefault()

    }
    getInput(evento){
        this.setState({input:evento.target.value},()=>this.props.buscar(this.state.input))
    
    }
    render() { 
        return (  <header>
            <h1>Plus+</h1>
            <section>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action=""onSubmit= {(evento)=>this.evitarDefault(evento)}>
                    <input className="buscador" type="text" name="search" id="" placeholder="Search" onChange={(evento)=>this.getInput(evento)} value={this.state.input}/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </section>
        </header> );
    }
}
 

export default Header;