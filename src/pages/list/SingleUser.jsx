import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import axios from 'axios';
import './singleuser.scss';
import { fetchPicture, fetchUserData, fetchUserDataById } from '../../DataStorage';

const SingleUser = () => {
  const [userData, setUserData] = useState({});
  const [userPicture,setUserPicture]=useState(null);
  const { userId } = useParams(); // Use useParams to get the dynamic parameter from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserDataById(userId) // Use the dynamic userId
        setUserData(response);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]); // Include userId in the dependency array to fetch data when it changes

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={userPicture}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userData.userName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userData.userEmail}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">About User:</span>
                  <span className="itemValue">{userData.aboutUser? userData.aboutUser : 'none'}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        <div className="bottom">
          <h1 className="title">Events List</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleUser;