import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Studentcolfirstcommun.css';

function Studentcolfirstcommun() {
  const [userEmail, setUserEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Retrieve user email from localStorage
    const email = localStorage.getItem('userEmail');
    if (email) setUserEmail(email);
  }, []);

  const links = [
    { name: "My Profile", url: "/Studentprofile" },
    { name: "Log In Details", url: "/Logindetails" },
    { name: "Forgot Password", url: "/Forgetpassword" },
    { name: "Reset Password", url: "/ResetPassword" },
    { name: "Favorite Instructors", url: "/FavoriteInstructors" },
    { name: "Booking History", url: "/BookingHistory" },
  ];

  return (
    <div>
      <div className='student-letter'>
        {/* Display the profile image or a fallback */}
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
            onError={(e) => {
              e.target.src = '/default-profile-image.png'; // Fallback image
              console.error("Error loading profile image, using fallback.");
            }}
          />
        ) : (
          <div className="fallback-letter">
            {userEmail ? userEmail.charAt(0).toUpperCase() : ''}
          </div>
        )}
      </div>
      <div className="links-container">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className={`link-item ${location.pathname === link.url ? "active" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Studentcolfirstcommun;