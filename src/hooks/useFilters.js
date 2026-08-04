import { useSearchParams } from "react-router-dom";

export function useFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const building = searchParams.get('building_fenix_id') || '';
    const status = searchParams.get('status') || '';
    const duration =searchParams.get('') || '';

    const setBuilding = (newBuilding) =>{
        setSearchParams(prev=>{
            prev.set('building_fenix_id', newBuilding);
            return prev;
        });
    }

    const setStatus = (newStatus) =>{
        setSearchParams(prev=>{
            prev.set('status', newStatus);
            return prev;
        });
    }
    const setDuration = (newDuration) =>{
        setSearchParams(prev=>{
            prev.set('', newDuration);
            return prev;
        });
    }

    const clearFilters=()=>{
        setSearchParams({});
    }

    return{
        building,
        status,
        duration,
        setBuilding,
        setDuration,
        setStatus,
        clearFilters
    };
}
