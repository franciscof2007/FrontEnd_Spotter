import { useSearchParams } from "react-router-dom";

export function useFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const building = searchParams.get('building_fenix_id') || '';
    const status = searchParams.get('status') || '';
  

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


    const clearFilters=()=>{
        setSearchParams({});
    }

    return{
        building,
        status,
        setBuilding,
        setStatus,
        clearFilters,

    };
}
