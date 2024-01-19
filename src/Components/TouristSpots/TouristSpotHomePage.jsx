import React, { useEffect, useState } from 'react'
import './TouristSpotHomePage.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {IoMdRadioButtonOn} from 'react-icons/io'
import {Link} from 'react-router-dom'
import { fetch_spot_data } from '../Files/TouristSpotDetails'

const TouristSpotHomePage = () => {
  const [Spot_Details,setSpotDetails]=useState([{}])
  const fetchData = async () => {
    try {
      const response1 = await fetch_spot_data();
      console.log("Spot Data:", response1); // Log the response
      setSpotDetails(response1);
    } catch (error) {
      console.log("Error while fetching spot data:", error);
    }
  };
    fetchData();
  useEffect(() => {
    console.log("spot", Spot_Details);
    
  }, [Spot_Details]);
  
  return (
    <section className="main container section" >
        <div className="secTitle">
            <h1 data-aos='fade-right' className="title">
                Most Visited Destinations...
            </h1>
        </div>
 
        <div className="secContent grid">
            {
                Spot_Details.slice(0,5).map(({spotId, spotPicture, spotName, location, description})=>{
                    
                    return(
                        
                        <div key={spotId} className="singleDestination" style={{padding:'5px'}}>
                            <div className="imageDiv">
                                <img src={spotPicture} alt={spotName} />
                            </div>
 
                            <div className="cardInfo" style={{display:'flex', flexDirection:'column',gap:'5px', justifyContent:'center'}}>
                                <h4 className="spotName">{spotName}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{location}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <Link to={`/Spot/${encodeURIComponent(spotId)}`}><button className="btn flex">
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
                All places .....
            </h1>
        </div>
        <div className="secContent grid">
            {
                Spot_Details.map(({spotId, spotPicture, spotName, location,  description})=>{
                    
                    return(
                        <div key={spotId} className="singleDestination" style={{padding:'5px'}}>
                            <div className="imageDiv">
                                <img src={spotPicture} alt={spotName} />
                            </div>
 
                            <div className="cardInfo">
                                <h4 className="spotName">{spotName}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{location}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <Link to={`/Spot/${encodeURIComponent(spotId)}`}><button className="btn flex">
                                    VIEW MORE
                                    <IoMdRadioButtonOn className='icon'/>
                                </button></Link>
                            </div>
                        </div>
                    )
                })
            }
 
            <p>More places to be added soon</p>
        </div>
    </section>
  )
}
 
export default TouristSpotHomePage