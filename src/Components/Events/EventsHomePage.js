import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './EventsHome.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {IoMdRadioButtonOn} from 'react-icons/io'
import {fetch_Event_Details, fetch_popularEvents} from '../Files/Event_Details'


const EventsHomePage = () => {
    const [eventDetails,setEventDetails]=useState([{}]);
    const [popularEvents,setPopularEvents]=useState([{}]);
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
    },[])
    
    useEffect(()=>{
        console.log(eventDetails);
    },[eventDetails])
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
                popularEvents.map(({eventId, eventPicture, eventName, location,description})=>{
                    return(
                        <div key={eventId} className="singleDestination" style={{padding:'5px'}}>
                            <div className="imageDiv">
                                <img src={eventPicture} alt={eventName} />
                            </div>
 
                            <div className="cardInfo" style={{display:'flex', flexDirection:'column',gap:'5px', justifyContent:'center'}}>
                                <h4 className="eventName">{eventName}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{location}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <Link to={`/Events/${eventName}`}><button className="btn flex">
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
                eventDetails.map(({eventId, eventPicture, eventName, location, description})=>{
                    return(
                        <div key={eventId} className="singleDestination" style={{padding:'5px'}}>
                            <div className="imageDiv">
                                <img src={eventPicture} alt={eventName} />
                            </div>
 
                            <div className="cardInfo">
                                <h4 className="eventName">{eventName}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{location}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <Link to={`/Events/${eventName}`}><button className="btn flex">
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