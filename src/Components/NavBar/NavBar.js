import React, { Component } from "react";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Título/ Nombre de la app</h1>
          <section>
            <form action="">
              <input type="text" name="search" id="" placeholder="Search" />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </section>
        </header>
      </React.Fragment>
    );
  }
}
export default NavBar;
