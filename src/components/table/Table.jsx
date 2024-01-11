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
  
  const rows = [
    {
      id: 1143155,
      product: "Stand_up Comedy",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Akash",
      date: "10 Feb",
      amount: 10,
      method: "Cash on Delivery",
      status: "Active",
    },
    {
      id: 2235235,
      product: "Candle light",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Alfred",
      date: "02 Nov",
      amount: 20,
      method: "Online Payment",
      status: "Inactive",
    },
    {
      id: 2342353,
      product: "Sing on Fire",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Shivanshu",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Inactive",
    },
    {
      id: 2357741,
      product: "Rock the beat",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "17 June",
      amount: 92,
      method: "Online",
      status: "Active",
    },
    {
      id: 2342355,
      product: "Web develop seminar",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Bhavya",
      date: "1 March",
      amount: 20,
      method: "Online",
      status: "Active",
    },
  ];
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
