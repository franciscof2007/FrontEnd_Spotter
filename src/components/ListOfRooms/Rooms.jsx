import { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import { getRooms } from "../../Services/RoomsService";
import { useParams } from "react-router-dom";
import Error from "../Errors/Error";
import NoInternet from "../Errors/NoInternet";
import { useFilters } from "../../hooks/useFilters";
import NoResultsFilters from "../Errors/NoResultsFilters";
import Loading from "../Errors/Loading";


function Rooms(){
    const { campus } = useParams();
    const { building, status, freeFrom, freeUntil, search, clearFilters } = useFilters();
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null); 
    const [rooms, setRooms]= useState([]);
    const withoutConnection = Boolean(error!==null && (error.type ==='offline' || error.type==='timeout'));
    const hadFilters = Boolean(building || status || freeFrom || freeUntil || search);
    
    async function loadRooms() {
        try{
            setIsloading(true);
            setError(null);
            const data = await getRooms(campus, 1, building, status, freeFrom, freeUntil, search);
            setRooms(data.rooms);

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
            
            

    },[campus, building, status, freeFrom, freeUntil, search]);

    if (isloading){
        return(
            <div>
                A procurar salas...
            </div>
        );
    }

    if(withoutConnection){
        return(
            <div>
                <SemInternet onRetry={loadRooms}/>
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
                <SemResultadosFiltros onClear={clearFilters}/>
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
                <hr className="border-black my-4 mt-5"/>
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
        </div>

    );

}

export default Rooms;
