function TimeToMinutes(time){
    const [hours, minutes] = time.split(":");
    return Number(hours)*60 + Number(minutes);
}