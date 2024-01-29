import axios from "axios";


export const postEvent=async (formData)=>{
    try{
        await axios.post("http://localhost:8080/Admin/events", formData, {headers:{'Content-Type':'multipart/form-data',},}).then((response)=>{
        console.log(response);    
        return response});
    }catch(error){
        console.error("error on event posting :",error);
        return error.response;
    }
}

export const postSpot=async (formData)=>{
    try{
        console.log(formData);
        await axios.post("http://localhost:8080/Admin/touristSpot",formData,{headers:{'Content-Type':'multipart/form-data',},}).then((response)=>{return response});
    }catch(error){
        console.error("error on posting spot :", error);
        return error.response;
    }
}