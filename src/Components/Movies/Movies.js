import React, { Component } from "react";
import CardMovies from "../CardMovies/CardMovies";
import "./Movies.css";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    console.log("Component loaded");
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

  render() {
    return (
      <React.Fragment>
        <div className='movie-card-container'>
          {this.state.movies.length === 0 ? (
            <p>Loading page...</p>
          ) : (
            this.state.movies.map((movie, title) => (
              <CardMovies
                key={movie.name + title}
                dataMovie={movie}
                //Metodo borrar
                delete={(idDelete) => this.deleteCard(idDelete)}
                className='movie-card-object'
              />
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
