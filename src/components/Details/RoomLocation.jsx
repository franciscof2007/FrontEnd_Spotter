import { useNavigate, useParams } from "react-router-dom";
import LocationIcon from "../../assets/location.svg?react";

function RoomLocation({ building, floor, room, id, capacity }){
    const navigate=useNavigate();
return (
    <div>
        <div className="-mt-12 flex gap-8">
            <LocationIcon className="ml-16 object-contain text-[#2A6A90] fill-current" />
            
                <h1 className="text-xl mb-6 -ml-4 mt-6 font-bold text-[#2A6A90] ">Localização:</h1>
            </div>
<div className="flex justify-between ml-16">
      </div>
     
      <div className="ml-16">
        <div>
            <span className="font-semibold text-xl">Sala: </span>
            {room}
        </div>

        <div>
            <span className="font-semibold text-xl">Piso: </span>
            {floor}
        </div>

        <div>

        <span className="font-semibold text-xl">Edifício: </span>
        {building}
    </div>

        <div>

        <span className="font-semibold text-xl">Capacidade sala: </span>
        {capacity}
    </div>
                
    </div>
            
</div>
    );

}

export default RoomLocation;
