import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../styleguide.css';
import LoginPage from '../LoginPage/LoginPage';

import SearchBar from '../SearchBar/SearchBar'
function NavBar() {
  const [visible, setvisible] = useState(false);
  const [profileAva,setProfileAva]=useState("https://trip-partner.s3.eu-north-1.amazonaws.com/login_signUp.svg");
  const login = () => {
    setvisible(!visible);
  };
  const childValue=(value)=>{
    setProfileAva(value);
    console.log(value);
  };
  return (
    <div className='nav-bar'>
      <div className='Trip-Logo-Container' style={{display:'flex',alignItems:'center'}}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img className='Trip-Logo' src="https://trip-partner.s3.eu-north-1.amazonaws.com/Logo.png"/>
        </Link>
      </div>
      <div className='menu-list' >
        <div className='nav'>
          <Link to="/EventsHome">
            <button>Events</button>
          </Link>
        </div>
        <div className='nav'>
          <Link to="/HotSpotsHome">
            <button>Hot Spots</button>
          </Link>
        </div>
        <div className='nav'>
          <Link to="/OrganizerHome">
            <button>Organizers</button>
          </Link>
        </div>
      </div>
      <div className='search-container' >
          <SearchBar/>
        </div>
      <div className='login-signup-outline'>
        <button className='login-button' onClick={login}>
          <img className='login-signup' alt='login or sign up' src={profileAva} />
        </button>
      </div>
      {visible && <LoginPage onClose={() => {setvisible(false)}} onReturn={childValue}/>}
    </div>
  );
}

export default NavBar;
