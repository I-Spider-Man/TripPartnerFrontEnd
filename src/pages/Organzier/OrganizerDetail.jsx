import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './OrganizerDetail.scss';

const OrganizerDetail = () => {
  const { organizerId } = useParams();
  const [organizerDetails, setOrganizerDetails] = useState({});

  useEffect(() => {
    const fetchOrganizerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/Admin/organizers/${organizerId}`);
        setOrganizerDetails(response.data);
      } catch (error) {
        console.error('Error fetching organizer details:', error);
      }
    };

    fetchOrganizerDetails();
  }, [organizerId]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <div className="organizer-details-content">
          <h2>Organizer Details</h2>
          <div className="organizer-info">
            <p>
              <strong>Organizer ID:</strong> {organizerDetails.organizerId}
            </p>
            <p>
              <strong>User ID:</strong> {organizerDetails.userId}
            </p>
            <p>
              <strong>User Name:</strong> {organizerDetails.userData?.userName}
            </p>
            <p>
              <strong>Organized Count:</strong> {organizerDetails.organizedCount}
            </p>
            <p>
              <strong>Status:</strong> {organizerDetails.organizerStatus}
            </p>
            {/* Add more fields as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDetail;
