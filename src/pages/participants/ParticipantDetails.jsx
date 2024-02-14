import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './ParticipantDetail.scss';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchParticipantDetailsById, fetchParticipatedGroups } from '../../DataBase/Participant';
const ParticipantDetail = () => {
  const { participantId } = useParams();
  const [participantDetails, setParticipantDetails] = useState({});
  const [participantHistory,setParticipantHistory]=useState([]);
  useEffect(async() => {
    const data=await fetchParticipantDetailsById(participantId);
    setParticipantDetails(data);
    const history=await fetchParticipatedGroups(data.userId);
    setParticipantHistory(history);
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
          <div className="bottom">
          <h1 className="title">Events List</h1>
          <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Group ID</TableCell>
            <TableCell className="tableCell">Active Events</TableCell>
            <TableCell className="tableCell">Organizer</TableCell>
            <TableCell className="tableCell">Till Date</TableCell>
            <TableCell className="tableCell">No. Of Participants</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participantHistory.length > 0 ? <>{participantHistory?.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.groupId}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.groupName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.organizerData.userData.userName}</TableCell>
              <TableCell className="tableCell">{row.dateTo}</TableCell>
              <TableCell className="tableCell">{row.participantsLimit}</TableCell>
              {/* <TableCell className="tableCell">{row.method}</TableCell> */}
              <TableCell className="tableCell">
                <span className={`status ${row.groupStatus}`}>{row.groupStatus}</span>
              </TableCell>
            </TableRow>
          ))}</> :(
            <TableRow><TableCell>NO ACTIVE GROUPS</TableCell></TableRow>
          )
        }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDetail;
