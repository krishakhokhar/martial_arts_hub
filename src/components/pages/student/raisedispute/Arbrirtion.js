import React, { useEffect, useState, useRef } from 'react';
import './Arbrirtion.css'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import img1 from '../../../../image/home/13.png';

function Arbrirtion() {
    // Navigation
    const navigate = useNavigate();
    const handleStageClick = () => {
        navigate('/DisputeStages');
    };

    // Email Chat
    const [userEmail, setUserEmail] = useState('');
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null); // Reference for scrolling

    // Load user email from localStorage on mount
    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            setUserEmail(email);
            // Set default messages
            setMessages([
                {
                    profile: email,
                    time: formatDate(new Date()), // Use formatted date
                    msg: "At this stage, students and instructors can discuss about the dispute, and the Admin can monitor and provide input.",
                },
                {
                    img: img1,
                    msg: "At this stage, students and instructors can discuss about the dispute, and the Admin can monitor and provide input.",
                    time: " " + formatDate(new Date()), // Use formatted date
                }
            ]);
        }
    }, []);

    const formatDate = (date) => {
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        const input = e.target.elements.message;
        const newMessage = {
            profile: userEmail,
            time: formatDate(new Date()),
            msg: input.value,
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        input.value = '';


        setTimeout(() => {
            const replyMessage = {
                img: img1,
                msg: "Thank you for your message. We will review your dispute.",
                time: formatDate(new Date()),
            };
            setMessages(prevMessages => [...prevMessages, replyMessage]);
        }, 1000);
    };

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const data = [
        { label: "Total Disputed Amount:", value: "5.99" },
        { label: "Student (You) wants to receive:", value: "5.99" },
        { label: "Instructor (Keyn mojho) wants to pay:", value: "0.00" },
    ];

    return (
        <div className='container'>
            <div className='newdisputes'>
                <h2><IoArrowBackOutline onClick={handleStageClick} style={{ marginRight: '15px' }} />New Dispute</h2>
            </div>

            <div className="dispute-stages">
                {/* Stage 1 */}
                <div className='stage stage-1' id='stage-1'>
                    <p className="stage-title">--: STAGE 1 :--</p>
                    <p className="stage-name">IDENTIFY THE ISSUE</p>
                </div>
                <FaArrowAltCircleRight className="stageicone stageicone3 " />

                {/* Stage 2 */}
                <div className='stage stage-2' id='stage-1'>
                    <p className="stage-title">--: STAGE 2 :--</p>
                    <p className="stage-name">NEGOTIATION</p>
                </div>
                <FaArrowAltCircleRight className="stageicone" id='stageicone'/>

                {/* Stage 3 */}
                <div className='stage stage-3' id='stage-2'>
                    <p className="stage-title">--: STAGE 3 :--</p>
                    <p className="stage-name">ARBITRATION </p>
                </div>
            </div>
            <div className='issue'>
                <h5>Stage 2 - Negotiation</h5>
                <p>At this stage, students and instructors can discuss about the dispute, and the Admin can monitor and provide input.</p>
            </div>
            <div className='row nagotion'>
                <div className='col-md-4'>
                    <p><b>Class Name: </b>Brazilian Jiu Jitsu</p>
                </div>
                <div className='col-md-4'>
                    <p><b>Dispute:</b> Emily Roberts vs Keyn Mojho</p>
                </div>
                <div className='col-md-4'>
                    <p><b>Dispute type: </b>Class Issue</p>
                </div>
            </div>
            <div className='row '>
                <div className='col-lg-8 negotuonschats'>
                    <div className='scroollauto'>
                        {messages.map((message, index) => (
                            <div key={index}>
                                <div style={{ display: "flex", justifyContent: message.img ? "start" : "end" }}>
                                    {message.img && <img src={message.img} alt='img' className='chat-img' />}
                                    <div className={message.img ? 'resev-msg-chat resev-msg-negition' : 'send-msg-chat send-msg-nagiton'}>
                                        <p>{message.msg}</p>
                                    </div>
                                    {!message.img && (
                                        <div className='usermailchat'>
                                            {userEmail ? userEmail.charAt(0).toUpperCase() : ''}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div>
                                        {message.img ? (
                                            <p className='chek-sms' style={{ color: '#cb3530 ' }}>
                                                Admin {message.time}
                                            </p>
                                        ) : (
                                            <p className='chek-sms time-chek'>{message.time}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} /> {/* Reference for scrolling */}
                    </div>
                    <div className='abration'>
                        <p>Dispute Closed by admin on 04 Aug 2024. Solution given by admin will be shown here.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="stustes">
                        {/* Render dynamic items */}
                        {data.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    borderBottom:
                                        index === 0
                                            ? "1px solid rgba(107, 107, 107, 0.2)"
                                            : undefined,
                                    padding: index === 0 ? "15px" : "6px",
                                }}
                            >
                                <div className={index === 0 ? "nagotionsbill2" : "negotionsstatusbill"}>
                                    <b>{item.label}</b>
                                </div>
                                <div className={index === 0 ? "priofstatus" : "priofstatus1"}>
                                    <b>${item.value}</b>
                                </div>
                            </div>
                        ))}
                        <hr style={{ width: '100%' }}></hr>
                        {/* Result Section */}
                        <div className="negotionsstatusbill">
                            <b>Result:</b>
                            <div className="ongoingstatus  ongoingstatus_abriotion">
                                <p>Closed on 04 Aug 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arbrirtion