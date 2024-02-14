import axios from "axios";

export const fetchEventsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/events");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};
  
export const fetchActiveEventsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/ActiveEvents");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};

export const fetchInavtiveEventsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Admin/inActiveEvents");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
};
export const pictureUrl = (image) => {
    return `data:image/jpeg;base64,${image}`;
  };
  


export const fetchEventDataByEventId=async(eventId)=>{
    try{
      const response=await axios.get(`http://localhost:8080/activeEvents/${eventId}`);
      const response1=await axios.get(`http://localhost:8080/event/pictureList/${eventId}`);
      console.log(response1.data);
      const imageList=response1.data.map(image=>{
        return pictureUrl(image);
      })
      const event={
        ...response.data,
        eventPictureList:imageList,
      }
      console.log(event);
      return event;
    }catch(error){
      return console.log(error);
    }
  }