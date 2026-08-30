import api from "./Api";
import { getDeviceId } from  "../Utils/DeviceId";
import {formattedReport, formattedReportResponse} from "../Utils/FormatReport";


export async function createReport(fenixId, {occupancy, noise, plugs}) {
    try{
        const deviceId = getDeviceId();
        const response = await api.post(`rooms/${fenixId}/reports/`,{
        occupancy:occupancy || undefined,
        noise:noise || undefined,
        plugs: plugs || undefined,
        device_id:deviceId,
        });
        return formattedReport(response.data);


    }catch (error){
        console.error("erro creating a report.");
        throw error;
    }

}

export async function getRecentReports(fenixId) {
    try{
        const response = await api.get(`rooms/${fenixId}/reports/`);
        return formattedReportResponse(response.data);
    }
    catch (error){
        console.error("error getting the recent reports.");
        throw error;
    }
}



