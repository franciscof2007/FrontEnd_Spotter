import { useNavigate, useParams } from "react-router-dom";
import IconeLocalizacao from "../assets/location.svg?react";

function LocalizacaoSala({ disponibilidade, edificio, piso, sala, horaInicio, horaFim, id, capacidade }){
    const navigate=useNavigate();
return (
    <div>
        <div className="-mt-12 flex gap-8">
            <img 
            src={IconeLocalizacao} 
            alt="Ícone" 
            className="ml-16 object-contain text-[#2A6A90] fill-current " 
            />
                <h1 className="text-xl mb-6 -ml-4 mt-6 font-bold text-[#2A6A90] ">Localização:</h1>
            </div>
<div className="flex justify-between ml-16">
      </div>
     
      <div className="ml-16">
        <div>
            <span className="font-semibold text-xl">Sala: </span>
            {sala}
        </div>

        <div>
            <span className="font-semibold text-xl">Piso: </span>
            {piso}
        </div>

        <div>

        <span className="font-semibold text-xl">Edifício: </span>
        {edificio}
    </div>

        <div>

        <span className="font-semibold text-xl">Capacidade sala: </span>
        {capacidade}
    </div>
                
    </div>
            
</div>
    );

}

export default LocalizacaoSala;