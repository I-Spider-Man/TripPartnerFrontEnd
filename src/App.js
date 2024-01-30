import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import OrganizerHome from './Components/Organizer/OrganizerHome';
import EventsHomePage from './Components/Events/EventsHomePage';
import TouristSpotHomePage from './Components/TouristSpots/TouristSpotHomePage';
import Event from './Components/Events/Event';
import TouristSpot from './Components/TouristSpots/TouristSpot';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import BlogSlider from './Components/Events/Components-container';
import ProfilePage from './Components/ProfilePage/Profile';
import { useState } from 'react';
import { UserProvider } from './Components/Auth/UserContext';
function App() {
  
  return (
    <UserProvider>
      <Router>
    <div className='page' style={{maxWidth:'100%'}}>
      <div className='header'><NavBar /></div>
      <div className='body' style={{minHeight:'100vh'}}><Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/OrganizerHome" element={<OrganizerHome />} />
        <Route path="/EventsHomePage" element={<EventsHomePage/>}/>
        <Route path="/TouristHomePage" element={<TouristSpotHomePage/>}/>
        <Route path='/Events/:eventName' element={<Event/>}/>
        <Route path='/Spot/:spotName' element={<TouristSpot/>}/>
        <Route path="/component" element={<BlogSlider/>}/>
        <Route path='/profile/:userId' element={<ProfilePage/>}/>
      </Routes></div>
      <div className='footer'><Footer/></div>
    </div>
  </Router>
    </UserProvider>
    
  );
}
export default App;