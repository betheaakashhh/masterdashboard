import React from 'react'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo"><NavLink to="/" exact="true" activeclassname="active">DashBoard</NavLink> </div>
        <div className="search-box">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button"><FaSearch /></button>
        </div>
        <div className="nav-icon">
            <span><FaBell /></span>
            <NavLink to="/profile" exact ="true" activeclassname="active" ><span><FaUser /> </span></NavLink>
        </div>
    </nav>
  )
}

export default Navbar