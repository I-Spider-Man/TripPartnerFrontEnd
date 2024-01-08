import React from 'react'
//import Logo from 'C://Users//alfredeins_gabriel//Desktop//React//Trip-Partner-front-end//main-front-end//src//Assests//Modules.png'
import '../styleguide.css'
import './TouristSpotComponent.css'
import { Link } from 'react-router-dom'
function TouristSpotComponent({spotId,spotName,spotDescription,spotImage,spotAlt}) {
  const maxDescriptionLength = 130;

  // Truncate the description if it exceeds the maximum length
  const truncatedDescription =
    spotDescription.length > maxDescriptionLength
      ? `${spotDescription.substring(0, maxDescriptionLength)}...`
      : spotDescription;
      
  return (
    <div >
      <div className="spot-card">
  <img src={spotImage} alt={spotAlt}/>
  <div className="spot-card__content">
    <p className="spot-card__title">{spotName}</p>
    <p className="spot-card__description">{truncatedDescription}</p>
    <Link to={`/Spot/${encodeURIComponent(spotId)}`}>
      <button className="spot-card__button"><span className='view-more'>View More!</span></button>
    </Link>
  </div>
</div>

    </div> 
  )
}

export default TouristSpotComponent
