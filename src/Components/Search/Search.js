import React, { Component } from "react";

//Esto no esta terminado el search
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchBy: "",
    };
  }
  //Crear metodo que evita enviar el formulario
  evitarEnviar(evento) {
    evento.preventDefault();
  }

  //Metodo para controlar cambios

  changesCheck(evento) {
    this.setState(
      {
        filterBy: evento.target.value,
      },
      () => this.props.filterMovies(this.state.filterBy)
    );
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={(e) => this.evitarEnviar(e)}>
          <label for="nombre">Busca tu pelicula: </label>
          <br />
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={(e) => this.changesCheck(e)}
            value={this.state.filterBy}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
