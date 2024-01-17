import axios from "axios";

export const spotDelete = async (id) => {

      try {
        await axios.delete(`http://localhost:8080/Admin/touristSpots/${id}`);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    
  };

  export const eventDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:8080/Admin/events/${id}`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  
};
  export const userDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:8080/Admin/users/${id}`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  
};
  export const organizerDelete =async (organizerId)=>{
    try{
      await axios.delete(`http://localhost:8080/Admin/organizers/${organizerId}`);
    }catch(error){
      console.error("Error occured while deleting organizer" + error);
    }
  }

  export const groupDelete =async(groupId)=>{
    try{
      await axios.delete(`http://localhost:8080/Admin/groups/${groupId}`)
    }catch(error){
      console.error("error on deleteing Group :",error);
    }
  }