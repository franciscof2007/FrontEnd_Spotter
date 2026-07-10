import { useNavigate} from "react-router-dom";
import imgalameda from "../assets/imgalameda.jpg"
import imgtagus from "../assets/imgtagus.jpg"
import logo from "../assets/hero.png"


function EscolhaCampus(){
    const navigate=useNavigate();

    const CampusOpcao=({nome, imagem}) =>(
        <button
            onClick={()=>navigate("/salas")}
            className="group w-full max-w-sm flex flex-col items-start mb-8 cursor-pointer"
        >
            <div className="w-full h-48 border-4 rounded-xl flex items-center justify-center overflow-hidden">
                <img src={imagem} alt={`Campus ${nome}`} className="w-full h-full object-cover" />
            </div>
            <span className="font-semibold mt-3 text-2xl pl-3">
                {nome}
            </span>
        </button>
    );
    return(
        <div className="flex flex-col items-center p-5 min-h-screen">
            <img src={logo} alt="logotipo" className="h-10 w-10 mt-3"/>
            <h1 className="font-bold text-3xl mb-12 mt-5 text-center">
                Qual o teu Campus?
            </h1>
            <div className="flex flex-col gap-4 w-full items-center">
                <CampusOpcao nome="Alameda" imagem={imgalameda}/>
                <CampusOpcao nome="TagusPark" imagem={imgtagus}/>
            </div>

            
        </div>
    );
}

export default EscolhaCampus;
