import { useNavigate } from "react-router";

export default function ActiveInternshipCard({ internship }) {
  const navigate = useNavigate();

  return (
    <div className="active-internship-card">
      {/* Header */}
      <div className="card-header">
        <div className="left">
          <div className="icon">
            <i className="fa-regular fa-briefcase"></i>
          </div>
          <div className="info">
            <h5 className="title">{internship.title}</h5>
            <div className="badges">
              <span
                className={`status-badge ${internship.status.toLowerCase()}`}
              >
                {internship.status}
              </span>
              <span className="type-badge">{internship.type}</span>
            </div>
          </div>
        </div>

        <div className="actions">
          <button
            className="view-btn"
            onClick={() =>
              navigate(`/startup-dashboard/Internships/${internship.id}`)
            }
          >
            <i className="fa-regular fa-eye"></i> View
          </button>
          {/* <button className="more-btn">
            <i className="fa-solid fa-ellipsis"></i>
          </button> */}
        </div>
      </div>

      {/* Details */}
      <div className="details">
        <span>
          <i className="fa-regular fa-location-dot"></i> {internship.location}
        </span>
        <span>
          <i className="fa-regular fa-clock"></i> {internship.duration}
        </span>
        <span>
          <i className="fa-regular fa-dollar-sign"></i> {internship.salary}
        </span>
        <span>
          <i className="fa-regular fa-calendar"></i> Deadline:{" "}
          {internship.deadline}
        </span>
      </div>

      {/* Description */}
      <p className="description">{internship.description}</p>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <strong>{internship.applications}</strong>
          <span>Applications</span>
        </div>
        <div className="stat">
          <strong>{internship.views}</strong>
          <span>Views</span>
        </div>
        <div className="stat">
          <strong>{internship.hired}</strong>
          <span>Hired</span>
        </div>
      </div>
    </div>
  );
}
