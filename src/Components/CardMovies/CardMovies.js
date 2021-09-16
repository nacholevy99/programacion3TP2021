import React, { Component } from "react";
import "./CardMovies.css";

class CardMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      text: "Ver mas",
      selected: false,
    };
  }

  //Metodo ver mas
  viewMore() {
    if (this.state.viewMore) {
      this.setState({
        viewMore: false,
        text: "Ver más",
      });
    } else {
      this.setState({
        viewMore: true,
        text: "ver menos",
      });
    }
  }

  selected() {
    if (this.state.selected) {
      this.setState({
        selected: false,
      });
    } else {
      this.setState({
        selected: true,
      });
    }
  }

  render() {
    console.log(this.props.index); //Esto me dice el número de Orden en que está esta película en el Array que le pedioms a TMDB
    return (
      <React.Fragment>
        <div
          className={`movie-card ${this.state.selected ? "active" : ""}`}
          onDoubleClick={() => this.selected()}
        >
          <div className="arrow-card mb-2 w-100 p-1 d-flex justify-content-between">
            <div>
              <button className="mx-1">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="mx-1">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <button
              className="btn-danger borrar"
              onClick={() => this.props.delete(this.props.dataMovie.id)}
            >
              X
            </button>
          </div>

          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.dataMovie.backdrop_path}`}
            alt="imagen"
          />
          <h4>{this.props.dataMovie.title}</h4>
          <p className="sinopsis">Sinopsis: {this.props.dataMovie.overview}</p>
          <p className={`extra ${this.state.viewMore ? "show" : "hide"}`}>
            <ol> Lanzamiento: {this.props.dataMovie.release_date} </ol>
            <ol> Popularidad: {this.props.dataMovie.popularity} </ol>
            <ol> Votos: {this.props.dataMovie.vote_count} </ol>
          </p>
          <p className="more" onClick={() => this.viewMore()}>
            {this.state.text}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default CardMovies;
