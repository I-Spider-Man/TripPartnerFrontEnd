import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupForm.css';

const EditProfilePage = ({ userInfo, setUserInfo, setProfilePhoto, setCoverPhoto, onClose, updateUserInfo, userId }) => {
  const [newName, setNewName] = useState(userInfo.name);
  const [newProfession, setNewProfession] = useState(userInfo.profession);
  const [newGender, setNewGender] = useState(userInfo.gender);
  const [newDateOfBirth, setNewDateOfBirth] = useState(userInfo.dateOfBirth);
  const [newEmail, setNewEmail] = useState(userInfo.email);
  const [newMobileNumber, setNewMobileNumber] = useState(userInfo.mobileNumber);
  const [newLocation, setNewLocation] = useState(userInfo.location);
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);
  const [newCoverPhoto, setNewCoverPhoto] = useState(null);
  const [previewProfilePhoto, setPreviewProfilePhoto] = useState(userInfo.profilePhoto || '');
  const [previewCoverPhoto, setPreviewCoverPhoto] = useState(userInfo.coverPhoto || '');

  const handleClearProfilePhoto = () => {
    // Clear the newProfilePhoto state and reset the preview
    setNewProfilePhoto(null);
    setPreviewProfilePhoto(userInfo.profilePhoto || '');
  };

  const navigate = useNavigate();

  const handleSaveChanges = () => {
    // Update user information
    setUserInfo({
      name: newName,
      profession: newProfession,
      gender: newGender,
      dateOfBirth: newDateOfBirth,
      mobileNumber: newMobileNumber,
      email: newEmail,
      location: newLocation,
      profilePhoto: newProfilePhoto ? URL.createObjectURL(newProfilePhoto) : previewProfilePhoto,
      coverPhoto: newCoverPhoto ? URL.createObjectURL(newCoverPhoto) : previewCoverPhoto,
    });
    updateUserInfo({
      name: newName,
      profession: newProfession,
      gender: newGender,
      dateOfBirth: newDateOfBirth,
      mobileNumber: newMobileNumber,
      email: newEmail,
      location: newLocation,
      profilePhoto: newProfilePhoto ? URL.createObjectURL(newProfilePhoto) : previewProfilePhoto,
      coverPhoto: newCoverPhoto ? URL.createObjectURL(newCoverPhoto) : previewCoverPhoto,
    });

    const formData = new FormData();
    formData.append('name', newName);
    formData.append('profession', newProfession);
    formData.append('gender', newGender);
    formData.append('dateOfBirth', newDateOfBirth);
    formData.append('email', newEmail);
    formData.append('mobileNumber', newMobileNumber);
    formData.append('location', newLocation);
    if (newProfilePhoto) {
      formData.append('profilePhoto', newProfilePhoto);
    }

    if (newCoverPhoto) {
      formData.append('coverPhoto', newCoverPhoto);
    }

    fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData
    })

      .then(response => response.json())
      .then(updatedUser => {
        console.log('User information updated:', updatedUser);
        // Perform any additional frontend updates as needed
      })
      .catch(error => {
        console.error('Error updating user information:', error);
      });


    // Call the setProfilePhoto function to update the state in ProfilePage
    setProfilePhoto(updateUserInfo.profilePhoto);

    // Update profile and cover photos with new URLs
    setProfilePhoto(newProfilePhoto ? URL.createObjectURL(newProfilePhoto) : 'https://example.com/default-profile-photo.jpg');
    setCoverPhoto(newCoverPhoto ? URL.createObjectURL(newCoverPhoto) : 'https://example.com/default-cover-photo.jpg');

    // Implement logic to save changes
    console.log('Changes saved');

    // Close the Edit Profile box
    onClose();

    navigate();
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePhoto(file);
      setPreviewProfilePhoto(URL.createObjectURL(file));
    }
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCoverPhoto(file);
      setPreviewCoverPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="edit-profile-popup">
      <div className="edit-profile-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h1>Edit your profile</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label>Profession:</label>
          <input
            type="text"
            value={newProfession}
            onChange={(e) => setNewProfession(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            value={newGender}
            onChange={(e) => setNewGender(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={newDateOfBirth}
            onChange={(e) => setNewDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            type="tel"
            pattern="[0-9]{10}" required
            value={newMobileNumber}
            onChange={(e) => setNewMobileNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Upload Profile Photo:</label>
          <p>Note: File size should not exceed 1MB</p>
          <p>Format of the file should be 'png', 'jpg' or 'jpeg'</p>
          <input
            type="file"
            id="profilePhotoInput"
            name="profilePhoto"
            onChange={handleProfilePhotoChange}
          />
          {previewProfilePhoto && (
            <div className='flex'>
            <img src={previewProfilePhoto} alt="Profile Preview" style={{ maxWidth: '20%', marginBottom: '15px' }} />
            <button style={{marginLeft: '20px'}} onClick={handleClearProfilePhoto}>Clear Profile Photo</button>
            </div>
          )}
          {/* <input style={{ width: "20%" }} type="submit"></input> */}
        </div>
        {/* <div>
          <label>Upload Cover Photo:</label>
          <p>Note: File size should not exceed 1MB</p>
          <p>Format of the file should be 'png', 'jpg' or 'jpeg'</p>
          <input
            type="file"
            id="coverPhotoInput"
            name="coverPhoto"
            onChange={handleCoverPhotoChange}
          />
          {previewCoverPhoto && (
            <img src={previewCoverPhoto} alt="Cover Preview" style={{ maxWidth: '20%', marginBottom: '15px' }} />
          )}
          <input style={{ width: "20%" }} type="submit"></input>
        </div> */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
        <button onClick={handleSaveChanges} style={{color: 'black', fontWeight: 'bold', width: '35%'}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;