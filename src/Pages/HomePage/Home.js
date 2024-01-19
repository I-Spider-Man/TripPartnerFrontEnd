import React,{useState,useEffect, createRef, useDebugValue} from 'react'
import vid from './pexels_videos_2096549 (1080p).mp4'
import './Home.css'
import EventComponent from '../../Components/Events/EventComponent'
import TouristSpotComponent from '../../Components/TouristSpots/TouristSpotComponent'
import {fetch_Event_Details} from '../../Components/Files/Event_Details'
import { fetch_spot_data } from '../../Components/Files/TouristSpotDetails'
import { Link } from 'react-router-dom'
import FeaturedPost from '../../Components/FeaturedPost'
import { Button } from '@mui/material'
function Home() {
  const [profileAva, setProfileAva] = useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg");
  const [Event_Details,setEventDetails] = useState([{}])
  const [Spot_Details,setSpotDetails]=useState([{}])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await (fetch_Event_Details());
        const response1 = await(fetch_spot_data());
        setSpotDetails(response1);
        setEventDetails(response);
      } catch (error) {
        console.log("Error while fetching event data:", error);
      }
    };
    fetchData();
  },[Event_Details]);
    useEffect(() => {
    console.log("event", Event_Details);
  }, [Event_Details]);
  useEffect(() => {
    console.log("spot", Spot_Details);
  }, [Spot_Details]);
  const [event,setEvent]=useState({});  
  const [spot,setSpot]=useState({});
  const eventDetails=Event_Details.slice(0,4);
  const spotDetails = Spot_Details.slice(0, 4);
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
        {currentEvent !==0 && <Button variant='contained' onClick={prevEvent} style={{color:'white',padding:'5px'}}>Prev</Button>}
        <div className="slider">
        <EventComponent key={event.event_id} post={event} />
        </div>
        {(currentEvent < eventDetails.length-1) && <Button variant='contained' onClick={nextEvent} style={{color:'white',padding:'5px'}}>Next</Button>}
      </div>
              <Link to='/EventsHomePage' style={{ textDecoration: 'none'}}>
                <Button variant='outlined' style={{ textDecoration: 'none', display: 'flex',alignItems:'center',justifyContent:'center', flexDirection: 'column',textTransform:'uppercase',backgroundColor:'black',color:'whitesmoke' }}><div style={{ marginRight: '5px' }}>v</div>
              <div style={{ marginRight: '5px' }}>i</div>
              <div style={{ marginRight: '5px' }}>e</div>
              <div style={{ marginRight: '5px' }}>w</div>
              <br />
              <div>m</div>
              <div>o</div>
              <div>r</div>
              <div>e</div></Button>
            </Link>
          </div>
        </div>
        <div className='spot-container' style={{padding:'60px'}}>
        <div className='popular-hotspot-container'>
          <div style={{display:'flex',flexDirection:'row',gap:'20px', alignItems:'center'}}>
              <Link to='/TouristHomePage' style={{ textDecoration: 'none'}}>
                            <Button variant='outlined' style={{ display: 'flex',alignItems:'center',justifyContent:'center', flexDirection: 'column',textTransform:'uppercase',color:'whitesmoke' }}><div style={{ marginRight: '5px' }}>v</div>
                              <div style={{ marginRight: '5px' }}>i</div>
                              <div style={{ marginRight: '5px' }}>e</div>
                              <div style={{ marginRight: '5px' }}>w</div>
                              <br />
                              <div>m</div>
                              <div>o</div>
                              <div>r</div>
                              <div>e</div>
                            </Button>
                          </Link>
                        <div className="slider-container">
                      {currentSpot !==0 && <Button variant='contained' onClick={prevSpot} style={{color:'white'}}>Prev</Button>}
                      <div className="slider">
                      <TouristSpotComponent key={spot.spot_id} post={spot} />
                      </div>
                      {(currentSpot < spotDetails.length-1) && <Button variant='contained' onClick={nextSpot} style={{color:'white'}}>Next</Button>}
                    </div>
          </div>
          
            
          </div>
          
          
          <div className='container' style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
            <h3>Popular Spots</h3>
            <p>Discover the allure of tourist spots like never before! Join us in celebrating the unique charm of each destination through captivating events. From cultural festivals to scenic adventures, these experiences redefine your travel. Embrace the extraordinary – explore, indulge, and make memories that last a lifetime. Your journey begins here.</p>
          </div>
          
          
        </div>
        </div>
  
  )
}
export default Home