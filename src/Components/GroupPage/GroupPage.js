// GroupPage.js
import React, { useState } from 'react';
// Correct import statement
import ParticipantList from './ParticipantList';
import './GroupPage.css';

import { Organizer, participants } from './OrganizerData';

const GroupPage = () => {

  return (
    <div className='body1'>
        <div className="group-container">
      <div className="header1">
        <h1 className="headerh1">
          <span className="group-icon">👥</span> {Organizer.groupName}
        </h1>
      </div>
      <div className="organizer-info">
        <img src={Organizer.organizerData.userData.userProfile} alt="Organizer Profile" className="profile-pic" />
        <div>
          <h2 className="organizer-text">{Organizer.organizerData.userData.userName}</h2>
        </div>
      </div>
      <div className='date-format'>
        <marquee><p>Date From: {Organizer.dateFrom} Date To: {Organizer.dateTo}</p></marquee>
      </div>
      <div id="participants-list">
        <ParticipantList participants={participants} />
      </div>
    </div>
    </div>
    
  );
};

export default GroupPage;
