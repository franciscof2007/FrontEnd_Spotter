
import refresh from "../../assets/refresh.svg"
import arrowDropDown from "../../assets/arrow-drop-down.png"
import { useFilters } from "../../hooks/useFilters";


function Filters(){
    const {building, setBuilding, status, setStatus, freeFrom, freeUntil, setDuration, clearFilters} = useFilters();
    
    return(
        <div className="flex px-2 align-baseline items-center justify-center mr-5">


            <svg xmlns="http://www.w3.org/2000/svg" 
            className="w-10 h-7 ml-3 mt-1 text-gray-800"
            onClick={()=>clearFilters()}
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="currentColor">
            <path d="M477-135q-143 0-244-101T132-479.75q0-142.76 101-244.5Q334-826 477-826q91 0 160.39 36.72Q706.79-752.55 757-687v-139h72v291H537v-71h164q-39-56-94-90.5T477-731q-105.25 0-178.12 72.82-72.88 72.83-72.88 178Q226-375 298.88-302q72.89 73 178.15 73 77.97 0 144.47-45T716-393h97q-30 115-123.26 186.5Q596.49-135 477-135Z"/>
            </svg>


            <div className="flex flex-1 gap-3">
                <div className="flex-1 flex items-center justify-between font-semibold rounded px-3 py-1 bg-[#2A6A9066] min-w-0"
                onClick={()=>setBuilding('2448131361042')}
                
                >
                    <span className="truncate">Edifícios</span>
                    <img src={arrowDropDown} alt="seta" className="w-5 h-5 ml-2 shrink-0" />
                </div>
                
                <div className="flex-1 flex items-center justify-between font-semibold rounded px-3 py-1 bg-[#2A6A9066] min-w-0"
                onClick={()=>setStatus('LIVRE_AGORA')}
                >
                    <span className="truncate">Disp.</span>
                    <img src={arrowDropDown} alt="seta" className="w-5 h-5 ml-2 shrink-0" />
                </div>
                
                <div className="flex-1 flex items-center justify-between font-semibold rounded px-3 py-1 bg-[#2A6A9066] min-w-0"
                onClick={()=>setDuration('22:00', '23:00')}
                >
                    <span className="truncate">Duração</span>
                    <img src={arrowDropDown} alt="seta" className="w-5 h-5 ml-2 shrink-0" />
                </div>
           
            </div>

        </div>
    );

}

export default Filters;
