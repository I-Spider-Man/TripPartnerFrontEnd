import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './Event.css'
import Event_details from '../Files/Event_Details';
function Event() {
  const {eventId} = useParams();
  
const event=Event_details.find(detail=>String(detail.event_id)===String(eventId));
  return (
    <div className='home'>
    <div className='nav'><NavBar/></div>
    <div className='event-content'>
    {event ? (
          <>
            <img src={event.event_image} alt={event.image_alt} />
            <label>Event name: <h1>{event.event_name}</h1></label>
            <label>Event happening on: {event.event_happening}</label>
            <label>Event description: {event.event_discription}</label>
            <label>Event address: {event.event_address}</label>
            <div className='join-organize-button'>
              <button>Join</button>
              <button>Organize</button>
            </div>
          </> 
        ) : (
          <p>No data found</p>
        )}

    </div>
    </div>
  );
}

export default Event;
