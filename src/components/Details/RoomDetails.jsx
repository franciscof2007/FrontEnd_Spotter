import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import RoomLocation from "./RoomLocation";
import RoomAvailability from "./RoomAvailability";
import RoomEvent from "./RoomEvent";
import { getRooms, getDetails } from "../../Services/RoomsService";
import { FormatTime } from "../../Utils/FormatTime";
import Loading from "../Errors/Loading";
import Error from "../Errors/Error";
import NoInternet from "../Errors/NoInternet";

function RoomDetails() {
  const { id, campus } = useParams();
  const [roomInfo, setRoomInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] =useState(true);
  const withoutConnection = Boolean(error!==null && (error.type ==='offline' || error.type==='timeout'));


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

  if (isloading) return <p className="text-center mt-10">
    <div>
      <Loading/>
    </div>
    </p>;

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

  const proximoEvento =
    roomInfo.events && roomInfo.events.length > 0
      ? roomInfo.events[0]
      : null;

  
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
        {proximoEvento ? (
          <RoomEvent
            start={FormatTime(proximoEvento.start || proximoEvento.start_time)}
            end={FormatTime(proximoEvento.end || proximoEvento.end_time)}
            type={proximoEvento.type || proximoEvento.event_type}
            course={proximoEvento.course || proximoEvento.course_info}
            info={proximoEvento.info}
          />
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