// OrganizeEventForm.js
import React, { useState } from 'react';
import './GroupOrganizerForm.css'; // Import the CSS file
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const GroupOrganizeForm = ({ onClose, onSubmit }) => {
  const [organizeFormVisible, setOrganizeFormVisible] = useState(true);
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [dateFrom, setDateFrom] = useState(getTodayDate());
  const [dateTo, setDateTo] = useState(getTodayDate());
  const [participantsCount, setParticipantsCount] = useState('');

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
console.log("group organize form rendered");
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      eventName,
      eventDescription,
      dateFrom,
      dateTo,
      participantsCount,
    });
  };

  const handleDateFromChange = e => {
    const selectedDate = e.target.value;
    const today = getTodayDate();

    if (selectedDate >= today) {
      setDateFrom(selectedDate);
    }
  };

  const handleDateToChange = e => {
    const selectedDate = e.target.value;

    if (selectedDate >= dateFrom) {
      setDateTo(selectedDate);
    }
  };

  return (
    <div className={`overlay ${organizeFormVisible ? 'active' : ''}`} onClick={() => setOrganizeFormVisible(false)}>
      <div className={`popup ${organizeFormVisible ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
        <h2>Organize Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Group Name:</label>
          <input type="text" value={eventName} onChange={e => setEventName(e.target.value)} />

          <label>Group Description:</label>
          <textarea value={eventDescription} onChange={e => setEventDescription(e.target.value)} />

          <label>Date From:<br></br>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
    
            <DatePicker disablePast format='YYYY-MM-DD' value={dateFrom} onChange={handleDateFromChange}/>
 
        </LocalizationProvider>         
          </label>
          <label>Date To:<br></br>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker disablePast format='YYYY-MM-DD' value={dateTo} onChange={handleDateToChange}/>
          </LocalizationProvider>            
          </label>


          <label>No. of Participants:</label>
          <input type="number" value={participantsCount} onChange={e => setParticipantsCount(e.target.value)} />

          <button className='aa' type="submit">Submit</button>
          <button className='aa' onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default GroupOrganizeForm;