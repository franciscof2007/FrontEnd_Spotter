import { useState } from "react";
import Header from "../ListOfRooms/Header";
import Searchbar from "../ListOfRooms/Searchbar";
import Filters from "../ListOfRooms/Filters";
import { useFilters } from "../../hooks/useFilters";

function FiltersTime({onClose}) {

  const {setDuration}=useFilters();
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

    setDuration(selectedDate, startTime, endTime);
  };

  return (
      <div>
        <div className="fixed inset-0 bg-black/60 flex flex-col w-full justify-end items-center p-3 z-50">
      
      {/* O teu Cartão / Modal */}
      <div className="rounded-3xl border-t -mb-2 border-gray-200 bg-white p-10 shadow-2xl max-w-md">
        <div className="flex items-center gap-6 mb-4">

        <span className="text-3xl font-bold text-[#2A6A90] ">
            Horário
        </span>

            <div className="w-9 h-9 bg-[#2A6A90]/20 rounded-full flex items-center justify-center shrink-0 ml-30">
              <svg
                onClick={onClose}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-8 h-8 fill-[#2A6A90]/70"
              >
                <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
              </svg>
            </div>
          </div>

          {/* Linha Divisória */}
        <div className="w-5/5 -ml-4 h-px bg-[#000000]/10 mb-2"></div>

        {/* Texto Explicativo */}
        <p className="text-sm text-gray-600 -ml-2 mb-10 text-left leading-relaxed">
          Apresenta apenas salas válidas no dia e horário selecionado.
        </p>

      
          {/* Campo Único: Dia */}
          <div className="mb-9">
            <label className="block text-sm text-gray-600 ml-2 mb-2 font-medium">
              Dia:
            </label>
            <input 
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full mb-3 -ml-3 p-3 max-w-xs mx-auto block bg-gray-100 border border-gray-200 rounded-2xl text-base font-semibold text-gray-800 text-center outline-none focus:ring-2 focus:ring-[#2A6A90]"
            />
          </div>

          {/* Campos de Hora: Desde as / Até às */}
          <div className="grid -ml-7 grid-cols-2 gap-15 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2 ml-3 font-medium">
                Desde as:
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full p-3 bg-gray-100 border border-gray-200 ml-2 rounded-xl text-base font-semibold text-gray-800 text-center outline-none focus:ring-2 focus:ring-[#2A6A90]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2 ml-2 font-medium">
                Até às:
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full p-3 bg-gray-100 border border-gray-200 -ml-1 rounded-xl text-base font-semibold text-gray-800 text-center outline-none focus:ring-2 focus:ring-[#2A6A90]"
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