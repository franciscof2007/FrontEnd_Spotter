import search from "../../assets/search.svg"
import { useFilters } from "../../hooks/useFilters";

function Searchbar({onRefresh}){
  const { search, setSearch} = useFilters();
    return(
        
    <div className="flex items-center justify-center py-3 mb-2 mr-9">

      <svg 
      onClick={onRefresh}
      className="mr-3 text-black cursor-pointer"
      xmlns="http://www.w3.org/2000/svg" 
      height="27px" 
      viewBox="0 -960 960 960" 
      width="32px" 
      fill="currentColor">
        <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/>
      </svg>

      <div className="flex items-center rounded-xl px-5 py-1 bg-[#2A6A9040] w-7/12 max-w-md">

        <svg
        xmlns="http://www.w3.org/2000/svg" 
        height="20px"
        viewBox="0 -960 960 960"
        className="text-gray-800" 
        width="20px" fill="currentColor">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
        </svg>


      <input type="text" 
      placeholder="Pesquisa da sala" 
      className="w-full text-center outline-none bg-transparent"  
      value={search}
      onChange={(e)=> setSearch(e.target.value)}/>
      </div>
      
    
    </div>

        
    );

}

export default Searchbar;