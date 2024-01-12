import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchActiveGroupsData } from "../../DataStorage";
import { useEffect, useState } from "react";
const List = () => {
  const [activeGrp,setActiveGrp]=useState();
  useEffect(async()=>{
    const response=await fetchActiveGroupsData();
    setActiveGrp(response);
  })
  
   return (
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
          {activeGrp ? <>{activeGrp.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.eventId}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              {/* <TableCell className="tableCell">{row.method}</TableCell> */}
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}</> :
        <span>no data</span>
        }
          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
