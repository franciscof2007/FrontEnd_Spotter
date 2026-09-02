import { useNavigate, useParams, useLocation } from "react-router-dom";
import logo from "../../assets/hero.png"

function DetailsHeader(){

    const {id,campus} = useParams();
    const navigate=useNavigate();
    const location= useLocation();
    const previousSearch = location.state?.from || '';
    
    return(
        <div>
            <div className="flex justify-between px-6 mt-3">
                <button onClick={()=>navigate(`/${campus}${previousSearch}`)}
                className="px-4 py-1 rounded text-3xl cursor-pointer">
                {"<"}
                </button>
                <h1 className="text-xl font-extrabold font-serif mt-3 text-[#2A6A90]/70 text-center">
                    SPOTTER
                </h1>
            </div>

            <div className="p-3">
                <h1 className="text-3xl mb-15 pt-3 font-extrabold text-[#2A6A90]/80 text-center">Detalhes da sala</h1>
            </div>
        </div>
    );
}

export default DetailsHeader;
