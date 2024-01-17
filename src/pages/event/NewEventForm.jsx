import React, { useState } from 'react';
import axios from 'axios';
import './NewEventForm.scss';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { postEvent } from '../../PostData';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
const NewEventForm = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    peopleCount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postEvent(eventData);
      window.location.reload();
    } catch (error) {

      console.error('Error creating event:', error);
    }
  };
  const handleStartDateChange = (newStartDate) => {
    setEventData((prevData) => ({
      ...prevData,
      startDate: dayjs(newStartDate).format('YYYY-MM-DD'), // Assuming you want to store the date as a string in ISO format
    }));
  };
  
  const handleEndDateChange = (newEndDate) => {
    if (dayjs(newEndDate).isBefore(eventData.startDate)) {
      alert("End date should not be before start date.");
      setEventData((prevData)=>(
        
        {
        ...prevData,
        endDate: null
      }))
    } else {
      setEventData((prevData) => ({
        ...prevData,
        endDate: dayjs(newEndDate).format('YYYY-MM-DD'),
      }));
    }
  };
  console.log(eventData);
  return (
    <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
    <div className="newEventForm">
      <h2>Add New Event</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name:
                    <input
                        type="text"
                        name="eventName"
                        value={eventData.eventName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={eventData.location}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                  Start Date:
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={eventData.startDate}
                      onChange={handleStartDateChange}
                      disablePast
                      format="YYYY-MM-DD"
                    />
                  </LocalizationProvider>
                </label>
                <label>
                  End Date:
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={eventData.endDate}
                      onChange={handleEndDateChange}
                      format="YYYY-MM-DD"
                      disablePast
                     
                    />
                  </LocalizationProvider>
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className='aa' type="submit">Create Event</button>
            </form>
            {/* <ToastContainer /> */}
    </div>
    </div>
    </div>
  );
};

export default NewEventForm;