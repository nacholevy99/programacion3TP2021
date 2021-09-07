// Aca vamos a ir importando los componentes y todo lo que queramos usar en este archivo
import "./App.css"
import Movies from "./Components/Movies/Movies";

//Aca vamos a ir agregnado todos los componentes para visualizarlos en la pagina
function App() {
  return (
    <div className="home">
      <header className="page-header">
        <p>Proyecto Integrador Holaaa</p>
      </header>
      <div>
        <Movies />
      </div>
    </div>
  );
}

export default App;
