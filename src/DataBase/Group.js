import axios from "axios";
import { fetchOrganizerDataById } from "./Organizer";

export const fetchGrpDataById= async(id)=>{
    try{
      const response=await axios.get(`http://localhost:8080/Admin/groups/${id}`);
      const organizerData=await fetchOrganizerDataById(response.organizerId);
      return {
        ...response,
        organizerData:organizerData
      }
    }catch(error){
      console.log(error);
      return {}
    }
  }
  export const getAllParticipantsByGroupId=async(grpId)=>{
    try{
        const response=await axios.get(`http://localhost:8080/Participant/group/${grpId}`);
        const participantWithUserData=await Promise.all(response.data.map(async(participant)=>{
            const userData=await getUserDetailsById(participant.userId);
            console.log(userData);
            return{
                ...participant,
                userData:userData,
            }
        }));
        return participantWithUserData;
    }catch(error){
        console.log(error);
        return [];
    }
}
  export const fetchGroupsData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Admin/groups");
        const groupWithOrganizerData=await Promise.all(
            response.data.map(async(group)=>{
              const organizerWithUserData=await fetchOrganizerDataById(group.organizerId);
              return {
                ...group,
                organizerData: organizerWithUserData
              };
            })
        )
        return groupWithOrganizerData;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
  };
  export const fetchCorrespondingGroupData=async(eventName,spotName)=>{
    console.log(eventName,spotName);
    let response;
    try{
        if(eventName){
            console.log(eventName);
            response=await axios.get(`http://localhost:8080/event/group/${eventName}`);
            console.log("renders",response.data)
            
        }else if(spotName){
            console.log("renders")
            response=await axios.get(`http://localhost:8080/spot/group/${spotName}`);
            
        }else{
            response=await axios.get("http://localhost:8080/Admin/ActiveGroups");
            
        }
        const groupWithOrganizerData=await Promise.all(
          response.data.map(async(group)=>{
            const organizerWithUserData=await fetchOrganizerDataById(group.organizerId);
            return {
              ...group,
              organizerData: organizerWithUserData
            };
          })
          )
        return groupWithOrganizerData; 
    }catch(error){
        console.log(error);
        return []
    }
  }
  export const pictureUrl = (image) => {
    return `data:image/jpeg;base64,${image}`;
  };
  
  export const fetchActiveGroupsData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Admin/ActiveGroups");
        const groupWithOrganizerData=await Promise.all(
          response.data.map(async(group)=>{
            const organizerWithUserData=await fetchOrganizerDataById(group.organizerId);
            return {
              ...group,
              organizerData: organizerWithUserData
            };
          })
      )
      return groupWithOrganizerData;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
  };
  
  export const fetchInActiveGroupsData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Admin/InActiveGroups");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
  };