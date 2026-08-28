import Header from "../ListOfRooms/Header";
import Searchbar from "../ListOfRooms/Searchbar";
import Filters from "../ListOfRooms/Filters";
import { useFilters } from "../../hooks/useFilters";
import { useEffect } from "react";


function FiltersBuilding({ onClose }) {
  const { building, toggleBuilding } = useFilters();

useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "";
  };
}, []);


  // Lista dos edifícios disponíveis
  const buildingsList = [
    { id: "2448131361060", label: "Central" },
    { id: "2448131361042", label: "Pav. de Civil" },
    { id: "2448131361051", label: "Pav. de Física" },
    { id: "2448131361133", label: "Pav. de Informática I" },
    { id: "2448131361173", label: "Pav. de Informática II" },
    { id: "2448131361129", label: "Pav. de Informática III" },
    { id: "2448131361119", label: "Pav. de Matemática" },
    { id: "2448131361165", label: "Pav. de Mecânica I" },
    { id: "2448131361161", label: "Pav. de Mecânica II" },
    { id: "2448131361155", label: "Pav. de Mecânica III" },
    { id: "2448131361150", label: "Pav. de Mecânica IV" },
    { id: "2448131361139", label: "Pav. de Minas" },
    { id: "2448131361091", label: "Torre Norte" },
    { id: "2448131361074", label: "Torre Sul" },
  ];

  return (
    <div>
      <div className="fixed inset-0 bg-black/60 flex flex-col p-3 justify-end items-center z-50">
        
        {/* Cartão / Modal */}
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-1">
            <span className="text-3xl -ml-1 -mt-5 font-bold text-[#2A6A90]">
              Edifícios
            </span>

            <div className="w-9 h-9 bg-[#2A6A90]/20 rounded-full mb-1 -mt-2 flex items-center justify-center shrink-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                onClick={onClose}
                viewBox="0 -960 960 960" 
                className="w-8 h-8 fill-[#2A6A90]/70 cursor-pointer"
                aria-label="Fechar"
              >
                <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
              </svg>
            </div>
          </div>

          {/* Linha Divisória */}
          <div className="w-full h-px bg-[#000000]/10 mb-2 -ml-2"></div>

          {/* Texto Explicativo */}
          <p className="text-medium text-gray-600 mb-3 text-left leading-relaxed">
            Edifícios a priorizar nos resultados.
          </p>

          {/* Lista de Edifícios Dinâmica */}
          <div className="space-y-2">
            {buildingsList.map((item) => {
              const isSelected = building.includes(item.id);

              return (
                <div 
                  key={item.id}
                  onClick={() => toggleBuilding(item.id)}
                  className={`flex items-center gap-4 cursor-pointer transition-transform duration-200 ease-in-out
                  `}
                >
                  {isSelected ? (
                    /* Toggle ON */
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 -960 960 960" 
                      className="w-12 h-12 fill-[#2A6A90] shrink-0"
                    >
                      <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm485-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-285-85Z"/>
                    </svg>
                  ) : (
                    /* Toggle OFF */
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 -960 960 960" 
                      className="w-12 h-12 fill-[#2A6A90]/40 shrink-0"
                    >
                      <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm85-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm115-85Z"/>
                    </svg>
                  )}

                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isSelected 
                      ? 'bg-[#2A6A90] text-white' 
                      : 'bg-[#A3C7D6] text-gray-900'
                  }`}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default FiltersBuilding;