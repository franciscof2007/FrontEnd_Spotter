import CartaoSala from "./CartaoSala";

function Salas(){
    return(
        <div>
            <div>
                <hr className="border-black border my-4 mt-5"/>
            </div>

            <div className="grid grid-cols-1 gap-4 mr-6 ml-6">
                
                <CartaoSala 
                disponibilidade="Disponibilidade livre até:"
                edificio="Pavilhão de Civil"
                piso="1"
                sala="v1.11"
                />

                <CartaoSala 
                disponibilidade="Disponibilidade livre até:"
                edificio="Pavilhão de informática"
                piso="0"
                sala="F3"
                />

                <CartaoSala 
                disponibilidade="Disponibilidade livre até:"
                edificio="Pavilhão de Química"
                piso="-2"
                sala="QA0.02"
                />

                <CartaoSala 
                disponibilidade="Disponibilidade livre até:"
                edificio="Pavilhão de Eletrotécnica"
                piso="1"
                sala="EA3"
                />
            </div>
        </div>

    );

}

export default Salas;