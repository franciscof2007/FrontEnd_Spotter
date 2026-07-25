import { useNavigate, useParams } from "react-router-dom";
import IconeDisponibilidade from "../assets/available.svg?react";

function DisponibilidadeSala({ disponibilidade, horaInicio, horaFim, id}){
    const navigate=useNavigate();
return (
    <div>
        <div className="-mt-12 flex gap-8">
            <img 
            src={IconeDisponibilidade} 
            alt="Ícone" 
            className="ml-16 object-contain text-[#2A6A90] fill-current " 
            />
                <h1 className="text-xl mb-5 -ml-4 font-bold mt-5 text-[#2A6A90] ">Localização:</h1>
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