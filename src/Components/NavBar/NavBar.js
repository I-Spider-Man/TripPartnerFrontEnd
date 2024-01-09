import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../styleguide.css';
import LoginPage from '../LoginPage/LoginPage';

import SearchBar from '../SearchBar/SearchBar'
function NavBar({profileAvatar}) {

  const [visible, setvisible] = useState(false);
  const [profileAva,setProfileAva]=useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg");
  const login = () => {
    setvisible(!visible);
  }; 
  const childValue=(value)=>{
    setProfileAva(value);
  };
  return (
    <div className='nav-bar'>
      <div className='Trip-Logo-Container' style={{display:'flex',alignItems:'center'}}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img className='Trip-Logo' src="https://trip-partner.s3.eu-north-1.amazonaws.com/MicrosoftTeams-image+(5).png"/>
        </Link>
      </div>
      <div className='menu-list' >
        <div className='nav'>
          <Link to="/EventsHomePage">
            <button>Events</button>
          </Link>
        </div>
        <div className='nav'>
          <Link to="/TouristHomePage">
            <button>Hot Spots</button>
          </Link>
        </div>
      </div>
      <div className='search-container' >
          <SearchBar/>
        </div>
        <div className='login-signup-outline' onClick={login} style={{
              backgroundColor: 'white',
      backgroundPosition: 'center',
      margin: 0,
        padding: 0,
        cursor:'pointer'
      }}><img src={profileAva} style={{ 

      objectFit:'scale-down'}}></img> </div>
      
      {visible && <LoginPage onClose={() => {setvisible(false)}} onReturn={childValue}/>}
    </div>
  );
}

export default NavBar;
