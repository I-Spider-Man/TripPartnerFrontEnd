import React,{useState,useEffect, createRef} from 'react'
import vid from './pexels_videos_2096549 (1080p).mp4'
import './Home.css'
import EventComponent from '../../Components/Events/EventComponent'
import TouristSpotComponent from '../../Components/TouristSpots/TouristSpotComponent'
import Event_Details from '../../Components/Files/Event_Details'
import Tourist_Spot_Details from '../../Components/Files/TouristSpotDetails'
import { Link } from 'react-router-dom'
function Home() {
  const [profileAva, setProfileAva] = useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg");
  const setProfile = (value) => {
    setProfileAva(value);
  };
  const [event,setEvent]=useState({});
  const [spot,setSpot]=useState({});
  const eventDetails=Event_Details.slice(0,3);
  const spotDetails = Tourist_Spot_Details.slice(0, 3);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [currentSpot,setCurrentSpot]=useState(0);
useEffect(()=>{
  setEvent(eventDetails[currentEvent]);
},[currentEvent]);
useEffect(()=>{
  setSpot(spotDetails[currentSpot])
},[currentSpot])

  const nextEvent = () => {
    setCurrentEvent(currentEvent+1);
  };
const nextSpot=()=>{
  setCurrentSpot(currentSpot+1);
}
  const prevEvent = () => {
    setCurrentEvent(currentEvent-1);
  };
  const prevSpot=()=>{
    setCurrentSpot(currentSpot-1)
  }
  return (
    <div className='home' >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <video src={vid} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '3%', 
      background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0.5,0.5,1))',
    }}
  />
</div>
      <div className='header'>
        <div className='header-content'>welcome to trip partner</div>
      </div>
      <div className='body'>
        <div className='events-container'>
          <div className='container'>
          <h3>Events</h3>
          <p>Unlock the magic of travel! Immerse yourself in vibrant events at breathtaking tourist spots. From cultural festivals to culinary delights, join us for unforgettable experiences that go beyond sightseeing. Embrace the journey, forge global connections, and make every moment extraordinary. Explore. Connect. Celebrate.</p>
        </div>
        <div className="slider-container">
        {currentEvent !==0 && <button onClick={prevEvent}>Prev</button>}
        <div className="slider">
              <EventComponent
                eventId={event.event_id}
                eventName={event.event_name}
                eventDescription={event.event_discription}
                eventImage={event.event_image}
                alt={event.image_alt}
              />
        </div>
        <button onClick={nextEvent}>Next</button>
      </div>
              <Link to='/EventsHomePage' style={{ textDecoration: 'none'}}>
                <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column',textTransform:'uppercase',backgroundColor:'black',color:'whitesmoke' }}><div style={{ marginRight: '5px' }}>v</div>
              <div style={{ marginRight: '5px' }}>i</div>
              <div style={{ marginRight: '5px' }}>e</div>
              <div style={{ marginRight: '5px' }}>w</div>
              <br />
              <div>m</div>
              <div>o</div>
              <div>r</div>
              <div>e</div></button>
            </Link>
          </div>
        </div>
        <div className='spot-container'>
          <div className='container'>
            <h3>Popular Spots</h3>
            <p>Discover the allure of tourist spots like never before! Join us in celebrating the unique charm of each destination through captivating events. From cultural festivals to scenic adventures, these experiences redefine your travel. Embrace the extraordinary – explore, indulge, and make memories that last a lifetime. Your journey begins here.</p>
          </div>
          <div className="slider-container">
        {currentSpot !==0 && <button onClick={prevSpot}>Prev</button>}
        <div className="slider">
        <TouristSpotComponent spotId={spot.spot_id} spotName={spot.spot_name} spotImage={spot.spot_image} spotDescription={spot.spot_description} spotAlt={spot.spot_name}/>
        </div>
        <button onClick={nextSpot}>Next</button>
      </div>
          <div className='popular-hotspot-container'>
            <Link to='/TouristHomePage' style={{ textDecoration: 'none'}}>
              <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column',textTransform:'uppercase',backgroundColor:'black',color:'whitesmoke' }}><div style={{ marginRight: '5px' }}>v</div>
                <div style={{ marginRight: '5px' }}>i</div>
                <div style={{ marginRight: '5px' }}>e</div>
                <div style={{ marginRight: '5px' }}>w</div>
                <br />
                <div>m</div>
                <div>o</div>
                <div>r</div>
                <div>e</div>
              </button>
            </Link>
          </div>
        </div>
        </div>
  
  )
}
export default Home