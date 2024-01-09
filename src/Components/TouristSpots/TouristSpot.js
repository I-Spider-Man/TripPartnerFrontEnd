import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './TouristSpot.css'
import TouristSpotDetails from '../Files/TouristSpotDetails';
import Footer from '../Footer/Footer';
import Loading from '../LoadingComponents/Loading';
function TouristSpot() {
  const {spotId} = useParams();
const spot=TouristSpotDetails.find(detail=>String(detail.spot_id)===String(spotId));
const backgroundImageStyle = {
  backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kwnos-iv-16785282+(1)+(1).jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', // Adjust this based on your design
  margin: 0,       // Remove default margin
  padding: 0,      // Remove default padding
};
  return (
    <div className='front-page' style={backgroundImageStyle}>
    <div className='spot-page'>
    <div className='nav-container'><NavBar/></div>
    <div className='spot-content' style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center', marginTop:'15%'}}>
    {spot ? (
          <><img src={spot.spot_image} alt={spot.spot_alt} />
          <div className='content-details'>
            <div><label>spot name: <h1>{spot.spot_name}</h1></label>
            <label>spot happening on: {spot.spot_happening}</label>
            <label>spot description: {spot.spot_description}</label>
            <label>spot address: {spot.spot_address}</label>
            <div className='join-organize-button'>
              <button>Join</button>
              <button>Organize</button>
            </div></div>
            </div>
          </> 
        ) : (
          <Loading/>
        )}
    </div>
    </div><div>
      <Footer/>
    </div>
    </div>
  );
}

export default TouristSpot;
