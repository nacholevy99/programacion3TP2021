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
          <h1>Movie Finder</h1>
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
