import React, { useState } from 'react'
import Dashbordhed from '../../../comman/Dashbordhed';
import { IoIosSearch, IoMdMore } from 'react-icons/io';
import './MyMessages.css';
import imgmy1 from '../../../../image/home/12.png';
import imgmy2 from '../../../../image/home/13.png';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import img2 from '../../../../image/home/13.png';
import { LuShare2 } from 'react-icons/lu';

const chatname = [
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2",
        chat: ["Hello!", "How can I help you?", "Thank you!"],

    },
    {
        img: imgmy2,
        name: "Kiya John",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        icone: <IoCheckmarkDoneOutline />,
        class: "iconnes",
        chat: ["Hi Kiya!", "Sure, let me know.", "Bye!"],

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2",
        chat: ["Hello!", "How can I help you?", "Thank you!"],

    }, {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2",
        chat: ["Hello!", "How can I help you?", "Thank you!"],

    },
    {
        img: imgmy2,
        name: "Kiya John",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        icone: <IoCheckmarkDoneOutline />,
        class: "iconnes",
        chat: ["Hi Kiya!", "Sure, let me know.", "Bye!"],

    },
    {
        img: imgmy2,
        name: "Kiya John",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        icone: <IoCheckmarkDoneOutline />,
        class: "iconnes",
        chat: ["Hi Kiya!", "Sure, let me know.", "Bye!"],

    },

    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },
    {
        img: imgmy1,
        name: "Jhon Martin",
        ans: "Yes! I can help you with... ",
        time: "09:27 AM",
        msg: "2"

    },

]

const onlinechat = [
    {
        img: img2,
        name: "Kiya John",
        name2: "Brazilian Jiu Jitsu Instructor"
    }
]

const time = [
    {
        time: "28 July, 2024"
    }
]



function MyMessages() {
    const [userEmail, setUserEmail] = useState('');

    useState(() => {
        const email = localStorage.getItem('userEmail');
        if (email) setUserEmail(email);
    }, []);

    const send_msg = [
        {
            profile: userEmail,
            time: "09:10 AM",
            activ: <IoCheckmarkDoneOutline />,
            msg: "Hello! I want to know about Brazilian Jiu Jitsu. In how much time i will learn it?",
        },
    ]
    const reseve_msg = [
        {
            img: img2,
            msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
            time: "09:27 AM"
        },
        {
            img: img2,
            msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
            time: "09:27 AM"
        },
        {
            img: img2,
            msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
            time: "09:27 AM"
        },
        {
            img: img2,
            msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
            time: "09:27 AM"
        }
    ]


    return (

        <div >
            <Dashbordhed />
            <div className='row'>
                <div className='col-md-4'>
                    <div className='pading-my-main'>
                        <div className='serch-input-my'>
                            <input type='text' placeholder='Search person' />
                            <IoIosSearch className='search-my' />
                        </div>
                        <div className='scrollable-chats-container'>
                            <div className='scrollable-chats'>
                                {chatname.map((chat, index) => (
                                    <div key={index} style={{ display: "flex", marginTop: index === 0 ? "40px" : "26px", borderBottom: "1px solid #6b6b6b66" }}>
                                        <div>
                                            <img src={chat.img} alt='img' className='my-desh-img' />
                                            <div className='chat-active'></div>
                                        </div>
                                        <div className='chatname'>
                                            <h2>{chat.name}</h2>
                                            <p>{chat.ans}</p>
                                        </div>
                                        <div className='timediv'>
                                            <p>{chat.time}</p>
                                            {chat.icone ? (
                                                <div className={chat.class}>{chat.icone}</div>
                                            ) : (
                                                <p className='my-msg'>{chat.msg}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-8 none-chat' style={{ marginTop: "150px" }}>
                    <div className='profile2'>
                        {/* Profile Section */}
                        {onlinechat.map((item, index) => (
                            <div key={index} style={{ display: "flex" }}>
                                <div>
                                    <img src={item.img} alt='img' className='my-msg-img2' />
                                </div>
                                <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                                    <h2>{item.name}</h2>
                                    <p>{item.name2}</p>
                                </div>
                                <div className='icone2-div'>
                                    <LuShare2 className='share' />
                                </div>
                                <div>
                                    <IoMdMore className='share' />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='scrollable-chats2'>
                        {/* Chat Messages */}
                        <div className='cht-msg-main'>
                            <div className='worrning'>
                                <p>You can send only 10 messages for now. To chat more, you need to book a session.</p>
                                <b>Book Class Now</b>
                            </div>

                            <div className='date-chat'>
                                {time.map((item, index) => (
                                    <div key={index} className='time-date'>
                                        <p>{item.time}</p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                {send_msg.map((send, index) => (
                                    <div key={index}>
                                        <div style={{ display: "flex", justifyContent: "end" }}>
                                            <div className='send-msg-chat'>
                                                <p>{send.msg}</p>
                                            </div>
                                            <div className='usermailchat'>
                                                {userEmail ? userEmail.charAt(0).toUpperCase() : ''}
                                            </div>
                                        </div>
                                        <div className='time-chek'>
                                            <div>
                                                <p className='check-not'>{send.activ}</p>
                                            </div>
                                            <div>
                                                <p className='chek-sms'>{send.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginLeft: "30px" }}>
                                {reseve_msg.map((item, index) => (
                                    <div key={index}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <img src={item.img} alt='img' className='chat-img' />
                                            </div>
                                            <div className='resev-msg-chat'>
                                                <p>{item.msg}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='reseve-msg'>{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='send-msg-user'>
                        <input type='text' placeholder='Write your message here' />
                        <button className='btn-send'>send</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MyMessages