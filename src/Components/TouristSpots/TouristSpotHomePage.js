// import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
// import axios from 'axios';
import './TouristSpotsHomePage.css';
import TouristSpotComponent from './TouristSpotComponent';
import Tourist_Spot_Details from '../Files/TouristSpotDetails';
// import Loading from '../LoadingComponents/Loading';
function TouristSpotHomePage() {
  return (
    <div className='home'>
      <div className='nav-container'>
        <NavBar/>
      </div>
      <div className='hotspot-container'>
        {Tourist_Spot_Details.map(spot=>
        (<TouristSpotComponent
          spotId={spot.spot_id}
          spotName={spot.spot_name}
          spotImage={spot.spot_image}
          spotDescription={spot.spot_description}
          spotAlt={spot.image_alt}/>))}
      </div>
    </div>
  )
}

export default TouristSpotHomePage;