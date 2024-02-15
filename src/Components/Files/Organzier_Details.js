import axios from "axios";
import { getUserDetailsById } from "./User_profile_avator";
import { BaseUrl } from "../config/BaseUrl";
export const fetchOrganizerDataById = async(id)=>{
    try{
      const organizer = await axios.get(`${BaseUrl}/Admin/organizers/${id}`)
    .then(async (organizer) => {
      return getUserDetailsById(organizer.data.userId)
        .then((userData) => {
          return {
            ...organizer.data,
            userData: userData
          };
        });
    });
      return organizer;
      
    }catch(error){
      console.log("error while fetching organizer by Id :" + error);
    }
  }

  export const fetchOrganizedGroups=async(userId)=>{
    try{
        const response=await axios.get(`${BaseUrl}/organizer/allGroupsOrganizedByOrganizer/${userId}`);
        const groupWithOrganizerData=await Promise.all(
          response.data.map(async(group)=>{
              const res=await fetchOrganizerDataById(group.organizerId);
              return {
                  ...group,
                  organizerData: res,
              }
          })
      )
      return groupWithOrganizerData;
    }catch(error){
        console.log(error);
        return [];
    }
}