import { useNavigate, useParams } from "react-router-dom";
import IconeDisponibilidade from "../assets/available.svg?react";

function DisponibilidadeSala({horaInicio, horaFim, disponibilidade, atualizacao}){
    const navigate=useNavigate();

    let subtexto = "Informação indisponível";

    const statusLower = disponibilidade?.toLowerCase() || "";

    if (statusLower.includes("disponivel") || statusLower.includes("livre_agora") || statusLower === "disponível") {
        subtexto = horaFim ? `Disponível até às ${horaFim}` : "Livre agora";

    } else if (statusLower.includes("breve")) {
        subtexto = (horaInicio && horaFim) ? `Livre das ${horaInicio} às ${horaFim}` : "Livre em breve";
        

    } else if (statusLower.includes("ocupad")) {
        subtexto = horaFim ? `Ocupada até às ${horaFim}` : "Ocupada neste momento";
    }

return (
    <div>
        <div className="mt-12 flex gap-8">
            <img 
            src={IconeDisponibilidade} 
            alt="Ícone" 
            className="ml-16 object-contain text-[#2A6A90] fill-current " 
            />
                <h1 className="text-xl mb-5 -ml-4 font-bold mt-5 text-[#2A6A90] ">Disponibilidade:</h1>
            </div>
        
      <div className="ml-16">
        <div>
            <span className="font-semibold text-xl">{subtexto} </span>
        </div>
         <div>
            <span className="font-semibold text-xl">Ultima atualização: </span>
            {atualizacao}
        </div>
        </div>
     
</div>
    );

}

export default DisponibilidadeSala;