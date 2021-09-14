import React , {Component} from "react"
import Category from "../Category/Category"
import "../Categories/stylecategories.css"

class Categories extends Component {

    constructor(){
        super()
        this.state = {
            listaPeliculas: [],
            pagina: 1,
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c420f9303ae87dbc0f53e1b840eeb019&language=en-US&page=1")// aca busco la info
        .then((response) => response.json()) // arrow function
        .then (info => {
            console.log (info)
            this.setState({
                listaPeliculas: info.results,
                pagina: 2,
            })
        })
    }
   
    masTarjetas(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c420f9303ae87dbc0f53e1b840eeb019&language=en-US&page="+this.state.pagina)// aca busco la info
        .then((response) => response.json()) // arrow function
        .then (info => {
            console.log (info)
            this.setState({
                listaPeliculas: this.state.listaPeliculas.concat(info.results),
                pagina: this.state.pagina +1, 
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
        <button type="button" onClick={()=> this.masTarjetas()}>Cargar más tarjetas</button>
        <section className="card-container">
         
   {this.state.listaPeliculas.map((pelicula,idx)=><Category pelicula={pelicula} key={idx} borrar={(borradas)=>this.borrar(borradas)}/>)} 
           
        </section>
    </main>)
    
}

}

export default Categories