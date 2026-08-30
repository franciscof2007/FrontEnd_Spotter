export function formattedReport(data){

    return {
        id: data.id,
        roomId: data.room_fenix_id,
        occupancy: data.occupancy,
        noise: data.noise,
        plugs: data.plugs,
        createdAt: data.created_at,
        expiresAt: data.expires_at,
    };
}

export function formattedReportResponse(data){
    const originalData=data.results || [];
    
    const formattedReports = originalData.map((report) => 
    formattedReport(report));

    return{
        reports: formattedReport,
        total:data.count
    };

}