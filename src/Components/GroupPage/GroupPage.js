// GroupPage.js
import React, { useEffect, useState } from 'react';
// Correct import statement
import ParticipantList from './ParticipantList';
import './GroupPage.css';

import { Organizer, participants } from './OrganizerData';
import { useParams } from 'react-router-dom';
import { getAllParticipantsById, getGroupById } from '../Files/Group_Details';
import { fetchOrganizerDataById } from '../Files/Organzier_Details';

const GroupPage = () => {
const [groupDetails,setGroupDetails]=useState({});
const [organizerData,setOrganizerData]=useState({});
const [participantData,setParticipantData]=useState([]);
const {groupId}=useParams();
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
      setOrganizerData(response);
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
      setParticipantData(response);
    }catch(error){
      console.log(error);
    }
  }
  fetchParticipant();
},[groupDetails]);
console.log(groupDetails,participantData,organizerData);
  return (
    <div className='body1'>
        <div className="group-container">
      <div className="header1">
        <h1 className="headerh1">
          <span className="group-icon">👥</span> {groupDetails.groupName}
        </h1>
      </div>
      <div className="organizer-info">
        <img src={organizerData.userData.userProfile} alt="Organizer Profile" className="profile-pic" />
        <div>
          <h2 className="organizer-text">{organizerData.userData.userName}</h2>
        </div>
      </div>
      <div className='date-format'>
        <marquee><p>Date From: {groupDetails.dateFrom} Date To: {groupDetails.dateTo}</p></marquee>
      </div>
      <div id="participants-list">
        <ParticipantList participants={participantData} />
      </div>
    </div>
    </div>
    
  );
};

export default GroupPage;
