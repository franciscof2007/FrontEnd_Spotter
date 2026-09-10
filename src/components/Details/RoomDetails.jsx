import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import RoomLocation from "./RoomLocation";
//import RoomAvailability from "./RoomAvailability";
import RoomEvent from "./RoomEvent";
import { getDetails } from "../../Services/RoomsService";
import Error from "../Errors/Error";
import NoInternet from "../Errors/NoInternet";
import { getRecentReports } from "../../Services/ReportsService";
import RoomsEventList from "./RoomsEventList";


function RoomDetails() {
  const { id, campus } = useParams();
  const [roomInfo, setRoomInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] =useState(true);
  const [reports, setReports] = useState(null);
  const withoutConnection = Boolean(error!==null && (error.type ==='offline' || error.type==='timeout'));

  async function loadData() {
      try {
        setIsloading(true);
        setError(null);
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

  async function loadReports() { 
    try{
      const data = await getRecentReports(id);
      setReports(data.reports || []);
      
    }catch (error){
      console.error("error loading recent reports.", error);
    }
  }

  useEffect(() => {
    loadData();
    loadReports();
  }, [id, campus]);

 if (isloading && !roomInfo) {
  return null;
}

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
    {/*
      <div>
        <RoomAvailability
          availability={roomInfo.availability }
          startTime={FormatTime(roomInfo.availableFrom)}
          endTime={FormatTime(roomInfo.availableUntil)}
          lastUpdated={FormatTime(roomInfo.updatedAt)}
        />
      </div>
    */}

    <div>
      <RoomsEventList eventos={roomInfo.events} />
    </div>
 </div>
  );
}

export default RoomDetails;