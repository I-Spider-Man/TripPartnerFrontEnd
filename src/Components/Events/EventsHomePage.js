import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './EventsHome.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {IoMdRadioButtonOn} from 'react-icons/io'
import {fetch_Event_Details, fetch_popularEvents} from '../Files/Event_Details'
import Loading from '../LoadingComponents/Loading'
import SingleEvent from './SingleEvent'


const EventsHomePage = () => {
    const [eventDetails,setEventDetails]=useState([{}]);
    const [popularEvents,setPopularEvents]=useState([{}]);
    const [slideIndex, setSlideIndex] = useState(1);

    const plusDivs = (n) => {
      showDivs(slideIndex + n);
    };
  
    const showDivs = (n) => {
      let newIndex = n;
      const x = document.getElementsByClassName("mySlides");
  
      if (newIndex > x.length) {
        newIndex = 1;
      }
  
      if (newIndex < 1) {
        newIndex = x.length;
      }
  
      setSlideIndex(newIndex);
  
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
  
      x[newIndex - 1].style.display = "block";
    };
  
    useEffect(() => {
      showDivs(slideIndex);
    }, [slideIndex]);
    useEffect(()=>{
        const fetchData=async()=>{
        try{
            const response=await fetch_Event_Details();
            const response1=await fetch_popularEvents();
            setEventDetails(response);
            setPopularEvents(response1);
        }catch(error){
            console.log("error while fetching event details",error);
        }
    }
    fetchData();
    })
    
    useEffect(()=>{
        console.log(eventDetails);
    },[eventDetails])
  return (
    <section className="main container section">
        <div style={{minHeight:'100vh'}}>
        <div className='top-slideshow-div' >
                {/* <h2 className="w3-center">EVENTS TO REMEMBER</h2> */}

                <div className="w3-content w3-display-container" style={{height:'80vh'}}>
                    <img className="mySlides" src="https://images.rove.me/w_1920,q_85/cgoll6or2skcn0fsauwg/quebec-quebec-city-summer-festival-festival-dete-de-quebec.jpg" style={{ height: '100%', width: '100%' }} />
                    <img className="mySlides" src="https://wallpaperaccess.com/full/6133725.jpg" style={{ height: '100%', width: '100%' }} />
                    <img className="mySlides" src="https://liveeventproductions.co.uk/wp-content/uploads/2018/01/event-production-services-live-event-productions-banner-image-4.jpg" style={{ height: '100%', width: '100%' }} />
                    <img className="mySlides" src="https://wallpaperaccess.com/full/2489735.jpg" style={{ height: '100%', width: '100%' }} />
                    <img className="mySlides" src="https://th.bing.com/th/id/R.57ea724bd5e16a37ccd1e54966169406?rik=gqlJFPll8guZCg&riu=http%3a%2f%2fwww.stagingdimensions.com.au%2fcontent%2fimages%2fthumbs%2f0001272_cotton-club-gatsby.jpeg&ehk=XFAQOwnAYOqxO45G704BTIak9sD6SIQQT7Uq9ZP9pFU%3d&risl=&pid=ImgRaw&r=0" style={{ height: '100%', width: '100%' }} />
                    <img className="mySlides" src="https://wallpapercave.com/wp/wp7488400.jpg" style={{ height: '100%', width: '100%' }} />
                    <img className="mySlides" src="https://s3-media1.fl.yelpcdn.com/bphoto/oPVG4wXUdpyYXfJ4jg5-Mw/o.jpg" style={{ height: '100%', width: '100%' }} />
                    <img className="mySlides" src="https://www.jettext.net/wp-content/uploads/2021/11/Creamfields-10-Worlds-Wildest-Parties-Jet-Text-Blog.jpg" style={{ height: '100%', width: '100%' }} />

                    <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>&#10094;</button>
                    <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>&#10095;</button>
                </div>
            </div>
        <div className="secTitle" >
            <h1 data-aos='fade-right' className="title">
                Popular events ....
            </h1>
        </div>
 
        <div className="secContent grid">
            {popularEvents.length > 0 ? (<>{
                popularEvents.map(({eventId, eventPicture, eventName, location,description})=>{
                    return(
                        <SingleEvent eventId={eventId} eventPicture={eventPicture} eventName={eventName} location={location} description={description}/>
                    )
                })
            }<p>More places to be added soon...</p></>):(<div style={{color:'white',display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}><Loading/></div>)}
        </div>
 
        <br />
        <br />
 
        <div className="secTitle">
            <h1 data-aos='fade-right' className="title">
                All events .....
            </h1>
        </div>
        <div className="secContent grid">
            {eventDetails.length > 0 ? (<>{
                eventDetails.map(({eventId, eventPicture, eventName, location, description})=>{
                    return(
                        <SingleEvent eventId={eventId} eventPicture={eventPicture} eventName={eventName} location={location} description={description}/>
                    )
                })
            }
 
            <p>More events to be added soon</p></>):(<div style={{color:'white',display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}><Loading/></div>)}
            
        </div></div>
    </section>
  )
}
 
export default EventsHomePage