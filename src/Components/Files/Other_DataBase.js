import axios from "axios";

export const forgotPassword=async(userEmail)=>{
    try{
        await axios.post("http://localhost:8080/User/forgotPassword",null,{
            params:{
                userEmail:userEmail
            }
        }).then((response)=>{console.log(response.data)});
    }
    catch(error){
        console.log("error while sending forgotPassword Request : "+error)
    }
}