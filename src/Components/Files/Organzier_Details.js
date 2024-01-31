import axios from "axios";
export const fetchOrganizerDataById = async(id)=>{
    try{
      const organizer = await axios.get(`http://localhost:8080/Admin/organizers/${id}`)
    .then(async (organizer) => {
      return axios.get(`http://localhost:8080/User/${organizer.data.userId}`)
        .then((userData) => {
          return {
            ...organizer.data,
            userData: userData.data
          };
        });
    });
      return organizer;
      
    }catch(error){
      console.log("error while fetching organizer by Id :" + error);
    }
  }