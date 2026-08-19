import { useNavigate} from "react-router-dom";
import alamedaImage from "../../assets/imgalameda.png"
import tagusImage from "../../assets/imgtagus.jpg"
import logo from "../../assets/hero.png"



function CampusSelection(){
    const navigate=useNavigate();

    const CampusOption=({name, image}) =>(
        <button
            onClick={()=>navigate(`/${name.toLowerCase()}`)}
            className="group w-full max-w-sm flex flex-col items-start mb-10 cursor-pointer"
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
        <div className="flex flex-col items-center pt-10 p-8 w-screen overflow-hidden justify-between fixed inset-0">
            <h1 className="text-3xl font-extrabold font-serif text-[#2A6A90]/70 text-center">
                SPOTTER
            </h1>
            <div className="flex flex-col items-center w-full mt-6 max-w-sm">
        <h1 className="text-3xl text-center">Qual é o teu Campus?</h1>
            <div className="flex flex-col mt-6 gap-1 w-full items-center">
                <CampusOption name="Alameda" image={alamedaImage}/>
                <CampusOption name="TagusPark" image={tagusImage}/>
            </div>
         </div>
        </div>
    );
}

export default CampusSelection;
