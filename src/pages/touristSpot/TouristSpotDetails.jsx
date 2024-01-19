// TouristSpotDetails.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './TouristSpotDetails.scss';

const TouristSpotDetails = () => {
  const { spotId } = useParams();
  const [spotDetails, setSpotDetails] = useState({});

  useEffect(() => {
    const fetchSpotDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Admin/touristSpots/${spotId}`);
        setSpotDetails(response.data);
      } catch (error) {
        console.error('Error fetching tourist spot details:', error);
      }
    };

    fetchSpotDetails();
  }, [spotId]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <div className="spot-details-content">
          <h2>Tourist Spot Details</h2>
          <div className="spot-info">
            <img src={spotDetails.spotUrl} alt="Tourist Spot" className="spot-image" />
            <div className="spot-text">
              <p><strong>Spot ID:</strong> {spotDetails.spotId}</p>
              <p><strong>Spot Name:</strong> {spotDetails.spotName}</p>
              <p><strong>Location:</strong> {spotDetails.location}</p>
              <p><strong>Description:</strong> {spotDetails.description}</p>
              <p><strong>People Count:</strong> {spotDetails.peopleCount}</p>
              {/* Add more fields as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
