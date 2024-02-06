import axios from "axios";

export const fetchUserData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/Admin/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchUserDataById = async (Id) => {
  try {
    const response = await axios.get(`http://localhost:8080/Admin/users/${Id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


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
export const fetchParticipantsData=async ()=>{
  try{
    const response = await axios.get("http://localhost:8080/Admin/participants");
    const participantWithUserData=await Promise.all(
      response.data.map(async(participant)=>{
        const userdata=await fetchUserDataById(participant.userId);
        return {
          ...participant,
          userData:userdata
        }
      })
    )
    console.log(participantWithUserData);
    const participantWithGroupData=await Promise.all(
      participantWithUserData.map(async(participant)=>{
        const group=await fetchGrpDataById(participant.groupId);
        return {
          ...participant,
          groupData:group
        };
      })
    );
    console.log(participantWithGroupData);
    return participantWithGroupData;
  }catch(error){
    console.log(error);
    return []
  }
}
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

export const fetchTouristSpotsData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/Admin/touristSpots");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const pictureUrl = (image) => {
  return `data:image/jpeg;base64,${image}`;
};

export const fetchSpotDataById = async (spotId) => {
  try {
    const response = await axios.get(`http://localhost:8080/spots/${spotId}`);
    const response1 = await axios.get(`http://localhost:8080/spot/pictureList/${spotId}`);
    console.log(response.data, response1);
    const imageUrlList = response1.data.map(image => {
      console.log(image);
      return pictureUrl(image);
    });
    console.log(imageUrlList);
    return {
      ...response.data,
      spotPictureList:imageUrlList,
    }

  } catch (error) {
    console.error(error);
    return null;
  }
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