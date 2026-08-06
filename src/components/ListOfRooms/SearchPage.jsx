import Header from "./Header";
import Searchbar from "./Searchbar";
import Filters from "./Filters";
import Rooms from "./Rooms";



function SearchPage() {
  return(
    
    <div>
      <div>
        <Header/>
      </div>

      <div>
        <Searchbar/>
      </div>

      <div>
        <Filters/>
      </div>

      <div>
        <Rooms/>
      </div>

    </div> 

  );
}

export default SearchPage;
