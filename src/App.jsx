import Header from "./Componentes/Header";
import Searchbar from "./Componentes/Searchbar";
import Filtros from "./Componentes/Filtros";
import Salas from "./Componentes/Salas";



function App() {
  return(
    /*Header */
  <div>
    <div>
      <Header/>
    </div>

    <div>
      <Searchbar/>
    </div>

    <div>
      <Filtros/>
    </div>

    <div>
      <Salas/>
    </div>

  </div> 

  );
}

export default App;

