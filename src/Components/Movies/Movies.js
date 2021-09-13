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
    };
  }

  componentDidMount() {
    {/**console.log("Component loaded");**/}
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
    let moviesFiltered = this.state.movies.filter((movie) => {
      return movie.original_title.toLowerCase().includes(textFilter.toLowerCase());
    });
    this.setState({
      movies: moviesFiltered,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Search filterMovies={(texto) => this.filterMovies(texto)} />
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
                className="movie-card-object"
                index={this.state.movies.indexOf(movie)}
              />
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
