import { useState, useEffect, useRef } from "react";
import RoomCard from "./RoomCard";
import { getRooms, getRoomsByUrl } from "../../Services/RoomsService";
import { useParams } from "react-router-dom";
import Error from "../Errors/Error";
import NoInternet from "../Errors/NoInternet";
import { useFilters } from "../../hooks/useFilters";
import NoResultsFilters from "../Errors/NoResultsFilters";
import ShortLoading from "../Errors/ShortLoading";
import { GetTimeNow } from "../../Utils/getTimeNow";
import { FormatTime } from "../../Utils/FormatTime";


function Rooms({refreshKey}){
    const { campus } = useParams();
    const { building, status, freeFrom, freeUntil, search, clearFilters, date } = useFilters();
    const [isloading, setIsloading] = useState(true);
    const [isloadingMore, setIsloadingMore]=useState(false);
    const [error, setError] = useState(null); 
    const [rooms, setRooms]= useState([]);
    const [nextPage, setNextPage]=useState(null);
    const [showTopButton, setShowTopButton] = useState(false);
    const [now, setNow] = useState(GetTimeNow());



    const withoutConnection = Boolean(error!==null && (error.type ==='offline' || error.type==='timeout'));
    const hadFilters = Boolean(building || status || freeFrom || freeUntil || search || date);
    
    const ref = useRef(null);
    

    async function loadRooms() {
        try{
            setIsloading(true);
            setError(null);
            const data = await getRooms(campus, 1, building, status, date, freeFrom, freeUntil, search);
            setRooms(data.rooms);
            setNextPage(data.nextPage);
            setNow(GetTimeNow());

        }catch(error){
            setError(error);

        }finally{
            setIsloading(false);
        }
    }
    
    useEffect(()=>{
        if(campus){
            loadRooms();
        }

    },[campus, building, status, date, freeFrom, freeUntil, search]);


    useEffect(() => {
      if (refreshKey === 0) return;
      loadRooms();
  }, [refreshKey]);  

            
    async function loadMoreRooms(nextPage) {
        if(isloadingMore || !nextPage){
            return;
        }
        setIsloadingMore(true);
        try{
            const data = await getRoomsByUrl(nextPage);
            setRooms(prev=>([...prev,...data.rooms]));
            setNextPage(data.nextPage);

        }catch(error)
        {
            setError(error);
        }finally{
            setIsloadingMore(false);
        }

    }

    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting){
                loadMoreRooms(nextPage);
            }
        });
        if(ref.current){
            observer.observe(ref.current);
        }

        return()=>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
            
        }
    }, [nextPage, isloadingMore])

    useEffect(() => {
    const handleScroll = () => {
        setShowTopButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

    const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

    if (isloading){
        return(
            <div>
                <ShortLoading/>
            </div>
        );
    }

    if(withoutConnection){
        return(
            <div>
                <NoInternet onRetry={loadRooms}/>
            </div>
        );
    }

    if (error){
        return(
            <div>
                <Error onRetry={loadRooms}/>
            </div>
        );
    }
    if(hadFilters && rooms.length===0){
        return(
            <div>
                <NoResultsFilters onClear={clearFilters}/>
            </div>
        );
    }


    if (hadFilters!=true && rooms.length===0){
        return(
            <div>
                <Error onRetry={loadRooms}/>
            </div>
        );
    }



    return(
        <div>
            <div>
                <span className="text-center block text-gray-400 mt-2 text-sm">
                    Atualizado às {FormatTime(now)}.
                </span>
                <hr className="border-[#000000]/10 my-1"/>
            </div>

            <div className="grid grid-cols-1 gap-4 mr-6 ml-6">
                {rooms.map((room,index) =>(
                        <RoomCard
                            key={room.id || index}
                            startTime={room.availableFrom}
                            endTime={room.availableUntil}
                            id={room.id}
                            availability={room.availability}
                            building={room.building}
                            floor={room.floor}
                            room={room.name}

                    />
                ))}
                

            </div>
            <div ref={ref} className="flex justify-center py-6">
            {isloadingMore ? (
                <div className="flex items-center gap-2 text-gray-500">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-200 border-t-[#2A6A90] animate-spin"></div>
                    <span className="text-sm">A carregar mais salas...</span>
                </div>
            ) : !nextPage ? (
                <span className="text-sm text-gray-400">
                    Não existem mais salas.
                </span>
            ) : null}
            </div>

             <button
                onClick={goToTop}
                aria-label="Voltar ao início"
                className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#2A6A90] shadow-lg flex items-center justify-center z-40 transition-all duration-300 ${
                    showTopButton
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="w-6 h-6 fill-white"
                >
                    <path d="M480-880 160-560l56 56 224-223v567h80v-567l224 223 56-56-320-320Z" />
                </svg>
            </button>
        </div>
    );
}

export default Rooms;
