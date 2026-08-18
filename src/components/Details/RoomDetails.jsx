import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import RoomLocation from "./RoomLocation";
import RoomAvailability from "./RoomAvailability";
import RoomEvent from "./RoomEvent";
import { getDetails } from "../../Services/RoomsService";
import { FormatTime } from "../../Utils/FormatTime";
import Loading from "../Errors/Loading";
import Error from "../Errors/Error";
import NoInternet from "../Errors/NoInternet";
import {timeToMinutes} from "../../Utils/TimeToMinutes";

function RoomDetails() {
  const { id, campus } = useParams();
  const [roomInfo, setRoomInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] =useState(true);
  const withoutConnection = Boolean(error!==null && (error.type ==='offline' || error.type==='timeout'));
  const now = new Date();
  const currentMinutes = now.getHours() *60 + now.getMinutes()


  async function loadData() {
      try {
        setIsloading(true);
        setError(null)
        const roomData = await getDetails(id);
        if (roomData && roomData.room) {
          
          setRoomInfo({
            ...roomData.room,
            events: roomData.events || [],
          });
          
        }
      } catch (error) {
        setError(error);
      }finally{
        setIsloading(false);
      }
  }

  useEffect(() => {
    loadData();
  }, [id, campus]);

  if (isloading) return <div className="text-center mt-10">
    <div>
      <Loading/>
    </div>
    </div>;

  if(withoutConnection){
    return(
        <div>
            <NoInternet onRetry={loadData}/>
        </div>
    );
  }

  if (error){
    return(
        <div>
            <Error onRetry={loadData}/>
        </div>
    );
  }

  const eventosRestantes = roomInfo.events 
    ? roomInfo.events.filter((event)=>{
      const eventEnd = event.end;
      const eventEndMinutes = timeToMinutes(eventEnd);

      return eventEndMinutes > currentMinutes;
    })
    :[];

  
  return (
    <div>
      <div>
        <DetailsHeader />
      </div>

      <div>
        <RoomLocation
          building={roomInfo.building}
          floor={roomInfo.floor}
          room={roomInfo.name}
          capacity={roomInfo.capacity}
        />
      </div>

      <div>
        <RoomAvailability
          availability={roomInfo.availability }
          startTime={FormatTime(roomInfo.availableFrom)}
          endTime={FormatTime(roomInfo.availableUntil)}
          lastUpdated={FormatTime(roomInfo.updatedAt)}
        />
      </div>

      <div>
        {eventosRestantes.length>0 ? (
          eventosRestantes.map((event)=>(
            <RoomEvent
            key={event.id || event.start}
            start={FormatTime(event.start)}
            end={FormatTime(event.end)}
            type={event.type}
            course={event.course}
            info={event.info}
          />
          ))

        ) : (
          <p className="text-gray-500 italic mt-4 ml-16">
            Sem eventos agendados.
          </p>
        )}
      </div>
    </div>
  );
}

export default RoomDetails;