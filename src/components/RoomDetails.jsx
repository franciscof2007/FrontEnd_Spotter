import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import RoomLocation from "./RoomLocation";
import RoomAvailability from "./RoomAvailability";
import RoomEvent from "./RoomEvent";
import { getRooms, getDetails } from "../Services/RoomsService";
import { FormatTime } from "../Utils/FormatTime";


function RoomDetails() {
  const { id, campus } = useParams();
  const [roomInfo, setRoomInfo] = useState(null);





  useEffect(() => {
    async function loadData() {
      try {
        const roomData = await getDetails(id);
        if (roomData && roomData.room) {
          // Une os dados da sala e eventos no mesmo objeto
          setRoomInfo({
            ...roomData.room,
            events: roomData.events || [],
          });
          return;
        }
      } catch (error) {
        console.warn("getDetails falhou, a tentar getRooms...", error);
      }

      // Fallback usando a lista geral
      try {
        const data = await getRooms(campus);
        const selectedRoom = data.rooms.find(
          (room) => String(room.id) === String(id)
        );
        setRoomInfo(selectedRoom);
      } catch (error) {
        console.error("Erro ao carregar sala:", error);
      }
    }

    loadData();
  }, [id, campus]);

  if (!roomInfo) return <p className="text-center mt-10">A carregar...</p>;

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