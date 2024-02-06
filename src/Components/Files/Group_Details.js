import axios from "axios"

export const postGroup=async(value)=>{
    try{
        const response=await axios.post("http://localhost:8080/organizer",value);
        
        if(response.status===201){
            alert("you have created a group successfully")
            return true;
        }
        
    }
    catch(error){
        if(error.response.status===409){
            alert(error.response.data);
        }
        console.log("error while creating group "+error);
        return false;
    }
    
}
export const getAllParticipantsById=async(grpId)=>{
    try{
        const response=await axios.get(`http://localhost:8080/Participant/group/${grpId}`);
        const participantWithUserData=await Promise.all(response.data.map(async(participant)=>{
            const userData=await axios.get(`http://localhost:8080/User/${participant.userId}`);
            return{
                ...participant,
                userData:userData.data,
            }
        }));
        return participantWithUserData;
    }catch(error){
        console.log(error);
        return [];
    }
}
export const getGroupById=async(grpId)=>{
    try{
        const response=await axios.get(`http://localhost:8080/Group/groupId/${grpId}`);
        return response.data;
    }catch(error){
        console.log(error);
        return null
    }
}
export const getGroup=async(eventName,spotName)=>{
    
    try{
        if(eventName){
            
            const response=await axios.get(`http://localhost:8080/event/group/${eventName}`);
            
            return response.data;
        }else if(spotName){
            
            const response=await axios.get(`http://localhost:8080/spot/group/${spotName}`);
            return response.data;
        }else{
            console.log("no values");
            return [];
        }
    }catch(error){
        console.log(error);
        return []
    }
}