// GroupPage.js
import React, { useEffect, useState } from 'react';
import './GroupPage.css';
import { useParams } from 'react-router-dom';
import { getAllParticipantsById, getGroupById } from '../Files/Group_Details';
import { fetchOrganizerDataById } from '../Files/Organzier_Details';
import { participantJoining } from '../Files/Participant_Details';
import { useUser } from '../Auth/UserContext';
import ParticipantList from './ParticipantList';
import { LoadingButton } from '@mui/lab';
import { CircularProgress } from '@mui/material';
import ChatBox from './ChatBox';

const GroupPage = () => {
  const {organizerData,participantData,userDetails}=useUser();
const [groupDetails,setGroupDetails]=useState(null);
const [organizer,setOrganizer]=useState(null);
const [participants,setParticipants]=useState(null);
const {groupId}=useParams();
const [joinDetails,setjoinDetails]=React.useState({})
const [joining,setJoining]=useState(false);
console.log(organizerData,groupId);
console.log(organizerData.groupId===groupId);
const isOrganizer = organizerData.groupId == groupId;
const isParticipant = participantData.groupId == groupId;
console.log(userDetails,participantData,organizerData);
const Participation=async()=>{
  try{
    setJoining(true);
    console.log("detail",joinDetails);
    const response=await participantJoining(joinDetails);
    window.location.reload();
  }
  catch(error){
    console.log(error);
  }
}
useEffect(()=>{
  console.log("renders");
  const fetchData=async()=>{
    console.log("fetch")
    try{
          const response=await getGroupById(groupId);
          console.log(response);
          setGroupDetails(response);
    }catch(error){
      console.log(error);
    }
  }
  fetchData();
},[groupId])
useEffect(()=>{
  const fetchOrganizer=async()=>{
    try{
      const response=await fetchOrganizerDataById(groupDetails.organizerId);
      setOrganizer(response);
    }catch(error){
      console.log(error);
    }
  }
  fetchOrganizer();
},[groupDetails]);
useEffect(()=>{
  const fetchParticipant=async()=>{
    try{
      const response=await getAllParticipantsById(groupDetails.groupId);
      setParticipants(response);
    }catch(error){
      console.log(error);
    }
  }
  fetchParticipant();
},[groupDetails]);
console.log(groupDetails,participants,organizer);
useEffect(()=>{
  if((!organizerData && !participantData) || (organizerData.groupId !== groupId && participantData.groupId !== groupId)){
    setjoinDetails({
    ...joinDetails,
    userId:userDetails.userId,
    groupId:groupId
  });
  }
},[]);

const handleJoinClick = async() => {
  Participation();
};
const handleLeaveClick = () => {
  alert('Leave button clicked!');
  // Add your leave logic here
};


  return (
    groupDetails && participants && organizer && (
    <div className='body1' >
        <div className="group-container">
      <div className="header1">
        <h1 className="headerh1">
          <span className="group-icon">👥</span> {groupDetails.groupName}
        </h1>
        {(isParticipant && !isOrganizer) && (
              <div className='button-32'>
                <button onClick={handleLeaveClick}>Leave</button>
              </div>
            ) }
      {
           (!isOrganizer && !isParticipant)  && (
                <div className='button-32'>
                    <button onClick={handleJoinClick}><LoadingButton variant='none' loading={joining} loadingIndicator={<CircularProgress sx={{color:'white'}}/>}>Join</LoadingButton></button>
                </div>
            )
        }
      </div>
      <div className="organizer-info">
        <img src={organizer.userData.userProfile} alt="Organizer Profile" className="profile-pic" />
        <div>
          <h2 className="organizer-text">{organizer.userData.userName}</h2>
        </div>
      </div>
      <div className='date-format'>
        <marquee><p>Date From: {groupDetails.dateFrom} Date To: {groupDetails.dateTo}</p></marquee>
      </div>
      <div id="participants-list">
        {participants.length > 0 ? <ParticipantList participants={participants} />:(<>no participants</>)}
      </div>
    </div>
    <div className='chat-system'>
      <ChatBox group={groupDetails} organizer={organizer}/>
    </div>
    </div>
  )
  );
};

export default GroupPage;
