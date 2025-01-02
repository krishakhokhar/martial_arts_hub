import React, { useRef } from "react";
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
import { FaArrowUpLong, FaQuoteLeft, FaStar } from 'react-icons/fa6';
import img24 from '../../../../image/home/24.png'
import Secondslide from '../../../comman/Secondslide'
import Getintouch from '../../../comman/Getintouch'
import Footer from '../../../comman/Footer'
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function Instuctorprofile() {
    const naviget = useNavigate()
    const classbook = () => {
        naviget('/BookClassform')
    }
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
    const location = useLocation();
    const { instructor } = location.state || {}; // Get instructor data passed to this component

    // If no instructor data is available, handle it
    if (!instructor) {
        return <div>No instructor data available. Please go back and select an instructor.</div>;
    }

    return (
        <div className="container-fluid" style={{overflow:'hidden'}}>
            <div className="myprofilpage2 row">
                <div className="col-md-9 manicol">
                    <div>
                        <div className="head-button">
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
                            <button onClick={classbook}>Book Now</button>
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
            <div className='rewisection'>
                <div style={{ display: 'flex' }}>
                    <h3 style={{ marginTop: '5px' }}>Reviews</h3>
                    <div style={{ display: 'flex', marginLeft: '6px', marginTop: '11px' }}>
                        <FaStar className='inparopages' />
                        <p className='revwutip'>4.3 <span style={{ textDecoration: 'underline' }}>(25 Reviews)</span></p>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginBottom: '20px' }}>
                    <button className="button previous" onClick={previous}>
                        <GrFormPreviousLink className="under-next prev2" />
                    </button>
                    <button className="button next" onClick={next}>
                        <GrFormNextLink className="under-next next2" />
                    </button>
                </div>
            </div>
            <div className="slider-container" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div key={1} className="slideprofile">
                        <FaQuoteLeft className="FaQuoteLeftinspro" />
                        <p>Training here has been a transformative experience. I've gained confidence, discipline, and strength, thanks to the supportive and skilled instructors.</p>
                        <div className="Sarah">
                            <div>
                                <img src={img24} alt="img" className="srakimimg" />
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <h3 style={{ marginBottom: '0px' }}>Sarah Kim</h3>
                                <div className="star">
                                    <div className="flex items-center star2">
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <span className="rating">4.3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={2} className="slideprofile">
                        <FaQuoteLeft className="FaQuoteLeftinspro" />
                        <p>Training here has been a transformative experience. I've gained confidence, discipline, and strength, thanks to the supportive and skilled instructors.</p>
                        <div className="Sarah">
                            <div>
                                <img src={img24} alt="img" className="srakimimg" />
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <h3 style={{ marginBottom: '0px' }}>Sarah Kim</h3>
                                <div className="star">
                                    <div className="flex items-center star2">
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <span className="rating">4.3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={3} className="slideprofile">
                        <FaQuoteLeft className="FaQuoteLeftinspro" />
                        <p>Training here has been a transformative experience. I've gained confidence, discipline, and strength, thanks to the supportive and skilled instructors.</p>
                        <div className="Sarah">
                            <div>
                                <img src={img24} alt="img" className="srakimimg" />
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <h3 style={{ marginBottom: '0px' }}>Sarah Kim</h3>
                                <div className="star">
                                    <div className="flex items-center star2">
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <span className="rating">4.3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <section className='md:py-space pb-20 lg:px-8 our '>
                <Secondslide />
            </section>
            <Getintouch />
            <Footer />
        </div>
    );
}

export default Instuctorprofile;
