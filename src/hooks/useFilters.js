import { useSearchParams } from "react-router-dom";

export function useFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const building = searchParams.get('building_fenix_id') || '';
    const status = searchParams.get('status') || '';
    const freeFrom=searchParams.get('free_from') || '';
    const freeUntil=searchParams.get ('free_until') || '';
    const search =searchParams.get('search') || '';
    const date = searchParams.get('date') || '';


    const setBuilding = (newBuilding) =>{
        setSearchParams(prev=>{
            const params = new URLSearchParams(prev);
            if(newBuilding){
                params.set('building_fenix_id', newBuilding);
            }else{
                params.delete('building_fenix_id');
            }
            
            return params;
        });
    }

    const setStatus = (newStatus) =>{
        setSearchParams(prev=>{
            const params = new URLSearchParams(prev);
            if(newStatus){
                params.set('status', newStatus);
            }else{
                params.delete('status');
            }
            
            return params;
        });
    }

    const setDuration = (date, from, until) =>{
        setSearchParams(prev=>{
            const params = new URLSearchParams(prev);
            if(date){
                params.set('date', date);
            }else{
                params.delete('date');
            }
            if(from){
                params.set('free_from', from);
            }else{
                params.delete('free_from');
            }
            if(until){
                params.set('free_until', until);

            }else{
                params.delete('free_until');
            }
            return params;
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
        setSearch,
        date

    };
}
