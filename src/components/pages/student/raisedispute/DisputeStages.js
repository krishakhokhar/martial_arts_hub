import React, { useState } from 'react';
import './DisputeStages.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { IoIosCloudUpload } from 'react-icons/io';
import { BsCheck } from 'react-icons/bs';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DisputeStages() {
  const [currentStage, setCurrentStage] = useState(1);

  // State for form fields
  const [disputeType, setDisputeType] = useState('');
  const [instructor, setInstructor] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [file, setFile] = useState(null);

  // State for errors
  const [errors, setErrors] = useState({});

  // State for Modal visibility
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Open Modal
  const handleShowSuccessModal = () => setShowSuccessModal(true);

  // Close Modal
  const closeSuccessModal = () => setShowSuccessModal(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!disputeType) newErrors.disputeType = 'Dispute type is required';
    if (!instructor) newErrors.instructor = 'Instructor selection is required';
    if (!selectedClass) newErrors.selectedClass = 'Class selection is required';
    if (!issueDescription || issueDescription.length < 20)
      newErrors.issueDescription = 'Issue description must be at least 20 characters';
    if (!file) newErrors.file = 'Please upload a file to support your claim';

    setErrors(newErrors);


    if (Object.keys(newErrors).length === 0) {
      handleShowSuccessModal();
      setFormSubmitted(true);


      setDisputeType('');
      setInstructor('');
      setSelectedClass('');
      setIssueDescription('');
      setFile(null);
    }
  };
   const navigate = useNavigate();
    const handleStageClick = () => {
      navigate('/Negotiation')
    }

  return (
    <div className={`container ${formSubmitted ? 'form-submitted' : ''}`}>
      <div className='newdisputes'>
        <h2>New Dispute</h2>
      </div>

      <div className="dispute-stages">
  {/* Stage 1 */}
  <div className='stage stage-1 '>
    <p className="stage-title">--: STAGE 1 :--</p>
    <p className="stage-name">IDENTIFY THE ISSUE</p>
  </div>
  <FaArrowAltCircleRight className="stageicone" />

  {/* Stage 2 */}
  <div className='stage stage-2' >
    <p className="stage-title">--: STAGE 2 :--</p>
    <p className="stage-name">NEGOTIATION</p>
  </div>
  <FaArrowAltCircleRight className="stageicone" />

  {/* Stage 3 */}
  <div className='stage stage-3 '>
    <p className="stage-title">--: STAGE 3 :--</p>
    <p className="stage-name">ARBITRATION</p>
  </div>
</div>

      <div className='issue'>
        <h5>Stage 1 - Identify the issue</h5>
        <p><RiVerifiedBadgeFill /> <b>Review Transaction Details:</b> Check the transaction or service in question for any discrepancies or issues.</p>
        <p><RiVerifiedBadgeFill /> <b>Gather Evidence:</b> Collect relevant documents, receipts, screenshots, or any other evidence that supports your claim.</p>
        <p><RiVerifiedBadgeFill /> <b>Describe the Problem:</b> Clearly outline the issue, including dates, amounts, and specific problems encountered.</p>
        <p><RiVerifiedBadgeFill /> <b>Submit the Form:</b> Complete the "Raise Dispute" form with all the gathered information and submit it for review.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='row filldata'>
          {/* Dispute Type */}
          <div className='col-md-4 disputess'>
            <label>Select type of Dispute</label><br />
            <input
              type='text'
              placeholder='--Select--'
              value={disputeType}
              onChange={(e) => setDisputeType(e.target.value)}
            /><br />
            {errors.disputeType && <span className="error">{errors.disputeType}</span>}
          </div>

          {/* Instructor Selection */}
          <div className='col-md-4 disputess'>
            <label>Select Instructor to Dispute</label><br />
            <input
              type='text'
              placeholder='--Select--'
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
            /><br />
            {errors.instructor && <span className="error">{errors.instructor}</span>}
          </div>

          {/* Class Selection */}
          <div className='col-md-4 disputess'>
            <label>Select Class</label><br />
            <input
              type='text'
              placeholder='--Select--'
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            /><br />
            {errors.selectedClass && <span className="error">{errors.selectedClass}</span>}
          </div>

          {/* Issue Description */}
          <div className='col-md-6 disputess'>
            <label>Please describe in detail about raising dispute</label><br />
            <textarea
              placeholder='Write Your issue here'
              cols='80'
              rows='7'
              className='issustage'
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
            /><br />
            {errors.issueDescription && <span className="error">{errors.issueDescription}</span>}
          </div>

          {/* File Upload */}
          <div className="col-md-6 disputess">
            <label className="upload-label">
              Please add evidence (screenshots, documents, receipts) that supports your claim.
            </label><br />
            <label htmlFor="file-upload" className="upload-container">
              <input
                type="file"
                id="file-upload"
                className="file-input"
                onChange={(e) => setFile(e.target.files[0])}
              /><br />
              <div className="upload-content">
                <IoIosCloudUpload className="upload-icon" />
                <p className="upload-text">Upload screenshots, documents, receipts</p>
              </div>
            </label><br />
            {errors.file && <span className="error">{errors.file}</span>}
          </div>

          {/* Submit Button */}
          <div className='submitdisputes'>
            <button type="submit">Submit Dispute</button>
          </div>
        </div>
      </form>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={closeSuccessModal} centered className="custom-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="modelboddy">
          <div className="div3-warning3">
            <div className="div2-warning2">
              <div className="div-warning1">
               <BsCheck className='sucsses' />
              </div>
            </div>
          </div>
          <h2>Dispute Raised!</h2>
          <p>Your dispute has been successfully submitted. Our team will review the details and contact you within 48 hours. Thank you for your patience and understanding.</p>
          <button className="btn-LogIn" title="Close" onClick={handleStageClick}>
            Okay!
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisputeStages;
