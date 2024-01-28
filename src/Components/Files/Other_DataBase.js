import axios from "axios";
import { useState } from "react";

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