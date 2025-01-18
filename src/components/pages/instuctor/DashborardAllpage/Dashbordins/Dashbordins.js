import React, { useEffect, useState } from 'react'
import './Dashbordins.css';
import Instractordashheader from '../../../../comman/instructordashheader/Instractordashheader'
import { HiOutlineCamera } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';
import classimg from '../../../../../image/home/6.png';
import classimg1 from '../../../../../image/home/9.png';
import reqvestimg from '../../../../../image/home/13.png';
import reqvestimg1 from '../../../../../image/home/12.png';
import { FaArrowUp } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
// import { useNavigate } from 'react-router-dom';

function Dashbordins() {


    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    // Fetch data from localStorage when the component mounts
    useEffect(() => {
        const name = localStorage.getItem('userName');
        const email = localStorage.getItem('userEmail');

        if (name) setUserName(name);
        if (email) setUserEmail(email);
    }, []);

    const stdpro = [
        {
            online: "Online Now",
            Joinedas: "Instructor",
            Joinedon: " 18 June, 2024",
            ProfileCompletion: "5%",
            Complete: " (Complete Now)"
        }
    ];


    const myclass = [
        {
            img: classimg1,
            name: "Boxing",
            ClassDate: " 29 July, 2024",
            Createdon: "10 July, 2024",
            ClassTime: "12:30 PM",
            ClassRate: "$4.99",
            btnname: "Start on 29 July at 12:30 PM"
        },
        {
            img: classimg,
            name: "Wrestling",
            ClassDate: "26 Aug, 2024",
            Createdon: "15 Aug,2024 ",
            ClassTime: "10:00 PM",
            ClassRate: "$4.99",
            btnname: "Start on 29 July at 12:30 PM"
        },
        {
            img: classimg,
            name: "Wrestling",
            ClassDate: "26 Aug, 2024",
            Createdon: "15 Aug,2024 ",
            ClassTime: "10:00 PM",
            ClassRate: "$4.99",
            btnname: "Start on 29 July at 12:30 PM"
        },
        {
            img: classimg,
            name: "Wrestling",
            ClassDate: "26 Aug, 2024",
            Createdon: "15 Aug,2024 ",
            ClassTime: "10:00 PM",
            ClassRate: "$4.99",
            btnname: "Start on 29 July at 12:30 PM"
        }
    ]
    const ernning = [
        {
            img: reqvestimg,
            name: 'Emily Roberts',
            ClassName: "Boxing",
            ClassDate: "26 July, 2024",
            rate: '4.99'
        },
        {
            img: reqvestimg1,
            name: 'Jhon Martin',
            ClassName: "Boxing",
            ClassDate: "26 July, 2024",
            rate: '5.99'
        },
        {
            img: reqvestimg1,
            name: 'Jhon Martin',
            ClassName: "Boxing",
            ClassDate: "26 July, 2024",
            rate: '5.99'
        }
    ]


    const MessagesRequests = [
        {
            img: reqvestimg,
            name: 'Emily Roberts',
            Requestreceivedon: " 15 July, 2024",
            Inquiryclass: "Boxing",
            detail: "Hello Instructor, My name is Emily Roberts, and I am interested in joining your online martial arts course......."
        },
        {
            img: reqvestimg1,
            name: 'Jhon Martin',
            Requestreceivedon: "26 July, 2024",
            Inquiryclass: "Boxing",
            detail: "Hello Instructor, My name is  Jhon Martin, and I am interested in joining your online martial arts course......."
        },
        {
            img: reqvestimg1,
            name: 'Jhon Martin',
            Requestreceivedon: "26 July, 2024",
            Inquiryclass: "Boxing",
            detail: "Hello Instructor, My name is  Jhon Martin, and I am interested in joining your online martial arts course......."
        }
    ]


    return (
        <div>
            <Instractordashheader />
            <section className='sectiondash'>
                <div className='greedtemp'>
                    <div>
                        <div className='std-dash'>
                            {stdpro.map((profile, index) => (
                                <div key={index} className="profile-section">
                                    <div className='icon-container'>
                                        <div className='usericone'>
                                            <span className='usericonefont'>
                                                {userEmail ? userEmail.charAt(0).toUpperCase() : ''}
                                            </span>
                                        </div>
                                        <div className='camera'>
                                            <HiOutlineCamera className='camerafont' />
                                        </div>
                                    </div>
                                    <div className='profile-details'>
                                        <div className='nameonly'>
                                            <h2>{userName || "No Name Found"}</h2> {/* Display user name */}
                                            <div className='status'>
                                                <p><GoDotFill className='dotfont' /> {profile.online}</p>
                                            </div>
                                        </div>
                                        <div className='role'>
                                            <p><span>Role:</span> {profile.Joinedas}</p>
                                            <p><span>Joined On:</span> {profile.Joinedon}</p>
                                            <p className='profilec'><span>Profile Completion:</span> {profile.ProfileCompletion}</p>
                                            <p className='complete'>{profile.Complete}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* reqvest......................................................................... */}
                    <div className='reqvestmein'>
                        <div className='reqvest'>
                            <div className='reqvest-btn'>
                                <div>
                                    <p>Class Requests</p>
                                </div>
                                <div>
                                    <FaCirclePlus style={{ fontSize: '25px' }} />
                                </div>
                            </div>
                            <div className='insdash'>
                                {myclass.map((item, index) => (
                                    <div key={index} className='instructor1'>
                                        <div className='insdash1'>
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className='indashclass'>
                                            <div className='indashclass1'>
                                                <div>
                                                    <h3 style={{ marginBottom: '13px', marginLeft: '10px' }}>{item.name}</h3>
                                                    <p><b>Class Date:</b>{item.ClassDate}</p>
                                                </div>
                                                <button className='btnindash'>{item.btnname}</button>
                                            </div>
                                            <p>
                                                <b>Created on:</b>{item.Createdon}
                                                <span><b>Class Time:</b>{item.ClassTime}</span>
                                                <span style={{ color: '#CB3530' }}>
                                                    <b style={{ color: '#0f0f0fb2' }}>Class Rate:</b>{item.ClassRate}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* ........................Earnings........................................ */}

                        <div className="Payments">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className='py'>Earnings</p>
                                <h3 style={{ color: '#CB3530' }}>$10.98</h3>
                            </div>
                            <div className="scrollable-content">
                                {ernning.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <img src={item.img} alt={item.name} className='imgerring' />
                                        <div className='itemist'>
                                            <h4 style={{ margin: '0' }}>{item.name}</h4>
                                            <p>
                                                <b style={{ color: '#0f0f0fb2' }}>Class Name:</b>{item.ClassName}
                                                <span>
                                                    <b style={{ color: '#0f0f0fb2' }}>Class Date:</b>{item.ClassDate}
                                                </span>
                                            </p>
                                        </div>
                                        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                                            <p style={{ margin: '0', fontWeight: 'bold', color: '#CB3530', fontSize: '20px' }}>${item.rate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* ......Messages Requests....... */}

                    <div className='Recent'>
                        <p className='Recentp'>Messages Requests</p>
                        <div className='resentdiv'>
                            {MessagesRequests.map((request, index) => (
                                <div className='requestItem' key={index}>
                                    <img className='requestImage1' src={request.img} alt={request.name} />
                                    <div className='requestDetails'>
                                        <h3>{request.name}</h3>
                                        <p className='ditaisinsdash'> <b style={{ color: '#0f0f0fb2' }}>Request received on:</b>{request.Requestreceivedon}<sapn><b style={{ color: '#0f0f0fb2' }}>Inquiry Class: </b>{request.Inquiryclass}</sapn></p>
                                        <p className='ditaisinsdash'>{request.detail}</p>
                                    </div>
                                    <div className='instbuttonsdashh'>
                                        <button className='See-Profile'>See Profile</button>
                                        <button className='View-Request'>View Request</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Dashbordins