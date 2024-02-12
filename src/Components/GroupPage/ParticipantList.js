// ParticipantList.js
import { AccessAlarmOutlined } from '@mui/icons-material';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { useUser } from '../Auth/UserContext';
import { userFollowParticipant, userUnfollowParticipant } from '../Files/Other_DataBase';
import { LoadingButton } from '@mui/lab';


const ParticipantList = ({ participants }) => {
  console.log(participants);
  const {followersData,followingData,blockedData,userDetails}=useUser();
  const [followUnfollowProcess,setFollowUnfollowProcess]=useState(false);
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
      setFollowUnfollowProcess(true);
      await userFollowParticipant(userDetails.userId,participantId);
      window.location.reload();
    }catch(error){
      console.log(error);
    }finally{
      setFollowUnfollowProcess(false);
    }
  }
  const handleUnfollow=async(participantId)=>{
    try{
      setFollowUnfollowProcess(true);
      await userUnfollowParticipant(userDetails.userId,participantId);
      window.location.reload();
    }catch(error){
      console.log(error);
    }finally{
      setFollowUnfollowProcess(false);
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
            <LoadingButton loading={followUnfollowProcess} loadingIndicator={<>Sending Unfollow Request...</>} variant='contained' onClick={()=>handleUnfollow(participant.userId)}>Unfollow</LoadingButton>
            </>):(<>
            <LoadingButton loading={followUnfollowProcess} loadingIndicator={<>Sending Follow Request...</>} variant='contained' onClick={()=>handleFollow(participant.userId)}>Follow</LoadingButton>
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
