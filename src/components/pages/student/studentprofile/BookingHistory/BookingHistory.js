import React from 'react'
import './BookingHistory.css';
import Studentcolsecond from '../Studentcolsecond';
import Studentcolfirstcommun from '../studentcolfirstcommun';
import { FaQuoteRight } from 'react-icons/fa';
import myclassimg from '../../../../../image/home/6.png'
import myclassimg2 from '../../../../../image/home/9.png'
import Getintouch from '../../../../comman/Getintouch.js'
import Footer from '../../../../comman/Footer.js'

function BookingHistory() {
    const PaymentHistory = [
        {
            img: myclassimg,
            title: "Wrestling",
            CourseDuration: "Time here",
            InstructorName: "Mr. Smith Martin",
            price: "10.99",
            btnname: "Payment Succeed"
        },
        {
            img: myclassimg2,
            title: "Boxing",
            CourseDuration: "Time here",
            InstructorName: "Mr. Smith Martin",
            price: "10.99",
            btnname: "Payment Unsuccessful"
        }
    ]
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className='student_profile'>
                <FaQuoteRight className='FaQuoteRightpro' /><br />
                <h3>We are what we repeatedly do. Excellence then is not an act but a habit.</h3>
            </div>
            <div className="container-fluid">
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-12 col-md-3">
                        <Studentcolfirstcommun />
                    </div>
                    <div className="col-12 col-md-9">
                        <Studentcolsecond />
                        <div className='forget-pass bokinghis'>
                            <h2>Booking History</h2>
                            <div style={{marginTop:'5%'}}>
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
            <Getintouch />
            <Footer />
        </div>
    )
}

export default BookingHistory