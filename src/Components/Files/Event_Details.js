import { AssistWalker } from "@mui/icons-material";
import axios from "axios";

export const fetch_Event_Details = async() => {
  try{
    const response=await axios.get("http://localhost:8080/activeEvents");
    const eventwithpicture=await Promise.all(
      response.data.map(async(event)=>{
        const picture=await fetchPicture(event.eventPicture);
        return{
          ...event,
          eventPicture:picture
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
    const picture=await fetchPicture(response.data.eventPicture);
    return {
      ...response.data,
      eventPicture:picture
    };
  }catch(error){
    console.error(error);
    return [];
  }
}
export const fetchPicture=async(PictureName)=>{
  try{
      const response=await axios.get(`http://localhost:8080/Picture/${PictureName}`,{ responseType:'arraybuffer'});
      const blob=new Blob([response.data],{type:response.headers['Content-Type']});
      return (URL.createObjectURL(blob));
  }catch(error){
      return console.log(error);
      return [];
  }
}
export const fetch_popularEvents=async()=>{
  try{
    const response=await axios.get(`http://localhost:8080/PopularEvents`);
    const eventwithpicture=await Promise.all(
      response.data.map(async(event)=>{
        const picture=await fetchPicture(event.eventPicture);
        return{
          ...event,
          eventPicture:picture
        };
      })
    );
    return eventwithpicture;
  }catch(error){
    console.error(error);
    return [];
  }
}