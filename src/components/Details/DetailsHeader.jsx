import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/hero.png"

function DetailsHeader(){

    const {id,campus} = useParams();
    const navigate=useNavigate();
    
    return(
        <div>
            <div className="flex justify-between px-6 mt-3">
                <button onClick={()=>navigate(`/${campus}`)}
                className="px-4 py-1 rounded text-3xl">
                {"<"}
                </button>
                <img src={logo} alt="logotipo do spotter" className="ml-3 w-10"/>
            </div>

            <div className="p-4">
                <h1 className="text-4xl mb-17 font-bold text-[#2A6A90] text-center">Detalhes da Sala</h1>
            </div>
        </div>
    );
}

export default DetailsHeader;
