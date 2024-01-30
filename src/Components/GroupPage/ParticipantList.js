// ParticipantList.js
import React from 'react';


const ParticipantList = ({ participants }) => {
    const handleViewMore = (participant) => {
        console.log(`View More clicked for ${participant}`);
      };
  
  
    return (

    <div>
      <h2>Participants</h2>
      <ul id="participants">
      {participants.map((participant, index) => (
        <li key={index}>
          <div className="participant-info">
            <div className="profile-pic">
              <img
                src="https://tg-stockach.de/wp-content/uploads/2020/12/5f4d0f15338e20133dc69e95_dummy-profile-pic-300x300.png"
                alt="Profile Pic"
                width="40" // Adjust the width as needed
                height="40" // Adjust the height as needed
              />
            </div>  
          <span className="participant-name">{participant}</span>
          <br />
             
          <button className="button-85" onClick={() => handleViewMore(participant)}>
            View More
          </button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ParticipantList;
