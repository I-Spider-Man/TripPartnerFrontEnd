import NavBar from '../NavBar/NavBar'
import EventComponent from './EventComponent'
import './EventsHome.css';
import Event_Details from '../Files/Event_Details';
function EventsHome() {
  return (
    <div>
      <div className='nav-container'><NavBar/></div>
      <div className='event-container'>
      {Event_Details.map(details=>(
      <EventComponent
      eventId={details.event_id}
      eventName={details.event_name} 
      eventDiscription={details.event_discription} 
      eventDate={details.event_happening} 
      eventImage={details.event_image} 
      eventAddress={details.event_address} 
      alt={details.image_alt}/>
      ))}
      </div>
    </div>
  )
}

export default EventsHome