import React, { useEffect, useState } from 'react';
import './Studentcolsecond.css';
import { Modal } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';
import { IoCamera, IoShareSocialOutline } from 'react-icons/io5';
import axios from 'axios';
import baseUrl from '../../../../baseUrl';


// Axios interceptor for handling 401 errors
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Clear local storage and redirect to login
            localStorage.clear();
        }
        return Promise.reject(error);
    }
);

function Studentcolsecond() {
    const token = localStorage.getItem('StudentToken');
    const studentId = localStorage.getItem('studentId');

    const [showEditModal, setShowEditModal] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [profileData, setProfileData] = useState({
        name: '',
        aboutMe: '',
        additionlDetail: '',
        profile_picture: null,
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setProfileData((prev) => ({ ...prev, name: storedName }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profile_picture' && files.length > 0) {
            const file = files[0];
            setImagePreview(URL.createObjectURL(file));
            setProfileData((prev) => ({ ...prev, profile_picture: file }));
        } else {
            setProfileData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const openEditModal = () => setShowEditModal(true);
    const closeEditModal = () => setShowEditModal(false);

    const handleSave = async () => {
        const { name, aboutMe, additionlDetail, profile_picture } = profileData;

        // Validate input fields
        const validationErrors = {};
        if (!name) validationErrors.name = 'Name is required';
        if (!aboutMe) validationErrors.aboutMe = 'About Me is required';
        if (!additionlDetail) validationErrors.additionlDetail = 'Additional Details are required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Prepare data for API request
        const formData = new FormData();
        formData.append('name', name);
        formData.append('aboutMe', aboutMe);
        formData.append('additionlDetail', additionlDetail);
        formData.append('studentId', studentId);
        if (profile_picture) {
            formData.append('profile_picture', profile_picture);
        }

        try {
            // Send API request
            const response = await axios.put(`${baseUrl}/student/profile/update`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                console.log('Profile updated successfully:', response.data);

                // Assuming the server returns the image URL in response.data.imageUrl
                const imageUrl = response.data.imageUrl; // Update this based on your API response
                localStorage.setItem('profileImage', imageUrl); // Saving the image URL

                // Update localStorage with new profile data
                localStorage.setItem('studentProfileData', JSON.stringify(profileData));
                setShowEditModal(false); // Close the modal
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please check your connection and try again.');
        }
    };

    return (
        <div>
            <div className="student-flexitems">
                <div className="student-name">
                    <h2>
                        {profileData.name || 'No Name Found'}
                        <span style={{ fontSize: '21px', fontWeight: '400', color: 'rgba(0, 0, 0, 0.5)' }}>
                            (Student)
                        </span>
                    </h2>
                </div>
                <div style={{ display: 'flex' }}>
                    <button className="btn-edit btn-edit2" onClick={openEditModal}>
                        <CiEdit className="edit" /> Edit
                    </button>
                    <button className="btn-share btn-share2">
                        <IoShareSocialOutline className="edit" /> Share
                    </button>
                </div>
            </div>
            <div className="studentper-outer">
                <div className="studentper-inner">75%</div>
            </div>
            <div className="complet-profile">
                <p>
                    Your profile is incomplete. <span onClick={openEditModal}>Complete Now</span>
                </p>
            </div>
            <Modal show={showEditModal} onHide={closeEditModal} centered className="custom-edit-modal">
                <Modal.Header closeButton />
                <Modal.Body className="modal-body">
                    <div className="edit-content">
                        <form style={{ margin: '20px' }}>
                            <div className="myprofilefleximg">
                                <div className="myprofile2 studentmyprofile2">
                                    <h2>Add Information!</h2>
                                    <p>
                                        Please fill below details to complete your profile in <b>Martial Arts Hub</b> as a
                                        student!
                                    </p>
                                    <div style={{ position: 'relative' }}>
                                        <label className="proname">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="nameinsturctor"
                                            placeholder="Enter your name"
                                            value={profileData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <p className="error">{errors.name}</p>}
                                    </div>
                                </div>
                                <div className="uplodimgprofile">
                                    <div className="uplodimgprofile2">
                                        <IoCamera className="myprocemera" />
                                        <p>Add Profile Picture</p>
                                    </div>
                                    <input
                                        type="file"
                                        name="profile_picture"
                                        className="profile_picture"
                                        onChange={handleChange}
                                    />
                                    {imagePreview && (
                                        <img src={imagePreview} alt="Profile Preview" className="image-preview" />
                                    )}
                                </div>
                            </div>
                            <div className="student-flex-itemsedit">
                                <div className="form-group">
                                    <label className="proname">About Me</label>
                                    <textarea
                                        rows="8"
                                        cols="45"
                                        className="studenttext"
                                        name="aboutMe"
                                        value={profileData.aboutMe}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.aboutMe && <p className="error">{errors.aboutMe}</p>}
                                </div>
                                <div className="form-group">
                                    <label className="proname">Additional Details</label>
                                    <textarea
                                        rows="8"
                                        cols="45"
                                        className="studenttext"
                                        name="additionlDetail"
                                        value={profileData.additionlDetail}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.additionlDetail && <p className="error">{errors.additionlDetail}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-save" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Studentcolsecond;
