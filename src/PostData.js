import axios from "axios";
import { BaseUrl } from "./components/config/BaseUrl";


export const postEvent=async (formData)=>{
    try{
        await axios.post(`${BaseUrl}/Admin/events`, formData, {headers:{'Content-Type':'multipart/form-data',},}).then((response)=>{
        console.log(response); 
        if(response.status===201){
            alert(response.data);
            window.location.reload();
        }   
        return response});
    }catch(error){
        console.error("error on event posting :",error);
        return error.response;
    }
}

export const postSpot=async (formData)=>{
    try{
        await axios.post(`${BaseUrl}/Admin/touristSpot`,formData,{headers:{'Content-Type':'multipart/form-data',},}).then((response)=>{
        console.log(response);
        if(response.status===201){
            alert(response.data);
            window.location.reload();
        }    
        return (response)});
    }catch(error){
        console.error("error on posting spot :", error);
        return error.response;
    }
}