// ParticipantList.js
import { AccessAlarmOutlined } from '@mui/icons-material';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { useUser } from '../Auth/UserContext';
import { userFollowParticipant, userUnfollowParticipant } from '../Files/Other_DataBase';


const ParticipantList = ({ participants }) => {
  console.log(participants);
  const {followersData,followingData,blockedData,userDetails}=useUser();
  console.log(followersData,followingData)
  const [alert,setAlert]=useState(false);
    const handleViewMore = () => {
        setAlert(true);
      };
  const handleClose=()=>{
    setAlert(false);
  }
  const handleFollow=async(participantId)=>{
    try{
      await userFollowParticipant(userDetails.userId,participantId);
      window.location.reload();
    }catch(error){
      console.log(error);
    }
  }
  const handleUnfollow=async(participantId)=>{
    try{
      await userUnfollowParticipant(userDetails.userId,participantId);
      window.location.reload();
    }catch(error){
      console.log(error);
    }
  }
    return (

    <div>
      <h2>Participants</h2>
      <ul id="participants">
      {participants.map((participant, index) => (
        <li key={index}>
          <div className="participant-info">
            <div className="profile-pic">
              <img
                src={participant.userData.userProfile}
                alt="Profile Pic"
                width="40" // Adjust the width as needed
                height="40" // Adjust the height as needed
              />
            </div>  
          <span className="participant-name">{participant.userData.userName}</span>
          <br />
             
          <button className="button-85" onClick={() => handleViewMore()}>
            View More
          </button>
          </div>
          <Dialog open={alert} onClose={()=>setAlert(false)}>
          <DialogTitle>Profile</DialogTitle>
          <DialogContent>
            <div style={{display:'flex',flexDirection:'column',gap:"10px"}}>
              {participant.userData.userProfile ? <Avatar src={participant.userData.userProfile}/>:<AccessAlarmOutlined/>}
              <label>User Name: {participant.userData.userName}</label>
              <label>Gender: {participant.userData.gender}</label>
              <label>Age: {participant.userData.dateOfBirth}</label>
              <label>Participated Count: {participant.participationCount}</label>
            </div>
          </DialogContent>
          <DialogActions>
            {(followingData.includes(participant.userId)) ?(<>
            <Button variant='contained' onClick={()=>handleUnfollow(participant.userId)}>Unfollow</Button>
            </>):(<>
            <Button variant='contained' onClick={()=>handleFollow(participant.userId)}>Follow</Button>
            </>)}
            
            <Button onClick={()=>{handleClose()}}>Ok</Button>
          </DialogActions>
          </Dialog>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ParticipantList;
