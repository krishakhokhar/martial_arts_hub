import React from 'react'
import './FavoriteInstructors.css'
import { FaQuoteRight } from 'react-icons/fa'
import Studentcolfirstcommun from '../studentcolfirstcommun'
import Studentcolsecond from '../Studentcolsecond'
import imghert from '../../../../../image/home/23.png'
import Getintouch from '../../../../comman/Getintouch.js'
import Footer from '../../../../comman/Footer.js'

function FavoriteInstructors() {
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
                        <div className='forget-pass'>
                            <img src={imghert} alt='img' className='hertfav' />
                            <div className='favrite'>
                                <h3>You don’t have any favorites yet!</h3>
                                <p>Your favorites list is currently empty. Discover and add your favorite items here to quickly access them anytime.</p>
                            </div>
                            <button className='srchins'>Search Instructor</button>
                        </div>
                    </div>

                </div>
            </div>
            <Getintouch/>
            <Footer/>
        </div>
    )
}

export default FavoriteInstructors