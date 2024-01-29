import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/HomePage/Home';
import OrganizerHome from './Components/Organizer/OrganizerHome';
import EventsHomePage from './Components/Events/EventsHomePage';
import TouristSpotHomePage from './Components/TouristSpots/TouristSpotHomePage';
import Event from './Components/Events/Event';
import TouristSpot from './Components/TouristSpots/TouristSpot';
import BlogSlider from './Components/Events/Components-container';
import ProfilePage from './Components/ProfilePage/Profile';
import PopupForm from './Components/PopupForm/PopupForm';

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <Router>
      <div className='page' style={{ maxWidth: '100%' }}>
        <div className='header'>
          <NavBar />
          {/* <LightDarkModeToggle /> */}
        </div>
        <div className='body' style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OrganizerHome" element={<OrganizerHome />} />
            <Route path="/EventsHomePage" element={<EventsHomePage />} />
            <Route path="/TouristHomePage" element={<TouristSpotHomePage />} />
            <Route path='/Events/:eventId' element={<Event />} />
            <Route path='/Spot/:spotId' element={<TouristSpot />} />
            <Route path="/component" element={<BlogSlider />} />
            <Route path='/profile/:userId' element={<ProfilePage />} />
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;