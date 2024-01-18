import { useParams } from 'react-router-dom'
import './Event.css'
import {Event_Details} from '../Files/Event_Details';
import Loading from '../LoadingComponents/ContentLoading';
import { useState } from 'react';
import EventsJoinPage from './EventsJoinPage';
import GroupOrganizeForm from '../Group/GroupOrganizeForm';
function Event({userId}) {
  const [organizeFormVisible, setOrganizeFormVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickListItem = () => {
    setOpen(true);
  };
  console.log(userId);
  const handleClose = () => {
    setOpen(false);
    setOrganizeFormVisible(false);
  }
  const {eventId} = useParams();
  const event=Event_Details.find(detail=>String(detail.event_id)===String(eventId));
  const handleOrganizeClick = () => {
    setOrganizeFormVisible(true);
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
          <><img src={event.event_image} alt={event.image_alt} />
          <div className='content-details'>
            <label><strong>EVENT NAME:</strong> <h1>{event.event_name}</h1></label>
            <label><strong>EVENT HAPPENING ON: </strong><p>{event.event_happening}</p></label>
            <label><strong>EVENT DESCRIPTION:</strong> <p>{event.event_discription}</p></label>
            <label><strong>EVENT ADDRESS:</strong> <p>{event.event_address}</p></label>
            <div className='join-organize-button'>
              <button onClick={()=>handleClickListItem()}>Join</button>
              <button onClick={()=>handleOrganizeClick()}>Organize</button>
            </div>
        <EventsJoinPage
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={()=>handleClose()}
        />
          {event && (
          <GroupOrganizeForm
            id="ringtone-menu"
            keepMounted
            userId={userId}
            eventName={event.event_name}
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
    </div>
    
  );
}

export default Event
