// GroupDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './GroupDetails.scss';
import { fetchGrpDataById, getAllParticipantsByGroupId } from '../../DataBase/Group';

const GroupDetails = () => {
  const { groupId } = useParams();
  const [groupDetails, setGroupDetails] = useState({});
  const [participantData,setParticipantData]=useState([]);
  useEffect(async() => {  
    const data=await fetchGrpDataById(groupId);
    const participants=await getAllParticipantsByGroupId(groupId);
    setParticipantData(participants);
    setGroupDetails(data);
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <div className="group-details-content">
          <h2>Group Details</h2>
          <div className="group-info">
            <p>
              <strong>Group ID:</strong> {groupDetails.groupId}
            </p>
            <p>
              <strong>Group Name:</strong> {groupDetails.groupName}
            </p>
            <p>
              <strong>Date From:</strong> {groupDetails.dateFrom}
            </p>
            <p>
              <strong>Date To:</strong> {groupDetails.dateTo}
            </p>
            <p>
              <strong>Organizer ID:</strong> {groupDetails.organizerId}
            </p>
            <p>
              <strong>Organizer Name:</strong> {groupDetails.organizerData?.userData?.userName}
            </p>
            <p>
              <strong>Event Name:</strong> {groupDetails.eventName}
            </p>
            <p>
              <strong>Spot Name:</strong> {groupDetails.spotName}
            </p>
            <p>
              <strong>About:</strong> {groupDetails.about}
            </p>
            <p>
              <strong>Group Status:</strong> {groupDetails.groupStatus}
            </p>
            <p>
              <strong>Participants Limit:</strong> {groupDetails.participantsLimit}
            </p>
            <p>
              <strong>Participants Count:</strong> {groupDetails.participantsCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
