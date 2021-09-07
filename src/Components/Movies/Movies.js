import React, { Component } from "react";
import CardMovies from "../CardMovies/CardMovies";

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

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.movies.length === 0 ? (
            <p>Cargando aplicación...</p>
          ) : (
            this.state.movies.map((movie, title) => (
              <CardMovies key={movie.name + title} dataMovie={movie} />
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
