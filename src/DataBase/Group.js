import axios from "axios";
import { fetchOrganizerDataById } from "./Organizer";
import { fetchUserDataById } from "./User";
import { BaseUrl } from "../components/config/BaseUrl";

export const fetchGrpDataById= async(id)=>{
    try{
      const response=await axios.get(`${BaseUrl}/Admin/groups/${id}`);
      const organizerData=await fetchOrganizerDataById(response.data.organizerId);
      return {
        ...response.data,
        organizerData:organizerData
      }
    }catch(error){
      console.log(error);
      return {}
    }
  }
  export const getAllParticipantsByGroupId=async(grpId)=>{
    try{
        const response=await axios.get(`${BaseUrl}/Participant/group/${grpId}`);
        const participantWithUserData=await Promise.all(response.data.map(async(participant)=>{
            const userData=await fetchUserDataById(participant.userId);
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
        const response = await axios.get(`${BaseUrl}/Admin/groups`);
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
            response=await axios.get(`${BaseUrl}/event/group/${eventName}`);
            console.log("renders",response.data)
            
        }else if(spotName){
            console.log("renders")
            response=await axios.get(`${BaseUrl}/spot/group/${spotName}`);
            
        }else{
            response=await axios.get(`${BaseUrl}/Admin/ActiveGroups`);
            
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
        const response = await axios.get(`${BaseUrl}/Admin/ActiveGroups`);
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
        const response = await axios.get(`${BaseUrl}/Admin/InActiveGroups`);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
  };