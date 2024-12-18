import React from 'react'
import './Footer.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import Button from './Button';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer2'>
                <div className='footer-logo'>
                    <h2>martial arts hub.</h2>
                    <p>Created by martial artists for martial artists.</p>
                    <div className='logos-3'>
                        <FaFacebookF />
                        <FaTwitter />
                        <AiFillInstagram />
                    </div>
                </div>
                <div className='footer-about'>
                    <h2>About</h2>
                    <p>Who we are</p>
                    <p>Why choose us</p>
                    <p>Our Categories</p>
                </div>
                <div className='footer-about'>
                    <h2>Support</h2>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Frequently Asked Questions</p>
                </div>
                <div className='footer-serch'>
                    <h2>Want to stay updated?</h2>
                    <p>Subscribe to our newsletter</p>
                    <div className='relative2'>
                        <input type='text' placeholder="Enter Email" />
                        <Button className='serch-btn footer-join' text={"Join"} />
                    </div>
                </div>
            </div>
            <div className='copy'>
                <p>© Copyright 2024 - <span>martial arts hub.</span>, All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer