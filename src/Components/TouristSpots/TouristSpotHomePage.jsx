import React, { useState, useEffect } from 'react'
import './TouristSpotHomePage.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlineJoinInner } from 'react-icons/md'
import { IoMdRadioButtonOn } from 'react-icons/io'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Tourist_Spot_Details from '../Files/TouristSpotDetails'
import { Link } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'
import { LineWeight } from '@mui/icons-material'

const TouristSpotHomePage = () => {

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

    const backgroundImageStyle = {
        backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kwnos-iv-16785282+(1)+(1).jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%', // Adjust this based on your design
        margin: 0,       // Remove default margin
        padding: 0,      // Remove default padding
    };
    function shuffleArray(array) {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    const shuffledDetails = shuffleArray(Tourist_Spot_Details.slice(0, 5));

    return (
        <section className="main container section" >
            <div className='top-slideshow-div'>
                {/* <h2 className="w3-center"></h2> */}

                <div className="w3-content w3-display-container">
                    <img className="mySlides" src="https://th.bing.com/th/id/R.17165b6e9cad01442913960b0ed18343?rik=wouQPnVfb8LrWA&riu=http%3a%2f%2fwww.japjitravel.com%2fblog%2fwp-content%2fuploads%2f2017%2f04%2fTaj-Mahal.jpg&ehk=isNV1lcW5FH7SxoGKQGfnSg03874LdT%2fIga%2fiCV%2bBtY%3d&risl=&pid=ImgRaw&r=0" style={{ height:'60vh', width: '100%' }} />
                    <img className="mySlides" src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/818d8b01-8844-4ac2-8ecb-72a40fa7ec0b-Temple-Amritsar-Elena-Odareeva.jpg" style={{ height:'60vh', width: '100%' }} />
                    <img className="mySlides" src="https://www.nortonrosefulbright.com/-/media/images/nrf/nrfweb/knowledge/publications/global-fdi/india.jpeg?la=en-hk&revision=&hash=CAF3A0694161AA8979D726C8BBB908E3AD5F6A1C" style={{ height:'60vh', width: '100%' }} />
                    <img className="mySlides" src="https://tripnxt.com/blog/wp-content/uploads/2020/02/TripNxt-Varanasi-1536x1021.jpg" style={{ height:'60vh', width: '100%' }} />
                    <img className="mySlides" src="https://wallpapercave.com/wp/AtzSnEY.jpg" style={{ height:'60vh', width: '100%' }} />
                    <img className="mySlides" src="https://wallpaperbat.com/img/332681-wallpaper-river-home-india-image-for-desktop-section-gorod.jpg" style={{ height:'60vh', width: '100%' }} />
                    <img className="mySlides" src="https://th.bing.com/th/id/R.40f45706c1b0176ca0ee696aa4034942?rik=l5%2fk9d4ilZZLzw&riu=http%3a%2f%2fd27k8xmh3cuzik.cloudfront.net%2fwp-content%2fuploads%2f2015%2f07%2fNubra-Valley-in-Ladakh.jpg&ehk=UjPdINnuDigww%2fz6qr%2fWP2qdQKDkYilxv9CRJT0anMs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" style={{ height:'60vh', width: '100%' }} />
                    <img className="mySlides" src="https://images.yourstory.com/cs/wordpress/2016/03/yourstory-delhigovt-incubation.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" style={{ height:'60vh', width: '100%' }} />

                    <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>&#10094;</button>
                    <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>&#10095;</button>
                </div>
            </div>


            <div className="secTitle">
                <h1 data-aos='fade-right' className="title">
                    Most Visited Destinations...
                </h1>
            </div>

            <div className="secContent grid">
                {
                    shuffledDetails.slice(0, 5).map(({ spot_id, spot_image1, spot_image2, spot_image3, spot_image4, spot_name, spot_address, grade, fees, spot_description }) => {
                        const maxDescriptionLength = 110;
                        const truncatedDescription =
                            spot_description.length > maxDescriptionLength
                                ? `${spot_description.substring(0, maxDescriptionLength)}...`
                                : spot_description;
                        return (

                            <div key={spot_id} className="singleDestination" style={{ padding: '25px' }}>
                                {/* <div className="imageDiv slideshow">
                                    <img src={spot_image1} alt={spot_name} className='gallery-image' />
                                    <img src={spot_image2} alt={spot_name} className='gallery-image' />
                                    <img src={spot_image3} alt={spot_name} className='gallery-image' />
                                    <img src={spot_image4} alt={spot_name} className='gallery-image' />
                                </div> */}

                                <div className="slideshow-container">
                                    <div className="slideshow">
                                        <div className="slide">
                                            <img src={spot_image1} alt={spot_name} className='gallery-image' />
                                        </div>

                                        <div className="slide">
                                            <img src={spot_image2} alt={spot_name} className='gallery-image' />
                                        </div>

                                        <div className="slide">
                                            <img src={spot_image3} alt={spot_name} className='gallery-image' />
                                        </div>

                                        <div className="slide">
                                            <img src={spot_image4} alt={spot_name} className='gallery-image' />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="imageDiv slideshow">
                                    <img src={spot_image1} alt={spot_name} className="gallery-image" />
                                    <img src={spot_image2} alt={spot_name} className="gallery-image" />
                                    <img src={spot_image3} alt={spot_name} className="gallery-image" />
                                    <img src={spot_image4} alt={spot_name} className="gallery-image" />
                                </div> */}

                                <div className="cardInfo" style={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center' }}>
                                    <h4 className="spot_name">{spot_name}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker id='location-icon' className='icon' />
                                        <span className="spot_address">{spot_address}</span>
                                    </span>

                                    <div className="desc">
                                        <p>{truncatedDescription}</p>
                                    </div>
                                    <Link to={`/Spot/${encodeURIComponent(spot_id)}`}><button className="btn flex">
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
                    All places .....
                </h1>
            </div>
            <div className="secContent grid">
                {
                    Tourist_Spot_Details.map(({ spot_id, spot_image1, spot_image2, spot_image3, spot_image4, spot_name, spot_address, spot_description }) => {
                        const maxDescriptionLength = 110;
                        const truncatedDescription =
                            spot_description.length > maxDescriptionLength
                                ? `${spot_description.substring(0, maxDescriptionLength)}...`
                                : spot_description;
                        return (
                            <div key={spot_id} className="singleDestination" style={{ padding: '25px' }}>
                                {/* <div className="imageDiv slideshow">
                                    <img src={spot_image1} alt={spot_name} className='gallery-image'/>
                                    <img src={spot_image2} alt={spot_name} className='gallery-image'/>
                                    <img src={spot_image3} alt={spot_name} className='gallery-image'/>
                                    <img src={spot_image4} alt={spot_name} className='gallery-image'/>
                                </div> */}

                                <div className="slideshow-container">
                                    <div className="slideshow">
                                        <div className="slide">
                                            <img src={spot_image1} alt={spot_name} className='gallery-image' />
                                        </div>

                                        <div className="slide">
                                            <img src={spot_image2} alt={spot_name} className='gallery-image' />
                                        </div>

                                        <div className="slide">
                                            <img src={spot_image3} alt={spot_name} className='gallery-image' />
                                        </div>

                                        <div className="slide">
                                            <img src={spot_image4} alt={spot_name} className='gallery-image' />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="imageDiv slideshow">
                                    <img src={spot_image1} alt={spot_name} className="gallery-image" />
                                    <img src={spot_image2} alt={spot_name} className="gallery-image" />
                                    <img src={spot_image3} alt={spot_name} className="gallery-image" />
                                    <img src={spot_image4} alt={spot_name} className="gallery-image" />
                                </div> */}

                                <div className="cardInfo">
                                    <h4 className="spot_name">{spot_name}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker id='location-icon' className='icon' />
                                        <span className="spot_address">{spot_address}</span>
                                    </span>

                                    <div className="desc">
                                        <p>{truncatedDescription}</p>
                                    </div>
                                    <Link to={`/Spot/${encodeURIComponent(spot_id)}`}><button className="btn flex">
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
        </section>
    )
}

export default TouristSpotHomePage