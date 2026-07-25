import { useState, useEffect } from "react";
import CartaoSala from "./CartaoSala";
import { ObterSalas } from "../Services/SalasService";


function Salas(){

    const [isloading, setIsloading] = useState(true);
    const [erro, setErro] = useState(null);
    const [salas, setSalas]= useState([]);

    useEffect(()=>{
        async function CarregarSalas() {
            try{
                const dados = await ObterSalas("Alameda");
                setSalas(dados.salas);

            }catch(erro){
                setErro(erro.mensagem);

            }finally{
                setIsloading(false);
            }
        }

        CarregarSalas();



    },[]);


    return(
        <div>
            <div>
                <hr className="border-black my-4 mt-5"/>
            </div>

            <div className="grid grid-cols-1 gap-4 mr-6 ml-6">
                {salas.map((sala) =>(
                        <CartaoSala
                            key={sala.fenix_id}
                            disponibilidade={sala.status}
                            edificio={sala.building_name}
                            piso={sala.floor}
                            sala={sala.name}
                            horaInicio={sala.from}
                            horaFim={sala.until}

                    />
                ))}
                

            </div>
        </div>

    );

}

export default Salas;