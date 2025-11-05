// import React from "react";

export default function CompletedSessionCard({
  clientName,
  status,
  topic,
  rating,
  date,
  time,
  duration,
  price,
  notes,
  nextSteps,
  feedback,
}) {
  return (
    <div className="completed-session-card">
      {/* === Header === */}
      <div className="header">
        <div className="left">
          <div className="icon">
            <i className="fa-solid fa-check-circle"></i>
          </div>
          <div className="info">
            <h6 className="client-name">{clientName}</h6>
            <div className="tags">
              <span className="status completed">{status}</span>
              <span className="type">{topic}</span>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <i
                key={i}
                className={`fa-star ${i < rating ? "fa-solid" : "fa-regular"}`}
              ></i>
            ))}
          </div>
        
        </div>
      </div>

      {/* === Meta === */}
      <div className="meta">
        <span>
          <i className="fa-regular fa-calendar"></i> {date}
        </span>
        <span>
          <i className="fa-regular fa-clock"></i> {time} ({duration})
        </span>
        <span className="price">{price}</span>
      </div>

      <p className="session-summary">Create 6-month career development plan</p>

      {/* === Session Notes === */}
      <div className="section notes">
        <h6>Session Notes</h6>
        <p>{notes}</p>
      </div>

      {/* === Next Steps === */}
      <div className="section next-steps">
        <h6>Next Steps</h6>
        <ul>
          {nextSteps.map((step, index) => (
            <li key={index}>
              <i className="fa-solid fa-check"></i> {step}
            </li>
          ))}
        </ul>
      </div>

      {/* === Client Feedback === */}
      <div className="section feedback">
        <h6>Client Feedback</h6>
        <p className="feedback-text">{feedback}</p>
      </div>
    </div>
  );
}
