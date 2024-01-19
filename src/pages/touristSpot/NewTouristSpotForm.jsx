import React, { useState } from 'react';
import './NewTouristSpotForm.scss'; // Import your SCSS file for styling
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { postSpot } from '../../PostData';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const NewTouristSpotForm = () => {
  const [spotData, setSpotData] = useState({
    spotName: '',
    location: '',
    description: '',
    peopleCount: '',
    spotUrl: '', // New field for the spot URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpotData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postSpot(spotData);
      console.log('Spot created successfully:', response.data);
      // Add any additional logic or redirect after successful spot creation
    } catch (error) {
      console.error('Error creating spot:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="newSpotForm">
          <h2>Add New Tourist Spot</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Spot Name:
              <input
                type="text"
                name="spotName"
                value={spotData.spotName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={spotData.location}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={spotData.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              People Count:
              <input
                type="number"
                name="peopleCount"
                value={spotData.peopleCount}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Spot URL:
              <input
                type="text"
                name="spotUrl"
                value={spotData.spotUrl}
                onChange={handleChange}
                required
              />
            </label>
            <button className="aa" type="submit">
              Create Tourist Spot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTouristSpotForm;
