import { useState } from "react";
import refresh from "../../assets/refresh.svg"
import arrowDropDown from "../../assets/arrow-drop-down.png"
import { useFilters } from "../../hooks/useFilters";
import FiltersAvailability from "../Filters/FiltersAvailability"
import FiltersBuilding from "../Filters/FiltersBuilding"
import FiltersTime from "../Filters/FiltersTime"


function Filters(){
    const {clearFilters} = useFilters();
    const [openBuilding, setOpenBuilding] = useState(false);
    const [Time, setTime] = useState(false);
    const [availability, setAvailability] = useState(false);

    return(
        <div className="flex px-1 align-baseline items-center justify-center ml-2">

            <div className="flex flex-1 gap-3">
                <div className="flex-1 flex items-center justify-between font-semibold rounded px-3 py-1 bg-[#2A6A9066] min-w-0 text-xs ml-3 cursor-pointer"
                onClick={()=>setOpenBuilding(true)}
                
                >
                    <span className="truncate">Edifícios</span>
                    <img src={arrowDropDown} alt="seta" className="w-5 h-5 ml-2 shrink-0" />
                </div>
                
                <div className="flex-1 flex items-center justify-between text-xs font-semibold rounded px-3 py-1 bg-[#2A6A9066] min-w-0 cursor-pointer"
                onClick={()=>setAvailability(true)}
                >
                    <span className="truncate">Dispon.</span>
                    <img src={arrowDropDown} alt="seta" className="w-5 h-5 ml-2 shrink-0" />
                </div>
                
                <div className="flex-1 flex items-center text-xs justify-between font-semibold rounded px-3 py-1 bg-[#2A6A9066] min-w-0 cursor-pointer"
                onClick={()=>setTime(true)}
                >
                    <span className="truncate">Horário</span>
                    <img src={arrowDropDown} alt="seta" className="w-5 h-5 ml-2 shrink-0" />
                </div>

                <div className="cursor-pointer">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    onClick={()=>clearFilters()}
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#020202">
                        <path d="m592-481-57-57 143-182H353l-80-80h487q25 0 36 22t-4 42L592-481ZM791-56 560-287v87q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200v-247L56-791l56-57 736 736-57 56ZM535-538Z"/>
                    </svg>
                </div>
           
            </div>

            {openBuilding && <FiltersBuilding onClose={()=>setOpenBuilding(false)}/>}
            {availability && <FiltersAvailability onClose={()=>setAvailability(false)}/>}
            {Time && <FiltersTime onClose={()=>setTime(false)}/>}

        </div>
    );

}

export default Filters;
