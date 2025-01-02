import React from 'react';
import './InstructorProfile.css'
import img1 from '../../../../image/home/13.png'
import { IoMdStar } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';
import { IoLanguageOutline, IoShareSocialOutline } from 'react-icons/io5';
import Button from '../../../comman/Button';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { TbVector } from 'react-icons/tb';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import Getintouch from '../../../comman/Getintouch';
import Footer from '../../../comman/Footer';

const InstructorProfile = () => {

  const experiencePoints = [
    "Over 20 years of martial arts experience.",
    "Specialized in Karate, Taekwondo, and Brazilian Jiu-Jitsu.",
    "Competed in national and international tournaments.",
    "Trained under renowned martial arts masters globally.",
  ];

  const certifications = [
    ["5th Degree Black Belt in Karate",
      "4th Degree Black Belt in Taekwondo",
      "Certified Brazilian Jiu-Jitsu Instructor"],
    ["Certified Personal Trainer (CPT)",
      "First Aid and CPR Certified"]
  ];

  const rates = [
    [
      {
        title: "First Free Session",
        description: "Book your first introductory session for free!"
      },
      {
        title: "Group Class (up to 10 students)",
        description: "$30 per hour per student"
      }
    ],
    [
      {
        title: "Private Lesson (1-on-1)",
        description: "$75 per hour"
      },
      {
        title: "Advanced Techniques Session",
        description: "$90 per hour"
      }
    ]
  ];

  const history = [
    "Began martial arts training at age 7 in Karate",
    "Achieved first black belt at age 15",
    "Competed in and won multiple national tournaments in Karate and Taekwondo",
    "Trained in Brazil for advanced Brazilian Jiu-Jitsu techniques",
    "Opened own dojo in 2010, focusing on personalized and group martial arts training",
    "Continuously attending seminars and workshops to stay updated with the latest martial arts techniques and teaching methods"
  ];
  return (
    <div>
      <div className='myprofilpage2 row'>
        <div className='col-md-3'>
          <div style={{ marginLeft: "70px" }}>
            <div>
              <img src={img1} alt='img' className=' myprofilpage2-img' />
              <h1 className='name'>Kiya Jhon<span>(Instructor)</span></h1>
              <div style={{ display: "flex", lineHeight: "3px" }} >
                <div className='star2 '>
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
                <div style={{ marginTop: "7px", fontSize: "13px", color: "#0F0F0F80" }}>
                  <p>4.3 <span style={{ textDecoration: "underline" }}>(25 Reviews)</span></p>
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <button className='btn-edit'> <CiEdit className='edit' /> Edit</button>
                <button className='btn-share'> <IoShareSocialOutline className='edit' /> Share</button>
              </div>
            </div>
            <div style={{ marginTop: "80px" }}>
              <div className='myprofile2head'>
                <ul>
                  <li tabindex="0">My Profile</li>
                  <hr />
                  <li tabindex="0">Edit Profile Details</li>
                  <hr />
                  <li tabindex="0">Forgot Password</li>
                  <hr />
                  <li tabindex="0">Reset Password</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-9  manicol'>
          <div>
            <div className='head-button'>
              <Button text={'Martial Arts'} />
              <Button text={'Karate'} />
              <Button text={'Taekwondo'} />
              <Button text={'Jiu-Jitsu'} />
            </div>
            <h1 className='support'>I’m here to support your fitness ambitions, cut fat, and develop strong, flexible muscles.</h1>
            <div className='profile-instructor'>
              <h2>Instructor</h2>
              <p>Top-rated instructor. Highly skilled, extensive experience, certified qualifications, and prompt responses. Alex is eager to schedule your first Pilates session.</p>
            </div>
            <div className='aboutcins'>
              <h3>About Me</h3>
              <p>Hi, I'm Kia John! I started my martial arts journey 5 years ago and have been dedicated to improving my skills ever since. </p>
              <p>Training in  Karate, Taekwondo, Brazilian Jiu-Jitsu has boosted my confidence, discipline, and physical fitness. I enjoy the challenges and continuous learning that come with martial arts. Outside of training, I love [hobbies/interests], which help keep me balanced and active. I'm grateful to be part of such a supportive martial arts community!</p>
            </div>
            <div>
              <h3>About the Class</h3>
              <div className='head-button'>
                <button><HiOutlineStatusOnline className='classabout' /> Online</button>
                <button> <TbVector className='classabout' /> All Levels</button>
                <button><IoLanguageOutline className='classabout' /> English</button>
              </div>
              <p className='hourclass'>“This hour of martial arts training is a powerful gift to your body and mind, fostering inner strength and outer resilience. It’s not just about learning techniques; it’s about cultivating discipline, confidence, and a sense of empowerment. Beyond punches and kicks, it’s about achieving overall well-being. Martial arts improve coordination and mental clarity, bringing vitality and balance to both your body and mind.”</p>
            </div>

            <h3>Experience</h3>
            <div className='expiryonce'>
              <ul>
                {experiencePoints.map((point, index) => (
                  <li key={index} className="experience-item">
                    <RiVerifiedBadgeFill className="vrifyd" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h3>Certifications</h3>
            <div className="expiryonce">
              <div className="certification">
                {certifications.map((group, groupIndex) => (
                  <div key={groupIndex} className={groupIndex === 1 ? 'seconsirification ' : ''}>
                    {group.map((certification, index) => (
                      <p key={index}>
                        <RiVerifiedBadgeFill className="vrifyd" /> {certification}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <h3>Hourly Rates</h3>
            <div>
              <div className="rates">
                {rates.map((group, groupIndex) => (
                  <div key={groupIndex} className={groupIndex === 1 ? 'seconsirification' : ''}>
                    {group.map((rate, index) => (
                      <div key={index}>
                        <span>
                          <RiVerifiedBadgeFill className="vrifyd1" /> {rate.title}
                        </span>
                        <p>{rate.description}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div >
              <h3>Training History</h3>
              {history.map((item, index) => (
                <p key={index}>
                  <RiVerifiedBadgeFill className="vrifyd" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Getintouch />
      <Footer />
    </div>
  );
};

export default InstructorProfile;