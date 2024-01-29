import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './TouristSpot.css'
import {fetch_spot_data, fetch_spots_by_id } from '../Files/TouristSpotDetails';
import Footer from '../Footer/Footer';
import Loading from '../LoadingComponents/Loading';
import { useEffect, useState } from 'react';
import EventsJoinPage from '../Events/EventsJoinPage';
import GroupOrganizeForm from '../Group/GroupOrganizeForm';
import { useUser } from '../Auth/UserContext';
function TouristSpot() {
  const {userDetails}=useUser();
  const [spot,setSpots]=useState({});
  const [open, setOpen] = useState(false);
  const {spotId} = useParams();
  useEffect(()=>{
      const fetchData = async () => {
      try {
        const response1 = await fetch_spots_by_id(spotId);
        setSpots(response1);
      } catch (error) {
        console.log("Error while fetching event data:", error);
      }
    };
    fetchData();
  },[spotId])


  useEffect(()=>{
  console.log(spot);
  },[spot])


  const handleClickListItem = () => {
    if(userDetails){
      return alert("need to login");
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOrganizeFormVisible(false);
  }
  const handleOrganizeClick = () => {
    if(userDetails){
      return alert("need to login");
    }
    setOrganizeFormVisible(true);
  };
  const [organizeFormVisible, setOrganizeFormVisible] = useState(false);

const backgroundImageStyle = {
  backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kwnos-iv-16785282+(1)+(1).jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width:'100%', // Adjust this based on your design
  margin: 0,       // Remove default margin
  padding: 0,      // Remove default padding
};
const getStatus = () => {
  const lowThreshold = 50;
  const mediumThreshold = 100;

  if (spot.peopleCount < lowThreshold) {
    return 'Low';
  } else if (spot.peopleCount < mediumThreshold) {
    return 'Medium';
  } else {
    return 'High';
  }
};
const handleOrganizeSubmit = (formData) => {
  console.log('Organize Form Data:', formData);
  setOrganizeFormVisible(false);
};
  return (
    <div className='front-page' style={backgroundImageStyle}>
       <div className='spot-page' style={{minHeight:'100vh'}}>
        <div className='content-container' style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100vh'}}>
          <div className='spot-content' style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
    {spot ? (
          <><img src={spot.spotPicture} alt={spot.spotName} />
          <div className='content-details'>
            <label><strong>SPOT NAME: </strong><h1>{spot.spotName}</h1></label>
            <label><strong>SPOT LOCATION:</strong> {spot.location}</label>
            <label><strong>SPOT DESCRIPTION:</strong> {spot.description}</label>
            <label><strong>PEOPLE COUNT:</strong> {getStatus()}</label>
            <div className='join-organize-button'>
              <button onClick={handleClickListItem}>Join</button>
              <button onClick={handleOrganizeClick}>Organize</button>
            </div>
            </div><EventsJoinPage
          id="ringtone-menu"
          keepMounted
          eventName={null}
          spotName={spot.spotName}
          userId={userDetails.userId}
          open={open}
          onClose={()=>handleClose()}
        />
          <GroupOrganizeForm id="ringtone-menu"
          keepMounted
          userId={userDetails.userId}
          spotName={spot.spotName}
          open={organizeFormVisible}
          onClose={()=>handleClose()} onSubmit={()=>handleOrganizeSubmit()} />
          </> 
        ) : (
          <Loading/>
        )}
    </div>
        </div>
        
    </div>
    </div>
  );
}

export default TouristSpot;
