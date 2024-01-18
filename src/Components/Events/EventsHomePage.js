import React from 'react'
import { Link } from 'react-router-dom'
import './EventsHome.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdOutlineJoinInner} from 'react-icons/md'
import {IoMdRadioButtonOn} from 'react-icons/io'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import {Event_Details} from '../Files/Event_Details'


const EventsHomePage = () => {
    
    function shuffleArray(array) {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      }
    const shuffledDetails = shuffleArray(Event_Details.slice(0, 5));
  return (
    <section className="main container section">
        <div style={{minHeight:'100vh'}}>
        <div className="secTitle" >
            <h1 data-aos='fade-right' className="title">
                Popular events ....
            </h1>
        </div>
 
        <div className="secContent grid">
            {
                shuffledDetails.slice(0,5).map(({event_id, event_image, event_name, event_address,event_discription})=>{
                    const maxDescriptionLength = 110;
                    const truncatedDescription =
                      event_discription.length > maxDescriptionLength
                        ? `${event_discription.substring(0, maxDescriptionLength)}...`
                        : event_discription;
                    return(
                        <div key={event_id} className="singleDestination" style={{padding:'5px'}}>
                            <div className="imageDiv">
                                <img src={event_image} alt={event_name} />
                            </div>
 
                            <div className="cardInfo" style={{display:'flex', flexDirection:'column',gap:'5px', justifyContent:'center'}}>
                                <h4 className="event_name">{event_name}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{event_address}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{truncatedDescription}</p>
                                </div>
                                <Link to={`/Events/${encodeURIComponent(event_id)}`}><button className="btn flex">
                                    VIEW MORE
                                    <IoMdRadioButtonOn className='icon'/>
                                </button></Link>
                                
                            </div>
                        </div>
                    )
                })
            }
 
            <p>More places to be added soon...</p>
        </div>
 
        <br />
        <br />
 
        <div className="secTitle">
            <h1 data-aos='fade-right' className="title">
                Upcoming events .....
            </h1>
        </div>
        <div className="secContent grid">
            {
                Event_Details.map(({event_id, event_image, event_name, event_address, event_discription})=>{
                    const maxDescriptionLength = 110;
                    const truncatedDescription =
                      event_discription.length > maxDescriptionLength
                        ? `${event_discription.substring(0, maxDescriptionLength)}...`
                        : event_discription;
                    return(
                        <div key={event_id} className="singleDestination" style={{padding:'5px'}}>
                            <div className="imageDiv">
                                <img src={event_image} alt={event_name} />
                            </div>
 
                            <div className="cardInfo">
                                <h4 className="event_name">{event_name}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{event_address}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{truncatedDescription}</p>
                                </div>
                                <Link to={`/Events/${encodeURIComponent(event_id)}`}><button className="btn flex">
                                    VIEW MORE
                                    <IoMdRadioButtonOn className='icon'/>
                                </button></Link>
                            </div>
                        </div>
                    )
                })
            }
 
            <p>More events to be added soon</p>
        </div></div>
    </section>
  )
}
 
export default EventsHomePage