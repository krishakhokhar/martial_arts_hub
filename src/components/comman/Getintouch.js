import React from 'react'
import { MdEmail } from 'react-icons/md';
import Button from './Button'
import './Getintouch.css'

function Getintouch() {
    return (
        <div>
            <section className='touch'>
                <div className='anytime'>
                    <div className='get'>
                        <h2>Get in touch with us anytime!</h2>
                        <p>You can always send us a email or message. <br /> We will be happy to help you out.</p>
                        <div className='email'>
                            <div className='email2'>
                                <MdEmail className='md-mail' />
                            </div>
                            <div className='name-email'>
                                <h3>Shoot us an email</h3>
                                <p>yourcompany@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='form'>
                        <input type='text' placeholder='Full Name' />
                        <input type='text' placeholder='Email' />
                        <textarea placeholder="Enter your message here" className='texta'></textarea>
                        <Button text={'Send My Message'} className="send-msg" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Getintouch