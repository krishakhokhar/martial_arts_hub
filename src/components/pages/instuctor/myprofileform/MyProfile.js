import React, { useState, useEffect } from 'react';
import './MyProfile.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoCamera } from 'react-icons/io5';
import { IoMdCloudUpload } from 'react-icons/io';
import Button from '../../../comman/Button';
import Footer from '../../../comman/Footer';
import { Modal } from 'react-bootstrap';
import { BsCheckCircleFill } from 'react-icons/bs';

function MyProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '', // This will be populated from local storage
        mobile: '',
        availability: '',
        bio: '',
        tagline: '',
        experience: '',
        trainingHistory: '',
        certifications: '',
        keywords: '',
        hourlyRate: '',
        sessionType: '',
        privettypes: '',
        privateLessonRate: '',
        idProof: null,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [documentPreview, setDocumentPreview] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Retrieve email from local storage and set it in formData
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                email: storedEmail,
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profile_picture' && files.length > 0) {
            const file = files[0];
            setImagePreview(URL.createObjectURL(file)); // Create a preview for the image
            setFormData({
                ...formData,
                [name]: file,
            });
        } else if (name === 'idProof' && files.length > 0) {
            const file = files[0];
            setDocumentPreview(URL.createObjectURL(file));
            setFormData({
                ...formData,
                [name]: file,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const validateForm = () => {
        let newErrors = {};

        // Required field checks
        if (!formData.name) {
            newErrors.name = 'Name is required.';
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Valid email is required.';
        }
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits.';
        }
        if (!formData.availability) {
            newErrors.availability = 'Availability date is required.';
        }
        if (!formData.bio) {
            newErrors.bio = 'Bio is required.';
        }
        if (!formData.tagline) {
            newErrors.tagline = 'Tagline is required.';
        }
        if (!formData.experience) {
            newErrors.experience = 'Experience is required.';
        }
        if (!formData.trainingHistory) {
            newErrors.trainingHistory = 'Training history is required.';
        }
        if (!formData.certifications) {
            newErrors.certifications = 'Certifications are required.';
        }
        if (!formData.keywords) {
            newErrors.keywords = 'Keywords are required.';
        }
        if (!formData.hourlyRate || isNaN(formData.hourlyRate)) {
            newErrors.hourlyRate = 'Hourly rate is required and must be a number.';
        }
        if (!formData.sessionType) {
            newErrors.sessionType = 'Session type is required.';
        }
        if (!formData.privettypes) {
            newErrors.privettypes = 'Private session type is required';
        }
        if (!formData.privateLessonRate || isNaN(formData.privateLessonRate)) {
            newErrors.privateLessonRate = 'Private lesson rate is required and must be a number.';
        }
        if (!formData.idProof) {
            newErrors.idProof = 'ID proof is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowSuccessModal(true);
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    availability: '',
                    bio: '',
                    tagline: '',
                    experience: '',
                    trainingHistory: '',
                    certifications: '',
                    keywords: '',
                    hourlyRate: '',
                    sessionType: '',
                    privettypes: '',
                    privateLessonRate: '',
                    idProof: null,
                });
            }, 1000);
        }
    };
    const navigate1 = useNavigate("")
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const closeSuccessModal = () => {
        setShowSuccessModal(false);
        navigate1('/');
    };


    return (
        <div>
            <div className='maininfo'>
                <FaArrowLeft className='myprofileaarow' onClick={() => navigate("/Instuctorsignup")} />
                <form onSubmit={handleSubmit} method='post'>
                    <div className='myprofilefleximg'>
                        <div className='myprofile2'>
                            <h1>Add Information!</h1>
                            <p>Please fill below details to create your profile in <span style={{ fontWeight: "700" }}>martial arts hub</span> as an Instructor!</p>
                            <div style={{ marginTop: "30px" }}>
                                <div>
                                    <label className='proname'>Name</label>
                                    <div style={{ position: "relative" }}>
                                        <input type='text'
                                            name='name'
                                            className='nameinsturctor'
                                            placeholder='Name'
                                            value={formData.name}
                                            onChange={handleChange} />
                                        {errors.name && <p className="error-text">{errors.name}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uplodimgprofile'>
                            <div className='uplodimgprofile2'>
                                <IoCamera className=' myprocemera' />
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
                    <div className='mailreqvest'>
                        <div>
                            <div>
                                <label className='proname'>Email</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        className='proemailreqvest'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="error-text">{errors.email}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='proname'>Mobile No.</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type='text'
                                        placeholder='Mobile No'
                                        name='mobile'
                                        maxLength={10}
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className='proemailreqvest' />
                                    {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='rhirdfilddate'>
                            <div>
                                <label className='proname'>Add Availability</label>
                                <div style={{ position: "relative" }}>
                                    <input type='date'
                                        placeholder='availability'
                                        name='availability'
                                        value={formData.availability}
                                        onChange={handleChange}
                                        className='proemailreqvest' />
                                    {errors.availability && <p className="error-text">{errors.availability}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='rhirdfilddate'>
                            <div>
                                <label className='proname'>Add Bio</label>
                                <div style={{ position: "relative" }}>
                                    <textarea
                                        placeholder="Write about you"
                                        className='proemailreqvest'
                                        name='bio'
                                        value={formData.bio}
                                        onChange={handleChange}
                                        style={{ padding: "15px" }}  ></textarea>
                                    {errors.bio && <p className="error-text">{errors.bio}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='rhirdfilddate'>
                            <div>
                                <label className='proname'>Add tagline</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type='text'
                                        placeholder='Add tagline'
                                        name='tagline'
                                        value={formData.tagline}
                                        onChange={handleChange}
                                        className='proemailreqvest' />
                                    {errors.tagline && <p className="error-text">{errors.tagline}</p>}
                                </div>
                            </div>
                        </div>

                        <div className='rhirdfilddate'>
                            <div>
                                <label className='proname'>Add your Experience</label>
                                <div style={{ position: "relative" }}>
                                    <textarea
                                        placeholder="Add your Experience "
                                        name='experience'
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className='proemailreqvest'
                                        rows='5' cols='20px'
                                        style={{ padding: "15px" }} ></textarea>
                                    {errors.experience && <p className="error-text">{errors.experience}</p>}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label className='proname'>Add Training History</label>
                                <div style={{ position: "relative" }}>
                                    <textarea
                                        type='text'
                                        name='trainingHistory'
                                        value={formData.trainingHistory}
                                        onChange={handleChange}
                                        placeholder='Add Training History'
                                        className='proemailreqvest'
                                        style={{ padding: "15px" }}  ></textarea>
                                    {errors.trainingHistory && <p className="error-text">{errors.trainingHistory}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='proname'>Add your Certifications</label>
                                <div style={{ position: "relative" }}>
                                    <textarea
                                        placeholder='Add your Certifications'
                                        name='certifications'
                                        value={formData.certifications}
                                        onChange={handleChange}
                                        className='proemailreqvest'
                                        style={{ padding: "15px" }}  ></textarea>
                                    {errors.certifications && <p className="error-text">{errors.certifications}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='rhirdfilddate'>
                            <div>
                                <label className='proname'>Add Keywords</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type='text'
                                        name='keywords'
                                        value={formData.keywords}
                                        onChange={handleChange}
                                        placeholder='Add Keywords'
                                        className='proemailreqvest' />
                                    {errors.keywords && <p className="error-text">{errors.keywords}</p>}
                                </div>
                            </div>
                        </div>

                        <div className='rhirdfilddate'>
                            <div>
                                <label className='proname'>Upload ID Proof (Aadhar Card/Driving License/Instructor Certificate)</label>
                                <div className='fileuplodedoc'>
                                    <div className='fileuplode'>
                                        <IoMdCloudUpload className='myprocemera' />
                                        <p>Upload ID Proof (Aadhar Card/Driving License/Instructor Certificate) here</p>
                                    </div>
                                    <input type='file'
                                        name='idProof'
                                        onChange={handleChange}
                                    />
                                    {documentPreview && <a href={documentPreview} target="_blank" rel="noopener noreferrer">View Uploaded Document</a>}
                                    {errors.idProof && <p className="error-text">{errors.idProof}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hourly Rates.......................................... */}

                    <div className='Hourlyrates'>
                        <h2>Hourly Rates</h2>
                        <div>
                            <div>
                                <label className='proname' id='proname1'>Do you want to give first free session?</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type='text'
                                        name='hourlyRate'
                                        value={formData.hourlyRate}
                                        onChange={handleChange}
                                        placeholder='Add hourly rates here'
                                        className='proemailreqvest' style={{ padding: "15px" }} />
                                    {errors.hourlyRate && <p className="error-text">{errors.hourlyRate}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='proname'>Class Type for first free session (Online/Face-to-Face/Both)</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type='text'
                                        name='sessionType'
                                        value={formData.sessionType}
                                        onChange={handleChange}
                                        placeholder='eg. Online'
                                        className='proemailreqvest'
                                        style={{ padding: "15px" }} />
                                    {errors.sessionType && <p className="error-text">{errors.sessionType}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='proname'>Class Type for Private Lesson(Online/Face-to-Face/Both)</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type='text'
                                        name='privettypes'
                                        onChange={handleChange}
                                        value={formData.privettypes}
                                        placeholder='eg. Online'
                                        className='proemailreqvest'
                                        style={{ padding: "15px" }} />
                                    {errors.privateLessonRate && <p className="error-text">{errors.privateLessonRate}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='proname' id='proname2'>Add rate of Private Lesson (1-on-1)</label>
                                <div style={{ position: "relative" }}>
                                    <input type='text'
                                        name='privateLessonRate'
                                        placeholder='Add hourly rates here'
                                        onChange={handleChange}
                                        value={formData.privateLessonRate}
                                        className='proemailreqvest'
                                        style={{ padding: "15px" }} />
                                    {errors.privateLessonRate && <p className="error-text">{errors.privateLessonRate}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='savinfom'>
                        <Button text={'Save Info & Create Profile'} className="savrinfo" type="submit" />
                    </div>
                </form>
                <Modal show={showSuccessModal} onHide={closeSuccessModal} centered className='custom-modal'>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className='modelboddy'>
                        <div className="div3-warning3">
                            <div className="div2-warning2">
                                <div className="div-warning1">
                                    <BsCheckCircleFill className='sucsses' />
                                </div>
                            </div>
                        </div>
                        <h2>Profile Activated!</h2>
                        <p>You're Ready to Go! Instructor Profile Successfully Created. Start Crafting Classes, Educating Students, and Spreading Your Knowledge!</p>
                        <button className="btn-LogIn" title="Close" onClick={closeSuccessModal}>Okay, Thanks!</button>
                    </Modal.Body>
                </Modal>
            </div>
            <Footer />
        </div>
    );
}

export default MyProfile;