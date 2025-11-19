import { useState } from "react";
import InternshipDetailsModal from "../modals/InternshipDetailsModal";
import ApplyInternshipModal from "../modals/ApplyInternshipModal";
import { useTranslation } from "react-i18next";

export default function InternshipCard({
  
  title,
  company,
  funding,
  location,
  salary,
  duration,
  description,
  skills,
  industry,
  size,
  deadline,
  type,
}) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
    const { t } = useTranslation();

  const internship = {
    title,
    company,
    funding,
    location,
    salary,
    duration,
    description,
    skills: skills || [],
    industry,
    size,
    deadline,
    type,

    //Requirements
    requirements: [
      "Currently pursuing CS/related degree",
      "2+ years programming experience",
      "Knowledge of React and Node.js",
    ],

    // Responsibilities
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with product team on new features",
      "Write clean, testable code",
      "Participate in code reviews",
    ],

    // more  details   
    startDate: "6/1/2024",
    remote: true,
    equity: "Included",
    stage: "Series A",
    founded: "2022",
    website: "techflow.ai",
  };

  return (
    <div className="internship-card">
      {/* ===== Header ===== */}
      <div className="internship-card__header">
        <h5>{title}</h5>
        <span className={`badge ${type === "full-time" ? "full" : "part"}`}>
          {type}
        </span>
      </div>

      {/* ===== Company Info ===== */}
      <div className="internship-card__company">
        <strong>{company}</strong>
        <span className="funding">{funding}</span>
      </div>

      {/* ===== Details ===== */}
      <div className="internship-card__details">
        <span>
          <i className="fa-solid fa-location-dot"></i> {location}
        </span>
        <span>
          <i className="fa-solid fa-dollar-sign"></i> {salary}/month
        </span>
        <span>
          <i className="fa-regular fa-clock"></i> {duration}
        </span>
      </div>

      {/* ===== Description ===== */}
      <p className="internship-card__desc">{description}</p>

      {/* ===== Skills ===== */}
      <div className="internship-card__skills">
        <h6>Skills Required</h6>
        <div className="tags">
          {skills.map((skill, i) => (
            <span key={i} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div className="internship-card__footer">
        <p>
          Industry: {industry}
          <br />
          Company Size: {size}
          <br />
          Application Deadline: {deadline}
        </p>

        <div className="btn-group">
          <button className="btn-dark"onClick={() => setShowDetailsModal(true)}>
            <i className="fa-regular fa-eye"></i> {t("startupInternships.details_btn")} 
          </button>
          <button className="btn-outline"  onClick={() => setShowApplyModal(true)}>
            {t("startupInternships.apply_btn")} 
          </button>
        </div>
      </div>

      {/* ===== Details Modal ===== */}
      <InternshipDetailsModal
        show={showDetailsModal}
        setShow={setShowDetailsModal}
        internship={internship}
      />

      {/* ===== Apply Modal ===== */}
      <ApplyInternshipModal
        show={showApplyModal}
        setShow={setShowApplyModal}
        internship={internship}
      />
    </div>
  );
}
