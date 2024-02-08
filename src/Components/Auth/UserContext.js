import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
 
const UserContext = createContext();
 
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(() => {
    // Load user details from localStorage on initial render
    const storedUserDetails = localStorage.getItem('userDetails');
    return storedUserDetails ? JSON.parse(storedUserDetails) : null;
  });
 const [organizerData,setOrganizerData]=useState(()=>{
  const storedOrganizerDetails=localStorage.getItem('organizerDetails');
  return storedOrganizerDetails ? JSON.parse(storedOrganizerDetails) : null;
 })
 const [participantData,setParticipantData]=useState(()=>{
  const storedParticipantDetails=localStorage.getItem('participantDetails');
  return storedParticipantDetails ? JSON.parse(storedParticipantDetails) : null;
 })
 const updateOrganizerData=async(userData)=>{
  if(userData){
    try{
    const organizer=await axios.get(`http://localhost:8080/User/Organizer/${userData.userId}`);
    localStorage.setItem('organizerDetails',JSON.stringify(organizer.data));
  }
  catch(error){
    console.log(error);
  }
  }
  
 }
 const updateParticipantData=async(userData)=>{
  if (userData) {
    try{
  const participant=await axios.get(`http://localhost:8080/User/Participant/${userData.userId}`);
    localStorage.setItem('participantDetails',JSON.stringify(participant.data));
  }
  catch(error){
    console.log(error);
  }
  }

 }
  const setUserData = async(user) => {
    if(user===null){
      console.log("null need only on logout");
      localStorage.setItem('participantDetails',JSON.stringify(user));
      localStorage.setItem('organizerDetails',JSON.stringify(user));
    }
    localStorage.setItem('userDetails', JSON.stringify(user));
  };
  return (
    <UserContext.Provider value={{ userDetails, organizerData, participantData, setUserData, updateOrganizerData,updateParticipantData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { userDetails,organizerData,participantData, setUserData ,updateOrganizerData,updateParticipantData} = useContext(UserContext);
  const storedUserDetails = localStorage.getItem('userDetails');
  updateOrganizerData(JSON.parse(storedUserDetails));
  console.log(organizerData,participantData,userDetails);
  updateParticipantData(JSON.parse(storedUserDetails));
  useEffect(() => {
   
    if (!userDetails && storedUserDetails) {
      setUserData(JSON.parse(storedUserDetails));
    }
  }, [userDetails, setUserData]);
 
  return { userDetails,organizerData,participantData, setUserData ,updateOrganizerData,updateParticipantData};
};