import React , {Component} from "react"
import Category from "../Category/Category"
import "../Categories/stylecategories.css"

class Categories extends Component {

    constructor(){
        super()
        this.state = {
            listaPeliculas: []
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c420f9303ae87dbc0f53e1b840eeb019&language=en-US&page=1")// aca busco la info
        .then((response) => response.json()) // arrow function
        .then (info => {
            console.log (info)
            this.setState({
                listaPeliculas: info.results
            })
        })
    }

    borrar(borradas) { 
        let listaFiltrada = this.state.listaPeliculas.filter((pelicula)=> pelicula.id !== borradas)
        this.setState({
            listaPeliculas:listaFiltrada
        })
    }
render(){
    return(<main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
         
   {this.state.listaPeliculas.map((pelicula,idx)=><Category pelicula={pelicula} key={idx} borrar={(borradas)=>this.borrar(borradas)}/>)} 
           
        </section>
    </main>)
    
}

}

export default Categories