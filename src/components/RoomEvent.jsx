import { useNavigate, useParams } from "react-router-dom";
import EventIcon from "../assets/alarm.svg?react";

function RoomEvent({startTime, endTime, availability, lastUpdated}){
    const navigate=useNavigate();

return (
    <div>
        <div className="mt-8 flex gap-8">
            <img 
            src={EventIcon} 
            alt="Ícone" 
            className="ml-16 object-contain text-[#2A6A90] fill-current " 
            />
                <h1 className="text-xl mb-5 -ml-4 font-bold mt-6 text-[#2A6A90] ">Próximo Evento:</h1>
            </div>
        
      
        <div className="font-semibold rounded ml-16 mr-12 -mt-2 pt-8 pb-2 bg-[#2A6A9066] min-w-0"
        >
        <div>
            <span className="inline-block font-semibold mt-4 text-xl ml-20"> Aula Calculo II </span>
        
        </div>
         <div>
            <span className="inline-block font-normal pt-10 ml-12">dia da semana, dia do mes </span>
            
        </div>
        <div>
            <span className="inline-block font-normal pt-2 ml-12"> hora inicio - hora final </span>
            
        </div>
        </div>
     
</div>
    );

}

export default RoomEvent;
