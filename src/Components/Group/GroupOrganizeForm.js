import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
const GroupOrganizeForm = (props) => {
  const { onClose, onSubmit, open, ...other } = props;
  const [groupForm,setGroupForm]=useState({
    groupName:"",
    about:"",
    dateFrom:"",
    dateTo:"",
    eventName:"",
    spotName:"",
    participantsLimit:0
  })
  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onSubmit();
  };
  const radioGroupRef = React.useRef(null);
  console.log(groupForm);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
console.log("group organize form rendered");


  const handleStartDateChange = (newStartDate) => {
    setGroupForm((prevData) => ({
      ...prevData,
      dateFrom: dayjs(newStartDate).format('YYYY-MM-DD'), // Assuming you want to store the date as a string in ISO format
    }));
  };
  
  const handleEndDateChange = (newEndDate) => {
    if (dayjs(newEndDate).isBefore(groupForm.dateFrom)) {
      alert("End date should not be before start date.");
      setGroupForm((prevData)=>(
        
        {
        ...prevData,
        dateTo: null
      }))
    } else {
      setGroupForm((prevData) => ({
        ...prevData,
        dateTo: dayjs(newEndDate).format('YYYY-MM-DD'),
      }));
    }
  };
  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', minHeight: 435, backgroundColor: '#383838', color:'white', display:'flex', flexDirection:'column', gap:'10px'} }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle> <h2>Organize Event</h2></DialogTitle>
      <DialogContent sx={{display:'flex',flexDirection:'column',gap:"12"}}>
          <label>Group Name:</label>
          <input type="text" name='groupName' value={groupForm.groupName} onChange={handleChange} />

          <label>Group Description:</label>
          <textarea name='about' value={groupForm.about} onChange={handleChange} />

          <label>
                  Start Date:<br></br>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker 
                      value={groupForm.dateFrom}
                      onChange={handleStartDateChange}
                      disablePast
                      format="YYYY-MM-DD"
                    />
                  </LocalizationProvider>
                </label>
                <label>
                  End Date:<br></br>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={groupForm.dateTo}
                      onChange={handleEndDateChange}
                      format="YYYY-MM-DD"
                      disablePast
                    />
                  </LocalizationProvider>
                </label>


          <label>No. of Participants:</label>
          <input type="number" name='participantsLimit' value={groupForm.participantsLimit} onChange={handleChange} />
      </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleOk} >Submit</Button>
          <Button variant='outlined' onClick={handleCancel}>Cancel</Button>
        </DialogActions>

          
    </Dialog>
  );
};

export default GroupOrganizeForm;