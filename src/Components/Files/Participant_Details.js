import { message } from "antd";
import axios from "axios";
export const participantJoining=async(value)=>{
    try{
        const response=await axios.post("http://localhost:8080/Participant",value);
        if(response.status===200){
            return alert(response.data);
        }
    }catch(error){
        if(error.response.status===409){
            console.log(error)
            return alert(error.response.data);
        }else{
            console.log(error)
            return alert(error.response.data);
        }
    }
}
export const participantLeaving=async(participantId,groupId)=>{
    try{
        const response=await axios.get("http://localhost:8080/Participant/leaveGroupByParticipantId",{params:{
            participantId:participantId,
            groupId:groupId,
        }});
        message.success(response.data);
    }catch(error){
        message.error(error.response.data);
    }
}