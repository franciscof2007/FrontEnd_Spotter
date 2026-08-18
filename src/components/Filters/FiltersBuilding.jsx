import Header from "../ListOfRooms/Header";
import Searchbar from "../ListOfRooms/Searchbar";
import Filters from "../ListOfRooms/Filters";
import { useFilters } from "../../hooks/useFilters";

function FiltersBuilding({onClose}){

  const {builing, setBuilding} = useFilters();


  return (
    <div>


    <div className="fixed inset-0 bg-black/60 flex flex-col p-3 justify-end items-center">
      
      {/* O teu Cartão / Modal */}
      <div className="w-full max-w-md -mb-12 bg-white p-10 rounded-3xl shadow-2xl max-h-[73vh] overflow-y-auto">
        <div className="flex items-center gap-30 mb-4">

        <span className="text-3xl -ml-1 font-bold text-[#2A6A90] ">
            Edifícios
        </span>

        <div className="w-9 h-9 bg-[#2A6A90]/20 ml-2 rounded-full flex items-center justify-center shrink-0">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        onClick={onClose}
        viewBox="0 -960 960 960" 
        className="w-8 h-8 fill-[#2A6A90]/70"
        >
        <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
        </svg>
      </div>
      </div>

        {/* Linha Divisória */}
        <div className="w-5/5 -ml-4 h-px bg-[#000000]/10 mb-2"></div>

        {/* Texto Explicativo */}
        <p className="text-medium text-gray-600 -ml-2 mb-12 text-left leading-relaxed">
          Edifícios a priorizar nos resultados.
        </p>

        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Central
          </span>
        </div>

        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Civíl
          </span>
        </div>

        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Física
          </span>
        </div>

        <div className="flex items-center -ml-4 mb-2 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Informática I
          </span>
        </div>


          <div className="flex items-center -ml-4 mb-2 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Informática II
          </span>
        </div>


        <div className="flex items-center -ml-4 mb-2 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Informática III
          </span>
        </div>


        <div className="flex items-center -ml-4 mb-2 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Matemática
          </span>
        </div>
        
        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Mecânica I
          </span>
        </div>

      <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Mecânica II
          </span>
        </div>

        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Mecânica III
          </span>
        </div>

        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Mecânica IV
          </span>
        </div>

        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Pav. de Minas
          </span>
        </div>


        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Torre Norte
          </span>
        </div>

        <div className="flex items-center mb-2 -ml-4 gap-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-11 h-11 ml-5 fill-[#2A6A90] shrink-0"
          >
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
          </svg>

          <span className="px-4 py-1.5 bg-[#A3C7D6] text-gray-900 rounded-full text-xs font-medium">
            Torre Sul
          </span>
        </div>

      </div>
    </div>
    </div>
  );

}

export default FiltersBuilding;
