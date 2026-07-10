import Header from "./Header";
import Searchbar from "./Searchbar";
import Filtros from "./Filtros";
import Salas from "./Salas";



function PaginaPesquisa() {
  return(
    
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

export default PaginaPesquisa;