import { useState } from "react";

function RoomsReports({reports}){
    function getOccupancyText(occupancy){
        switch(occupancy){
            case "MANY_FREE_TABLES":
                return "Muitas mesas livres";
            case "SOME_FREE_TABLES":
                return "Algumas mesas livres";
            case "SINGLE_FREE_SEATS":
                return "Alguns lugares livres";
            case "ALMOST_FULL":
                return "Quase cheio";
            case "FULL":
                return "Cheio";
            case "UNAVAILABLE":
                return "Indisponível";
        }
    }
    const [showAllReports, setShowAllReports] = useState(false);
    const reportsList = reports || [];
    const visibleReports = showAllReports ? reportsList : reportsList.slice(0,2)
    const hasMoreReports = reportsList.length > 2;




    return(
    <div>
        <div className="mt-6 flex gap-4 items-start">
            <svg 
            width="30" 
            height="30" 
            viewBox="0 0 30 30" 
            fill="none" 
            className="ml-12 mt-1"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 16.25V13.75H27.5V16.25H22.5ZM24 25L20 22L21.5 20L25.5 23L24 25ZM21.5 10L20 8L24 5L25.5 7L21.5 10ZM6.25 23.75V18.75H5C4.3125 18.75 3.72396 18.5052 3.23438 18.0156C2.74479 17.526 2.5 16.9375 2.5 16.25V13.75C2.5 13.0625 2.74479 12.474 3.23438 11.9844C3.72396 11.4948 4.3125 11.25 5 11.25H10L16.25 7.5V22.5L10 18.75H8.75V23.75H6.25ZM13.75 18.0625V11.9375L10.6875 13.75H5V16.25H10.6875L13.75 18.0625ZM17.5 19.1875V10.8125C18.0625 11.3125 18.5156 11.9219 18.8594 12.6406C19.2031 13.3594 19.375 14.1458 19.375 15C19.375 15.8542 19.2031 16.6406 18.8594 17.3594C18.5156 18.0781 18.0625 18.6875 17.5 19.1875Z" 
            fill="#2A6A90"
            />
            </svg>

            <div className="flex flex-col">
                <div className="text-xl text-[#2A6A90] font-bold">
                    Reports:
                </div>

                <p className="text-gray-400 text-sm">
                    Atualizado às 17:26
                </p>
            </div>
        </div>

        <div className="ml-20 mr-12 flex flex-col gap-6 mt-5 mb-8">
            {visibleReports.map((report)=>(
                <div key={report.id}>
                    <p className="">
                        {getOccupancyText(report.occupancy)}
                    </p>
                    <p className="text-sm text-gray-400">
                        por utilizador há 3 minutos
                    </p>
                </div>
            ))}
        </div>

        {hasMoreReports && (
            <div className="flex flex-col items-center w-full mb-8">
                <button
                    onClick={()=> setShowAllReports(!showAllReports)}
                    className="mt-6 w-10/12 py-3 text-center bg-[#EAEAEA] text-[#2A6A90] rounded-xl font-medium">
                    {showAllReports ? "Ver menos ↑" : `ver mais (${reportsList.length}) ↓`}
                </button>
            </div>
        )}
    </div>

    )

}

export default RoomsReports;
