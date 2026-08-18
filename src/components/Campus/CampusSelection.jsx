import { useNavigate} from "react-router-dom";
import alamedaImage from "../../assets/imgalameda.png"
import tagusImage from "../../assets/imgtagus.jpg"
import logo from "../../assets/hero.png"



function CampusSelection(){
    const navigate=useNavigate();

    const CampusOption=({name, image}) =>(
        <button
            onClick={()=>navigate(`/${name.toLowerCase()}`)}
            className="group w-full max-w-sm flex flex-col items-start mb-8 cursor-pointer"
        >
            <div className="w-full h-48 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={image} alt={`Campus ${name}`} className="w-full h-full object-cover" />
            </div>
            <span className="w-full flex font-semibold mt-2 text-2xl pl-3 text-center justify-center text-[#2A6A90]">
                {name}
            </span>
        </button>
    );
    return(
        <div className="flex flex-col items-center pt-16 p-8 min-h-screen">
            <img src={logo} alt="logotipo" className="h-10 w-10"/>
            <h1 className="text-3xl mb-12 mt-5 text-center">
                Qual é o teu Campus?
            </h1>
            <div className="flex flex-col mt-16 gap-4 w-full items-center">
                <CampusOption name="Alameda" image={alamedaImage}/>
                <CampusOption name="TagusPark" image={tagusImage}/>
            </div>

            
        </div>
    );
}

export default CampusSelection;
