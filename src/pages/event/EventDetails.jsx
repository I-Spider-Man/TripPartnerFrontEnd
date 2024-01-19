import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './EventDetails.scss'; // Create and import the SCSS file for styling

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Admin/events/${eventId}`);
        setEventDetails(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <div className="event-details-content">
          <h2>Event Details</h2>
          <div className="event-info">
            <img src={eventDetails.eventUrl} alt="Event" className="event-image" />
            <div className="event-text">
              <p><strong>Event ID:</strong> {eventDetails.eventId}</p>
              <p><strong>Event Name:</strong> {eventDetails.eventName}</p>
              <p><strong>Location:</strong> {eventDetails.location}</p>
              <p><strong>Start Date:</strong> {eventDetails.startDate}</p>
              <p><strong>End Date:</strong> {eventDetails.endDate}</p>
              <p><strong>Event Status:</strong> {eventDetails.eventStatus}</p>
              <p><strong>People Count:</strong> {eventDetails.peopleCount}</p>
              <p><strong>Description:</strong> {eventDetails.description}</p>
              {/* Add more fields as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
