<<<<<<< HEAD
import { useParams } from "react-router-dom";
import "./Event.css";
import {
  Event_Details,
  fetchEventByEventName,
  fetch_Event_By_id,
} from "../Files/Event_Details";
import Loading from "../LoadingComponents/ContentLoading";
import { useEffect, useState } from "react";
import GroupOrganizeForm from "../Group/GroupOrganizeForm";
import { useUser } from "../Auth/UserContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GroupJoinPage from "../Group/GroupJoinPage";
import AlertCom from "../AlertCom";
function Event() {
  const [event, setEvent] = useState({});
=======
import { useParams } from 'react-router-dom'
import './Event.css'
import { Event_Details, fetchEventByEventName, fetch_Event_By_id } from '../Files/Event_Details';
import Loading from '../LoadingComponents/ContentLoading';
import { useEffect, useState } from 'react';
import GroupOrganizeForm from '../Group/GroupOrganizeForm';
import { useUser } from '../Auth/UserContext';
import GroupJoinPage from '../Group/GroupJoinPage';
import AlertCom from '../AlertCom';

function Event() {
  const [event, setEvent] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Add state for current image index
>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
  const { userDetails, participantData, organizerData } = useUser();
  const [alert, setAlert] = useState(false);
  const [organizeFormVisible, setOrganizeFormVisible] = useState(false);
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const handleAlert = () => {
    setAlert(!alert);
  };
  const handleClickListItem = () => {
    if (
      (!organizerData && !participantData) ||
      (organizerData &&
        organizerData.organizerStatus == "Free" &&
        participantData &&
        participantData.participantStatus == "Free")
    ) {
=======

  const handleAlert = () => {
    setAlert(!alert);
  }

  const handleClickListItem = () => {
    if ((!organizerData && !participantData) || ((organizerData && organizerData.organizerStatus == "Free") && (participantData && participantData.participantStatus == "Free"))) {
>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
      setOpen(true);
    } else {
      setAlert(true);
    }
  };
<<<<<<< HEAD
  const handleCloseAlert = () => {
    setAlert(false);
  };
  // console.log(userDetails?.userId||'null');
  const handleClose = () => {
    setOpen(false);
    setOrganizeFormVisible(false);
  };
=======

  const handleCloseAlert = () => {
    setAlert(false);
  }

  const handleClose = () => {
    setOpen(false);
    setOrganizeFormVisible(false);
  }

>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
  const getStatus = () => {
    const lowThreshold = 50;
    const mediumThreshold = 100;

    if (event.peopleCount < lowThreshold) {
      return "Low";
    } else if (event.peopleCount < mediumThreshold) {
      return "Medium";
    } else {
      return "High";
    }
  };
<<<<<<< HEAD
  const { eventName } = useParams();
=======

  const { eventName } = useParams();

>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEventByEventName(eventName);
      setEvent(response);
    };
    fetchData();
<<<<<<< HEAD
  }, [eventName]);
  useEffect(() => {
    console.log(event);
  }, [event]);

  const handleOrganizeClick = () => {
    if (
      (!organizerData && !participantData) ||
      (organizerData &&
        organizerData.organizerStatus == "Free" &&
        participantData &&
        participantData.participantStatus == "Free")
    ) {
=======
  }, [eventName])

  const handleOrganizeClick = () => {
    if ((!organizerData && !participantData) || ((organizerData && organizerData.organizerStatus == "Free") && (participantData && participantData.participantStatus == "Free"))) {
>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
      setOrganizeFormVisible(true);
    } else {
      setAlert(true);
    }
  };

  const handleOrganizeSubmit = (formData) => {
    console.log("Organize Form Data:", formData);
    setOrganizeFormVisible(false);
  };
<<<<<<< HEAD

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="front-page">
      <div className="event-page" style={{ minHeight: "100vh" }}>
        <div
          className="content-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            margin: "10%",
          }}
        >
          <div
            className="event-content"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {event ? (
              <>
                {/* {event.eventPictureList &&
                  event.eventPictureList.length > 0 && (
                    <>
                      {event.eventPictureList.map((eventPicture, index) => (
                        <img key={index} src={eventPicture} alt={eventName} />
                      ))}
                    </>
                  )} */}

{event.eventPictureList && event.eventPictureList.length > 0 && (
                  <Slider {...settings}>
                    {event.eventPictureList.map((eventPicture, index) => (
                      <div key={index}>
                        <img src={eventPicture} alt={`${eventName}-image-${index}`} />
                      </div>
                    ))}
                  </Slider>
                )}

                <div className="content-details">
                  <label>
                    <strong>EVENT NAME:</strong> <h1>{event.eventName}</h1>
                  </label>
                  <label>
                    <strong>EVENT HAPPENING ON: </strong>
                    <p>
                      {event.startDate} = {event.endDate}
                    </p>
                  </label>
                  <label>
                    <strong>EVENT DESCRIPTION:</strong>{" "}
                    <p>{event.description}</p>
                  </label>
                  <label>
                    <strong>EVENT ADDRESS:</strong> <p>{event.location}</p>
                  </label>
                  <label>
                    <strong>PEOPLE COUNT:</strong> {getStatus()}
                  </label>
                  <div className="join-organize-button">
                    <button onClick={() => handleClickListItem()}>Join</button>
                    <button onClick={() => handleOrganizeClick()}>
                      Organize
                    </button>
=======

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.eventPictureList.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? event.eventPictureList.length - 1 : prevIndex - 1));
  };

  return (
    <div className='front-page'>
      <div className='event-page' style={{ minHeight: '100vh' }}>
        <div className='content-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div className='event-content' style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', position: 'relative' }}>
            {event ? (
              <>
                {(event.eventPictureList && event.eventPictureList.length > 0) && (
                  <>
                  <button className="prev-btn" onClick={handlePreviousImage}>&lt;</button>
                    <img src={event.eventPictureList[currentImageIndex]} alt={eventName} />
                    
                    <button className="next-btn" onClick={handleNextImage}>&gt;</button>
                  </>
                )}

                <div className='content-details'>
                  <label><strong>EVENT NAME:</strong> <h1>{event.eventName}</h1></label>
                  <label><strong>EVENT HAPPENING ON: </strong><p>{event.startDate} = {event.endDate}</p></label>
                  <label><strong>EVENT DESCRIPTION:</strong> <p>{event.description}</p></label>
                  <label><strong>EVENT ADDRESS:</strong> <p>{event.location}</p></label>
                  <label><strong>PEOPLE COUNT:</strong> {getStatus()}</label>
                  <div className='join-organize-button'>
                    <button onClick={handleClickListItem}>Join</button>
                    <button onClick={handleOrganizeClick}>Organize</button>
>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
                  </div>
                  <GroupJoinPage
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    eventName={event.eventName}
                    spotName={null}
<<<<<<< HEAD
                    onClose={() => handleClose()}
=======
                    onClose={handleClose}
>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
                  />
                  {event && (
                    <GroupOrganizeForm
                      id="ringtone-menu"
                      keepMounted
<<<<<<< HEAD
                      eventName={event.eventName}
                      open={organizeFormVisible}
                      onClose={() => handleClose()}
                      onSubmit={() => handleOrganizeSubmit()}
=======
                      event={event}
                      eventName={event.eventName}
                      open={organizeFormVisible}
                      onClose={handleClose}
                      onSubmit={handleOrganizeSubmit}
>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
                    />
                  )}
                </div>
              </>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      {alert && (
<<<<<<< HEAD
        <AlertCom
          onOpen={true}
          onClose={handleCloseAlert}
          title={"Alert"}
          body={"You are already busy with your group."}
        />
      )}
    </div>
=======
        <AlertCom onOpen={true} onClose={handleCloseAlert} title={"Alert"} body={"You are already busy with your group."} />
      )}
    </div>

>>>>>>> 0e02d63053523a544665be162ba97b0174a98eb0
  );
}

export default Event;
