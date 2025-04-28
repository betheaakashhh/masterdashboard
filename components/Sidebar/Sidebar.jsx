import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { FaUserAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GrOverview } from "react-icons/gr";
import { DiGoogleAnalytics } from "react-icons/di";
import { TbReportSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
        <NavLink to="/" exact="true" activeclassname="active" className="sidebar-item"><GrOverview /><span>Overview</span></NavLink>
        <NavLink to="/overview" exact="true" activeclassname="active" className="sidebar-item"><FiUsers /><span>User Engagement and Onboarding</span></NavLink>
        <NavLink to="/reports" exact="true" activeclassname="active" className="sidebar-item"><DiGoogleAnalytics /> <span>Chatbot Usage and Conversation Analytics</span></NavLink>
        <NavLink to="/analytic" exact="true" activeclassname="active" className="sidebar-item"><TbReportSearch /><span>Content and Resource Engagement</span></NavLink>
        <NavLink to="/settings" exact="true" activeclassname="active" className="sidebar-item"><IoSettings /><span>Setting</span></NavLink>
        <div className="last">
         <NavLink to="/profile" exact="true" activeclassname="active" className="sidebar-profile"><FaUserAlt /> <span>Profile</span></NavLink>
         <NavLink to="/logoff" exact="true" activeclassname="active" className="sidebar-profile"><MdLogout /> <span>Logout</span></NavLink>
        </div>
       
        
        
    </div>
  );
};

export default Sidebar