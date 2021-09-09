// Aca vamos a ir importando los componentes y todo lo que queramos usar en este archivo
import React from "react";
import reactDom from "react-dom";
import "./App.css";
import Movies from "./Components/Movies/Movies";
import NavBar from "./Components/NavBar/NavBar";

//Aca vamos a ir agregnado todos los componentes para visualizarlos en la pagina
function App() {
  return (
    <React.Fragment>
     <NavBar />
      <main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
          <article>
            <section className="navigation">
              <div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
              </div>
              <i className="far fa-window-close"></i>
            </section>
          </article>
        </section>
      </main>
      <footer>
        <ul className="team">
          <li>Nombre integrante 1</li>
          <li>Nombre integrante 2</li>
          <li>Nombre integrante 3</li>
        </ul>
      </footer>
      <div classNameName="home">
        <div>
          <Movies />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
