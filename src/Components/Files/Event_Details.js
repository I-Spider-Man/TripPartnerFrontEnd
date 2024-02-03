import { AssistWalker } from "@mui/icons-material";
import axios from "axios";

export const fetch_Event_Details = async() => {
  try{
    const response=await axios.get("http://localhost:8080/activeEvents");
    const eventwithpicture=await Promise.all(
      response.data.map(async(event)=>{
        const picture=await axios.get(`http://localhost:8080/event/pictureList/${event.eventId}`);
        return{
          ...event,
          eventPictureList:picture.data,
        };
      })
    );
    return eventwithpicture;
  }catch(error){
    console.log(error);
    return [];
  }
}

export const fetch_Event_By_id=async(id)=>{
  try{
    const response=await axios.get(`http://localhost:8080/activeEvents/${id}`)
    const picture=await axios.get(`http://localhost:8080/event/pictureList/${response.data.eventId}`);
    return {
      ...response.data,
      eventPictureList:picture.data,
    };
  }catch(error){
    console.error(error);
    return [];
  }
}
export const fetchEventByEventName=async(eventName)=>{
  try{
    const response=await axios.get(`http://localhost:8080/activeEvent/${eventName}`);
    const picture=await axios.get(`http://localhost:8080/event/pictureList/${response.data.eventId}`);
    const eventWithPicture={
      ...response.data,
      eventPictureList:picture.data
    };
    return eventWithPicture;
  }catch(error){
    console.log(error);
  }
}
export const fetch_popularEvents=async()=>{
  try{
    const response=await axios.get(`http://localhost:8080/PopularEvents`);
    const eventwithpicture=await Promise.all(
      response.data.map(async(event)=>{
        const picture=await axios.get(`http://localhost:8080/event/pictureList/${event.eventId}`);
        return{
          ...event,
          eventPictureList:picture.data
        };
      })
    );
    return eventwithpicture;
  }catch(error){
    console.error(error);
    return [];
  }
}