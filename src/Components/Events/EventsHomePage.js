import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './EventsHome.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlineJoinInner } from 'react-icons/md'
import { IoMdRadioButtonOn } from 'react-icons/io'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Event_Details from '../Files/Event_Details'


const EventsHomePage = () => {
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
        <section className="main container section ">
            <div className='top-slideshow-div'>
                {/* <h2 className="w3-center">EVENTS TO REMEMBER</h2> */}

                <div className="w3-content w3-display-container">
                    <img className="mySlides" src="https://images.rove.me/w_1920,q_85/cgoll6or2skcn0fsauwg/quebec-quebec-city-summer-festival-festival-dete-de-quebec.jpg" style={{ height: '60vh', width: '100%' }} />
                    <img className="mySlides" src="https://wallpaperaccess.com/full/6133725.jpg" style={{ height: '60vh', width: '100%' }} />
                    <img className="mySlides" src="https://liveeventproductions.co.uk/wp-content/uploads/2018/01/event-production-services-live-event-productions-banner-image-4.jpg" style={{ height: '60vh', width: '100%' }} />
                    <img className="mySlides" src="https://wallpaperaccess.com/full/2489735.jpg" style={{ height: '60vh', width: '100%' }} />
                    <img className="mySlides" src="https://th.bing.com/th/id/R.57ea724bd5e16a37ccd1e54966169406?rik=gqlJFPll8guZCg&riu=http%3a%2f%2fwww.stagingdimensions.com.au%2fcontent%2fimages%2fthumbs%2f0001272_cotton-club-gatsby.jpeg&ehk=XFAQOwnAYOqxO45G704BTIak9sD6SIQQT7Uq9ZP9pFU%3d&risl=&pid=ImgRaw&r=0" style={{ height: '60vh', width: '100%' }} />
                    <img className="mySlides" src="https://wallpapercave.com/wp/wp7488400.jpg" style={{ height: '60vh', width: '100%' }} />
                    <img className="mySlides" src="https://s3-media1.fl.yelpcdn.com/bphoto/oPVG4wXUdpyYXfJ4jg5-Mw/o.jpg" style={{ height: '60vh', width: '100%' }} />
                    <img className="mySlides" src="https://www.jettext.net/wp-content/uploads/2021/11/Creamfields-10-Worlds-Wildest-Parties-Jet-Text-Blog.jpg" style={{ height: '60vh', width: '100%' }} />

                    <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>&#10094;</button>
                    <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>&#10095;</button>
                </div>
            </div>

            <div style={{ minHeight: '100vh' }}>

                <div className="secTitle" >
                    <h1 data-aos='fade-right' className="title">
                        Popular events ....
                    </h1>
                </div>

                <div className="secContent grid">
                    {
                        shuffledDetails.slice(0, 5).map(({ event_id, event_image1, event_image2, event_image3, event_image4, event_name, event_address, event_discription }) => {
                            const maxDescriptionLength = 110;
                            const truncatedDescription =
                                event_discription.length > maxDescriptionLength
                                    ? `${event_discription.substring(0, maxDescriptionLength)}...`
                                    : event_discription;
                            return (
                                <div key={event_id} className="singleDestination" style={{ padding: '25px' }}>
                                    {/* <div className="imageDiv">
                                        <img src={event_image1} alt={event_name} className='gallery-image' />
                                        <img src={event_image2} alt={event_name} className='gallery-image' />
                                        <img src={event_image3} alt={event_name} className='gallery-image' />
                                        <img src={event_image4} alt={event_name} className='gallery-image' />
                                    </div> */}

                                    <div className="slideshow-container">
                                        <div className="slideshow">
                                            <div className="slide">
                                                <img src={event_image1} alt={event_name} className='gallery-image' />
                                            </div>

                                            <div className="slide">
                                                <img src={event_image2} alt={event_name} className='gallery-image' />
                                            </div>

                                            <div className="slide">
                                                <img src={event_image3} alt={event_name} className='gallery-image' />
                                            </div>

                                            <div className="slide">
                                                <img src={event_image4} alt={event_name} className='gallery-image' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cardInfo" style={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center' }}>
                                        <h4 className="event_name">{event_name}</h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker style={{ fontSize: '50px' }} className='icon' />
                                            <span className="event_address">{event_address}</span>
                                        </span>

                                        <div className="desc">
                                            <p>{truncatedDescription}</p>
                                        </div>
                                        <Link to={`/Events/${encodeURIComponent(event_id)}`}><button className="btn flex">
                                            VIEW MORE
                                            {/* <IoMdRadioButtonOn className='icon' /> */}
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
                        Event_Details.map(({ event_id, event_image1, event_image2, event_image3, event_image4, event_name, event_address, event_discription }) => {
                            const maxDescriptionLength = 110;
                            const truncatedDescription =
                                event_discription.length > maxDescriptionLength
                                    ? `${event_discription.substring(0, maxDescriptionLength)}...`
                                    : event_discription;
                            return (
                                <div key={event_id} className="singleDestination" style={{ padding: '25px' }}>
                                    {/* <div className="imageDiv">
                                        <img src={event_image1} alt={event_name} className='gallery-image' />
                                        <img src={event_image2} alt={event_name} className='gallery-image' />
                                        <img src={event_image3} alt={event_name} className='gallery-image' />
                                        <img src={event_image4} alt={event_name} className='gallery-image' />
                                    </div> */}

                                    <div className="slideshow-container">
                                        <div className="slideshow">
                                            <div className="slide">
                                                <img src={event_image1} alt={event_name} className='gallery-image' />
                                            </div>

                                            <div className="slide">
                                                <img src={event_image2} alt={event_name} className='gallery-image' />
                                            </div>

                                            <div className="slide">
                                                <img src={event_image3} alt={event_name} className='gallery-image' />
                                            </div>

                                            <div className="slide">
                                                <img src={event_image4} alt={event_name} className='gallery-image' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="event_name">{event_name}</h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker style={{ fontSize: '50px' }} className='icon' />
                                            <span className="event_address">{event_address}</span>
                                        </span>

                                        <div className="desc">
                                            <p>{truncatedDescription}</p>
                                        </div>
                                        <Link to={`/Events/${encodeURIComponent(event_id)}`}><button className="btn flex">
                                            VIEW MORE
                                            {/* <IoMdRadioButtonOn className='icon' /> */}
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