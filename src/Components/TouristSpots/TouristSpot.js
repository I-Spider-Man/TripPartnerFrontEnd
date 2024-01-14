import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './TouristSpot.css'
import TouristSpotDetails from '../Files/TouristSpotDetails';
import Footer from '../Footer/Footer';
import Loading from '../LoadingComponents/Loading';
import { useState } from 'react';
import SpotsJoinPage from './SpotsJoinPage';
function TouristSpot() {
  const [open, setOpen] = useState(false);
  const handleClickListItem = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const {spotId} = useParams();
const spot=TouristSpotDetails.find(detail=>String(detail.spot_id)===String(spotId));
const backgroundImageStyle = {
  backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kwnos-iv-16785282+(1)+(1).jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%', // Adjust this based on your design
  margin: 0,       // Remove default margin
  padding: 0,      // Remove default padding
};
  return (
    <div className='front-page' style={backgroundImageStyle}>
       <div className='spot-page' style={{minHeight:'100vh'}}>
        <div className='content-container' style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100vh'}}>
          <div className='spot-content' style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
    {spot ? (
          <><img src={spot.spot_image} alt={spot.spot_alt} />
          <div className='content-details'>
            <label><strong>SPOT NAME: </strong><h1>{spot.spot_name}</h1></label>
            <label><strong>SPOT LOCATION:</strong> {spot.spot_address}</label>
            <label><strong>SPOT DESCRIPTION:</strong> {spot.spot_description}</label>
            
            <div className='join-organize-button'>
              <button onClick={handleClickListItem}>Join</button>
              <button>Organize</button>
            </div>
            </div>
          </> 
        ) : (
          <Loading/>
        )}
    </div>
    <SpotsJoinPage
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
        />
        </div>
    
    </div>
    </div>
  );
}

export default TouristSpot;
