import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './Event.css'
import Event_details from '../Files/Event_Details';
import Footer from '../Footer/Footer';
import Loading from '../LoadingComponents/ContentLoading';
function Event() {
  const {eventId} = useParams();
const event=Event_details.find(detail=>String(detail.event_id)===String(eventId));
const backgroundImageStyle = {
  backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kamizzle-15747770+(1)+(1).jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%', // Adjust this based on your design
  margin: 0,       // Remove default margin
  padding: 0,      // Remove default padding
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
              <button>Join</button>
              <button>Organize</button>
            </div>
            
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

export default Event;
