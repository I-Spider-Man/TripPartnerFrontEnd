import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import './TouristSpot.css'
import {fetchSpotBySpotName, fetch_spot_data, fetch_spots_by_id } from '../Files/TouristSpotDetails';
import Footer from '../Footer/Footer';
import Loading from '../LoadingComponents/Loading';
import { useEffect, useState } from 'react';
import GroupOrganizeForm from '../Group/GroupOrganizeForm';
import { useUser } from '../Auth/UserContext';
import GroupJoinPage from '../Group/GroupJoinPage';
import { Alert } from '@mui/material';
import AlertCom from '../AlertCom';
import { Galleria } from 'primereact/galleria';
function TouristSpot() {
  const {userDetails,participantData,organizerData}=useUser();
  const [spot,setSpots]=useState({});
  const [alert,setAlert]=useState(false);
  const [open, setOpen] = useState(false);
  const {spotName} = useParams();
  useEffect(()=>{
      const fetchData = async () => {
      try {
        const response1 = await fetchSpotBySpotName(spotName);
        setSpots(response1);
      } catch (error) {
        console.log("Error while fetching event data:", error);
      }
    };
    fetchData();
  },[spotName])

 const handleAlertClose=()=>{
  setAlert(false);
 }
  useEffect(()=>{
  console.log(spot);
  },[spot])


  const handleClickListItem = () => {
    if((!organizerData && !participantData)||((organizerData && organizerData.organizerStatus=="Free") && (participantData && participantData.participantStatus=="Free"))){
      setOpen(true);
    }
    else{
      setAlert(true);
    }
    
  };
  const handleClose = () => {
    setOpen(false);
    setOrganizeFormVisible(false);
  }
  const handleOrganizeClick = () => {
    if((!organizerData && !participantData)||((organizerData && organizerData.organizerStatus=="Free") && (participantData && participantData.participantStatus=="Free"))){
      setOrganizeFormVisible(true);
    }
    else{
      setAlert(true);
    }
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
const responsiveOptions = [
  {
      breakpoint: '100px',
      numVisible: 4
  },
  {
      breakpoint: '100px',
      numVisible: 3
  },
  {
      breakpoint: '100px',
      numVisible: 1
  }
];
const itemTemplate = (item) => {
  return <img src={item} alt={item} style={{ minWidth: '500px',height:'500px',objectFit:'cover' }} />
}

const thumbnailTemplate = (item) => {
  return <img src={item} alt={item} style={{height:'70px',width:'100%'}}/>
}
  return (
    <div className='front-page'>
       <div className='spot-page' style={{minHeight:'100vh'}}>
        <div className='content-container' style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100vh'}}>
          <div className='spot-content' style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
    {spot ? (
          <>
          <Galleria value={spot.spotPictureList} responsiveOptions={responsiveOptions} circular numVisible={3} autoPlay transitionInterval={3000} style={{maxWidth: '640px',}} item={itemTemplate} thumbnail={thumbnailTemplate}/>
          
          
          <div className='content-details'>
            <label><strong>SPOT NAME: </strong><h1>{spot.spotName}</h1></label>
            <label><strong>SPOT LOCATION:</strong> {spot.location}</label>
            <label><strong>SPOT DESCRIPTION:</strong> {spot.description}</label>
            <label><strong>PEOPLE COUNT:</strong> {getStatus()}</label>
            <div className='join-organize-button' >
              <button onClick={handleClickListItem} >Join</button>
              <button onClick={handleOrganizeClick} >Organize</button>
            </div>
            </div>
            <GroupJoinPage
          id="ringtone-menu"
          keepMounted
          eventName={null}
          spotName={spot.spotName}
          open={open}
          onClose={()=>handleClose()}
        />
          <GroupOrganizeForm id="ringtone-menu"
          keepMounted
          
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
    {alert && (
      <AlertCom onOpen={true} onClose={handleAlertClose} title={"Alert"} body={"You are already busy in other groups."}/>
    )}
    </div>
  );
}

export default TouristSpot;
