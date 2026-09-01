import { useState} from "react";
import { createReport } from "../Services/ReportsService";

export function useCreateReport(params) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    async function submitReport(fenixId, dados) {
        if (isSubmitting){
            return;
        }
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);
        try{
            await createReport(fenixId, dados);
            setSuccess(true);
            
        }catch(error){
            setError(error);
            
        }finally{
            setIsSubmitting(false);
        }




            
    }

    return{
        isSubmitting, 
        error,
        success,
        submitReport,
    };
}