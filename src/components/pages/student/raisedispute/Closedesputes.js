import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Dashbordhed from '../../../comman/Dashbordhed';

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
        id: 23352,
        className: "Brazilian Jiu Jitsu",
        instructorName: "Keyn Mojho",
        DisputeAmount: "4.99",
        Result: "0.00 Received",
        DateClosed: "June 15, 2024",
        button: "View More"
    },
    {
        id: 35243,
        className: "Boxing",
        instructorName: "Marry Jhon",
        DisputeAmount: "6.99",
        Result: "0.00 Received",
        DateClosed: "July 12, 2024",
        button: "View More"
    },

];

function Closedesputes() {
    const navigate = useNavigate();

    const handleStageClick = () => {
        navigate('/DisputeStages')
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
                <div className="disputes" style={{ width: "108%" }}>
                    <table className="tabledispte" style={{ width: "100%", border: "1px solid red" }}>
                        <thead className='headertable'>
                            <tr >
                                <th>Dispute ID</th>
                                <th>Class Name</th>
                                <th>Instructor’s Name</th>
                                <th>Dispute Amount</th>
                                <th> Result</th>
                                <th> Date Closed</th>
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
                                    <td>${dispute.Result}</td>
                                    <td>{dispute.DateClosed}</td>
                                    <td><button className='disputebutton'>{dispute.button}</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='studentdispatchcrete'>
                    <button onClick={handleStageClick}>Create New Dispute</button>
                </div>
            </div>
        </div>
    )
}

export default Closedesputes