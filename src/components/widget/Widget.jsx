import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import { fetchEventsData, fetchGroupsData, fetchUserData } from "../../DataStorage"; 
import { useEffect, useState } from "react";
import { useScrollTrigger } from "@mui/material";
const Widget = ({ type }) => {
  let data;
  const[count,setcount]=useState(0);
  
  switch (type) {
    case "user":
      const fetchUsers=async()=>{
          try{
            const users=await fetchUserData();
            setcount(users.length);
          }catch(error){
            console.log(error);
          }
      }
      fetchUsers();
      data = {
        title: "ACTIVE_USERS",
        link: "See all users",
        actualLink:'/users',
        count: count,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;



    case "organizers":
      
      data = {
        title: "Organizer",
        isMoney: false,
        link: "View all Organizers",
        actualLink:'/orders',
        count: count,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;




    case "events":

    const fetchEvents=async()=>{
      try{
        const users=await fetchEventsData();
        setcount(users.length);
      }catch(error){
        console.log(error);
      }
  }
  fetchEvents();
      data = {
        title: "Events",
        isMoney: true,
        link: "View all events",
        count: count,
        actualLink:'/events',
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;



    case "groups":
      const fetchGroups=async()=>{
        try{
          const users=await fetchGroupsData();
          setcount(users.length);
        }catch(error){
          console.log(error);
        }
    }
    fetchGroups();
      data = {
        title: "Groups",
        isMoney: true,
        link: "See details",
        actualLink:'/groups',
        count: count,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.count}
        </span>
        <Link to={data.actualLink}><span className="link">{data.link}</span></Link>
      </div>
      <div className="right">
        <div className="percentage positive">
     
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
