import { useNavigate, useParams } from "react-router-dom";
import EventIcon from "../../assets/alarm.svg?react";

function RoomEvent({start, end, type, info, course}){
    const navigate=useNavigate();

return (
   <div>


      <div className="rounded-xl ml-12 mr-12 mt-6 p-4 bg-[#2A6A9066]/50 text-gray-900">
        {course && (
          <div className="font-bold text-lg text-[#2A6A90] mb-1">
            {course}
          </div>
        )}

        {type && (
          <div className="font-medium text-md text-[#2A6A90] mb-2">
            {type}
          </div>
        )}

        {(start || end) && (
          <div className="font-normal text-sm">
            {start} - {end}
          </div>
        )}

        {info && (
          <div className="text-xs italic mt-2 opacity-80">
            {info}
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomEvent;
