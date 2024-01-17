// Event.js
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useParams } from 'react-router-dom';
import './Event.css';
import Event_details from '../Files/Event_Details';
import Footer from '../Footer/Footer';
import OrganizeEventForm from './OrganizerEventForm';
import JoinEventForm from './JoinEventForm';

function Event() {
  const [organizeFormVisible, setOrganizeFormVisible] = useState(false);
  const [joinFormVisible, setJoinFormVisible] = useState(false);
  const { eventId } = useParams();
  const event = Event_details.find((detail) => String(detail.event_id) === String(eventId));
  const backgroundImageStyle = {
    backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kamizzle-15747770+(1)+(1).jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
  };

  const handleOrganizeClick = () => {
    setOrganizeFormVisible(true);
  };

  const handleJoinClick = () => {
    setJoinFormVisible(true);
  };

  const handleOrganizeSubmit = (formData) => {
    console.log('Organize Form Data:', formData);
    setOrganizeFormVisible(false);
  };

  const handleJoinSubmit = (eventName) => {
    console.log('Join Form Data - Event Name:', eventName);
    setJoinFormVisible(false);
  };

  return (
    <div className='front-page' style={backgroundImageStyle}>
      <div className='event-page'>
        <div className='nav-container'>
          <NavBar />
        </div>
        <div
          className='event-content'
          style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: '15%' }}
        >
          {event ? (
            <>
              <img src={event.event_image} alt={event.image_alt} />
              <div className='content-details'>
                <div>
                  <label>
                    Event name: <h1>{event.event_name}</h1>
                  </label>
                  <label>Event happening on: {event.event_happening}</label>
                  <label>Event description: {event.event_discription}</label>
                  <label>Event address: {event.event_address}</label>
                </div>
                <div className='join-organize-button'>
                  <button onClick={handleJoinClick}>Join</button>
                  <button onClick={handleOrganizeClick}>Organize</button>
                </div>
              </div>
            </>
          ) : (
            <p>No data found</p>
          )}
        </div>
        {organizeFormVisible && (
          <OrganizeEventForm onClose={() => setOrganizeFormVisible(false)} onSubmit={handleOrganizeSubmit} />
        )}
        {joinFormVisible && (
          <JoinEventForm onClose={() => setJoinFormVisible(false)} onJoin={handleJoinSubmit} eventDetails={Event_details} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Event;
