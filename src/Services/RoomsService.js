
import api from "./Api";





export async function getRooms(campus, page=1, status, building) {
    
    try{
        const response= await api.get(`rooms/`,{
            params:{
                campus: campus ? campus.toLowerCase() : campus,
                page,
                building_fenix_id:building || undefined,
                status:status || undefined,

            },
        });
        const originalData=response.data.results || [];


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
           
            rooms: formattedRooms || [],
            total: response.data.count,
            previousPage: response.data.previous,
            nextPage: response.data.next,

        };
        

   }catch (error)
    {
        console.error("Error fetching rooms list", error);
        throw error;
    }

}

export async function getDetails(id) {
    try{
        const response= await api.get(`rooms/${id}/`);

        const formattedRoom = {
        id:response.data.fenix_id,
        name:response.data.name,
        building:response.data.building_name,
        floor:response.data.floor,
        campus:response.data.campus,
        description:response.data.description,
        capacity:response.data.normal_capacity,
        availability:response.data.status,
        availableFrom:response.data.available_from,
        availableUntil:response.data.available_until,
        updatedAt:response.data.last_updated_at
        };

        const formattedEvents=response.data.events.map((event)=>({
        start:event.start_time,
        end:event.end_time,
        type:event.event_type,
        course:event.course_info,
        info:event.info
        }));
        return{
            room:formattedRoom,
            events:formattedEvents,

        };

    }catch (error)
    {
        console.error("Error fetching room details", error);
        throw error;
    }
    


        
}



