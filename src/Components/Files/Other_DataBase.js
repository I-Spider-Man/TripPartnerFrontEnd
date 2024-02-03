import axios from "axios";
import { useState } from "react";
import { getUserDetailsById } from "./User_profile_avator";

export const forgotPassword=async(userEmail)=>{
    try{
        await axios.post("http://localhost:8080/User/forgotPassword",null,{
            params:{
                userEmail:userEmail
            }
        }).then((response)=>{console.log(response.data)});
        alert("check your email for new password");
    }
    catch(error){
        console.log("error while sending forgotPassword Request : "+error)
    }
}

export const allSpotTitle=async()=>{
    console.log('renders')
    try{
        const getTitle=await axios.get("http://localhost:8080/spots");
        const title=getTitle.data.map((spot)=>{
            return{
                ...spot,
                Name:spot.spotName,
                id:spot.spotId
            }
        })
        return title;
    }catch(error){
        console.log(error);
        return [];
    }
}
export const getMessagesOfGroupId=async(groupId)=>{
    try{
        const response=await axios.get(`http://localhost:8080/Group/messages/${groupId}`);
        const response1= await Promise.all(response.data.map(async(message)=>{
            const user=await getUserDetailsById(message.userId);
            return {
                ...message,
                userData:user
            }
        }))
        return response1;
    }catch(error){
        console.log(error);
        return [];
    }
}
export const sendingMessage=async(groupId,messageContent)=>{
    try{
        const response=await axios.post(`http://localhost:8080/Group/messages/${groupId}`,messageContent);
    }catch(error){
        console.log(error);
    }
}
export const allEventTitle=async()=>{
    console.log('renders')
    try{
        const getTitle=await axios.get("http://localhost:8080/activeEvents");
        const title=getTitle.data.map((event)=>{
            return{
                ...event,
                Name:event.eventName,
                id:event.eventId
            }
        })
        return title;
    }catch(error){
        console.log(error);
        return [];
    }
}