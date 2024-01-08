import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useParams } from 'react-router-dom';
import './Event.css';
import EventDetails from '../Files/Event_Details';

function Event() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(EventDetails.find(detail => String(detail.event_id) === String(eventId)));
  const [showOrganizerForm, setShowOrganizerForm] = useState(false);
  const [organizerData, setOrganizerData] = useState({
    event_name: '',
    organizer_id: '',
    event_details: '',
    date_from: '',
    date_to: '',
    participants: 0,
  });
  const [eventList, setEventList] = useState([]); // Added eventList state

  const handleOrganizeClick = () => {
    setShowOrganizerForm(true);
  };

  const handleJoinClick = () => {
    // Implement the logic to fetch the current event list
    // For simplicity, let's assume you have a list of events named 'currentEventList'
    // Replace this with your actual logic to fetch the event list
    const currentEventList = EventDetails.filter((detail) => detail.event_id !== eventId);
    setEventList(currentEventList);
    setShowOrganizerForm(false); // Close the organizer form
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the server
    // Reset form data and close the form
    setEvent({
      ...event,
      organizer_data: { ...organizerData },
    });
    setOrganizerData({
      event_name: '',
      organizer_id: '',
      event_details: '',
      date_from: '',
      date_to: '',
      participants: 0,
    });
    setShowOrganizerForm(false);
  };

  return (
    <div className='home'>
      <div className='nav'><NavBar /></div>
      <div className='event-content'>
        {event ? (
          <>
            <img src={event.event_image} alt={event.image_alt} />
            <label>Event name: <h1>{event.event_name}</h1></label>
            <label>Event happening on: {event.event_happening}</label>
            <label>Event description: {event.event_discription}</label>
            <label>Event address: {event.event_address}</label>
            <div className='join-organize-button'>
              <button onClick={handleJoinClick}>Join</button>
              <button onClick={handleOrganizeClick}>Organize</button>
            </div>
          </>
        ) : (
          <p>No data found</p>
        )}

        {showOrganizerForm && (
          <div className='organizer-form'>
            <h2>Organizer Form</h2>
            <form onSubmit={handleFormSubmit}>
            <div className='form-column'>
                <label>
                  Event Name:
                  <input
                    type='text'
                    value={organizerData.event_name}
                    onChange={(e) => setOrganizerData({ ...organizerData, event_name: e.target.value })}
                  />
                </label>
                <label>
                  Organizer ID:
                  <input
                    type='text'
                    value={organizerData.organizer_id}
                    onChange={(e) => setOrganizerData({ ...organizerData, organizer_id: e.target.value })}
                  />
                </label>
                <label>
                  Event Details:
                  <input
                    type='text'
                    value={organizerData.event_details}
                    onChange={(e) => setOrganizerData({ ...organizerData, event_details: e.target.value })}
                  />
                </label>
              </div>
              <div className='form-column'>
                <label>
                  Date From:
                  <input
                    type='date'
                    value={organizerData.date_from}
                    onChange={(e) => setOrganizerData({ ...organizerData, date_from: e.target.value })}
                  />
                </label>
                <label>
                  Date To:
                  <input
                    type='date'
                    value={organizerData.date_to}
                    onChange={(e) => setOrganizerData({ ...organizerData, date_to: e.target.value })}
                  />
                </label>
                <label>
                  Number of Participants:
                  <input
                    type='number'
                    value={organizerData.participants}
                    onChange={(e) => setOrganizerData({ ...organizerData, participants: parseInt(e.target.value, 10) })}
                  />
                </label>
              </div>
            
          

            </form>
          </div>
        )}

        {eventList.length > 0 && (
          <div className='event-list-popup'>
            <h2>Current Event List</h2>
            <ul>
              {eventList.map((event) => (
                <li key={event.event_id}>
                  <p>Event Name: {event.event_name}</p>
                  <p>Participants: {event.participants}</p>
                  <button>Join Trip</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;
