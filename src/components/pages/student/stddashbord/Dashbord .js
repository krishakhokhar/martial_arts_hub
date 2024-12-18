import React, { useEffect, useState } from 'react';
import Dashbordhed from '../../../comman/Dashbordhed';
import './Dashbord.css';
import { HiOutlineCamera } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';
import Button from '../../../comman/Button';
import reqvestimg from '../../../../image/home/13.png';
import reqvestimg1 from '../../../../image/home/12.png';
import reqvestimg2 from '../../../../image/home/11.png';
import paymentimg1 from '../../../../image/home/6.png';
import paymentimg2 from '../../../../image/home/9.png';
import { FaArrowUp } from 'react-icons/fa';

function Dashbord() {
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
      Joinedas: "Student",
      Joinedon: "28 July, 2024",
      ProfileCompletion: "5%",
      Complete: " (Complete Now)"
    }
  ];

  const ClassRequests = [
    {
      img: reqvestimg,
      name: "Kiya John",
      instructor: "•Brazilian Jiu Jitsu Instructor",
      intro: "Your Inquiry message request is reached to the Instructor. Please wait for the confirmation. "
    },
    {
      img: reqvestimg1,
      name: "Jhon Martin",
      instructor: "•Wrestling Instructor",
      intro: "Your Inquiry message request is reached to the Instructor. Please wait for the confirmation. "
    }, {
      img: reqvestimg2,
      name: "Keyn Mojho",
      instructor: "•Boxing Instructor",
      intro: "Your Inquiry message request is reached to the Instructor. Please wait for the confirmation. "
    }
  ];

  const payment = [
    {
      img: paymentimg1,
      name: "Wrestling",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Succeed"
    },
    {
      img: paymentimg2,
      name: "Boxing",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Unsuccessful"
    }
  ]

  const Recent = [
    {
      img: paymentimg1,
      name: "Boxing",
      info: "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      btnname: "Starts on 25 Aug",
      class:"Starts"
    },

    {
      img: paymentimg2,
      name: "Wrestling",
      info: "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      btnname: "See Details",
      class:"Details"
    }
  ]

  return (
    <div>
      <Dashbordhed />
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
                  <Button text={"Explore Classes"} className="btnexplore" />
                </div>
              </div>
              <div className='items2'>
                {ClassRequests.map((request, index) => (
                  <div key={index} className="request-item">
                    <div className='reqvestflex'>
                      <div>
                        <img src={request.img} alt={request.name} className="request-img" />
                      </div>
                      <div>
                        <div className='reqvestallitem'>
                          <h5>{request.name} <span>{request.instructor}</span></h5>
                          <div className='inffo'><p>{request.intro}</p></div>
                        </div>
                      </div>
                      <div>
                        <Button className="btnview" text={"View"} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ........................Payments........................................ */}

            <div className="Payments">
              <p className='py'>Payments</p>
              <div>
                {payment.map((item, index) => (
                  <div key={index} className=" payment-item">
                    <div className="payment-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="payment-info">
                      <h5>{item.name}</h5>
                      <div className='course'>
                        <p><span>Course Duration:</span>{item.CourseDuration}</p>
                        <p><span>Instructor Name:</span>{item.InstructorName}</p>
                      </div>

                    </div>
                    <div className="payment-button">
                      <p> ${item.price}</p>
                      <button
                        className={`${item.btnname === "Payment Succeed" ? "success" : "unsuccess"
                          } ${index === 1 ? "second-button" : ""}`}
                      >
                        {item.btnname}
                        <FaArrowUp className="arrowup" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ......Recent Classes....... */}

          <div className='Recent'>
            <p className='Recentp'>Recent Classes</p>
            <div className='resentdiv'>
              {Recent.map((item, index) => (
                <div className='recentindex' key={index}>
                  <div>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className='recet-info'>
                    <h4>{item.name}</h4>
                    <p>{item.info}</p>
                  </div>
                  <div>
                    <button className={item.class}>{item.btnname}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashbord;
