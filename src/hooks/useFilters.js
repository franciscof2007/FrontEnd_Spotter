import { useSearchParams } from "react-router-dom";

export function useFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const building = searchParams.get('building_fenix_id') || '';
    const status = searchParams.get('status') || '';
    const freeFrom=searchParams.get('free_from') || '';
    const freeUntil=searchParams.get ('free_until') || '';
    const search =searchParams.get('search') || '';


    const setBuilding = (newBuilding) =>{
        setSearchParams(prev=>{
            if(newBuilding){
                prev.set('building_fenix_id', newBuilding);
            }else{
                prev.delete('building_fenix_id');
            }
            
            return prev;
        });
    }

    const setStatus = (newStatus) =>{
        setSearchParams(prev=>{
            if(newStatus){
                prev.set('status', newStatus);
            }else{
                prev.delete('status');
            }
            
            return prev;
        });
    }

    const setDuration = (from, until) =>{
        setSearchParams(prev=>{
            if(from){
                prev.set('free_from', from);
            }else{
                prev.delete('free_from');
            }
            if(until){
                prev.set('free_until', until);

            }else{
                prev.delete('free_until');
            }
            return prev;
        });

    }

    const setSearch = (newSearch) =>{
        setSearchParams(prev=>{
            const params = new URLSearchParams(prev);
            if(newSearch){
                params.set('search', newSearch);
            }else{
                params.delete('search');
            }
            
            return params;
        });
    }

    const clearFilters=()=>{
        setSearchParams({});
    }

    return{
        building,
        status,
        setBuilding,
        setStatus,
        clearFilters,
        freeFrom,
        freeUntil,
        setDuration,
        search,
        setSearch

    };
}
