import React, { useEffect, useState } from 'react';
import './Studentcolsecond.css';
import { Modal } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';
import { IoCamera, IoShareSocialOutline } from 'react-icons/io5';

function Studentcolsecond() {
    const [showEditModal, setShowEditModal] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [userName, setUserName] = useState('');
    const [errors, setErrors] = useState({});  // State for errors

    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (name) setUserName(name);
    }, []);

    const handleChange = (e) => {
        const { name, files } = e.target;
        if (name === 'profile_picture' && files.length > 0) {
            const file = files[0];
            setImagePreview(URL.createObjectURL(file)); // Create a preview for the image
        }
    };

    const openEditModal = () => setShowEditModal(true);
    const closeEditModal = () => setShowEditModal(false);

    const handleSave = () => {
        const name = document.getElementById('name').value;
        const aboutMe = document.querySelectorAll('.studenttext')[0].value;
        const additionalDetails = document.querySelectorAll('.studenttext')[1].value;

        // Validate the form fields
        const validationErrors = {};
        if (!name) validationErrors.name = 'Name is required';
        if (!aboutMe) validationErrors.aboutMe = 'About Me is required';
        if (!additionalDetails) validationErrors.additionalDetails = 'Additional Details are required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);  // Set errors if validation fails
        } else {
            const dataToSave = {
                name,
                aboutMe,
                additionalDetails,
                profilePicture: imagePreview || null,
            };

            // Save data to localStorage
            localStorage.setItem('studentProfileData', JSON.stringify(dataToSave));

            console.log('Data saved successfully:', dataToSave);

            // Close modal after saving
            setShowEditModal(false);
        }
    };

    return (
        <div>
            <div className='student-flexitems'>
                <div className='student-name'>
                    <h2>{userName || 'No Name Found'}
                        <span style={{ fontSize: '21px', fontWeight: '400', color: 'rgba(0, 0, 0, 0.5)' }}>(Student)</span>
                    </h2>
                </div>
                <div style={{ display: 'flex' }}>
                    <button className='btn-edit btn-edit2' onClick={openEditModal}>
                        <CiEdit className='edit' /> Edit
                    </button>
                    <button className='btn-share btn-share2'>
                        <IoShareSocialOutline className='edit' /> Share
                    </button>
                </div>
            </div>
            <div className='studentper-outer'>
                <div className='studentper-inner'>75%</div>
            </div>
            <div className='complet-profile'>
                <p>Your profile is incomplete. <span onClick={openEditModal}>Complete Now</span></p>
            </div>
            <Modal show={showEditModal} onHide={closeEditModal} centered className="custom-edit-modal">
                <Modal.Header closeButton />
                <Modal.Body className="modal-body">
                    <div className="edit-content">
                        <form style={{ margin: '20px' }}>
                            <div className='myprofilefleximg'>
                                <div className='myprofile2 studentmyprofile2'>
                                    <h2>Add Information!</h2>
                                    <p>Please fill below details to complete your profile in <b>Martial Arts Hub</b> as a student!</p>
                                    <div style={{ position: "relative" }}>
                                        <label className='proname'>Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className='nameinsturctor'
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && <p className="error">{errors.name}</p>}
                                    </div>
                                </div>
                                <div className='uplodimgprofile'>
                                    <div className='uplodimgprofile2'>
                                        <IoCamera className='myprocemera' />
                                        <p>Add Profile Picture</p>
                                    </div>
                                    <input
                                        type='file'
                                        name='profile_picture'
                                        className='profile_picture'
                                        onChange={handleChange}
                                    />
                                    {imagePreview && <img src={imagePreview} alt="Profile Preview" className='image-preview' />}
                                </div>
                            </div>
                            <div className='student-flex-itemsedit'>
                                <div className="form-group">
                                    <label className='proname'>About Me</label>
                                    <textarea rows='8' cols='45' className='studenttext'></textarea>
                                    {errors.aboutMe && <p className="error">{errors.aboutMe}</p>}
                                </div>
                                <div className="form-group">
                                    <label className='proname'>Additional Details</label>
                                    <textarea rows='8' cols='45' className='studenttext'></textarea>
                                    {errors.additionalDetails && <p className="error">{errors.additionalDetails}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-save" onClick={handleSave}>Save</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Studentcolsecond;
// import React, { useEffect, useState } from 'react';
// import './Studentcolsecond.css';
// import { Modal } from 'react-bootstrap';
// import { CiEdit } from 'react-icons/ci';
// import { IoCamera, IoShareSocialOutline } from 'react-icons/io5';
// import axios from 'axios';
// import baseUrl from '../../../../baseUrl';

// function Studentcolsecond() {
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [imagePreview, setImagePreview] = useState(null);
//     const [userName, setUserName] = useState('');
//     const [errors, setErrors] = useState({}); // State for errors
//     const [formData, setFormData] = useState({
//         name: '',
//         profile_picture: null,
//         aboutMe: '',
//         additionalDetails: '',
//     });

//     useEffect(() => {
//         const name = localStorage.getItem('userName');
//         if (name) setUserName(name);
//     }, []);

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (name === 'profile_picture' && files.length > 0) {
//             const file = files[0];
//             setImagePreview(URL.createObjectURL(file)); // Create a preview for the image
//             setFormData({ ...formData, profile_picture: file });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const openEditModal = () => setShowEditModal(true);
//     const closeEditModal = () => {
//         setShowEditModal(false);
//         setErrors({});
//     };

//     const handleSave = async () => {
//         // Validate the form fields
//         const validationErrors = {};
//         if (!formData.name) validationErrors.name = 'Name is required';
//         if (!formData.aboutMe) validationErrors.aboutMe = 'About Me is required';
//         if (!formData.additionalDetails)
//             validationErrors.additionalDetails = 'Additional Details are required';

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors); // Set errors if validation fails
//             return;
//         }

//         // Prepare FormData for the API
//         //     const requestPayload = new FormData();
//         //     requestPayload.append('name', formData.name);
//         //     requestPayload.append('aboutMe', formData.aboutMe);
//         //     requestPayload.append('additionalDetails', formData.additionalDetails);
//         //     if (formData.profile_picture) {
//         //         requestPayload.append('profile_picture', formData.profile_picture);
//         //     }

//         //     try {
//         //         const response = await axios.post(
//         //             `${baseUrl}/student/profile/update`,
//         //             requestPayload,
//         //             {
//         //                 headers: {
//         //                     'Content-Type': 'multipart/form-data',
//         //                 },
//         //             }
//         //         );

//         //         console.log('API Response:', response.data);

//         //         // Save response data locally
//         //         localStorage.setItem('studentProfileData', JSON.stringify(response.data));

//         //         // Close modal after successful update
//         //         setShowEditModal(false);
//         //     } catch (error) {
//         //         console.error('Error updating profile:', error);
//         //         alert('An error occurred while updating the profile. Please try again.');
//         //     }
//     };

//     return (
//         <div>
//             <div className='student-flexitems'>
//                 <div className='student-name'>
//                     <h2>
//                         <h2>{userName || 'No Name Found'}
//                             <span style={{ fontSize: '21px', fontWeight: '400', color: 'rgba(0, 0, 0, 0.5)' }}>(Student)</span>
//                         </h2>
//                     </h2>
//                 </div>
//                 <div style={{ display: 'flex' }}>
//                     <button className='btn-edit btn-edit2' onClick={openEditModal}>
//                         <CiEdit className='edit' /> Edit
//                     </button>
//                     <button className='btn-share btn-share2'>
//                         <IoShareSocialOutline className='edit' /> Share
//                     </button>
//                 </div>
//             </div>
//             <div className='studentper-outer'>
//                 <div className='studentper-inner'>75%</div>
//             </div>
//             <div className='complet-profile'>
//                 <p>
//                     Your profile is incomplete. <span onClick={openEditModal}>Complete Now</span>
//                 </p>
//             </div>
//             <Modal show={showEditModal} onHide={closeEditModal} centered className="custom-edit-modal">
//                 <Modal.Header closeButton />
//                 <Modal.Body className="modal-body">
//                     <div className="edit-content">
//                         <form style={{ margin: '20px' }}>
//                             <div className='myprofilefleximg'>
//                                 <div className='myprofile2 studentmyprofile2'>
//                                     <h2>Add Information!</h2>
//                                     <p>
//                                         Please fill below details to complete your profile in <b>Martial Arts Hub</b> as a student!
//                                     </p>
//                                     <div style={{ position: "relative" }}>
//                                         <label className='proname'>Name</label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             className='nameinsturctor'
//                                             placeholder="Enter your name"
//                                         />
//                                         {errors.name && <p className="error">{errors.name}</p>}
//                                     </div>
//                                 </div>
//                                 <div className='uplodimgprofile'>
//                                     <div className='uplodimgprofile2'>
//                                         <IoCamera className='myprocemera' />
//                                         <p>Add Profile Picture</p>
//                                     </div>
//                                     <input
//                                         type='file'
//                                         name='profile_picture'
//                                         className='profile_picture'
//                                         onChange={handleChange}
//                                     />
//                                     {imagePreview && <img src={imagePreview} alt="Profile Preview" className='image-preview' />}
//                                 </div>
//                             </div>
//                             <div className='student-flex-itemsedit'>
//                                 <div className="form-group">
//                                     <label className='proname'>About Me</label>
//                                     <textarea
//                                         rows='8'
//                                         cols='45'
//                                         name="aboutMe"
//                                         value={formData.aboutMe}
//                                         onChange={handleChange}
//                                         className='studenttext'
//                                     ></textarea>
//                                     {errors.aboutMe && <p className="error">{errors.aboutMe}</p>}
//                                 </div>
//                                 <div className="form-group">
//                                     <label className='proname'>Additional Details</label>
//                                     <textarea
//                                         rows='8'
//                                         cols='45'
//                                         name="additionalDetails"
//                                         value={formData.additionalDetails}
//                                         onChange={handleChange}
//                                         className='studenttext'
//                                     ></textarea>
//                                     {errors.additionalDetails && <p className="error">{errors.additionalDetails}</p>}
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="modal-footer">
//                         <button className="btn-save" onClick={handleSave}>Save</button>
//                     </div>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default Studentcolsecond;


