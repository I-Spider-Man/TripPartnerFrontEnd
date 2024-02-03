import "./EventDetails.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPicture, fetchEventDataByEventId } from "../../DataStorage";

const EventDetails = () => {
  const [eventDetails,setEventDetails]=useState({});
  const {eventId}=useParams();
  useEffect(()=>{
    const fetchEventDetails=async()=>{
      try{
        const response=await fetchEventDataByEventId(eventId);
        console.log(response);
      setEventDetails(response);
      }catch(error){
        console.log(error);
      }
    }
    fetchEventDetails();
  },[eventId])
  return eventDetails ? (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
        {eventDetails.eventPictureList && eventDetails.eventPictureList.map(eventPicture=>(<img
                src={eventPicture.eventPicture}
                alt="eventPicture"
                className="itemImg"
                style={{width:'100%',minHeight:"300px",maxHeight:'300px',objectFit:'fill',objectPosition:'center'}}
              />))}
            
          </div>
          <div className="right">
          
            <h1 className="title">Event Information</h1>
            <div className="item">
              
              <div className="details">
                <h1 className="itemTitle">{eventDetails.eventName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Event Id: </span>
                  <span className="itemValue">{eventDetails.eventId}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location: </span>
                  <span className="itemValue">{eventDetails.location}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Event start date: </span>
                  <span className="itemValue">{eventDetails.startDate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Event End date: </span>
                  <span className="itemValue">{eventDetails.endDate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Event status: </span>
                  <span className="itemValue">{eventDetails.eventStatus}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">People Count: </span>
                  <span className="itemValue">{eventDetails.peopleCount}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description :</span>
                  <span className="itemValue">
                    {eventDetails.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List eventName={eventDetails.eventName}/>
        </div>
      </div>
    </div>
  ):(<>loading....</>);
};

export default EventDetails;
