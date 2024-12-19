import React from 'react'
import './RaiseDispute.css'
import Dashbordhed from '../../../comman/Dashbordhed'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const btn = [
  {
    name: "Active Disputes",
    url: "/RaiseDispute"
  },
  {
    name: "Closed Disputes",
    url: "/ClosedDisputes"

  },

]

const disputes = [
  {
    id: 1234,
    className: "Math 101",
    instructorName: "John Doe",
    DisputeAmount: "4.2",
    status: "Pending",
    timeToRespond: "2 days",
    button: "View More"
  },
  {
    id: 5678,
    className: "History 202",
    instructorName: "Jane Smith",
    DisputeAmount: "4.8",
    status: "Resolved",
    timeToRespond: "N/A",
    button: "View More"
  },

];


function RaiseDispute() {
  const navigate = useNavigate();
  const handleStageClick = () => {
    navigate('/DisputeStages')
  }
  const navigate1 = useNavigate();
  const negotiation = () => {
    navigate1('/Negotiation')
  }
  const location = useLocation();
  return (
    <div>
      <Dashbordhed />
      <div className='myclass-main'>
        <h2>Disputes</h2>
        <div className='btn-myclass'>
          {btn.map((item, index) => (
            <div key={index}>
              <Link className={`classesdif ${location.pathname === item.url ? 'active-btn' : ''}`} to={item.url}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="disputes" style={{ width: "120%" }}>
          <table className="tabledispte" style={{ width: "100%", border: "1px solid red" }}>
            <thead className='headertable'>
              <tr >
                <th>Dispute ID</th>
                <th>Class Name</th>
                <th>Instructor’s Name</th>
                <th>Dispute Amount</th>
                <th> Status</th>
                <th> Time to Respond</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map((dispute) => (
                <tr key={dispute.id}>
                  <td>#{dispute.id}</td>
                  <td>{dispute.className}</td>
                  <td>{dispute.instructorName}</td>
                  <td>${dispute.DisputeAmount}</td>
                  <td>{dispute.status}</td>
                  <td>{dispute.timeToRespond}</td>
                  <td><button className='disputebutton' onClick={negotiation}>{dispute.button}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='studentdispatchcrete'>
          <button onClick={handleStageClick} >Create New Dispute</button>
        </div>
      </div>
    </div>
  )
}

export default RaiseDispute