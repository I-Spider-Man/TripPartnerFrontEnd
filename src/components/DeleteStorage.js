import axios from "axios";

export const spotDelete = async (id) => {

      try {
        await axios.delete(`http://localhost:8080/Admin/touristSpots/${id}`);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    
  };