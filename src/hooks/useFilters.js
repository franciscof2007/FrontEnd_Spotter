import { useSearchParams } from "react-router-dom";

export function useFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const building = searchParams.get('edificio') || '';
    const status = searchParams.get('estado') || '';
    const duration =searchParams.get('duracao') || '';

    const setBuilding = (newBuilding) =>{
        setSearchParams(prev=>{
            prev.set('edificio', newBuilding);
            return prev;
        });
    }

    const setStatus = (newStatus) =>{
        setSearchParams(prev=>{
            prev.set('estado', newStatus);
            return prev;
        });
    }
    const setDuration = (newDuration) =>{
        setSearchParams(prev=>{
            prev.set('duracao', newDuration);
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
