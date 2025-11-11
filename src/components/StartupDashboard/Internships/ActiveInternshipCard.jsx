import { useNavigate } from "react-router";

export default function ActiveInternshipCard({ internship }) {
    const navigate = useNavigate();

  return (
    <div className="active-internship-card card-box">
      {/* Header */}
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center gap-2">
          <div className="icon">
            <i className="fa-regular fa-briefcase"></i>
          </div>
          <div>
            <h5 className="title">{internship.title}</h5>
            <div className="badges d-flex gap-1">
              <span className={`status-badge ${internship.status.toLowerCase()}`}>
                {internship.status}
              </span>
              <span className="type-badge">{internship.type}</span>
            </div>
          </div>
        </div>
        <div className="actions d-flex gap-2">
          <button
      className="view-btn"
      onClick={() => navigate(`/startup-dashboard/Internships/${internship.id}`)}
    >
      <i className="fa-regular fa-eye"></i> View
    </button>
          <button className="more-btn">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="details d-flex flex-wrap gap-3 mt-2">
        <span><i className="fa-regular fa-location-dot"></i> {internship.location}</span>
        <span><i className="fa-regular fa-clock"></i> {internship.duration}</span>
        <span><i className="fa-regular fa-dollar-sign"></i> {internship.salary}</span>
        <span><i className="fa-regular fa-calendar"></i> Deadline: {internship.deadline}</span>
      </div>

      {/* Description */}
      <p className="description mt-2">{internship.description}</p>

      {/* Stats */}
      <div className="stats d-flex justify-content-around mt-3">
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
