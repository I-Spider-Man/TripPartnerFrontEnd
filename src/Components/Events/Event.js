import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './Event.css'
import Event_details from '../Files/Event_Details';
import Footer from '../Footer/Footer';
function Event() {
  const {eventId} = useParams();
const event=Event_details.find(detail=>String(detail.event_id)===String(eventId));
const backgroundImageStyle = {
  backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kamizzle-15747770+(1)+(1).jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', // Adjust this based on your design
  margin: 0,       // Remove default margin
  padding: 0,      // Remove default padding
};
  return (
    <div className='front-page' style={backgroundImageStyle}>
    <div className='event-page'>
    <div className='nav-container'><NavBar/></div>
    <div className='event-content' style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center', marginTop:'15%'}}>
    {event ? (
          <><img src={event.event_image} alt={event.image_alt} />
          <div className='content-details'>
            <div><label>Event name: <h1>{event.event_name}</h1></label>
            <label>Event happening on: {event.event_happening}</label>
            <label>Event description: {event.event_discription}</label>
            <label>Event address: {event.event_address}</label>
            <div className='join-organize-button'>
              <button>Join</button>
              <button>Organize</button>
            </div></div>
            
            </div>
            
          </> 
        ) : (
          <p>No data found</p>
        )}

    </div>
    </div><div>
      <Footer/>
    </div>
    </div>
    
  );
}

export default Event;
