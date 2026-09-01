export function formattedRoomsResponse(data){
    const originalData=data.results || [];


    const formattedRooms = originalData.map((room)=>({
        id:room.fenix_id,
        name:room.name,
        building:room.building_name,
        floor:room.floor,
        campus:room.campus,
        availability:room.status,
        availableFrom:room.available_from,
        availableUntil:room.available_until,
        liveOccupancy:room.live_occupancy,
        liveNoise:room.live_noise,
        hasPlugs:room.has_plugs,
        lastReportAt:room.last_report_at,



    }))
    return{
           
        rooms: formattedRooms || [],
        total: data.count,
        previousPage: data.previous,
        nextPage: data.next,

    };
        
}