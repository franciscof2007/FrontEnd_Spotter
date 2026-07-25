import { useNavigate, useParams } from "react-router-dom";
import IconeEvento from "../assets/alarme.svg?react";

function EventoSala({horaInicio, horaFim, disponibilidade, atualizacao}){
    const navigate=useNavigate();

return (
    <div>
        <div className="mt-8 flex gap-8">
            <img 
            src={IconeEvento} 
            alt="Ícone" 
            className="ml-16 object-contain text-[#2A6A90] fill-current " 
            />
                <h1 className="text-xl mb-5 -ml-4 font-bold mt-5 text-[#2A6A90] ">Próximo Evento:</h1>
            </div>
        
      
        <div className="font-semibold rounded ml-12 mr-12 pt-8 pb-34 bg-[#2A6A9066] min-w-0"
        >
        <div>
            <span className="inline-block font-semibold text-xl ml-24"> Aula Calculo II </span>
        
        </div>
         <div>
            <span className="inline-block font-semibold text-xl ml-6">Ultima atualização: </span>
            
        </div>
        </div>
     
</div>
    );

}

export default EventoSala;