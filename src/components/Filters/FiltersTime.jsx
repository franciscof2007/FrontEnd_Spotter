import { useState } from "react";
import Header from "../ListOfRooms/Header";
import Searchbar from "../ListOfRooms/Searchbar";
import Filters from "../ListOfRooms/Filters";

function FiltersTime() {
  // Funções de apoio para obter valores padrão
  const getTodayString = () => new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const getCurrentTimeString = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`; // HH:mm
  };

  // Estado único para o dia
  const [selectedDate, setSelectedDate] = useState(getTodayString());

  // Estados para o intervalo de horas
  const [startTime, setStartTime] = useState(getCurrentTimeString());
  const [endTime, setEndTime] = useState(getCurrentTimeString());

  const handleApply = () => {
    if (endTime < startTime) {
      alert("A hora de fim não pode ser anterior à hora de início.");
      return;
    }

    console.log("Filtros aplicados:", {
      date: selectedDate,
      startTime,
      endTime,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Modal / Overlay */}
      <div className="fixed inset-0 bg-black/60 flex flex-col w-full justify-end items-center p-4 z-50">
        
        {/* Cartão do Modal */}
        <div className="w-full max-w-md rounded-3xl border-t border-gray-200 bg-white p-10 shadow-4xl duration-200">
          
          {/* Cabeçalho */}
          <div className="flex items-center justify-between mb-3 shrink-0">
            <span className="text-3xl font-extrabold text-[#2A6A90]">
              Horário
            </span>

            <div className="w-12 h-12 bg-[#2A6A90]/20 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-7 h-7 fill-[#2A6A90]"
              >
                <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
              </svg>
            </div>
          </div>

          <div className="w-full h-px bg-black/10 mb-4 shrink-0"></div>

          {/* Campo Único: Dia */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2 font-medium">
              Dia:
            </label>
            <input 
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full -ml-4 p-3 max-w-xs mx-auto block bg-gray-100 border border-gray-200 rounded-2xl text-base font-semibold text-gray-800 text-center outline-none focus:ring-2 focus:ring-[#2A6A90]"
            />
          </div>

          {/* Campos de Hora: Desde as / Até às */}
          <div className="grid -ml-7 grid-cols-2 gap-10 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2 font-medium">
                Desde as:
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-xl text-base font-semibold text-gray-800 text-center outline-none focus:ring-2 focus:ring-[#2A6A90]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2 font-medium">
                Até às:
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-xl text-base font-semibold text-gray-800 text-center outline-none focus:ring-2 focus:ring-[#2A6A90]"
              />
            </div>
          </div>

          {/* Botão de Aplicar */}
          <button
            onClick={handleApply}
            className="w-full py-3.5 bg-[#2A6A90] hover:bg-[#205373] text-white font-bold text-base rounded-2xl shadow-md active:scale-[0.98] transition-all"
          >
            Aplicar Horário
          </button>

        </div>
      </div>
    </div>
  );
}

export default FiltersTime;