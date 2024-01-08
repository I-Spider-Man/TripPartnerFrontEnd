import React from 'react'
// import Logo from 'C://Users//alfredeins_gabriel//Desktop//React//Trip-Partner-front-end//main-front-end//src//Assests//logo.svg'
import './EventComponent.css'
import '../styleguide.css'
import { Link } from 'react-router-dom'
function Events({eventId,eventName,eventDiscription,eventImage, alt}) {
  const maxDescriptionLength = 130;

  // Truncate the description if it exceeds the maximum length
  const truncatedDescription =
    eventDiscription.length > maxDescriptionLength
      ? `${eventDiscription.substring(0, maxDescriptionLength)}...`
      : eventDiscription;
      
  return (
    <div> <div className="event-card">
  <img src={eventImage} alt={alt}/>
  <div className="event-card__content">
    <p className="event-card__title">{eventName}</p>
    <p className="event-card__description">{truncatedDescription}</p>
    <Link to={`/Events/${encodeURIComponent(eventId)}`}><button class="event-card__button"><span className='view-more'>View More!</span></button></Link>
  </div>
</div></div>
   

  )
}

export default Events
