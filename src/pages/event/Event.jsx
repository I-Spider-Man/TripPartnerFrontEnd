// Eventdatatable.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import './EventData.scss';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { fetchEventsData } from "../../DataStorage";
import { eventDelete } from "../../components/DeleteStorage";
import { Button } from "@mui/material";
import { Flare } from "@mui/icons-material";

const Eventdatatable = () => {
    const [data, setData] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await fetchEventsData();
            setData(response);
            console.log(response);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this event?");
        if (confirmed) {
            try {
                await eventDelete(id);
                setData((prevData)=>prevData.filter((event)=>event.eventId !== id));
            } catch (error) {
                console.error("Error deleting event:", error);
            }
        }
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/event/${params.row.eventId}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.eventId)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    const columns = [
        { field: "eventId", headerName: "Event ID", width: 100 },
        { field: "eventName", headerName: "Event Name", width: 200 },
        { field: "location", headerName: "Location", width: 150 },
        { field: "startDate", headerName: "Start Date", width: 150 },
        { field: "endDate", headerName: "End Date", width: 150 },
        { field: "eventStatus", headerName: "Event Status", width: 150 },
    ];

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="eventdatatable" style={{ height: "500px" }}>
                    <div className="eventdatatableTitle" style={{display:'flex',flexDirection:'row'}}>
                        <Link to="/Event/newEventForm">
                          <Button variant="contained">Add New Event</Button> 
                        </Link>
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={data}
                        columns={columns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                        getRowId={(row) => row.eventId}
                    />
                </div>
            </div>
        </div>
    );
};

export default Eventdatatable;