import React from 'react'
import Dashbordhed from '../../../../comman/Dashbordhed'
import './MyClasses.css'
// import { Link, useLocation } from 'react-router-dom'
import upimg from '../../../../../image/home/6.png';
import upimg1 from '../../../../../image/home/9.png'
import Myclassheader from '../../../../comman/Myclassheader'

const classData = [
    {

        title: 'Wrestling',
        classDate: '26 Aug, 2024',
        classType: 'Online',
        instructor: 'Mr. Smith Martin',
        time: '01:00 PM',
        img: upimg
    },
    {
        title: 'Boxing',
        classDate: '28 Aug, 2024',
        classType: 'Face To Face',
        instructor: 'Ms. Jane Doe',
        time: '02:00 PM',
        img: upimg1
    },

];
function MyClasses() {

    return (
        <div>
            <Dashbordhed />
            <Myclassheader />
            <div className='upcomming'>
                <div>
                    {classData.map((item) => (
                        <div key={item.id} className='invoiceflex'><div>
                            <div className='invoiceflex2'>
                                <div>
                                    <img src={item.img} alt={item.title} className="umimg1" />
                                </div>
                                <div className="upcommingwre">
                                    <h3>{item.title}</h3>
                                    <p>
                                        <span>Class Date:</span> {item.classDate}
                                        <span> • Class type:</span> {item.classType}
                                    </p>
                                    <p>
                                        <span>Instructor Name: </span>{item.instructor}
                                    </p>
                                </div>
                            </div>
                        </div>
                            <div>
                                <p className="jointoclassup  ">Join at {item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyClasses