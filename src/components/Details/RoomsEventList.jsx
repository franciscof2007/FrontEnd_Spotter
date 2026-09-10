 
import { useState } from "react";
import RoomEvent from "./RoomEvent"; 
import EventIcon from "../../assets/alarm.svg?react";
import { timeToMinutes } from "../../Utils/TimeToMinutes";

function RoomsEventList({eventos=[]}){
    const [MostrarTodosEventos, setMostrarTodosEventos]=useState(false);
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const eventosRestantes = eventos.filter((event) => {
        const eventEndMinutes = timeToMinutes(event.end);
        return eventEndMinutes > currentMinutes;
    });

    const eventosVisiveis = MostrarTodosEventos ? eventosRestantes : eventosRestantes.slice(0, 1);
    
    return(
        <div>
            <div className="mt-12 flex gap-4 items-center">
                <EventIcon className="ml-16 w-7 h-7 text-[#2A6A90] fill-current" />
                <h1 className="text-xl font-bold text-[#2A6A90]">Próximos Eventos:</h1>
            </div>
            {eventosRestantes.length>0 ? (
                <div className="flex flex-col items-center w-full">
                {eventosVisiveis
                .map((event)=>(
                <RoomEvent
                key={event.id || event.start}
                start={(event.start.slice(0,5))}
                end={(event.end.slice(0,5))}
                type={event.type}
                course={event.course}
                info={event.info}
                />
                ))}
                {
                eventosRestantes.length>1 && (
                    <button onClick={()=>setMostrarTodosEventos(!MostrarTodosEventos)}
                    className="mt-6 w-10/12 py-3 text-center bg-[#EAEAEA] text-[#2A6A90] justify-center rounded-xl font-medium">
                    {MostrarTodosEventos ? "ver menos ↑" : "ver mais ↓"}
                    </button>
                )}
                </div>
            ) : (
                <p className="text-gray-500 italic mt-4 ml-16">
                Sem eventos agendados.
                </p>
            )}
        </div>
    );



}
 
export default RoomsEventList;

    