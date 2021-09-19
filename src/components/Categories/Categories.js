import React, { Component } from "react";
import Category from "../Category/Category";
import "../Categories/stylecategories.css";
import Header from "../Header/Header";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      listaPeliculas: [],
      pagina: 1,
      peliculasIniciales:[],
      changeOrder: false,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c420f9303ae87dbc0f53e1b840eeb019&language=en-US&page=1"
    ) // aca busco la info
      .then((response) => response.json()) // arrow function
      .then((info) => {
        console.log(info);// actualizamos los estados 
        this.setState({
          listaPeliculas: info.results, // esto podemos mostrarlo en el oral
          pagina: 2,
          peliculasIniciales: info.results
        });
      });
  }

  masTarjetas() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c420f9303ae87dbc0f53e1b840eeb019&language=en-US&page=" +
        this.state.pagina
    ) // aca busco la info
      .then((response) => response.json()) // arrow function
      .then((info) => {
        console.log(info);
        this.setState({
          listaPeliculas: this.state.listaPeliculas.concat(info.results),
          pagina: this.state.pagina + 1,
        });
      });
  }

  borrar(borradas) {
    let listaFiltrada = this.state.listaPeliculas.filter(
      (pelicula) => pelicula.id !== borradas
    );
    this.setState({
      listaPeliculas: listaFiltrada,
    });
  }
  buscarPelicula(input) {
    let listaFiltrada = this.state.peliculasIniciales.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(input.toLowerCase())
    ); // me trae lo que yo escribo "input"
    this.setState({
      listaPeliculas: listaFiltrada,
    });
  }


changeOrder(){
    if(this.state.changeOrder){
        this.setState ({
            changeOrder : false
            },()=> console.log(this.state.changeOrder))
        } else {
            this.setState({
                changeOrder: true,
        },()=> console.log(this.state.changeOrder))
            }
        }

  render() {
    // if ternario a continuacion

    return (
      // abro una etiqueta invisible --> React Fragment
      <React.Fragment>
        <Header buscar={(input) => this.buscarPelicula(input)} changeOrder={() => this.changeOrder()} order= {this.state.changeOrder}/>
        <main>
          {this.state.listaPeliculas.length !== 0 ? (
            <section className="card-container">
              {this.state.listaPeliculas.map((pelicula, idx) => (
                <Category
                  pelicula={pelicula}
                  key={idx}
                  borrar={(borradas) => this.borrar(borradas)}
                  order= {this.state.changeOrder} 
                />
              ))}
            </section>
          ) : (
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}

          <button
            className="cargartarjeta"
            type="button"
            onClick={() => this.masTarjetas()}
          >
            Cargar más tarjetas
          </button>
        </main>
      </React.Fragment>
    );
  }
}

export default Categories;
