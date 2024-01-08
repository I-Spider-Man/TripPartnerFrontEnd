import React from 'react'
import './main.css'
import img1 from '../../Assets/img-1.jpg'
import img2 from '../../Assets/img-2.jpg'
import img3 from '../../Assets/img-3.jpg'
import img4 from '../../Assets/img-4.jpg'
import img5 from '../../Assets/img-5.jpg'
import img7 from '../../Assets/img-7.jpg'
import img8 from '../../Assets/img-8.jpg'
import img9 from '../../Assets/img-9.jpg'
import img10 from '../../Assets/img-10.jpg'
import img11 from '../../Assets/img-11.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdOutlineJoinInner} from 'react-icons/md'
import {IoMdRadioButtonOn} from 'react-icons/io'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'COORG',
        location: 'Karnataka',
        grade: 'Nature and Wildlife',
        fees: 'Rs2700',
        description: 'Coorg, officially known as Kodagu, is a picturesque district located in the southwestern part of the Indian state of Karnataka. It is known for its lush green landscapes, coffee plantations, mist-covered hills, and diverse flora and fauna.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'KODAIKANAL',
        location: 'Tamil Nadu',
        grade: 'Nature and Wildlife',
        fees: 'Rs3100',
        description: 'Kodaikanal is a popular hill station located in the Dindigul district of the southern Indian state of Tamil Nadu. Known for its pleasant climate, lush greenery, and scenic beauty, Kodaikanal is a favorite destination for tourists seeking a peaceful and rejuvenating getaway.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'OOTY',
        location: 'Tamil Nadu',
        grade: 'Mountains and Wildlife',
        fees: 'Rs2500',
        description: 'Ooty, officially known as Udagamandalam, is a popular hill station situated in the Nilgiri Hills of the Indian state of Tamil Nadu. It is renowned for its picturesque landscapes, pleasant climate, and colonial charm.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'GOA',
        location: 'Goa',
        grade: 'Beaches and Resorts',
        fees: 'Rs4500',
        description: 'Goa is a popular tourist destination located on the western coast of India, known for its beautiful beaches, vibrant nightlife, rich cultural heritage, and diverse cuisine.'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'MANGALORE',
        location: 'Karnataka',
        grade: 'Beaches and Temples',
        fees: 'Rs2200',
        description: 'Mangalore, officially known as Mangaluru, is a port city located in the Dakshina Kannada district of the Indian state of Karnataka.'
    },

    // {
    //     id: 6,
    //     imgSrc: img7,
        // destTitle: 'MUNNAR',
        // location: 'Kerela',
        // grade: 'Peaks and Waterfalls',
        // fees: 'Rs3000',
        // description: 'Munnar is a picturesque hill station located in the Western Ghats mountain range in the Indian state of Kerala. Known for its lush tea plantations, misty mountains, and pleasant climate, Munnar is a popular destination for nature lovers and those seeking a tranquil retreat'
    // }
]

const Data2 = [
    {
        id: 1,
        imgSrc: img7,
        destTitle: 'ARAKU VALLEY',
        location: 'Andhra Pradesh',
        grade: 'Hill Sation and Valley',
        fees: 'Rs2700',
        description: 'Araku Valley is a scenic hill station and valley located in the Eastern Ghats of the Indian state of Andhra Pradesh. Known for its lush greenery, coffee plantations, tribal culture, and pleasant climate, Araku Valley is a popular tourist destination.'
    },

    {
        id: 2,
        imgSrc: img8,
        destTitle: 'DHANUSHKODI',
        location: 'Tamil Nadu',
        grade: 'Nature and History',
        fees: 'Rs3100',
        description: 'Dhanushkodi is a small town located at the southeastern tip of Pamban Island in the state of Tamil Nadu, India. It is known for its scenic beauty and historical significance.'
    },

    {
        id: 3,
        imgSrc: img9,
        destTitle: 'HAMPI',
        location: 'Karnataka',
        grade: 'Historical Site',
        fees: 'Rs2500',
        description: 'Hampi, located in the southern state of Karnataka, India, is a UNESCO World Heritage Site and an archaeological and historical treasure. The city was once the capital of the Vijayanagara Empire, one of the greatest empires in Indian history. Today, Hampi is renowned for its captivating ruins, ancient temples, and stunning landscapes.'
    },

    {
        id: 4,
        imgSrc: img10,
        destTitle: 'SKANDAGIRI HILLS',
        location: 'Karnataka',
        grade: 'Nature and Mountains',
        fees: 'Rs4500',
        description: 'Skandagiri, also known as Kalavara Durga, is a mountain fortress located near Chikballapur in the Indian state of Karnataka. It is approximately 70 kilometers from Bangalore, making it a popular trekking destination for adventure enthusiasts.'
    },

    {
        id: 5,
        imgSrc: img11,
        destTitle: 'PONMUDI',
        location: 'Kerela',
        grade: 'Hills and Landscapes',
        fees: 'Rs2200',
        description: 'Ponmudi is a popular hill station located in the Western Ghats mountain range in the Indian state of Kerala. Known for its lush green landscapes, tea gardens, and misty hills, Ponmudi is a serene retreat for nature lovers.'
    },

    // {
    //     id: 6,
    //     imgSrc: img7,
        // destTitle: 'MUNNAR',
        // location: 'Kerela',
        // grade: 'Peaks and Waterfalls',
        // fees: 'Rs3000',
        // description: 'Munnar is a picturesque hill station located in the Western Ghats mountain range in the Indian state of Kerala. Known for its lush tea plantations, misty mountains, and pleasant climate, Munnar is a popular destination for nature lovers and those seeking a tranquil retreat'
    // }
]

const Main = () => {
  return (
    <section className="main container section">
        <div className="secTitle">
            <h1 data-aos='fade-right' className="title">
                Most Visited Destinations...
            </h1>
        </div>

        <div className="secContent grid">
            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    JOIN 
                                    <MdOutlineJoinInner className='icon'/>
                                </button>
                                <button className="btn flex">
                                    ORGANISE
                                    <IoMdRadioButtonOn className='icon'/>
                                </button>
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
                Less Explored Places...
            </h1>
        </div>
        <div className="secContent grid">
            {
                Data2.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className='icon' />
                                <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    JOIN 
                                    <MdOutlineJoinInner className='icon'/>
                                </button>
                                <button className="btn flex">
                                    ORGANISE
                                    <IoMdRadioButtonOn className='icon'/>
                                </button>
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

export default Main