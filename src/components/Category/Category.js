import React , {Component} from "react";
import "./Category.css"

class Category extends Component {

    constructor(props){ //la informacion que te mandan se guarda en props
        super(props)
        this.state = {
            viewMore: false,
            text: 'Ver más',
        }
        console.log(this.state);
    } 

    viewMore() {
        if(this.state.viewMore){ //modifico los estados una vez que estan creados
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
 
    <article className={`${this.props.order?"":"tarjeta"}`}>
   
    <main className= {`${this.props.order?"tarjetaLarge":""}`}> 
        <img className="img" src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.poster_path}`}alt=""/>
        <h3 className="titulo">{this.props.pelicula.title}</h3>
        <h4>Description:</h4>
        <p className="description"></p>
        
        <section className="aditional-info">
            <p>Release Date: {this.props.pelicula.release_date}</p>
            <p>Popularity: {this.props.pelicula.popularity}</p>  
        </section>
        <p className = {`extra ${this.state.viewMore ? 'show' : 'hide' } `} > {this.props.pelicula.overview} </p>
        <p className= 'Vermas' onClick={()=> this.viewMore()}> {this.state.text} </p>
        <section className="navigation">
        <i className="delete" onClick={()=> this.props.borrar(this.props.pelicula.id)}>Eliminar</i>
        </section>
    </main>
    </article> 

    </>
        );
    }
}



export default Category;

