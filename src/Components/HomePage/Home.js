import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import vid from './pexels_videos_2096549 (1080p).mp4'
import './Home.css'
import EventComponent from '../Events/EventComponent'
import TouristSpotComponent from '../TouristSpots/TouristSpotComponent'
import Event_Details from '../Files/Event_Details'
import Tourist_Spot_Details from '../Files/TouristSpotDetails'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
function Home() {
  
  const [firstEvent,setFirstEvent]=useState();
  const noOfEvents=Event_Details.length;

  return (
    <div className='home' >
      <video src={vid} autoPlay loop muted/>
      <div className='header'>
        <div className='nav-container'><NavBar/></div>
        <div className='header-content'>welcome to trip partner</div>
      </div>
      <div className='body'>
        <div className='events-container'>
          <div className='container'>
          <h3>Events</h3>
          <p>Unlock the magic of travel! Immerse yourself in vibrant events at breathtaking tourist spots. From cultural festivals to culinary delights, join us for unforgettable experiences that go beyond sightseeing. Embrace the journey, forge global connections, and make every moment extraordinary. Explore. Connect. Celebrate.</p>
        </div>

          <div className='popular-event-container'>
              {
              Event_Details.slice(0, 3).map
                ((details)=>
                  (
                    <EventComponent
                    eventId={details.event_id}
                    eventName={details.event_name}
                    eventDiscription={details.event_discription}
                    eventDate={details.event_happening}
                    eventImage={details.event_image}
                    eventAddress={details.event_address}
                    alt={details.image_alt}/>
                  )
                )
              }
              <Link to='/EventsHome' style={{ textDecoration: 'none'}}>
                <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column',textTransform:'uppercase' }}><div style={{ marginRight: '5px' }}>v</div>
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
          <div className='popular-hotspot-container'>
            {Tourist_Spot_Details.slice(0, 3).map(spot=>(
            <TouristSpotComponent
            spotId={spot.spot_id}
            spotName={spot.spot_name}
            spotDescription={spot.spot_description}
            spotImage={spot.spot_image}
            spotAlt={spot.image_alt}/>
            ))}
            <Link to='/TouristSpotHome' style={{ textDecoration: 'none'}}>
              <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column',textTransform:'uppercase' }}><div style={{ marginRight: '5px' }}>v</div>
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

        <div className='home-footer'>
          <Footer/>
        </div>
  </div>
  )
}
export default Home