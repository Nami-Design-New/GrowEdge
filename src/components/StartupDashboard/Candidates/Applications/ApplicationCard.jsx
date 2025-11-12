export default function ApplicationCard({ candidate }) {
  return (
    <div className="application-card">
      <div className="application-main">
        <div className="avatar">{candidate.name[0]}</div>
        <div className="application-details">
          <div className="top">
            <h6 className="name">{candidate.name}</h6>
            <span className={`status-badge ${candidate.status}`}>
              {candidate.status}
            </span>
            <span className="rating">
              <i className="fa-solid fa-star"></i> {candidate.rating}
            </span>
          </div>
          <div className="meta">
            <span><i className="fa-solid fa-graduation-cap"></i> {candidate.university}</span>
            <span><i className="fa-solid fa-briefcase"></i> {candidate.position}</span>
            <span><i className="fa-solid fa-location-dot"></i> {candidate.location}</span>
            <span><i className="fa-solid fa-calendar"></i> Applied {candidate.applied}</span>
          </div>
          <div className="skills">
            {candidate.skills.map((skill, i) => (
              <span key={i} className="skill">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="application-actions">
        <button className="btn review-btn">
          <i className="fa-regular fa-eye"></i> Review
        </button>
      </div>
    </div>
  );
}
