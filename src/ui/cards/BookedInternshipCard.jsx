// import React from "react";

export default function BookedInternship({ title, company, startDate, location }) {
  return (
    <div className="booked-internship-card card shadow-sm p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">{title}</h5>
        <span className="badge bg-success">Booked</span>
      </div>

      <p className="text-muted mb-2">
        <i className="fa-solid fa-building me-2"></i>
       company name : <strong>{company}</strong> 
      </p>

      <p className="text-muted mb-2">
        <i className="fa-solid fa-calendar-days me-2"></i>
       Date: <strong> {startDate} </strong>
      </p>

      <p className="text-muted mb-3">
        <i className="fa-solid fa-location-dot me-2"></i>
       location:<strong> {location} </strong>
      </p>

    </div>
  );
}
