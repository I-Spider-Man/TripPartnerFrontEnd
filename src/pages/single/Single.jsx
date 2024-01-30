import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPicture, fetchSpotDataById } from "../../DataStorage";

const SpotDetails = () => {
  const [spotDetails,setSpotDetails]=useState({});
  const [spotPicture,setSpotPicture]=useState(null);
  const {spotId}=useParams();
  useEffect(()=>{
    const fetchSpotDetails=async()=>{
      try{
        const response=await fetchSpotDataById(spotId);
      setSpotDetails(response);
      const picture=await fetchPicture(response.spotPicture);
      setSpotPicture(picture);
      }catch(error){
        console.log(error);
      }
    }
    fetchSpotDetails();
  },[spotId])
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <img
                src={spotPicture}
                alt="spotPicture"
                className="itemImg"
                style={{width:'100%',minHeight:"300px",maxHeight:'300px'}}
              />
          </div>
          <div className="right">
          
            <h1 className="title">Tourist Spot Information</h1>
            <div className="item">
              
              <div className="details">
                <h1 className="itemTitle">{spotDetails.spotName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Spot Id: </span>
                  <span className="itemValue">{spotDetails.spotId}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location: </span>
                  <span className="itemValue">{spotDetails.location}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description :</span>
                  <span className="itemValue">
                    {spotDetails.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List spotName={spotDetails.spotName}/>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
