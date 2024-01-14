import React,{useState,useEffect, createRef} from 'react'
import vid from './pexels_videos_2096549 (1080p).mp4'
import './Home.css'
import EventComponent from '../../Components/Events/EventComponent'
import TouristSpotComponent from '../../Components/TouristSpots/TouristSpotComponent'
import Event_Details from '../../Components/Files/Event_Details'
import Tourist_Spot_Details from '../../Components/Files/TouristSpotDetails'
import { Link } from 'react-router-dom'
import FeaturedPost from '../../Components/FeaturedPost'
function Home() {
  const [profileAva, setProfileAva] = useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg");
  const setProfile = (value) => {
    setProfileAva(value);
  };
  const post={
    event_id:1,
    event_name:"Candle Light India",
    event_happening:"6th JAN, 1AM",
    event_discription:"Candlelight India is a one of a kind immersive concert experience. It is curated to evoke a sense of wonder in concert goers by taking you on a magical journey where music and ambience converge to",
    event_address:"Good Shepherd Auditorium\nMuseum Rd, Opp Patricks Church, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka",
    event_image:"https://assets-in.bmscdn.com/discovery-catalog/events/et00379779-wunhsyzzrr-landscape.jpg",
    image_alt:"Candle Light India A Tribute To ARR"
  };
  const [event,setEvent]=useState({});
  const [spot,setSpot]=useState({});
  const eventDetails=Event_Details.slice(0,4);
  const spotDetails = Tourist_Spot_Details.slice(0, 4);
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
    <div className='home' style={{}}>
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
      <div className='header-text'>
        <div className='header-content'>welcome to trip partner</div>
      </div>
      <div>
        <div className='events-container' style={{backgroundColor:'black',padding:'50px'}}>
          <div className='container' style={{}}>
          <h3>Events</h3>
          <p>Unlock the magic of travel! Immerse yourself in vibrant events at breathtaking tourist spots. From cultural festivals to culinary delights, join us for unforgettable experiences that go beyond sightseeing. Embrace the journey, forge global connections, and make every moment extraordinary. Explore. Connect. Celebrate.</p>
        </div>
        <div className="slider-container" style={{padding:'20px'}}>
        {currentEvent !==0 && <button onClick={prevEvent} style={{color:'white',padding:'5px'}}>Prev</button>}
        <div className="slider">
        <FeaturedPost key={post.event_id} post={post} />
        </div>
        {(currentEvent < eventDetails.length-1) && <button onClick={nextEvent} style={{color:'white',padding:'5px'}}>Next</button>}
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
        <div className='spot-container' style={{padding:'60px'}}>
          <div className='container'>
            <h3>Popular Spots</h3>
            <p>Discover the allure of tourist spots like never before! Join us in celebrating the unique charm of each destination through captivating events. From cultural festivals to scenic adventures, these experiences redefine your travel. Embrace the extraordinary – explore, indulge, and make memories that last a lifetime. Your journey begins here.</p>
          </div>
          <div className="slider-container">
        {currentSpot !==0 && <button onClick={prevSpot} style={{color:'white'}}>Prev</button>}
        <div className="slider">
        <TouristSpotComponent spotId={spot.spot_id} spotName={spot.spot_name} spotImage={spot.spot_image} spotDescription={spot.spot_description} spotAlt={spot.spot_name}/>
        </div>
        {(currentSpot < spotDetails.length-1) && <button onClick={nextSpot} style={{color:'white'}}>Next</button>}
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