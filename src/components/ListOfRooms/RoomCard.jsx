import { useNavigate, useParams } from 'react-router-dom';
import {FormatTime} from '../../Utils/FormatTime'
function RoomCard({ availability, building, floor, room, startTime, endTime, id }){
    const navigate=useNavigate();
    const {campus}=useParams();
    let statusText = "Incerto";
    let textColor = "text-gray-500"
    let stripeColor = "bg-gray-500";
    let subtitle = "Informação indisponível";

    const statusLower = availability?.toLowerCase() || "";

    if (statusLower.includes("disponivel") || statusLower.includes("livre_agora") || statusLower === "disponível") {
        statusText = "Disponível";
        textColor = "text-green-400";
        stripeColor = "bg-green-400";
        subtitle = endTime ? `Livre agora até às ${FormatTime(endTime)}` : "Livre agora";

    } else if (statusLower.includes("breve")) {
        statusText = "Disponível em breve";
        textColor = "text-amber-500";
        stripeColor = "bg-amber-500";
        subtitle = (startTime && endTime) ? `Livre das ${FormatTime(startTime)} às ${FormatTime(endTime)}` : "Livre em breve";
        

    } else if (statusLower.includes("ocupad")) {
        statusText = "Ocupada";
        textColor = "text-red-900";
        stripeColor = "bg-red-900";
        subtitle = endTime ? `Ocupada até às ${FormatTime(endTime)}` : "Ocupada neste momento";
    }

    return (
        <div
        onClick={() => navigate(`/${campus}/sala/${id}`)}
        className="border-2 border-gray-400 rounded p-4 bg-white cursor-pointer"
        >
        <div className="flex justify-between items-center mb-1">
        <span className={`font-bold text-xl ${textColor}`}>
            {statusText}
        </span>
        <span className={`w-10 h-3 rounded-full ${stripeColor}`}></span>
      </div>

      <p className="text-xs text-gray-400 mb-2 mt-0.5">
        {subtitle}
      </p>

     
      <div className="mt-2 text-sm">
        <div className="mb-1">

        <span className="font-bold">Edifício: </span>
        {building}
    </div>

    <div className="flex gap-8">
        <div>
            <span className="font-bold">Piso: </span>
            {floor}
        </div>
        <div>
            <span className="font-bold">Sala: </span>
            {room}
        </div>
                
    </div>
            
</div>

</div>
    );

}

export default RoomCard;



