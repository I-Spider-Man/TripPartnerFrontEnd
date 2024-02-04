// ParticipantList.js
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';


const ParticipantList = ({ participants }) => {
  const [alert,setAlert]=useState(false);
    const handleViewMore = () => {
        setAlert(true);
      };
  const handleClose=()=>{
    setAlert(false);
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
              <Avatar src={participant.userData.userProfile}/>
              <label>User Name: {participant.userData.userName}</label>
              <label>Gender: {participant.userData.gender}</label>
              <label>Age: {participant.userData.dateOfBirth}</label>
              <label>Participated Count: {participant.participationCount}</label>
            </div>
          </DialogContent>
          <DialogActions><Button onClick={()=>{handleClose()}}>Ok</Button></DialogActions>
          </Dialog>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ParticipantList;
