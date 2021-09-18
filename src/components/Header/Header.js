import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input:'' }
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
                <form action=""onSubmit= {(evento)=>this.evitarDefault(evento)}>
                    <input className="buscador" type="text" name="search" id="" placeholder="Search" onChange={(evento)=>this.getInput(evento)} value={this.state.input}/>
                    <button type="changeOrder"  onClick= {()=> this.props.changeOrder()}  >{!this.props.order?(<i class= "fas fa-align-justify"></i>):(<i class="fas fa-th"></i>)}</button>
                 
                 
                   
                </form>
            </section>
        </header> );
    }
}
 

export default Header;