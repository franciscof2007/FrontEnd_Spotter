import { useNavigate, useParams } from "react-router-dom";
import AvailabilityIcon from "../assets/available.svg?react";

function RoomAvailability({startTime, endTime, availability, availableUntil, lastUpdated}){
    const navigate=useNavigate();

    let subtitle = "Informação indisponível";

    const statusLower = availability?.toLowerCase() || "";

    if (statusLower.includes("disponivel") || statusLower.includes("livre_agora") || statusLower === "disponível") {
        subtitle = endTime ? `Disponível até às ${endTime}` : "Livre agora";

    } else if (statusLower.includes("breve")) {
        subtitle = (startTime && endTime) ? `Livre das ${startTime} às ${endTime}` : "Livre em breve";
        

    } else if (statusLower.includes("ocupado")) {
        subtitle = endTime ? `Ocupada até às ${endTime}` : "Ocupada neste momento";
    }

return (
    <div>
        <div className="mt-12 flex gap-8">
            <img 
            src={AvailabilityIcon} 
            alt="Ícone" 
            className="ml-16 object-contain text-[#2A6A90] fill-current " 
            />
                <h1 className="text-xl mb-5 -ml-4 font-bold mt-5 text-[#2A6A90] ">Disponibilidade {availableUntil}  :</h1>
            </div>
        
      <div className="ml-16">
        <div>
            <span className="font-semibold text-xl">{subtitle} </span>
        </div>
         <div>
            <span className="font-semibold text-xl">Ultima atualização: </span>
            {lastUpdated}
        </div>
        </div>
     
</div>
    );

}

export default RoomAvailability;
