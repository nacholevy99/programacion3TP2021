// Aca vamos a ir importando los componentes y todo lo que queramos usar en este archivo
import React from "react";
import "./App.css";
import Movies from "./Components/Movies/Movies";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel"

//Aca vamos a ir agregando todos los componentes para visualizarlos en la pagina
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Carousel />
      <main>
        <button type="loadmore">Cargar más tarjetas</button>
       
      </main>

      <div>
        <div>
          <h2> Peliculas destacadas </h2> 
          <Movies className="movie-card-container" />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
