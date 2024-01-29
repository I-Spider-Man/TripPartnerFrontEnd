import React, { useState, useEffect, createRef } from 'react'
import vid from './pexels_videos_2096549 (1080p).mp4'
import './Home.css'
import EventComponent from '../../Components/Events/EventComponent'
import TouristSpotComponent from '../../Components/TouristSpots/TouristSpotComponent'
import Event_Details from '../../Components/Files/Event_Details'
import Tourist_Spot_Details from '../../Components/Files/TouristSpotDetails'
import { Link } from 'react-router-dom'
import FeaturedPost from '../../Components/FeaturedPost'
function Home() {
  const [profileAva, setProfileAva] = useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg");
  const setProfile = (value) => {
    setProfileAva(value);
  };
  const post = {
    event_id: 1,
    event_name: "Candle Light India",
    event_happening: "6th JAN, 1AM",
    event_discription: "Candlelight India is a one of a kind immersive concert experience. It is curated to evoke a sense of wonder in concert goers by taking you on a magical journey where music and ambience converge to",
    event_address: "Good Shepherd Auditorium\nMuseum Rd, Opp Patricks Church, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka",
    event_image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00379779-wunhsyzzrr-landscape.jpg",
    image_alt: "Candle Light India A Tribute To ARR"
  };
  const [event, setEvent] = useState({});
  const [spot, setSpot] = useState({});
  const eventDetails = Event_Details.slice(0, 4);
  const spotDetails = Tourist_Spot_Details.slice(0, 4);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [currentSpot, setCurrentSpot] = useState(0);
  useEffect(() => {
    setEvent(eventDetails[currentEvent]);
  }, [currentEvent]);
  useEffect(() => {
    setSpot(spotDetails[currentSpot])
  }, [currentSpot])

  const nextEvent = () => {
    setCurrentEvent(currentEvent + 1);
  };
  const nextSpot = () => {
    setCurrentSpot(currentSpot + 1);
  }
  const prevEvent = () => {
    setCurrentEvent(currentEvent - 1);
  };
  const prevSpot = () => {
    setCurrentSpot(currentSpot - 1)
  }
  return (
    <div className='home' style={{}}>
      <div className='video-container' style={{ position: 'relative', width: '100%', height: '100%' }}>
        <video src={vid} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '3%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0.5,0.5,1))',
          }}
        />
      </div>
      <div className='header-text'>
        <div className='header-content'>
          <p className='awesome'>welcome to trip partner</p>
        </div>
      </div>

      <div className='quote-div'>
          <h1 style={{ fontSize: '4rem', marginBottom: '25px' }}><pre>Why choose Trip Partner ?</pre></h1>
          <h3><pre>“There is an unspoken bond you make with the friends you travel with.”</pre>
            <pre>– Kristen Sarah</pre></h3>
      </div>

      <div>
        <div className='events-container' style={{ backgroundColor: '#5C8374', padding: '50px' }}>
          <div className='container' style={{}}>
            <Link to='/EventsHomePage' style={{ textDecoration: 'none' }}>
              <h3>Events</h3>
            </Link>
            <p>Unlock the magic of travel! Immerse yourself in vibrant events at breathtaking tourist spots. From cultural festivals to culinary delights, join us for unforgettable experiences that go beyond sightseeing. Embrace the journey, forge global connections, and make every moment extraordinary. Explore. Connect. Celebrate.</p>
          </div>
          <div className="slider-container" style={{ padding: '20px' }}>
            {currentEvent !== 0 && <button onClick={prevEvent} style={{ marginBottom: '0px', color: 'white' }}>Prev</button>}
            <div className="slider">
              <FeaturedPost key={post.event_id} post={post} />
            </div>
            {(currentEvent < eventDetails.length - 1) && <button onClick={nextEvent} style={{ color: 'white' }}>Next</button>}
            {/* <Link to='/EventsHomePage' style={{ textDecoration: 'none' }}>
              <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', textTransform: 'uppercase', backgroundColor: 'beige', color: 'black', borderRadius: '5px' }}><div style={{ marginRight: '5px' }}>View More</div>
              </button>
            </Link> */}
          </div>
          {/* <Link to='/EventsHomePage' style={{ textDecoration: 'none'}}>
                <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column',textTransform:'uppercase',backgroundColor:'black',color:'whitesmoke' }}><div style={{ marginRight: '5px' }}>v</div>
              <div style={{ marginRight: '5px' }}>i</div>
              <div style={{ marginRight: '5px' }}>e</div>
              <div style={{ marginRight: '5px' }}>w</div>
              <br />
              <div>m</div>
              <div>o</div>
              <div>r</div>
              <div>e</div></button>
            </Link> */}
        </div>
      </div>

      <div className='quote-div'>
        <h3><pre>“We have nothing to lose and a world to see.”</pre>
          <pre>– Rainie Rainie Navarro</pre></h3>
      </div>

      <div className='spot-container' style={{ background: '#A87C7C', padding: '60px' }}>
        {/* <div className='container'>
          <h3>Popular Spots</h3>
          <p>Discover the allure of tourist spots like never before! Join us in celebrating the unique charm of each destination through captivating events. From cultural festivals to scenic adventures, these experiences redefine your travel. Embrace the extraordinary – explore, indulge, and make memories that last a lifetime. Your journey begins here.</p>
        </div> */}
        <div className="slider-container">
          {currentSpot !== 0 && <button onClick={prevSpot} style={{ marginBottom: '25px', color: 'white' }}>Prev</button>}
          <div className="slider">
            <TouristSpotComponent spotId={spot.spot_id} spotName={spot.spot_name} spotImage={spot.spot_image1} spotDescription={spot.spot_description} spotAlt={spot.spot_name} />
          </div>
          {(currentSpot < spotDetails.length - 1) && <button onClick={nextSpot} style={{ color: 'white', marginTop: '25px' }}>Next</button>}
          {/* <Link to='/TouristHomePage' style={{ textDecoration: 'none' }}>
            <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', textTransform: 'uppercase', backgroundColor: 'beige', color: 'black', borderRadius: '5px' }}><div style={{ marginRight: '5px' }}>View More</div>
            </button>
          </Link> */}
        </div>
        <div className='container'>
          <Link to='/TouristHomePage' style={{ textDecoration: 'none' }}>
            <h3 style={{ marginLeft: '50%' }}>Popular Spots</h3>
          </Link>
          <p>Discover the allure of tourist spots like never before! Join us in celebrating the unique charm of each destination through captivating events. From cultural festivals to scenic adventures, these experiences redefine your travel. Embrace the extraordinary – explore, indulge, and make memories that last a lifetime. Your journey begins here.</p>
        </div>
        <div className='popular-hotspot-container'>
          {/* <Link to='/TouristHomePage' style={{ textDecoration: 'none'}}>
              <button style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column',textTransform:'uppercase',backgroundColor:'black',color:'whitesmoke' }}><div style={{ marginRight: '5px' }}>view more</div> */}
          {/* <div style={{ marginRight: '5px' }}>i</div>
                <div style={{ marginRight: '5px' }}>e</div>
                <div style={{ marginRight: '5px' }}>w</div>
                <br />
                <div>m</div>
                <div>o</div>
                <div>r</div>
                <div>e</div> */}
          {/* </button>
            </Link> */}
        </div>
      </div>

      <div className='quote-div'>
        <h3><pre>“When unfamiliar crowd becomes your travel partner.”</pre>
          <pre>– Suyash Garge</pre></h3>
      </div>

      <div class="slider-last">
        <div class='slider-heading-last'><h1>Incredible India</h1></div>
        <div class="slide-track-last">
          <div class="slide-last">
            <img src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/07/tajmahal-1.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.LIB385Eg7a9uRoHazIwwBAHaE7?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.AmOJoZoHesgcQ1GpEvOaGwHaE8?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.ou3C0cWxQOdIKjDavzIqaAHaFj?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.UKFMv0Gxr5-ZK2cTCG65igHaE7?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.PQhPjEd8ZfeyHqOvFmJyYAHaE7?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.n5gPgDohYAsMaJI1_GaUJwHaDl?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.Py3zMGru8mXoaFo8YmUjcAHaE0?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.pXP5NEbASM00CfLN4fYRRQHaEv?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.yWx0jEN-Kbe7f5oWYhdFigHaE7?w=640&h=426&rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.3H6Tc08X_vDP1koalgF1UQHaE0?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://www.revv.co.in/blogs/wp-content/uploads/2020/03/best-road-trips-in-india.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2020/01/North-East-Tourism.jpg?w=800&ssl=1" height="100" width="250" alt="" />
          </div>
          <div class="slide-last">
            <img src="https://th.bing.com/th/id/OIP.0Pd2QojEeQCnxzWylnA_pAAAAA?rs=1&pid=ImgDetMain" height="100" width="250" alt="" />
          </div>
        </div>
      </div>

      {/* <div className='quote-div'>
        <h3><pre> “The goal is to die with memories not dreams.” – Anonymous</pre></h3>
      </div> */}

      <div className="testimonial-outermost-container">
        <h3>Our Testimonials</h3>
        <h1 class='testimonial-heading-last'>What People are Saying</h1>
        <div className='testimonial-container'>
          <div className="testimonial-box">
            <div className="testimonial">
              <i className="fas fa-quote-right"></i>
              <span className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos blanditiis similique quod quaerat et recusandae tempora. Animi error quaerat labore cum! Ratione veritatis culpa illo quo molestiae minima repudiandae.</span>
              <div className="testimonial-user">
                <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user-img" className="user-img" />
                <div className="testimonial-user-info">
                  <span className="testimonial-user-name">Username</span>
                  <div className="testimonial-user-job-details">
                    <span className="testimonial-user-job"></span>
                    {/* <div className="testimonial-line"></div>
                    <span className="testimonial-user-post">Post</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="testimonial">
              <i className="fas fa-quote-right"></i>
              <span className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos blanditiis similique quod quaerat et recusandae tempora. Animi error quaerat labore cum! Ratione veritatis culpa illo quo molestiae minima repudiandae.</span>
              <div className="testimonial-user">
                <img src="https://th.bing.com/th?q=Worship+Images+HD&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="user-img" className="user-img" />
                <div className="testimonial-user-info">
                  <span className="testimonial-user-name">Username</span>
                  <div className="testimonial-user-job-details">
                    <span className="testimonial-user-job"></span>
                    {/* <div className="testimonial-line"></div>
                    <span className="testimonial-user-post">Post</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="testimonial">
              <i className="fas fa-quote-right"></i>
              <span className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos blanditiis similique quod quaerat et recusandae tempora. Animi error quaerat labore cum! Ratione veritatis culpa illo quo molestiae minima repudiandae.</span>
              <div className="testimonial-user">
                <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user-img" className="user-img" />
                <div className="testimonial-user-info">
                  <span className="testimonial-user-name">Username</span>
                  <div className="testimonial-user-job-details">
                    <span className="testimonial-user-job"></span>
                    {/* <div className="testimonial-line"></div>
                    <span className="testimonial-user-post">Post</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="testimonial-support">
            <a href="https://twitter.com/DevLoop01" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            <a href="https://codepen.io/dev_loop/" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
          </div> */}
        </div>
      </div>
    </div>

  )
}
export default Home