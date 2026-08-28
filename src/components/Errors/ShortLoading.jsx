import Header from "../ListOfRooms/Header";
import Searchbar from "../ListOfRooms/Searchbar";
import Filters from "../ListOfRooms/Filters";


function ShortLoading() {
  return( 
    
    <div>

      <div className="w-full h-px bg-[#2A6A90] mt-4 mb-6 opacity-30 -ml-2"></div>

      <div className="flex flex-col items-center mt-45 justify-center py-10">
            <div className="w-10 h-10 rounded-full text-center items-center border-3 border-transparent border-t-[#2A6A90] border-r-[#2A6A90] animate-spin" />

        <p className="mt-15 font-bold text-2xl text-[#2A6A90]">A carregar salas...</p>
        </div>


    </div> 

  );
}

export default ShortLoading;