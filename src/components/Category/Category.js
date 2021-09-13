import React , {Component} from "react"



class Category extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }
render(){
return( <article>
    <section className="navigation">
        <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
        </div>
        <i className="far fa-window-close"></i>
    </section>
    <main>
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.poster_path}`}alt=""/>
        <h3>{this.props.pelicula.title}</h3>
        <h4>Description:</h4>
        <p className="description">{this.props.pelicula.overview}</p>
        
        <section className="aditional-info">
            <p>Release Date: {this.props.pelicula.release_date}</p>
            <p>Popularity: {this.props.pelicula.popularity}</p>
            
        </section>
        <a href="">Ver más</a>
    </main>
</article>)

}
}

export default Category;

