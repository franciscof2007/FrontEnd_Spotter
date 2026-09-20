import AlmostFull from "../../assets/almost_full.svg?react";
import Chairs from "../../assets/chairs.svg?react";
import FewTables from "../../assets/few_tables.svg?react";
import Full from "../../assets/full.svg?react";
import SomeTables from "../../assets/Some_tables.svg?react";
import Unavailable from "../../assets/Unavailable.svg?react";


function ReportModal({isOpen, onClose}){
    
    if (isOpen){
        return(
            <div className="fixed inset-0 w-full h-full bg-white z-50 p-6 overflow-y-auto flex flex-col items-center">
                
               <div className="w-12 h-1 bg-gray-400 rounded-full mb-15 cursor-pointer"
                    onClick={onClose}
                >
                
                </div>
                <h1 className="text-[#2A6A90] font-bold text-xl text-center mb-10 w-3/4">
                    Como está este espaço para estudar agora?
                </h1>
                
               <div className="flex flex-col gap-6 w-full max-w-sm mt-4">
                    <button className="flex items-center gap-6 w-full text-center">
                        <div className="w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center shrink-0">
                            <SomeTables/>

                        </div>
                        <span className="font-medium text-black text-lg"> 
                            Várias mesas livres
                        </span>
                    </button>
               </div>
               <div className="flex flex-col gap-6 w-full max-w-sm mt-4">
                    <button className="flex items-center gap-6 w-full text-center">
                        <div className="w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center shrink-0">
                            <FewTables/>

                        </div>
                        <span className="font-medium text-black text-lg"> 
                            Algumas mesas livres
                        </span>
                    </button>
               </div>
               <div className="flex flex-col gap-6 w-full max-w-sm mt-4">
                    <button className="flex items-center gap-6 w-full text-center">
                        <div className="w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center shrink-0">
                            <Chairs/>

                        </div>
                        <span className="font-medium text-black text-lg"> 
                            Lugares Soltos Livres
                        </span>
                    </button>
               </div>
               <div className="flex flex-col gap-6 w-full max-w-sm mt-4">
                    <button className="flex items-center gap-6 w-full text-center">
                        <div className="w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center shrink-0">
                            
                                <AlmostFull/>

                        </div>
                        <span className="font-medium text-black text-lg"> 
                            Quase cheio
                        </span>
                    </button>
               </div>
               <div className="flex flex-col gap-6 w-full max-w-sm mt-4">
                    <button className="flex items-center gap-6 w-full text-center">
                        <div className="w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center shrink-0">
                            <Full/>

                        </div>
                        <span className="font-medium text-black text-lg"> 
                            Cheio
                        </span>
                    </button>
               </div>
               <div className="flex flex-col gap-6 w-full max-w-sm mt-4">
                    <button className="flex items-center gap-6 w-full text-center">
                        <div className="w-16 h-16 rounded-full bg-[#EAEAEA] flex justify-center items-center shrink-0">
                            <Unavailable/>

                        </div>
                        <span className="font-medium text-black text-lg"> 
                            Espaço Indisponível
                        </span>
                    </button>
               </div>
                
            </div>
        );
    }

}

export default ReportModal;