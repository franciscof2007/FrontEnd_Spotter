function CartaoSala({ disponibilidade, edificio, piso, sala, horaInicio, horaFim }){
    
    let textoStatus = "Incerto";
    let corTexto = "text-gray-500"
    let corFaixa = "bg-gray-500";
    let subtexto = "Informação indisponível";

    // Normalizar a string para evitar problemas com maiúsculas/minúsculas
    const statusLower = disponibilidade?.toLowerCase() || "";

    if (statusLower.includes("disponivel") || statusLower.includes("livre_agora") || statusLower === "disponível") {
        textoStatus = "Disponível";
        corTexto = "text-green-400";
        corFaixa = "bg-green-400";
        subtexto = horaFim ? `Livre agora até às ${horaFim}` : "Livre agora";

    } else if (statusLower.includes("breve")) {
        textoStatus = "Disponível em breve";
        corTexto = "text-amber-500";
        corFaixa = "bg-amber-500";
        subtexto = (horaInicio && horaFim) ? `Livre das ${horaInicio} às ${horaFim}` : "Livre em breve";
        

    } else if (statusLower.includes("ocupad")) {
        textoStatus = "Ocupada";
        corTexto = "text-red-900";
        corFaixa = "bg-red-900";
        subtexto = horaFim ? `Ocupada até às ${horaFim}` : "Ocupada neste momento";
    }

    return (
        <div className="border-2 border-gray-400 rounded p-4 bg-white cursor-pointer">
            <div className="flex justify-between items-center mb-1">
                <span className={`font-bold text-xl ${corTexto}`}>
                 {textoStatus}
        </span>
        <span className={`w-10 h-3 rounded-full ${corFaixa}`}></span>
      </div>

      <p className="text-xs text-gray-400 mb-2 mt-0.5">
        {subtexto}
      </p>

     
      <div className="mt-2 text-sm">
        <div className="mb-1">

        <span className="font-bold">Edifício: </span>
        {edificio}
    </div>

    <div className="flex gap-8">
        <div>
            <span className="font-bold">Piso: </span>
            {piso}
        </div>
        <div>
            <span className="font-bold">Sala: </span>
            {sala}
        </div>
                
    </div>
            
</div>

</div>
    );

}

export default CartaoSala;



