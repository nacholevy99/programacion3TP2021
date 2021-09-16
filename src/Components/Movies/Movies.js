import React, { Component } from "react";
import CardMovies from "../CardMovies/CardMovies";
import Search from "../Search/Search";
import "./Movies.css";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      initialMovies: [],
      nextUrl:
        "https://api.themoviedb.org/3/movie/popular?api_key=5aa9fce9092f6cf9a542c91ac1a6f84e&language=en-US&page=2",
    };
  }

  componentDidMount() {
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=5aa9fce9092f6cf9a542c91ac1a6f84e&language=en-US&page=1";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          movies: data.results,
          initialMovies: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  //Metodo borrar
  deleteCard(id) {
    let moviesLeft = this.state.movies.filter((movie) => {
      return movie.id !== id;
    });
    this.setState({
      movies: moviesLeft,
    });
  }

  //Metodo Serach
  filterMovies(textFilter) {
    let moviesFiltered = this.state.initialMovies.filter((movie) => {
      return movie.original_title
        .toLowerCase()
        .includes(textFilter.toLowerCase());
    });
    this.setState({
      movies: moviesFiltered,
    });
  }

  //Metodo cargarMas
  cargarMas() {
    let url = this.state.nextUrl;
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          movies: this.state.movies.concat(data.results),
          nextUrl:
            "https://api.themoviedb.org/3/movie/popular?api_key=5aa9fce9092f6cf9a542c91ac1a6f84e&language=en-US&page=" +
            (data.page + 1),
        });
        console.log(data.page);
      });
  }

  modoLista() {
    let modo = false;
    let id = document.querySelector("div.movie-card-container");
    console.log(id);
  }

  render() {
    return (
      <React.Fragment>
        <div className="movies-filters d-flex justify-content-between">
          <div>
            <Search filterMovies={(texto) => this.filterMovies(texto)} />
          </div>
        </div>
        <div className="movie-card-container">
          {console.log(this.state.movies)}
          {this.state.movies.length === 0 ? (
            <p>Loading page...</p>
          ) : (
            this.state.movies.map((movie, title) => (
              <CardMovies
                key={movie.name + title}
                dataMovie={movie}
                //Metodo borrar
                delete={(idDelete) => this.deleteCard(idDelete)}
              />
            ))
          )}
        </div>
        <div className="loadbtn">
          <button className="btn-success" onClick={() => this.cargarMas()}>
            Cargar Más Peliculas
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
