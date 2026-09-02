import Header from "./Header";
import Searchbar from "./Searchbar";
import Filters from "./Filters";
import Rooms from "./Rooms";
import { useState } from "react";



function SearchPage() {

  const [refreshKey, setRefreshKey] = useState(0);
  return(
    
    <div>
      <div>
        <Header/>
      </div>

      <div>
        <Searchbar onRefresh = {()=>setRefreshKey(k=>k+1)} />
      </div>

      <div>
        <Filters/>
      </div>

      <div>
        <Rooms refreshKey={refreshKey}/>
      </div>

    </div> 

  );
}

export default SearchPage;
