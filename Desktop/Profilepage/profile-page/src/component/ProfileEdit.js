import React, { useState } from 'react';

function ProfileEdit({ onClose }) {
  const [formData, setFormData] = useState({
    picture: null,
    username: '',
    gender: '',
    dateOfBirth: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose(); // Call the onClose function passed as a prop
  };

  const handleCancel = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', gap: '10px', boxShadow: '8px 6px 20px 0px' }}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Profile Picture (PNG only):
          <input type="file" name="profilePicture" onChange={handleChange} accept=".png" />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default ProfileEdit;
