

export function FormatTime(time){
    if (!time) return '';
    const date = new Date(time);
    return date.toLocaleTimeString('pt-PT',{
        hour:'2-digit',
        minute:'2-digit',
    });
}