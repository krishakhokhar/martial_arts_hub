import React from 'react'
import './Ongoingclass.css'
import upimg from '../../../../../image/home/6.png'
import upimg1 from '../../../../../image/home/9.png'
import Myclassheader from '../../../../comman/Myclassheader'
import Dashbordhed from '../../../../comman/Dashbordhed'

function Ongoingclass() {

  const classData = [
    {

      title: 'Wrestling',
      classDate: '26 Aug, 2024',
      classType: 'Online',
      instructor: 'Mr. Smith Martin',
      img: upimg
    },
    {

      title: 'Boxing',
      classDate: '28 Aug, 2024',
      classType: 'Face to Face',
      instructor: 'Ms. Jane Doe',
      img: upimg1
    },

  ];

  return (
    <div>
       <Dashbordhed />
       <Myclassheader/>
      <div>
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
                  <p className="jointoclassup jointoclassup2">Join Class</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Ongoingclass