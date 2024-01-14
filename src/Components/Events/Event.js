import { useParams } from 'react-router-dom'
import './Event.css'
import Event_details from '../Files/Event_Details';
import Loading from '../LoadingComponents/ContentLoading';
import { useState } from 'react';
import EventsJoinPage from './EventsJoinPage';
function Event() {
  const [open, setOpen] = useState(false);
  const handleClickListItem = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const {eventId} = useParams();
  const event=Event_details.find(detail=>String(detail.event_id)===String(eventId));
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
              <button onClick={handleClickListItem}>Join</button>
              <button>Organize</button>
            </div>
            
            </div>
            
          </> 
        ) : (
          <Loading/>
        )}
        </div><EventsJoinPage
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
        /></div>
    
    </div>
    </div>
    
  );
}

export default Event
