// JoinEventForm.js
import React, { useState } from 'react';
import './JoinEventForm.css';

const JoinEventForm = ({ onClose, onJoin, eventDetails }) => {
  const [joinFormVisible, setJoinFormVisible] = useState(true);

  const handleJoin = (eventName) => {
    onJoin(eventName);
    setJoinFormVisible(false);
  };

  return (
    <div className={`overlay ${joinFormVisible ? 'active' : ''}`} onClick={() => setJoinFormVisible(false)}>
      <div className={`popup ${joinFormVisible ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <h2>Join Event</h2>
        <div className='event-list-popup'>
          {eventDetails.map((event) => (
            <div key={event.event_id} className="event-item">
              <p>Event Name: {event.event_name}</p>
              <button onClick={() => handleJoin(event.event_name)}>Join</button>
            </div>
          ))}
        </div>
        <button className="cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default JoinEventForm;
