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
  export const pictureUrl = (image) => {
    return `data:image/jpeg;base64,${image}`;
  };
 export const fetchOrganizerDetailsById = async (organizerId) => {
    try {
      const response = await axios.get(`http://localhost:8080/Admin/organizers/${organizerId}`);
      return (response.data);
    } catch (error) {
      console.error('Error fetching organizer details:', error);
    }
  };
  export const fetchOrganziersData = async () => {
    try {
        const response = await axios.get("http://localhost:8080/Admin/organizers");
        const organizerWithUserData=await Promise.all(
           response.data.map(async(organizer)=>{
          const response1=await axios.get(`http://localhost:8080/Admin/users/${organizer.userId}`)
          return {
            ...organizer,
            userData:response1.data,
          };
        })
        );
        return organizerWithUserData;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
  };
  