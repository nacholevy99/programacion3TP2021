import React, { Component } from "react";
import "./CardMovies.css";
import Search from "../Search/Search";

class CardMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        
      <div className="movie-card">
        {console.log(this.props.dataMovie.backdrop_path)}
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.dataMovie.backdrop_path} alt="imagen"`}
        />
        <h4>{this.props.dataMovie.title}</h4>
        <p className="sinopsis">Sinopsis: {this.props.dataMovie.overview}</p>
        <button
          className="btn-danger"
          onClick={() => this.props.delete(this.props.dataMovie.id)}
        >
          Borrar
        </button>
      </div>
      </React.Fragment>
    );
  }
}

export default CardMovies;
