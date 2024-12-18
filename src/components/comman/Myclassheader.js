import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Myclassheader.css'

const btn = [
    {
        name: "Upcoming Classes",
        url: "/MyClasses"
    },
    {
        name: "Ongoing Classes",
        url: "/Ongoingclass"

    },
    {
        name: "Completed Classes",
        url: "/CompletedClasses"
    }
]

function Myclassheader() {
    const location = useLocation();
  return (
    <div>
         <div className='myclass-main'>
                <h2>My Classes</h2>
                <div className='btn-myclass'>
                    {btn.map((item, index) => (
                        <div key={index}>
                            <Link className={`classesdif ${location.pathname === item.url ? 'active-btn' : ''}`} to={item.url}>
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Myclassheader