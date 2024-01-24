import './GroupOrganizerForm.css';
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import { postGroup } from '../Files/Group_Details';
const GroupOrganizeForm = ({userId, eventName, spotName, ...props }) => {
  const { onClose, onSubmit, open, ...other } = props;
  const [organizerFrom,setOrganizerFrom]=useState({
    organizer:{
      userId:userId.toString()
    }
  })
  const [groupForm,setGroupForm]=useState({
    groupName:"",
    about:"",
    dateFrom:"",
    dateTo:"",
    eventName:"",
    spotName:"",
    participantsLimit:0
  })
  React.useEffect(() => {
    setOrganizerFrom({
      ...organizerFrom,
      group: groupForm,
    });
  }, [groupForm]);
  console.log(organizerFrom);
  console.log(groupForm);
  React.useEffect(() => {
    if (eventName !== undefined) {
      setGroupForm({
        ...groupForm,
        eventName: eventName,
      });
    } else if (spotName !== undefined) {
      setGroupForm({
        ...groupForm,
        spotName: spotName,
      });
    }
  }, [eventName, spotName]);
  const handleCancel = () => {
    setGroupForm({
      ...groupForm,
      groupName:'',
      about:'',
      dateTo:'',
      dateFrom:'',
      eventName:'',
      spotName:'',
      participantsLimit:0
    })
    onClose();
  };

  const handleOk = async() => {
    try{
      const groupData=await postGroup(organizerFrom);
      onSubmit();
    }catch(error){
      console.log(error)
    }
    
  };
  const radioGroupRef = React.useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



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
      <DialogTitle> <h2>Organize Group</h2></DialogTitle>
      <DialogContent sx={{display:'flex',flexDirection:'column',gap:"12"}}>
          <label>Group Name:</label>
          <input type="text" name='groupName' value={groupForm.groupName} onChange={handleChange} style={{color:'black'}}/>

          <label>Group Description:</label>
          <textarea name='about' value={groupForm.about} onChange={handleChange} style={{color:'black'}}/>

          <label>
                  Start Date:<br></br>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker className='akash1' 
                      value={groupForm.dateFrom}
                      onChange={handleStartDateChange}
                      disablePast
                      format="YYYY-MM-DD"
                      style={{color:'black'}}
                    />
                  </LocalizationProvider>
                </label>
                <label>
                  End Date:<br></br>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker  className='akash1'
                      value={groupForm.dateTo}
                      onChange={handleEndDateChange}
                      format="YYYY-MM-DD"
                      disablePast
                      
                    />
                  </LocalizationProvider>
                </label>


          <label>No. of Participants:</label>
          <input type="number" name='participantsLimit' style={{color:'black'}} value={groupForm.participantsLimit} onChange={handleChange} />
      </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={()=>handleOk()} >Submit</Button>
          <Button variant='outlined' onClick={()=>handleCancel() }>Cancel</Button>
        </DialogActions>

          
    </Dialog>
  );
};

export default GroupOrganizeForm;