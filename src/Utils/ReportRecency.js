export function getReportRecency(createdAt, expiresAt) {
    if (!createdAt){
        return{
            minutesAgo:null,
            isExpired:true,
            label:"Sem informação recente",
        };
    }
    const create = new Date(createdAt);

    const now = new Date();
    const differenceMs = now - create;
    const minutesAgo = Math.floor(differenceMs/60000);
    const expire = new Date(expiresAt);

    if (now >= expire){
        return{
            minutesAgo:null,
            isExpired:true,
            label:"Sem informação recente",
        };
    }else{
        return{

            minutesAgo:minutesAgo,
            isExpired:false,
            label:`Reportado há ${minutesAgo} minutos.`,
        
        };
    }


}