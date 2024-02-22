import axios from "axios"
import { BaseUrl } from "../components/config/BaseUrl"
import { fetchUserDataById } from "./User";
import { message } from "antd";

export const fetchFeedBacks=async()=>{
    try{
        const response=await axios.get(`${BaseUrl}/Admin/AdminFeedBack`);
        const responseWithUserData=await Promise.all(
            response.data.map(async(feedback)=>{
                const userData=await fetchUserDataById(feedback.userId);
                return {
                    ...feedback,
                    userData:userData,
                }
            })
        )
        return responseWithUserData;
    }catch(error){
        console.log(error);
    }
}

export const postFeedBackReply=async(feedBack,reply)=>{
    try{
        const response=await axios.post(`${BaseUrl}/Admin/postReplyAdminFeedBack`,{...feedBack,adminReply:reply});
        message.success(response.data);
    }catch(error){
        console.log(error);
    }
}

export const deleteFeedBack=async(id)=>{
    try{
        const response=await axios.delete(`${BaseUrl}/Admin/AdminFeedBack/${id}`);
        message.success(response.data);
    }catch(error){
        console.log(error);
    }
}