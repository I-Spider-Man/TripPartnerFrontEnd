import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TourIcon from '@mui/icons-material/Tour';
import EventIcon from '@mui/icons-material/Event';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import FeedbackIcon from '@mui/icons-material/Feedback';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Trip Parter</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/organizer" style={{textDecoration:"none"}}> 
          <li>
            <JoinInnerIcon className="icon" />
            <span>Organzier</span>
          </li>
          </Link>
          <Link to="/participants" style={{textDecoration:"none"}}>
          <li>
            <JoinFullIcon className="icon" />
            <span>Participants</span>
          </li>
          </Link>
          
          <Link to="/group" style={{textDecoration:"none"}}>
          <li>
            <GroupsIcon className="icon" />
            <span>Groups</span>
          </li>
          </Link>
          
          <Link to="/Event" style={{ textDecoration: "none" }}>
            <li>
              <EventIcon className="icon" />
              <span>Events</span>
            </li>
          </Link>

          

          <Link to="/touristspots" style={{textDecoration: "none"}}>
            <li>
            <TourIcon className="icon" />
            <span>Tourist Spots</span>
            </li>
          </Link>
          <Link to="/feedBack" style={{textDecoration: "none"}}>
            <li>
            <FeedbackIcon className="icon" />
            <span>FeedBack</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/Logout" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
       
      </div>
     
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
