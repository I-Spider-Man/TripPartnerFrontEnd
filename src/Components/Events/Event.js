import { useParams } from 'react-router-dom'
import './Event.css'
import {Event_Details, fetchEventByEventName, fetch_Event_By_id} from '../Files/Event_Details';
import Loading from '../LoadingComponents/ContentLoading';
import { useEffect, useState } from 'react';
import GroupOrganizeForm from '../Group/GroupOrganizeForm';
import { useUser } from '../Auth/UserContext';
import GroupJoinPage from '../Group/GroupJoinPage';
import AlertCom from '../AlertCom';
function Event() {
  const [event,setEvent]=useState({});
  const {userDetails,participantData,organizerData}=useUser();
  const [alert,setAlert]=useState(false);
  const [organizeFormVisible, setOrganizeFormVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const handleAlert=()=>{
    setAlert(!alert);
  }
  const handleClickListItem = () => {
    if((!organizerData && !participantData)||((organizerData && organizerData.organizerStatus=="Free") && (participantData && participantData.participantStatus=="Free"))){
      setOpen(true);
    }
    else{
      setAlert(true);
    }
  };
  const handleCloseAlert=()=>{
    setAlert(false);
  }
  console.log(userDetails?.userId||'null');
  const handleClose = () => {
    setOpen(false);
    setOrganizeFormVisible(false);
  }
  const getStatus = () => {
    const lowThreshold = 50;
    const mediumThreshold = 100;
  
    if (event.peopleCount < lowThreshold) {
      return 'Low';
    } else if (event.peopleCount < mediumThreshold) {
      return 'Medium';
    } else {
      return 'High';
    }
  };
  const {eventName} = useParams();
  useEffect(()=>{
    const fetchData=async ()=>{
      const response= await fetchEventByEventName(eventName);
      console.log(response)
      setEvent(response);
    }
    fetchData();
  },[eventName])
  useEffect(()=>{
    console.log(event);
  },[event])

  const handleOrganizeClick = () => {
    if((!organizerData && !participantData)||((organizerData && organizerData.organizerStatus=="Free") && (participantData && participantData.participantStatus=="Free"))){
      setOrganizeFormVisible(true);
    }
    else{
      setAlert(true);
    }
  };

  const handleOrganizeSubmit = (formData) => {
    console.log('Organize Form Data:', formData);
    setOrganizeFormVisible(false);
  };
  return (
    <div className='front-page'>
    <div className='event-page' style={{minHeight:'100vh'}}>
    
    <div className='content-container' style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100vh'}}>
      <div className='event-content' style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
    {event ? (
          <>
          {(event.eventPictureList && event.eventPictureList.length > 0) && (
  <>
    {event.eventPictureList.map(({ eventPicture, image_alt }, index) => (
      <img key={index} src={eventPicture} alt={image_alt} />
    ))}
  </>
)}

          
          <div className='content-details'>
            <label><strong>EVENT NAME:</strong> <h1>{event.eventName}</h1></label>
            <label><strong>EVENT HAPPENING ON: </strong><p>{event.startDate} = {event.endDate}</p></label>
            <label><strong>EVENT DESCRIPTION:</strong> <p>{event.description}</p></label>
            <label><strong>EVENT ADDRESS:</strong> <p>{event.location}</p></label>
            <label><strong>PEOPLE COUNT:</strong> {getStatus()}</label>
            <div className='join-organize-button'>
              <button onClick={()=>handleClickListItem()}>Join</button>
              <button onClick={()=>handleOrganizeClick()}>Organize</button>
            </div>
        <GroupJoinPage
          id="ringtone-menu"
          keepMounted
          open={open}
          eventName={event.eventName}
          spotName={null}
          onClose={()=>handleClose()}
        />
          {event && (
          <GroupOrganizeForm
            id="ringtone-menu"
            keepMounted
            eventName={event.eventName}
            open={organizeFormVisible}
            onClose={() => handleClose()}
            onSubmit={() => handleOrganizeSubmit()}
          />
          )}
            </div>
          </> 
        ) : (
          <Loading/>
        )}
        </div></div>
    </div>
    {alert && (
        <AlertCom onOpen={true} onClose={handleCloseAlert} title={"Alert"} body={"You are already busy with your group."} />
      )}
    </div>
    
  );
}

export default Event
