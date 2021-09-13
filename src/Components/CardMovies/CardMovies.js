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
      <React.Fragment>

      <div className="movie-card">
        <div className="arrow-card mb-2 w-100 p-1 d-flex justify-content-between" >
          <div>
            <button className="mx-1"><i className="fas fa-chevron-left"></i></button>
            <button className="mx-1"><i className="fas fa-chevron-right"></i></button> 
          </div>
          <button
          className="btn-danger borrar"
          onClick={() => this.props.delete(this.props.dataMovie.id)}
        >
          X
        </button>
        </div>        
        {console.log(this.props.dataMovie.backdrop_path)}
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.dataMovie.backdrop_path}`} alt='imagen'
        />
        <h4>{this.props.dataMovie.title}</h4>
        <p className="sinopsis">Sinopsis: {this.props.dataMovie.overview}</p>

      </div>
      </React.Fragment>
    );
  }
}

export default CardMovies;
