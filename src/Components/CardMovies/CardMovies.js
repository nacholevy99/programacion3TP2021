import React, { Component } from "react";
import "./CardMovies.css";

class CardMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      <div className="movie-card">
        <img src={this.props.dataMovie.backdrop_path} alt="movieposter" />
        <h4>{this.props.dataMovie.title}</h4>
        <p>
          {`${this.props.dataMovie.release_date} - 
          ${this.props.dataMovie.original_language} -
          ${this.props.dataMovie.overview}`}{" "}
        </p>
        <button className="btn-danger">Borrar</button>
      </div>
    );
  }
}

export default CardMovies;
