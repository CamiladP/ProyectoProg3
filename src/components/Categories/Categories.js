import React , {Component} from "react"
import Category from "../Category/Category"


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
render(){
    return(<main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
         
        <Category/>
           
        </section>
    </main>)
    
}

}

export default Categories