import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './ParticipantDetail.scss';
import axiosInstance from '../login/axiosinstance';

const ParticipantDetail = () => {
  const { participantId } = useParams();
  const [participantDetails, setParticipantDetails] = useState({});

  useEffect(() => {
    const fetchParticipantDetails = async () => {
      try {
        const response = await axiosInstance.get(`/Admin/participants/${participantId}`);
        setParticipantDetails(response.data);
      } catch (error) {
        console.error('Error fetching participant details:', error);
      }
    };

    fetchParticipantDetails();
  }, [participantId]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <div className="participant-details-content">
          <h2>Participant Details</h2>
          <div className="participant-info">
            <p>
              <strong>Participant ID:</strong> {participantDetails.participantId}
            </p>
            <p>
              <strong>User ID:</strong> {participantDetails.userId}
            </p>
            <p>
              <strong>User Name:</strong> {participantDetails.userData?.userName}
            </p>
            <p>
              <strong>Participated Count:</strong> {participantDetails.participationCount}
            </p>
            <p>
              <strong>Status:</strong> {participantDetails.participantStatus}
            </p>
            {/* Add more fields as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDetail;
