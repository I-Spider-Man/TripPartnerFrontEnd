import React, { useState } from 'react';
import './App.css';
import ProfileEdit from './component/ProfileEdit';

const ProfilePicture = ({ imageUrl }) => (
  <div className="profile-picture">
    <img src={imageUrl} alt="Profile" />
  </div>
);

const UserDetails = ({ name, email, location, age }) => (
  <div className="user-details">
    <h2>{name}</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p> Participation</p>
      <p> Organization</p>
    </div>
    <p>Email: {email}</p>
    <p>Location: {location}</p>
    <p>Age: {age}</p>
  </div>
);

const EditButton = ({ onClick }) => (
  <button className="edit-button" onClick={onClick} style={{ marginRight: '10px' }}>
    Edit Profile
  </button>
);


const EditProfileDialog = ({ isOpen, onClose }) => (
  <div className={`edit-dialog ${isOpen ? 'open' : 'closed'}`}>
    
    <ProfileEdit onClose={onClose} />
  </div>
);

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const openForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormData({
      name: '',
      email: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    closeForm();
  };

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'City, Country',
    age: 25,
    imageUrl: 'https://th.bing.com/th/id/OIP.8sEQq9-fsOY0T-R-vYtVqgHaIB?rs=1&pid=ImgDetMain',
  });
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);

  const openEditDialog = () => {
    setEditDialogOpen(!isEditDialogOpen);
  };

  const closeEditDialog = () => {
    setEditDialogOpen(false);
  };

  const updateProfile = (editedProfile) => {
    console.log('Updating profile:', editedProfile);
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...editedProfile,
    }));
    closeEditDialog();
  };
  const LogoutButton = ({ onLogout }) => (
    <button className="logout-button" onClick={onLogout}>
      Logout
    </button>
  );
  const handleLogout = () => {
    alert('You have been logged out of Trip Partner.');
    setProfile({
      name: '',
      email: '',
      location: '',
      age: null,
      imageUrl: '',
    });
    window.location.href = '/login';
  };
  
  
  

  return (
    <div className="App">
      <header>
        <h1>Trip Partner</h1>
      </header>

      <div className="profile-container">
        <ProfilePicture imageUrl={profile.imageUrl} />
        <div>
          <UserDetails {...profile} />
          <EditButton onClick={openEditDialog} />
          
         <LogoutButton onLogout={handleLogout} />
        </div>
      </div>
      <div className='edit-container' style={{display:'flex',alignItems:'center',justifyContent:'center',position:'absolute',zIndex:'1000',backgroundColor:'wheat',marginTop:'5%'}}> 
        {isEditDialogOpen && <EditProfileDialog isOpen={isEditDialogOpen} onClose={closeEditDialog}/>}
      </div>
    </div>
  );
}

export default App;
