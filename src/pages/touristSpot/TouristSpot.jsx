import React, { useEffect, useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { fetchTouristSpotsData } from '../../DataStorage';
import { spotDelete } from '../../components/DeleteStorage';
import { Link } from 'react-router-dom';
function TouristSpot() {
    const [spotRows,setSpotRows]=useState([]);
    useEffect(()=>{
        const fetchSpots=async()=>{
        try{
           const response=await fetchTouristSpotsData();
           const rowsWithId = response.map((spot) => ({
            ...spot,
            id: spot.spotId,
          }));
        setSpotRows(rowsWithId); 
        console.log(spotRows);
        }
        catch(error){
            console.log(error);
        }
    }
    fetchSpots();
    },[])
    
    const eventColumns = [
        { field: "spotId", headerName: "ID", width: 70 },
        {
          field: "spotName",
          headerName: "spot",
          width: 850,
        },
               
      ];

      const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (confirmed) {
          try {
            await spotDelete(id);
            setSpotRows((prevRows) => prevRows.filter((spot) => spot.spotId !== id));
          } catch (error) {
            console.error("Error deleting user:", error);
          }
        }
      };
      const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to={`/spots/${params.row.spotId}`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton" onClick={() => handleDelete(params.row.spotId)}>
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
  return (
    <div>
      <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="datatable">
        <DataGrid
            className="datagrid"
            rows={spotRows}
            columns={eventColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
      </div>
    </div>
    </div>
  )
}

export default TouristSpot
