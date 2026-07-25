import { useNavigate} from "react-router-dom";
import imgalameda from "../assets/imgalameda.png"
import imgtagus from "../assets/imgtagus.jpg"
import logo from "../assets/hero.png"



function EscolhaCampus(){
    const navigate=useNavigate();

    const CampusOpcao=({nome, imagem}) =>(
        <button
            onClick={()=>navigate(`/${nome.toLowerCase()}`)}
            className="group w-full max-w-sm flex flex-col items-start mb-8 cursor-pointer"
        >
            <div className="w-full h-48 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={imagem} alt={`Campus ${nome}`} className="w-full h-full object-cover" />
            </div>
            <span className="w-full flex font-semibold mt-2 text-2xl pl-3 text-center justify-center text-[#2A6A90]">
                {nome}
            </span>
        </button>
    );
    return(
        <div className="flex flex-col items-center pt-16 p-8 min-h-screen">
            <img src={logo} alt="logotipo" className="h-10 w-10"/>
            <h1 className="text-3xl mb-12 mt-5 text-center">
                Qual é o teu Campus?
            </h1>
            <div className="flex flex-col mt-16 gap-4 w-full">
                <CampusOpcao nome="Alameda" imagem={imgalameda}/>
                <CampusOpcao nome="TagusPark" imagem={imgtagus}/>
            </div>

            
        </div>
    );
}

export default EscolhaCampus;
