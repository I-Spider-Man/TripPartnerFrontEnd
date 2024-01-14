import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import vid from './pexels_videos_2096549 (1080p).mp4'
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import './Home.css'
import EventComponent from '../Events/EventComponent'
import TouristSpotComponent from '../TouristSpots/TouristSpotComponent'
import Event_Details from '../Files/Event_Details'
import Tourist_Spot_Details from '../Files/TouristSpotDetails'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
function Home() {
  const [profileAva,setProfileAva] =useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg")

  const noOfEvents=Event_Details.length;
const setProfile=(value)=>{
  setProfileAva(value);
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
      height: '3%', // Adjust this value to control the height of the faded area
      background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0.5,0.5,1))',
    }}
  />
</div>
      <div className='header'>
        <div className='nav-container'><NavBar profileAvatar={setProfile}/></div>
        <div className='header-content'>welcome to trip partner</div>
      </div>
      <div className='body'>
        <div className='events-container' >
          <div className='container'>
          <h3>Events</h3>
        </div>
        <div className='container-content'>
          <p>Unlock the magic of travel! Immerse yourself in vibrant events at breathtaking tourist spots. From cultural festivals to culinary delights, join us for unforgettable experiences that go beyond sightseeing. Embrace the journey, forge global connections, and make every moment extraordinary. Explore. Connect. Celebrate.</p>
          <div className='popular-event-container'>
          <Slider
            slideClass={'my-slider'}
            infinite={true}
            bullets={true}
            arrowsNav={true}
            animation={'scale'}
            callback={() => {
              console.log('here');
            }}
          >
              <div className='slider my-slider'>
                <ul className='slider-wrapper'>
                  {Event_Details.slice(0,3).map((details,item) => (
                    <li key={item}>
                      <EventComponent
                    eventId={details.event_id}
                    eventName={details.event_name}
                    eventDiscription={details.event_discription}
                    eventDate={details.event_happening}
                    eventImage={details.event_image}
                    eventAddress={details.event_address}
                    alt={details.image_alt}/>
                    </li>
                  ))}
                </ul>
              </div>
          </Slider>

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
            <div></div>
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

        <div className='home-footer'>
          <Footer/>
        </div>
  </div>
  )
}
export default Home