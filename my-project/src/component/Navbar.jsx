import React, { useState } from 'react';
import './style.css'; // Import a CSS file for styling


export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav className="navbar">
        
      <ul className="navbar-nav">
        <li className="nav-item" >
              <video className='h-14'  controls={false} src="./video.mp4" autoPlay  muted loop  />  
        </li>
        <li className="nav-item dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
            
           <a href="/" className="nav-link">Courses</a>
          {dropdown && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="w3school.com">SYSTEM DESGIN</a>
              </li>
              <li className="dropdown-item">
                <a href="/service2">FULL STACK DEVELOPMENT</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">DSA</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">FUNDAMENTAL COURSES</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">APP DEVELOPMENT</a>
              </li>
            </ul>
          )} 

        </li>
        <li 
          className="nav-item dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="nav-link">
            Free sources<i className="fas fa-caret-down"></i>
          </a>
          {dropdown && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="/service1">HTML NOTES</a>
              </li>
              <li className="dropdown-item">
                <a href="/service2">CSS NOTES</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">JS NOTES</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">REACT NOTES</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">DATA ANALITICS NOTES</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">SYSTEM DESIGN NOTES</a>
              </li>
              <li className="dropdown-item">
                <a href="/service3">NEM NOTES</a>
              </li>
             
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">Coding ground</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Teams</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Form</a>
        </li>
      </ul>
    </nav>
  );
}

