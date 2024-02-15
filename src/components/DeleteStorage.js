import axios from "axios";
import { BaseUrl } from "./config/BaseUrl";

export const spotDelete = async (id) => {

      try {
        const response=await axios.delete(`${BaseUrl}/Admin/touristSpots/${id}`);
        return response;
      } catch (error) {
        console.error("Error deleting user:", error);
        return error.response;
      }
    
  };
export const participantDelete = async (id) =>{
  try{
    const response=await axios.delete(`${BaseUrl}/Admin/participants/${id}`);
    alert(response.data);
  }catch(error){
    console.log(error);
    alert(error.response.data);
  }
}
  export const eventDelete = async (id) => {

    try {
      const response=await axios.delete(`${BaseUrl}/Admin/events/${id}`);
      return response;
    } catch (error) {
      console.error("Error deleting user:", error);
      return error.response;
    }
  
};
  export const userDelete = async (id) => {

    try {
      await axios.delete(`${BaseUrl}/Admin/users/${id}`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  
};
  export const organizerDelete =async (organizerId)=>{
    try{
      await axios.delete(`${BaseUrl}/Admin/organizers/${organizerId}`);
    }catch(error){
      console.error("Error occured while deleting organizer" + error);
    }
  }

  export const groupDelete =async(groupId)=>{
    try{
      await axios.delete(`${BaseUrl}/Admin/groups/${groupId}`)
    }catch(error){
      console.error("error on deleteing Group :",error);
    }
  }