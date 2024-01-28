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