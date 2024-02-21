// ParticipantList.js
import { AccessAlarmOutlined } from '@mui/icons-material';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { useUser } from '../Auth/UserContext';
import { userFollowParticipant, userUnfollowParticipant } from '../Files/Other_DataBase';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router';


const ParticipantList = ({ participants }) => {
  console.log(participants);
  const navigate=useNavigate();
  const {followersData,followingData,blockedData,userDetails,updateUserBlockedList,updateUserFollowersList,updateUserFollowingList}=useUser();
  console.log(followersData,followingData)
    return (

    <div style={{width:'100%'}}>
      <h2>Participants</h2>
      <ul id="participants">
      {participants.map((participant, index) => (
        <li key={index}>
          <div className="participant-info">
            <div className="profile-pic">
              <Avatar
                src={participant.userData.userProfile}
                alt="Profile Pic"
                width="40" // Adjust the width as needed
                height="40" // Adjust the height as needed
              />
            </div>  
          <span className="participant-name">{participant.userData.userName}</span>
          <br />
             {!(userDetails.userId==participant.userId) &&  <button className="button-85" onClick={() => navigate(`/profileFollow/${participant.userId}`)}>
            View More
          </button>}
          
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ParticipantList;
