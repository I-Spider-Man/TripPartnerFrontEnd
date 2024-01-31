import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupForm.css';
import { useUser } from '../Auth/UserContext';
import { updateUserDetails } from '../Files/User_profile_avator';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
const EditProfilePage = ({onClose}) => {
  const {userDetails,setUserData}=useUser();
  console.log(userDetails);
  const userId=userDetails.userId;
  const [updateUser,setUpdateUser]=useState({
    userId:userId,
    userName:userDetails.userName,
    userEmail:userDetails.userEmail,
    aboutUser:userDetails.aboutUser?userDetails.aboutUser:"",
    gender:userDetails.gender?userDetails.gender:"",
    dateOfBirth:userDetails.dateOfBirth?userDetails.dateOfBirth:"",
    userPassword:userDetails.userPassword,
    userProfile:userDetails.userProfile
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const updatedUser = await updateUserDetails(updateUser);
      setUserData(updatedUser);
      onClose()
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDataChange=(dateOfBirth)=>{
    setUpdateUser((pre)=>({
      ...pre,
      dateOfBirth:dayjs(dateOfBirth).format('YYYY-MM-DD')
    }))
  }
  return (
    <div className="edit-profile-popup">
      <div className="edit-profile-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h1>Edit your profile</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name='userName'
            value={updateUser.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name='gender'
            value={updateUser.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker 
                      disableFuture
                      format="YYYY-MM-DD"
                      onChange={handleDataChange}
                      style={{color:'black'}}
                    />
          </LocalizationProvider>
        </div>
        <div>
          <label>Description:</label>
          <textarea name='aboutUser' value={updateUser.aboutUser} onChange={handleChange}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
        <button onClick={()=>handleSubmit()} style={{color: 'black', fontWeight: 'bold', width: '35%'}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;