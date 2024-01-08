import React from "react";
import "./footer.css";
import call from './FooterIcons/ant-design_phone-filled.svg';
import insta from './FooterIcons/instagram logo.svg';
import facebook from './FooterIcons/facebook logo.svg';
import linkedin from './FooterIcons/linkedin logo.svg';
import twitter from './FooterIcons/Twitter logo.svg';
import email from './FooterIcons/dashicons_email.svg';
import map from './FooterIcons/fa6-solid_location-dot.svg'
import { Link } from "react-router-dom";
export const Footer = () => {
    const contactDetail={
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:'3px'
        
    }
    return (
        <div className="footer">
            <div className="section-0"style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div className="Logo-container" >
            <img src="https://trip-partner.s3.eu-north-1.amazonaws.com/Logo.png"/>
            </div>
            </div>
            
            <div className="section-1">
                <div className="Pages-container">
                <h3>Pages</h3>
                    <Link to='/TouristSpotHome' style={{textDecoration:'none',color:'black'}}><span>Tourist Spots</span></Link>
                    <Link to='/EventsHome' style={{textDecoration:'none',color:'black'}}><span>Events</span></Link>
            </div>
            <div className="Service-container">
                <h3>Services</h3>
                <span>Participation</span>
                <span>Organization</span>

            </div>
            <div className="Contact-container">
                <h3>Contact</h3>
                <div className="contact-details" >
                    <span className="call" style={contactDetail}><img src={call} style={{padding:'5px'}}/>+91 9993412547 </span>
                    <span className="email" style={contactDetail}><img src={email} style={{padding:'5px'}}/>trippartner@gmail.com</span>
                    <span className="location" style={contactDetail}><img src={map} style={{padding:'0px 10px'}}/>Torry harris, Global Village, <br/>bangalore, karnataka</span>
                </div>
            </div>
            </div>
            <div className="section-2">
                <div className="Socialmedia-container"><h3>Social media</h3>
            <div className="social-icons">
                <img src={facebook}/>
                <img src={twitter}/>
                <img src={linkedin}/>
                <img src={insta}/>
            </div>
            </div>
            </div>
        </div>
    );
};


export default Footer;
