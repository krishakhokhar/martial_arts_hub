import React from 'react';
import './Home.css';
import Button from '../../../comman/Button';
import img1 from '../../../../image/home/1.png';
import img2 from '../../../../image/home/2.png';
import img3 from '../../../../image/home/3.png';
import img4 from '../../../../image/home/4.png';
import img5 from '../../../../image/home/5.png';
import Slider1 from '../../../comman/Slider';
import { FaArrowUpLong } from "react-icons/fa6";
import Secondslide from '../../../comman/Secondslide';
import circalimg from '../../../../image/home/14.png';
import circalimg1 from '../../../../image/home/15.png';
import circalimg2 from '../../../../image/home/16.png';
import circalimg3 from '../../../../image/home/17.png';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../../../comman/Footer';
import Getintouch from '../../../comman/Getintouch';

function Home() {
    return (
        <div>
            {/* //............................ hero-section...................................// */}

            <section className='hero-section'>
                <h1>martial arts hub.</h1>
                <p>The place to begin or elevate your martial arts journey. Created by martial artists for martial artists.</p>
                <div className='btn' >
                    <Button text={"Start Today"} className="start-button" />
                    <Button text={"Already a Member"} className="Already-Member" />
                </div>
            </section>
            {/* //............................hero-section-end...................................// */}

            {/* ....................................section-2................................. */}

            <section className='section-2'>
                <div className='item1 '>
                    <img src={img1} alt='img' />
                    <h2>Sports Psychology</h2>
                    <p>Choose a specialist to enhance your mental game and boost performance.</p>
                </div>
                <div className='item1'>
                    <img src={img2} alt='img' />
                    <h2>Physio</h2>
                    <p>Choose a specialist to optimize your recovery and maintain peak physical performance.</p>
                </div>
                <div className='item1'>
                    <img src={img3} alt='img' />
                    <h2>Martial Arts Coaching</h2>
                    <p>Choose your coach for 1-to-1 sessions, group sessions, or fight analysis, and elevate your game to new heights.</p>
                </div>
                <div className='item1'>
                    <img src={img4} alt='img' />
                    <h2>S&C</h2>
                    <p>Choose a specialist to tailor a strength and conditioning program to achieve your goals.</p>
                </div>
                <div className='item1'>
                    <img src={img5} alt='img' />
                    <h2>Nutrition</h2>
                    <p>Choose a specialist to guide your nutrition and meet your needs.</p>
                </div>
            </section>
            {/* ....................................section-2.end................................ */}

            {/* ....................................slider................................. */}
            <Slider1 />
            {/* ....................................slider...end.............................. */}

            {/*..................................... discipline..................................... */}
            <section className='px-3 lg:px-8 main-discipline'>
                <div className='describe'>
                    <div className=' desc'>
                        <div className='notify'>
                            <h2>Can't see your discipline?</h2>
                            <p>Can't find your martial art discipline in our list? Don't worry! Simply notify us, and we'll make every effort to add it to our offerings.</p>
                        </div>
                        <div className='noyify-input'>
                            <input type='text' placeholder="Enter Discipline’s name" />
                            <textarea placeholder='Description'></textarea>
                            <div className='divtion'>
                                <Button text={'Notify Us'} className='notify-btn' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*..................................... discipline..end................................... */}
            { /*........................................................ martial arts hub................. */}
            <section className='py-20 px-3 lg:px-8v martial' >
                <h2 className='title'>martial arts hub.</h2>
                <div className='-mt-7 who-are'>
                    <h2>Who we are</h2>
                    <p>Welcome to Martial Arts Hub, the global online platform for martial artists of all levels. We connect practitioners who want to learn and improve themselves with top-notch instructors who are passionate about sharing their knowledge and helping others. Our personalized guidance is tailored to fit your unique needs, whether you prefer the convenience of online sessions or the hands-on experience of face-to-face training.</p>
                    <p>But we don't stop there. At Martial Arts Hub, we believe in holistic improvement. That's why we also offer access to nutritionists, strength and conditioning coaches, physiotherapists, and sports psychologists. Our diverse network of experts ensures you have the comprehensive support you need to excel in every aspect of your martial arts journey. Wherever you are based in the world, you can join us at Martial Arts Hub and unlock your full potential. Your path to excellence starts here.</p>
                    <Button className='lernmore-btn' text={'Learn More'} icone={<FaArrowUpLong className='arrow' />}></Button>
                </div>
            </section>
            { /*........................................................ martial arts hub..end............... */}
            {/* ..............................................Ready to Learn?......................................... */}
            <section className='bg-black px-3 lg:px-8 redytolern'>
                <h2>Ready to Learn?</h2>
                <p className='text-xl text-center text-white/50 mt-5'>Ready to learn martial arts but need some direction? Don’t worry, we've got you covered.</p>
                <p className='text-xl text-center text-white/50 mt-4 max-w-screen-lg mx-auto'>Join Us online classes and learn from world-class martial arts instructors. Train at your own pace and master the art of self-defense or message our instructors for personalized guidance.</p>
                <div className='btns-ls2'>
                    <Button className='Start-Today1' text={'Start Today'} icone={<FaArrowUpLong className='arrow' />}></Button>
                    <Button className='lernmore-btn1' text={'Learn More'} icone={<FaArrowUpLong className='arrow' />}></Button>
                </div>
            </section>
            {/* ..............................................Ready to Learn?..end....................................... */}

            {/* ............................................Why Join Us.................................................. */}
            <section className='md:py-space py-20 px-3 lg:px-8 whay-join' >
                <h2 className='whay'>Why Join Us</h2>
                <div>
                    <div className="circal">
                        <div className='circal2'>
                            <h2>martial arts hub.</h2>
                        </div>
                        <div className='expert'>
                            <div className='under-expert'>
                                <h2>Expert Instructors</h2>
                                <p>Our highly qualified instructors bring years of experience and passion to every class.</p>
                                <div className='bordercercl'>1.</div>
                            </div>
                        </div>
                        <div className='expert1'>
                            <div className='under-expert2'>
                                <h2>Diverse Styles</h2>
                                <p>We offer a variety of martial arts styles, including Karate, Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.</p>
                                <div className='bordercercl1'>2.</div>
                            </div>
                        </div>
                        <div className='expert2'>
                            <div className='under-expert'>
                                <h2>Supportive Community</h2>
                                <p>Join a welcoming and encouraging community that fosters growth and camaraderie.</p>
                                <div className='bordercercl3'>3.</div>
                            </div>
                        </div>
                        <div className='expert3'>
                            <div className='under-expert2'>
                                <h2>Holistic Development</h2>
                                <p>Our programs focus on physical fitness, mental resilience, and building confidence.</p>
                                <div className='bordercercl4' >4.</div>
                            </div>
                        </div>
                        <div className='expert4'>
                            <div className='under-expert'>
                                <h2>Flexible Training</h2>
                                <p>We provide classes for all ages and skill levels, ensuring everyone can find their perfect fit.</p>
                                <div className='bordercercl5'>5.</div>
                            </div>
                        </div>
                        <div className='expert5'>
                            <div className='under-expert2' >
                                <h2>Community Focus</h2>
                                <p>Join a community dedicated to your personal growth and excellence.</p>
                                <div className='bordercercl6'>6.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row none">
                    <div className="disply lg:hidden grid md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="Instructors">
                            <h2>Expert Instructors</h2>
                            <p>Our highly qualified instructors bring years of experience and passion to every class.</p>
                            <div className="name-1">1.</div>
                        </div>
                        <div className="Instructors2">
                            <h2>Diverse Styles</h2>
                            <p>We offer a variety of martial arts styles, including Karate, Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.</p>
                            <div className="name-2">2.</div>
                        </div>
                        <div className="Instructors">
                            <h2>Supportive Community</h2>
                            <p>Join a welcoming and encouraging community that fosters growth and camaraderie.</p>
                            <div className="name-1">3.</div>
                        </div>
                        <div className="Instructors2">
                            <h2>Holistic Development</h2>
                            <p>Our programs focus on physical fitness, mental resilience, and building confidence.</p>
                            <div className="name-2">4.</div>
                        </div>
                        <div className="Instructors">
                            <h2>Flexible Training</h2>
                            <p>We provide classes for all ages and skill levels, ensuring everyone can find their perfect fit.</p>
                            <div className="name-1">5.</div>
                        </div>
                        <div className="Instructors2">
                            <h2>Community Focus</h2>
                            <p>Join a community dedicated to your personal growth and excellence.</p>
                            <div className="name-2">6.</div>
                        </div>
                    </div>
                </div>

            </section>
            {/* ............................................Why Join Us.....end............................................. */}
            {/*................................... Our Instructors............................... */}
            <section className='md:py-space pb-20 lg:px-8 our '>
                <h2>Our Instructors</h2>
                <Secondslide />
            </section>
            {/*................................... Our Instructors-end.............................. */}
            {/* ...................................app dowonlod.............................. */}

            <section className='app'>
                <h2>Download the App to Get more <span>Benefits</span></h2>
                <p>Join us and begin your journey towards ultimate fitness, where you will feel empowered, stronger, healthier, and more confident than ever before.</p>
                <Button className='Start-Today1 newget' text={'Get the App'} icone={<FaArrowUpLong className='arrow' />}></Button>
            </section>
            {/* ...................................app dowonlod..and............................ */}

            {/* How does it Work?....................................... */}
            <section className='Howdoes'>
                <h2>How does it Work?</h2>
                <p>Below are the steps of how to join as a student:</p>
                <div className='main-greed'>
                    <div className='circal-greed dotes-border'>
                        <div >
                            <div className='greed-1'>
                                <img src={circalimg} alt='img' />
                            </div>
                            <h2 className='signup'>Sign Up</h2>
                            <p className='Quickly'>Quickly create your account and join our martial arts community.</p>
                        </div>
                        <div >
                            <div className='greed-1'>
                                <img src={circalimg1} alt='img' />
                            </div>
                            <h2 className='signup'>Get Verified</h2>
                            <p className='Quickly'>Complete our simple verification for a safe and secure training environment.</p>
                        </div>
                        <div >
                            <div className='greed-1'>
                                <img src={circalimg2} alt='img' />
                            </div>
                            <h2 className='signup'>Choose your instructor/coach</h2>
                            <p className='Quickly'>Select from our experienced instructors to match your style and goals.</p>
                        </div>
                        <div >
                            <div className='greed-1'>
                                <img src={circalimg3} alt='img' />
                            </div>
                            <h2 className='signup'>Begin your martial arts journey</h2>
                            <p className='Quickly'>Start training, learn, and achieve your goals with our supportive community.</p>
                        </div>
                    </div>
                </div>
                <div className='section-type'>
                    <div className='second-section'>
                        <p><span>Join our network of martial arts professionals</span>and empower students with your knowledge. Enjoy the benefits of online teaching with a dedicated support system.</p>
                        <Button text={'Lead the Way'} className="lead-btn" icone={<FaArrowUpLong className='arrow' />} />
                    </div>
                </div>
            </section>
            {/* How does it Work?...end.................................... */}
            {/* Frequently ................................................ */}
            <section className='Frequently ' >
                <h2>Frequently Asked Questions</h2>
                <p>Welcome to our FAQ section! Here, you'll find answers to common questions about our martial arts classes, training, and what to expect.</p>
                <div className='according'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What age groups can participate in martial arts classes?</Accordion.Header>
                            <Accordion.Body>
                                For now our classes are designed for adults only.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Do I need any prior experience to join?</Accordion.Header>
                            <Accordion.Body>
                                For now our classes are designed for adults only.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What should I wear to my first class?</Accordion.Header>
                            <Accordion.Body>
                                For now our classes are designed for adults only.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How often should I attend classes to see progress?</Accordion.Header>
                            <Accordion.Body>
                                For now our classes are designed for adults only.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Is martial arts training safe?</Accordion.Header>
                            <Accordion.Body>
                                For now our classes are designed for adults only.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>
            {/* Frequently ....end............................................ */}

            {/* Get in touch with us anytime!................................ */}
<Getintouch/>
            {/* Get in touch with us anytime-end!................................ */}
            {/* Footer.................................................. */}
            <Footer/>
            
            {/* Footer....end.............................................. */}



        </div>
    );
}

export default Home;
