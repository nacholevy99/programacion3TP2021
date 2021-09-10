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

  render() {
    return (
      <React.Fragment>
        <form>
          <label>Busca tu pelicula: </label>
          <br/>
          <input type="text" />
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
