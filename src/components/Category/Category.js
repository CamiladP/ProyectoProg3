import React , {Component} from "react";
import "./Category.css"

class Category extends Component {

    constructor(props){
        super(props)
        this.state = {
            viewMore: false,
            text: 'Ver más',
        }
        console.log(this.state);
    } 

    viewMore() {
        if(this.state.viewMore){
        this.setState ({
            viewMore: false,
            text: 'Ver más',
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'Ver menos',
                })
            }
        }
    
   
   

    render() {
        return( 
    <>
    <article className="tarjeta">
    <section className="navigation">
        <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
        </div>
        <i className="far fa-window-close" onClick={()=> this.props.borrar(this.props.pelicula.id)}></i>
    </section>
    <main> 
        <img className="img" src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.poster_path}`}alt=""/>
        <h3>{this.props.pelicula.title}</h3>
        <h4>Description:</h4>
        <p className="description"></p>
        
        <section className="aditional-info">
            <p>Release Date: {this.props.pelicula.release_date}</p>
            <p>Popularity: {this.props.pelicula.popularity}</p>
            
        </section>
        <p className = {`extra ${this.state.viewMore ? 'show' : 'hide' } `} > {this.props.pelicula.overview} </p>
        <p className= 'Vermas' onClick={()=> this.viewMore()}> {this.state.text} </p>
    </main>
    </article>
    </>
        );
    }
}



export default Category;

