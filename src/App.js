// Aca vamos a ir importando los componentes y todo lo que queramos usar en este archivo
import React from "react";
import reactDom from "react-dom";
import "./App.css";
import Movies from "./Components/Movies/Movies";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

//Aca vamos a ir agregando todos los componentes para visualizarlos en la pagina
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <button type="loadmore">Cargar más tarjetas</button>
        <section className="card-container">
          <article>
            <section className="navigation">
              <div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
              </div>
            </section>
          </article>
        </section>
      </main>

      <div>
        <div>
          <Movies />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
