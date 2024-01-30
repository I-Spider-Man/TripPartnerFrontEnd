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
 const updateOrganizerData=async()=>{
    const storedUserData=localStorage.getItem('userDetails');
    const organizer=await axios.get(`http://localhost:8080/User/Organizer/${storedUserData.userId}`);
    console.log(organizer.data);
    localStorage.setItem('organizerDetails',JSON.stringify(organizer.data));
 }
 const updateParticipantData=async()=>{
  const storedUserData=localStorage.getItem('userDetails');
  const participant=await axios.get(`http://localhost:8080/User/Participant/${storedUserData.userId}`);
    console.log(participant.data);
    localStorage.setItem('participantDetails',JSON.stringify(participant.data));

 }
  const setUserData = async(user) => {
    localStorage.setItem('userDetails', JSON.stringify(user));
  };
  return (
    <UserContext.Provider value={{ userDetails, organizerData, participantData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { userDetails,organizerData,participantData, setUserData ,updateOrganizerData,updateParticipantData} = useContext(UserContext);
  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (!userDetails && storedUserDetails) {
      setUserData(JSON.parse(storedUserDetails));
    }
  }, [userDetails, setUserData]);
 
  return { userDetails,organizerData,participantData, setUserData ,updateOrganizerData,updateParticipantData};
};