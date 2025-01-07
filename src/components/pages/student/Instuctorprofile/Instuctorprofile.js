import React, { useState } from "react";
import './Instuctorprofile.css';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { TbVector } from 'react-icons/tb';
import { IoLanguageOutline } from 'react-icons/io5';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import Button from '../../../comman/Button';
import { IoMdHeart, IoMdStar } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoShareAndroid } from 'react-icons/go';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaArrowUpLong } from 'react-icons/fa6';
import Secondslide from '../../../comman/Secondslide';
import Getintouch from '../../../comman/Getintouch';
import Footer from '../../../comman/Footer';

function InstructorProfile() {
    const experiencePoints = [
        "Over 20 years of martial arts experience.",
        "Specialized in Karate, Taekwondo, and Brazilian Jiu-Jitsu.",
        "Competed in national and international tournaments.",
        "Trained under renowned martial arts masters globally.",
    ];

    const certifications = [
        ["5th Degree Black Belt in Karate", "4th Degree Black Belt in Taekwondo", "Certified Brazilian Jiu-Jitsu Instructor"],
        ["Certified Personal Trainer (CPT)", "First Aid and CPR Certified"]
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
    
    const [bookNowClicked, setBookNowClicked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { instructor } = location.state || {}; // Get instructor data passed to this component

    const handleBookNow = () => {
        setBookNowClicked(true);
        navigate('/BookClassform', { state: { instructor } }); // Pass instructor data
    };

    if (!instructor) {
        return <div>No instructor data available. Please go back and select an instructor.</div>;
    }

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className="myprofilpage2 row">
                <div className="col-md-9 manicol">
                    <div>
                        <div className=" head-button">
                            {['Martial Arts', 'Karate', 'Taekwondo', 'Jiu-Jitsu'].map((text, idx) => (
                                <Button key={idx} text={text} />
                            ))}
                        </div>
                        <h1 className="support">I’m here to support your fitness ambitions, cut fat, and develop strong, flexible muscles.</h1>
                        <div className="profile-instructor">
                            <h2>Instructor</h2>
                            <p>Top-rated instructor. Highly skilled, extensive experience, certified qualifications, and prompt responses. Alex is eager to schedule your first Pilates session.</p>
                        </div>
                        <div className="aboutcins">
                            <h3>About Me</h3>
                            <p>Hi, I'm Kia John! I started my martial arts journey 5 years ago and have been dedicated to improving my skills ever since. </p>
                            <p>Training in Karate, Taekwondo, and Brazilian Jiu-Jitsu has boosted my confidence, discipline, and physical fitness. I enjoy the challenges and continuous learning that come with martial arts.</p>
                        </div>
                        <div>
                            <h3>About the Class</h3>
                            <div className="head-button">
                                <button><HiOutlineStatusOnline className="classabout" /> Online</button>
                                <button> <TbVector className="classabout" /> All Levels</button>
                                <button><IoLanguageOutline className="classabout" /> English</button>
                            </div>
                            <p className="hourclass">“This hour of martial arts training is a powerful gift to your body and mind, fostering inner strength and outer resilience. It’s not just about learning techniques; it’s about cultivating discipline, confidence, and a sense of empowerment.”</p>
                        </div>
                        <h3>Experience</h3>
                        <div className="expiryonce">
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
                            {certifications.map((group, groupIndex) => (
                                <div key={groupIndex} className={groupIndex === 1 ? 'seconsirification' : ''}>
                                    {group.map((cert, index) => (
                                        <p key={index} className="cert-item">
                                            <RiVerifiedBadgeFill className="vrifyd" /> {cert}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <h3>Hourly Rates</h3>
                        <div className="expiryonce">
                            {rates.map((group, groupIndex) => (
                                <div key={groupIndex} className={groupIndex === 1 ? 'seconsirification' : ''}>
                                    {group.map((rate, index) => (
                                        <div key={index}>
                                            <span><RiVerifiedBadgeFill className="vrifyd1" /> {rate.title}</span>
                                            <p>{rate.description}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Training History</h3>
                            {history.map((item, index) => (
                                <p key={index}>
                                    <RiVerifiedBadgeFill className="vrifyd" /> {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="sliderimg-container">
                            <img src={instructor.img} alt="img" className="sliderimg sliderimgprofile" />
                            <IoMdHeart className="heart-icon" />
                        </div>
                        <h1 className="name namrins">{instructor.name} <span>(Instructor)</span></h1>
                        <div className="rating-section">
                            <div className="star2">
                                {[...Array(5)].map((_, idx) => <IoMdStar key={idx} />)}
                            </div>
                            <p className="rating-text">4.3 <span style={{ textDecoration: 'underline' }}>(25 Reviews)</span></p>
                        </div>
                        <div>
                            <table className='istructorspro'>
                                <tr>
                                    <td>Hourly Fee</td>
                                    <td>$5</td>
                                </tr>
                                <tr>
                                    <td>Response Time </td>
                                    <td>1 Hour</td>
                                </tr>
                                <tr>
                                    <td>Number of Students</td>
                                    <td>45+</td>
                                </tr>
                            </table>
                        </div>
                        <div className='buttonsinst'>
                            <button onClick={handleBookNow}>Book Now</button>
                            <button> <AiOutlineMessage className='buttonlisticon' />  Send a message</button>
                            <button> <GoShareAndroid className='buttonlisticon' />   Share Instructor’s Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className='app appins'>
                    <h2>Download the App to Get more <span>Benefits</span></h2>
                    <p>Join us and begin your journey towards ultimate fitness, where you will feel empowered, stronger, healthier, and more confident than ever before.</p>
                    <Button className='Start-Today1 newget' text={'Get the App'} icone={<FaArrowUpLong className='arrow' />}></Button>
                </section>
            </div>
        
            <section className='md:py-space pb-20 lg:px-8 our '>
                <Secondslide />
            </section>
            <Getintouch />
            <Footer />
        </div>
    );
}

export default InstructorProfile;