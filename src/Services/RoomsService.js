
import api from "./Api";
import testRoomsData from "../../rooms.mock.json";
import testRoomDetailsData from "../../room-details.mock.json"



export async function getRooms(campus, page=1) {
    //try{
      //  const response= await api.get(`/salas`,{
      //      params:{
        //        campus,
          //      page,

            //},
        //});
        const originalData=testRoomsData.results || []


        const formattedRooms = originalData.map((room)=>({
            id:room.fenix_id,
            name:room.name,
            building:room.building_name,
            floor:room.floor,
            campus:room.campus,
            capacity:room.normal_capacity,
            availability:room.status,
            availableFrom:room.available_from,
            availableUntil:room.available_until



        }))
        return{
            //rooms:response.data.results || []
            rooms: formattedRooms,
            page: testRoomsData.page,
            total: testRoomsData.count,
            previousPage: testRoomsData.last_page,
            nextPage: testRoomsData.next_page,

        };
        

   // }catch (error)
    //{
      //  console.error("Error fetching rooms list", error);
        //throw error;
    //}

}

export async function getDetails(id) {
    //try{
     //   const response= await api.get(`/salas`,{
     //       params:{id},
     //   });
    

    //}catch (error)
   // {
      //  console.error("Error fetching room details", error);
     //   throw error;
    //}
    const response=testRoomDetailsData || {};
    const formattedRoom = {
        id:response.fenix_id,
        name:response.name,
        building:response.building_name,
        floor:response.floor,
        campus:response.campus,
        description:response.description,
        capacity:response.normal_capacity,
        availability:response.status,
        availableFrom:response.available_from,
        availableUntil:response.available_until,
        updatedAt:response.last_updated_at


        
    }
    const formattedEvents=response.events.map((event)=>({
        start:event.start_time,
        end:event.end_time,
        type:event.event_type,
        course:event.course_info,
        info:event.info
    }))
    return{
        room:formattedRoom,
        events:formattedEvents,


    };
    

}

