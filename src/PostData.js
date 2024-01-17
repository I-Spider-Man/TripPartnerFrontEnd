import axios from "axios";


export const postEvent=async (event)=>{
    try{
        await axios.post("http://localhost:8080/Admin/events", event).then((response)=>{return response});
    }catch(error){
        console.error("error on event posting :",error);
    }
}

export const postSpot=async (spot)=>{
    try{
        console.log(spot);
        await axios.post("http://localhost:8080/Admin/touristSpot", spot).then((response)=>{return response});
    }catch(error){
        console.error("error on posting spot :", error);
    }
}