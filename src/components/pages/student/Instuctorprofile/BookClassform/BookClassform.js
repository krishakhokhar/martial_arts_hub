import React from "react";
import './BookClassform.css';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdHeart, IoMdStar } from 'react-icons/io';
import star7 from '../../../../../image/home/Star 7.png'

function BookClassform() {
    const location = useLocation();
    const { instructor } = location.state || {}; // Get instructor data passed to this component

    const navigate = useNavigate();

    const handleStageClick = () => {
        // Navigate back to the InstructorProfile page
        navigate('/InstructorProfile', { state: { instructor } }); // Pass instructor data back
    };

    // If no instructor data is available, handle it
    if (!instructor) {
        return <div>No instructor data available. Please go back and select an instructor.</div>;
    }

    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-md-4'>
                    <IoMdArrowBack onClick={handleStageClick} className='bookclassback' />
                    <div className='bokkclasamargin'>
                        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 20px)' }}>
                            <div className='sliderimg-container'>
                                <img src={instructor.img} alt="Instructor" className='instproq' />
                                <IoMdHeart className="heart-icon" />
                            </div>
                            <div>
                            <img src={star7} alt="pound"className="pound" />
                            <h3 className="pound-hr">5$<span className="pound-sapn">/hr</span></h3>
                            </div>
                            <h2 className='instructor-name'>{instructor.name}</h2>
                            <div className="rating-section">
                                <div className="star2">
                                    {[...Array(5)].map((_, idx) => <IoMdStar key={idx} />)}
                                </div>
                                <p className="rating-text">4.3 <span style={{ textDecoration: 'underline' }}>(25 Reviews)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookClassform;