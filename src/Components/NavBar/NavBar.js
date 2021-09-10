import "./NavBar.css";
import React, { Component } from "react";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <header className="header bg-dark text-white">
          <h1 className="headertext">Movie Finder</h1>
          <h2 className="subheader">Las peliculas que mas te gustan, a tu alcance</h2>
          <section className="options">
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
