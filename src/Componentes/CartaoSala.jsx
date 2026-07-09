function CartaoSala({ disponibilidade, edificio, piso, sala }){
    return(
        
        <div className="border-2 border-gray-600 rounded p-4 bg-white">
                    
            <div className="font-bold">{disponibilidade}</div>
            <div className="mt-1">

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



