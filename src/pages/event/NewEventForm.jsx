import React, { useState } from 'react';
import './NewEventForm.scss';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { postEvent } from '../../PostData';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, styled } from '@mui/material';
const NewEventForm = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  const [eventPicture,setEventPicture]=useState(null);
  const [privewURL,setPreviewURL]=useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData=new FormData();
    if(eventPicture){
      formData.append('eventPicture',eventPicture);
      if(!Object.values(eventData).some(value=>!value)){
        formData.append('newEvent',JSON.stringify(eventData));
      }else{
        return alert("enter all event details");
      }
    }else{
      return alert("provide event image");
    }
    try {
      const response=await postEvent(formData);
      if(response.status===200){
        alert(response.data);
        window.location.reload();
      }
      else{
        alert(response.data);
        return null;
      }
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
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const handlePicture=(e)=>{
    const file=e.target.files[0]
    if((Math.floor(file.size/1024))<500){
      setEventPicture(file);
      if(file){
        const fileRead=new FileReader();
        fileRead.onloadend=()=>{
          setPreviewURL(fileRead.result)
        }
        fileRead.readAsDataURL(file);
      }
      else{
        setPreviewURL(null);
      }
    }else{
      alert("picture size needs to be less then 500kb");
    }
  }
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
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                  Upload file
                  <VisuallyHiddenInput type="file" onChange={handlePicture}/>
                </Button>
                {privewURL && (<><img src={privewURL} alt='preview' style={{width:"100%",height:"300px"}}/></>)}
                <button className='aa' type="submit">Create Event</button>
            </form>
    </div>
    </div>
    </div>
  );
};

export default NewEventForm;