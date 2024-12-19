import React, { useEffect, useState } from 'react'
import './Studentprofile.css'
import { FaQuoteRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

function Studentprofile() {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const links = [
    { name: "My Profile", url: "/Studentprofile" },
    { name: "Log In Details", url: "/login-details" },
    { name: "Reset Password", url: "/reset-password" },
    { name: "Forgot Password", url: "/forgot-password" },
    { name: "Booking History", url: "/booking-history" },
  ];

  useEffect(() => {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');

    if (name) setUserName(name);
    if (email) setUserEmail(email);
  }, []);
  return (
    <div>
      <div className='studentprofile'>
        <div className='container' style={{ paddingTop: '105px' }}>
          <div className='studentprofile_section'>
            <h2><FaQuoteRight className='rightarrow' /><br />We are what we repeatedly do. Excellence then is not an act but a habit.</h2>
          </div>
        </div>
      </div>
      <div className='container row'>
        <div className='col-md-4'>
          <div className='userpro'>
            {userEmail ? userEmail.charAt(0).toUpperCase() : ''}
          </div>
          <div className="header_profile">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <NavLink
                  to={link.url}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "inherit",
                    textDecoration: isActive ? "underline" : "none",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  {link.name}
                </NavLink>
                {index !== links.length - 1 && <><br /><hr /></>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='col-md-8 profile_section2'>
          <div>
            <div>
              <h2>{userName || "No Name Found"}<span className='asstudentname'>(Student)</span></h2>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studentprofile