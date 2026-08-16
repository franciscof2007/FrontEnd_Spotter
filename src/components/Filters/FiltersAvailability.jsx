import Header from "../ListOfRooms/Header";
import Searchbar from "../ListOfRooms/Searchbar";
import Filters from "../ListOfRooms/Filters";

function FiltersAvailability(){
  return (
    <div>


    <div className="fixed inset-0 bg-black/60 flex flex-col w-full justify-end items-center p-2 z-50">
      
      {/* O teu Cartão / Modal */}
      <div className="w-full max-w-md rounded-3xl border-t border-gray-200 bg-white p-10 shadow-4xl duration-200">
        <div className="flex items-center gap-6 mb-4">

        <span className="text-4xl -ml-2 font-extrabold text-[#2A6A90] ">
            Disponibilidade
        </span>

        <div className="w-9 h-9 bg-[#2A6A90]/50 rounded-full">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 -960 960 960" 
        className="w-9 h-9 fill: #000000 opacity-70"
        >
        <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
        </svg>
      </div>
      </div>

        {/* Linha Divisória */}
        <div className="w-5/5 -ml-4 h-px bg-[#000000]/80 opacity-70 mb-2"></div>

        {/* Texto Explicativo */}
        <p className="text-sm text-gray-600 -ml-2 mb-15 text-left leading-relaxed">
          Apresenta, nos resultados, apenas salas disponíveis agora ou em breve (até 15 minutos).
        </p>

        {/* Opção 1: Disponível */}
        <div className="flex items-center -ml-4 gap-3 mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-12 h-12 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-sm font-medium">
            Disponível
          </span>
        </div>

        {/* Opção 2: Disponível em breve */}
        <div className="flex items-center -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-12 h-12 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-sm font-medium">
            Disponível em breve
          </span>
        </div>

      </div>
    </div>
    </div>
  );

}

export default FiltersAvailability;
