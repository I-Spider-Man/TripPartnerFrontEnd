import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './TouristSpot.css'
function TouristSpot() {
  return (
    <div className='home'>
    <div className='nav'><NavBar/></div>
    <div className='spot-content'>
      <TouristSpot/>
      </div>
    
    </div>
  )
}

export default TouristSpot
