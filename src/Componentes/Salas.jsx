import { useState, useEffect } from "react";
import CartaoSala from "./CartaoSala";
import { ObterSala } from "../Services/SalasService";


function Salas(){

    const [isloading, setIsloading] = useState(true);
    const [erro, setErro] = useState(null);
    const [salas, setSalas]= useState([]);

    useEffect(()=>{
        async function CarregarSalas() {
            try{
                const dados = await ObterSala("Alameda");
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