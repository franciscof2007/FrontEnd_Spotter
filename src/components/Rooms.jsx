import { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import { getRooms } from "../Services/RoomsService";
import { useParams } from "react-router-dom";
import Error from "./Error";
import SemInternet from "./SemInternet";
import { useFilters } from "../hooks/useFilters";
import SemResultadosFiltros from "./SemResultadosFiltros";


function Rooms(){
    const { campus } = useParams();
    const { building, status } = useFilters();
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null); 
    const [rooms, setRooms]= useState([]);

    useEffect(()=>{
        async function loadRooms() {
            try{
                
                const data = await getRooms(campus, 1, building, status);
                setRooms(data.rooms);

            }catch(error){
                setError(error.message);

            }finally{
                setIsloading(false);
            }
        }
        if(campus){
            loadRooms();

        }   
            



    },[campus, building, status]);

    if (isloading){
        return(
            <div>
                A procurar salas...
            </div>
        );
    }

    if (error || rooms.length===0){
        return(
            <div>
                <SemResultadosFiltros/>
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
