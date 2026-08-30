const STORAGE_KEY = "spotter_device_id";

export function getDeviceId(){
    let deviceId = localStorage.getItem(STORAGE_KEY);
    if(!deviceId){
        deviceId = crypto.randomUUID();
        localStorage.setItem(STORAGE_KEY, deviceId);
    }
    return deviceId;
}