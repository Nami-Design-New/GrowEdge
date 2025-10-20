import React, { useState } from "react";
import BookingModal from "../modals/BookingModal";
import { useTranslation } from "react-i18next";

export default function SessionCard({
  title,
  category,
  coach,
  role,
  rating,
  reviews,
  duration,
  price,
  description,
  tags,
  mode,
  next,
  spots,
}) {
  const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

  return (
    <>
      <div className="session-card">
        {/* ===== Header ===== */}
        <div className="card-header">
          <p>{title}</p>
          <span className="category">{category}</span>
        </div>

        {/* ===== Coach Info ===== */}
        <div className="coach-info">
          <div className="avatar">{coach[0]}</div>
          <div>
            <h6>{coach}</h6>
            <p className="role">{role}</p>
          </div>
        </div>

        {/* ===== Details ===== */}
        <div className="details">
          <p className="info-line">
            <i className="fa-solid fa-star"></i> <span>{rating}</span> ({reviews})
            &nbsp;&nbsp;
            <i className="fa-regular fa-clock"></i> <span>{duration}</span>
            &nbsp;&nbsp;
            <i className="fa-solid fa-money-bill-wave"></i> <span>{price}</span>
          </p>
          <p className="desc">{description}</p>
        </div>

        {/* ===== Tags ===== */}
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <div className="footer">
          <p className="mode">
            <i className="fa-solid fa-location-dot"></i> {mode}
          </p>
          <p className="next">Next available: {next}</p>
          <p className="spots">{spots} spots left</p>
          <button className="book-btn" onClick={() => setShowModal(true)}>
            {t("careerCoaching.apply_btn")} 
          </button>
        </div>
      </div>

      {/* ===== Booking Modal ===== */}
      <BookingModal show={showModal} setShow={setShowModal} />
    </>
  );
}
