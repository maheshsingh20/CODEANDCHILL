import React, { useState } from "react";
import logo from "../assets/logo.jpg"; 
import { Link } from "react-router-dom";
import pfl from "../assets/pfl.jpg"; // Profile image
import "./NavB.css";

const Navbb = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="ContainerFor">
      <section className="brand">
        <Link to="#">
          <img src={logo} alt="Code and Chill Logo" className="brand-logo" />
        </Link>
      </section>
      <nav className="nav-links">
        <div className="nav-links-div">
          <Link to="/home">Home</Link>
          <div className="dropdown-container">
            <button 
              className="dropdown-key" 
              onClick={toggleDropdown} 
              aria-expanded={dropdownOpen}
            >
              Problems
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/Set1">Lover Babbar DSA Sheet</Link>
                <Link to="#">Striver's A2Z</Link>
                <Link to="#">Code And Chill top 50</Link>
                <Link to="#">Google Practise Sheet</Link>
                <Link to="#">Microsoft Practise Sheet</Link>
                <Link to="#">Amazon Practise Sheet</Link>
              </div>
            )}
          </div>
          <Link to="/Contest">Contest</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="#">Blog</Link>
        </div>
      </nav>
      <section className="RIGHT">
        <div className="search-box">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div>
        <Link to="/Profile">
            <img src={pfl} alt="Profile" className="profile-image" />
            </Link>
        </div>
          
      </section>
    </div>
  );
};

export default Navbb;
