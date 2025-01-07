import React, { useEffect, useState } from 'react'
import './Studentprofile.css'
import { FaQuoteRight } from 'react-icons/fa'
import myclassimg from '../../../../../image/home/6.png'
import myclassimg2 from '../../../../../image/home/9.png'
import Studentcolfirstcommun from '../studentcolfirstcommun';
import Studentcolsecond from '../Studentcolsecond';
import Getintouch from '../../../../comman/Getintouch'
import Footer from '../../../../comman/Footer'

function Studentprofile( ) {
  const classes = [
    {
      title: "Wrestling",
      progress: "75%",
      description: "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      buttonText: "Starts on 22 Aug",
      image: myclassimg,
    },
    {
      title: "Boxing",
      progress: "100%",
      description: "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      buttonText: "See Details",
      image: myclassimg2,
    }

  ];
  const PaymentHistory = [
    {
      img: myclassimg,
      title: "Wrestling",
      description: "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Succeed"
    },
    {
      img: myclassimg2,
      title: "Boxing",
      description: "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Unsuccessful"
    },
    {
      img: myclassimg2,
      title: "Boxing",
      description: "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Unsuccessful"
    }
  ]

  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('studentProfileData');
    if (savedData) {
        setStudentData(JSON.parse(savedData));
    }
}, []);
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className='student_profile'>
        <FaQuoteRight className='FaQuoteRightpro' /><br />
        <h3>We are what we repeatedly do. Excellence then is not an act but a habit.</h3>
      </div>
      <div className="container-fluid">
        <div className="container-fluid" >
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-12 col-md-3">
              <Studentcolfirstcommun />
            </div>
            <div className="col-12 col-md-9">
              <Studentcolsecond />
              <div className='aboutdiv'>
              <div className='aboutdiv'>
                <div className='about_class'>
                    <h4>About Me</h4>
                    <p className='scrollable-content'>{studentData?.aboutMe || 'No about found'}</p>
                </div>
                <div className='about_class'>
                    <h4>Additional Details</h4>
                    <p className='scrollable-content'>{studentData?.additionlDetail || 'No about found'}</p>
                </div>
            </div>
                <div className="about_class about_class1">
                  <h4>My Classes</h4>
                  <div className="scrollbar-student-myclass">
                    {classes.map((classItem, index) => (
                      <div key={index}>
                        <img src={classItem.image} alt={classItem.title} />
                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                          <h3 style={{ flex: 1, fontSize: "20px", fontWeight: "600" }}>
                            {classItem.title}
                          </h3>
                          <div
                            className={`${classItem.progress === "75%"
                              ? "studentclass_complete75"
                              : classItem.progress === "100%"
                                ? "studentclass_complete100"
                                : classItem.progress === "0%"
                                  ? "studentclass_complete0"
                                  : ""
                              } studentclass_outer`}
                          >
                            <div className="studentclass_inner">{classItem.progress}</div>
                          </div>
                        </div>
                        <p className="description-student">{classItem.description}</p>
                        <button
                          className={`btn-text-student ${classItem.buttonText === "Starts on 22 Aug"
                            ? "btn-starts"
                            : classItem.buttonText === "See Details"
                              ? "btn-details"
                              : ""
                            }`}
                        >
                          {classItem.buttonText}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='about_class about_class1 ' style={{marginBottom:'40px'}}>
                  <h4>Payment History</h4>
                  <hr style={{ width: '100%' }}></hr>
                  <div className="payment-history-container">
                    <div className="payment-history">
                      {PaymentHistory.map((item, index) => (
                        <div>
                          <div key={index} className="payment-card">
                            <div className='imganddlex'>
                              <div>
                                <img src={item.img} alt={item.title} className="payment-img payment-imgstd" />
                              </div>
                              <div className="payment-details">
                                <h3 className="payment-title">{item.title}</h3>
                                <p className="payment-description">{item.description}</p>
                                <div style={{ lineHeight: '6px' }}>
                                  <p className="payment-duration"><strong>Duration:</strong> {item.CourseDuration}</p>
                                  <p className="payment-instructor"><strong>Instructor:</strong> {item.InstructorName}</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p className="payment-price"> ${item.price}</p>
                              <button
                                className={`payment-btn ${item.btnname === "Payment Succeed"
                                  ? "btn-success-student"
                                  : "btn-fail"
                                  }`}
                              >
                                {item.btnname}
                              </button>
                            </div>
                          </div>
                          <hr style={{ width: '100%' }}></hr>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Getintouch/>
      <Footer/>
    </div>
  )
}

export default Studentprofile