import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import RoomLocation from "./RoomLocation"
import { getRooms } from "../services/RoomsService";
import RoomAvailability from "./RoomAvailability";
import RoomEvent from "./RoomEvent";

function RoomDetails() {
    const {id, campus} = useParams();
    const [roomInfo, setRoomInfo] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await getRooms(campus);
      // Find the room with the matching ID in the list.
      const selectedRoom = data.rooms.find((room) => String(room.id) === String(id));
      setRoomInfo(selectedRoom);
    }
    loadData();
  }, [id, campus]);

  if (!roomInfo) return <p className="text-center mt-10">A carregar...</p>;
  
return (
  
  
<div>
  <div>
    <DetailsHeader/>
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
        availability={roomInfo.availability}
        lastUpdated={roomInfo.lastUpdated}
      />
  </div>

  <div>
     <RoomEvent
        availability={roomInfo.availability}
        lastUpdated={roomInfo.lastUpdated}
      />
  </div>

</div>
  );
}

export default RoomDetails;
