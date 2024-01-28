import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../styleguide.css';
import LoginPage from '../LoginPage/LoginPage';
import SearchBar from '../SearchBar/SearchBar';
import Dialog from '@mui/material/Dialog';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function NavBar({onUserIdChange}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [visible, setvisible] = useState(false);
  const [login,setLogin]=useState(false);
  const [userId,setUserId]=useState(0);
  const open = Boolean(anchorEl);
  const [profileAva,setProfileAva]=useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const log = () => {
    setvisible(!visible);
  }; 
  const handleClose=()=>{
    setvisible(false);
  }
  const childValue=(value)=>{
    console.log(value);
    setUserId(value.userId);
    setProfileAva(value.userProfile);
    setLogin(true);
    onUserIdChange(value.userId);
  };
  return (
    <React.Fragment>
      <div className='nav-bar'>
      <div className='Trip-Logo-Container' style={{display:'flex',alignItems:'center'}}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img className='Trip-Logo' src="https://trip-partner.s3.eu-north-1.amazonaws.com/MicrosoftTeams-image+(5).png"/>
        </Link>
      </div>
      <div className='search-container' >
          <SearchBar/>
        </div>
      <div className='menu-list' style={{justifyContent:'center',alignItems:'center'}}>
        <div>
          <Link to='/EventsHomePage'><span>Events</span></Link>
        </div>
        <div><Link to='/TouristHomePage'><span>Tourist Spots</span></Link></div>
        
        <div className='login-signup-outline' onClick={(event)=>{login ? handleClick(event):log()}} style={{
              backgroundColor: 'white',
              backgroundPosition: 'center',
              margin: 0,
              padding: 0,
              cursor:'pointer'
      }}><img src={profileAva} style={{
      objectFit:'scale-down'}}></img> </div>
      </div>
      {!login ? <Dialog
        open={visible}
        TransitionComponent={Transition}
        onClose={handleClose}
        sx={{ '& .MuiDialog-paper': { width: 'auto', minHeight: 'auto' ,padding:'0px 0px', borderRadius:'15px',overflow:'hidden'} }}
      >
        <LoginPage onClose={()=>{handleClose()}} onReturn={childValue}/>
      </Dialog>
      :
      <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >
        <Link to={`/profile/${userId}`}>Profile</Link></MenuItem>
        <MenuItem onClick={handleClose1}>My account</MenuItem>
        <MenuItem onClick={()=>{window.location.reload()}} >Logout</MenuItem>
      </Menu>
      </>}
      
    </div>
    </React.Fragment>
    
  );
}

export default NavBar;
