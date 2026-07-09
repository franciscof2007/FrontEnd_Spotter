import search from "../assets/search.png"

function Searchbar(){
    return(
        
    <div className="flex items-center justify-center py-3 mb-2">
      <div className="flex items-center border-2 rounded px-3 py-1 bg-white w-7/12 max-w-md">

        <img src={search} alt="searchbar" className="w-5 h-5 mr-2 opacity-70" />
      <input type="text" placeholder="pesquisa da sala" className="w-full text-center outline-none bg-transparent" />
      </div>
      
    
    </div>

        
    );

}

export default Searchbar;