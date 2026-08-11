import errorIcon from "../../assets/error.svg";
import refreshIcon from "../../assets/refresh.svg";

function SemInternet() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full h-px bg-[#2A6A90] opacity-50 mt-10 mb-6"></div>

      <div className="flex flex-col items-center justify-start min-h-screen pt-4 p-8">
      <h1 className="text-4xl mb-12 mt-10 font-bold text-[#2A6A90] text-center">
        Sem Internet
      </h1>
      
       <svg 
       xmlns="http://www.w3.org/2000/svg" 
       height="80px" 
       viewBox="0 -960 960 960" 
       width="80px" 
       fill="currentColor"
       className="text-[#2A6A90]"
       >
       <path d="M790-56 414-434q-47 11-87.5 33T254-346l-84-86q32-32 69-56t79-42l-90-90q-41 21-76.5 46.5T84-516L0-602q32-32 66.5-57.5T140-708l-84-84 56-56 736 736-58 56Zm-381-93.5Q380-179 380-220q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T480-120q-42 0-71-29.5ZM716-358l-29-29-29-29-144-144q81 8 151.5 41T790-432l-74 74Zm160-158q-77-77-178.5-120.5T480-680q-21 0-40.5 1.5T400-674L298-776q44-12 89.5-18t92.5-6q142 0 265 53t215 145l-84 86Z"/>
       </svg>

      <h1 className="text-xl mb-12 mt-10 text-center">
        Verifique a sua ligação com a internet e tente novamente.
      </h1>
      
      <button 
        type="button" 
        className="bg-[#2A6A9066] rounded-full w-64 h-20  cursor-pointer flex items-center justify-center gap-3 px-4"
      >
        <span className="text-xl font-medium text-[#2A6A90]">
          Tente Novamente
        </span>
         <svg xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 mt-1 text-[#2A6A90]"
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="currentColor">
            <path d="M477-135q-143 0-244-101T132-479.75q0-142.76 101-244.5Q334-826 477-826q91 0 160.39 36.72Q706.79-752.55 757-687v-139h72v291H537v-71h164q-39-56-94-90.5T477-731q-105.25 0-178.12 72.82-72.88 72.83-72.88 178Q226-375 298.88-302q72.89 73 178.15 73 77.97 0 144.47-45T716-393h97q-30 115-123.26 186.5Q596.49-135 477-135Z"/>
            </svg>
      </button>
    </div>
    </div>
  );
}

export default SemInternet;