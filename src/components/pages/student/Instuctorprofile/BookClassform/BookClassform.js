import React from 'react';
import './BookClassform.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function BookClassform() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const { instructor } = location.state || {}; // Get instructor data passed to this component

    // If no instructor data is available, handle it
    if (!instructor) {
        return <div>No instructor data available. Please go back and select an instructor.</div>;
    }

    const handleStageClick = () => {
        // Pass instructor data, including image name and other relevant data
        navigate('/InstructorProfile', { 
            state: { 
                instructor: {
                    name: instructor.name,
                    photo: instructor.photo,
                    // Add any other data you want to pass
                } 
            } 
        });
    };

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <IoMdArrowBack onClick={handleStageClick} className='bookclassback' />
                </div>
                <div className='col-12'>
                    <div className="book-class-content" style={{ 
                        overflowY: 'auto', 
                        maxHeight: '100vh',
                        padding: '20px'
                    }}>
                        <h1>Book Class Form</h1>
                        <p>Instructor Name: {instructor.name}</p>
                        <img 
                            src={instructor.photo} 
                            alt="Instructor" 
                            className="img-fluid"
                            style={{ 
                                maxWidth: '150px',
                                height: 'auto'
                            }} 
                        />
                        {/* Add your form fields here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookClassform;