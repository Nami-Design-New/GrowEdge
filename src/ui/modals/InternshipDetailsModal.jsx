import { useState } from "react";
import { Modal } from "react-bootstrap";
import ApplyInternshipModal from "../modals/ApplyInternshipModal";

export default function InternshipDetailsModal({ show, setShow, internship }) {
  if (!internship) return null;

  const {
    title,
    company,
    location,
    description,
    type,
    duration,
    salary,
    startDate,
    remote,
    equity,
    industry,
    stage,
    size,
    founded,
    requirements = [],
    responsibilities = [],
  } = internship;

  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleApplyClick = () => {
    setShow(false);

    setTimeout(() => {
      setShowApplyModal(true);
    }, 300);
  };

  return (
    <>
      {/* ===== Internship Details Modal ===== */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="internship-modal"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="mx-3">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="mx-4">
          <div className="company-info mb-2">
            <strong>{company}</strong> • {location}
          </div>

          <div className="section mb-4">
            <h6>About the Role</h6>
            <p>{description}</p>
          </div>

          <div className="two-column">
            <div>
              <h6>Company Information</h6>
              <p>
                <strong>Industry:</strong> {industry} <br />
                <strong>Stage:</strong> {stage} <br />
                <strong>Size:</strong> {size} employees <br />
                <strong>Founded:</strong> {founded} <br />
                <strong>Website:</strong> techflow.ai
              </p>
            </div>

            <div>
              <h6>Internship Details</h6>
              <p>
                <strong>Type:</strong> {type} <br />
                <strong>Duration:</strong> {duration} <br />
                <strong>Stipend:</strong> {salary}/month <br />
                <strong>Start Date:</strong> {startDate} <br />
                <strong>Remote:</strong> {remote ? "Yes" : "No"} <br />
                <strong>Equity:</strong> {equity}
              </p>
            </div>
          </div>

          <div className="two-column mb-4">
            <div>
              <h6>Requirements</h6>
              <ul>
                {requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h6>Responsibilities</h6>
              <ul>
                {responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="btn-group">
            <button className="btn-danger" onClick={() => setShow(false)}>
              Close
            </button>
            <button className="btn-dark" onClick={handleApplyClick}>
              Apply Now
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* ===== Apply Modal ===== */}
      <ApplyInternshipModal
        show={showApplyModal}
        setShow={setShowApplyModal}
        internship={internship}
      />
    </>
  );
}
